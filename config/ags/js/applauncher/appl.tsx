import Apps from "gi://AstalApps"
import { App, Astal, Gdk, Gtk } from "astal/gtk3"
import { execAsync } from "astal/process"
import { Variable, bind } from "astal"
import AppButton from './applitem.tsx'
import Mpris from "gi://AstalMpris";
import { CoverArt, ArtistLabel, TitleLabel, PlayPauseButton, PlayPrev, PlayNex } from "../misc/mpris.tsx";
import { readFile } from "astal"
import vars from "../vars.js"

function hide() {
    App.get_window("launcher")!.hide()
}

function MBox({ player }) {
		return <box className="media" vertical>
				<box vertical>
					<centerbox>
						<box />
						<box className="playertop">
							<CoverArt player={player} />
						</box>
						<box />
					</centerbox>
					<box vertical className="playerbottom">
						<TitleLabel justify={Gtk.Justification.CENTER} player={player} />
						<ArtistLabel justify={Gtk.Justification.CENTER} player={player} />
						<centerbox horizontal>
							<box />
							<box spacing={4}>
								<PlayPrev player={player}/>
								<PlayPauseButton player={player}/>
								<PlayNex player={player}/>
							</box>
							<box />
						</centerbox>
					</box>
				</box>
		</box>
}

export default function Applauncher() {
    const { CENTER } = Gtk.Align
    const apps = new Apps.Apps()
		const mpris = Mpris.get_default()

    const text = Variable("")
    const list = text(text => apps.fuzzy_query(text))
    const onEnter = () => {
        if (apps.fuzzy_query(text.get())?.[0]) {
					apps.fuzzy_query(text.get())?.[0].launch()
				} else if (apps.fuzzy_query(text.get())?.[0] == null) {
						if (text.get() === ":q!") {
								execAsync(["poweroff"])
						} else {
								execAsync(["kitty", "--hold", ...text.get().split(" ")])
						}
				}
        hide()
    }

    return <window
        name="launcher"
        anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.BOTTOM}
        exclusivity={Astal.Exclusivity.IGNORE}
        keymode={Astal.Keymode.ON_DEMAND}
        onShow={() => text.set("")}
				application={App}
				visible={false}
        onKeyPressEvent={function (self, event: Gdk.Event) {
            if (event.get_keyval()[1] === Gdk.KEY_Escape)
                self.hide()
        }}>
        <box>
            <eventbox widthRequest={4000} expand onClick={hide} />
            <box hexpand={false} vertical>
                <eventbox heightRequest={200} onClick={hide} />
								<box className="Applauncher" horizontal>
										<box vertical widthRequest={400}>
											{bind(mpris, "players").as(arr => arr.length > 0 ? arr.slice(0,1).map(player =>
												<MBox player={player} />
												) : <label label="Nothing Playing" />)}
										</box>
										<box vertical widthRequest={400}>
											<entry
													placeholderText="Search"
													text={text()}
													onChanged={self => text.set(self.text)}
													onActivate={onEnter}
											/>
											<scrollable vexpand>
													<box spacing={6}  vertical>
														{list.as(list => {
															var banned = readFile(vars.cacheDir + "/banned").replaceAll("\n", "").split(", ")
															console.log(list)
															const filterd = list.filter((v) => banned.indexOf(v.name) == -1) 
															console.log(filterd)
															return filterd.map(app => (
																<AppButton app={app} />
														))})}
													</box>
											</scrollable>
										</box>
								</box>
                <eventbox expand onClick={hide} />
            </box>
					<eventbox widthRequest={4000} expand onClick={hide} />
        </box>
    </window>
}
