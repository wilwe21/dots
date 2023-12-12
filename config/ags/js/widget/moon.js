import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import GLib from 'gi://GLib';
import options from '../options.js';
import * as vars from '../variables.js';

const updateMargins = (mt, ml) => {
    return [mt, ml];
};

const img = (path, name) => {
    return `${options.moon.path}` + '/' + `${vars.moonva}`;
};

export default monitor => Widget.Window({
    name: `moon${monitor}`,
    class_name: 'moonmain',
    layer: 'background',
    exclusivity: 'ignore',
    binds: [
        ['anchor', options.moon.anchor, 'value', (am) => ([am, 'right'])],
        ['margins', options.moon.mt, 'value', (mt) => updateMargins(mt, options.moon.ml.value)],
    ],
    monitor,
    child: Widget.Box({
        class_name: 'wmoon',
        child: Widget.Icon({
            icon: '/home/wilwe/.hyprland.conf/screens/wallpapers/kgmoon/4quart.png',
        }),
    }),
});
