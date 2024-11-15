import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Battery from 'resource:///com/github/Aylur/ags/service/battery.js';
import icons from '../../icons.js';
import PowerMenu from '../../services/powermenu.js';
import Avatar from '../../misc/Avatar.js';
import { uptime } from '../../variables.js';
import options from '../../options.js';
import { openSettings } from '../../settings/theme.js';
import { execAsync } from 'resource:///com/github/Aylur/ags/utils.js';



export const BatteryProgress = () => Widget.Box({
    class_name: 'battery-progress',
    vexpand: true,
    visible: Battery.bind('available'),
    setup: self => self.hook(Battery, () => {
        self.toggleClassName('charging', Battery.charging || Battery.charged);
        self.toggleClassName('medium', Battery.percent < options.battery.medium.value);
        self.toggleClassName('low', Battery.percent < options.battery.low.value);
        self.toggleClassName('half', Battery.percent < 48);
    }),
    child: Widget.Overlay({
        vexpand: true,
        child: Widget.ProgressBar({
            hexpand: true,
            vexpand: true,
            setup: self => self.hook(Battery, () => {
                self.fraction = Battery.percent / 100;
            }),
        }),
        overlays: [Widget.Label({
            setup: self => self.hook(Battery, () => {
                self.label = Battery.charging || Battery.charged
                    ? icons.battery.charging
                    : `${Battery.percent}%`;
            }),
        })],
    }),
});

export default () => Widget.Box({
    class_name: 'header horizontal',
    children: [
        Avatar(),
        Widget.Box({
            class_name: 'system-box',
            vertical: true,
            hexpand: true,
            children: [
                Widget.Box({
                    children: [
                        Widget.Button({
                            vpack: 'center',
                            on_clicked: openSettings,
                            child: Widget.Icon(icons.ui.settings),
                        }),
                        Widget.Label({
                            class_name: 'uptime',
                            hexpand: true,
                            vpack: 'center',
                            setup: self => self.hook(uptime, () => {
                                self.label = `uptime: ${uptime.value}`;
                            }),
                        }),
                        Widget.Button({
                            vpack: 'center',
                            on_clicked: () => execAsync('swaylock -C /home/wilwe/.hyprland.conf/config/swaylock'),
                            child: Widget.Icon(icons.lock),
                        }),
                        Widget.Button({
                            vpack: 'center',
                            on_clicked: () => PowerMenu.action('shutdown'),
                            child: Widget.Icon(icons.powermenu.shutdown),
                        }),
                    ],
                }),
                BatteryProgress(),
            ],
        }),
    ],
});
