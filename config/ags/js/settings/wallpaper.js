import options from '../options.js';
import { exec, execAsync } from 'resource:///com/github/Aylur/ags/utils.js';
import { dependencies } from '../utils.js';

export function initWallpaper() {
    if (dependencies(['swww'])) {
        execAsync('swww-daemon');
        
        options.desktop.wallpaper.img.connect('changed', wallpaper);
    }
}

export function wallpaper() {
    if (!dependencies(['swww']))
        return;
    if (options.desktop.wallpaper.transition != '') {
		const transit = options.desktop.wallpaper.transition.value.split(' ');
		const cons = ['swww', 'img', options.desktop.wallpaper.img.value]
		const end = [...cons, ...transit]
		console.log(end)
		execAsync(end
    	).catch(err => console.error("no transition set", err));
	} else {
		execAsync(['swww', 'img', options.desktop.wallpaper.img.value, "-t", "none"
    	]).catch(err => console.error(err));
	}
}
