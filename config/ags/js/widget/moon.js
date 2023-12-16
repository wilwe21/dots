import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Variable from 'resource:///com/github/Aylur/ags/variable.js';
import GLib from 'gi://GLib';
import options from '../options.js';
import { execAsync, interval } from 'resource:///com/github/Aylur/ags/utils.js';

const intval = options.systemFetchInterval;

const updateMargins = (mt, ml) => {
    return [mt, ml];
};

const moonva = Variable(0, {
    poll: [intval, 'cat /home/wilwe/.cache/moon', n => {
        return `${n}`;
    }],
});

const visibility = self => {
        if (!options.moon.visible.value)
            return self.visible = false;
};

export default monitor => Widget.Window({
    name: `moon${monitor}`,
    class_name: 'moonmain',
    layer: 'background',
    exclusivity: 'ignore',
    //anchor: ['top', 'bottom', 'left', 'right'],
    binds: [
        ['visible', options.moon.visible],
        ['anchor', options.moon.anchor, 'value', (am) => ([am, 'right'])],
        ['margins', options.moon.mt, 'value', (mt) => updateMargins(mt, options.moon.ml.value)],
    ],
    monitor,
    child: Widget.Icon({
        class_name: 'wmoon',
        binds: [
            ['icon', options.moon.path, 'value', v => `${v}${moonva.value}.png`],
        ],
    }),
});
