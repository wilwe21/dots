import { bind } from "astal"
import Mpris from "gi://AstalMpris";
import { TitleButton, PlayPauseButton, PlayPrev, PlayNex } from "../../misc/mpris.tsx";
import {mediaPlayer} from "../../vars.js";

function MBox({ player }) {
		return <box className="media">
				<PlayPrev player={player}/>
				<PlayPauseButton player={player}/>
				<PlayNex player={player}/>
				<TitleButton player={player} len={50} />
		</box>
}

export default function Media() {
		const mpris = Mpris.get_default()
		return <box>{bind(mediaPlayer, "value")
						.as(v => {
								const arr = mpris.players
								return arr.length > 0 ? 
								arr.slice(v-1, v).map(player =>
				 <MBox player={player} />
		) : <label label="Nothing Playing" />})}</box>
}

