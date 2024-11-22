import { App, Gtk } from "astal/gtk3"

export default function QuickBox() {
		return <button
					onClicked={() => App.get_window("qs").show()}
					halign={Gtk.Align.center}>
					<label label="quick" />
			</button>
}
