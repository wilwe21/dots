import vars from "../vars.ts"
import options from '../options.ts';
import themes from '../themes.ts';
import { wallpaper } from './wallpaper.ts';

/** @param {string} name */
export function setTheme(name) {
    options.reset();
    const theme = themes.find(t => t.name === name);
    if (!theme)
        return print('No theme named ' + name);

    options.apply(theme.options);
    wallpaper();
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
