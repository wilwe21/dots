import Notifications from './notifications/Notifications.js';
import PowerMenu from './powermenu/PowerMenu.js';
import QuickSettings from './quicksettings/QuickSettings.js';
import TopBar from './bar/TopBar.js';
import Verification from './powermenu/Verification.js';
import { init } from './settings/setup.js';
import { forMonitors } from './utils.js';
import options from './options.js';
import game from './widget/game.js';

init();

const windows = () => [
    forMonitors(Notifications),
    forMonitors(TopBar),
    forMonitors(game),
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
