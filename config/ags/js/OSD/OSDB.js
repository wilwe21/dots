import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import Applications from 'resource:///com/github/Aylur/ags/service/applications.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import WW from '../misc/WW.js';
import * as vars from '../variables.js';
import Brightness from '../services/brightness.js';
import icons from '../icons.js';
import { launchApp } from '../utils.js';
import options from '../options.js';

const BritSlider = () => Widget.Slider({
    hexpand: false,
    vertical: false,
    class_name: 'brightnessslider',
    draw_value: false,
    value: Brightness.bind('screen'),
    on_change: ({ value }) => Brightness.screen = value,
});

export default () => WW({
    name: 'OSDB',
    layer: "overlay",
    visible: false,
    setup: self => {
    let count = 0
    self.hook(Brightness, () => {
        self.visible = true
        count++
    })
    self.hook(Brightness, () =>{
        Utils.timeout(options.osd.time.value, () => {
            count--
            if(count===0) self.visible = false
        })
    })
    },
    anchor: options.osd.anchor.bind('value'),
    margins: options.osd.margins.bind('value'),
    child: Widget.Box({
        class_name: 'OSD',
        children: [
            Widget.Box({
                vertical: true,
                class_name: 'vslidebox',
                children: [
                    Widget.Box({
                        children: [
                            Widget.Icon({
				icon: icons.brightness.indicator,
				class_name: "brighticon",
			    }),
                            Widget.Label().hook(Brightness, self => {
                                const lab = String(parseInt(Brightness.screen * 100))
                                self.label = lab + '%'
                            })
                        ]
                    }),
                    BritSlider(),
                ]
            })
        ]
    })
});
