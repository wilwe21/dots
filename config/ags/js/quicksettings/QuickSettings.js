import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Header from './widgets/Header.js';
import PopupWindow from '../misc/PopupWindow.js';
import { Volume, Microhone, SinkSelector, AppMixer } from './widgets/Volume.js';
import { NetworkToggle, WifiSelection } from './widgets/Network.js';
import { BluetoothToggle, BluetoothDevices } from './widgets/Bluetooth.js';
import { ThemeToggle, ThemeSelector } from './widgets/Theme.js';
import { ShaderToggle, ShaderSelector } from './widgets/Shader.js';
import Brightness from './widgets/Brightness.js';
import DND from './widgets/DND.js';
import MicMute from './widgets/MicMute.js';
import options from '../options.js';

const Row = (toggles = [], menus = []) => Widget.Box({
    vertical: true,
    children: [
        Widget.Box({
            class_name: 'row horizontal',
            children: toggles,
        }),
        ...menus,
    ],
});

const Homogeneous = toggles => Widget.Box({
    homogeneous: true,
    children: toggles,
});

export default () => PopupWindow({
    name: 'quicksettings',
    anchor: options.bar.position.bind('value').transform(s => ['right', s]),
    setup: self => self.hook(options.bar.position, () => {
        //self.anchor = ['right', 'top'/*options.bar.position.value*/];
        if (options.bar.position.value === 'top')
            self.transition = 'slide_down';

        if (options.bar.position.value === 'bottom')
            self.transition = 'slide_up';
    }),
    child: Widget.Box({
        vertical: true,
        children: [
            Header(),
            Widget.Box({
                class_name: 'sliders-box vertical',
                vertical: true,
                children: [
                    Row(
                        [Volume()],
                        [SinkSelector(), AppMixer()],
                    ),
                    Microhone(),
                    Brightness(),
                ],
            }),
            Row(
                [Homogeneous([NetworkToggle(), BluetoothToggle()]), DND()],
                [WifiSelection(), BluetoothDevices()],
            ),
            Row(
                [Homogeneous([ThemeToggle(), ShaderToggle()]), MicMute()],
                [ThemeSelector(), ShaderSelector()],
            ),
        ],
    }),
});
