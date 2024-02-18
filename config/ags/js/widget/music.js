import WW from '../misc/WW.js';
import Mpris from 'resource:///com/github/Aylur/ags/service/mpris.js';
import options from '../options.js';
import media from './player.js'dbus

export default monitor => WW({
    name: `music${monitor}`,
    layer: 'background',
    monitor,
    layer: 'background',
    layer: options.music.layer.bind('value'),
    exclusivity: 'exclusive',
    visible: Mpris.bind('players').transform(p => p.length > 0),
    anchor: options.music.anchor.bind('value'),
    margins: options.music.margins.bind('value'),
    child: media(),
});
