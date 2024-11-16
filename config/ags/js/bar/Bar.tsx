import { bind } from "astal"
import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import QuickBox from "./widgets/quic.tsx"
import Poffbutt from "./widgets/poweroff.tsx"
import { TitleLabel } from "../misc/mpris.tsx"
import SysTray from "./widgets/SysTray.tsx"
import Time from "./widgets/date.tsx"
import BatteryBox from "./widgets/battery.tsx"
import options from "../options.ts"

export default function Bar(monitor: Gdk.Monitor) {
    let anchortop = Astal.WindowAnchor.TOP
        | Astal.WindowAnchor.LEFT
        | Astal.WindowAnchor.RIGHT
    let anchorbot = Astal.WindowAnchor.BOTTOM
    		| Astal.WindowAnchor.LEFT
    		| Astal.WindowAnchor.RIGHT

    return <window
				name="bar"
        className="Bar"
        gdkmonitor={monitor}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
				setup={self => App.add_window(self)}
				application={App}
        anchor={bind(options.bar.position, "value").as(v => {
						print(v)
						if (v == "TOP") {
							return anchortop
						} else {
							return anchorbot
						}
				})}>
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
