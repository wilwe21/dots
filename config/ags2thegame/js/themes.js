/**
 * A Theme is a set of options that will be applied
 * ontop of the default values. see options.js for possible options
 */
import { Theme, WP, HOME } from './settings/theme.js';

export default [

 Theme({
    name: 'Catppuccin Macchiato',
    icon: "/home/wilwe/.hyprland.conf/screens/icons/cat.png",

    "spacing": 2,
    "padding": 7,
    "radii": 5,
    "popover_padding_multiplier": 1.4,
    "misc.pywal.theme": "base16-seti",
    "misc.gtk.theme": "Catppuccin-Macchiato-Standard-Mauve-Dark",
    "misc.gtkIcons.theme": "Catppuccin-Macchiato",
    "color.red": "#F38BA8",
    "color.green": "#A6E3A1",
    "color.yellow": "#F9E2AF",
    "color.blue": "#89B4FA",
    "color.magenta": "#CBA6F7",
    "color.teal": "#94E2D5",
    "color.orange": "#FAB387",
    "theme.scheme": "dark",
    "theme.bg": "#181825",
    "theme.fg": "#CDD6F4",
    "theme.accent.accent": "$green",
    "theme.accent.fg": "$bg-color",
    "theme.accent.gradient": "to right, $accent, lighten(#D2AC31, 20%)",
    "theme.widget.bg": "$fg-color",
    "theme.widget.opacity": 94,
    "border.color.": "$teal",
    "border.opacity": 100,
    "border.width": 2,
    "border.barcolor": "$accent",
    "hypr.inactive_border": "rgba(333333ff)",
    "hypr.wm_gaps": 3,
    "font.font": "Ubuntu Nerd Font",
    "font.mono": "Mononoki Nerd Font",
    "font.size": 13,
    "bar.position": "top",
    "bar.style": "floating",
    "bar.flat_buttons": true,
    "battery.bar.width": 50,
    "battery.bar.height": 14,
    "battery.low": 15,
    "battery.medium": 35,
    "desktop.wallpaper.fg": "#fff",
    "desktop.wallpaper.img": "/home/wilwe/.hyprland.conf/config/ags2thegame/js/wallpaper.png",
    "desktop.avatar": "/var/lib/AccountsService/icons/wilwe",
    "desktop.drop_shadow": false,
    "desktop.shadow": "rgba(0, 0, 0, .6)",
    "notifications.width": 450,
    "dashboard.sys_info_size": 70,
  }),
];


