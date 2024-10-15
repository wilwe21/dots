import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Audio from 'resource:///com/github/Aylur/ags/service/audio.js';
import Mpris from 'resource:///com/github/Aylur/ags/service/mpris.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import Applications from 'resource:///com/github/Aylur/ags/service/applications.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import { Variable as Var } from 'resource:///com/github/Aylur/ags/variable.js';
import WW from '../misc/WW.js';
import * as mpris from '../misc/mpris.js';
import * as vars from '../variables.js';
import icons from '../icons.js';
import { launchApp } from '../utils.js';
import options from '../options.js';

const VolumeSlider = (type = 'speaker') => Widget.Slider({
    hexpand: false,
    vertical: true,
    class_name: 'audioslider',
    draw_value: false,
    on_change: ({ value }) => Audio[type].volume = value,
    setup: self => self.hook(Audio, () => {
        self.value = Audio[type]?.volume;
    }, `${type}-changed`),
});

const Footer = player => Widget.CenterBox({
    class_name: 'footer-box',
    center_widget: Widget.Box({
            class_name: 'controls',
            children: [
                Widget.Box({
                    class_name: 'buttonbox',
                   children: [
                    mpris.PreviousButton(player),
                    mpris.PlayPauseButton(player),
                    mpris.NextButton(player),
                   ], 
                }),
            ],
        }),
});

const TextBox = player => Widget.Box({
    vertical: true,
    child: 
        Widget.Box({
            hexpand: true,
            vertical: true,
            class_name: 'labels',
            children: [
                mpris.TitleLabel(player, 'full', {
                    xalign: 0,
                    justification: 'left',
                    wrap: true,
                }),
                mpris.ArtistLabel(player, {
                    xalign: 0,
                    justification: 'left',
                    wrap: true,
                }),
            ],
        }),
});

const PlayerBox = player => Widget.Box({
    class_name: 'shader',
    hexpand: true,
    vexpand: true,
    vertical: false,
    children: [
        Widget.CenterBox({
            vertical: true,
            start_widget: TextBox(player),
            end_widget: Footer(player),
        }),
    ],
});

export default () => WW({
    name: 'OSDA',
    layer: "overlay",
    visible: false,
    setup: self => {
	    let count = 0
	    const vol = new Var(Audio.speaker.volume)
	    self.hook(Audio.speaker, () => {
		if (vol.value === Audio.speaker.volume){
		} else {
			vol.setValue(Audio.speaker.volume)
		}
	    })
	    self.hook(vol, () => {
		self.visible = true
		count++
	    })
	    self.hook(vol, () =>{
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
                hexpand: true,
                class_name: 'media',
				visible: Mpris.bind("players").transform(v => v.length > 0),
                children: Mpris.bind('players').transform(ps => ps.slice(0,1).map(PlayerBox)),
            }),
            Widget.Box({
                vertical: true,
                class_name: 'vslidebox',
                children: [
                    vars.volume(),
                    VolumeSlider(),
                ]
            })
        ]
    })
});
