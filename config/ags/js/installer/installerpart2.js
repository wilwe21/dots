import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import Applications from 'resource:///com/github/Aylur/ags/service/applications.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import RegularWindow from '../misc/RegularWindow.js';
import * as vars from '../variables.js';

const button = (type, label, action) => Widget.Button({
    class_name: `insbutton ${type}`,
    child: Widget.Label(`${label}`),
    on_clicked: () => Utils.exec(`${action}`)
});

export default () => RegularWindow({
    name: `installerp2`,
    title: 'Installerp2',
    class_name: 'installer', 
    child:
        Widget.Box({
            class_name: 'installerbox',
            vertical: true,
            children: [
                Widget.Label('Installer'),
                Widget.CenterBox({
                    center_widget: Widget.Label(`jebać czarnych czy coś`),
	            }),
	            Widget.CenterBox({
	                class_name: 'footer',
	                vertical: false,
	                start_widget: Widget.Icon({
	                    class_name: 'ibicon',
	                    icon: '/home/wilwe/.hyprland.conf/screens/icons/fluttershy.png',
	                }),
	                center_widget: Widget.Label({
	                    label: 'LambOS Beta1.7.10',
	                }),
	                end_widget: Widget.Box({
	                    children: [
	                        button('Cancel', 'Cancel', '/home/wilwe/.hyprland.conf/config/ags/js/installer/installscripts/cancel'),
	                        button('Continue', 'Continue', '/home/wilwe/.hyprland.conf/config/ags/js/installer/installscripts/continue'),
	                    ],
	                }),
	            }),
	        ],
	    }),
});
