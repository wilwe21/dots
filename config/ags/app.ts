import { App } from "astal/gtk3"
import { init } from "./js/settings/setup.ts"
import style from "/tmp/ags/scss/style.css"
import Bar from "./js/bar/Bar.tsx"
import Applauncher from "./js/applauncher/appl.tsx"
import ControllCenter from "./js/quicksettings/ControllCenter.tsx"
import Dash from "./js/dashboard/dash.tsx"
import Over from "./js/overview/Overview.tsx"
//import themes from "./js/themes.ts"
//import { setTheme } from './js/settings/theme.ts'
//import { kitty } from './js/settings/kitty.ts'
//import { vim } from './js/settings/vim.ts'
//import { gtkupdate } from './js/settings/gtk.ts'
//import { starship } from './js/settings/starship.ts'
//import { sH } from './js/settings/hyprland.ts'

init()

App.start({
    css: style,
    main() {
				ControllCenter(),
        Applauncher(),
				Dash(),
				Over(),
        App.get_monitors().map(Bar)
    }, 
		requestHandler(request: string, res: (response: any) => void) {
				//if (request.startsWith("reload")) {
				//		if (request.endsWith("kitty")) {
				//				kitty()
				//				res(`reloaded kitty`)
				//		}
				//		if (request.endsWith("vim")) {
				//				vim()
				//				res(`reloaded vim`)
				//		}
				//		if (request.endsWith("starship")) {
				//				starship()
				//				res(`reloaded starship`)
				//		}
				//		if (request.endsWith("gtk")) {
				//				gtkupdate()
				//				res(`reloaded gtk`)
				//		}
				//		if (request.endsWith("hyprland")) {
				//				sH()
				//				res(`reloaded hyprland`)
				//		}
				//}
				//const t = themes.find(t => t.name === request.replace("settheme ",""))
				//if (t) {
				//		setTheme(t.name)
				//		res(`theme set to ${t.name}`)
				//}
		}
})
