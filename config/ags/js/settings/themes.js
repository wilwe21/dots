import App from 'resource:///com/github/Aylur/ags/app.js';
import options from '../options.js';
import { readFile, writeFileSync, execAsync } from 'resource:///com/github/Aylur/ags/utils.js';

export async function reloadThemes() {
  try {
    const flags = readFile('/tmp/ags/themeup', 'utf-8'); // Read file content as string

    let endFlags = '';
    let endFlagsdos = '';
    if (flags.indexOf("s") >= 0){
	endFlags = `${endFlags}-s `
    }
    if (flags.indexOf("g") >= 0){
	endFlags = `${endFlags}-g `
    }
    if (flags.indexOf("p") >= 0){
	endFlagsdos = `${endFlagsdos}-p `
    }
    if (flags.indexOf("k") >= 0){
	endFlagsdos = `${endFlagsdos}-k `
    }
    if (flags.indexOf("v") >= 0){
	endFlagsdos = `${endFlagsdos}-v `
    }

    if (!endFlags) {
      console.log('No flags found in /tmp/ags/themeup');
      return;
    }

    await execAsync(['hyprctl', 'dispatch', 'exec', `sudo /home/wilwe/.hyprland.conf/scripts/theme ${endFlags}`]);
    await execAsync(['hyprctl', 'dispatch', 'exec', `/home/wilwe/.hyprland.conf/scripts/theme ${endFlagsdos}`]);
    console.log(`Executing sudo theme script with flags: ${endFlags}`);
    console.log(`Executing theme script with flags: ${endFlagsdos}`);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('File /tmp/ags/themeup not found');
    } else {
      console.error('Error reloading themes:', error);
    }
  }
}
