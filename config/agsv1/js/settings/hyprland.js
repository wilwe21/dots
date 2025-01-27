import App from 'resource:///com/github/Aylur/ags/app.js';
import Hyprland from 'resource:///com/github/Aylur/ags/service/hyprland.js';
import options from '../options.js';
import { readFile, writeFile, writeFileSync, exec } from 'resource:///com/github/Aylur/ags/utils.js';
import { getColor } from '../utils.js';

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

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
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
    const trail_color = getColor(options.hypr.trail_color.value);
    const kitt_opacity = options.kitty.opacity.value;
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
        `decoration:shadow:enabled ${drop_shadow ? 'yes' : 'no'}`,
		`plugin:hyprtrails:color rgba(${trail_color.replace("#", '')}ff)`,
    );
    sendBatch(batch)
    sleep(500).then(() => sendBatch(batch));
    sleep(1000).then(() => sendBatch(batch));
}
