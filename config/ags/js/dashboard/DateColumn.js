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
                    binds: [['label', vars.temperatura, 'value', n => `${n}`]],
                }),
                Widget.Label({
                    class_name: 'chmury',
                    binds: [['label', vars.chmury, 'value', n => `${n}`]],
                }),
                Widget.Box ({
                    class_name: 'moon-box',
                    children: [
                        Widget.Label({
                            class_name: 'moon-name',
                            label: 'Faza Księżyca: ',
                        }),
                        Widget.Label({
                            class_name: 'moon',
                            binds: [['label', vars.moon, 'value', n => `${n}`]],
                        }),
                    ]
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
