import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import GLib from 'gi://GLib';
import options from '../options.js';

export default () => Widget.Label({
    class_name: 'lclock',
    setup: self => {
        self.poll('1000',() => {
            self.label = GLib.DateTime.new_now_local().format(options.clock.main.value);
        })
    },
});
