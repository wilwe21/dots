import vars from "../vars.ts"
import options from '../options.ts';
import themes from '../themes.ts';
import { wallpaper } from './wallpaper.ts';
import { reloadScss } from './scss.ts';
import { setupHyprland } from './hyprland.ts';

/** @param {string} name */
export function setTheme(name) {
    options.reset();
    const theme = themes.find(t => t.name === name);
    if (!theme)
        return print('No theme named ' + name);

    options.apply(theme.options);
		reloadScss();
		reloadScss();
    wallpaper();
		setupHyprland();
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