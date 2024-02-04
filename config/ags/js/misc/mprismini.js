import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import icons from '../icons.js';

export const TitleLabel = (player, props) => Widget.Label({
    ...props,
    class_name: 'title',
    label: player.bind('track-title').transform(n => {
        if (n.length > 50) {
            n = n.substring(0, 50);
            return String(n + '...');
        } else {
            return String(n);
        }
        }),
});


/** @param {import('types/service/mpris').MprisPlayer} player */
export const Slash = player => Widget.Label({
    label: '/',
    visible: player.bind('length').transform(l => l > 0),
});

/**
 * @param {Object} o
 * @param {import('types/service/mpris').MprisPlayer} o.player
 * @param {import('types/widgets/stack').StackProps['items']} o.items
 * @param {'shuffle' | 'loop' | 'playPause' | 'previous' | 'next'} o.onClick
 * @param {string} o.prop
 * @param {string} o.canProp
 * @param {any} o.cantValue
 */
const PlayerButton = ({ player, items, onClick, prop, canProp, cantValue }) => Widget.Button({
    cursor: 'pointer',
    child: Widget.Stack({ items }).bind('shown', player, prop, p => `${p}`),
    on_clicked: () => player[onClick](),
    visible: player.bind(canProp).transform(c => c !== cantValue),
});

/** @param {import('types/service/mpris').MprisPlayer} player */
export const PlayPauseButton = player => PlayerButton({
    player,
    items: [
        ['Playing', Widget.Icon(icons.mpris.playing
        )],
        ['Paused', Widget.Icon(icons.mpris.paused
        )],
        ['Stopped', Widget.Icon(icons.mpris.stopped
        )],
    ],
    cursor: 'pointer',
    onClick: 'playPause',
    prop: 'play-back-status',
    canProp: 'can-play',
    cantValue: false,
});

/** @param {import('types/service/mpris').MprisPlayer} player */
export const PreviousButton = player => PlayerButton({
    player,
    items: [
        ['true', Widget.Icon(icons.mpris.prev
        )],
    ],
    cursor: 'pointer',
    onClick: 'previous',
    prop: 'can-go-prev',
    canProp: 'can-go-prev',
    cantValue: false,
});

/** @param {import('types/service/mpris').MprisPlayer} player */
export const NextButton = player => PlayerButton({
    player,
    items: [
        ['true', Widget.Icon(icons.mpris.next
        )],
    ],
    cursor: 'pointer',
    onClick: 'next',
    prop: 'can-go-next',
    canProp: 'can-go-next',
    cantValue: false,
});
