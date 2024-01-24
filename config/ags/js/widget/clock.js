import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import GLib from 'gi://GLib';
import options from '../options.js';
import clock from './cl.js';

export default monitor => Widget.Window({
    name: `clock${monitor}`,
    class_name: 'clockmain',
    layer: 'background',
    exclusivity: 'ignore',
    visible: options.clock.visible.bind('value'),
    anchor: options.clock.anchor.bind('value'),
    margins: options.clock.margins.bind('value'),
    monitor,
    child: Widget.CenterBox({
        class_name: 'wclock',
        center_widget: clock()
    }),
});
