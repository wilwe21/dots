import Apps from "gi://AstalApps"
import { App, Astal, Gdk, Gtk } from "astal/gtk3"
import Header from "./widgets/Header.tsx"

function hide() {
    App.get_window("qs")!.hide()
}

function Row( menus = []) {
	return <box horizontal>{...menus}</box>
}

function Homo( menus = []) {
	return <box homogeneous>{...menus}</box>
}

export default function QuickSettings() {
		let leb = [Row([<label label="test" />, <label label="test" />]), <label label="test" />]
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
					{Homo(leb)}
        </box>
    </window>
}
