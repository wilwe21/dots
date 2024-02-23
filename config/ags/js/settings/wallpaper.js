import options from '../options.js';
import { exec, execAsync } from 'resource:///com/github/Aylur/ags/utils.js';
import { dependencies } from '../utils.js';

export function initWallpaper() {
    if (dependencies(['swww'])) {
        exec('swww init');

        exec(`swww img ${options.desktop.wallpaper.transition.value} "${options.desktop.wallpaper.img.value}"`)
    }
}

export function wallpaper() {
    if (!dependencies(['swww']))
        return;

    exec(`swww img ${options.desktop.wallpaper.transition.value} "${options.desktop.wallpaper.img.value}"`
    ).catch(err => console.error(err));
}
