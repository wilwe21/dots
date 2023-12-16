import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import icons from '../icons.js';
import options from '../options.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';

/**
 * @param {'sleep' | 'reboot' | 'logout' | 'shutdown'} action
 * @param {string} label
 */
const SysButton = (action, icon) => Widget.Button({
    on_clicked: () => Utils.exec(action),
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
    binds: [['visible', options.menu.visible]],
    name: 'menu',
    expand: true,
    monitor,
    layer: 'background',
    exclusivity: 'ignore',
    child: Widget.Box({
        vertical: true,
        children: [
            Widget.Box({
                children: [
                SysButton('flatpak run io.gitlab.librewolf-community --new-window --profile /home/wilwe/.var/app/io.gitlab.librewolf-community/.librewolf/h9joi49y.default-default', 'io.gitlab.librewolf-community'),
                SysButton('kitty', 'kitty')
            ]}),
            Widget.Box({
                children: [
                SysButton('/usr/bin/flatpak run --branch=stable --arch=x86_64 --command=/app/bin/steam --file-forwarding com.valvesoftware.Steam @@u %U @@', 'com.valvesoftware.Steam'),
                SysButton('/usr/bin/flatpak run --branch=stable --arch=x86_64 --command=minecraft com.mojang.Minecraft', 'com.mojang.Minecraft'),
            ]}),
        ],
    }),
});
