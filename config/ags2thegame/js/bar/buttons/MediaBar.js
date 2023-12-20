import Mpris from 'resource:///com/github/Aylur/ags/service/mpris.js';
import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import * as mpris from '../../misc/mprismini.js';
import options from '../../options.js';

/** @param {import('types/service/mpris').MprisPlayer} player */
const Footer = player => Widget.CenterBox({
    class_name: 'footer-box',
    children: [
        Widget.Box({
            class_name: 'controls',
            children: [
                mpris.PreviousButton(player),
                mpris.PlayPauseButton(player),
                mpris.NextButton(player),
            ],
        }),
    ],
});

/** @param {import('types/service/mpris').MprisPlayer} player */
const TextBox = player => Widget.Box({
    children: [
        Widget.Box({
            hexpand: false,
            vertical: false,
            class_name: 'labels',
            children: [
                mpris.TitleLabel(player, {
                    xalign: 0,
                    justification: 'left',
                    wrap: false,
                }),
            ],
        }),
    ],
});

/** @param {import('types/service/mpris').MprisPlayer} player */
const PlayerBox = player => Widget.Box({
    class_name: 'shader',
    hexpand: true,
    vertical: false,
    children: [
        Footer(player),
        TextBox(player),
    ],
});

export default () => Widget.Box({
    vertical: false,
    class_name: 'media vertical',
    connections: [['draw', self => {
        self.visible = Mpris.players.length > 0;
    }]],
    binds: [
        ['children', Mpris, 'players', ps =>
            ps.filter(p => !options.mpris.black_list.value
                .includes(p.identity)).map(PlayerBox)],
    ],
});
