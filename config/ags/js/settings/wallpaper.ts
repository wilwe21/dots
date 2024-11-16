import options from '../options.js';
import { bind } from "astal";
import { exec, execAsync } from 'astal/process';
import { dependencies } from '../utils.ts';

export function initWallpaper() {
    if (dependencies(['swww'])) {
        execAsync('swww-daemon');
        
				bind(options.wallpaper, "value").as(() => wallpaper())
    }
}

export function wallpaper() {
    if (!dependencies(['swww'])) {
        return;
		}
		const cons = ['swww', 'img', options.wallpaper.value]
		execAsync(cons
		).catch(err => console.error("smth", err));
}
