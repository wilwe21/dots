import WW from '../misc/WW.js';
import Mpris from 'resource:///com/github/Aylur/ags/service/mpris.js';
import { Variable as Var } from 'resource:///com/github/Aylur/ags/variable.js';
import options from '../options.js';
import media from './player.js'

export default monitor => WW({
    name: `music${monitor}`,
    monitor,
    layer: options.music.layer.bind('value'),
    exclusivity: 'exclusive',
    setup: self => {
			const plays = new Var(0)
			const playsold = new Var(0)
			const vis = new Var(options.music.visible.value)
			self.hook(Mpris, () => {
					console.log(vis.value)
					vis.setValue(options.music.visible.value)
					if (plays.value === playsold.value){
					} else {
						if (vis.value === true){
							playsold.setValue(plays.value)
							self.visible = false
							self.visible = true
						} else {
							self.visible = true
							self.visible = false
						}
					}
			},"changed")
			self.bind('null', Mpris, 'players', p => {
			plays.setValue(p.length)
			vis.setValue(options.music.visible.value)
				self.visible = false;
				self.visible = true;
				if (p.length > 0){
					self.child = media();
				} else { self.children= [] }
    })},
    visible: options.music.visible.bind('value'),
    anchor: options.music.anchor.bind('value'),
    margins: options.music.margins.bind('value'),
});
