import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import GLib from 'gi://GLib';
import options from '../options.js';
import { clock } from '../variables.js';

export default monitor => Widget.Window({
    name: `clock${monitor}`,
    class_name: 'clockmain',
    exclusivity: 'ignore',
    anchor: options.clock.anchor.bind('value'),
    margins: options.clock.margins.bind('value'),
	setup: self => {
		self.bind('null', options.clock.visible, 'value', v => {
			self.visible = false;
			self.visible = true;	
			self.visible = v;
		})
	},
	layer: "bottom",
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
