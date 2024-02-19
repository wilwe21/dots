import WW from '../misc/WW.js';
import Mpris from 'resource:///com/github/Aylur/ags/service/mpris.js';
import options from '../options.js';
import media from './player.js'

export default monitor => WW({
    name: `music${monitor}`,
    monitor,
    layer: options.music.layer.bind('value'),
    exclusivity: 'exclusive',
    visible: options.music.visible.bind('value'),
    setup: self => {
    self.bind('null', Mpris, 'players', p => {
        self.visible = false;
        self.visible = true;
        if (p.length > 0){
            self.child = media();
        } else { self.children= [] }
    })},
    anchor: options.music.anchor.bind('value'),
    margins: options.music.margins.bind('value'),
});
