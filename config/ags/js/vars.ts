import GLib from "gi://GLib"
import { bind, Variable } from "astal"
import { exec } from "astal"

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

export const volumeCheck = Variable(true).poll(2500, ["pactl", "get-sink-volume", "@DEFAULT_SINK@"], n => {
		var fl = String(n.replaceAll("%", "").split(",   ")[0].split(" / ")[1]).trim()
		var fr = String(n.replaceAll("%", "").split(",   ")[1].split(" / ")[1]).trim()
		if (fl !== fr) {
				return false;
		}
		return true
})

export const volume = Variable(0).poll(20, ["pactl", "get-sink-volume", "@DEFAULT_SINK@"], n => Number(String(n.replaceAll("%", "").split(",   ")[0].split(" / ")[1]).trim()))

export const mediaPlayer = Variable(0)
export const mediaPlayerMax = Variable(0)

export const month = Variable("01").poll(60000, ["date", "+%m"], n => `${n}`)
export const year = Variable("2025").poll(60000, ["date", "+%Y"], n => `${n}`)

export function calendar(month, year) {
		return exec(["cal", "-m", month, year])
}

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
