import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import icons from '../icons.js';
import GLib from 'gi://GLib';

const MEDIA_CACHE_PATH = Utils.CACHE_DIR + '/media';

/**
 * @param {import('types/service/mpris').MprisPlayer} player
 * @param {import('types/widgets/label').Props=} props
 */
export const TitleLabel = (player, props) => Widget.Label({
    ...props,
    class_name: 'title',
    binds: [['label', player, 'track-title', n => {
        if (n.length > 50) {
            n = n.substring(0, 50);
            return String(n + '...');
        } else {
            return String(n);
        }
        }]],
});

/** @param {import('types/service/mpris').MprisPlayer} player */
export const Slash = player => Widget.Label({
    label: '/',
    connections: [[player, label => {
        label.visible = player.length > 0;
    }]],
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
    child: Widget.Stack({
        items,
        binds: [['shown', player, prop, p => `${p}`]],
    }),
    on_clicked: player[onClick].bind(player),
    binds: [['visible', player, canProp, c => c !== cantValue]],
});

/** @param {import('types/service/mpris').MprisPlayer} player */
export const ShuffleButton = player => PlayerButton({
    player,
    items: [
        ['true', Widget.Icon(icons.mpris.shuffle.enabled
        )],
        ['false', Widget.Icon(icons.mpris.shuffle.disabled
        )],
    ],
    onClick: 'shuffle',
    prop: 'shuffle-status',
    canProp: 'shuffle-status',
    cantValue: null,
});

/** @param {import('types/service/mpris').MprisPlayer} player */
export const LoopButton = player => PlayerButton({
    player,
    items: [
        ['None', Widget.Icon(icons.mpris.loop.none
        )],
        ['Track', Widget.Icon(icons.mpris.loop.track
        )],
        ['Playlist', Widget.Icon(icons.mpris.loop.playlist
        )],
    ],
    onClick: 'loop',
    prop: 'loop-status',
    canProp: 'loop-status',
    cantValue: null,
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
    onClick: 'next',
    prop: 'can-go-next',
    canProp: 'can-go-next',
    cantValue: false,
});
