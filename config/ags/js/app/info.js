import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Mpris from 'resource:///com/github/Aylur/ags/service/mpris.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import Applications from 'resource:///com/github/Aylur/ags/service/applications.js';
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

export default () => Widget.Window({
    name: 'info',
    layer: 'overlay',
    class_name: 'info',
    anchor: ['right', 'bottom'],
    margins: ['20', '20'],
    child: 
        Widget.Box({
            children: [
                Widget.Box({
                    vertical: true,
                    hexpand: true,
                    connections: [
                        ['draw', self => {
                        self.visible = Mpris.players.length > 0;
                        }],
                    ],
                    binds: [
                        ['children', Mpris, 'players', ps =>  
                            ps.filter(p => !options.mpris.black_list.value
                                .includes(p.identity)).map(PlayerBox)
                        ]
                    ],
	            }),
	            Widget.Label({
	                class_name: 'inflabel',
                    binds: [['label', vars.volume, 'value', s => `${s}%`]],
	            }),
	        ],
	    }),
});
