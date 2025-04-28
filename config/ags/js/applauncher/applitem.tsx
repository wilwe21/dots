import { App, Gtk } from "astal/gtk3"
import { readFile, writeFileAsync } from "astal";
import { isPrimaryClick, isSecondaryClick } from "../../utils/astal";
import vars from "../vars";

export default function AppButton({ app }: { app: Apps.Application }) {
    return <button
        className="AppButton"
        onClick={(_, e) => {
						if (isPrimaryClick(e)) {
							App.get_window("launcher")!.hide(); app.launch()
						}
						if (isSecondaryClick(e)) {
							var banned = readFile(vars.cacheDir + "/banned").replaceAll("\n", "").split(", ")
							banned.push(app.name)
							writeFileAsync(vars.cacheDir + "/banned", banned.join(", "))
						}
				}}> 
        <box>
            <icon icon={app.iconName} />
            <box valign={Gtk.Align.CENTER} vertical>
                <label
                    className="name"
                    truncate
                    xalign={0}
                    label={app.name}
                />
                {/*app.description && <label
                    className="description"
                    wrap
                    xalign={0}
                    label={app.description}
                />*/}
            </box>
        </box>
    </button>
}
