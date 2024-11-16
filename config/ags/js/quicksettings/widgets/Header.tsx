import { exec } from "astal/process"

export default function  Header() {
		return <box>
				<label label="avatar" />
				<box className="system-box" vertical hexpand>
						<box>
								<label label="Settings" />
								<label label="Uptime" />
								<label label="lock" />
								<button onClicked={() => exec("poweroff")} >
										<label label="⏻" />
								</button>
						</box>
						<label label="Battery" />
				</box>
		</box>
}
