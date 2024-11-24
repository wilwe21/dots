import Apps from "gi://AstalApps"
import { App, Astal, Gdk, Gtk } from "astal/gtk3"
import Hyprland from "gi://AstalHyprland"

const hypr = Hyprland.get_default();

function hide() {
    App.get_window("over")!.hide()
}

export default function Over() {
		let list = []
		for (const client of hypr.get_clients()) {
				list.push(client.title, client.workspace.id)
		}
		print(list)
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
										{list.map(v => <label label={`${v}`} />)}
                </box>
                <eventbox expand onClick={hide} />
            </box>
            <eventbox widthRequest={4000} expand onClick={hide} />
        </box>
    </window>
}

