import options from '../options.js';
import { getColor } from '../utils.js';
import { writeFileSync } from 'resource:///com/github/Aylur/ags/utils.js';

export async function reloadCava() {
	options.cava.method.connect('changed', Cava)
	options.cava.source.connect('changed', Cava)
	options.cava.foreground.connect('changed', Cava)
}

export function Cava() {
	const fg = getColor(options.cava.foreground.value)
	const meth = options.cava.method.value
	const src = options.cava.source.value
	const conf = `[input]
method = ${meth}
source = ${src}
[color]
foreground = '${fg}'`
	writeFileSync(String(conf), '/home/wilwe/.config/cava/config')
}
