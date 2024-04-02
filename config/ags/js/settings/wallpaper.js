import options from '../options.js';
import { exec, execAsync } from 'resource:///com/github/Aylur/ags/utils.js';
import { dependencies } from '../utils.js';

export function initWallpaper() {
    if (dependencies(['swww'])) {
        exec('swww init');
        
        options.desktop.wallpaper.img.connect('changed', wallpaper);
    }
}

export function wallpaper() {
    if (!dependencies(['swww']))
        return;

    exec(`swww img "${options.desktop.wallpaper.img.value}" -t simple`
    ).catch(err => console.error(err));
}
