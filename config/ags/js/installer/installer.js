import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import Applications from 'resource:///com/github/Aylur/ags/service/applications.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import * as vars from '../variables.js';
import icons from '../icons.js';

const button = (type, label, action) => Widget.Button({
    class_name: `insbutton ${type}`,
    child: Widget.Label(`${label}`),
    on_clicked: () => `${action}`
});

export default () => Widget.Window({
    name: `installer`,
    title: 'Installer',
    class_name: 'installer', 
    child:
        Widget.Box({
            class_name: 'installerbox',
            vertical: true,
            children: [
                Widget.Label('Installer'),
                Widget.CenterBox({
                    center_widget: Widget.Label(`chujnia z grzybnią gimpera i chuj z tego chuju jebany`),
	            }),
	            Widget.CenterBox({
	                class_name: 'footer',
	                vertical: false,
	                start_widget: Widget.Icon({
	                    class_name: 'ibicon',
	                    icon: '/home/wilwe/.hyprland.conf/screens/icons/fluttershy.png',
	                }),
	                center_widget: Widget.Label('LambOS Beta1.7.10'),
	                end_widget: Widget.Box({
	                    children: [
	                        button('exit', 'Cancel'),
	                        button('Continue', 'Continue'),
	                    ],
	                }),
	            }),
	        ],
	    }),
});
