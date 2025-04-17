import Mpris from "gi://AstalMpris"
import { bind } from "astal"
import { TitleLabel, ArtistLabel, PlayPauseButton, PlayPrev, PlayNex} from "../../misc/mpris"
import { Astal, Gtk } from "astal/gtk3"

function MBox({ player }) {
				return <box className="media" vertical>
					<TitleLabel player={player} />
					<ArtistLabel player={player} /> 
					<box>
						<PlayPrev player={player} />
						<PlayPauseButton player={player} />
						<PlayNex player={player} />
					</box>
				</box>
}

export const Media = () => {
	const mpris = Mpris.get_default();

	return (
		<box>
			{bind(mpris, "players").as((p) => {
				if (p.length === 0) {
					return <></>
				}

				return (
						p.map(player => <MBox player={player} />)
				)
			})}	
		</box>
	)
}
