import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import GLib from 'gi://GLib';
import options from '../options.js';
import { clock } from '../variables.js';

export default monitor => Widget.Window({
    name: `clock${monitor}`,
    class_name: 'clockmain',
    layer: options.clock.layer.bind('value'),
    exclusivity: 'ignore',
    setup: self => {
        self.bind('null', options.clock.visible, 'value', p =>{
            self.visible = false;
            self.visible = p;
        })
    },
    anchor: options.clock.anchor.bind('value'),
    margins: options.clock.margins.bind('value'),
    monitor,
    child: Widget.CenterBox({
        class_name: 'wclock',
        center_widget: Widget.Label({
            class_name: 'lclock',
            setup: self => {
            self.bind('null', clock, 'value', time => {
                self.label = time.format(options.clock.main.value) || 'wrong format';
            })},
        }),
    }),
});
