import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import icons from '../icons.js';
import options from '../options.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';

/**
 * @param {'sleep' | 'reboot' | 'logout' | 'shutdown'} action
 * @param {string} label
 */
const SysButton = () => Widget.Button({
    on_clicked: options.sound.sound.bind('value').transform(s => () => Utils.exec(`play -q ${s}`)),
    class_name: 'soundbutt',
    child: Widget.Box({
        vertical: true,
        children: [
            Widget.Icon({
                icon: options.sound.icon.bind('value'),
                class_name: 'bsound',
            }),
        ],
    }),
});

const visibility = self => {
        if (!options.sound.visible.value)
            return self.visible = false;
};

export default monitor => Widget.Window({
    name: `sound${monitor}`,
    layer: options.sound.layer.bind('value'),
    class_name: 'soundmain',
    visible: options.sound.visible.bind('value'),
    anchor: options.sound.anchor.bind('value'),
    margins: options.sound.margins.bind('value'),
    expand: true,
    monitor,
    layer: 'background',
    exclusivity: 'ignore',
    child: Widget.Box({
        child: SysButton(),
    }),
});
