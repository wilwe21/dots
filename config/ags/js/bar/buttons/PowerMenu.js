import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import icons from '../../icons.js';
import PanelButton from '../PanelButton.js';

export default () => PanelButton({
    class_name: 'powermenu',
    cursor: 'pointer',
    content: Widget.Icon(icons.powermenu.shutdown),
    on_clicked: () => App.openWindow('powermenu'),
});
