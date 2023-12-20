import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Variable from 'resource:///com/github/Aylur/ags/variable.js';
import Battery from 'resource:///com/github/Aylur/ags/service/battery.js';
import DateButton from './buttons/DateButton.js';
import ColorPicker from './buttons/ColorPicker.js';
import SystemIndicators from './buttons/SystemIndicators.js';
import PowerMenu from './buttons/PowerMenu.js';
import BatteryBar from './buttons/BatteryBar.js';
import options from '../options.js';
import * as vars from '../variables.js';
import { execAsync } from 'resource:///com/github/Aylur/ags/utils.js';

const Start = () => Widget.Box({
    class_name: 'start',
    children: [
        Widget.Box({ hexpand: false }),
    ],
});

const Center = () => Widget.Box({
    class_name: 'center',
    children: [
    ],
});

const End = () => Widget.Box({
    class_name: 'end',
    children: [
        Widget.Box({ hexpand: true }),
        DateButton(),
        ColorPicker(),
        BatteryBar(Battery, b => b.available),
        SystemIndicators(),
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
