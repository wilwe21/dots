import App from 'resource:///com/github/Aylur/ags/app.js';
import options from '../options.js';
import { readFile, writeFileSync, execAsync } from 'resource:///com/github/Aylur/ags/utils.js';

export async function reloadStarship() {
    options.starship.format.connect('changed', starship);
    options.starship.username.bg.connect('changed', starship);
    options.starship.username.fg.connect('changed', starship);
    options.starship.directory.bg.connect('changed', starship);
    options.starship.directory.fg.connect('changed', starship);
    options.starship.time.bg.connect('changed', starship);
    options.starship.time.fg.connect('changed', starship);
    options.starship.ldec.connect('changed', starship);
    options.starship.rdec.connect('changed', starship);
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

export function starship() {
    const theme = options.starship.format.value;
    const ldec = options.starship.ldec.value;
    const rdec = options.starship.rdec.value;
    const ubg = getColor(options.starship.username.bg.value);
    const ufg = getColor(options.starship.username.fg.value);
    const dbg = getColor(options.starship.directory.bg.value);
    const dfg = getColor(options.starship.directory.fg.value);
    const tbg = getColor(options.starship.time.bg.value);
    const tfg = getColor(options.starship.time.fg.value);
    const conf = `#made by wilwe
format = """
${theme}
"""
command_timeout = 5000
# Disable the blank line at the start of the prompt
add_newline = true

# You can also replace your username with a neat symbol like  to save some space
[username]
show_always = true
style_user = "bg:${ubg} fg:${ufg}"
format = '[${ldec}](${ubg})[$user ]($style)[${rdec}](${ubg})'

[directory]
style = "bg:${dbg} fg:${dfg}"
format = "[${ldec}](${dbg})[ $path ]($style)[${rdec}](${dbg})"
truncation_length = 3
truncation_symbol = "…/"

[time]
disabled = false
time_format = "%R" # Hour:Minute Format
style = "bg:${tbg} fg:${tfg}"
format = '[${ldec}](${tbg})[ $time ]($style)[${rdec}](${tbg})'`
    writeFileSync(String(conf), '/tmp/ags/starship.conf')
    Utils.execAsync(['hyprctl', 'dispatch', 'exec', '/home/wilwe/.hyprland.conf/scripts/theme -p'])
}
