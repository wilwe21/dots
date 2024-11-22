import { App } from "astal/gtk3"
import Hyprland from "gi://AstalHyprland"
import options from "../options.ts"
import { readFile, writeFile, writeFileSync } from "astal/file"
import { getColor } from '../utils.ts'

const noIgnorealpha = ['verification', 'powermenu', 'lockscreen'];

const hypr = Hyprland.get_default()

/** @param {Array<string>} batch */
function sendBatch(batch) {
    const cmd = batch
        .filter(x => !!x)
        .map(x => `keyword ${x}`)
        .join('; ');

    hypr.message(`[[BATCH]]/${cmd}`).then(print)
        .catch(err => console.error(`hypr.message:`));
}

export function hyprlandInit() {
    if (readFile('/tmp/ags/hyprland-init'))
        return;

    sendBatch(Array.from(hypr.get_clients()).flatMap(([name]) => [
        `layerrule blur, ${name}`,
        noIgnorealpha.some(skip => name.includes(skip))
            ? '' : `layerrule ignorealpha 0.6, ${name}`,
    ]));

    writeFile('init', '/tmp/ags/hyprland-init');
    setupHyprland();
}

export function setupHyprland() {
	sH().catch(err => console.error(`Setuphyprland Error`))
}

export async function sH() {
    const wm_gaps = options.hypr.wm_gaps.value;
    const radii = options.radii.value;
    const drop_shadow = options.hypr.drop_shadow.value;
    const bar_pos = options.bar.position.value;
    const inactive_border = options.hypr.inactive_border.value;
    const active_border = options.hypr.active_border.value;
    const trail_color = getColor(options.hypr.trail_color.value);
    const accent = getColor(options.colors.accent.value);

    const batch = [];

    /*JSON.parse(await hypr.monitors()).forEach(({ name }) => {
				print("mon")
        const v = bar_pos === 'top' ? `-${wm_gaps},0,0,0` : `0,-${wm_gaps},0,0`;
        if (bar_style !== 'normal')
            batch.push(`monitor ${name},addreserved,${v}`);
        else
            batch.push(`monitor ${name},addreserved,0,0,0,0`);
    });*/

    batch.push(
        `general:gaps_out ${wm_gaps}`,
        `general:gaps_in ${wm_gaps}`,
        `general:col.active_border ${active_border}`,
        `general:col.inactive_border ${inactive_border}`,
        `decoration:rounding ${radii}`,
        `decoration:shadow:enabled ${drop_shadow ? 'yes' : 'no'}`,
				`plugin:hyprtrails:color rgb(${trail_color.replace("#", '')})`,
    );
    sendBatch(batch)
}
