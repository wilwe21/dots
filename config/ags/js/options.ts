import { Option, resetOptions, getValues, apply, getOptions } from './settings/option.ts';
import themes from './themes.js';

export default {
    reset: resetOptions,
    values: getValues,
    apply: apply,
    list: getOptions,

    spacing: Option(2),
    padding: Option(7),
    radii: Option(7),

		popover_padding_multiplier: Option(1.4, {
        'category': 'General',
        'note': 'popover-padding: padding × this',
        'type': 'float',
        'unit': '',
    }),

		colors: {
				bg: Option("#212223", {
						'scss': "bg-color",
				}),
				fg: Option("#f1f1f1", {
						'scss': "fg-color",
				}),
				accent: Option("#378DF7", {
						'scss': "accent",
				}),
				accentfg: Option("$bg-color", {
						'scss': "accent-fg",
				}),
				scheme: Option('dark', {
            'enums': ['dark', 'light'],
            'type': 'enum',
            'note': "Color scheme to set on Gtk apps: 'ligth' or 'dark'",
            'title': 'Color Scheme',
            'scss': 'color-scheme',
        }),
        gradient: Option('to right, $accent, lighten($accent, 6%)', {
            'category': 'Theme',
            'title': 'Accent Linear Gradient',
            'scss': 'accent-gradient',
        }),
        bgradient: Option('to bottom, $accent, lighten($accent, 6%)', {
            'category': 'Theme',
            'title': 'Accent Linear bottom Gradient',
            'scss': 'accent-bgradient',
        }),
		},
		ocolor: {
			  temp: Option('#c01c28', { 'scss': 'temp', 'category': 'Other Colors' }),
        upload: Option('#3584e4', { 'scss': 'upload', 'category': 'Other Colors' }),
        download: Option('#2ec27e', { 'scss': 'download', 'category': 'Other Colors' }),
        cpu: Option('#f5c211', { 'scss': 'cpucolor', 'category': 'Other Colors' }),
				play: Option('#e66100', { 'scss': 'playcolor', 'category': 'Other Colors' }),
		},
		theme: {
        name: Option(themes[0].name, {
						'scss': 'exclude',
            'category': 'exclude',
            'note': 'Name to show as active in quicktoggles',
        }),
				widget: {
            bg: Option('$fg-color', {
                'category': 'Theme',
                'title': 'Widget Background Color',
                'scss': '_widget-bg',
            }),

            opacity: Option(94, {
                'category': 'Theme',
                'title': 'Widget Background Opacity',
                'unit': '',
                'scss': 'widget-opacity',
            }),
				}
		},
		font: {
        font: Option('NotoSans Nerd Font Regular', {
            'type': 'font',
            'title': 'Font',
            'scss': 'font',
        }),

        mono: Option('NotoSans Nerd Font', {
            'title': 'Monospaced Font',
            'scss': 'mono-font',
        }),

        size: Option(13, {
            'scss': 'font-size',
            'unit': 'pt',
        }),
    },
		border: {
        color: Option('$accent', {
            'category': 'Border',
            'title': 'Border Color',
            'scss': '_border-color',
        }),

        opacity: Option(100, {
            'category': 'Border',
            'title': 'Border Opacity',
            'unit': '',
        }),

        width: Option(0, {
            'category': 'Border',
            'title': 'Border Width',
            'scss': 'border-width',
        }),

        barcolor: Option('#ffffff', {
            'category': 'Border',
            'title': 'Bar Border color',
            'scss': 'bar-border-color',
        }),
    },
		bar: {
				position: Option("top", {
						'enums': ['top', 'bottom', 'left', 'right'],
            'type': 'enum',
						'scss': 'exclude'
				}),
				type: Option("separated", {
						'enums': ['separated', 'float', 'bar'],
						'type': 'enum',
				})
		},
		hypr: {
        active_border: Option('rgba(378DF7FF)', {
            'category': 'Border',
            'note': 'use a hyprland border options w/o scss variables',
            'title': 'Border on active Windows',
            'scss': 'exclude',
        }),

        inactive_border: Option('rgba(333333ff)', {
            'category': 'Border',
            'title': 'Border on Inactive Windows',
            'scss': 'exclude',
        }),
				drop_shadow: Option(false, { 'scss': 'drop-shadow'}),

        trail_color: Option('$accent', {
            'category': 'Misc',
            'title': 'Trail color',
            'scss': 'exclude',
        }),

        wm_gaps: Option(3, {
            'category': 'General',
            'scss': 'wm-gaps',
            'note': 'wm-gaps',
            'type': 'float',
            'unit': '',
        }),
    },
transition: Option(200, {
        'category': 'exclude',
        'note': 'Transition time on aminations in ms, e.g on hover',
        'unit': 'ms',
    }),
		wallpaper: Option("/home/wilwe/.hyprland.conf/wallpapers/dead.png", {
				'scss': 'exclude',
		})
};
