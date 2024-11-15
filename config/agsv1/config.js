import { readFile } from 'resource:///com/github/Aylur/ags/utils.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
const pkgjson = JSON.parse(readFile(App.configDir + '/package.json'));

const expectedVersion = pkgjson.version;
let config = {};

config = (await import('./js/main.js')).default;

export default config;
