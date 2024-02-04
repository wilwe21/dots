import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Variable from 'resource:///com/github/Aylur/ags/variable.js';
import GLib from 'gi://GLib';
import options from '../options.js';

export default monitor => Widget.Window({
    name: `bgtop${monitor}`,
    class_name: 'bgtopmain',
    layer: options.bgtop.layer.bind('value'),
    exclusivity: 'ignore',
    visible: options.bgtop.visible.bind('value'),
    anchor: options.bgtop.anchor.bind('value'),
    margins: options.bgtop.margins.bind('value'),
    monitor,
    child: Widget.Icon({
        class_name: 'wbgtop',
        icon: options.bgtop.image.bind('value'),
    }),
});
