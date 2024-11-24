import { App } from "astal/gtk3"
import { Variable, GLib} from "astal"

export default function Time({ format = "%H:%M %d.%m" }) {
    const time = Variable<string>("").poll(1000, () =>
        GLib.DateTime.new_now_local().format(format)!)

    return <button
        className="Time"
				onClicked={() => App.get_window("dash").show()}
        onDestroy={() => time.drop()}
        label={time()}
    />
}

