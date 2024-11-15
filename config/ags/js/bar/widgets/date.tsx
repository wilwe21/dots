import { Gtk } from "astal/gtk3"
import { Variable } from "astal"

const time = Variable("").poll(1000, "date")

export default function DateButton() {
		return	<button
				halign={Gtk.Align.CENTER}> 
				<label label={time()} />
		</button>
}
