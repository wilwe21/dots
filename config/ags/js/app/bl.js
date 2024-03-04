import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import Applications from 'resource:///com/github/Aylur/ags/service/applications.js';
import FontIcon from '../misc/FontIcon.js';
import PopupWindow from '../misc/PopupWindow.js';
import icons from '../icons.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import options from '../options.js';

const WB = ( ico, ex ) => Widget.Button({
    class_name: 'WButton',
    child: FontIcon(ico),
    onClicked: () => {
        Utils.subprocess(`${ex}`);
        App.closeWindow('Webapp');
    }
});

export default () => PopupWindow({
    name: 'Webapp',
    layer: "overlay",
    transition: 'slide_down',
    child: Widget.Box({
        vertical: true,
        class_name: 'WebLauncher',
        children: [
            Widget.Label({
                class_name: 'WBLabel',
                label: options.bl.Title.bind('value')
            }),
            Widget.Box({
                class_name: 'WLtop',
                setup: self => {
                const ts = () => {
                    self.children = [
                        WB(options.bl.Top.uno.Icon.value,options.bl.Top.uno.exec.value),
                        WB(options.bl.Top.dos.Icon.value,options.bl.Top.dos.exec.value),
                        WB(options.bl.Top.tres.Icon.value,options.bl.Top.tres.exec.value),
                    ]
                }
                self.hook(options.bl.Top.uno.Icon, () => ts())
                self.hook(options.bl.Top.dos.Icon, () => ts())
                self.hook(options.bl.Top.tres.Icon, () => ts())
                self.hook(options.bl.Top.uno.exec, () => ts())
                self.hook(options.bl.Top.dos.exec, () => ts())
                self.hook(options.bl.Top.tres.exec, () => ts())
                }
            }),
            Widget.Box({
                class_name: 'WLbot',
                setup: self => {
                const ts = () => {
                    self.children = [
                        WB(options.bl.Bot.uno.Icon.value,options.bl.Bot.uno.exec.value),
                        WB(options.bl.Bot.dos.Icon.value,options.bl.Bot.dos.exec.value),
                        WB(options.bl.Bot.tres.Icon.value,options.bl.Bot.tres.exec.value),
                    ]
                }
                self.hook(options.bl.Bot.uno.Icon, () => ts())
                self.hook(options.bl.Bot.dos.Icon, () => ts())
                self.hook(options.bl.Bot.tres.Icon, () => ts())
                self.hook(options.bl.Bot.uno.exec, () => ts())
                self.hook(options.bl.Bot.dos.exec, () => ts())
                self.hook(options.bl.Bot.tres.exec, () => ts())
                }
            }),
        ]
    })
});
