import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import options from '../options.js';
import icons from '../icons.js';

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

export const TitleLabel = (player, props) => Widget.Label({
    ...props,
    class_name: 'title',
    label: player.bind('track_title').transform(n => {
		var a = player.track_artists[0]
		var n = rep(n, "\\(", "\\)")
		var n = rep(n, "【", "】")
		var n = rep(n, "「", "」")
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
        if (n.length > options.bar.player_length.value) {
            var add = '...'
        } else { var add = '' }
		return(n).substring(0, options.bar.player_length.value)+String(`${add}`);
        }),
});

/**
 * @param {import('types/service/mpris').MprisPlayer} player
 * @param {import('types/widgets/label').Props=} props
 */
export const ArtistLabel = (player, props) => Widget.Label({
    ...props,
    class_name: 'artist',
	label: 'test',
	setup: self => {
		const che = () => {
			var t = player.track_title
			var a = player.track_artists.join(", ") || ""
			if (a == "Ponies At Dawn" || a == "Cider Party") {
				self.label = t.split(' - ')[0]
			} else {
				self.label = a
			}
		}
		self.hook(mpris, () => che(), 'changed')
	}
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
