import { App } from "astal/gtk3"
import { init } from "./js/settings/setup.ts"
import style from "/tmp/ags/scss/style.css"
import Bar from "./js/bar/Bar.tsx"
import Applauncher from "./js/applauncher/appl.tsx"
import QuickSettings from "./js/quicksettings/quick.tsx"
import themes from "./js/themes.ts"
import { setTheme } from './js/settings/theme.ts'

init()

App.start({
    css: style,
    main() {
        Applauncher(),
				QuickSettings(),
        App.get_monitors().map(Bar)
    },
		requestHandler(request: string, res: (response: any) => void) {
				const t = themes.find(t => t.name === request.replace("settheme ",""))
				if (t) {
						setTheme(t.name)
						res(`theme set to ${t.name}`)
				}
		}
})
