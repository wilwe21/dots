import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Clock from '../misc/Clock.js';
import * as vars from '../variables.js';


export default () => Widget.Box({
    vertical: true,
    class_name: 'datemenu vertical',
    children: [
        Widget.Box({
            class_name: 'clock-box',
            vertical: true,
            children: [
                Clock({ format: '%H:%M' }),
                Widget.Label({
                    class_name: 'temperatura',
                    label: vars.temperatura.bind('value'),
                }),
                Widget.Label({
                    class_name: 'chmury',
                    label: vars.chmury.bind('value'),
                }),
                Widget.CenterBox ({
                    class_name: 'moon-box',
                    center_widget: Widget.Box({
                        children: [
                            Widget.Label({
                                class_name: 'moon-name',
                                label: 'Faza Księżyca: ',
                            }),
                            Widget.Label({
                                class_name: 'moon',
                                label: vars.moon.bind('value'),
                            }),
                        ],
                    }),
                }),
            ],
        }),
        Widget.Box({
            class_name: 'calendar',
            children: [
                Widget.Calendar({
                    hexpand: true,
                    hpack: 'center',
                }),
            ],
        }),
    ],
});
