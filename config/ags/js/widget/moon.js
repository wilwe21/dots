import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Variable from 'resource:///com/github/Aylur/ags/variable.js';
import GLib from 'gi://GLib';
import options from '../options.js';
import { exec, interval } from 'resource:///com/github/Aylur/ags/utils.js';

const intval = options.systemFetchInterval;

const moonva = Variable(0, {
    poll: [intval, 'cat /home/wilwe/.cache/moon', n => {
        return `${n}`;
    }],
});

export default monitor => Widget.Window({
    name: `moon${monitor}`,
    class_name: 'moonmain',
    layer: 'background',
    exclusivity: 'ignore',
    visible: options.moon.visible.bind('value'),
    anchor: options.moon.anchor.bind('value'),
    margins: options.moon.margins.bind('value'),
    monitor,
    child: Widget.Icon({
        class_name: 'wmoon',
        icon: options.moon.path.bind('value').transform(v => `${v}${moonva.value}`),
    }),
});
