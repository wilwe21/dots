import { bind } from "astal"
import Mpris from "gi://AstalMpris"

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

export function TitleLabel() {
		const mpris = Mpris.get_default()
    return <box>{bind(mpris, "players").as(c => c[0] ? 
				<label 
					label={bind(c[0], "title").as(() =>
         			transformTit(c[0].title,c[0].artist)
         	)}
				/> 
				: <label label="Nothing Playing" />)
		} </box>
}
