import { bind, execAsync } from "astal";
import {volume, volumeCheck} from "../../vars";
import icons from "../../icons";

export const Volume = () => {
	return (
		<box hexpand spacing={8} className="slider">
			<box spacing={4}>
				<button className="volumeButton" onClick={() => {
					execAsync(["pactl", "set-sink-volume", "@DEFAULT_SINK@", "40%"])
				}}>
					<icon icon={bind(volumeCheck, "value").as(v => v ? icons.audio.volume.medium : icons.audio.volume.muted)}/>
				</button>
				<label
					label={bind(volume, "value").as(v => `${v}%`)}
				/>
			</box>
			<slider
				hexpand
				vexpand={false}
				widthRequest={100}
				value={bind(volume, "value").as(v => v/100)}
				onDragged={({ value }) => {
					execAsync(["pactl", "set-sink-volume", "@DEFAULT_SINK@", `${Math.floor(value*100)}%`])
				}}
			/>
		</box>
	)
}

