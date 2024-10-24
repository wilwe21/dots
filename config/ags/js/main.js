import Applauncher from './applauncher/Applauncher.js';
import Dashboard from './dashboard/Dashboard.js';
import Notifications from './notifications/Notifications.js';
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
import music from './widget/music.js';
import OSDA from './OSD/OSDA.js';
import OSDB from './OSD/OSDB.js';
import bl from './app/bl.js';
import sensors from './app/sensors.js';

init();

const windows = () => [
    forMonitors(Notifications),
    forMonitors(TopBar),
    forMonitors(Clock),
    forMonitors(Moon),
    forMonitors(music),
    sensors(),
    bl(),
    OSDA(),
    OSDB(),
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
    //Is this working or fucking no cus it need to be Notifications.cacheActions but it can't accept it
    cacheNotificationActions: true,
    //NotificationscacheActions: true,
    closeWindowDelay: {
        'quicksettings': options.transition.value,
        'dashboard': options.transition.value,
    },
};
