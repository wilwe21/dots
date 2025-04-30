import {Gtk} from "astal/gtk3";
import {calendar} from "../vars";
import {bind} from "astal";

export default function Calendar() {
		return <box vertical>{
				bind(calendar, "value").as(v => {
					return <label className="calendar" justify={Gtk.Justification.LEFT} label={v}/>
		})}</box>
}

//					return list.map((row, i) => (
//							<box>
//								{
//									i != 0 ?
//									row.split(" ").filter(v => v != "").map((val, ind) => {
//										if (val == "") {
//														return <></>
//										}
//										if (Number.isNaN(parseInt(val))) {
//											return (<label className="month" label={val}/>)
//										}
//										if (ind === 0) {
//											return (
//												<label className="number" label={"    "+val}/>
//											)
//										} else {
//											return (
//												<label className="number" label={val}/>
//											)
//										}
//									})
//										: <label className="days" label={row} />
//								}
//							</box>
//					))
//				})
