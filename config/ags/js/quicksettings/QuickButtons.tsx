import { Binding, execAsync, Variable } from "astal"
import { App } from "astal/gtk3"
import icons from "../icons";

type QuickButtonProps = {
	content: Binding<string> | string
	command: string | string[]
}

const QuickButtonIco = ({ content, command }: QuickButtonProps) => (
		<button
			vexpand
			hexpand
			className="bordered"
			onClick={() => {
				App.toggle_window("qs")
				execAsync(command)
			}}
		>
			<icon icon={content}/>
		</button>
	)

const QuickButton = ({ content, command }: QuickButtonProps) => (
		<button
			vexpand  
			hexpand
			className="bordered"
			onClick={() => {
				App.toggle_window("qs")
				execAsync(command)
			}}
		>
			{content}
		</button>
	)

export const QuickButtons = () => {
	const spacing = 6
	const isLockingActive = Variable(true).poll(
		1_000,
		["bash", "-c", 'pgrep -x "wlinhibit" > /dev/null && echo "false" || echo "true"'],
		(str) => str === "true"
	)

	return (
		<box hexpand vexpand vertical spacing={spacing}>
			<box hexpand vexpand spacing={spacing}>
				<QuickButtonIco content={icons.audio.volume.overamplified} command={["pavucontrol"]} />
				<QuickButton content=" " command={["bash", "-c", "hyprpicker | wl-copy"]} />
			</box>
			<box hexpand vexpand spacing={spacing}>
				<QuickButton
					content="󰹑 "
					command={["flameshot", "gui"]}
				/>
				<QuickButton
					content={isLockingActive((a) => a ? ' ' : " ")}
					command={["bash", "-c", "pkill wlinhibit || wlinhibit"]}
				/>
			</box>
		</box>
	)
}
