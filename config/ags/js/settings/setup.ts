import { App } from "astal/gtk3"
import { reloadScss, scssWatcher } from './scss.ts'

export function init() {
		scssWatcher(),
    reloadScss();
}
