import GLib from "gi://GLib"
import { Variable } from "astal"

const HOME = GLib.getenv("HOME")

export default {
		cacheDir: `${HOME}/.cache/ags`,
		confDir: `${SRC}`
}

export const uptime = Variable("").poll(60000, ['cat', '/proc/uptime'], line => {
		const uptime = Number.parseInt(line.split('.')[0]) / 60;
		if (uptime > 18 * 60)
		    return 'Go Sleep';
		
		const h = Math.floor(uptime / 60);
		const s = Math.floor(uptime % 60);
		return `${h}:${s < 10 ? '0' + s : s}`;
})

export const cpu = Variable("0").poll(2500, ["/home/wilwe/.hyprland.conf/scripts/cpu"], n => String(n))

export const temp = Variable("0%").poll(2500, ["cat", "/sys/class/thermal/thermal_zone0/temp"], n => 
		String(Number.parseInt(n) / 1000)
)

export const download = Variable("0B/s").poll(2500, ["/home/wilwe/.hyprland.conf/scripts/rx"], n => 
		String(n)
)

export const upload = Variable("0B/s").poll(2500, ["/home/wilwe/.hyprland.conf/scripts/tx"], n => 
		String(n)
)
