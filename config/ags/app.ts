import { App } from "astal/gtk3"
import style from "./scss/main.scss"
import Bar from "./js/bar/Bar.tsx"

App.start({
    css: style,
    main() {
        App.get_monitors().map(Bar)
    },
})
