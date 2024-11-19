import { bind } from "astal"
import Mpris from "gi://AstalMpris";
import { TitleLabel, PlayPauseButton, PlayPrev, PlayNex } from "../../misc/mpris.tsx";

function MBox({ player }) {
		print(player)
		return <box>
				<PlayPrev player={player}/>
				<PlayPauseButton player={player}/>
				<PlayNex player={player}/>
				<TitleLabel player={player} len={50} />
		</box>
}

export default function Media() {
		const mpris = Mpris.get_default()
		return <box>{bind(mpris, "players").as(arr => arr.slice(0,1).map(player =>
				 <MBox player={player} />
		))}</box>
}

