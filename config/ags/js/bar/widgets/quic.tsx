import { Gtk } from "astal/gtk3"

export default function QuickBox() {
		return <button
					halign={Gtk.Align.center}>
					<label label="quick" />
			</button>
}
