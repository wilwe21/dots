import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Battery from 'resource:///com/github/Aylur/ags/service/battery.js';
import icons from '../../icons.js';
import FontIcon from '../../misc/FontIcon.js';
import options from '../../options.js';
import PanelButton from '../PanelButton.js';

const Indicator = () => Widget.Stack({
    items: [
        ['true', FontIcon(icons.battery.charging)],
    ],
    setup: self => self.hook(Battery, () => {
        self.shown = `${Battery.charging || Battery.charged}`;
    }),
});

const PercentLabel = () => Widget.Revealer({
    transition: 'slide_right',
    reveal_child: options.battery.show_percentage.bind('value'),
    child: Widget.Label({
        label: Battery.bind('percent').transform(p => ` ${p}%`),
    }),
});

const LevelBar = () => Widget.LevelBar({
    vpack: 'center',
    value: Battery.bind('percent').transform(p => p / 100),
    setup: self => self.hook(options.battery.bar.full, () => {
        const full = options.battery.bar.full.value;
        self.vpack = full ? 'fill' : 'center';
        self.hpack = full ? 'fill' : 'center';
    }),
});

export default (Service, condition) => {
    const revaler = PercentLabel();
    return PanelButton({
        class_name: 'battery-bar',
        on_clicked: () => {
            const v = options.battery.show_percentage.value;
            options.battery.show_percentage.value = !v;
        },
        content: Widget.Box({
            visible: Battery.bind('available'),
            setup: self => self.hook(Battery, () => {
                self.toggleClassName('charging', Battery.charging || Battery.charged);
                self.toggleClassName('medium', Battery.percent < options.battery.medium.value);
                self.toggleClassName('low', Battery.percent < options.battery.low.value);
                w.toggleClassName('half', Battery.percent < 48);
            }),
            children: [
                Indicator(),
                LevelBar(),
                Widget.Box({ child: revaler }),

            ],
        }),
    });
};
