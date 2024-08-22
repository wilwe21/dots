import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import Applications from 'resource:///com/github/Aylur/ags/service/applications.js';
import PopupWindow from '../misc/PopupWindow.js';
import Mpris from 'resource:///com/github/Aylur/ags/service/mpris.js';
import { execAsync } from 'resource:///com/github/Aylur/ags/utils.js';
import * as mpris from '../misc/mpris.js';
import AppItem from './AppItem.js';
import icons from '../icons.js';
import { launchApp } from '../utils.js';
import options from '../options.js';

const WINDOW_NAME = 'applauncher';

const Applauncher = () => {
    const mkItems = () => [
        Widget.Separator({ hexpand: true }),
        ...Applications.query('').flatMap(app => Widget.Revealer({
            setup: w => w.attribute = { app, revealer: w },
            child: Widget.Box({
                vertical: true,
                children: [
                    Widget.Separator({ hexpand: true }),
                    AppItem(app),
                    Widget.Separator({ hexpand: true }),
                ],
            }),
        })),
        Widget.Separator({ hexpand: true }),
    ];

    let items = mkItems();

    const list = Widget.Box({
        class_name: 'app-list',
        vertical: true,
        children: items,
    });

    const entry = Widget.Entry({
        hexpand: true,
        primary_icon_name: icons.apps.search,

        // set some text so on-change works the first time
        text: '-',
        on_accept: ({ text }) => {
            const list = Applications.query(text || '');
            if (list[0]) {
                App.toggleWindow(WINDOW_NAME);
                launchApp(list[0]);
            } else if (list[0] == null) {
				App.toggleWindow(WINDOW_NAME);
				execAsync(["kitty", "--hold", ...text.split(' ')])
			}
        },
        on_change: ({ text }) => items.map(item => {
            if (item.attribute) {
                const { app, revealer } = item.attribute;
                revealer.reveal_child = app.match(text);
            }
        }),
    });

    return Widget.Box({
        vertical: false,
        children: [
            Widget.Box({
                class_name: 'appicla',
                vertical: true,
                setup: self => self.hook(options.applauncher.side, () => {
                    if (options.applauncher.side.value == 'avatar') {
                        self.children = [
			    Widget.CenterBox({
				    class_name: 'appavbox',
				    vertical: true,
				    vexpand: true,
				    start_widget: Widget.Box({
					class_name: 'appicon',
					visible: options.applauncher.avatarvisible.bind('value'),
					css: options.desktop.avatar.bind('value').transform(p => 
						`background-image: url("${p}")`)
				    }),
				    center_widget: Widget.Label({
					class_name: 'applabel',
					label: options.applauncher.label.bind('value'),
				    })
			    })
                        ]
                    } else if (options.applauncher.side.value == 'player'){
                        const PlayerBox = player => Widget.CenterBox({
                            class_name: 'shader',
                            vertical: true,
                            start_widget: mpris.CoverArt(player, {
                                class_name: 'cover',
                                vexpand: false,
                            }),
                            center_widget: Widget.Box({
                                vexpand: true, 
                                vpack: 'center',
                                vertical: true,
                                class_name: 'labels',
                                children: [
                                    mpris.TitleLabel(player, {wrap: true, justification: 'center'}),
                                    mpris.ArtistLabel(player, {wrap: true, justification: 'center'}),
                                ],
                            }),
                            end_widget: Widget.Box({
                                vexpand: true,
                                vertical: false,
                                vpack: 'end',
                                hpack: 'center',
                                class_name: 'buttonbox',
                                children: [
                                    mpris.PreviousButton(player),
                                    mpris.PlayPauseButton(player),
                                    mpris.NextButton(player),
                                ],
                            }),
                        });
                        self.child = Widget.Box({
                            vertical: false,
                            class_name: 'media vertical',
                            visible: Mpris.bind("players").transform(v => v.length > 0),
                            children: Mpris.bind('players').transform(ps => ps.slice(0, 1).map(PlayerBox)),
                        });

                    }else {
                        self.children = []
                    }
                })
            }),
            Widget.Box({
                vertical: true,
                children: [
                    entry,
                    Widget.Scrollable({
                        hscroll: 'never',
                        child: list,
                    }),
                ],
                setup: self => self.hook(App, (_, win, visible) => {
                    if (win !== WINDOW_NAME)
                        return;
                    entry.text = '-';
                    entry.text = '';
                    if (visible) {
                        entry.grab_focus();
                    }
                    else {
                        items = mkItems();
                        list.children = items;
                    }
                }),
            }),
        ],
    });
};

export default () => PopupWindow({
    name: WINDOW_NAME,
    layer: 'overlay',
    transition: 'slide_down',
    keymode: 'exclusive',
    anchor: options.applauncher.anchor.bind('value'),
    margins: options.applauncher.margins.bind('value'),
    child: Applauncher(),
});
