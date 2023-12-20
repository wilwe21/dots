import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import themes from '../themes.js';
import { reloadScss } from '../settings/scss.js';
import { setupHyprland } from '../settings/hyprland.js';
import { wallpaper } from '../settings/wallpaper.js';
import { gtkIcons, gtkTheme, pywal } from '../settings/setup.js';
import GLib from 'gi://GLib';
import icons from '../icons.js';
import options from '../options.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import * as vars from '../variables.js';

/**
 * @param {'sleep' | 'reboot' | 'logout' | 'shutdown'} action
 * @param {string} label
 */
 
function setTheme(name) {
    options.reset();
    const theme = themes.find(t => t.name === name);
    if (!theme)
        return print('No theme named ' + name);

    options.apply(theme.options);
    reloadScss();
    setupHyprland();
    wallpaper();
    pywal();
    gtkIcons();
    gtkTheme();
};
 
const SysButton = () => Widget.Button({
    binds: [['on_clicked', options.sound.sound, 'value', s => () => setTheme('Pacman')]],
    class_name: 'gamebutt',
    child: Widget.Box({
        vertical: true,
        children: [
            Widget.Icon({
                icon: 'kitty',
                class_name: 'bsound',
            }),
        ],
    }),
});

const updateMargins = (mt, ml) => {
    return [mt, ml];
};

export default monitor => Widget.Window({
    name: `game${monitor}`,
    class_name: 'gamemain',
    binds: [
        ['visible', options.game.visible],
        ['anchor', options.game.anchor, 'value', (a1) => ([a1, 'right'])],
        ['margins', options.game.mt, 'value', (mt) => updateMargins(mt, options.game.ml.value)],
    ],
    expand: true,
    monitor,
    layer: 'background',
    exclusivity: 'ignore',
    child: Widget.Box({
        child: SysButton(),
    }),
});
