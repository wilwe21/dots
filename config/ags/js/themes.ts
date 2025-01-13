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
				"colors.red": "#F38BA8",
	    	"colors.green": "#A6E3A1",
	    	"colors.yellow": "#F9E2AF",
	    	"colors.blue": "#89B4FA",
	    	"ocolor.temp": "#F38BA8",
	    	"ocolor.download": "#A6E3A1",
	    	"ocolor.cpu": "#F9E2AF",
	    	"ocolor.upload": "#89B4FA",
	    	"colors.magenta": "#CBA6F7",
	    	"colors.teal": "#94E2D5",
	    	"colors.orange": "#FAB387",
	    	"ocolor.play": "$green",
	    	"colors.bg": "#181825",
	    	"colors.fg": "#CDD6F4",
	    	"colors.accent": "#CBA6F7",
				"hypr.active_border": "rgba(CBA6F7FF) rgba(CDD6F4FF) rgba(CBA6F7FF) 45deg",
				"wallpaper": "/home/wilwe/.hyprland.conf/wallpapers/main.jpg"
		}),
]
