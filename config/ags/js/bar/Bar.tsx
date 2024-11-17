import { bind } from "astal"
import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import QuickBox from "./widgets/quic.tsx"
import Poffbutt from "./widgets/poweroff.tsx"
import { TitleLabel } from "../misc/mpris.tsx"
import SysTray from "./widgets/SysTray.tsx"
import Time from "./widgets/date.tsx"
import BatteryBox from "./widgets/battery.tsx"
import options from "../options.ts"

const anchortop = Astal.WindowAnchor.TOP
    | Astal.WindowAnchor.LEFT
    | Astal.WindowAnchor.RIGHT
const anchorbot = Astal.WindowAnchor.BOTTOM
		| Astal.WindowAnchor.LEFT
		| Astal.WindowAnchor.RIGHT

function init(s) {
		App.add_window(s);
		options.bar.position.connect("changed", () => {
				print(options.bar.position.value)
				if (options.bar.position.value == "top") {
						s.anchor = anchortop
				} else {
						s.anchor = anchorbot
				}
		})
}

export default function Bar(monitor: Gdk.Monitor) {
    return <window
				name="bar"
        className="Bar"
        gdkmonitor={monitor}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
				anchor={bind(options.bar.position, "value").as(v=>{
						if (v == "top") {
								return anchortop
						} else {
								return anchorbot
						}
				})}
				setup={self => init(self)}
				application={App}>
        <centerbox>
            <box hexpand halign={Gtk.Align.START}>
								<TitleLabel />
            </box>
            <box>
                <Time />
            </box>
            <box hexpand halign={Gtk.Align.END} >
                <SysTray />
								<BatteryBox />
								<QuickBox />
								<Poffbutt />
            </box>
        </centerbox>
    </window>
}
