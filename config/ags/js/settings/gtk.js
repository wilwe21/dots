import App from 'resource:///com/github/Aylur/ags/app.js';
import options from '../options.js';
import { execAsync } from 'resource:///com/github/Aylur/ags/utils.js';

export function reloadGtk() {
    options.misc.gtk.connect('changed', gtkupdate);
    options.misc.gtkIcons.connect('changed', gtkupdate);
    options.misc.cursor.connect('changed', gtkupdate);
    options.theme.scheme.connect('changed', gtkupdate);
}
function gtkupdate() {
    const g = options.misc.gtk.value
    const gi = options.misc.gtkIcons.value
    const c = options.misc.cursor.value
    if ( options.theme.scheme.value == 'dark' ) {
        execAsync(`gtkthemes -d -T "${g}" -I "${gi}" -C "${c}"`)
    } else {
        execAsync(`gtkthemes -l -T "${g}" -I "${gi}" -C "${c}"`)
    }
}
