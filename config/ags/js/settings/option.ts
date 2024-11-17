import GObject from 'gi://GObject';
import { exec } from 'astal/process';
import { readFile, writeFile } from 'astal/file';
//import { reloadScss } from './scss.ts';
import options from "../options.ts";
import { wallpaper } from './wallpaper.ts';
import vars from '../vars.ts'

const CACHE_FILE = vars.cacheDir + '/options.json';

/** object that holds the overriedden values */
let cacheObj = JSON.parse(readFile(CACHE_FILE) || '{}');

/** @template T */
export class Opt extends GObject.Object {
    static {
        GObject.registerClass({
            GTypeName: 'Options',
            Signals: { 'changed': {} },
        }, this);
    }
		#value;
    #scss = '';
    unit = 'px';
    noReload = false;
    persist = false;
    id = '';
    title = '';
    note = '';
    type = '';
    category = '';

    /** @type {Array<string>} */
    enums = [];

    /** @type {(v: T) => any} */
    format = v => v;

    /** @type {(v: T) => any} */
    scssFormat = v => v;

    /**
     * @param {T} value
     * @param {OptionConfig<T> =} config
     */
    constructor(value, config) {
				super();

        this.#value = value;
        this.defaultValue = value;
        this.type = typeof value;

        if (config)
            Object.keys(config).forEach(c => this[c] = config[c]);

        import('../options.js').then(this.#init.bind(this));
    }

    set scss(scss) { this.#scss = scss; }
    get scss() {
        return this.#scss || this.id
            .split('.')
            .join('-')
            .split('_')
            .join('-');
    }

    #init() {
        getOptions(); // sets the ids as a side effect

        if (cacheObj[this.id] !== undefined)
            this.setValue(cacheObj[this.id]);

        const words = this.id
            .split('.')
            .flatMap(w => w.split('_'))
            .map(word => word.charAt(0).toUpperCase() + word.slice(1));

        this.title ||= words.join(' ');
        this.category ||= words.length === 1
            ? 'General'
            : words.at(0) || 'General';
				this.connect("changed", () => {
            cacheObj[this.id] = this.value;
            writeFile(
                CACHE_FILE,
                JSON.stringify(cacheObj, null, 2),
            );
				})
    }

    get value() { return this.#value; }
    set value(value) { this.setValue(value); }

    /** @param {T} value  */
    setValue(value, reload = false) {
        if (typeof value !== typeof this.defaultValue) {
            console.error(Error(`WrongType: Option "${this.id}" can't be set to ${value}, ` +
                `expected "${typeof this.defaultValue}", but got "${typeof value}"`));

            return;
        }

        if (this.value !== value) {
            this.#value = this.format(value);
						this.emit("changed");

            if (reload && !this.noReload) {
                wallpaper();
            }
        }
    }

    reset(reload = false) {
        if (!this.persist)
            this.setValue(this.defaultValue, reload);
    }
}

export function Option(value, config) {
    return new Opt(value, config);
}

export function getOptions(object = options, path = '') {
    return Object.keys(object).flatMap(key => {
        const obj = object[key];
        const id = path ? path + '.' + key : key;

        if (obj instanceof Opt) {
            obj.id = id;
            return obj;
        }

        if (typeof obj === 'object')
            return getOptions(obj, id);

        return [];
    });
}

export function resetOptions() {
    exec(`rm -rf ${CACHE_FILE}`);
    cacheObj = {};
    getOptions().forEach(opt => opt.reset());
}

export function getValues() {
    const obj = {};
    for (const opt of getOptions()) {
        if (opt.category !== 'exclude')
            obj[opt.id] = opt.value;
    }

    return JSON.stringify(obj, null, 2);
}

export function apply(config) {
    const opti = getOptions();
    const settings = typeof config === 'string'
        ? JSON.parse(config) : config;

    for (const id of Object.keys(settings)) {
        const opt = opti.find(opt => opt.id === id);
        if (!opt) {
            print(`No option with id: "${id}"`);
            continue;
        }

        opt.setValue(settings[id]);
    }
}
