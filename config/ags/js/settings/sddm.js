import App from 'resource:///com/github/Aylur/ags/app.js';
import options from '../options.js';
import { readFile, writeFileSync, exec } from 'resource:///com/github/Aylur/ags/utils.js';

export async function reloadSddm() {
    const theme = options.sddm.theme.value;
    const cursor = options.sddm.cursor.value
    const conf = `#made by wilwe
[Theme]
Current=${theme}
CursorTheme=${cursor}`
    writeFileSync(String(conf), '/tmp/ags/sddm.conf')
    exec('sudo /home/wilwe/.hyprland.conf/scripts/sddmtheme')
}
