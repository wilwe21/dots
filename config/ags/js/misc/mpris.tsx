import { bind } from "astal"
import Mpris from "gi://AstalMpris"
import icons from "../icons.ts"

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

function transformTit(n,a) {
		var n = rep(n, "\\(", "\\)")
		var n = rep(n, "【", "】")
		var n = rep(n, "「", "」")
		var n = rep(n, "\\[", "\\]")
		var split = n.split(" - ")
		if (split.length > 1) {
				var n = split[1]
		} else {
				var n = split[0]
		}
		if (50 !== -1) {
        	if (n.length > 50) {
            	var add = '...'
        	} else { var add = '' }
			return (n).substring(0, 50)+String(`${add}`)
		}
		return n
}

const mpris = Mpris.get_default()

export const TitleLabel = (props) => {
    return <box {...props}>{bind(mpris, "players").as(c => c[0] ? 
				<label 
					label={bind(c[0], "title").as(() =>
         			transformTit(c[0].title,c[0].artist)
         	)}
				/> 
				: <label label="Nothing Playing" />)
		} </box>
}

export const CoverArt = (props) => {
		return <box {...props}>{bind(mpris, "players").as(c => c[0] && <box css={`background-image: url("${c[0].cover_path}")`} />)}</box>
};

export const ArtistLabel = (props) => {
	return <box {...props} className="artist">{
					bind(mpris, "players").as(c => 
							c[0] && <label 
							label={bind(c[0], "artist").as(() => {
										var a = c[0].artist.join(", ") || ""
										var a = a.split(' - Topic')[0]
										if (a == "Ponies At Dawn" || a == "Cider Party" || a == "Mumble Etc.") {
											return c[0].title.split(' - ')[0]
										}
										return a
							})} />)}</box>
};

const PlayerButton = ({onClick, icon, canProp, cantValue }) => {
		const playPause = bind(mpris, "players").as(play => bind(play[0], "playbackStatus").as(s => { 				return <icon icon={
							s === Mpris.PlaybackStatus.PLAYING
									? icons.mpris.playing
									: icons.mpris.paused}/>
					}
		))
		return <button {...{visible: bind(mpris, "players").as(play => bind(play[0], canProp).as(c => c !== cantValue))}}>
		{icon == "playPause" && <playPause />}</button>
};

export const PlayPauseButton = () => PlayerButton({
    icon: 'playPause',
    onClick: 'playPause',
    canProp: 'canControl',
    cantValue: false,
});
