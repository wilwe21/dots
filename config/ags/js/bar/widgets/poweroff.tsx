import { Gtk } from "astal/gtk3"
import { exec } from "astal/process"
import icons from "../../icons.ts"

export default function Poffbutt() {
		return <button
					className="power"
					onClicked={() => exec("poweroff")}
					halign={Gtk.Align.center}>
					<icon icon={icons.powermenu.shutdown} />
			</button>
}
