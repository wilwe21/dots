import Mpris from "gi://AstalMpris"
import { bind } from "astal"
import { CoverArt, TitleLabel, ArtistLabel, PlayPauseButton, PlayPrev, PlayNex} from "../../misc/mpris"
import { Astal, Gtk } from "astal/gtk3"
import {mediaPlayer, mediaPlayerMax} from "../../vars"

function MBox({ player }) {
				return <box className="bordered" horizontal>
					<CoverArt player={player} vexpand/>
					<centerbox vertical className="titlebox" hexpand>
						<TitleLabel justify={Gtk.Justification.CENTER} player={player} />
						<ArtistLabel justify={Gtk.Justification.CENTER} player={player} /> 
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
		<box className="media" vertical>
			{bind(mpris, "players").as((p) => {
				mediaPlayerMax.set(p.length)
				if (mediaPlayer.get().toString() == "0") {
						mediaPlayer.set(0)
						mediaPlayer.set(1)
				} else {
						mediaPlayer.set(0)
						mediaPlayer.set(parseInt(mediaPlayer.get().toString()))
				}
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
