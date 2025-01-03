import Mpris from 'resource:///com/github/Aylur/ags/service/mpris.js';
import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import * as mpris from '../../misc/mpris.js';
import options from '../../options.js';

/** @param {import('types/service/mpris').MprisPlayer} player */
const Footer = player => Widget.Box({
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
			setup: self => {
				const SetChild = () => {
					self.child = mpris.TitleLabel(player, options.bar.player_length.value, {
						xalign: 0,
						justification: 'left',
						wrap: false,
					})
				}
				SetChild()
				options.bar.player_length.connect('changed', SetChild)
			}
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
    visible: Mpris.bind("players").transform(v => v.length > 0),
    children: Mpris.bind('players').transform(ps => ps.slice(0, 1).map(PlayerBox)),
});
