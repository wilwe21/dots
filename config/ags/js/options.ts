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

		misc: {
        gtk: Option('ags', {
            'scss': 'exclude',
        }),
        gtkIcons: Option('Catppuccin-Macchiato', {
            'scss': 'exclude',
        }),
        cursor: Option('Future-dark-cursors', {
            'scss': 'exclude',
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
				white: Option('#ffffff', {"scss": "white", 'category': "Base Colors"}),
				black: Option('#000000', {"scss": "black", 'category': "Base Colors"}),
				red: Option('#c01c28', { 'scss': 'red', 'category': 'Base Colors' }),
				green: Option('#2ec27e', { 'scss': 'green', 'category': 'Base Colors' }),
				yellow: Option('#f5c211', { 'scss': 'yellow', 'category': 'Base Colors' }),
				moon: Option('#F9E2AF', { 'scss': 'moon', 'category': 'Base Colors' }),
				blue: Option('#3584e4', { 'scss': 'blue', 'category': 'Base Colors' }),
				magenta: Option('#813d9c', { 'scss': 'magenta', 'category': 'Base Colors' }),
				teal: Option('#99c1f1', { 'scss': 'teal', 'category': 'Base Colors' }),
				orange: Option('#e66100', { 'scss': 'orange', 'category': 'Base Colors' }),
				rosewater: Option("#F4DBD6", { 'scss': 'rosewater', 'category': "Base Colors"}),
				flamingo: Option("#F0C6C6", { 'scss': 'flamingo', 'category': "Base Colors"}),
				pink: Option("#F5BDE6", { 'scss': 'pink', 'category': "Base Colors"}),
				maroon: Option("#EE99A0", { 'scss': 'maroon', 'category': "Base Colors"}),
				sky: Option("#91D7E3", { 'scss': 'sky', 'category': "Base Colors"}),
				sapphire: Option("#7DC4E4", { 'scss': 'sapphire', 'category': "Base Colors"}),
				lavender: Option("#B7BDF8", { 'scss': 'lavender', 'category': "Base Colors"}),
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

        width: Option(2, {
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
		starship: {
        format: Option('$username[ ]()$directory[ ]()$time[ ]()',{
            'category': 'Terminal',
            'scssFormat': v => `"${v}"`,
        }),

        ldec: Option('',{
            'category': 'Terminal',
            'scssFormat': v => `"${v}"`,
        }),

        rdec: Option('',{
            'category': 'Terminal',
            'scssFormat': v => `"${v}"`,
        }),

        username: {
            bg: Option('$dark-bg-color',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

            fg: Option('$fg-color',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),
        },
        directory: {
            bg: Option('$dark-bg-color',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

            fg: Option('$fg-color',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),
        },
        time: {
            bg: Option('$accent',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

            fg: Option('$accent-fg',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),
        },
    },
		kitty:{
        font: {
            family: Option('SourceCodeVF',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

            size: Option('11',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),
        },
        cursor: {
            color: Option("$accent",{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

            text_color: Option("$accent-fg",{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

            shape: Option("block",{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
                'enums': ['block','beam','underline'],
                'type': 'enum',
            }),

            beam_thickness: Option("1.5", {
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

            underline_thickness: Option("2.0",{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

            blink_interval: Option("-1",{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

            stop_blinking_after: Option("15",{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),
        },
				winpad: Option(0,{
					'category': 'Terminal',
				}),

        scrollback: {
            lines: Option('2000',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

            pager: Option('less --chop-long-lines --RAW-CONTROL-CHARS +INPUT_LINE_NUMBER',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

            pager_history: Option('0',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

            fill_enlarged_window: Option('no',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
                'enums': ['no','yes'],
                'type': 'enum',
            }),
        },
        wheel_scroll:{
            multiplier: Option("5.0",{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

            min_lines: Option("1",{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            })
        },
        touch_scroll_multiplier: Option('1',{
            'category': 'Terminal',
            'scssFormat': v => `"${v}"`,
        }),

        mouse_hide_wait: Option("3",{
            'category': 'Terminal',
            'scssFormat': v => `"${v}"`,
        }),

        url: {
            color: Option('#0087bd',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

            style: Option('curly',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
                'enums': ['none','straight','double','curly','dotted','dashed'],
                'type': 'enum'
            }),

            underline: Option('hover',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
                'enums': ['always','hover','never'],
                'type': "enum"
            }),
        },

				opacity: Option('0.7',{
					'category': 'Terminal',
					'sccsFormat': v => `"${v}"`,
				}),

        color_scheme: {
            fg: Option('$fg-color',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

            bg: Option('$bg-color',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

	    			bg_img: Option('none', {
								'category': 'Terminal',
								'scssFormat': v => `"${v}"`,
	    			}),

	    			bg_img_lay: Option('cscaled', {
								'category': 'Terminal',
								'scssFormat': v => `"${v}"`,
								'enums': ['tiled','mirror-tiled','scaled','clamped','centered','cscaled'],
								'type': 'enum',
	    			}),

            bg_opacity: Option('1.0',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

            bg_blur: Option('0',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

            selection_fg: Option('$accent-fg',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),

            selection_bg: Option('$accent',{
                'category': 'Terminal',
                'scssFormat': v => `"${v}"`,
            }),
        },
    },
		    vim: {
			colors: {
			normal: {
				fg: Option('s:text', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`
				})
			},
			visual: {
				fg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`
				}),
				bg: Option('s:surface1', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`
				})
			},
			linenr: {
				fg: Option('s:accent', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				})
			},
			statement: {
				fg: Option('s:accent', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				})
			},
			type: {
				fg: Option('s:blue', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				})
			},
			special: {
				fg: Option('s:pink', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				})
			},
			error: {
				fg: Option('s:red', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				})
			},
			string: {
				fg: Option('s:green', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				})
			},
			character: {
				fg: Option('s:blue', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				})
			},
			number: {
				fg: Option('s:teal', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				})
			},
			boolean: {
				fg: Option('s:blue', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				})
			},
			float: {
				fg: Option('s:teal', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				})
			},
			function: {
				fg: Option('s:accent', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				})
			},
			conditional: {
				fg: Option('s:yellow', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				})
			},
			repeat: {
				fg: Option('s:yellow', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				})
			},
			label: {
				fg: Option('s:accent', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				})
			},
			operator: {
				fg: Option('s:blue', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				})
			},
			keyword: {
				fg: Option('s:red', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				})
			},
			include: {
				fg: Option('s:red', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				})
			},
			structure: {
				fg: Option('s:mauve', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				}),
				bg: Option('"NONE"', {
					'type': "enum",
					'enums': ['"NONE"', 's:black', 's:white', 's:rosewater', 's:flamingo', 's:pink', 's:mauve', 's:red', 's:maroon', 's:peach', 's:yellow', 's:green', 's:teal', 's:sky', 's:sapphire', 's:blue', 's:lavender', 's:accent', 's:accentfg', 's:text', 's:subtext1', 's:subtext0', 's:overlay2', 's:overlay1', 's:overlay0', 's:surface2', 's:surface1', 's:surface0', 's:base', 's:mantle', 's:crust'],
					'scssFormat': v=> `"${v}"`,
				})
			}
		},
		airline: {
			left: Option('',{
				'category': 'Terminal',
				'scssFormat': v=> `"${v}"`,
			 }),

			 right: Option('',{
				'category': 'Terminal',
				'scssFormat': v=> `"${v}"`,
			 }),
		},
		},


		wallpaper: Option("/home/wilwe/.hyprland.conf/wallpapers/dead.png", {
				'scss': 'exclude',
		})
};
