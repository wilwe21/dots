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
import ScreenRecord from './buttons/ScreenRecord.js';
import BatteryBar from './buttons/BatteryBar.js';
import SubMenu from './buttons/SubMenu.js';
import Recorder from '../services/screenrecord.js';
import options from '../options.js';
import * as vars from '../variables.js';
import { execAsync } from 'resource:///com/github/Aylur/ags/utils.js';
import Media from './buttons/MediaBar.js';
import icons from '../icons.js'

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
        connections: [['draw', visibility], ...conn],
        binds: [['visible', options.bar.separators]],
        vpack: 'center',
    });
};

const SysProgress = (type, title, unit) => Widget.Box({
    class_name: `progress-box ${type}`,
    hexpand: false,
    binds: [['tooltipText', vars[type], 'value', v => `${title}: ${v}${unit}`]],
    children: [
        Widget.Icon({
            class_name: 'progress-icon',
            hexpand: false,
            icon: icons.system[type],
        }),
        Widget.Label({
            class_name: 'progress-label',
            hexpand: false,
            binds: [['label', vars[type], 'value', p => `${p}${unit} `]],
        }),
    ],
});

const Start = () => Widget.Box({
    class_name: 'start',
    children: [
        OverviewButton(),
        Media(),
        Widget.Box({ hexpand: false }),
    ],
});

const Center = () => Widget.Box({
    class_name: 'center',
    children: [
        Widget.Icon({
            class_name: 'decorator',
            binds: [['icon', options.bar.decorator1]],
        }),
        DateButton(),
        Widget.Icon({
            class_name: 'decorator',
            binds: [['icon', options.bar.decorator2]],
        }),
    ],
});

const End = () => Widget.Box({
    class_name: 'end',
    children: [
        Widget.Box({ hexpand: true }),

        Widget.Box({
            class_name: 'system-info horizontal',
            children: [
                SysProgress('upload', 'tx', ''),
                SysProgress('download', 'rx', ''),
                SysProgress('cpu', 'Cpu', ''),
                SysProgress('temp', 'Temperature', '°C'),
            ],
        }),
        SubMenu({
            imtes: submenuItems,
            children: [
                SysTray(),
            ]
        }),
        ColorPicker(),
        SeparatorDot(),
        ScreenRecord(),
        SeparatorDot(Recorder, r => r.recording),
        BatteryBar(Battery, b => b.available),
        SeparatorDot(Battery, b => b.available),
        SystemIndicators(),
        SeparatorDot(),
        PowerMenu(),
    ],
});

/** @param {number} monitor */
export default monitor => Widget.Window({
    name: `bar${monitor}`,
    class_name: 'transparent',
    exclusivity: 'exclusive',
    monitor,
    binds: [['anchor', options.bar.position, 'value', pos => ([
        pos, 'left', 'right',
    ])]],
    child: Widget.CenterBox({
        class_name: 'panel',
        start_widget: Start(),
        center_widget: Center(),
        end_widget: End(),
    }),
});
