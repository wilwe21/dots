/**
 * An object holding Options that are Variables with cached values.
 *
 * to update an option at runtime simply run
 * ags -r "options.path.to.option.setValue('value')"
 *
 * resetting:
 * ags -r "options.reset()"
 */

import { Option, resetOptions, getValues, apply, getOptions } from './settings/option.js';
import { USER } from 'resource:///com/github/Aylur/ags/utils.js';
import themes from './themes.js';

export default {
    reset: resetOptions,
    values: getValues,
    apply: apply,
    list: getOptions,

    spacing: Option(2),
    padding: Option(8),
    radii: Option(5),

    popover_padding_multiplier: Option(1.4, {
        'category': 'General',
        'note': 'popover-padding: padding × this',
        'type': 'float',
        'unit': '',
    }),

    misc: {
        pywal: {
            theme: Option('', {
                'scss': 'exclude',

            })
        },
        gtk: {
            theme: Option('', {
                'scss': 'exclude',

            })
        },
        gtkIcons: {
            theme: Option('', {
                'scss': 'exclude',

            })
        },
    },

    color: {
        red: Option('#c01c28', { 'scss': 'red' }),
        green: Option('#2ec27e', { 'scss': 'green' }),
        yellow: Option('#f5c211', { 'scss': 'yellow' }),
        moon: Option('#F9E2AF', { 'scss': 'moon' }),
        blue: Option('#3584e4', { 'scss': 'blue' }),
        temp: Option('#c01c28', { 'scss': 'temp' }),
        download: Option('#2ec27e', { 'scss': 'download' }),
        cpucolor: Option('#f5c211', { 'scss': 'cpucolor' }),
        upload: Option('#3584e4', { 'scss': 'upload' }),
        magenta: Option('#813d9c', { 'scss': 'magenta' }),
        teal: Option('#99c1f1', { 'scss': 'teal' }),
        orange: Option('#e66100', { 'scss': 'orange' }),
        playcolor: Option('#e66100', { 'scss': 'playcolor' }),
    },

    theme: {
        name: Option(themes[0].name, {
            'category': 'exclude',
            'note': 'Name to show as active in quicktoggles',
        }),

        icon: Option(themes[0].icon, {
            'category': 'exclude',
            'note': 'Icon to show as active in quicktoggles',
            'scssFormat': v => `"${v}"`,
            'type': 'img',
        }),

        scheme: Option('dark', {
            'enums': ['dark', 'light'],
            'type': 'enum',
            'note': "Color scheme to set on Gtk apps: 'ligth' or 'dark'",
            'title': 'Color Scheme',
            'scss': 'color-scheme',
        }),
        bg: Option('#1E1E1E', {
            'title': 'Background Color',
            'scss': 'bg-color',
        }),
        fg: Option('#deddda', {
            'title': 'Foreground Color',
            'scss': 'fg-color',
        }),

        accent: {
            accent: Option('$blue', {
                'category': 'Theme',
                'title': 'Accent Color',
                'scss': 'accent',
            }),
            fg: Option('#141414', {
                'category': 'Theme',
                'title': 'Accent Foreground Color',
                'scss': 'accent-fg',
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
        },
    },

    border: {
        color: Option('$fg-color', {
            'category': 'Border',
            'title': 'Border Color',
            'scss': '_border-color',
        }),
        opacity: Option(97, {
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

    hypr: {
        active_border: Option('rgba(333333ff)', {
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
        wm_gaps: Option(3, {
            'category': 'General',
            'scss': 'wm-gaps',
            'note': 'wm-gaps',
            'type': 'float',
            'unit': '',
        }),
    },

    // TODO: use this on revealers
    transition: Option(200, {
        'category': 'exclude',
        'note': 'Transition time on aminations in ms, e.g on hover',
        'unit': 'ms',
    }),

    font: {
        font: Option('Hack Nerd Font Bold', {
            'type': 'font',
            'title': 'Font',
            'scss': 'font',
        }),
        mono: Option('Hack Nerd Font Bold', {
            'title': 'Monospaced Font',
            'scss': 'mono-font',
        }),
        size: Option(13, {
            'scss': 'font-size',
            'unit': 'pt',
        }),
    },

    applauncher: {
        width: Option(500),
        height: Option(500),
        icon_size: Option(52),
        descvisible: Option(false),
        bg: Option('solid', {
            'scss': 'applauncher-bg-mode',
            'enums': ['solid', 'linear-gradient', 'repeating-linear-gradient', 'radial-gradient', 'repeating-radial-gradient', 'transparent', 'image'],
            'type': 'enum',
        }),
        bg_color: Option('$bg-color', { 'scss': 'applauncher-bg-color' }),
        bg_size: Option('cover', { 'scss': 'applauncher-bg-size', 'note': 'only if bg is image' }),
        bg_pos: Option('center', { 'scss': 'applauncher-bg-pos', 'note': 'only if bg is image' }),
        bg_rape: Option('no-repeat', { 
            'scss': 'applauncher-bg-repe',
            'note': 'only if bg is image',
            'enums': ['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'space', 'round'],
            'type': 'enum',
        }),
        br_mode: Option(true, { 'scss': 'applauncher-br-mode' }),
        br_radius: Option(20, { 'scss': 'applauncher-br-radius' }),
        br: Option('$border-width solid $accent', { 'scss': 'applauncher-br' }),
        side: Option('avatar', {
            'scssFormat': s => `${s}`,
            'enums': ['avatar', 'player','none'],
            'type': 'enum',
        }),
        labvisible: Option(true),
        icovisible: Option(true),
        avatarvisible: Option(true),
        label: Option('I use arch btw', {
            'scssFormat': s => `${s}`,
        }),
        anchor: Option(['b', 'a'], { 'note': 'anchor'}),
        margins: Option(['0', '0'], { 'note': 'margins[top/bottom left/right]'}),
    },

    bar: {
        position: Option('top', {
            'enums': ['top', 'bottom'],
            'type': 'enum',
        }),
        style: Option('floating', {
            'enums': ['floating', 'normal'],
            'type': 'enum',
        }),
        mode: Option('solid', {
            'scss': 'bar-color-mode',
            'enums': ['solid', 'linear-gradient', 'repeating-linear-gradient', 'radial-gradient', 'repeating-radial-gradient', 'transparent', 'image'],
            'type': 'enum',
        }),
        color: Option('$bg-color', {'scss': 'bar-color' }),
        bg_size: Option('cover', { 'scss': 'bar-size', 'note': 'only if bg is image' }),
        bg_pos: Option('center', { 'scss': 'bar-pos', 'note': 'only if bg is image' }),
        bg_rape: Option('no-repeat', { 
            'scss': 'bar-repe',
            'note': 'only if bg is image',
            'enums': ['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'space', 'round'],
            'type': 'enum',
        }),
        border: Option(true, { 'scss': 'bar-border-sw' }),
        start: {
            border: Option(false, { 'scss': 'bar-start-border-sw' }),
            colormode: Option('transparent', {
                'scss': 'bar-start-color-mode',
                'enums': ['solid', 'linear-gradient', 'repeating-linear-gradient', 'radial-gradient', 'repeating-radial-gradient', 'transparent', 'image'],
                'type': 'enum',
            }),
            color: Option('$bg-color', {'scss': 'bar-start-color' }),
            bg_size: Option('cover', { 'scss': 'bar-start-size', 'note': 'only if bg is image' }),
            bg_pos: Option('center', { 'scss': 'bar-start-pos', 'note': 'only if bg is image' }),
            bg_rape: Option('no-repeat', { 
                'scss': 'bar-start-repe',
                'note': 'only if bg is image',
                'enums': ['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'space', 'round'],
                'type': 'enum',
            }),
        },
        center: {
            border: Option(false, { 'scss': 'bar-center-border-sw' }),
            colormode: Option('transparent', {
                'scss': 'bar-center-color-mode',
                'enums': ['solid', 'linear-gradient', 'repeating-linear-gradient', 'radial-gradient', 'repeating-radial-gradient', 'transparent', 'image'],
                'type': 'enum',
            }),
            color: Option('$bg-color', {'scss': 'bar-center-color' }),
            bg_size: Option('cover', { 'scss': 'bar-center-size', 'note': 'only if bg is image' }),
            bg_pos: Option('center', { 'scss': 'bar-center-pos', 'note': 'only if bg is image' }),
            bg_rape: Option('no-repeat', { 
                'scss': 'bar-center-repe',
                'note': 'only if bg is image',
                'enums': ['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'space', 'round'],
                'type': 'enum',
            }),
        },
        end: {
            border: Option(false, { 'scss': 'bar-end-border-sw' }),
            colormode: Option('transparent', {
                'scss': 'bar-end-color-mode',
                'enums': ['solid', 'linear-gradient', 'repeating-linear-gradient', 'radial-gradient', 'repeating-radial-gradient', 'transparent', 'image'],
                'type': 'enum',
            }),
            color: Option('$bg-color', {'scss': 'bar-end-color' }),
            bg_size: Option('cover', { 'scss': 'bar-end-size', 'note': 'only if bg is image' }),
            bg_pos: Option('center', { 'scss': 'bar-end-pos', 'note': 'only if bg is image' }),
            bg_rape: Option('no-repeat', { 
                'scss': 'bar-end-repe',
                'note': 'only if bg is image',
                'enums': ['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'space', 'round'],
                'type': 'enum',
            }),
        },
        player_length: Option(50, {
            'scssFormat': s => `${s}`,
        }),
        flat_buttons: Option(true, { 'scss': 'bar-flat-buttons' }),
        separators: Option(true),
        icon: Option(themes[0].options['bar.icon'], {
            'scssFormat': v => `"${v}"`,
            'type': 'img',
        }),
        decorsw: Option(false),
        decorator1: Option('/home/wilwe/.hyprland.conf/icons/null', {
            'scssFormat': v => `"${v}"`,
            'type': 'img',
        }),
        decorator2: Option('/home/wilwe/.hyprland.conf/icons/null', {
            'scssFormat': v => `"${v}"`,
            'type': 'img',
        }),
        dsize: Option('120%', {
            'scss': 'dsize',
            'unit': '%',
        }),
    },
    
    quickSettings: {
        bg: Option('solid', {
            'scss': 'qs-bg-mode',
            'enums': ['solid', 'linear-gradient', 'repeating-linear-gradient', 'radial-gradient', 'repeating-radial-gradient', 'transparent', 'image'],
            'type': 'enum',
        }),
        bg_color: Option('$bg-color', { 'scss': 'qs-bg-color' }),
        bg_size: Option('cover', { 'scss': 'qs-bg-size', 'note': 'only if bg is image' }),
        bg_pos: Option('center', { 'scss': 'qs-bg-pos', 'note': 'only if bg is image' }),
        bg_rape: Option('no-repeat', { 
            'scss': 'qs-bg-repe',
            'note': 'only if bg is image',
            'enums': ['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'space', 'round'],
            'type': 'enum',
        }),
        br_mode: Option(true, { 'scss': 'qs-br-mode' }),
        br_radius: Option(20, { 'scss': 'qs-br-radius' }),
        br: Option('$border-width solid $accent', { 'scss': 'qs-br' }),
    },
    
    clock: {
        main: Option('%H:%M', {
            'scssFormat': v => `"${v}"`,
        }),
        visible: Option(false),
        font: Option('Concert One Mono', {
            'type': 'font',
            'title': 'Font Name Preview',
            'unit': 'px',
            'scss': 'cfont',
        }),
        monofont: Option('Concert One Mono', {
            'title': 'Clock Font',
            'scss': 'clock-font',
        }),
        fontsize: Option(10, {
            'scss': 'clock-size',
            'unit': 'pt',
        }),
        layer: Option('background',{
            'scssFormat': v => `"${v}"`,
            'enums': ['background', 'bottom', 'top', 'overlay'],
            'type': 'enum',
        }),
        color: Option('#ffffff', {
            'scss': 'clockcolor',
        }),
        background: Option('transparent', {
            'scss': 'clock-background',
            'enums': ['solid', 'linear-gradient', 'repeating-linear-gradient', 'radial-gradient', 'repeating-radial-gradient', 'transparent', 'image'],
            'type': 'enum',
        }),
        bg_color: Option('$bg-color', { 'scss': 'clock-bg-color' }),
        bg_size: Option('cover', { 'scss': 'clock-bg-size', 'note': 'only if bg is image' }),
        bg_pos: Option('center', { 'scss': 'clock-bg-pos', 'note': 'only if bg is image' }),
        bg_rape: Option('no-repeat', { 
            'scss': 'clock-bg-repe',
            'note': 'only if bg is image',
            'enums': ['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'space', 'round'],
            'type': 'enum',
        }),
        border: Option(false, { 'scss': 'clock-border' }),
        width: Option('$clock-size',{
            'scss': 'clockwidth'
        }),
        height: Option('$clock-size',{
            'scss': 'clockheight'
        }),
        shadow: Option('2px 2px 4px #000000', {
            'scss': 'clockshadow',
        }),
        anchor: Option(['top', 'left'], { 'note': 'anchor'}),
        margins: Option(['0', '0'], { 'note': 'margins[top/bottom left/right]'}),
    },
    moon: {
        path: Option('', {
            'scssFormat': v => `"${v}"`,
            'type': 'string',
            'note': 'path to folder with 1-8quart.png',
        }),
        visible: Option(false),
        size: Option('0', {
            'scss': 'moonsize',
        }),
        layer: Option('background',{
            'scssFormat': v => `"${v}"`,
            'enums': ['background', 'bottom', 'top', 'overlay'],
            'type': 'enum',
        }),
        anchor: Option(['top', 'left'], {'note': 'anchor'}),
        margins: Option(['0', '0'], {'note': 'margins[top/bottom left/right]'}),
    },
    bgtop: {
        image: Option('', {
            'scssFormat': v => `"${v}"`,
            'type': 'string',
        }),
        layer: Option('bottom',{
            'scssFormat': v => `"${v}"`,
            'enums': ['background', 'bottom', 'top', 'overlay'],
            'type': 'enum',
        }),
        visible: Option(false),
        size: Option('0', {
            'scss': 'bgtopsize',
        }),
        anchor: Option(['top', 'left'], {'note': 'anchor'}),
        margins: Option(['0', '0'], {'note': 'margins[top/bottom left/right]'}),
    },
    sound: {
        sound: Option(' ', {
            'scssFormat': v => `"${v}"`,
        }),
        layer: Option('background',{
            'scssFormat': v => `"${v}"`,
            'enums': ['background', 'bottom', 'top', 'overlay'],
            'type': 'enum',
        }),
        visible: Option(false),
        size: Option('0', {
            'scss': 'soundsize',
        }),
        icon: Option('', {
            'scssFormat': v => `"${v}"`,
        }),
        anchor: Option(['top', 'right'], {'note': 'anchor'}),
        margins: Option(['0', '0'], {'note': 'margins[top/bottom left/right]'}),
    },
    
    info: {
        anchor: Option(['bottom', 'right'], {'note': 'anchor'}),
        margins: Option(['20', '20'], {'note': 'margins[top/bottom left/right]'}),
        bgcolor: Option('transparentize($bg-color, 0.3)',{
            'scss': 'infobg-color'
        }),
        layer: Option('overlay',{
            'scssFormat': v => `"${v}"`,
            'enums': ['background', 'bottom', 'top', 'overlay'],
            'type': 'enum',
        }),
    },
    
    music: {
        visible: Option(false),
        anchor: Option(['bottom', 'right'], {'note': 'anchor'}),
        margins: Option(['20', '20'], {'note': 'margins[top/bottom left/right]'}),
        layer: Option('background',{
            'scssFormat': v => `"${v}"`,
            'enums': ['background', 'bottom', 'top', 'overlay'],
            'type': 'enum',
        }),
        box: Option('blurred', { 
            'scss': 'music-box',
            'enums': ['solid', 'linear-gradient', 'repeating-linear-gradient', 'radial-gradient', 'repeating-radial-gradient', 'blurred', 'transparent', 'image'],
            'type': 'enum',
        }),
        box_color: Option('$bg-color', { 'scss': 'mb-color' }),
        bg_size: Option('cover', { 'scss': 'music-bg-size', 'note': 'only if bg is image' }),
        bg_pos: Option('center', { 'scss': 'music-bg-pos', 'note': 'only if bg is image' }),
        bg_rape: Option('no-repeat', { 
            'scss': 'music-bg-repe',
            'note': 'only if bg is image',
            'enums': ['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'space', 'round'],
            'type': 'enum',
        }),
        border: Option(true, { 'scss': 'music-border' }),
        volume: Option(true, { 'scss': 'music-volume-visible' }),
        vertical: Option(false),
        titlejustification: Option('left',{
            'scssFormat': v => `"${v}"`,
            'enums': ['left', 'center', 'right'],
            'type': 'enum',
        }),
        artistjustification: Option('left',{
            'scssFormat': v => `"${v}"`,
            'enums': ['left', 'center', 'right'],
            'type': 'enum',
        }),
        cover: {
            visible: Option(true),
            hpack: Option('start', {
                'scssFormat': v => `"${v}"`,
                'enums': ['start', 'center', 'end'],
                'type': 'enum',
            }),
        },
        footer: {
            positon: Option(true),
            controls: Option(true),
            box_visible: Option('transparent', {
                'scss': 'music-footer-box',
                'enums': ['solid', 'gradient', 'transparent'],
                'type': 'enum',
            }),
            box_color: Option('$bg-color', { 'scss': 'mfb-color' }),
            border: Option(false, { 'scss': 'music-footer-border' }),
        },
        text: {
            visible: Option('transparent', {
                'scss': 'music-text-box',
                'enums': ['solid', 'gradient', 'transparent'],
                'type': 'enum',
            }),
            bg_color: Option('$bg-color', { 'scss': 'mtb-color' }),
            color: Option('$fg-color', { 'scss': 'music-text-color' }),
            border: Option(false, { 'scss': 'music-text-border' }),
        },
        Title: Option(true),
        Artist: Option(true),
        min_width: Option(500, {
            'unit': 'px',
            'type': 'number',
            'scss': 'musicwidgetwidth'
        }),
        min_height: Option(200, {
            'unit': 'px',
            'type': 'number',
            'scss': 'musicwidgetheight'
        }),
        cover_width: Option(150, {
            'unit': 'px',
            'type': 'number',
            'scss': 'coverwidth'
        }),
        cover_height: Option(150, {
            'unit': 'px',
            'type': 'number',
            'scss': 'coverheight'
        }),
    },
    PowerMenu: {
        bg: Option('solid', {
            'scss': 'pm-bg-mode',
            'enums': ['solid', 'linear-gradient', 'repeating-linear-gradient', 'radial-gradient', 'repeating-radial-gradient', 'transparent', 'image'],
            'type': 'enum',
        }),
        bg_color: Option('$bg-color', { 'scss': 'pm-bg-color' }),
        bg_size: Option('cover', { 'scss': 'pm-bg-size', 'note': 'only if bg is image' }),
        bg_pos: Option('center', { 'scss': 'pm-bg-pos', 'note': 'only if bg is image' }),
        bg_rape: Option('no-repeat', { 
            'scss': 'pm-bg-repe',
            'note': 'only if bg is image',
            'enums': ['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'space', 'round'],
            'type': 'enum',
        }),
        br_mode: Option(true, { 'scss': 'pm-br-mode' }),
        br_radius: Option(20, { 'scss': 'pm-br-radius' }),
        br: Option('$border-width solid $accent', { 'scss': 'pm-br' }),
    },

    battery: {
        show_percentage: Option(true, {
            'persist': true,
            'noReload': false,
            'category': 'exclude',
        }),
        bar: {
            width: Option(70, { 'category': 'Bar' }),
            height: Option(14, { 'category': 'Bar' }),
        },
        low: Option(30, { 'category': 'Bar' }),
        medium: Option(50, { 'category': 'Bar' }),
    },
    
    desktop: {
        wallpaper: {
            fg: Option('#fff', { 'scss': 'wallpaper-fg' }),
            img: Option('/home/wilwe/.hyprland.conf/wallpapers/black.png', {
                'scssFormat': v => `"${v}"`,
                'type': 'img',
            }),
            transition: Option("--transition-type wave --transition-angle 45", { 'scssFormat': v => `"${v}"`, })
        },
        avatar: Option(`/var/lib/AccountsService/icons/${USER}`, {
            'scssFormat': v => `"${v}"`,
            'type': 'img',
            'note': 'displayed in quicksettings and locksreen',
        }),
        drop_shadow: Option(false, { 'scss': 'drop-shadow' }),
        shadow: Option('rgba(0, 0, 0, .6)', { 'scss': 'shadow' }),
    },

    notifications: {
        black_list: Option(['Spotify'], { 'note': 'app-name | entry' }),
        position: Option(['top'], { 'note': 'anchor' }),
        width: Option(450),
        bg: Option('solid', {
            'scss': 'nf-bg-mode',
            'enums': ['solid', 'linear-gradient', 'repeating-linear-gradient', 'radial-gradient', 'repeating-radial-gradient', 'transparent', 'image'],
            'type': 'enum',
        }),
        bg_color: Option('$bg-color', { 'scss': 'nf-bg-color' }),
        bg_size: Option('cover', { 'scss': 'nf-bg-size', 'note': 'only if bg is image' }),
        bg_pos: Option('center', { 'scss': 'nf-bg-pos', 'note': 'only if bg is image' }),
        bg_rape: Option('no-repeat', { 
            'scss': 'nf-bg-repe',
            'note': 'only if bg is image',
            'enums': ['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'space', 'round'],
            'type': 'enum',
        }),
        br_mode: Option(true, { 'scss': 'nf-br-mode' }),
        br_radius: Option(20, { 'scss': 'nf-br-radius' }),
        br: Option('$border-width solid $accent', { 'scss': 'nf-br' }),
    },

    dashboard: {
        sys_info_size: Option(70, {
            'category': 'Desktop',
            'scss': 'sys-info-size',
        }),
        bg: Option('solid', {
            'scss': 'db-bg-mode',
            'enums': ['solid', 'linear-gradient', 'repeating-linear-gradient', 'radial-gradient', 'repeating-radial-gradient', 'transparent', 'image'],
            'type': 'enum',
        }),
        bg_color: Option('$bg-color', { 'scss': 'db-bg-color' }),
        bg_size: Option('cover', { 'scss': 'db-bg-size', 'note': 'only if bg is image' }),
        bg_pos: Option('center', { 'scss': 'db-bg-pos', 'note': 'only if bg is image' }),
        bg_rape: Option('no-repeat', { 
            'scss': 'db-bg-repe',
            'note': 'only if bg is image',
            'enums': ['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'space', 'round'],
            'type': 'enum',
        }),
        br_mode: Option(true, { 'scss': 'db-br-mode' }),
        br_radius: Option(20, { 'scss': 'db-br-radius' }),
        br: Option('$border-width solid $accent', { 'scss': 'db-br' }),
    },

    mpris: {
        black_list: Option(['VLC media player'], {
            'category': 'Bar',
            'title': 'List of blacklisted mpris players',
            'note': 'filters for bus-name, name, identity, entry',
        }),
        preferred: Option('librewolf', {
            'category': 'Bar',
            'title': 'Preferred player',
        }),
    },

    workspaces: Option(5, {
        'category': 'Bar',
        'title': 'No. workspaces on bar and overview',
        'note': 'Set it to 0 to make it dynamic',
    }),
    OverView: {
        bg: Option('solid', {
            'scss': 'ov-bg-mode',
            'enums': ['solid', 'linear-gradient', 'repeating-linear-gradient', 'radial-gradient', 'repeating-radial-gradient', 'transparent', 'image'],
            'type': 'enum',
        }),
        bg_color: Option('$bg-color', { 'scss': 'ov-bg-color' }),
        bg_size: Option('cover', { 'scss': 'ov-bg-size', 'note': 'only if bg is image' }),
        bg_pos: Option('center', { 'scss': 'ov-bg-pos', 'note': 'only if bg is image' }),
        bg_rape: Option('no-repeat', { 
            'scss': 'ov-bg-repe',
            'note': 'only if bg is image',
            'enums': ['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'space', 'round'],
            'type': 'enum',
        }),
        br_mode: Option(true, { 'scss': 'ov-br-mode' }),
        br_radius: Option(20, { 'scss': 'ov-br-radius' }),
        br: Option('$border-width solid $accent', { 'scss': 'ov-br' }),
    },

    temperature: '/sys/class/thermal/thermal_zone0/temp',
    systemFetchInterval: 2500,
    brightnessctlKBD: 'asus::kbd_backlight',
    substitutions: {
        icons: [
            ['transmission-gtk', 'transmission'],
            ['blueberry.py', 'bluetooth'],
            ['Caprine', 'facebook-messenger'],
            ['', 'preferences-desktop-display'],
        ],
        titles: [
            ['com.github.Aylur.ags', 'AGS'],
            ['transmission-gtk', 'Transmission'],
            ['com.obsproject.Studio', 'OBS'],
            ['com.usebottles.bottles', 'Bottles'],
            ['com.github.wwmm.easyeffects', 'Easy Effects'],
            ['org.gnome.TextEditor', 'Text Editor'],
            ['org.gnome.design.IconLibrary', 'Icon Library'],
            ['blueberry.py', 'Blueberry'],
            ['org.wezfurlong.wezterm', 'Wezterm'],
            ['com.raggesilver.BlackBox', 'BlackBox'],
            ['firefox', 'Firefox'],
            ['io.gitlab.librewolf-community', 'Firefox'],
            ['org.gnome.Nautilus', 'Files'],
            ['libreoffice-writer', 'Writer'],
            ['', 'Desktop'],
        ],
    },
};
