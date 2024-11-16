import Apps from "gi://AstalApps"
import { App, Astal, Gdk, Gtk } from "astal/gtk3"
import Header from "./widgets/Header.tsx"

function hide() {
    App.get_window("qs")!.hide()
}

export default function QuickSettings() {
    return <window
        name="qs"
        anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.RIGHT}
        exclusivity={Astal.Exclusivity.IGNORE}
        keymode={Astal.Keymode.ON_DEMAND}
				setup={self => App.add_window(self) }
				visible={false}
        onKeyPressEvent={function (self, event: Gdk.Event) {
            if (event.get_keyval()[1] === Gdk.KEY_Escape)
                self.hide()
        }}>
        <box vertical>
					<Header />
					<label label="test" />
        </box>
    </window>
}
