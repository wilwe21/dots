import { Gtk } from "astal/gtk3"
import { exec } from "astal/process"

export default function Poffbutt() {
		return <button
					onClicked={() => exec("poweroff")}
					halign={Gtk.Align.center}>
					<label label="exit" />
			</button>
}
