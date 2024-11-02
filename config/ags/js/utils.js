import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import cairo from 'cairo';
import icons from './icons.js';
import Gdk from 'gi://Gdk';
import GLib from 'gi://GLib';

/**
  * @param {number} length
  * @param {number=} start
  * @returns {Array<number>}
  */
export function range(length, start = 1) {
    return Array.from({ length }, (_, i) => i + start);
}

/**
  * @param {Array<[string, string] | string[]>} collection
  * @param {string} item
  * @returns {string}
  */
export function substitute(collection, item) {
    return collection.find(([from]) => from === item)?.[1] || item;
}

/**
  * @param {(monitor: number) => any} widget
  * @returns {Array<import('types/widgets/window').default>}
  */
export function forMonitors(widget) {
    const n = Gdk.Display.get_default()?.get_n_monitors() || 1;
    return range(n, 0).map(widget).flat(1);
}

/**
  * @param {import('gi://Gtk').Gtk.Widget} widget
  * @returns {any} - missing cairo type
  */
export function createSurfaceFromWidget(widget) {
    const alloc = widget.get_allocation();
    const surface = new cairo.ImageSurface(
        cairo.Format.ARGB32,
        alloc.width,
        alloc.height,
    );
    const cr = new cairo.Context(surface);
    cr.setSourceRGBA(255, 255, 255, 0);
    cr.rectangle(0, 0, alloc.width, alloc.height);
    cr.fill();
    widget.draw(cr);

    return surface;
}

/** @param {string} icon */
export function getAudioTypeIcon(icon) {
    const substitues = [
        ['audio-headset-bluetooth', icons.audio.type.headset],
        ['audio-card-analog-usb', icons.audio.type.speaker],
        ['audio-card-analog-pci', icons.audio.type.card],
    ];

    return substitute(substitues, icon);
}


/** @param {import('types/service/applications').Application} app */
export function launchApp(app) {
    Utils.execAsync(['hyprctl', 'dispatch', 'exec', `${app.executable.replace("%F", "").replace("@@u %U @@", "").replace("%U","")}`]);
	app.frequency += 1;
}
export function launchSh(Sh) {
    Utils.execAsync(['hyprctl', 'dispatch', 'exec', `sh -c ${Sh}`]);
}

/** @param {Array<string>} bins */
export function dependencies(bins) {
    const deps = bins.map(bin => {
        const has = Utils.exec(`which ${bin}`);
        if (!has)
            print(`missing dependency: ${bin}`);

        return !!has;
    });

    return deps.every(has => has);
}

/** @param {string} img - path to an img file */
export function blurImg(img) {
    const cache = Utils.CACHE_DIR + '/media';
    return new Promise(resolve => {
        if (!img)
            resolve('');

        const dir = cache + '/blurred';
        const blurred = dir + img.substring(cache.length);

        if (GLib.file_test(blurred, GLib.FileTest.EXISTS))
            return resolve(blurred);

        Utils.ensureDirectory(dir);
        Utils.execAsync(['convert', img, '-blur', '0x22', blurred])
            .then(() => resolve(blurred))
            .catch(() => resolve(''));
    });
}

export function getColor(scss) {
  // Split the string into segments (with slight modification)
  const segments = scss.split(/([^\s\(\)\[\]:]+|[^\s\(\)\[\]]+:)/).filter(Boolean);

  let colorString = "";
  for (const segment of segments) {
    if (segment.includes('$') && !segment.endsWith(':')) {
      // Handle SCSS variable, but not ending with colon
      const variableName = segment.replace('$', '');
      const resolvedOption = options.list().find(opt => opt.scss === variableName);

      if (resolvedOption) {
        // Check for circular dependencies before recursion (optional)
        if (isCircularDependency(scss, resolvedOption.value)) {
          throw new Error(`Circular dependency detected in color variables: ${scss}`);
        }

        // Resolve nested variables recursively (modified)
        const resolvedValue = getColor(resolvedOption.value);
        colorString += resolvedValue;
      } else {
        // Variable not found, treat as plain text
        colorString += segment;
      }
    } else {
      // Plain text, colon, or nested structure, add directly
      colorString += segment;
    }
  }

  return colorString || null; // Return null if no color is found
}
// Helper function to detect circular dependencies (optional)
export function isCircularDependency(currentVar, potentialVar) {
  if (!potentialVar.includes('$')) {
    return false;
  }

  const nextVarName = potentialVar.replace('$', '');
  const nextOption = options.list().find(opt => opt.scss === nextVarName);

  if (!nextOption) {
    return false;
  }

  return (nextOption.value === currentVar) || isCircularDependency(currentVar, nextOption.value, options);
}
