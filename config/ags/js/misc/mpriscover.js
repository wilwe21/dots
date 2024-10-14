import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import icons from '../icons.js';
import { blurImg } from '../utils.js';

function rep(n, s, e) {
	if (n.toLowerCase().search(`${s}`) > -1 && n.toLowerCase().search(`${e}`) > -1) {
		var naw = n.substring(n.toLowerCase().search(`${s}`)+1, n.toLowerCase().search(`${e}`)).toLowerCase()
		if (naw.search("cover") > -1 || naw.search("animatic") > -1 || naw.search("lyrics") > -1 || naw.search("remix") > -1 || naw.search("video") > -1 || naw.search("remastered") > -1 || naw.search("video") > -1 || naw.search("music") > -1 || naw.search("read") > -1 || naw.search("description") > -1) {
			var reg = new RegExp(`${s}`+naw+`${e}`, "gi");
			var n = n.replace(reg, "")
		}
	}
	return n
}

/**
 * @param {import('types/service/mpris').MprisPlayer} player
 * @param {import('types/widgets/box').BoxProps=} props
 */
export const CoverArt = (player, props) => Widget.Box({
    ...props,
    class_name: 'cover',
    css: player.bind('cover_path').transform(p =>
        `background-image: url("${p}")`),
});

/**
 * @param {import('types/service/mpris').MprisPlayer} player
 * @param {import('types/widgets/box').BoxProps=} props
 */
export const BlurredCoverArt = (player, props) => Widget.Box({
    ...props,
    class_name: 'blurred-cover',
});

/**
 * @param {import('types/service/mpris').MprisPlayer} player
 * @param {import('types/widgets/label').Props=} props
 */
export const TitleLabel = (player, props) => Widget.Label({
    ...props,
    class_name: 'title',
    label: player.bind('track_title').transform(n => {
		var a = player.track_artists[0]
		var n = rep(n, "\\(", "\\)")
		var n = rep(n, "【", "】")
		var n = rep(n, "\\[", "\\]")
		var split = n.split(" - ")
		if (split.length > 1) {
			var sub0 = split[0].toLowerCase().search(a.toLowerCase())
			var sub1 = split[1].toLowerCase().search(a.toLowerCase())
			var sub2 = split[1].toLowerCase().search("fan song")
			if (sub0 > -1 && !( sub1 > -1 || sub2 > -1)) {
				var n = split[1]
			} else if (sub1 > -1 || sub2 > -1) {
				if (sub1 >= 1) {
					var j = split[1].substring(0, sub1)
					if (j.length >= 5) {
						var n = j
					}
				} else {
					var n = split[0]
				}
			} else {
				var n = split[1]
			}
		}
		return n
	}),
});

/**
 * @param {import('types/service/mpris').MprisPlayer} player
 * @param {import('types/widgets/label').Props=} props
 */
export const ArtistLabel = (player, props) => Widget.Label({
    ...props,
    class_name: 'artist',
    label: player.bind('track_artists').transform(a => {
		if (a == "Ponies At Dawn") {
			var t = player.track_title.split(" - ")
			return t[0]
		}
		return a.join(', ') || ''
	}),
});

/**
 * @param {import('types/service/mpris').MprisPlayer} player
 * @param {import('types/widgets/icon').Props & { symbolic?: boolean }=} props
 */
export const PlayerIcon = (player, { symbolic = true, ...props } = {}) => Widget.Icon({
    ...props,
    class_name: 'player-icon',
    tooltip_text: player.identity || '',
    setup: self => self.hook(player, icon => {
        const name = `${player.entry}${symbolic ? '-symbolic' : ''}`;
        Utils.lookUpIcon(name)
            ? icon.icon = name
            : icon.icon = icons.mpris.fallback;
    }),
});

/**
 * @param {import('types/service/mpris').MprisPlayer} player
 * @param {import('types/widgets/slider').SliderProps=} props
 */
export const PositionSlider = (player, props) => Widget.Slider({
    ...props,
    class_name: 'position-slider',
    draw_value: false,
    on_change: ({ value }) => player.position = player.length * value,
    setup: self => {
        const update = () => {
            if (self.dragging)
                return;

            self.visible = player.length > 0;
            if (player.length > 0)
                self.value = player.position / player.length;
        };
        self.hook(player, update);
        self.hook(player, update, 'position');
        self.poll(1000, update);
    },
});

/** @param {number} length */
function lengthStr(length) {
    const min = Math.floor(length / 60);
    const sec = Math.floor(length % 60);
    const sec0 = sec < 10 ? '0' : '';
    return `${min}:${sec0}${sec}`;
}

/** @param {import('types/service/mpris').MprisPlayer} player */
export const PositionLabel = player => Widget.Label({
    setup: self => {
        const update = (_, time) => {
            player.length > 0
                ? self.label = lengthStr(time || player.position)
                : self.visible = !!player;
        };
        self.hook(player, update, 'position');
        self.poll(1000, update);
    },
});

/** @param {import('types/service/mpris').MprisPlayer} player */
export const LengthLabel = player => Widget.Label({
    label: player.bind('length').transform(l => lengthStr(l)),
    visible: player.bind('length').transform(l => l > 0),
});

/** @param {import('types/service/mpris').MprisPlayer} player */
export const Slash = player => Widget.Label({
    label: '/',
    visible: player.bind('length').transform(l => l > 0),
});

/**
 * @param {Object} o
 * @param {import('types/service/mpris').MprisPlayer} o.player
 * @param {import('types/widgets/stack').StackProps['children']} o.children
 * @param {'shuffle' | 'loop' | 'playPause' | 'previous' | 'next'} o.onClick
 * @param {string} o.prop
 * @param {string} o.canProp
 * @param {any} o.cantValue
 */
const PlayerButton = ({ player, children, onClick, prop, canProp, cantValue }) => Widget.Button({
    child: Widget.Stack({ children }).bind('shown', player, prop, p => `${p}`),
    on_clicked: () => player[onClick](),
    visible: player.bind(canProp).transform(c => c !== cantValue),
});

/** @param {import('types/service/mpris').MprisPlayer} player */
export const ShuffleButton = player => PlayerButton({
    player,
    children: {
        'true': Widget.Icon(icons.mpris.shuffle.enabled),
        'false': Widget.Icon(icons.mpris.shuffle.disabled),
    },
    onClick: 'shuffle',
    prop: 'shuffle-status',
    canProp: 'shuffle-status',
    cantValue: null,
});

/** @param {import('types/service/mpris').MprisPlayer} player */
export const LoopButton = player => PlayerButton({
    player,
    children: {
        'None': Widget.Icon(icons.mpris.loop.none),
        'Track': Widget.Icon(icons.mpris.loop.track),
        'Playlist': Widget.Icon(icons.mpris.loop.playlist),
    },
    onClick: 'loop',
    prop: 'loop-status',
    canProp: 'loop-status',
    cantValue: null,
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

