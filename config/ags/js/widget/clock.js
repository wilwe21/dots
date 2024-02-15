import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import GLib from 'gi://GLib';
import options from '../options.js';
import { clock } from '../variables.js';

export default monitor => Widget.Window({
    name: `clock${monitor}`,
    class_name: 'clockmain',
    layer: options.clock.layer.bind('value'),
    exclusivity: 'ignore',
    visible: options.clock.visible.bind('value'),
    anchor: options.clock.anchor.bind('value'),
    margins: options.clock.margins.bind('value'),
    monitor,
    child: Widget.CenterBox({
        class_name: 'wclock',
        center_widget: Widget.Label({
            class_name: 'lclock',
            label: clock.bind('value').transform(time => {
                return time.format(options.clock.main.value) || 'wrong format';
            }),
        }),
    }),
});
