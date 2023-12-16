import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import icons from '../icons.js';
import PowerMenu from '../services/powermenu.js';
import options from '../options.js';

/**
 * @param {'sleep' | 'reboot' | 'logout' | 'shutdown'} action
 * @param {string} label
 */
const SysButton = (action, icon) => Widget.Button({
    on_clicked: () => PowerMenu(action),
    child: Widget.Box({
        vertical: true,
        children: [
            Widget.Icon(icon),
        ],
    }),
});
const visibility = self => {
        if (!options.menu.visible.value)
            return self.visible = false;
};

export default monitor => Widget.Window({
    //connections: [['draw', visibility], ...conn],
    binds: [['visible', options.menu.visible]],
    name: 'menu',
    expand: true,
    monitor,
    child: Widget.Box({
        vertical: true,
        children: [
            Widget.Box({
                children: [
                SysButton('librewolf', 'io.gitlab.librewolf-community'),
                SysButton('reboot', icons.powermenu.reboot)
            ]}),
            Widget.Box({
                children: [
                SysButton('sleep', icons.powermenu.sleep),
                SysButton('logout', icons.powermenu.logout),
            ]}),
        ],
    }),
});
