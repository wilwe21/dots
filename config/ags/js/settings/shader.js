import App from 'resource:///com/github/Aylur/ags/app.js';
import options from '../options.js';
import shaders from '../shaders.js';
import { setupHyprland } from './hyprland.js';
import { execAsync } from 'resource:///com/github/Aylur/ags/utils.js';

/** @param {string} name */
export function setShader(name) {
    const shader = shaders.find(t => t.name === name);
    if (!shader){
        return print('No theme named ' + name);
	};
	if (shader.name == "None") {
		execAsync(['hyprshade', 'off'])
		return print("Shaders off")
	}
	execAsync(['hyprshade', 'on', shader.path])
	return print("Shader on " + shader.name);
}
globalThis['setShader'] = setShader;

export const Shader = ({ name, icon = 'tor', path = null, ...options }) => ({
    name,
    icon,
	path,
    options: {
        'shader.name': name,
        'shader.icon': icon,
		'shader.path': path,
        ...options,
    },
});
