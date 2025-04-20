import Mpris from "gi://AstalMpris"
import { bind } from "astal"
import { CoverArt, TitleLabel, ArtistLabel, PlayPauseButton, PlayPrev, PlayNex} from "../../misc/mpris"
import { Astal, Gtk } from "astal/gtk3"

function MBox({ player }) {
				return <box className="bordered" horizontal>
					<CoverArt player={player} vexpand/>
					<centerbox vertical className="titlebox" hexpand>
						<TitleLabel ellipsize={true} justify={Gtk.Justification.CENTER} player={player} />
						<ArtistLabel ellipsize={true} justify={Gtk.Justification.CENTER} player={player} /> 
						<centerbox>
							<box />
							<box>
								<PlayPrev player={player} />
								<PlayPauseButton player={player} />
								<PlayNex player={player} />
							</box>
							<box />
						</centerbox>
					</centerbox>
				</box>
}

export const Media = () => {
	const mpris = Mpris.get_default();

	return (
		<box className="media">
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
