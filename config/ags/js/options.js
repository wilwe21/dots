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
        flat_buttons: Option(true, { 'scss': 'bar-flat-buttons' }),
        separators: Option(true),
        icon: Option(themes[0].options['bar.icon'], {
                'scssFormat': v => `"${v}"`,
                'type': 'img',
            }),
        decorator1: Option(themes[0].options['bar.decorator1'], {
                'scssFormat': v => `"${v}"`,
                'type': 'img',
            }),
        decorator2: Option(themes[0].options['bar.decorator2'], {
                'scssFormat': v => `"${v}"`,
                'type': 'img',
            }),
        dsize: Option('120%', {
                'scss': 'dsize',
                'unit': '%',
            }),
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
        background: Option(false, {
            'scss': 'clock-background',
        }),
        bg_color: Option('$bg-color', {
            'scss': 'clock-bg-color',
        }),
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
        blurrcov: Option(true),
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
            img: Option('/home/wilwe/.hyprland.conf/screens/wallpapers/black.png', {
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
    },

    dashboard: {
        sys_info_size: Option(70, {
            'category': 'Desktop',
            'scss': 'sys-info-size',
        }),
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
