import App from 'resource:///com/github/Aylur/ags/app.js';
import options from '../options.js';
import { readFile, writeFileSync, execAsync } from 'resource:///com/github/Aylur/ags/utils.js';

export async function reloadKitty() {
    options.kitty.font.family.connect('changed', kitty);
    options.kitty.font.size.connect('changed', kitty);
    options.kitty.cursor.color.connect('changed', kitty);
    options.kitty.cursor.text_color.connect('changed', kitty);
    options.kitty.cursor.shape.connect('changed', kitty);
    options.kitty.cursor.beam_thickness.connect('changed', kitty);
    options.kitty.cursor.underline_thickness.connect('changed', kitty);
    options.kitty.cursor.blink_interval.connect('changed', kitty);
    options.kitty.cursor.stop_blinking_after.connect('changed', kitty);
    options.kitty.scrollback.lines.connect('changed', kitty);
    options.kitty.scrollback.pager.connect('changed', kitty);
    options.kitty.scrollback.pager_history.connect('changed', kitty);
    options.kitty.scrollback.fill_enlarged_window.connect('changed', kitty);
    options.kitty.wheel_scroll.multiplier.connect('changed', kitty);
    options.kitty.wheel_scroll.min_lines.connect('changed', kitty);
    options.kitty.touch_scroll_multiplier.connect('changed', kitty);
    options.kitty.mouse_hide_wait.connect('changed', kitty);
    options.kitty.url.color.connect('changed', kitty);
    options.kitty.url.style.connect('changed', kitty);
    options.kitty.url.underline.connect('changed', kitty);
    options.kitty.color_scheme.fg.connect('changed', kitty);
    options.kitty.color_scheme.bg.connect('changed', kitty);
    options.kitty.color_scheme.bg_opacity.connect('changed', kitty);
    options.kitty.color_scheme.bg_blur.connect('changed', kitty);
    options.kitty.color_scheme.selection_fg.connect('changed', kitty);
    options.kitty.color_scheme.selection_bg.connect('changed', kitty);
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

export function kitty() {
    const kff = options.kitty.font.family.value
    const kfs = options.kitty.font.size.value
    const kcc = getColor(options.kitty.cursor.color.value)
    const kctc = getColor(options.kitty.cursor.text_color.value)
    const kcs = options.kitty.cursor.shape.value
    const kcbt = options.kitty.cursor.beam_thickness.value
    const kcut = options.kitty.cursor.underline_thickness.value
    const kcbi = options.kitty.cursor.blink_interval.value
    const kcsba = options.kitty.cursor.stop_blinking_after.value
    const ksl = options.kitty.scrollback.lines.value
    const ksp = options.kitty.scrollback.pager.value
    const ksph = options.kitty.scrollback.pager_history.value
    const ksfew = options.kitty.scrollback.fill_enlarged_window.value
    const kwsm = options.kitty.wheel_scroll.multiplier.value
    const kwsml = options.kitty.wheel_scroll.min_lines.value
    const ktsm = options.kitty.touch_scroll_multiplier.value
    const kmhw = options.kitty.mouse_hide_wait.value
    const kuc = getColor(options.kitty.url.color.value)
    const kus = options.kitty.url.style.value
    const kuu = options.kitty.url.underline.value
    const kcsf = getColor(options.kitty.color_scheme.fg.value)
    const kcsb = getColor(options.kitty.color_scheme.bg.value)
    const kcsbo = options.kitty.color_scheme.bg_opacity.value
    const kcsbb = options.kitty.color_scheme.bg_blur.value
    const kcssf = getColor(options.kitty.color_scheme.selection_fg.value)
    const kcssb = getColor(options.kitty.color_scheme.selection_bg.value)
    const conf = `#made by wilwe
font_family ${kff}
font_size ${kfs}
cursor ${kcc}
cursor_text_color ${kctc}
cursor_shape ${kcs}
cursor_beam_thickness ${kcbt}
cursor_underline_thickness ${kcut}
cursor_blink_interval ${kcbi}
cursor_stop_blinking_after ${kcsba}
scrollback_lines ${ksl}
scrollback_pager ${ksp}
scrollback_pager_history_size ${ksph}
scrollback_fill_enlarged_window ${ksfew}
wheel_scroll_multiplier ${kwsm}
wheel_scroll_min_lines ${kwsml}
touch_scroll_multiplier ${ktsm}
mouse_hide_wait ${kmhw}
url_color ${kuc}
url_style ${kus}
underline_hyperlinks ${kuu}
foreground ${kcsf}
background ${kcsb}
background_opacity ${kcsbo}
background_blur ${kcsbb}
selection_foreground ${kcssf}
selection_background ${kcssb}`
    writeFileSync(String(conf), '/tmp/ags/kitty.conf')
    Utils.execAsync(['hyprctl', 'dispatch', 'exec', '/home/wilwe/.hyprland.conf/scripts/theme -k'])
}
