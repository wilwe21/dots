import App from 'resource:///com/github/Aylur/ags/app.js';
import options from '../options.js';
import { readFile, writeFileSync, exec } from 'resource:///com/github/Aylur/ags/utils.js';

export async function reloadGrub() {
    const theme = options.grub.theme.value;
    writeFileSync(String(theme), '/tmp/ags/grub.conf')
    exec('sudo /home/wilwe/.hyprland.conf/scripts/grubtheme')
}
