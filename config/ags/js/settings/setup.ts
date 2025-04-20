import { App } from "astal/gtk3"
import { reloadScss, scssWatcher } from './scss.ts'
import { initWallpaper, wallpaper } from "./wallpaper.ts"
import { setupHyprland } from './hyprland.ts'
import { reloadStarship } from './starship.ts';
import { setupTheme } from './theme.ts';

export function init() {
		scssWatcher(),
		initWallpaper()
		//setupHyprland()
		//setupTheme()
}
