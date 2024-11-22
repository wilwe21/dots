import { readFile, writeFile } from 'astal/file';
import vars from "../vars.ts"
import options from '../options.ts';
import themes from '../themes.ts';
import { wallpaper } from './wallpaper.ts';
import { reloadScss } from './scss.ts';
import { setupHyprland } from './hyprland.ts';

const cacheDir = vars.cacheDir + '/theme.ts'

/** @param {string} name */
export function setTheme(name) {
    options.reset();
    const theme = themes.find(t => t.name === name);
    if (!theme)
        return print('No theme named ' + name);

    options.apply(theme.options);
		writeFile(cacheDir, name);
		reloadScss();
		reloadScss();
    wallpaper();
		setupHyprland();
}

export function setupTheme() {
		let cache = readFile(cacheDir) || Null
		if (cache) {
				setTheme(cache)
		}
}

export function Theme({ name, ...options }){
		return ({
    		name,
    		options: {
    		    'theme.name': name,
    		    ...options,
    		},
		})
};
