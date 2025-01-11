import { bind } from "astal"
import { Gtk } from "astal/gtk3"
import Battery from "gi://AstalBattery"

const bat = Battery.get_default()

export default function BatteryBox() {
	return <box>{bind(bat, "percentage").as(v=> <label label={`${parseInt(v*100)}%`} />)}</box>
}
