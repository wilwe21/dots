import App from 'resource:///com/github/Aylur/ags/app.js';
import options from '../options.js';
import { readFile, writeFileSync, exec } from 'resource:///com/github/Aylur/ags/utils.js';

export async function reloadGrub() {
    options.grub.theme.connect('changed', GRUB);
    options.grub.timeout.connect('changed', GRUB);
}
export function GRUB() {
    const tmp = '/tmp/ags/grub';
    Utils.ensureDirectory(tmp);
    const theme = options.grub.theme.value;
    const timeout = options.grub.timeout.value;
    writeFileSync(String(theme), '/tmp/ags/grub/grub')
    writeFileSync(String(timeout), '/tmp/ags/grub/time')
    exec('sudo /home/wilwe/.hyprland.conf/scripts/grubtheme')
}
