import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import Applications from 'resource:///com/github/Aylur/ags/service/applications.js';
import FontIcon from '../misc/FontIcon.js';
import icons from '../icons.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import WW from '../misc/WW.js'
import options from '../options.js';

export default () => WW({
    name: `sensors`,
    layer: "overlay",
    keymode: 'none',
    anchor: ['top', 'right'],
    visible: false,
	child: Widget.Box({
		class_name: 'senswin',
		child: Widget.Label({
			class_name: 'sensorslab',
		}).poll(1000, self => {
		self.label = Utils.exec("sensors -A")
		})
	})
});
