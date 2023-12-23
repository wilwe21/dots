import Applauncher from './applauncher/Applauncher.js';
import Dashboard from './dashboard/Dashboard.js';
import Notifications from './notifications/Notifications.js';
import OSD from './osd/OSD.js';
import Overview from './overview/Overview.js';
import PowerMenu from './powermenu/PowerMenu.js';
import QuickSettings from './quicksettings/QuickSettings.js';
import TopBar from './bar/TopBar.js';
import Verification from './powermenu/Verification.js';
import { init } from './settings/setup.js';
import { forMonitors } from './utils.js';
import options from './options.js';
import Clock from './widget/clock.js';
import Moon from './widget/moon.js';
import menu from './widget/menu.js';
import sound from './widget/sound.js';
import musicapp from './app/musicapp.js';
import info from './app/info.js';

init();

const windows = () => [
    forMonitors(Notifications),
    forMonitors(OSD),
    forMonitors(TopBar),
    forMonitors(Moon),
    forMonitors(menu),
    forMonitors(sound),
    forMonitors(Clock),
    info(),
    musicapp(),
    Applauncher(),
    Dashboard(),
    Overview(),
    PowerMenu(),
    QuickSettings(),
    Verification(),
];

export default {
    windows: windows().flat(1),
    maxStreamVolume: 1.05,
    cacheNotificationActions: true,
    closeWindowDelay: {
        'quicksettings': options.transition.value,
        'dashboard': options.transition.value,
    },
};
