import App from 'resource:///com/github/Aylur/ags/app.js';
import Hyprland from 'resource:///com/github/Aylur/ags/service/hyprland.js';
import options from '../options.js';
import { readFile, writeFile } from 'resource:///com/github/Aylur/ags/utils.js';

const noIgnorealpha = ['verification', 'powermenu', 'lockscreen'];

/** @param {Array<string>} batch */
function sendBatch(batch) {
    const cmd = batch
        .filter(x => !!x)
        .map(x => `keyword ${x}`)
        .join('; ');

    Hyprland.sendMessage(`[[BATCH]]/${cmd}`).then(print)
        .catch(err => console.error(`Hyprland.sendMessage: ${err.message}`));
}

function getColor(scss) {
  // Base case: Handle hex colors directly
  if (scss.includes('#')) {
    return scss;
  }

  // Recursive case: Handle variables and nested variables
  if (scss.includes('$')) {
    const variableName = scss.replace('$', '');
    const resolvedOption = options.list().find(opt => opt.scss === variableName);

    if (resolvedOption) {
      // Check for circular dependencies before recursion
      if (isCircularDependency(scss, resolvedOption.value)) {
        throw new Error(`Circular dependency detected in color variables: ${scss}`);
      }

      // Resolve nested variables recursively
      const resolvedValue = getColor(resolvedOption.value);
      return resolvedValue;
    }
  }

  // Fallback for undefined variables
  return null; // Or throw an error if undefined variables are not allowed
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

export function hyprlandInit() {
    if (readFile('/tmp/ags/hyprland-init'))
        return;

    sendBatch(Array.from(App.windows).flatMap(([name]) => [
        `layerrule blur, ${name}`,
        noIgnorealpha.some(skip => name.includes(skip))
            ? '' : `layerrule ignorealpha 0.6, ${name}`,
    ]));

    writeFile('init', '/tmp/ags/hyprland-init');
    setupHyprland();
}

export async function setupHyprland() {
    const wm_gaps = options.hypr.wm_gaps.value;
    const border_width = options.border.width.value;
    const radii = options.radii.value;
    const drop_shadow = options.desktop.drop_shadow.value;
    const bar_style = options.bar.style.value;
    const bar_pos = options.bar.position.value;
    const inactive_border = options.hypr.inactive_border.value;
    const active_border = options.hypr.active_border.value;

    const accent = getColor(options.theme.accent.accent.value);

    const batch = [];

    JSON.parse(await Hyprland.sendMessage('j/monitors')).forEach(({ name }) => {
        const v = bar_pos === 'top' ? `-${wm_gaps},0,0,0` : `0,-${wm_gaps},0,0`;
        if (bar_style !== 'normal')
            batch.push(`monitor ${name},addreserved,${v}`);
        else
            batch.push(`monitor ${name},addreserved,0,0,0,0`);
    });

    batch.push(
        `general:border_size ${border_width}`,
        `general:gaps_out ${wm_gaps}`,
        `general:gaps_in ${wm_gaps}`,
        `general:col.active_border ${active_border}`,
        `general:col.inactive_border ${inactive_border}`,
        `decoration:rounding ${radii}`,
        `decoration:drop_shadow ${drop_shadow ? 'yes' : 'no'}`,
    );

    sendBatch(batch);
}
