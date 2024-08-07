import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import options from '../options.js';
import { lookUpIcon } from 'resource:///com/github/Aylur/ags/utils.js';
import { launchApp } from '../utils.js';

/** @param {import('resource:///com/github/Aylur/ags/service/applications.js').Application} app */
export default app => {
    const title = Widget.Label({
        class_name: 'title',
        label: app.name,
        visible: options.applauncher.labvisible.bind('value'),
        xalign: 0,
        vpack: 'center',
        truncate: 'end',
    });

    const description = Widget.Label({
        class_name: 'description',
        label: app.description || '',
        visible: options.applauncher.descvisible.bind('value'),
        wrap: true,
        xalign: 0,
        justification: 'left',
        vpack: 'center',
    });

    const icon = Widget.Icon({
        icon: lookUpIcon(app.icon_name || '') ? app.icon_name || '' : '',
        size: options.applauncher.icon_size.bind('value'),
        visible: options.applauncher.icovisible.bind('value'),
    });

    const textBox = Widget.Box({
        vertical: true,
        vpack: 'center',
        children: app.description ? [title, description] : [title],
    });

    return Widget.Button({
        class_name: 'app-item',
        attribute: app,
        on_clicked: () => {
            App.closeWindow('applauncher');
			launchApp(app)
        },
        child: Widget.Box({
            children: [icon, textBox],
        }),
    });
};
