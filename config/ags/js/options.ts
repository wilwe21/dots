import { Option, resetOptions, getValues, apply, getOptions } from './settings/option.ts';
//import themes from './themes.js';

export default {
    reset: resetOptions,
    values: getValues,
    apply: apply,
    list: getOptions,

    spacing: Option(2),
    padding: Option(8),
    radii: Option(5),

		barposition: Option("TOP")
};
