import { App, Gtk } from "astal/gtk3"
import Network from "gi://AstalNetwork"
import { volume } from "../../vars"
import {bind} from "astal"

export default function QuickBox() {
		const network = Network.get_default()
		return <button
					className="quickBar"
					onClicked={() => App.get_window("qs").show()}
					halign={Gtk.Align.center}>
					<box className="quickBarBox">
						<icon
							icon={bind(network, "wifi").as(({ icon_name }) => icon_name)}
						/>
						<label
							label={bind(volume, "value").as(v => `${v}%`)}
						/>
					</box>
			</button>
}
