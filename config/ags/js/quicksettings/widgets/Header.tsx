import { execAsync } from "astal/process"
import { hide } from "../quick.tsx"

export default function  Header() {
		return <box>
				<label label="avatar" />
				<box className="system-box" vertical hexpand>
						<box>
								<label label="Settings" />
								<label label="Uptime" />
								<label label="lock" />
								<button onClicked={() => {execAsync(["poweroff"]); hide()}} >
										<label label="⏻" />
								</button>
						</box>
						<label label="Battery" />
				</box>
		</box>
}
