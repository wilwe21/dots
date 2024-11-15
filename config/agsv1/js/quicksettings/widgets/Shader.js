import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import { ArrowToggleButton, Menu, opened } from '../ToggleButton.js';
import shaders from '../../shaders.js';
import icons from '../../icons.js';
import options from '../../options.js';
import { setShader } from '../../settings/shader.js';

export const ShaderToggle = () => ArrowToggleButton({
    name: 'shader',
	icon: Widget.Icon("tor"),
	label: Widget.Label("Shaders"),
    connection: [opened, () => opened.value === 'shader'],
    activate: () => opened.setValue('shader'),
    activateOnArrow: false,
    deactivate: () => { },
});

export const ShaderSelector = () => Menu({
    name: 'shader',
    title: Widget.Label('Shader Selector'),
    content: [
        ...shaders.map(({ name, icon }) => Widget.Button({
			on_clicked: () => setShader(name),
            child: Widget.Box({
                children: [
                    Widget.Icon(icon),
                    Widget.Label(name),
                    Widget.Icon({
                        icon: icons.ui.tick,
                        hexpand: true,
                        hpack: 'end',
                        visible: options.theme.name.bind('value').transform(v => v === name),
                    }),
                ],
            }),
        })),
    ],
});
