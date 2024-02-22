import App from 'resource:///com/github/Aylur/ags/app.js';
import options from '../options.js';
import { readFile, writeFile } from 'resource:///com/github/Aylur/ags/utils.js';

export async function reloadSddm() {
    const theme = options.sddm.theme.value;
    const cursor = options.sddm.cursor.value
    const conf = `#made by wilwe
    [theme]
    Current=${theme}
    CursorTheme=${cursor}`
    writeFile(conf, `/etc/sddm.conf`)
}
