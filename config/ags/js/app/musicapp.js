import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Audio from 'resource:///com/github/Aylur/ags/service/audio.js';
import Mpris from 'resource:///com/github/Aylur/ags/service/mpris.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import Applications from 'resource:///com/github/Aylur/ags/service/applications.js';
import PopupWindow from '../misc/PopupWindow.js';
import * as mpris from '../misc/mpris.js';
import * as vars from '../variables.js';
import icons from '../icons.js';
import { launchApp } from '../utils.js';
import options from '../options.js';

const VolumeSlider = (type = 'speaker') => Widget.Slider({
    hexpand: false,
    vertical: true,
    class_name: 'audioslider',
    draw_value: false,
    on_change: ({ value }) => Audio[type].volume = value,
    setup: self => self.hook(Audio, () => {
        self.value = Audio[type]?.volume;
    }, `${type}-changed`),
});

const Footer = player => Widget.CenterBox({
    class_name: 'footer-box',
    start_widget: Widget.Box({
            class_name: 'position',
            children: [
                mpris.PositionLabel(player),
                mpris.Slash(player),
                mpris.LengthLabel(player),
            ],
        }),
    center_widget: Widget.Box({
            class_name: 'controls',
            children: [
                Widget.Box({
                    class_name: 'buttonbox',
                   children: [
                    mpris.ShuffleButton(player),
                    mpris.PreviousButton(player),
                    mpris.PlayPauseButton(player),
                    mpris.NextButton(player),
                    mpris.LoopButton(player),
                   ], 
                }),
            ],
        }),
});

/** @param {import('types/service/mpris').MprisPlayer} player */
const TextBox = player => Widget.Box({
    children: [
        mpris.CoverArt(player, {
            class_name: 'cover',
            hpack: 'end',
            hexpand: false,
            child: Widget.Box({
                class_name: 'shader',
                hexpand: true,
            }),
        }),
        Widget.Box({
            hexpand: true,
            vertical: true,
            class_name: 'labels',
            children: [
                mpris.TitleLabel(player, {
                    xalign: 0,
                    justification: 'left',
                    wrap: true,
                }),
                mpris.ArtistLabel(player, {
                    xalign: 0,
                    justification: 'left',
                    wrap: true,
                }),
            ],
        }),
    ],
});

/** @param {import('types/service/mpris').MprisPlayer} player */
const PlayerBox = player => Widget.Box({
    class_name: `player ${player.name}`,
    child: mpris.BlurredCoverArt(player, {
        class_name: 'cover-art-bg',
        hexpand: true,
        child: Widget.Box({
            class_name: 'shader',
            hexpand: true,
            vertical: false,
            children: [
                Widget.CenterBox({
                    vertical: true,
                    start_widget: TextBox(player),
                    center_widget: mpris.PositionSlider(player),
                    end_widget: Footer(player),
                }),
                Widget.Box({
                    class_name: 'vbox',
                    vertical: true,
                    hexpand: true,
                    children: [
                        Widget.Label({
                            class_name: 'volumelabel',
                            label: vars.volume.bind('value').transform(s => `${s}%`),
                        }),
                        VolumeSlider(),
                    ],
                }),
            ],
        }),
    }),
})

export default () => PopupWindow({
    name: 'musicapp',
    layer: "overlay",
    visible: Mpris.bind('players').transform(p => p.length > 0),
    transition: 'slide_down',
    child: Widget.Box({
        vertical: true,
        hexpand: true,
        class_name: 'mediaapp',
        children: Mpris.bind('players').transform(ps =>
                ps.filter(p => !options.mpris.black_list.value
                    .includes(p.identity)).map(PlayerBox)),
    }),
});
