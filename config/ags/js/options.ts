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

		theme: {
        name: Option(themes[0].name, {
						'scss': 'exclude',
            'category': 'exclude',
            'note': 'Name to show as active in quicktoggles',
        })
		},
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
				})
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
		bar: {
				position: Option("top", {
						'scss': 'exclude'
				}),
				border: {
						size: Option(2)
				},
		},
		hypr: {
				wm_gaps: Option(3, {
						'scss': 'wm-gaps',
						'type': 'float',
				})
		},
		wallpaper: Option("/home/wilwe/.hyprland.conf/wallpapers/dead.png", {
				'scss': 'exclude',
		})
};
