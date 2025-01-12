import options from '../options.ts';
import gtk3 from './gtk3.ts';
import gtk4 from './gtk4.ts';
import { writeFileAsync } from 'astal/file';
import { execAsync } from "astal/process";
import { getColor } from "../utils.ts";

export function reloadGtk() {
    options.colors.red.connect('changed', gtkupdate);
    options.colors.green.connect('changed', gtkupdate);
    options.colors.yellow.connect('changed', gtkupdate);
    options.colors.blue.connect('changed', gtkupdate);
    options.colors.magenta.connect('changed', gtkupdate);
    options.colors.teal.connect('changed', gtkupdate);
    options.colors.orange.connect('changed', gtkupdate);
    options.colors.accent.connect('changed', gtkupdate);
    options.colors.fg.connect('changed', gtkupdate);
    options.colors.fg.connect('changed', gtkupdate);
    options.colors.bg.connect('changed', gtkupdate);
    options.misc.gtk.connect('changed', gtkupdate);
    options.misc.gtkIcons.connect('changed', gtkupdate);
    options.misc.cursor.connect('changed', gtkupdate);
    options.colors.scheme.connect('changed', gtkupdate);
}
function gtkupdate() {
    const g = options.misc.gtk.value
    const gi = options.misc.gtkIcons.value
    const c = options.misc.cursor.value
    const red = getColor(options.colors.red.value);
    const green = getColor(options.colors.green.value);
    const yellow = getColor(options.colors.yellow.value);
    const blue = getColor(options.colors.blue.value);
    const magenta = getColor(options.colors.magenta.value);
    const teal = getColor(options.colors.teal.value);
    const orange = getColor(options.colors.orange.value);
    const accent = getColor(options.colors.accent.value);
    const accentfg = getColor(options.colors.accentfg.value);
    const fg = getColor(options.colors.fg.value);
    const bg = getColor(options.colors.bg.value);
    writeFileAsync(gtk4(red, green, yellow, blue, magenta, teal, orange, accent, accentfg, fg, bg), '/tmp/ags/gtk4')
    writeFileAsync(gtk3(red, green, yellow, blue, magenta, teal, orange, accent, accentfg, fg, bg), '/tmp/ags/gtk3')
    if ( options.colors.scheme.value == 'dark' ) {
	execAsync(`gtkthemes -d -U -T "${g}" -I "${gi}" -C "${c}" &`)
    } else {
	execAsync(`gtkthemes -l -U -T "${g}" -I "${gi}" -C "${c}" &`)
    }
}
