import { execAsync } from "astal/process"
import { hide } from "../quick.tsx"

export default function  Volu() {
		return <box>
				<button onClicked={() => {execAsync(["pavucontrol"]); hide()}} >
						<label label="Volume control" />
				</button>
		</box>
}
