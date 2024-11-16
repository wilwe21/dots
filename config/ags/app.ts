import { App } from "astal/gtk3"
//import { init } from "./js/settings/setup.ts"
//import style from "/tmp/ags/scss/style.css"
import style from "./scss/main.scss"
import Bar from "./js/bar/Bar.tsx"
import Applauncher from "./js/applauncher/appl.tsx"
import QuickSettings from "./js/quicksettings/quick.tsx"

//init()

App.start({
    css: style,
    main() {
        Applauncher(),
				QuickSettings(),
        App.get_monitors().map(Bar)
    },
})
