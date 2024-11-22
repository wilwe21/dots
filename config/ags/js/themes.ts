import { Theme } from './settings/theme.ts'

export default [
		Theme({
				name: "dead",
				"bar.position": "top",
				"colors.bg": "#684A82",
				"colors.fg": "#371222",
				"colors.accent": "#770F2C",
				"ocolor.temp": "$fg-color",
				"ocolor.upload": "$fg-color",
				"ocolor.download": "$fg-color",
				"ocolor.cpu": "$fg-color",
				"ocolor.play": "$fg-color",
				"hypr.active_border": "rgba(A4576FFF) rgba(371222FF) rgba(684A82FF) 45deg",
				"wallpaper": "/home/wilwe/.hyprland.conf/wallpapers/dead.png"
		}),
		Theme({
				name: "skull",
				"bar.position": "top",
				"colors.bg": "#181825",
				"colors.fg": "#CDD6F4",
				"colors.accent": "#CBA6F7",
				"wallpaper": "/home/wilwe/.hyprland.conf/wallpapers/main.jpg"
		}),
]
