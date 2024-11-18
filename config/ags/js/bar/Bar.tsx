import { bind } from "astal"
import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import QuickBox from "./widgets/quic.tsx"
import Poffbutt from "./widgets/poweroff.tsx"
import { TitleLabel, PlayPauseButton } from "../misc/mpris.tsx"
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
const anchorleft = Astal.WindowAnchor.BOTTOM
		| Astal.WindowAnchor.TOP
		| Astal.WindowAnchor.LEFT
const anchorright = Astal.WindowAnchor.BOTTOM
		| Astal.WindowAnchor.TOP
		| Astal.WindowAnchor.RIGHT


function init(s) {
		App.add_window(s);
		options.bar.position.connect("changed", () => {
				if (options.bar.position.value == "top") {
						s.anchor = anchortop
				} else if (options.bar.position.value == "bottom") {
						s.anchor = anchorbot
				} else if (options.bar.position.value == "left") {
						s.anchor = anchorleft
				} else if (options.bar.position.value == "right") {
						s.anchor = anchorright
				} else {
						s.anchor = anchortop
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
						} else if (v == "bottom"){
								return anchorbot
						} else if (v == "left") {
								return anchorleft
						} else if (v == "right") {
								return anchorright	
						} else {
								return anchortop
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
