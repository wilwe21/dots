import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import GLib from 'gi://GLib';
import options from '../options.js';
import * as vars from '../variables.js';

const clock = ({interval = 1000,
    ...rest
} = {}) => Widget.Label({
    class_name: 'lclock',
    ...rest,
    connections: [[interval, label =>
        label.label = GLib.DateTime.new_now_local().format(options.clock.main.value),
    ]],
});

const visibility = self => {
        if (!options.clock.visible.value)
            return self.visible = false;
};

export default monitor => Widget.Window({
    name: `clock${monitor}`,
    class_name: 'clockmain',
    layer: 'background',
    exclusivity: 'ignore',
    binds: [
        ['visible', options.clock.visible],
        ['anchor', options.clock.a1, 'value', (a1) => ([a1, 'right'])],
        ['margins', options.clock.mt, 'value', (mt) => ([mt, options.clock.ml.value])],
    ],
    monitor,
    child: Widget.CenterBox({
        class_name: 'wclock',
        center_widget: clock(),
    }),
});
