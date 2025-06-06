import Variable from 'resource:///com/github/Aylur/ags/variable.js';
import Mpris from 'resource:///com/github/Aylur/ags/service/mpris.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js'
import Audio from 'resource:///com/github/Aylur/ags/service/audio.js';
import Brightness from './services/brightness.js';
import * as mpris from './misc/mpris.js';
import GLib from 'gi://GLib';
import options from './options.js';
import { exec, execAsync, interval } from 'resource:///com/github/Aylur/ags/utils.js';

const intval = options.systemFetchInterval;
const brightup = sas => {
    const act = Brightness.screen;
    Brightness.screen = Number(act) + sas;
};
globalThis['brightup'] = brightup;

export const clock = Variable(GLib.DateTime.new_now_local(), {
    poll: [1000, () => GLib.DateTime.new_now_local()],
});

export const uptime = Variable('', {
    poll: [60_000, 'cat /proc/uptime', line => {
        const uptime = Number.parseInt(line.split('.')[0]) / 60;
        if (uptime > 18 * 60)
            return 'Go Sleep';

        const h = Math.floor(uptime / 60);
        const s = Math.floor(uptime % 60);
        return `${h}:${s < 10 ? '0' + s : s}`;
    }],
});

export const distro = GLib.get_os_info('ID');

export const distroIcon = (() => {
    switch (distro) {
        case 'fedora': return '';
        case 'arch': return '';
        case 'nixos': return '';
        case 'debian': return '';
        case 'opensuse-tumbleweed': return '';
        case 'ubuntu': return '';
        case 'endeavouros': return '';
        default: return '';
    }
})();

/** @type {function([string, string] | string[]): number} */
const divide = ([total, free]) => Number.parseInt(free) / Number.parseInt(total);

export const cpu = Variable(0, {
    poll: [intval, "/home/wilwe/.hyprland.conf/scripts/cpu", n => {
        return String(n);
    }],
});

export const ram = Variable(0, {
    poll: [intval, 'free', out => divide(out.split('\n')
        .find(line => line.includes('Speicher:'))
        ?.split(/\s+/)
        .splice(1, 2) || ['1', '1'])],
});

export const temp = Variable(0, {
    poll: [intval, 'cat ' + options.temperature, n => {
        return Number.parseInt(n) / 1000;
    }],
});


export const volume = (type = 'speaker') => Widget.Label({
    class_name: 'volumelabel',
}).hook(Audio.speaker, self => {
    if ( Audio.speaker.stream.isMuted ){
        self.label = String('  X   ')
    } else {
        const vol = parseInt(Audio.speaker.volume * 100);
        self.label = String(vol+'%')
    }
});

export const temperatura = Variable('Teperatura: error', {
    poll: [5000, 'curl wttr.in/?format=Temperatura:%20%t', n => {
		if (String(n).search("Unknown Location") != -1 || String(n).search("igor") != -1) {
			return String("?")
		} else {
			return String(n);
		}
    }],
});

export const chmury = Variable('error', {
    poll: [5000, 'curl -H Accept-Language:pl wttr.in/?format=%C%20%c', n => {
		if (String(n).search("Unknown Location") != -1 || String(n).search("igor") != -1) {
			return String("?")
		} else {
			return String(n);
		}
    }],
});

export const moon = Variable(0, {
    poll: [250000, "/home/wilwe/.hyprland.conf/scripts/moon", n => {
        return n != "" ? String(n) : "?";
    }],
});

export const download = Variable(0, {
    poll: [intval, "/home/wilwe/.hyprland.conf/scripts/rx", n => {
        return String(n);
    }],
});

export const upload = Variable(0, {
    poll: [intval, "/home/wilwe/.hyprland.conf/scripts/tx", n => {
        return String(n);
    }],
});
