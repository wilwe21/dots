import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Audio from 'resource:///com/github/Aylur/ags/service/audio.js';
import Mpris from 'resource:///com/github/Aylur/ags/service/mpris.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import Applications from 'resource:///com/github/Aylur/ags/service/applications.js';
import WW from '../misc/WW.js';
import * as mpris from '../misc/mpris.js';
import * as mpriscover from '../misc/mpriscover.js';
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
    children: [
        Widget.Box({
            class_name: 'position',
            children: [
                mpris.PositionLabel(player),
                mpris.Slash(player),
                mpris.LengthLabel(player),
            ],
        }),
        Widget.Box({
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
        })
    ],
});

/** @param {import('types/service/mpris').MprisPlayer} player */
const TextBox = player => Widget.Box({
    vertical: options.music.vertical.bind('value'),
    children: [
        mpris.CoverArt(player, {
            class_name: 'cover',
            hpack: options.music.cover.hpack.bind('value'),
            hexpand: false,
            child: Widget.Box({
                class_name: 'shader',
                hexpand: true,
            }),
        }),
        Widget.Box({
            hexpand: false,
            vertical: true,
            class_name: 'labels',
            children: [
                Widget.Box({
                    hpack: options.music.titlejustification.bind('value').transform(v => {
                        if (v == 'left'){
                            return 'start'
                        } else if (v == 'center'){
                            return 'center'
                        } else {
                            return 'end'
                        }
                    }),
                    child: mpris.TitleLabel(player, {
                        xalign: 0,
                        justification: options.music.titlejustification.bind('value'),
                        wrap: true,
                    }),
                }),
                Widget.Box({
                    hpack: options.music.artistjustification.bind('value').transform(v => {
                        if (v == 'left'){
                            return 'start'
                        } else if (v == 'center'){
                            return 'center'
                        } else {
                            return 'end'
                        }
                    }),
                    child: mpris.ArtistLabel(player, {
                        xalign: 0,
                        justification: options.music.artistjustification.bind('value'),
                        wrap: true,
                    }),
                })
            ],
        }),
    ],
});

/** @param {import('types/service/mpris').MprisPlayer} player */
const PlayerBox = player => Widget.Box({
    class_name: `player ${player.name}`,
    setup: self => self.hook(options.music.blurrcov, () => {
        if (options.music.blurrcov.value == true){
            self.child = mpris.BlurredCoverArt(player, {
                class_name: 'cover-art-bg',
                hexpand: true,
                child: Widget.Box({
                    class_name: 'shader',
                    hexpand: true,
                    vertical: false,
                    setup: self => self.hook(options.music.volume, () => {
                        if (options.music.volume.value == true){
                            self.children = [Widget.CenterBox({
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
                            })]
                        } else {
                            self.child = Widget.CenterBox({
                                vertical: true,
                                start_widget: TextBox(player),
                                center_widget: mpris.PositionSlider(player),
                                end_widget: Footer(player),
                            })
                        }
                    }),
                }),
            })
        } else {
            self.child = mpriscover.BlurredCoverArt(player, {
                class_name: 'cover-art-bg',
                hexpand: true,
                child: Widget.Box({
                    class_name: 'shader',
                    hexpand: true,
                    vertical: false,
                    setup: self => self.hook(options.music.volume, () => {
                        if (options.music.volume.value == true){
                            self.children = [Widget.CenterBox({
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
                            })]
                        } else {
                            self.child = Widget.CenterBox({
                                vertical: true,
                                start_widget: TextBox(player),
                                center_widget: mpris.PositionSlider(player),
                                end_widget: Footer(player),
                            })
                        }
                    }),
                }),
            })
        };
    }),
})

export default monitor => WW({
    name: `music${monitor}`,
    layer: options.music.layer.bind('value'),
    exclusivity: 'exclusive',
    visible: options.music.visible.bind('value'),
    anchor: options.music.anchor.bind('value'),
    margins: options.music.margins.bind('value'),
    monitor,
    child: Widget.Box({
        vertical: true,
        hexpand: true,
        class_name: 'mediawidget',
        setup: self => {
            self.visible = Mpris.players.length > 0;
        },
        children: Mpris.bind('players').transform(ps =>
                ps.filter(p => !options.mpris.black_list.value
                    .includes(p.identity)).slice(0,1).map(PlayerBox)),
    }),
});
