import { App, Astal, Gdk, Gtk } from "astal/gtk3"
import { bind } from "astal"
import Hyprland from "gi://AstalHyprland"

const hypr = Hyprland.get_default();

function hide() {
    App.get_window("over")!.hide()
}

export default function Over() {
    return <window
        name="over"
        anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.BOTTOM}
        exclusivity={Astal.Exclusivity.IGNORE}
        keymode={Astal.Keymode.ON_DEMAND}
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
                <box className="Over" vertical>
										{bind(hypr, "clients").as(v => {
												let l = []
												for (const client of hypr.get_clients()) {
														l.push(
														<button 
																onClicked={() => {client.focus(); hide()}}
																label={`${client.workspace.id} ${client.title}`} 
														/>)
												}
												return l
										})
										}
                </box>
                <eventbox expand onClick={hide} />
            </box>
            <eventbox widthRequest={4000} expand onClick={hide} />
        </box>
    </window>
}

