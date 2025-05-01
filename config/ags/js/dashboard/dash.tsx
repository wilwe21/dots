import { App, Astal, Gdk, Gtk } from "astal/gtk3"
import { Variable, GLib, bind } from "astal"
import Calendar from "./calendar"

function hide() {
    App.get_window("dash")!.hide()
}

export default function Dash() {
		const time = Variable<String>("").poll(1000, () =>
				GLib.DateTime.new_now_local().format("%H:%M:%S")!)
	
    return <window
        name="dash"
        anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.BOTTOM}
        exclusivity={Astal.Exclusivity.IGNORE}
        keymode={Astal.Keymode.ON_DEMAND}
				application={App}
				visible={false}
				onDestroy={() => time.drop()}
        onKeyPressEvent={function (self, event: Gdk.Event) {
            if (event.get_keyval()[1] === Gdk.KEY_Escape)
                self.hide()
        }}>
				<box>
            <eventbox widthRequest={4000} expand onClick={hide} />
            <box hexpand={false} vertical>
                <eventbox heightRequest={32} onClick={hide} />
								<box className="Dash" vertical>
										<label label={time()} />
										<Calendar day={GLib.DateTime.new_now_local().format("%d")}/>
								</box>
                <eventbox expand onClick={hide} />
            </box>
            <eventbox widthRequest={4000} expand onClick={hide} />
        </box>
		</window>
}
