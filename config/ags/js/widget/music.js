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
    start_widget: Widget.Box({
            class_name: 'position',
            setup: self => self.hook(options.music.footer.position, () => {
                if (options.music.footer.position.value == true){
                    self.children = [
                        mpris.PositionLabel(player),
                        mpris.Slash(player),
                        mpris.LengthLabel(player),
                    ]
                } else {
                    self.children = []
                }
            })
        }),
    center_widget: Widget.Box({
            class_name: 'controls',
            setup: self => self.hook(options.music.footer.controls, () => {
                if (options.music.footer.controls.value == true){
                    self.child = Widget.Box({
                        class_name: 'buttonbox',
                        children: [
                            mpris.ShuffleButton(player),
                            mpris.PreviousButton(player),
                            mpris.PlayPauseButton(player),
                            mpris.NextButton(player),
                            mpris.LoopButton(player),
                        ], 
                    })
                } else {
                    self.child = []
                }
            })
        })
});

/** @param {import('types/service/mpris').MprisPlayer} player */
const TextBox = player => Widget.Box({
    vertical: options.music.vertical.bind('value'),
    children: [
        Widget.Box({
            hpack: options.music.cover.hpack.bind('value'),
            setup: self => self.hook(options.music.cover.visible, () => {
                if (options.music.cover.visible.value == true){
                    self.child = mpris.CoverArt(player, {
                        class_name: 'cover',
                        hexpand: false,
                        child: Widget.Box({
                            class_name: 'shader',
                            hexpand: true,
                        }),
                    })
                } else {
                    self.child = []
                }
            })
        }),
        Widget.Box({
            hexpand: true,
            vertical: true,
            class_name: 'labels',
            children: [
                Widget.Box({
                    hpack: options.music.titlejustification.bind('value').transform(v => {
                        if (v == 'left') return 'start';
                        if (v == 'center') return 'center';
                        return 'end';
                    }),
                    setup: self => self.hook(options.music.Title, () => {
                        if (options.music.Title.value == true){
                            self.child = mpris.TitleLabel(player, {
                                xalign: 0,
                                justification: options.music.titlejustification.bind('value'),
                                wrap: true,
                            })
                        } else {
                            self.child = []
                        }
                    })
                }),
                Widget.Box({
                    hpack: options.music.artistjustification.bind('value').transform(v => {
                        if (v == 'left') return 'start';
                        if (v == 'center') return 'center';
                        return 'end';
                    }),
                    setup: self => self.hook(options.music.Artist, () => {
                        if (options.music.Artist.value == true){
                            self.child = mpris.ArtistLabel(player, {
                                xalign: 0,
                                justification: options.music.artistjustification.bind('value'),
                                wrap: true,
                            })
                        } else {
                            self.child = []
                        };
                    }),
                })
            ],
        }),
    ],
});

/** @param {import('types/service/mpris').MprisPlayer} player */
const PlayerBox = player => Widget.Box({
    class_name: `player ${player.name}`,
    setup: self => self.hook(options.music.box, () => {
        if (options.music.box.value == 'blurred'){
            self.child = mpris.BlurredCoverArt(player, {
                class_name: 'cover-art-bg',
                hexpand: true,
                child: Widget.Box({
                    class_name: 'shader',
                    hexpand: true,
                    vertical: false,
                    setup: self => self.hook(options.music.volume, () => {
                        if (options.music.volume.value == true){
                            self.children = [
                                Widget.CenterBox({
                                    class_name: 'mpris-content',
                                    vertical: true,
                                    start_widget: TextBox(player),
                                    center_widget: mpris.PositionSlider(player),
                                    end_widget: Footer(player),
                                }),
                                Widget.Box({
                                    class_name: 'vbox',
                                    vertical: true,
                                    hexpand: false,
                                    children: [
                                        Widget.Label({
                                            class_name: 'volumelabel',
                                            label: vars.volume.bind('value').transform(s => `${s}%`),
                                        }),
                                        VolumeSlider(),
                                    ],
                                })
                            ]
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
                            self.children = [
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
                                })
                            ]
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
        visible: Mpris.bind('players').transform(p => p.length > 0),
        children: Mpris.bind('players').transform(ps =>
                ps.filter(p => !options.mpris.black_list.value
                .includes(p.identity)).slice(0,1).map(PlayerBox)),
    }),
});
