import { Gtk } from "astal/gtk3"
import Applauncher from "../../applauncher/appl.tsx"

export default function QuickBox() {
		return <button
					onClicked={() => Applauncher()}
					halign={Gtk.Align.center}>
					<label label="quick" />
			</button>
}
