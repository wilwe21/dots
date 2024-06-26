import SystemTray from 'resource:///com/github/Aylur/ags/service/systemtray.js';
import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Variable from 'resource:///com/github/Aylur/ags/variable.js';
import Battery from 'resource:///com/github/Aylur/ags/service/battery.js';
import OverviewButton from './buttons/OverviewButton.js';
import Workspaces from './buttons/Workspaces.js';
import DateButton from './buttons/DateButton.js';
import SysTray from './buttons/SysTray.js';
import ColorPicker from './buttons/ColorPicker.js';
import SystemIndicators from './buttons/SystemIndicators.js';
import PowerMenu from './buttons/PowerMenu.js';
import BatteryBar from './buttons/BatteryBar.js';
import SubMenu from './buttons/SubMenu.js';
import options from '../options.js';
import * as vars from '../variables.js';
import { execAsync } from 'resource:///com/github/Aylur/ags/utils.js';
import Media from './buttons/MediaBar.js';
import icons from '../icons.js';
import WW from '../misc/WW.js';

const intval = options.systemFetchInterval;
const submenuItems = Variable(1);
SystemTray.connect('changed', () => {
    submenuItems.setValue(SystemTray.items.length + 1);
});

/**
 * @template T
 * @param {T=} service
 * @param {(self: T) => boolean=} condition
 */
const SeparatorDot = (service, condition) => {
    const visibility = self => {
        if (!options.bar.separators.value)
            return self.visible = false;

        self.visible = condition && service
            ? condition(service)
            : options.bar.separators.value;
    };

    const conn = service ? [[service, visibility]] : [];
    return Widget.Separator({
        visible: options.bar.separators.bind('value'),
        vpack: 'center',
    });
};

const SysProgress = (type, unit) => Widget.Box({
    class_name: `progress-box ${type}`,
    hexpand: false,
    children: [
        Widget.Icon({
            class_name: 'progress-icon',
            hexpand: false,
            icon: icons.system[type],
        }),
        Widget.Label({
            class_name: 'progress-label',
            hexpand: false,
            label: vars[type].bind('value').transform(p => `${p}${unit}`),
        }),
    ],
});

const Start = () => Widget.Box({
    class_name: 'start',
    hpack: 'start',
    children: [
        OverviewButton(),
        Media(),
    ],
});

const Center = () => Widget.Box({
    class_name: 'center',
    setup: self => self.hook(options.bar.decorsw, () => {
        if (options.bar.decorsw.value == true) {
            self.children = [
                Widget.Icon({
                    class_name: 'decorator',
                    icon: options.bar.decorator1.bind('value')
                }),
                DateButton(),
                Widget.Icon({
                    class_name: 'decorator',
                    icon: options.bar.decorator2.bind('value')
                }),
            ]
        } else {
            self.child = DateButton()
        }
    }),
});

const End = () => Widget.Box({
    class_name: 'end',
    hpack: 'end',
    children: [
        Widget.Box({
            class_name: 'system-info horizontal',
            children: [
                SysProgress('upload', ''),
                SysProgress('download', ''),
                SysProgress('cpu', ''),
                SysProgress('temp', '°C'),
            ],
        }),
        SubMenu({
            items: submenuItems,
            children: [
                SysTray(),
            ]
        }),
        ColorPicker(),
        BatteryBar(Battery, b => b.available),
        SeparatorDot(Battery, b => b.available),
        SystemIndicators(),
        SeparatorDot(),
        PowerMenu(),
    ],
});

/** @param {number} monitor */
export default monitor => WW({
    name: `bar${monitor}`,
    class_name: 'transparent',
    exclusivity: 'exclusive',
    monitor,
    anchor: options.bar.position.bind('value').transform(pos => ([
        pos, 'left', 'right',
    ])),
    child: Widget.CenterBox({
        class_name: 'panel',
        start_widget: Start(),
        center_widget: Center(),
        end_widget: End(),
    }),
});
