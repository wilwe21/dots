import AgsWindow from 'resource:///com/github/Aylur/ags/widgets/window.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import options from '../options.js';
import GObject from 'gi://GObject';

class WW extends AgsWindow {
    static { GObject.registerClass(this); }
    constructor({ name, ...rest }) {
        super({
            ...rest,
            name,
            class_names: ['WW', name],
        });
    }
};
export default config => new WW(config);
