import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Mpris from 'resource:///com/github/Aylur/ags/service/mpris.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import Applications from 'resource:///com/github/Aylur/ags/service/applications.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import WW from '../misc/WW.js';
import * as mpris from '../misc/mpris.js';
import * as vars from '../variables.js';
import icons from '../icons.js';
import { launchApp } from '../utils.js';
import options from '../options.js';

/** @param {import('types/service/mpris').MprisPlayer} player */
const TextBox = player => Widget.Box({
    children: [
        Widget.Box({
            hexpand: true,
            vertical: true,
            class_name: 'labels',
            children: [
                mpris.TitleLabel(player, {
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
    ],
});

/** @param {import('types/service/mpris').MprisPlayer} player */
const PlayerBox = player => Widget.Box({
    class_name: `player ${player.name}`,
    child: TextBox(player),
});
export default () => WW({
    name: 'OSDM',
    layer: options.info.layer.bind('value'),
    class_name: 'OSDM',
    anchor: options.info.anchor.bind('value'),
    margins: options.info.margins.bind('value'),
    visible: false,
    setup: self => {
	let count = 0
	self.hook(Mpris, () => {
		Utils.timeout(550, () => {
			self.visible = true
			count++
		})
	},"changed")
	self.hook(Mpris, () => {
		Utils.timeout(options.osd.time.value+1100, () => {
			count--
			if (count===0) self.visible = false
		})
	},"changed")
    },
    child: 
        Widget.Box({
	    visible: Mpris.bind('players').transform(v => v.length > 0),
            children: [
                Widget.Box({
                    vertical: true,
                    hexpand: true,
                    children: Mpris.bind('players').transform(ps =>  
                            ps.filter(p => !options.mpris.black_list.value
                                .includes(p.identity)).map(PlayerBox)),
	            }),
	            Widget.Box({
	                class_name: 'vlab',
	                child: vars.volume(),
	            }),
	        ],
	    }),
});
