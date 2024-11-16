import { Variable, GLib} from "astal"

export default function Time({ format = "%H:%M %d.%m" }) {
    const time = Variable<string>("").poll(1000, () =>
        GLib.DateTime.new_now_local().format(format)!)

    return <button
        className="Time"
        onDestroy={() => time.drop()}
        label={time()}
    />
}

