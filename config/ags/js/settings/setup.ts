import { App } from "astal/gtk3"
import { reloadScss, scssWatcher } from './scss.ts'
import { initWallpaper, wallpaper } from "./wallpaper.ts"
import { setupHyprland } from './hyprland.ts'

export function init() {
		scssWatcher(),
		initWallpaper(),
		setupHyprland()
}
