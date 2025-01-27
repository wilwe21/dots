import App from 'resource:///com/github/Aylur/ags/app.js';
import options from '../options.js';
import { readFile, writeFileSync, execAsync, USER } from 'resource:///com/github/Aylur/ags/utils.js';

export async function reloadSddm() {
    options.sddm.theme.connect('changed', SDDM);
    options.sddm.cursor.connect('changed', SDDM);
}
export function SDDM() {
    const theme = options.sddm.theme.value;
    const cursor = options.sddm.cursor.value
    const conf = `#made by wilwe
[Theme]
Current=${theme}
CursorTheme=${cursor}`
    writeFileSync(String(conf), '/tmp/ags/sddm.conf')
    Utils.execAsync(['hyprctl', 'dispatch', 'exec', `sudo /home/${USER}/.hyprland.conf/scripts/theme -s`])
}
