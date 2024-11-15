import { Gtk } from "astal/gtk3"
import Battery from "gi://AstalBattery"

const bat = Battery.get_default()

export default function BatteryBox() {
	let proc = String(parseInt(bat.percentage*100))
	return <label label={proc+"%"} />
}
