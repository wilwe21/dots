import { Gtk } from "astal/gtk3"
import Mpris from "gi://AstalMpris"

const mpr = Mpris.Mpris.get_default()
const play = mpr.get_players().slice(0,1)

function lab() {
		let tit = play[0].title
		return <button label={tit} />	
}

export default function player() {
		let av = play.available
		print(play.available)
    return <box>
			{av ? <lab /> : <button label="test" />}
		</box>
} 
