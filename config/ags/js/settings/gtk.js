import App from 'resource:///com/github/Aylur/ags/app.js';
import options from '../options.js';
import gtk3 from './gtk3.js';
import gtk4 from './gtk4.js';
import { writeFileSync, execAsync } from 'resource:///com/github/Aylur/ags/utils.js';

function getColor(scss) {
  // Split the string into segments (with slight modification)
  const segments = scss.split(/([^\s\(\)\[\]:]+|[^\s\(\)\[\]]+:)/).filter(Boolean);

  let colorString = "";
  for (const segment of segments) {
    if (segment.includes('$') && !segment.endsWith(':')) {
      // Handle SCSS variable, but not ending with colon
      const variableName = segment.replace('$', '');
      const resolvedOption = options.list().find(opt => opt.scss === variableName);

      if (resolvedOption) {
        // Check for circular dependencies before recursion (optional)
        if (isCircularDependency(scss, resolvedOption.value)) {
          throw new Error(`Circular dependency detected in color variables: ${scss}`);
        }

        // Resolve nested variables recursively (modified)
        const resolvedValue = getColor(resolvedOption.value);
        colorString += resolvedValue;
      } else {
        // Variable not found, treat as plain text
        colorString += segment;
      }
    } else {
      // Plain text, colon, or nested structure, add directly
      colorString += segment;
    }
  }

  return colorString || null; // Return null if no color is found
}
// Helper function to detect circular dependencies (optional)
function isCircularDependency(currentVar, potentialVar) {
  if (!potentialVar.includes('$')) {
    return false;
  }

  const nextVarName = potentialVar.replace('$', '');
  const nextOption = options.list().find(opt => opt.scss === nextVarName);

  if (!nextOption) {
    return false;
  }

  return (nextOption.value === currentVar) || isCircularDependency(currentVar, nextOption.value, options);
}

export function reloadGtk() {
    options.color.red.connect('changed', gtkupdate);
    options.color.green.connect('changed', gtkupdate);
    options.color.yellow.connect('changed', gtkupdate);
    options.color.blue.connect('changed', gtkupdate);
    options.color.magenta.connect('changed', gtkupdate);
    options.color.teal.connect('changed', gtkupdate);
    options.color.orange.connect('changed', gtkupdate);
    options.theme.accent.accent.connect('changed', gtkupdate);
    options.theme.accent.fg.connect('changed', gtkupdate);
    options.theme.fg.connect('changed', gtkupdate);
    options.theme.bg.connect('changed', gtkupdate);
    options.misc.gtk.connect('changed', gtkupdate);
    options.misc.gtkIcons.connect('changed', gtkupdate);
    options.misc.cursor.connect('changed', gtkupdate);
    options.theme.scheme.connect('changed', gtkupdate);
}
function gtkupdate() {
    const g = options.misc.gtk.value
    const gi = options.misc.gtkIcons.value
    const c = options.misc.cursor.value
    const red = getColor(options.color.red.value);
    const green = getColor(options.color.green.value);
    const yellow = getColor(options.color.yellow.value);
    const blue = getColor(options.color.blue.value);
    const magenta = getColor(options.color.magenta.value);
    const teal = getColor(options.color.teal.value);
    const orange = getColor(options.color.orange.value);
    const accent = getColor(options.theme.accent.accent.value);
    const accentfg = getColor(options.theme.accent.fg.value);
    const fg = getColor(options.theme.fg.value);
    const bg = getColor(options.theme.bg.value);
    writeFileSync(gtk4(red, green, yellow, blue, magenta, teal, orange, accent, accentfg, fg, bg), '/tmp/ags/gtk4')
    writeFileSync(gtk3(red, green, yellow, blue, magenta, teal, orange, accent, accentfg, fg, bg), '/tmp/ags/gtk3')
    if ( options.theme.scheme.value == 'dark' ) {
	execAsync(`gtkthemes -d -U -T "${g}" -I "${gi}" -C "${c}" &`)
    } else {
	execAsync(`gtkthemes -l -U -T "${g}" -I "${gi}" -C "${c}" &`)
    }
}
