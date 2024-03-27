import App from 'resource:///com/github/Aylur/ags/app.js';
import options from '../options.js';
import { readFile, writeFileSync, execAsync } from 'resource:///com/github/Aylur/ags/utils.js';

export async function reloadGrub() {
    options.grub.theme.connect('changed', GRUB)
    options.grub.timeout.connect('changed', GRUB);
}
export function GRUB() {
    const theme = options.grub.theme.value;
    const timeout = options.grub.timeout.value;
    const conf = `GRUB_THEME="/boot/grub/themes/${theme}/theme.txt"
GRUB_TIMEOUT="${timeout}"
GRUB_DEFAULT="0"
GRUB_SAVEDEFAULT="false"`
    writeFileSync(String(conf), '/tmp/ags/grub.conf')
    Utils.execAsync(['hyprctl', 'dispatch', 'exec', '/home/wilwe/.hyprland.conf/scripts/theme -g'])
}
