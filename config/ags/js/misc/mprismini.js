import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import options from '../options.js';
import icons from '../icons.js';

export const TitleLabel = (player, props) => Widget.Label({
    ...props,
    class_name: 'title',
    label: player.bind('track_title').transform(n => {
        if (n.length > options.bar.player_length.value) {
            var add = '...'
        } else { var add = '' }
            return(n).substring(0, options.bar.player_length.value)+String(`${add}`);
        }),
});

const PlayerButton = ({ player, children, onClick, prop, canProp, cantValue }) => Widget.Button({
    child: Widget.Stack({ children }).bind('shown', player, prop, p => `${p}`),
    on_clicked: () => player[onClick](),
    visible: player.bind(canProp).transform(c => c !== cantValue),
});

/** @param {import('types/service/mpris').MprisPlayer} player */
export const PlayPauseButton = player => PlayerButton({
    player,
    children: {
        'Playing': Widget.Icon(icons.mpris.playing),
        'Paused': Widget.Icon(icons.mpris.paused),
        'Stopped': Widget.Icon(icons.mpris.stopped),
    },
    onClick: 'playPause',
    prop: 'play-back-status',
    canProp: 'can-play',
    cantValue: false,
});

/** @param {import('types/service/mpris').MprisPlayer} player */
export const PreviousButton = player => PlayerButton({
    player,
    children: {
        'true': Widget.Icon(icons.mpris.prev),
    },
    onClick: 'previous',
    prop: 'can-go-prev',
    canProp: 'can-go-prev',
    cantValue: false,
});

/** @param {import('types/service/mpris').MprisPlayer} player */
export const NextButton = player => PlayerButton({
    player,
    children: {
        'true': Widget.Icon(icons.mpris.next),
    },
    onClick: 'next',
    prop: 'can-go-next',
    canProp: 'can-go-next',
    cantValue: false,
});
