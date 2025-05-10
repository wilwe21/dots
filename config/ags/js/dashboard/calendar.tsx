import {Gtk} from "astal/gtk3";
import {calendar, month, month, year} from "../vars";
import {bind, GLib} from "astal";

export default function Calendar() {
		return <box className="calendar" vertical>{
				bind(month, "value").as(v => {
						const cal = calendar(v, year.get().toString()).split("\n")
						return cal.map((row: string, i: number) => {
								if (i == 0) {
										return (
										<centerbox>
											<button onClick={(_, e) => {
															const ms = parseInt(month.get().toString())
															const ys = parseInt(year.get().toString())
															if (ms - 1 == 0) {
																	month.set("12")
																	year.set((ys-1).toString())
															} else {
																	month.set((ms -1).toString())
															}
											}} label="˂"/>
											<label className="month" justify={Gtk.Justification.CENTER} label={row.replaceAll(" ", "")} />
											<button onClick={(_, e) => {
															const ms = parseInt(month.get().toString())
															const ys = parseInt(year.get().toString())
															if (ms + 1 == 13) {
																	month.set("01")
																	year.set((ys+1).toString())
															} else {
																	month.set((ms + 1).toString())
															}
											}} label="˃"/>
										</centerbox>)
								} else if (i == 1) {
										return <label className="days" label={row} />
								} else {
										var al = Gtk.Align.START
										var margin = "margin"
										if (i == 2) {
												var al = Gtk.Align.END 
												margin = `${margin}-right`
										} else {
												margin = `${margin}-left`
										}
										return <box className={`rows`} css={`${margin}: 10px;`} halign={al}>
											{row.split(" ").filter(s => s !== "" && s !== " ")
											.map(s => { 
												if (s == GLib.DateTime.new_now_local().format("%e")?.replace(" ", "")) {
													if (s.length == 1) {
														s = ` ${s}`
													}
													return <label className="today" label={s} />
												}
												if (s.length == 1) {
													s = ` ${s}`
												}
											 	return <label className="notoday" label={s} />
											}
											)}
										</box>
								}
						})
			})}</box>
}
