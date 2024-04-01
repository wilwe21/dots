import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Mpris from 'resource:///com/github/Aylur/ags/service/mpris.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import Applications from 'resource:///com/github/Aylur/ags/service/applications.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import { Variable as Var } from 'resource:///com/github/Aylur/ags/variable.js'
import WW from '../misc/WW.js';
import * as mpris from '../misc/mpris.js';
import * as vars from '../variables.js';
import icons from '../icons.js';
import { launchApp } from '../utils.js';
import options from '../options.js';

const mprisvisible = new Var(false,{ key: false })

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
	Widget.Box({
		class_name: 'vlab',
		child: vars.volume(),
        }),
    ],
});

/** @param {import('types/service/mpris').MprisPlayer} player */
const PlayerBox = player => Widget.Box({
    class_name: `player ${player.name}`,
    vertical: true,
    hexpand: true,
    child: TextBox(player),
    setup: self => {
	let count = 0
	const title = new Var(player.bind("track_title"))
	self.hook(player, () => {
		title.setValue(player.bind("track_title"))
	})
	self.hook(title, () => {
		mprisvisible.setValue(true)
		count++
	})
	self.hook(title, () => {
		Utils.timeout(options.osd.time.value+1100, () => {
			count--
			if (count===0) {
				mprisvisible.setValue(false)
			}
		})
	})
    },
});
export default () => WW({
    name: 'OSDM',
    layer: options.info.layer.bind('value'),
    class_name: 'OSDM',
    anchor: options.info.anchor.bind('value'),
    margins: options.info.margins.bind('value'),
    visible: false,
    setup: self => {
	    self.visible = false,
	    self.hook(mprisvisible, () => {
		self.visible = mprisvisible.value
	    })
    },
    child: 
        Widget.Box({
	    visible: Mpris.bind('players').transform(v => v.length > 0),
            children: Mpris.bind('players').transform(ps =>  
		      ps.filter(p => !options.mpris.black_list.value
			.includes(p.identity)).map(PlayerBox)),
        }),
});
