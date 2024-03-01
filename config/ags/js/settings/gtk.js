import App from 'resource:///com/github/Aylur/ags/app.js';
import options from '../options.js';
import { execAsync } from 'resource:///com/github/Aylur/ags/utils.js';

export function reloadGtk() {
    const gsettings = 'gsettings set org.gnome.desktop.interface';
    options.misc.gtk.connect('changed', ({ value }) => {
    execAsync(`${gsettings} gtk-theme "${value}"`)
        .catch(err => console.error(err.message));
    });
    options.misc.gtkIcons.connect('changed', ({ value }) => {
    execAsync(`${gsettings} icon-theme "${value}"`)
        .catch(err => console.error(err.message));
    });
    options.misc.cursor.connect('changed', ({ value }) => {
    execAsync(`${gsettings} cursor-theme "${value}"`)
        .catch(err => console.error(err.message));
    });
    options.theme.scheme.connect('changed', ({ value }) => {
    execAsync(`${gsettings} color-scheme "prefer-${value}"`)
        .catch(err => console.error(err.message));
    });
}
