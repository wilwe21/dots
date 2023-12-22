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
        font: Option('Ubuntu Nerd Font', {
            'type': 'font',
            'title': 'Font',
            'scss': 'font',
        }),
        mono: Option('Mononoki Nerd Font', {
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
        label: Option('I use arch btw', {
            'scssFormat': s => `${s}`,
        }),
    },

    bar: {
        position: Option('top', {
            'enums': ['top', 'bottom'],
            'type': 'enum',
        }),
        style: Option('floating', {
            'enums': ['floating', 'normal', 'separated'],
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
        main: Option(' ', {
            'scssFormat': v => `"${v}"`,
            'type': 'string',
        }),
        visible: Option(false),
        font: Option('Ubuntu Nerd Font', {
            'scss': 'clockfont',
            'type': 'font',
        }),
        fontsize: Option('10', {
            'scss': 'clocksize',
            'type': 'number',
        }),
        color: Option('#ffffff', {
            'scss': 'clockcolor',
        }),
        ml: Option('0', {
            'scssFormat': v => `"${v}"`,
        }),
        mt: Option('0', {
            'scssFormat': v => `"${v}"`,
        }),
        a1: Option('top', {
            'scssFormat': v => `"${v}"`,
        }),
    },
    moon: {
        path: Option('', {
            'scssFormat': v => `"${v}"`,
            'type': 'string',
        }),
        visible: Option(false),
        anchor: Option('top', {
            'scssFormat': v => `"${v}"`,
        }),
        ml: Option('0', {
            'scssFormat': v => `"${v}"`,
        }),
        mt: Option('0', {
            'scssFormat': v => `"${v}"`,
        }),
        size: Option('0', {
            'scss': 'moonsize',
        }),
    },
    menu: {
        visible: Option(false),
    },
    sound: {
        sound: Option(' ', {
            'scssFormat': v => `"${v}"`,
        }),
        visible: Option(false),
        anchor: Option('top', {
            'scssFormat': v => `"${v}"`,
        }),
        ml: Option('0', {
            'scssFormat': v => `"${v}"`,
        }),
        mt: Option('0', {
            'scssFormat': v => `"${v}"`,
        }),
        size: Option('0', {
            'scss': 'soundsize',
        }),
        icon: Option('', {
            'scssFormat': v => `"${v}"`,
        }),
    },
    game: {
        visible: Option(false),
        anchor: Option('top', {
            'scssFormat': v => `"${v}"`,
        }),
        ml: Option('0', {
            'scssFormat': v => `"${v}"`,
        }),
        mt: Option('0', {
            'scssFormat': v => `"${v}"`,
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
            ['org.gnome.Nautilus', 'Files'],
            ['libreoffice-writer', 'Writer'],
            ['', 'Desktop'],
        ],
    },
};
