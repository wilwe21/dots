import { Shader } from './settings/shader.js';

export default [
	Shader({
		name: 'None',
	}),
	Shader({
		name: 'Invert',
		icon: '/home/wilwe/.hyprland.conf/icons/ghost.png',
		path: '/home/wilwe/.hyprland.conf/shaders/inver.glsl'
	}),	
	Shader({
		name: 'Dark',
		icon: '/home/wilwe/.hyprland.conf/icons/ghost2.png',
		path: '/home/wilwe/.hyprland.conf/shaders/dark.glsl'
	}),
]
