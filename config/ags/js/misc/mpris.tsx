import { bind } from "astal"
import { timeout } from "astal/time"
import { Gtk } from "astal/gtk3"
import Mpris from "gi://AstalMpris"
import icons from "../icons.ts"
import options from "../options.ts"
import Pango from "gi://Pango?version=1.0"

function rep(n, s, e) {
	let arr = [...n]
	for (let i = 0; i < arr.filter( x => x === `${s}`).length + 1; i++) {
		if (n.toLowerCase().search(`${s}`) > -1 && n.toLowerCase().search(`${e}`) > -1) {
			var naw = n.substring(n.toLowerCase().search(`${s}`)+1, n.toLowerCase().search(`${e}`)).toLowerCase()
			if (naw.search("cover") > -1 || naw.search("animatic") > -1 || naw.search("animation") > -1 || naw.search("lyrics") > -1 || naw.search("remix") > -1 || naw.search("video") > -1 || naw.search("remastered") > -1 || naw.search("video") > -1 || naw.search("music") > -1 || naw.search("read") > -1 || naw.search("description") > -1 || naw.search("fan") > -1 || naw.search("song") > -1) {
				var reg = new RegExp(`${s}`+naw+`${e}`, "gi");
				n = n.replace(reg, "")
			}
		}
	}
	return n
}

function transformTit(n,a, len) {
		var n = rep(n, "\\(", "\\)")
		var n = rep(n, "【", "】")
		var n = rep(n, "「", "」")
		var n = rep(n, "\\[", "\\]")
		var split = n.split(" - ")
		if (split.length > 1 && split[1].search("Fan") == -1 && split[1].search("fan") == -1 && split[1].replaceAll(" ", "").toLowerCase() !== a.replaceAll(" ", "").toLowerCase()) {
				var n = split[1]
		} else {
				var n = split[0]
		}
		var n = n.replaceAll('"', '');
		if (len !== -1) {
        	if (n.length > len) {
            	var add = '...'
        	} else { var add = '' }
			return (n).substring(0, len)+String(`${add}`)
		}
		return n
}

const mpris = Mpris.get_default()
const labelList = ["Ponies At Dawn", "Cider Party", "Mumble Etc.", "MrSuicideSheep", "Dubstep uNk", "CreatureCore"]

export const TitleButton = ({ props, player, len = -1 }) => {
    return <button className="Title" {...props}
					label={bind(player, "title").as(() =>
         			transformTit(player.title,player.artist, len)
         	)}
					onClicked={self => {
								var a = player.artist || ""
								var a = a.split(' - Topic')[0]
								if (labelList.includes(a)) {
										self.label = player.title.split(' - ')[0]
								} else {
									  self.label = a
								}
								timeout(1800, ()=> self.label=transformTit(player.title,player.artist, len))
					}}
				/> 
}

export const TitleLabel = ({ player, justify = Gtk.Justification.LEFT, ellipsize = Pango.EllipsizeMode.NONE, len = -1 }) => {
    return <label className="Title" 
					expand={false}
					wrap
					wrapMode={Gtk.WrapMode.WORD}
					ellipsize={ellipsize}
					justify={justify}
					label={bind(player, "title").as(() =>
         			transformTit(player.title,player.artist, len)
         	)}
				/> 
}

export const CoverArt = ({props, player}) => {
		const art = bind(player, "coverArt").as(c => `background-image: url('${c}')`)
		return <box {...props} css={art} className="coverArt" />
};

export const ArtistLabel = ({props, player}) => {
	return <label className="artist" {...props}
							label={bind(player, "artist").as(() => {
										var a = player.artist
										var a = a.split(' - Topic')[0]
										if (labelList.includes(a)) {
											return player.title.split(' - ')[0]
										}
										return a
							})} />
};

export const PlayPauseButton = ({ props, player }) => {
		const playIcon = bind(player, "playbackStatus").as(s =>
        s === Mpris.PlaybackStatus.PLAYING
            ? "media-playback-pause-symbolic"
            : "media-playback-start-symbolic"
    )
		return <button className="PlayPause" {...props} 
						visible={bind(player, "canControl")}
						onClicked={() => player.play_pause()}>
							<icon icon={playIcon}/>	
					</button>
};

export const PlayPrev = ({ props, player }) => {
		return <button className="Prev" {...props}
						visible={bind(player, "canGoPrevious")}
						onClicked={() => player.previous()}>
							<icon icon={icons.mpris.prev}/>
					</button>
};

export const PlayNex = ({ props, player }) => {
		return <button className="Nex" {...props} 
						visible={bind(player, "canGoNext")}
						onClicked={() => player.next()}>
							<icon icon={icons.mpris.next}/>	
					</button>
};
