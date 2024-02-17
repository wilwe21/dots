import App from 'resource:///com/github/Aylur/ags/app.js';
import Widget from 'resource:///com/github/Aylur/ags/widget.js';

/** @param {string} windowName */
const Padding = windowName => Widget.EventBox({
    class_name: 'padding',
    hexpand: true,
    vexpand: true,
    setup: w => w.on('button-press-event', () => App.toggleWindow(windowName)),
});

/**
 * @param {import('types/widgets/window').WindowProps & {
 *      name: string
 *      child: import('types/widgets/box').default
 *  }} o
 */
export default ({ name, child, ...rest }) => Widget.Window({
    ...rest,
    class_names: ['popup-window', name],
    name,
    visible: false,
    popup: true,
    focusable: true,
    keymode: 'exclusive',
    setup() {
        child.toggleClassName('window-content');
    },
    child: Widget.CenterBox({
        class_name: 'shader',
        css: 'min-width: 5000px; min-height: 3000px;',
        center_widget: Widget.Box({
            children: [
                Padding(name),
                Widget.CenterBox({
                    vertical: true,
                    center_widget: Widget.Box({
                        children: [
                            Padding(name),
                            child,
                            Padding(name),
                        ],
                    })
                }),
                Padding(name),
            ],
        })
    }),
});
