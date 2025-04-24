import { App, Astal, Gdk, Gtk } from "astal/gtk3"
import { PowerLine } from "./PowerLine"
import { Connectivity } from "./Connectivity"
import { QuickButtons } from "./QuickButtons"
import { Sliders } from "./Sliders/Sliders"
import { Media } from "./Media/Media"
import { Variable } from "astal"
import { WiFi } from "./WifiView"
import { Bluetooth } from "./BluetoothView"
import AstalNetwork from "gi://AstalNetwork"
import AstalBluetooth from "gi://AstalBluetooth"
import { Apps } from "./Apps/Apps"
import { Mixer } from "./Mixer/Mixer"
import { View } from "../../types"

type ControllProps = { setCurrentView: (view: View) => void }

const Controlls = ({ setCurrentView }: ControllProps) => {
	const network = AstalNetwork.get_default()
	const bluetooth = AstalBluetooth.get_default()

    return (
        <>
            <box spacing={8} className="equal-wrapper">
                <Connectivity
                    onWifiPrimary={() => network.wifi.enabled = !network.wifi.enabled}
                    onWifiSecondary={() => setCurrentView("wifi")}
                    onBluetoothPrimary={() => bluetooth.toggle()}
                    onBluetoothSecondary={() => setCurrentView("bluetooth")} />
                <QuickButtons />
            </box>
            <box spacing={8} className="equal-wrapper">
            </box>
            <Sliders />
            <Media />
            <PowerLine />
        </>
    )
}

export default function ControllCenter() {
    const { TOP, RIGHT  } = Astal.WindowAnchor

	const currentView = Variable<View>("controlls");
	const reset = () => currentView.set("controlls")
	const resetAndClose = () => {
		reset()
		App.toggle_window("qs")
	}

    return (
		<window
			name="qs"
			className="qs"
			exclusivity={Astal.Exclusivity.NORMAL}
			anchor={TOP | RIGHT}
			application={App}
			setup={self => App.add_window(self)}
			visible={false}
			keymode={Astal.Keymode.EXCLUSIVE}
			onKeyPressEvent={(self, event: Gdk.Event) => {
				if (event.get_keyval()[1] === Gdk.KEY_Escape) {
					self.hide()
				}
			}}
		>
		<centerbox hexpand={false}>
    <eventbox heightRequest={600} widthRequest={4000} onClick={resetAndClose} />
    <eventbox heightRequest={600} widthRequest={4000} onClick={resetAndClose} />
		<box vertical hexpand={false} vexpand={false}>
		<box className="quick" hexpand={false} vexpand={false}>
				<box vertical spacing={8} className="controll-center-wrapper">
					{currentView((view) => {
						switch (view) {
							case "controlls":
								return <Controlls setCurrentView={(view) => currentView.set(view)} />
							case "wifi":
								return <WiFi reset={reset} />
							case "bluetooth":
								return <Bluetooth reset={reset} />
							case "apps":
								return <Apps reset={resetAndClose} />
							case "mixer":
								return <Mixer reset={resetAndClose} />
						}
					})}
				</box>
		</box>
		<eventbox heightRequest={1200} onClick={resetAndClose} />
		</box>
    </centerbox>
		</window>
	)
}
