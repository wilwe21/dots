import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import icons from '../icons.js';
import PowerMenu from '../services/powermenu.js';
import PopupWindow from '../misc/PopupWindow.js';

/**
 * @param {'sleep' | 'reboot' | 'logout' | 'shutdown'} action
 * @param {string} label
 */
const SysButton = (action) => Widget.Button({
    on_clicked: () => PowerMenu.action(action),
    child: Widget.Box({
        vertical: true,
        children: [
            Widget.Icon(icons.powermenu[action]),
        ],
    }),
});

export default () => PopupWindow({
    name: 'powermenu',
    layer: 'overlay',
    expand: true,
    child: Widget.Box({
        vertical: true,
        children: [
            Widget.Box({
                children: [
                SysButton('shutdown'),
                SysButton('reboot')
            ]}),
            Widget.Box({
                children: [
                SysButton('sleep'),
                SysButton('logout'),
            ]}),
        ],
    }),
});
