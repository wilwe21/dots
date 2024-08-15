import App from 'resource:///com/github/Aylur/ags/app.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import Battery from 'resource:///com/github/Aylur/ags/service/battery.js';
import Notifications from 'resource:///com/github/Aylur/ags/service/notifications.js';
import options from '../options.js';
import icons from '../icons.js';
import { reloadScss, scssWatcher } from './scss.js';
import { reloadSddm } from './sddm.js';
import { reloadGrub } from './grub.js';
import { reloadGtk } from './gtk.js';
import { reloadStarship } from './starship.js';
import { kitty } from './kitty.js';
import { WINRUL } from './winrul.js';
import { vim } from './vim.js';
import { initWallpaper, wallpaper } from './wallpaper.js';
import { hyprlandInit, setupHyprland } from './hyprland.js';
import { globals } from './globals.js';
import Gtk from 'gi://Gtk';
import { exec, execAsync, readFile } from 'resource:///com/github/Aylur/ags/utils.js';
import themes from '../themes.js'

export function init() {
	const name = readFile('/tmp/ags/curtheme')
	const theme = themes.find(t => t.name === name)
	console.log(theme)
	options.apply(theme.options)
    initWallpaper();
    notificationBlacklist();
    warnOnLowBattery();
    globals();
    reloadGtk();
    gtkFontSettings();
    scssWatcher();
    dependandOptions();

    App.connect('config-parsed', () => {
        WINRUL();
        setupHyprland();
        reloadScss();
        //reloadSddm();
        //reloadGrub();
        reloadStarship();
        kitty();
		vim();
        wallpaper();
        gtkTheme();
        gtkIcons();
    });
}

function dependandOptions() {
    options.bar.style.connect('changed', ({ value }) => {
        if (value !== 'normal')
            options.desktop.screen_corners.setValue(false, true);
    });
}

function gtkFontSettings() {
    const settings = Gtk.Settings.get_default();
    if (!settings) {
        console.error(Error('Gtk.Settings unavailable'));
        return;
    }

    const callback = () => {
        const { size, font } = options.font;
        settings.gtk_font_name = `${font.value} ${size.value}`;
    };

    options.font.font.connect('notify::value', callback);
    options.font.size.connect('notify::value', callback);
}

function notificationBlacklist() {
    Notifications.connect('notified', (_, id) => {
        const n = Notifications.getNotification(id);
        options.notifications.black_list.value.forEach(item => {
            if (n?.app_name.includes(item) || n?.app_entry?.includes(item))
                n.close();
        });
    });
}

function warnOnLowBattery() {
    Battery.connect('notify::percent', () => {
        const low = options.battery.low.value;
        if (Battery.percent !== low ||
            Battery.percent !== low / 2 ||
            !Battery.charging)
            return;

        Utils.execAsync([
            'notify-send',
            `${Battery.percent}% Battery Percentage`,
            '-i', icons.battery.warning,
            '-u', 'critical',
        ]);
    });
}

