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
		let leb = [Row([<label label="test test test" />, <label label="test test test" />]), <label label="test test test" />]
    return <window
        name="qs"
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
                <eventbox heightRequest={32} onClick={hide} />
								<centerbox>
										<box><eventbox hexpand onClick={hide} /></box>
										<box><eventbox hexpand onClick={hide} /></box>
										<box className="Quick" vertical>
												<Header />
										</box>
								</centerbox>
                <eventbox expand onClick={hide} />
            </box>
            <eventbox widthRequest={4000} expand onClick={hide} />
        </box>
		</window>
}
