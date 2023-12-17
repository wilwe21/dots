import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import icons from '../icons.js';
import options from '../options.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';

/**
 * @param {'sleep' | 'reboot' | 'logout' | 'shutdown'} action
 * @param {string} label
 */
const SysButton = () => Widget.Button({
    binds: [['on_clicked', options.sound.sound, 'value', s => () => Utils.exec(`play -q ${s}`)]],
    on_clicked: () => Utils.exec(action),
    class_name: 'soundbutt',
    child: Widget.Box({
        vertical: true,
        children: [
            Widget.Icon({
                binds: [['icon', options.sound.icon, 'value', i => `${i}`]],
                class_name: 'bsound',
            }),
        ],
    }),
});

const visibility = self => {
        if (!options.sound.visible.value)
            return self.visible = false;
};

const updateMargins = (mt, ml) => {
    return [mt, ml];
};

export default monitor => Widget.Window({
    name: `sound${monitor}`,
    class_name: 'soundmain',
    binds: [
        ['visible', options.sound.visible],
        ['anchor', options.sound.anchor, 'value', (a1) => ([a1, 'right'])],
        ['margins', options.sound.mt, 'value', (mt) => updateMargins(mt, options.sound.ml.value)],
    ],
    expand: true,
    monitor,
    layer: 'background',
    exclusivity: 'ignore',
    child: Widget.Box({
        child: SysButton(),
    }),
});
