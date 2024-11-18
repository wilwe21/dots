import { App, Gtk } from "astal/gtk3"

export default function AppButton({ app }: { app: Apps.Application }) {
    return <button
        className="AppButton"
        onClicked={() => { App.get_window("launcher")!.hide(); app.launch() }}>
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
