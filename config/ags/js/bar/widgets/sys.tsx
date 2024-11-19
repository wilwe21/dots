import { bind } from "astal"
import icons from "../../icons.ts"
import * as vars from "../../vars.ts"

const SysProgress = ({ type, unit }) => {
		return <box>
				<icon icon={icons.system[type]} />
				<label label={bind(vars[type], "value").as(v => `${v}${unit}`)}/>
		</box>
};

export default function Vitals() {
		return <box>
				<SysProgress type="download" unit="" />
				<SysProgress type="upload" unit="" />
				<SysProgress type="cpu" unit="" />
				<SysProgress type="temp" unit="°C" />
		</box>
}
