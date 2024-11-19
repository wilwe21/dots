import { bind } from "astal"
import Mpris from "gi://AstalMpris";
import { TitleLabel, PlayPauseButton } from "../../misc/mpris.tsx";

function MBox({ player }) {
		print(player)
		return <box>
				<PlayPauseButton player={player}/>
				<TitleLabel player={player}/>
		</box>
}

export default function Media() {
		const mpris = Mpris.get_default()
		return <box>{bind(mpris, "players").as(arr => arr.map(player =>
				 <MBox player={player} />
		))}</box>
}

