import App from 'resource:///com/github/Aylur/ags/app.js';
import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import PanelButton from '../PanelButton.js';
import FontIcon from '../../misc/FontIcon.js';
import { distroIcon } from '../../variables.js';
import options from '../../options.js';

export default () => PanelButton({
    class_name: 'overview',
    window: options.bar.button.bind("value"),
    setup: self => self.connect("clicked", () => {
	App.openWindow(options.bar.button.value)
    }),
    content: Widget.Icon({
        class_name: 'overviewicon',
        icon: options.bar.icon.bind('value').transform(v => {return v === 'distro-icon' ? distroIcon : v;})
    }),
});
