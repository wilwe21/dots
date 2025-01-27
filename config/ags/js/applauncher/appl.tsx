import Apps from "gi://AstalApps"
import { App, Astal, Gdk, Gtk } from "astal/gtk3"
import { execAsync } from "astal/process"
import { Variable, bind } from "astal"
import AppButton from './applitem.tsx'
import Mpris from "gi://AstalMpris";
import { TitleLabel, PlayPauseButton, PlayPrev, PlayNex } from "../misc/mpris.tsx";

function hide() {
    App.get_window("launcher")!.hide()
}

function MBox({ player }) {
		return <box className="media">
				<PlayPrev player={player}/>
				<PlayPauseButton player={player}/>
				<PlayNex player={player}/>
				<TitleLabel player={player} len={50} ellipsize={true} justification={"Center"}/>
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
                <eventbox heightRequest={100} onClick={hide} />
								<box className="Applauncher" vertical>
										<entry
												placeholderText="Search"
												text={text()}
												onChanged={self => text.set(self.text)}
												onActivate={onEnter}
										/>
										<scrollable vexpand>
												<box spacing={6}  vertical>
													{list.as(list => list.map(app => (
															<AppButton app={app} />
													)))}
												</box>
										</scrollable>
								</box>
                <eventbox expand onClick={hide} />
            </box>
					<eventbox widthRequest={4000} expand onClick={hide} />
        </box>
    </window>
}
										//<box vertical>{bind(mpris, "players").as(arr => arr.length > 0 ? arr.slice(0,1).map(player =>
										//		<MBox player={player} />
										//		) : <label label="Nothing Playing" />)}
										//</box>
