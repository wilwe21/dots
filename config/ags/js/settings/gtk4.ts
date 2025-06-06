import options from '../options.ts';

export default function gtk4(red, green, yellow, blue, magenta, teal, orange, accent, accentfg, fg, bg) { return `@keyframes ripple {
  to {
    background-size: 1000% 1000%;
  }
}

@keyframes ripple-on-slider {
  to {
    background-size: auto, 1000% 1000%;
  }
}

@keyframes ripple-on-headerbar {
  from {
    background-image: radial-gradient(circle, ${accent} 0%, transparent 0%);
  }
  to {
    background-image: radial-gradient(circle, ${accent} 100%, transparent 100%);
  }
}

/***************
 * Base States *
 ***************/
.background {
  background-color: ${bg};
  color: ${fg};
}

#desktopwindow.background {
  background-color: transparent;
}

dnd {
  color: ${fg};
}

.normal-icons {
  -gtk-icon-size: 16px;
}

.large-icons {
  -gtk-icon-size: 32px;
}

.aboutdialog .large-icons {
  -gtk-icon-size: 128px;
}

spinner:disabled,
arrow:disabled,
scrollbar:disabled,
check:disabled,
radio:disabled,
treeview.expander:disabled {
  -gtk-icon-filter: opacity(0.5);
}

iconview, .view {
  background-color: ${bg};
  color: ${fg};
}

iconview:disabled, .view:disabled {
  color: alpha(${fg}, 0.5);
}

iconview:selected, .view:selected {
  background-color: ${accent};
  color: ${accentfg};
}

textview text {
  background-color: ${bg};
}

textview border {
  background-color: ${bg};
  color: alpha(${fg}, 0.7);
}

iconview:hover, iconview:selected {
  border-radius: 3px;
}

rubberband, .content-view rubberband, .content-view columnview.view > rubberband,
.content-view treeview.view > rubberband, .content-view .rubberband, columnview.view > rubberband, .content-view columnview.view > .rubberband,
treeview.view > rubberband,
.content-view treeview.view > .rubberband, gridview > rubberband, flowbox > rubberband {
  border: 1px solid ${accent};
  background-color: alpha(${accent}, 0.40);
}

flowbox > flowboxchild {
  padding: 4px;
  border-radius: 6px;
}

.content-view .tile:selected {
  background-color: transparent;
}

gridview > child {
  padding: 3px;
}

gridview > child:selected {
  outline-color: alpha(${accent}, 0.1);
}

gridview > child box {
  border-spacing: 8px;
  margin: 12px;
}

coverflow cover {
  color: ${fg};
  background-color: ${bg};
  border: 1px solid black;
}

label.separator {
  color: alpha(${fg}, 0.7);
}

label:disabled {
  opacity: 1;
  color: alpha(${fg}, 0.5);
}

headerbar label:disabled, tab label:disabled, button label:disabled {
  color: inherit;
  opacity: 1;
}

label.osd {
  border-radius: 6px;
  background-color: alpha(${bg}, 0.9);
  color: ${fg};
}

.dim-label, row.expander image.expander-row-arrow, row.property > box.header > box.title > .title, row label.subtitle {
  color: alpha(${fg}, 0.7);
  opacity: 1;
}

.accent {
  color: ${accent};
}

.success {
  color: ${green};
}

.warning {
  color: ${yellow};
}

.error {
  color: ${red};
}

.large-title {
  font-weight: 300;
  font-size: 24pt;
}

.title-1 {
  font-weight: 800;
  font-size: 20pt;
}

.title-2 {
  font-weight: 800;
  font-size: 15pt;
}

.title-3 {
  font-weight: 700;
  font-size: 15pt;
}

.title-4 {
  font-weight: 700;
  font-size: 13pt;
}

.heading {
  font-weight: 700;
  font-size: 11pt;
}

.body {
  font-weight: 400;
  font-size: 11pt;
}

.caption, row.property > box.header > box.title > .title {
  font-weight: 400;
  font-size: 9pt;
}

.caption-heading {
  font-weight: 700;
  font-size: 9pt;
}

window.assistant .sidebar {
  padding: 4px 0;
}

window.assistant .sidebar label {
  min-height: 36px;
  padding: 0 12px;
  color: alpha(${fg}, 0.5);
  font-weight: 500;
}

window.assistant .sidebar label.highlight {
  color: ${fg};
}

.osd .scale-popup > arrow,
.osd .scale-popup > contents, .osd popover > arrow,
.osd popover > contents, popover.touch-selection > arrow,
popover.touch-selection > contents, popover.magnifier > arrow,
popover.magnifier > contents, .osd {
  color: ${fg};
  background-color: ${bg};
  background-clip: padding-box;
  border-radius: 6px;
  border: none;
  box-shadow: 0 1px 2px 0 alpha(${fg}, 0.15), 0 3px 3px 0 apha(${fg}, 0.18), 0 3px 6px 0 apha(${fg}, 0.12), inset 0 1px apha(${bg}, 0.1);
}

.osd {
  padding: 6px;
  margin: 6px;
}

.osd.circular {
  border-radius: 9999px;
}

/*********************
 * Spinner Animation *
 *********************/
@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}

spinner {
  background: none;
  opacity: 0;
  -gtk-icon-source: -gtk-icontheme("process-working-symbolic");
}

spinner:checked {
  opacity: 1;
  animation: spin 1s linear infinite;
}

spinner:checked:disabled {
  opacity: 0.5;
}

/****************
 * Text Entries *
 ****************/

entry headerbar popover.background entry,
headerbar popover.background entry entry,
entry {
  min-height: 36px;
  padding: 0 8px;
  border-spacing: 6px;
  border-radius: 6px;
  caret-color: currentColor;
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), outline 300ms cubic-bezier(0, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0, 0, 0.2, 1);
  box-shadow: inset 0 0 0 2px transparent;
  background-color: alpha(${bg}, 0.08);
  color: alpha(${fg}, 0.7);
  outline: 0 solid transparent;
  outline-offset: 2px;
}


entry headerbar popover.background entry:focus-within,
headerbar popover.background entry entry:focus-within,
entry:focus-within {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), outline 300ms cubic-bezier(0, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0, 0, 0.2, 1);
  background-color: alpha(${bg}, 0.08);
  box-shadow: inset 0 0 0 2px transparent;
  color: ${fg};
  outline: 2px solid ${accent};
  outline-offset: -2px;
}


entry headerbar popover.background entry:drop(active),
headerbar popover.background entry entry:drop(active),
entry headerbar popover.background entry:hover:not(:focus-within),
headerbar popover.background entry entry:hover:not(:focus-within),
entry:drop(active),
entry:hover:not(:focus-within) {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0, 0, 0.2, 1);
  background-color: alpha(${bg}, 0.85);
  box-shadow: inset 0 0 0 2px ${accent};
  color: ${fg};
  outline: 0 solid ${accent};
  outline-offset: 2px;
}


entry headerbar popover.background entry:disabled,
headerbar popover.background entry entry:disabled,
entry:disabled {
  box-shadow: inset 0 0 0 2px transparent;
  background-color: alpha(${bg}, 0.08);
  color: alpha(${fg}, 0.5);
  outline: none;
}


entry headerbar popover.background entry > text > placeholder,
headerbar popover.background entry entry > text > placeholder,
entry > text > placeholder {
  color: alpha(${fg}, 0.5);
}


entry headerbar popover.background entry > text > block-cursor,
headerbar popover.background entry entry > text > block-cursor,
entry > text > block-cursor {
  color: alpha(${fg}, 0.04);
  background-color: ${bg};
}


entry headerbar popover.background entry.flat:focus-within,
headerbar popover.background entry entry.flat:focus-within,
entry headerbar popover.background entry.flat:disabled,
headerbar popover.background entry entry.flat:disabled,
entry headerbar popover.background entry.flat:hover,
headerbar popover.background entry entry.flat:hover,
entry headerbar popover.background entry.flat,
headerbar popover.background entry entry.flat,
entry.flat:focus-within,
entry.flat:disabled,
entry.flat:hover,
entry.flat {
  min-height: 0;
  padding: 2px;
  background-color: transparent;
  box-shadow: none;
  border-radius: 0;
  outline: none;
}


entry headerbar popover.background entry > image,
headerbar popover.background entry entry > image,
entry > image {
  color: alpha(${fg}, 0.7);
}


entry headerbar popover.background entry > image:hover,
headerbar popover.background entry entry > image:hover,
entry headerbar popover.background entry > image:active,
headerbar popover.background entry entry > image:active,
entry > image:hover,
entry > image:active {
  color: ${fg};
}


entry headerbar popover.background entry > image:disabled,
headerbar popover.background entry entry > image:disabled,
entry > image:disabled {
  color: alpha(${fg}, 0.5);
}


entry headerbar popover.background entry > image.left,
headerbar popover.background entry entry > image.left,
entry > image.left {
  margin: 0 6px 0 2px;
}


entry headerbar popover.background entry > image.right,
headerbar popover.background entry entry > image.right,
entry > image.right {
  margin: 0 2px 0 6px;
}


entry headerbar popover.background entry.password image.caps-lock-indicator,
headerbar popover.background entry entry.password image.caps-lock-indicator,
entry.password image.caps-lock-indicator {
  opacity: 0.35;
}


entry headerbar popover.background entry.error,
headerbar popover.background entry entry.error,
entry.error {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), outline 300ms cubic-bezier(0, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0, 0, 0.2, 1);
  box-shadow: inset 0 0 0 2px transparent;
  background-color: alpha(${red}, 0.1);
  color: alpha(${accentfg}, 0.75);
  outline: 0 solid transparent;
  outline-offset: 2px;
  outline: none;
}


entry headerbar popover.background entry.error:focus-within,
headerbar popover.background entry entry.error:focus-within,
entry.error:focus-within {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), outline 300ms cubic-bezier(0, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0, 0, 0.2, 1);
  background-color: alpha(${red}, 0.1);
  box-shadow: inset 0 0 0 2px transparent;
  color: ${accentfg};
  outline: 2px solid ${red};
  outline-offset: -2px;
  outline: none;
}


entry headerbar popover.background entry.error:drop(active),
headerbar popover.background entry entry.error:drop(active),
entry headerbar popover.background entry.error:hover:not(:focus-within),
headerbar popover.background entry entry.error:hover:not(:focus-within),
entry.error:drop(active),
entry.error:hover:not(:focus-within) {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0, 0, 0.2, 1);
  background-color: alpha(currentColor, 0.08);
  box-shadow: inset 0 0 0 2px alpha(currentColor, 0.08);
  color: ${red};
  outline: 0 solid transparent;
  outline-offset: 2px;
  outline: none;
}


entry headerbar popover.background entry.error:disabled,
headerbar popover.background entry entry.error:disabled,
entry.error:disabled {
  box-shadow: inset 0 0 0 2px transparent;
  background-color: alpha(${red}, 0.1);
  color: alpha(${accentfg}, 0.35);
  outline: none;
  outline: none;
}


entry headerbar popover.background entry.error > text > selection,
headerbar popover.background entry entry.error > text > selection,
entry.error > text > selection {
  background-color: alpha(${red}, 0.25);
  color: ${accentfg};
}


entry headerbar popover.background entry.error > text > cursor-handle > contents,
headerbar popover.background entry entry.error > text > cursor-handle > contents,
entry.error > text > cursor-handle > contents {
  background-color: currentColor;
}


entry headerbar popover.background entry.error > image,
headerbar popover.background entry entry.error > image,
entry.error > image {
  color: alpha(${red}, 0.75);
}


entry headerbar popover.background entry.error > image:hover,
headerbar popover.background entry entry.error > image:hover,
entry headerbar popover.background entry.error > image:active,
headerbar popover.background entry entry.error > image:active,
entry.error > image:hover,
entry.error > image:active {
  color: ${red};
}


entry headerbar popover.background entry.error > image:disabled,
headerbar popover.background entry entry.error > image:disabled,
entry.error > image:disabled {
  color: alpha(${red}, 0.35);
}


entry headerbar popover.background entry.warning,
headerbar popover.background entry entry.warning,
entry.warning {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), outline 300ms cubic-bezier(0, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0, 0, 0.2, 1);
  box-shadow: inset 0 0 0 2px transparent;
  background-color: alpha(${yellow}, 0.1);
  color: alpha(${yellow}, 0.75);
  outline: 0 solid transparent;
  outline-offset: 2px;
  outline: none;
}


entry headerbar popover.background entry.warning:focus-within,
headerbar popover.background entry entry.warning:focus-within,
entry.warning:focus-within {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), outline 300ms cubic-bezier(0, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0, 0, 0.2, 1);
  background-color: alpha(${yellow}, 0.1);
  box-shadow: inset 0 0 0 2px transparent;
  color: ${yellow};
  outline: 2px solid ${yellow};
  outline-offset: -2px;
  outline: none;
}


entry headerbar popover.background entry.warning:drop(active),
headerbar popover.background entry entry.warning:drop(active),
entry headerbar popover.background entry.warning:hover:not(:focus-within),
headerbar popover.background entry entry.warning:hover:not(:focus-within),
entry.warning:drop(active),
entry.warning:hover:not(:focus-within) {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0, 0, 0.2, 1);
  background-color: alpha(currentColor, 0.08);
  box-shadow: inset 0 0 0 2px alpha(currentColor, 0.08);
  color: ${yellow};
  outline: 0 solid transparent;
  outline-offset: 2px;
  outline: none;
}


entry headerbar popover.background entry.warning:disabled,
headerbar popover.background entry entry.warning:disabled,
entry.warning:disabled {
  box-shadow: inset 0 0 0 2px transparent;
  background-color: alpha(${yellow}, 0.1);
  color: alpha(${accentfg}, 0.35);
  outline: none;
  outline: none;
}


entry headerbar popover.background entry.warning > text > selection,
headerbar popover.background entry entry.warning > text > selection,
entry.warning > text > selection {
  background-color: alpha(${yellow}, 0.25);
  color: ${accentfg};
}


entry headerbar popover.background entry.warning > text > cursor-handle > contents,
headerbar popover.background entry entry.warning > text > cursor-handle > contents,
entry.warning > text > cursor-handle > contents {
  background-color: currentColor;
}


entry headerbar popover.background entry.warning > image,
headerbar popover.background entry entry.warning > image,
entry.warning > image {
  color: alpha(${yellow}, 0.75);
}


entry headerbar popover.background entry.warning > image:hover,
headerbar popover.background entry entry.warning > image:hover,
entry headerbar popover.background entry.warning > image:active,
headerbar popover.background entry entry.warning > image:active,
entry.warning > image:hover,
entry.warning > image:active {
  color: ${yellow};
}


entry headerbar popover.background entry.warning > image:disabled,
headerbar popover.background entry entry.warning > image:disabled,
entry.warning > image:disabled {
  color: alpha(${yellow}, 0.35);
}


entry headerbar popover.background entry.success,
headerbar popover.background entry entry.success,
entry.success {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), outline 300ms cubic-bezier(0, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0, 0, 0.2, 1);
  box-shadow: inset 0 0 0 2px transparent;
  background-color: alpha(${green}, 0.1);
  color: alpha(${accentfg}, 0.75);
  outline: 0 solid transparent;
  outline-offset: 2px;
  outline: none;
}


entry headerbar popover.background entry.success:focus-within,
headerbar popover.background entry entry.success:focus-within,
entry.success:focus-within {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), outline 300ms cubic-bezier(0, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0, 0, 0.2, 1);
  background-color: alpha(${green}, 0.1);
  box-shadow: inset 0 0 0 2px transparent;
  color: ${accentfg};
  outline: 2px solid ${green};
  outline-offset: -2px;
  outline: none;
}


entry headerbar popover.background entry.success:drop(active),
headerbar popover.background entry entry.success:drop(active),
entry headerbar popover.background entry.success:hover:not(:focus-within),
headerbar popover.background entry entry.success:hover:not(:focus-within),
entry.success:drop(active),
entry.success:hover:not(:focus-within) {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0, 0, 0.2, 1);
  background-color: alpha(currentColor, 0.08);
  box-shadow: inset 0 0 0 2px alpha(currentColor, 0.08);
  color: ${green};
  outline: 0 solid transparent;
  outline-offset: 2px;
  outline: none;
}


entry headerbar popover.background entry.success:disabled,
headerbar popover.background entry entry.success:disabled,
entry.success:disabled {
  box-shadow: inset 0 0 0 2px transparent;
  background-color: alpha(${green}, 0.1);
  color: alpha(${accentfg}, 0.35);
  outline: none;
  outline: none;
}


entry headerbar popover.background entry.success > text > selection,
headerbar popover.background entry entry.success > text > selection,
entry.success > text > selection {
  background-color: alpha(${green}, 0.25);
  color: ${accentfg};
}


entry headerbar popover.background entry.success > text > cursor-handle > contents,
headerbar popover.background entry entry.success > text > cursor-handle > contents,
entry.success > text > cursor-handle > contents {
  background-color: currentColor;
}


entry headerbar popover.background entry.success > image,
headerbar popover.background entry entry.success > image,
entry.success > image {
  color: alpha(${green}, 0.75);
}


entry headerbar popover.background entry.success > image:hover,
headerbar popover.background entry entry.success > image:hover,
entry headerbar popover.background entry.success > image:active,
headerbar popover.background entry entry.success > image:active,
entry.success > image:hover,
entry.success > image:active {
  color: ${green};
}


entry headerbar popover.background entry.success > image:disabled,
headerbar popover.background entry entry.success > image:disabled,
entry.success > image:disabled {
  color: alpha(${green}, 0.35);
}


entry > progress,
entry progress > trough > progress {
  margin: 0 -4px;
  border-bottom: 2px solid ${accent};
  background-color: transparent;
}

.osd entry > progress > trough > progress {
  border-color: alpha(${bg}, 0.04);
}


entry button.image-button {
  min-height: 24px;
  min-width: 24px;
  padding: 0;
}

treeview entry.flat, treeview entry {
  background-color: ${bg};
}

treeview entry.flat, treeview entry.flat:focus-within, treeview entry, treeview entry:focus-within {
  border-image: none;
  box-shadow: none;
}

.entry-tag {
  margin: 2px;
  border-radius: 9999px;
  box-shadow: none;
  background-color: alpha(${bg}, 0.12);
  color: ${fg};
}

.entry-tag:hover {
  background-image: image(alpha(currentColor, 0.08));
}

:dir(ltr) .entry-tag {
  margin-left: 4px;
  margin-right: 0;
  padding-left: 12px;
  padding-right: 8px;
}

:dir(rtl) .entry-tag {
  margin-left: 0;
  margin-right: 4px;
  padding-left: 8px;
  padding-right: 12px;
}

.entry-tag.button {
  box-shadow: none;
  background-color: transparent;
}

.entry-tag.button:not(:hover):not(:active) {
  color: alpha(${fg}, 0.7);
}

editablelabel > stack > text {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), outline 300ms cubic-bezier(0, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0, 0, 0.2, 1);
  box-shadow: inset 0 0 0 2px transparent;
  background-color: alpha(${bg}, 0.08);
  color: alpha(${fg}, 0.7);
  outline: 0 solid transparent;
  outline-offset: 2px;
}

/***********
 * Buttons *
 ***********/
@keyframes needs-attention {
  from {
    background-image: radial-gradient(farthest-side, ${accent} 0%, alpha(${accent}, 0) 0%);
  }
  to {
    background-image: radial-gradient(farthest-side, ${accent} 95%, alpha(${accent}, 0));
  }
}

infobar.warning > revealer > box button, infobar.warning:backdrop > revealer > box button, popover.touch-selection button, popover.magnifier button, headerbar.selection-mode button:not(.suggested-action):not(.destructive-action) {
  color: alpha(${fg}, 0.7);
}

infobar.warning > revealer > box button:focus, popover.touch-selection button:focus, popover.magnifier button:focus, headerbar.selection-mode button:focus:not(.suggested-action):not(.destructive-action), infobar.warning > revealer > box button:hover, popover.touch-selection button:hover, popover.magnifier button:hover, headerbar.selection-mode button:hover:not(.suggested-action):not(.destructive-action), infobar.warning > revealer > box button:active, popover.touch-selection button:active, popover.magnifier button:active, headerbar.selection-mode button:active:not(.suggested-action):not(.destructive-action), infobar.warning > revealer > box button:checked, popover.touch-selection button:checked, popover.magnifier button:checked, headerbar.selection-mode button:checked:not(.suggested-action):not(.destructive-action) {
  color: ${accentfg};
  background-color: ${accent};
}

infobar.warning > revealer > box button:disabled, popover.touch-selection button:disabled, popover.magnifier button:disabled, headerbar.selection-mode button:disabled:not(.suggested-action):not(.destructive-action) {
  color: alpha(${fg}, 0.32);
}

infobar.warning > revealer > box button:checked:disabled, popover.touch-selection button:checked:disabled, popover.magnifier button:checked:disabled, headerbar.selection-mode button:checked:disabled:not(.suggested-action):not(.destructive-action) {
  color: alpha(${fg}, 0.5);
}

row.spin spinbutton > button.image-button.up:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child, row.spin spinbutton > button.image-button.up:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(ltr):last-child, row.spin spinbutton > button.image-button.up:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(rtl):first-child,
row.spin spinbutton > button.image-button.down:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque),
row.spin spinbutton > button.image-button.down:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(ltr):last-child,
row.spin spinbutton > button.image-button.down:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(rtl):first-child, headerbar popover.background button:not(.suggested-action):not(.destructive-action):not(.flat), button {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), background-size 300ms cubic-bezier(0, 0, 0.2, 1), background-image 1200ms cubic-bezier(0, 0, 0.2, 1), outline 300ms cubic-bezier(0, 0, 0.2, 1);
  background-color: alpha(${bg}, 0.08);
  background-image: radial-gradient(circle, transparent 10%, transparent 0%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1000% 1000%;
  outline: 0 solid transparent;
  outline-offset: 2px;
  color: ${fg};
}

row.spin spinbutton > button.image-button.up:focus:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child, row.spin spinbutton > button.image-button.up:focus:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(ltr), row.spin spinbutton > button.image-button.up:focus:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(rtl):first-child,
row.spin spinbutton > button.image-button.down:focus:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque),
row.spin spinbutton > button.image-button.down:focus:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(ltr):last-child,
row.spin spinbutton > button.image-button.down:focus:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(rtl):first-child, headerbar popover.background button:focus:not(.suggested-action):not(.destructive-action):not(.flat), button:focus {
  outline: 2px solid alpha(${accent}, 0.35);
  outline-offset: 0;
}

row.spin spinbutton > button.image-button.up:hover:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child, row.spin spinbutton > button.image-button.up:hover:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(ltr), row.spin spinbutton > button.image-button.up:hover:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(rtl):first-child,
row.spin spinbutton > button.image-button.down:hover:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque),
row.spin spinbutton > button.image-button.down:hover:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(ltr):last-child,
row.spin spinbutton > button.image-button.down:hover:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(rtl):first-child, headerbar popover.background button:hover:not(.suggested-action):not(.destructive-action):not(.flat), button:hover {
  background-color: alpha(currentColor, 0.08);
  color: ${fg};
  outline: 0 solid transparent;
  -gtk-icon-filter: brightness(1.2);
}

row.spin spinbutton > button.keyboard-activating.image-button.up:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child, row.spin spinbutton > button.keyboard-activating.image-button.up:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(ltr), row.spin spinbutton > button.keyboard-activating.image-button.up:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(rtl):first-child,
row.spin spinbutton > button.keyboard-activating.image-button.down:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque),
row.spin spinbutton > button.keyboard-activating.image-button.down:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(ltr):last-child,
row.spin spinbutton > button.keyboard-activating.image-button.down:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(rtl):first-child, headerbar popover.background button.keyboard-activating:not(.suggested-action):not(.destructive-action):not(.flat), button.keyboard-activating, row.spin spinbutton > button.image-button.up:active:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child, row.spin spinbutton > button.image-button.up:active:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(ltr), row.spin spinbutton > button.image-button.up:active:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(rtl):first-child,
row.spin spinbutton > button.image-button.down:active:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque),
row.spin spinbutton > button.image-button.down:active:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(ltr):last-child,
row.spin spinbutton > button.image-button.down:active:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(rtl):first-child, headerbar popover.background button:active:not(.suggested-action):not(.destructive-action):not(.flat), button:active {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), background-size 0ms, background-image 0ms, border 0ms;
  animation: ripple 225ms cubic-bezier(0, 0, 0.2, 1) forwards;
  background-image: radial-gradient(circle, alpha(currentColor, 0.08) 10%, transparent 0%);
  background-size: 0% 0%;
  background-color: alpha(currentColor, 0.08);
  color: ${fg};
  outline: 0 solid transparent;
}

row.spin spinbutton > button.image-button.up:disabled:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child, row.spin spinbutton > button.image-button.up:disabled:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(ltr), row.spin spinbutton > button.image-button.up:disabled:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(rtl):first-child,
row.spin spinbutton > button.image-button.down:disabled:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque),
row.spin spinbutton > button.image-button.down:disabled:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(ltr):last-child,
row.spin spinbutton > button.image-button.down:disabled:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(rtl):first-child, headerbar popover.background button:disabled:not(.suggested-action):not(.destructive-action):not(.flat), button:disabled {
  background-color: alpha(${bg}, 0.04);
  color: alpha(${fg}, 0.5);
  outline-color: transparent;
}

row.spin spinbutton > button.image-button.up:checked:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child, row.spin spinbutton > button.image-button.up:checked:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(ltr), row.spin spinbutton > button.image-button.up:checked:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(rtl):first-child,
row.spin spinbutton > button.image-button.down:checked:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque),
row.spin spinbutton > button.image-button.down:checked:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(ltr):last-child,
row.spin spinbutton > button.image-button.down:checked:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(rtl):first-child, headerbar popover.background button:checked:not(.suggested-action):not(.destructive-action):not(.flat), button:checked {
  background-color: ${accent};
  color: ${accentfg};
}

row.spin spinbutton > button.image-button.up:checked:hover:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child,
row.spin spinbutton > button.image-button.down:checked:hover:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque),
row.spin spinbutton > button.image-button.down:checked:hover:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(ltr):last-child,
row.spin spinbutton > button.image-button.down:checked:hover:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(rtl):first-child, headerbar popover.background button:checked:hover:not(.suggested-action):not(.destructive-action):not(.flat), button:checked:hover {
  outline-color: transparent;
  background-color: ${accent};
  color: ${accentfg};
}

row.spin spinbutton > button.image-button.up:checked:disabled:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child,
row.spin spinbutton > button.image-button.down:checked:disabled:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque),
row.spin spinbutton > button.image-button.down:checked:disabled:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(ltr):last-child,
row.spin spinbutton > button.image-button.down:checked:disabled:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(rtl):first-child, headerbar popover.background button:checked:disabled:not(.suggested-action):not(.destructive-action):not(.flat), button:checked:disabled {
  outline-color: transparent;
  background-color: ${accent};
  color: ${accentfg};
}

placessidebar row button.sidebar-button, calendar > header > button, scrollbar button, notebook > header > tabs > arrow, popover modelbutton, spinbutton > button, splitbutton.flat > button,
splitbutton.flat > menubutton > button {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), border-image 225ms cubic-bezier(0, 0, 0.2, 1), background-size 300ms cubic-bezier(0, 0, 0.2, 1), background-image 1200ms cubic-bezier(0, 0, 0.2, 1), outline 300ms cubic-bezier(0, 0, 0.2, 1);
  background-image: radial-gradient(circle, transparent 10%, transparent 0%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1000% 1000%;
  background-color: transparent;
  outline: 0 solid transparent;
  outline-offset: 2px;
  color: alpha(${fg}, 0.7);
}

placessidebar row button.sidebar-button:focus:not(:hover):not(:active), calendar > header > button:focus:not(:hover):not(:active), scrollbar button:focus:not(:hover):not(:active), notebook > header > tabs > arrow:focus:not(:hover):not(:active), popover modelbutton:focus:not(:hover):not(:active), spinbutton > button:focus:not(:hover):not(:active), splitbutton.flat > button:focus:not(:hover):not(:active),
splitbutton.flat > menubutton > button:focus:not(:hover):not(:active) {
  color: ${fg};
  outline: 2px solid alpha(${bg}, 0.04);
  outline-offset: -2px;
}

placessidebar row button.sidebar-button:hover, calendar > header > button:hover, scrollbar button:hover, notebook > header > tabs > arrow:hover, popover modelbutton:hover, spinbutton > button:hover, splitbutton.flat > button:hover,
splitbutton.flat > menubutton > button:hover {
  background-color: alpha(currentColor, 0.08);
  color: ${fg};
}

placessidebar row button.sidebar-button:active, calendar > header > button:active, scrollbar button:active, notebook > header > tabs > arrow:active, popover modelbutton:active, spinbutton > button:active, splitbutton.flat > button:active,
splitbutton.flat > menubutton > button:active {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), border-image 225ms cubic-bezier(0, 0, 0.2, 1), background-size 0ms, background-image 0ms;
  animation: ripple 225ms cubic-bezier(0, 0, 0.2, 1) forwards;
  background-image: radial-gradient(circle, alpha(${accent}, 0.85) 10%, transparent 0%);
  background-size: 0% 0%;
  background-color: ${accent};
  color: ${accentfg};
}

placessidebar row button.sidebar-button:disabled, calendar > header > button:disabled, scrollbar button:disabled, notebook > header > tabs > arrow:disabled, popover modelbutton:disabled, spinbutton > button:disabled, splitbutton.flat > button:disabled,
splitbutton.flat > menubutton > button:disabled {
  color: alpha(${fg}, 0.32);
  background-color: transparent;
}

filechooser #pathbarbox > stack > box > button, window.messagedialog .response-area button, window.dialog.message .dialog-action-area > button, .app-notification button, headerbar button:not(.suggested-action):not(.destructive-action), .toolbar button, dropdown > .linked:not(.vertical) > button:not(:only-child),
combobox > .linked:not(.vertical) > button:not(:only-child), splitbutton.suggested-action > button, splitbutton.suggested-action > menubutton > button, splitbutton.destructive-action > button, splitbutton.destructive-action > menubutton > button, splitbutton.opaque > button, splitbutton.opaque > menubutton > button, menubutton.suggested-action > button, menubutton.destructive-action > button, menubutton.opaque > button, menubutton.flat > button, button.flat {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), border-image 225ms cubic-bezier(0, 0, 0.2, 1), background-size 300ms cubic-bezier(0, 0, 0.2, 1), background-image 1200ms cubic-bezier(0, 0, 0.2, 1), outline 300ms cubic-bezier(0, 0, 0.2, 1);
  background-image: radial-gradient(circle, transparent 10%, transparent 0%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1000% 1000%;
  background-color: transparent;
  outline: 0 solid transparent;
  outline-offset: 2px;
  color: alpha(${fg}, 0.7);
}

filechooser #pathbarbox > stack > box > button:focus:not(:hover):not(:active), window.messagedialog .response-area button:focus:not(:hover):not(:active), window.dialog.message .dialog-action-area > button:focus:not(:hover):not(:active), .app-notification button:focus:not(:hover):not(:active), headerbar button:focus:not(:hover):not(:active):not(.suggested-action):not(.destructive-action), .toolbar button:focus:not(:hover):not(:active), dropdown > .linked:not(.vertical) > button:focus:not(:hover):not(:active):not(:only-child),
combobox > .linked:not(.vertical) > button:focus:not(:hover):not(:active):not(:only-child), splitbutton.suggested-action > button:focus:not(:hover):not(:active), splitbutton.suggested-action > menubutton > button:focus:not(:hover):not(:active), splitbutton.destructive-action > button:focus:not(:hover):not(:active), splitbutton.destructive-action > menubutton > button:focus:not(:hover):not(:active), splitbutton.opaque > button:focus:not(:hover):not(:active), splitbutton.opaque > menubutton > button:focus:not(:hover):not(:active), menubutton.suggested-action > button:focus:not(:hover):not(:active), menubutton.destructive-action > button:focus:not(:hover):not(:active), menubutton.opaque > button:focus:not(:hover):not(:active), menubutton.flat > button:focus:not(:hover):not(:active), button.flat:focus:not(:hover):not(:active) {
  color: ${fg};
  outline: 2px solid alpha(${accent}, 0.5);
  outline-offset: -2px;
}

filechooser #pathbarbox > stack > box > button:hover, window.messagedialog .response-area button:hover, window.dialog.message .dialog-action-area > button:hover, .app-notification button:hover, headerbar button:hover:not(.suggested-action):not(.destructive-action), .toolbar button:hover, dropdown > .linked:not(.vertical) > button:hover:not(:only-child),
combobox > .linked:not(.vertical) > button:hover:not(:only-child), splitbutton.suggested-action > button:hover, splitbutton.suggested-action > menubutton > button:hover, splitbutton.destructive-action > button:hover, splitbutton.destructive-action > menubutton > button:hover, splitbutton.opaque > button:hover, splitbutton.opaque > menubutton > button:hover, menubutton.suggested-action > button:hover, menubutton.destructive-action > button:hover, menubutton.opaque > button:hover, menubutton.flat > button:hover, button.flat:hover {
  background-color: alpha(currentColor, 0.08);
  color: ${accentfg};
}

filechooser #pathbarbox > stack > box > button:active, window.messagedialog .response-area button:active, window.dialog.message .dialog-action-area > button:active, .app-notification button:active, headerbar button:active:not(.suggested-action):not(.destructive-action), .toolbar button:active, dropdown > .linked:not(.vertical) > button:active:not(:only-child),
combobox > .linked:not(.vertical) > button:active:not(:only-child), splitbutton.suggested-action > button:active, splitbutton.suggested-action > menubutton > button:active, splitbutton.destructive-action > button:active, splitbutton.destructive-action > menubutton > button:active, splitbutton.opaque > button:active, splitbutton.opaque > menubutton > button:active, menubutton.suggested-action > button:active, menubutton.destructive-action > button:active, menubutton.opaque > button:active, menubutton.flat > button:active, button.flat:active {
  color: ${accentfg};
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), border-image 225ms cubic-bezier(0, 0, 0.2, 1), background-size 0ms, background-image 0ms;
  animation: ripple 225ms cubic-bezier(0, 0, 0.2, 1) forwards;
  background-image: radial-gradient(circle, alpha(currentColor, 0.08) 10%, transparent 0%);
  background-size: 0% 0%;
  background-color: alpha(${accent}, 0.85);
}

filechooser #pathbarbox > stack > box > button:disabled, window.messagedialog .response-area button:disabled, window.dialog.message .dialog-action-area > button:disabled, .app-notification button:disabled, headerbar button:disabled:not(.suggested-action):not(.destructive-action), .toolbar button:disabled, dropdown > .linked:not(.vertical) > button:disabled:not(:only-child),
combobox > .linked:not(.vertical) > button:disabled:not(:only-child), splitbutton.suggested-action > button:disabled, splitbutton.suggested-action > menubutton > button:disabled, splitbutton.destructive-action > button:disabled, splitbutton.destructive-action > menubutton > button:disabled, splitbutton.opaque > button:disabled, splitbutton.opaque > menubutton > button:disabled, menubutton.suggested-action > button:disabled, menubutton.destructive-action > button:disabled, menubutton.opaque > button:disabled, menubutton.flat > button:disabled, button.flat:disabled {
  color: alpha(${fg}, 0.32);
  background-color: transparent;
}

filechooser #pathbarbox > stack > box > button:checked, window.messagedialog .response-area button:checked, window.dialog.message .dialog-action-area > button:checked, .app-notification button:checked, headerbar button:checked:not(.suggested-action):not(.destructive-action), .toolbar button:checked, dropdown > .linked:not(.vertical) > button:checked:not(:only-child),
combobox > .linked:not(.vertical) > button:checked:not(:only-child), splitbutton.suggested-action > button:checked, splitbutton.suggested-action > menubutton > button:checked, splitbutton.destructive-action > button:checked, splitbutton.destructive-action > menubutton > button:checked, splitbutton.opaque > button:checked, splitbutton.opaque > menubutton > button:checked, menubutton.suggested-action > button:checked, menubutton.destructive-action > button:checked, menubutton.opaque > button:checked, menubutton.flat > button:checked, button.flat:checked {
  color: ${accentfg};
  background-color: alpha(${accent}, 0.85);
}

filechooser #pathbarbox > stack > box > button:checked:disabled, window.messagedialog .response-area button:checked:disabled, window.dialog.message .dialog-action-area > button:checked:disabled, .app-notification button:checked:disabled, headerbar button:checked:disabled:not(.suggested-action):not(.destructive-action), .toolbar button:checked:disabled, dropdown > .linked:not(.vertical) > button:checked:disabled:not(:only-child), combobox > .linked:not(.vertical) > button:checked:disabled:not(:only-child), splitbutton.suggested-action > button:checked:disabled, splitbutton.suggested-action > menubutton > button:checked:disabled, splitbutton.destructive-action > button:checked:disabled, splitbutton.destructive-action > menubutton > button:checked:disabled, splitbutton.opaque > button:checked:disabled, splitbutton.opaque > menubutton > button:checked:disabled, menubutton.suggested-action > button:checked:disabled, menubutton.destructive-action > button:checked:disabled, menubutton.opaque > button:checked:disabled, menubutton.flat > button:checked:disabled, button.flat:checked:disabled {
  background-color: alpha(currentColor, 0.1);
  color: ${accentfg};
}

button.opaque {
  box-shadow: none;
}

.osd button.opaque:focus:focus-visible {
  outline-color: alpha(${bg}, 0.15);
}

button.opaque:hover {
  background-image: image(alpha(currentColor, 0.1));
}

button.keyboard-activating.opaque, button.opaque:active {
  background-image: image(alpha(${fg}, 0.2));
}

button.opaque:checked {
  background-image: image(alpha(${fg}, 0.15));
}

button.opaque:checked:hover {
  background-image: image(alpha(${fg}, 1));
}

button.opaque:checked.keyboard-activating, button.opaque:checked:active {
  background-image: image(alpha(${fg}, 0.3));
}
button:active{
  color: ${accentfg};
  background-color: ${accent};
}

.nautilus-window .floating-bar button, placessidebar row button.sidebar-button, notebook > header > tabs > tab button.flat, popover.menu box.circular-buttons button.circular.image-button.model, spinbutton > button {
  min-height: 24px;
  min-width: 24px;
  padding: 0;
  border-radius: 9999px;
}

button {
  min-height: 24px;
  min-width: 16px;
  padding: 6px 10px;
  border-radius: 6px;
  font-weight: 500;
}

button:drop(active) {
  background-color: alpha(currentColor, 0.08);
  color: ${accentfg};
  outline: 0 solid transparent;
}

button separator {
  margin: 4px 1px;
}

button.opaque {
  background-color: ${bg};
  color: ${fg};
}

button.text-button {
  min-width: 32px;
  padding-left: 16px;
  padding-right: 16px;
}

button.image-button {
  min-width: 24px;
  padding: 6px;
}

button.text-button.image-button, button.image-text-button {
  min-width: 24px;
  padding: 6px;
  border-radius: 6px;
}

button.text-button.image-button > box,
button.text-button.image-button > box > box, button.image-text-button > box,
button.image-text-button > box > box {
  border-spacing: 4px;
}

button.text-button.image-button > box > label,
button.text-button.image-button > box > box > label, button.image-text-button > box > label,
button.image-text-button > box > box > label {
  padding-left: 2px;
  padding-right: 2px;
}

button.text-button.image-button label:first-child, button.image-text-button label:first-child {
  margin-left: 10px;
}

button.text-button.image-button label:last-child, button.image-text-button label:last-child {
  margin-right: 10px;
}

button.text-button.image-button.flat label:first-child, button.image-text-button.flat label:first-child {
  margin-left: 6px;
}

button.text-button.image-button.flat label:last-child, button.image-text-button.flat label:last-child {
  margin-right: 6px;
}

button.text-button.image-button image:not(:only-child), button.image-text-button image:not(:only-child) {
  margin: 0 4px;
}

button.arrow-button {
  padding-left: 9px;
  padding-right: 9px;
}

button.arrow-button > box {
  border-spacing: 4px;
}

button.arrow-button.text-button {
  padding-left: 16px;
  padding-right: 16px;
}

button.arrow-button.text-button > box {
  border-spacing: 6px;
}

menubutton.pill > button, button.pill {
  padding: 9px 30px;
  border-radius: 9999px;
}

button.card {
  background-color: alpha(${bg}, 0.04);
  background-clip: padding-box;
  font-weight: inherit;
  border: 1px solid alpha(${bg}, 0.12);
  background-clip: border-box;
}

button.card:hover {
  background-image: none;
  background-color: alpha(currentColor, 0.08);
  color: ${fg};
  outline: 0 solid transparent;
}

button.card.keyboard-activating, button.card:active {
  background-image: none;
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), background-size 0ms, background-image 0ms, border 0ms;
  animation: ripple 225ms cubic-bezier(0, 0, 0.2, 1) forwards;
  background-image: radial-gradient(circle, alpha(currentColor, 0.08) 10%, transparent 0%);
  background-size: 0% 0%;
  background-color: alpha(currentColor, 0.08);
  color: ${fg};
  outline: 0 solid transparent;
}

button.card:checked {
  background-image: none;
  background-color: ${accent};
  color: alpha(${accentfg}, 0.87);
  border-color: ${accent};
}

button.card:checked:hover {
  background-image: none;
  outline-color: transparent;
  background-color: ${accent};
  color: alpha(${accentfg}, 0.87);
}

button.card:checked:disabled {
  outline-color: transparent;
  background-color: alpha(${accent}, 0.35);
  color: alpha(${accentfg}, 0.38);
}

button.card:checked.keyboard-activating, button.card:checked:active {
  background-image: none;
}

button.card:checked.has-open-popup {
  background-image: none;
}

button.card:drop(active) {
  color: ${orange};
  box-shadow: inset 0 0 0 1px ${orange};
}

.linked:not(.vertical) > button:focus, .linked.vertical > button:focus {
  box-shadow: none;
  outline: none;
}

.linked:not(.vertical) > button.flat:not(:only-child), .linked.vertical > button.flat:not(:only-child) {
  background-color: alpha(currentColor, 0.05);
}

.linked:not(.vertical) > button.flat:focus, .linked.vertical > button.flat:focus {
  box-shadow: none;
  outline: none;
}

.linked:not(.vertical) > menubutton > button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

button.osd {
  min-height: 24px;
  min-width: 24px;
  padding: 6px;
  box-shadow: none;
  background-color: alpha(${bg}, 0.35);
  color: ${fg};
  margin: 0;
}

button.osd > image {
  padding: 0;
}

button.osd.remove-button {
  padding: 0;
}

button.osd:focus {
  outline-color: transparent;
}

button.osd:hover {
  background-color: alpha(${bg}, 0.45);
  color: ${fg};
}

button.osd:active {
  background-color: alpha(${bg}, 0.65);
  color: ${fg};
}

button.osd:disabled {
  background-color: alpha(${bg}, 0.15);
  color: alpha(${fg}, 0.35);
}

button.suggested-action {
  background-color: ${accent};
  color: alpha(${accentfg}, 0.87);
  box-shadow: none;
}

button.suggested-action:disabled {
  background-color: alpha(${bg}, 0.04);
  color: alpha(${fg}, 0.5);
  outline-color: transparent;
}

button.suggested-action:hover {
  box-shadow: inset 0 0 0 9999px transparent, 0 2px 2.4px -1px alpha(${accent}, 0.2), 0 4px 3px 0 apha(${accent}, 0.14), 0 1px 6px 0 apha(${accent}, 0.12);
}

button.suggested-action:checked {
  background-color: alpha(${accent}, 0.961);
}

button.suggested-action:checked:hover {
  box-shadow: inset 0 0 0 9999px transparent, 0 3px 3px -3px alpha(${accent}, 0.3), 0 2px 3px -1px apha(${accent}, 0.24), 0 2px 5px 0 apha(${accent}, 0.12);
}

button.suggested-action:focus {
  box-shadow: 0 0 0 2px alpha(${accent}, 0.35);
}

button.suggested-action.flat {
  background-color: transparent;
  color: ${accent};
}

button.suggested-action.flat:disabled {
  color: alpha(${fg}, 0.32);
  background-color: transparent;
}

button.suggested-action.flat:checked {
  background-color: alpha(${accent}, 0.3);
}

button.destructive-action {
  background-color: ${red};
  color: ${fg};
  box-shadow: none;
}

button.destructive-action:disabled {
  background-color: alpha(${bg}, 0.04);
  color: alpha(${fg}, 0.5);
  outline-color: transparent;
}

button.destructive-action:hover {
  box-shadow: inset 0 0 0 9999px transparent, 0 2px 2.4px -1px alpha(${red}, 0.2), 0 4px 3px 0 apha(${red}, 0.14), 0 1px 6px 0 apha(${red}, 0.12);
}

button.destructive-action:checked {
  background-color: ${red};
}

button.destructive-action:checked:hover {
  box-shadow: inset 0 0 0 9999px transparent, 0 3px 3px -3px alpha(${red}, 0.3), 0 2px 3px -1px apha(${red}, 0.24), 0 2px 5px 0 apha(${red}, 0.12);
}

button.destructive-action:focus {
  box-shadow: 0 0 0 2px alpha(${red}, 0.35);
}

button.destructive-action.flat {
  background-color: transparent;
  color: ${red};
}

button.destructive-action.flat:disabled {
  color: alpha(${fg}, 0.32);
  background-color: transparent;
}

button.destructive-action.flat:checked {
  background-color: alpha(${red}, 0.3);
}

stackswitcher > button > label {
  margin: 0 -6px;
  padding: 0 6px;
}

stackswitcher > button > image {
  margin: -3px -6px;
  padding: 3px 6px;
}

stackswitcher > button.needs-attention:checked > label,
stackswitcher > button.needs-attention:checked > image {
  animation: none;
  background-image: none;
}

button.font > box, button.file > box {
  border-spacing: 6px;
}

button.font > box > box > label, button.file > box > box > label {
  font-weight: bold;
}

windowcontrols > button:not(.suggested-action):not(.destructive-action), filechooser #pathbarbox > stack > box > button, row.spin spinbutton > button.image-button.up:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child, row.spin spinbutton > button.image-button.up:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(ltr):last-child, row.spin spinbutton > button.image-button.up:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(rtl):first-child,
row.spin spinbutton > button.image-button.down:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque),
row.spin spinbutton > button.image-button.down:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(ltr):last-child,
row.spin spinbutton > button.image-button.down:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(rtl):first-child, headerbar button.star, menubutton.circular > button, button.close, button.circular {
  border-radius: 9999px;
}

windowcontrols > button:not(.suggested-action):not(.destructive-action) label, filechooser #pathbarbox > stack > box > button label, row.spin spinbutton > button.image-button.up:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child label, row.spin spinbutton > button.image-button.up:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(ltr):last-child label, row.spin spinbutton > button.image-button.up:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(rtl):first-child label,
row.spin spinbutton > button.image-button.down:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque) label,
row.spin spinbutton > button.image-button.down:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(ltr):last-child label,
row.spin spinbutton > button.image-button.down:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(rtl):first-child label, headerbar button.star label, menubutton.circular > button label, button.close label, button.circular label {
  padding: 0;
}

menubutton.osd {
  background: none;
  color: inherit;
}

menubutton.suggested-action {
  background-color: ${accent};
  color: ${accentfg};
}

menubutton.destructive-action {
  background-color: ${red};
  color: ${fg};
}

menubutton.opaque {
  background-color: ${bg};
  color: ${fg};
}

menubutton.suggested-action, menubutton.destructive-action, menubutton.opaque {
  border-radius: 6px;
}

menubutton.suggested-action.circular, menubutton.suggested-action.pill, menubutton.destructive-action.circular, menubutton.destructive-action.pill, menubutton.opaque.circular, menubutton.opaque.pill {
  border-radius: 9999px;
}

menubutton.suggested-action > button, menubutton.suggested-action > button:checked, menubutton.destructive-action > button, menubutton.destructive-action > button:checked, menubutton.opaque > button, menubutton.opaque > button:checked {
  background-color: transparent;
  color: inherit;
}

menubutton.image-button > button {
  min-width: 24px;
  padding-left: 6px;
  padding-right: 6px;
}

menubutton arrow {
  min-height: 16px;
  min-width: 16px;
}

menubutton arrow.none {
  -gtk-icon-source: -gtk-icontheme("open-menu-symbolic");
}

menubutton arrow.down {
  -gtk-icon-source: -gtk-icontheme("pan-down-symbolic");
}

menubutton arrow.up {
  -gtk-icon-source: -gtk-icontheme("pan-up-symbolic");
}

menubutton arrow.left {
  -gtk-icon-source: -gtk-icontheme("pan-start-symbolic");
}

menubutton arrow.right {
  -gtk-icon-source: -gtk-icontheme("pan-end-symbolic");
}

splitbutton {
  border-radius: 6px;
}

splitbutton, splitbutton > separator {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1);
  transition-property: background;
}

splitbutton > separator {
  margin-top: 6px;
  margin-bottom: 6px;
  background: none;
}

splitbutton > menubutton > button {
  padding: 6px 10px;
}

splitbutton.image-button > button {
  min-width: 24px;
  padding-left: 6px;
  padding-right: 6px;
}

splitbutton.text-button.image-button > button, splitbutton.image-text-button > button {
  padding-left: 9px;
  padding-right: 9px;
}

splitbutton.text-button.image-button > button > box, splitbutton.image-text-button > button > box {
  border-spacing: 6px;
}

splitbutton > button:dir(ltr),
splitbutton > menubutton > button:dir(rtl) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-right: -1px;
}

splitbutton > button:dir(rtl),
splitbutton > menubutton > button:dir(ltr) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-left: -1px;
}

splitbutton.flat > separator {
  background: alpha(${bg}, 0.12);
}

splitbutton.flat:hover, splitbutton.flat:active, splitbutton.flat:checked {
  background: alpha(currentColor, 0.07);
}

splitbutton.flat:hover > separator, splitbutton.flat:active > separator, splitbutton.flat:checked > separator {
  background: none;
}

splitbutton.flat:focus-within:focus-visible > separator {
  background: none;
}

splitbutton.flat > button,
splitbutton.flat > menubutton > button {
  border-radius: 6px;
}

splitbutton.suggested-action {
  background-color: ${accent};
  color: ${accentfg};
}

splitbutton.destructive-action {
  background-color: ${red};
  color: ${fg};
}

splitbutton.opaque {
  background-color: ${bg};
  color: ${fg};
}

splitbutton.suggested-action > button, splitbutton.suggested-action > button:checked, splitbutton.suggested-action > menubutton > button, splitbutton.suggested-action > menubutton > button:checked, splitbutton.destructive-action > button, splitbutton.destructive-action > button:checked, splitbutton.destructive-action > menubutton > button, splitbutton.destructive-action > menubutton > button:checked, splitbutton.opaque > button, splitbutton.opaque > button:checked, splitbutton.opaque > menubutton > button, splitbutton.opaque > menubutton > button:checked {
  color: inherit;
  background-color: transparent;
}

splitbutton.suggested-action > menubutton > button:dir(ltr), splitbutton.destructive-action > menubutton > button:dir(ltr), splitbutton.opaque > menubutton > button:dir(ltr) {
  box-shadow: inset 1px 0 alpha(${bg}, 0.12);
}

splitbutton.suggested-action > menubutton > button:dir(rtl), splitbutton.destructive-action > menubutton > button:dir(rtl), splitbutton.opaque > menubutton > button:dir(rtl) {
  box-shadow: inset -1px 0 alpha(${bg}, 0.12);
}

splitbutton > menubutton > button > arrow.none {
  -gtk-icon-source: -gtk-icontheme("pan-down-symbolic");
}

buttoncontent {
  border-spacing: 6px;
}

buttoncontent > label {
  font-weight: bold;
}

buttoncontent > label:dir(ltr) {
  padding-right: 2px;
}

buttoncontent > label:dir(rtl) {
  padding-left: 2px;
}

.arrow-button > box > buttoncontent > label:dir(ltr), splitbutton > button > buttoncontent > label:dir(ltr) {
  padding-right: 0;
}

.arrow-button > box > buttoncontent > label:dir(rtl), splitbutton > button > buttoncontent > label:dir(rtl) {
  padding-left: 0;
}

stacksidebar row.needs-attention > label, stackswitcher > button.needs-attention > label,
stackswitcher > button.needs-attention > image {
  animation: needs-attention 225ms cubic-bezier(0, 0, 0.2, 1) forwards;
  background-repeat: no-repeat;
  background-position: right 3px;
  background-size: 6px 6px;
}

stacksidebar row.needs-attention > label:dir(rtl), stackswitcher > button.needs-attention > label:dir(rtl),
stackswitcher > button.needs-attention > image:dir(rtl) {
  background-position: left 3px;
}

.linked:not(.vertical) > entry, .linked:not(.vertical) > button, .linked:not(.vertical) > button.image-button {
  border-radius: 0;
}

.linked:not(.vertical) > entry:first-child, .linked:not(.vertical) > button:first-child {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

.linked:not(.vertical) > entry:last-child, .linked:not(.vertical) > button:last-child {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

.linked:not(.vertical) > entry:only-child, .linked:not(.vertical) > button:only-child {
  border-radius: 6px;
}

.linked.vertical > entry, .linked.vertical > button, .linked.vertical > button.image-button {
  border-radius: 0;
}

.linked.vertical > entry:first-child, .linked.vertical > button:first-child {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.linked.vertical > entry:last-child, .linked.vertical > button:last-child {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.linked.vertical > entry:only-child, .linked.vertical > button:only-child {
  border-radius: 6px;
}

button.color {
  min-height: 24px;
  min-width: 24px;
  padding: 6px;
}


list > row button.image-button:not(.flat) {
  background-color: transparent;
  box-shadow: none;
  border: none;
}


list > row button.image-button:not(.flat):hover {
  background-color: alpha(currentColor, 0.08);
  color: ${fg};
  outline: 0 solid transparent;
}


list > row button.image-button:not(.flat):active,
list > row button.image-button:not(.flat):checked {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), background-size 0ms, background-image 0ms, border 0ms;
  animation: ripple 225ms cubic-bezier(0, 0, 0.2, 1) forwards;
  background-image: radial-gradient(circle, alpha(${accent}, 0.08) 10%, transparent 0%);
  background-size: 0% 0%;
  background-color: alpha(${accent}, 0.08);
  color: ${accentfg};
  outline: 0 solid transparent;
}


list > row button.image-button:not(.flat).suggested-action {
  background-color: ${accent};
  color: alpha(${accentfg}, 0.87);
}


list > row button.image-button:not(.flat).destructive-action {
  background-color: ${red};
  color: ${fg};
}

/*********
 * Links *
 *********/
link {
  color: ${teal};
}

link:visited {
  color: ${accent};
}

button.link:link, button.link:link:focus, button.link:link:hover, button.link:link:active {
  color: ${teal};
}

button.link:visited, button.link:visited:focus, button.link:visited:hover, button.link:visited:active {
  color: ${accent};
}

button.link > label {
  text-decoration-line: underline;
}

/*****************
 * GtkSpinButton *
 *****************/
spinbutton {
  border-radius: 6px;
  padding: 0;
  border-spacing: 0;
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), outline 300ms cubic-bezier(0, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0, 0, 0.2, 1);
  box-shadow: inset 0 0 0 2px transparent;
  background-color: alpha(${bg}, 0.08);
  color: alpha(${fg}, 0.7);
  outline: 0 solid transparent;
  outline-offset: 2px;
}

spinbutton:focus-within {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), outline 300ms cubic-bezier(0, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0, 0, 0.2, 1);
  background-color: alpha(${bg}, 0.08);
  box-shadow: inset 0 0 0 2px transparent;
  color: ${fg};
  outline: 2px solid ${accent};
  outline-offset: -2px;
}

spinbutton:disabled {
  box-shadow: inset 0 0 0 2px transparent;
  background-color: alpha(${bg}, 0.08);
  color: alpha(${fg}, 0.5);
  outline: none;
}

spinbutton > text {
  border-image: none;
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  margin: 0;
}

spinbutton > button {
  border: none;
}

spinbutton > button:focus:not(:hover):not(:active):not(:disabled) {
  box-shadow: none;
}

spinbutton:not(.vertical) > text {
  min-width: 32px;
  padding-left: 12px;
}

spinbutton:not(.vertical) > button {
  padding: 0;
  margin: 6px;
}

spinbutton:not(.vertical) > button.up:dir(ltr), spinbutton:not(.vertical) > button.down:dir(rtl) {
  margin-left: 3px;
}

spinbutton:not(.vertical) > button.up:dir(rtl), spinbutton:not(.vertical) > button.down:dir(ltr) {
  margin-right: 3px;
}

cell.activatable spinbutton:not(.vertical) {
  margin: 3px 0;
}

cell.activatable spinbutton:not(.vertical) > button {
  margin: 0;
  padding: 0;
  min-height: 24px;
  border-radius: 0;
}

cell.activatable spinbutton:not(.vertical) > button:last-child {
  border-radius: 0 6px 6px 0;
}

cell.activatable spinbutton:not(.vertical) > button.up:dir(ltr), cell.activatable spinbutton:not(.vertical) > button.down:dir(rtl) {
  margin-left: 0;
}

cell.activatable spinbutton:not(.vertical) > button.up:dir(rtl), cell.activatable spinbutton:not(.vertical) > button.down:dir(ltr) {
  margin-right: 0;
}

spinbutton.vertical > text {
  min-height: 36px;
  min-width: 42px;
  padding: 0;
}

spinbutton.vertical > button {
  padding: 0;
  margin: 6px 9px;
}

/**************
 * ComboBoxes *
 **************/
dropdown > button > box {
  border-spacing: 6px;
}

dropdown arrow,
combobox arrow {
  -gtk-icon-source: -gtk-icontheme("pan-down-symbolic");
  min-height: 16px;
  min-width: 16px;
}

dropdown > popover.menu > contents modelbutton,
combobox > popover.menu > contents modelbutton {
  padding-left: 9px;
  padding-right: 9px;
}

dropdown button.combo cellview:dir(ltr),
combobox button.combo cellview:dir(ltr) {
  margin-left: -2px;
}

dropdown button.combo cellview:dir(rtl),
combobox button.combo cellview:dir(rtl) {
  margin-right: -2px;
}

dropdown popover,
combobox popover {
  margin-top: 4px;
  padding: 0;
}

dropdown popover listview,
combobox popover listview {
  margin: 0;
}

dropdown popover listview > row,
combobox popover listview > row {
  padding: 6px;
}

dropdown popover listview > row:selected,
combobox popover listview > row:selected {
  color: ${accentfg};
  background-color: ${accent};
}

dropdown popover .dropdown-searchbar,
combobox popover .dropdown-searchbar {
  padding: 6px;
}

dropdown.linked button:nth-child(2):dir(ltr),
combobox.linked button:nth-child(2):dir(ltr) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

dropdown.linked button:nth-child(2):dir(rtl),
combobox.linked button:nth-child(2):dir(rtl) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

dropdown > .linked:not(.vertical) > entry:not(:only-child),
combobox > .linked:not(.vertical) > entry:not(:only-child) {
  border-radius: 6px;
}

dropdown > .linked:not(.vertical) > entry:not(:only-child):first-child,
combobox > .linked:not(.vertical) > entry:not(:only-child):first-child {
  margin-right: -36px;
  padding-right: 36px;
}

dropdown > .linked:not(.vertical) > entry:not(:only-child):last-child,
combobox > .linked:not(.vertical) > entry:not(:only-child):last-child {
  margin-left: -36px;
  padding-left: 36px;
}

dropdown > .linked:not(.vertical) > button:not(:only-child),
combobox > .linked:not(.vertical) > button:not(:only-child) {
  min-height: 16px;
  min-width: 16px;
  margin: 6px;
  padding: 4px;
  border-radius: 6px;
}

.linked:not(.vertical) > combobox:not(:first-child) > box > button.combo {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.linked:not(.vertical) > combobox:not(:last-child) > box > button.combo {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.linked.vertical > combobox:not(:first-child) > box > button.combo {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.linked.vertical > combobox:not(:last-child) > box > button.combo {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

button.combo:only-child {
  border-radius: 6px;
  font-weight: normal;
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), outline 300ms cubic-bezier(0, 0, 0.2, 1), box-shadow 300ms cubic-bezier(0, 0, 0.2, 1);
  box-shadow: inset 0 0 0 2px transparent;
  background-color: alpha(${bg}, 0.08);
  color: alpha(${fg}, 0.7);
  outline: 0 solid transparent;
  outline-offset: 2px;
}

button.combo:only-child:focus {
  color: ${fg};
  outline: 2px solid alpha(${bg}, 0.04);
  outline-offset: -2px;
}

button.combo:only-child:hover {
  background-color: alpha(currentColor, 0.08);
  color: ${fg};
}

button.combo:only-child:active {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), border-image 225ms cubic-bezier(0, 0, 0.2, 1), background-size 0ms, background-image 0ms;
  animation: ripple 225ms cubic-bezier(0, 0, 0.2, 1) forwards;
  background-image: radial-gradient(circle, alpha(currentColor, 0.08) 10%, transparent 0%);
  background-size: 0% 0%;
  background-color: alpha(currentColor, 0.08);
  color: ${fg};
}

button.combo:only-child:checked {
  background-color: alpha(currentColor, 0.1);
  color: ${fg};
}

button.combo:only-child:disabled {
  background-color: alpha(${bg}, 0.04);
  color: alpha(${fg}, 0.5);
  outline-color: transparent;
}

/************
 * Toolbars *
 ************/
.toolbar {
  padding: 6px;
  background-color: ${bg};
  border-spacing: 6px;
}

.osd .toolbar {
  background-color: transparent;
}

.app-notification, .toolbar.osd {
  transition: box-shadow 200ms ease-out;
  padding: 6px;
  border-radius: 12px;
  box-shadow: 0 1px 2px 0 alpha(${fg}, 0.15), 0 3px 3px 0 apha(${fg}, 0.18), 0 3px 6px 0 apha(${fg}, 0.12), inset 0 1px apha(${bg}, 0.1);
  background-color: ${bg};
  color: ${fg};
}

.app-notification:backdrop, .toolbar.osd:backdrop {
  box-shadow: 0 4px 3px -3px alpha(${fg}, 0.2), 0 2px 2px -1px apha(${fg}, 0.24), 0 1px 3px 0 apha(${fg}, 0.12), inset 0 1px apha(${bg}, 0.1);
}

.left.app-notification, .right.app-notification, .top.app-notification, .bottom.app-notification, .toolbar.osd.left, .toolbar.osd.right, .toolbar.osd.top, .toolbar.osd.bottom {
  border-radius: 0;
}

.bottom.app-notification, .toolbar.osd.bottom {
  box-shadow: none;
  background-color: transparent;
  background-image: linear-gradient(to bottom, transparent, alpha(${fg}, 0.1) 30%, apha(${fg}, 0.2) 50%, apha(${fg}, 0.4));
}

.toolbar.horizontal > separator {
  margin: 2px;
}

.toolbar.vertical > separator {
  margin: 2px;
}

.toolbar entry,
.toolbar spinbutton,
.toolbar splitbutton,
.toolbar separator:not(.sidebar),
.toolbar button,
.toolbar menubutton,
.toolbar scalebutton {
  margin-top: 0;
  margin-bottom: 0;
}

.toolbar menubutton > button,
.toolbar splitbutton > button,
.toolbar splitbutton > menubutton,
.toolbar scalebutton > button {
  margin-top: 0;
  margin-bottom: 0;
}

.toolbar switch {
  margin-top: 4px;
  margin-bottom: 4px;
}

.toolbar spinbutton entry,
.toolbar spinbutton button {
  margin: 0;
}

.toolbar popover.menu separator:not(.sidebar) {
  margin-top: 6px;
  margin-bottom: 6px;
}

searchbar > revealer > box {
  padding: 6px;
  border-spacing: 0;
  border-style: solid;
  border-width: 0 0 1px;
  border-color: alpha(${bg}, 0.12);
  background-color: ${bg};
  background-clip: border-box;
  box-shadow: none;
}

searchbar > revealer > box entry, searchbar > revealer > box button, searchbar > revealer > box menubutton {
  margin: 0;
}

/***************
 * Header bars *
 ***************/
headerbar button:not(.suggested-action):not(.destructive-action) {
  color: alpha(${fg}, 0.7);
  border: none;
}

headerbar button:hover:not(.suggested-action):not(.destructive-action), headerbar button:focus:not(:hover):not(:active):not(.suggested-action):not(.destructive-action), headerbar button:active:not(.suggested-action):not(.destructive-action), headerbar button:checked:not(.suggested-action):not(.destructive-action) {
  color: ${fg};
}

headerbar button:disabled:not(.suggested-action):not(.destructive-action) {
  color: alpha(${fg}, 0.32);
}

headerbar button:checked:disabled:not(.suggested-action):not(.destructive-action) {
  background-color: transparent;
  color: alpha(${fg}, 0.5);
}

headerbar button:backdrop:not(.suggested-action):not(.destructive-action) {
  color: alpha(${fg}, 0.5);
}

headerbar button:backdrop:focus:not(.suggested-action):not(.destructive-action), headerbar button:backdrop:hover:not(.suggested-action):not(.destructive-action), headerbar button:backdrop:active:not(.suggested-action):not(.destructive-action) {
  color: alpha(${fg}, 0.7);
}

headerbar button:backdrop:disabled:not(.suggested-action):not(.destructive-action) {
  color: alpha(${fg}, 0.32);
}

headerbar button:backdrop:checked:not(.suggested-action):not(.destructive-action) {
  color: alpha(${fg}, 0.7);
}

headerbar button:backdrop:checked:disabled:not(.suggested-action):not(.destructive-action) {
  color: alpha(${fg}, 0.32);
}

headerbar entry {
  background-color: alpha(${bg}, 0.04);
  color: alpha(${fg}, 0.7);
}

headerbar entry:hover, headerbar entry:focus-within {
  color: ${fg};
}

headerbar entry:disabled {
  background-color: alpha(${bg}, 0.04);
  color: alpha(${fg}, 0.5);
}

headerbar entry > text > placeholder {
  color: alpha(${fg}, 0.5);
}

headerbar entry > text > block-cursor {
  color: alpha(${fg}, 0.04);
  background-color: ${bg};
}

headerbar entry > image {
  color: alpha(${fg}, 0.7);
}

headerbar entry > image:hover, headerbar entry > image:active {
  color: ${fg};
}

headerbar entry > image:disabled {
  color: alpha(${fg}, 0.5);
}

headerbar {
  transition: background-color 75ms cubic-bezier(0, 0, 0.2, 1), color 75ms cubic-bezier(0, 0, 0.2, 1);
  box-shadow: inset 0 -1px alpha(${bg}, 0.12);
  background-color: ${bg};
  color: ${fg};
  min-height: 48px;
  padding: 0;
  margin: 0;
}

headerbar:disabled {
  color: alpha(${fg}, 0.5);
}

headerbar:backdrop {
  background-color: ${bg};
  color: alpha(${fg}, 0.7);
  box-shadow: inset 0 -1px alpha(${bg}, 0.12);
}

headerbar:backdrop:disabled {
  color: alpha(${fg}, 0.32);
}

headerbar.flat, headerbar.flat:backdrop {
  background: none;
  box-shadow: none;
  transition: none;
}

headerbar .title {
  padding: 0 12px;
  font-weight: bold;
}

headerbar .subtitle {
  padding: 0 12px;
  font-size: smaller;
}

headerbar .subtitle,
headerbar .dim-label,
headerbar row.expander image.expander-row-arrow,
row.expander headerbar image.expander-row-arrow,
headerbar row.property > box.header > box.title > .title,
headerbar row label.subtitle,
row headerbar label.subtitle {
  transition: color 75ms cubic-bezier(0, 0, 0.2, 1);
  color: alpha(${fg}, 0.7);
}

headerbar .subtitle:backdrop,
headerbar .dim-label:backdrop,
headerbar row.expander image.expander-row-arrow:backdrop,
row.expander headerbar image.expander-row-arrow:backdrop,
headerbar row.property > box.header > box.title > .title:backdrop,
headerbar row label.subtitle:backdrop,
row headerbar label.subtitle:backdrop {
  color: alpha(${fg}, 0.5);
}

headerbar .titlebar {
  background-color: transparent;
  box-shadow: none;
}

headerbar headerbar + separator {
  background-color: alpha(${bg}, 0.12);
}

headerbar > windowhandle > box {
  padding: 0 6px;
}

headerbar > windowhandle > box,
headerbar > windowhandle > box > box.start,
headerbar > windowhandle > box > box.end {
  border-spacing: 6px;
}

headerbar entry,
headerbar spinbutton,
headerbar splitbutton,
headerbar button,
headerbar menubutton,
headerbar stackswitcher,
headerbar separator:not(.sidebar) {
  margin-top: 6px;
  margin-bottom: 6px;
}

headerbar menubutton > button,
headerbar spinbutton > button,
headerbar splitbutton > button,
headerbar splitbutton > menubutton,
headerbar .linked > menubutton,
headerbar entry > menubutton {
  margin-top: 0;
  margin-bottom: 0;
}

headerbar button.suggested-action:disabled,
headerbar button.destructive-action:disabled {
  background-color: alpha(${bg}, 0.04);
  color: alpha(${fg}, 0.5);
  opacity: 1;
}

headerbar button.star {
  min-height: 24px;
  min-width: 24px;
  padding: 6px;
}

headerbar .linked:not(.vertical) > entry:not(:only-child) {
  border-radius: 6px;
}

headerbar .entry-tag {
  margin-top: 5px;
  margin-bottom: 5px;
}

headerbar popover.background button.suggested-action:disabled,
headerbar popover.background button.destructive-action:disabled {
  background-color: alpha(${bg}, 0.04);
  color: alpha(${fg}, 0.5);
}

headerbar popover.background entry,
headerbar popover.background spinbutton,
headerbar popover.background button,
headerbar popover.background menubutton,
headerbar popover.background stackswitcher {
  margin-top: 0;
  margin-bottom: 0;
}

headerbar separator:not(.sidebar) {
  background-color: alpha(${bg}, 0.12);
}

headerbar switch {
  margin-top: 12px;
  margin-bottom: 12px;
}

headerbar.selection-mode {
  transition: background-color 0.1ms 225ms, color 75ms cubic-bezier(0, 0, 0.2, 1);
  background-color: ${accent};
  color: alpha(${accentfg}, 0.87);
}

headerbar.selection-mode:backdrop {
  color: alpha(${fg}, 0.6);
}

headerbar.selection-mode .subtitle:link {
  color: alpha(${fg}, 0.87);
}

headerbar.selection-mode .selection-menu {
  padding-left: 16px;
  padding-right: 16px;
}

headerbar.selection-mode .selection-menu .arrow {
  -gtk-icon-source: -gtk-icontheme("pan-down-symbolic");
}

headerbar.default-decoration {
  min-height: 36px;
  padding: 0;
  margin: 0;
  box-shadow: none;
  border: none;
  outline: none;
  background-image: image(${bg});
}

headerbar.default-decoration:backdrop {
  background-image: image(${bg});
}

headerbar.default-decoration windowcontrols button,
headerbar.default-decoration windowcontrols menubutton {
  min-width: 16px;
  min-height: 16px;
  margin: 0;
  padding: 0;
}

headerbar.default-decoration windowcontrols menubutton button {
  min-height: 20px;
  min-width: 20px;
  margin: 0;
  padding: 4px;
}

.solid-csd headerbar:dir(rtl), .solid-csd headerbar:dir(ltr) {
  border-radius: 0;
  box-shadow: none;
}

window.devel headerbar {
  /*background: ${bg} cross-fade(10% -gtk-icontheme("system-run-symbolic"), image(transparent)) 90% 0/256px 256px no-repeat, linear-gradient(to right, transparent 65%, alpha(${accent}, 0.1)), linear-gradient(to top, ${bg} 3px, ${bg});*/
  background: image(${bg});
}

window.devel headerbar:backdrop {
  /*background: ${bg} cross-fade(10% -gtk-icontheme("system-run-symbolic"), image(transparent)) 90% 0/256px 256px no-repeat, image(${bg});
  background-color would flash */
  background: image(${bg});
}

/************
 * Pathbars *
 ************/

pathbar > button {
  padding-left: 6px;
  padding-right: 6px;
  border-radius: 6px;
  background-color: alpha(currentColor, 0.08);
  border: none;
  box-shadow: none;
}


pathbar > button:disabled {
  background-color: alpha(currentColor, 0.05);
}


pathbar > button:checked {
  background-color: alpha(currentColor, 0.1);
  color: ${fg};
}


pathbar > button:checked:hover {
  background-color: alpha(currentColor, 0.85);
  color: ${fg};
}


pathbar > button label,
pathbar > button image {
  margin-left: 3px;
  margin-right: 3px;
}


pathbar > button.slider-button {
  padding-left: 4px;
  padding-right: 4px;
}

.pathbar {
  background-color: alpha(${bg}, 0.04);
  color: alpha(${fg}, 0.7);
  border: none;
  border-radius: 6px;
  padding: 2px;
}

headerbar .pathbar {
  margin-top: 6px;
  margin-bottom: 6px;
  background-color: alpha(${bg}, 0.04);
  color: alpha(${fg}, 0.7);
}

.pathbar > button {
  margin-top: 0;
  margin-bottom: 0;
  min-height: 20px;
  border-radius: 4px;
  border: none;
  box-shadow: none;
}

.pathbar > button:last-child {
  background-color: alpha(currentColor, 0.1);
  color: ${fg};
}

/**************
 * Tree Views *
 **************/
columnview.view,
treeview.view {
  border-left-color: ${bg};
  border-top-color: ${bg};
}

columnview.view:hover, columnview.view:selected,
treeview.view:hover,
treeview.view:selected {
  border-radius: 0;
}

columnview.view:focus,
treeview.view:focus {
  box-shadow: none;
  outline: none;
}

columnview.view.separator,
treeview.view.separator {
  min-height: 5px;
  color: alpha(${fg}, 0.12);
}

columnview.view:drop(active),
treeview.view:drop(active) {
  box-shadow: none;
}

columnview.view:drop(active).after,
treeview.view:drop(active).after {
  border-top-style: none;
}

columnview.view:drop(active).before,
treeview.view:drop(active).before {
  border-bottom-style: none;
}

columnview.view > dndtarget:drop(active),
treeview.view > dndtarget:drop(active) {
  border-style: solid none;
  border-width: 1px;
  border-color: alpha(currentColor, 0.06);
}

columnview.view > dndtarget:drop(active).after,
treeview.view > dndtarget:drop(active).after {
  border-top-style: none;
}

columnview.view > dndtarget:drop(active).before,
treeview.view > dndtarget:drop(active).before {
  border-bottom-style: none;
}

columnview.view.expander,
treeview.view.expander {
  min-width: 16px;
  min-height: 16px;
  -gtk-icon-source: -gtk-icontheme("pan-end-symbolic");
  color: alpha(${fg}, 0.7);
}

columnview.view.expander:dir(rtl),
treeview.view.expander:dir(rtl) {
  -gtk-icon-source: -gtk-icontheme("pan-end-symbolic-rtl");
}

columnview.view.expander:hover,
treeview.view.expander:hover {
  color: ${fg};
}

columnview.view.expander:selected,
treeview.view.expander:selected {
  background-color: ${accent};
  color: ${accentfg};
}

columnview.view.expander:selected:hover,
treeview.view.expander:selected:hover {
  background-color: ${accent};
  color: ${accentfg};
}

columnview.view.expander:checked,
treeview.view.expander:checked {
  -gtk-icon-source: -gtk-icontheme("pan-down-symbolic");
}

columnview.view.expander:disabled,
treeview.view.expander:disabled {
  color: alpha(${fg}, 0.32);
}

columnview.view.progressbar,
treeview.view.progressbar {
  border-bottom: 6px solid ${accent};
  box-shadow: none;
  background-color: transparent;
  background-image: none;
}

columnview.view.progressbar:selected:hover,
treeview.view.progressbar:selected:hover {
  box-shadow: none;
}

columnview.view.trough,
treeview.view.trough {
  border-bottom: 6px solid alpha(${bg}, 0.12);
  box-shadow: none;
  background-color: transparent;
  background-image: none;
}

columnview.view.trough:selected:hover,
treeview.view.trough:selected:hover {
  box-shadow: none;
}

columnview.view > header > button,
treeview.view > header > button {
  padding: 2px 6px;
  border-style: none solid solid none;
  border-width: 1px;
  border-color: alpha(${bg}, 0.12);
  border-radius: 0;
  background-clip: border-box;
}

columnview.view > header > button:not(:focus):not(:hover):not(:active),
treeview.view > header > button:not(:focus):not(:hover):not(:active) {
  color: alpha(${fg}, 0.7);
}

columnview.view > header > button, columnview.view > header > button:disabled,
treeview.view > header > button,
treeview.view > header > button:disabled {
  background-color: ${bg};
}

columnview.view > header > button:last-child,
treeview.view > header > button:last-child {
  border-right-style: none;
}

columnview.view button.dnd,
columnview.view header.button.dnd,
treeview.view button.dnd,
treeview.view header.button.dnd {
  padding: 2px 6px;
  border-style: none solid solid;
  border-width: 1px;
  border-color: alpha(${bg}, 0.12);
  border-radius: 0;
  box-shadow: none;
  background-color: ${bg};
  background-clip: border-box;
  color: ${accent};
}

columnview.view acceleditor > label,
treeview.view acceleditor > label {
  background-color: ${accent};
}

stack.view treeview.view {
  min-height: 36px;
}

listview > row:selected:focus:hover:active, listview > row:selected:not(:focus):hover:active, listview > row:selected:focus:not(hover):active, listview > row:selected:focus:hover:not(:active), listview > row:selected:not(:focus):hover:not(:active), listview > row:selected:focus:not(hover):not(:active),
listview > row:selected:not(:focus):not(:hover), listview > row:selected :nth-child(1), listview > row:selected :nth-child(2), listview > row:selected :nth-child(3), listview > row:selected :nth-child(4) {
	border-radius: 5px;
	background-color: ${accent};
	color: ${accentfg};
}

/*********
 * Menus *
 *********/
menubar {
  padding: 0;
  background-color: ${bg};
  color: ${fg};
}

menubar:backdrop {
  background-color: ${bg};
  color: alpha(${fg}, 0.7);
}

.csd menubar {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1);
}

menubar > item {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1);
  min-height: 20px;
  padding: 4px 8px;
  color: alpha(${fg}, 0.7);
}

menubar > item:selected {
  transition: none;
  background-color: ${accent};
  color: ${accentfg};
}

menubar > item:disabled {
  color: alpha(${fg}, 0.32);
}

menubar > item label:disabled {
  color: inherit;
}

menubar > item popover.menu popover.menu {
  margin-left: 9px;
}

menubar > item popover.menu.background popover.menu.background > contents {
  margin: 0;
  border-radius: 12px;
}

/**********************
 * Popover Base Menus *
 **********************/
popover.menu box.inline-buttons {
  color: ${fg};
  padding: 0 6px;
}

popover.menu box.inline-buttons button.image-button.model {
  min-height: 28px;
  min-width: 28px;
  padding: 0;
  border: none;
  outline: none;
  transition: none;
}

popover.menu box.inline-buttons button.image-button.model:selected {
  background: image(${accent});
}

popover.menu box.circular-buttons {
  padding: 6px;
}

popover.menu box.circular-buttons button.circular.image-button.model {
  padding: 6px;
}

popover.menu box.circular-buttons button.circular.image-button.model:focus {
  background-color: alpha(currentColor, 0.06);
}

popover.menu arrow.left,
popover.menu radio.left,
popover.menu check.left {
  margin-left: 0;
  margin-right: 0;
}

popover.menu arrow.right,
popover.menu radio.right,
popover.menu check.right {
  margin-left: 0;
  margin-right: 0;
}

popover.menu label.title {
  font-weight: bold;
  padding: 4px 26px;
}

/************
 * Popovers *
 ************/
popover.background {
  font: initial;
}

popover.background, popover.background:backdrop {
  background-color: transparent;
}

popover > arrow,
popover > contents {
  transition: box-shadow 200ms ease-out;
  padding: 6px;
  background-color: ${bg};
  border-radius: 12px;
  color: ${fg};
  border: 1px solid alpha(${bg}, 0.1);
  background-clip: border-box;
  box-shadow: 0 0 0 1px alpha(${accent}, 0.75), 0 2px 3px -1px apha(${accent}, 0.05), 0 4px 6px 0 apha(${accent}, 0.06), 0 1px 10px 0 apha(${accent}, 0.05);
}

popover > contents > list,
popover > contents > .view,
popover > contents > toolbar {
  border-style: none;
  box-shadow: none;
  background-color: transparent;
}

popover > contents separator {
  background-color: alpha(${bg}, 0.12);
  margin: 3px 0;
}

popover > contents list separator {
  margin: 0;
}

popover > contents list > row {
  border-radius: 6px;
}

popover > contents stack > box {
  padding: 0;
}

popover > contents > box > button {
  margin: 0;
}

popover .view:not(:selected),
popover toolbar {
  background-color: ${bg};
}

popover.menu button,
popover button.model {
  min-height: 32px;
  padding: 0 8px;
}

popover modelbutton {
  transition: background-color 75ms cubic-bezier(0, 0, 0.2, 1);
  min-height: 22px;
  min-width: 56px;
  padding: 3px 9px;
  color: ${fg};
  font: initial;
  border-radius: 6px;
}

popover modelbutton:focus:not(:hover) {
  transition: none;
  box-shadow: none;
  outline: none;
}

popover modelbutton:disabled {
  color: alpha(${fg}, 0.5);
}

popover modelbutton accelerator {
  color: alpha(${fg}, 0.5);
  margin-left: 30px;
}

popover modelbutton accelerator:disabled {
  color: alpha(${fg}, 0.12);
}

popover modelbutton arrow.left {
  -gtk-icon-source: -gtk-icontheme("go-previous-symbolic");
}

popover modelbutton arrow.right {
  -gtk-icon-source: -gtk-icontheme("go-next-symbolic");
}

.osd popover, popover.touch-selection, popover.magnifier {
  background-color: transparent;
}

magnifier {
  background-color: ${bg};
}

/*************
 * Notebooks *
 *************/
notebook > header > tabs > tab {
  min-height: 24px;
  min-width: 24px;
  padding: 3px 6px;
  border: none;
  background-clip: padding-box;
  font-weight: 500;
  border-radius: 6px;
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), border-image 225ms cubic-bezier(0, 0, 0.2, 1), background-size 300ms cubic-bezier(0, 0, 0.2, 1), background-image 1200ms cubic-bezier(0, 0, 0.2, 1), outline 300ms cubic-bezier(0, 0, 0.2, 1);
  background-image: radial-gradient(circle, transparent 10%, transparent 0%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1000% 1000%;
  background-color: transparent;
  outline: 0 solid transparent;
  outline-offset: 2px;
  color: alpha(${fg}, 0.7);
}

notebook > header > tabs > tab:hover:not(:checked):not(:selected) {
  background-color: alpha(currentColor, 0.08);
  color: ${fg};
  box-shadow: none;
}

notebook > header > tabs > tab:disabled {
  color: alpha(${fg}, 0.32);
  background-color: transparent;
}

notebook > header > tabs > tab:active {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), border-image 225ms cubic-bezier(0, 0, 0.2, 1), background-size 0ms, background-image 0ms;
  animation: ripple 225ms cubic-bezier(0, 0, 0.2, 1) forwards;
  background-image: radial-gradient(circle, alpha(currentColor, 0.08) 10%, transparent 0%);
  background-size: 0% 0%;
  background-color: alpha(currentColor, 0.08);
  color: ${fg};
  box-shadow: none;
}

notebook > header > tabs > tab:checked {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), border-image 225ms cubic-bezier(0, 0, 0.2, 1), background-size 0ms, background-image 0ms, background-color 0ms;
  background-color: alpha(${accent}, 0.85);
  color: ${accentfg};
}

notebook > header > tabs > tab:checked:disabled {
  color: alpha(${fg}, 0.5);
}

frame > paned > notebook > header, notebook.frame > header {
  background-color: alpha(${bg}, 0.04);
}

notebook, notebook.frame {
  background-color: ${bg};
  border-radius: 12px;
}

notebook.frame frame > border {
  border: none;
  border-radius: 6px;
}

notebook.frame frame > list row.activatable {
  border-radius: 6px;
}

notebook > header {
  border: none;
  background-color: alpha(${bg}, 0.04);
  margin: 3px;
  border-radius: 9px;
}

notebook > header.top > tabs > arrow {
  border-top-style: none;
}

notebook > header.bottom > tabs > arrow {
  border-bottom-style: none;
}

notebook > header.top > tabs > arrow, notebook > header.bottom > tabs > arrow {
  padding-left: 4px;
  padding-right: 4px;
}

notebook > header.top > tabs > arrow.down, notebook > header.bottom > tabs > arrow.down {
  margin-left: 0;
  -gtk-icon-source: -gtk-icontheme("pan-start-symbolic");
}

notebook > header.top > tabs > arrow.up, notebook > header.bottom > tabs > arrow.up {
  margin-right: 0;
  -gtk-icon-source: -gtk-icontheme("pan-end-symbolic");
}

notebook > header.left > tabs > arrow {
  border-left-style: none;
}

notebook > header.right > tabs > arrow {
  border-right-style: none;
}

notebook > header.left > tabs > arrow, notebook > header.right > tabs > arrow {
  padding-top: 4px;
  padding-bottom: 4px;
}

notebook > header.left > tabs > arrow.down, notebook > header.right > tabs > arrow.down {
  margin-top: 0;
  -gtk-icon-source: -gtk-icontheme("pan-up-symbolic");
}

notebook > header.left > tabs > arrow.up, notebook > header.right > tabs > arrow.up {
  margin-bottom: 0;
  -gtk-icon-source: -gtk-icontheme("pan-down-symbolic");
}

notebook > header > tabs > arrow {
  min-height: 16px;
  min-width: 16px;
  border-radius: 6px;
}

notebook > header > tabs > tab {
  margin: 3px;
}

notebook > header > tabs > tab > box {
  transition: background-color 75ms cubic-bezier(0, 0, 0.2, 1);
  margin: -6px -12px;
  padding: 6px 12px;
}

notebook > header > tabs > tab > box:drop(active) {
  background-color: alpha(${bg}, 0.12);
  color: ${fg};
}

notebook > header > tabs > tab button.flat:last-child {
  margin-left: 6px;
  margin-right: -3px;
}

notebook > header > tabs > tab button.flat:first-child {
  margin-left: -3px;
  margin-right: 6px;
}

notebook > header > tabs > tab button.close-button {
  min-width: 24px;
  min-height: 24px;
}

notebook > header.top > tabs, notebook > header.bottom > tabs {
  padding-left: 0;
  padding-right: 0;
}

notebook > header.top > tabs:not(:only-child):first-child, notebook > header.bottom > tabs:not(:only-child):first-child {
  margin-left: 0;
}

notebook > header.top > tabs:not(:only-child):last-child, notebook > header.bottom > tabs:not(:only-child):last-child {
  margin-right: 0;
}

notebook > header.top > tabs > tab:not(:last-child), notebook > header.bottom > tabs > tab:not(:last-child) {
  margin-right: 0;
}

notebook > header.top > tabs tab.reorderable-page, notebook > header.bottom > tabs tab.reorderable-page {
  border-style: solid;
}

notebook > header.left > tabs, notebook > header.right > tabs {
  padding-top: 0;
  padding-bottom: 0;
}

notebook > header.left > tabs:not(:only-child):first-child, notebook > header.right > tabs:not(:only-child):first-child {
  margin-top: 0;
}

notebook > header.left > tabs:not(:only-child):last-child, notebook > header.right > tabs:not(:only-child):last-child {
  margin-bottom: 0;
}

notebook > header.left > tabs > tab:not(:last-child), notebook > header.right > tabs > tab:not(:last-child) {
  margin-bottom: 0;
}

notebook > header.left > tabs tab.reorderable-page, notebook > header.right > tabs tab.reorderable-page {
  border-style: solid;
}

notebook > header > menubutton > button.image-button {
  padding: 3px;
  min-width: 24px;
  min-height: 24px;
  margin: 0 3px;
}

notebook > stack:not(:only-child) {
  background-color: transparent;
  border-radius: 6px;
}

tabbar tab {
  min-height: 24px;
  min-width: 24px;
  padding: 3px 6px;
  border: none;
  background-clip: padding-box;
  font-weight: 500;
  border-radius: 6px;
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), border-image 225ms cubic-bezier(0, 0, 0.2, 1), background-size 300ms cubic-bezier(0, 0, 0.2, 1), background-image 1200ms cubic-bezier(0, 0, 0.2, 1), outline 300ms cubic-bezier(0, 0, 0.2, 1);
  background-image: radial-gradient(circle, transparent 10%, transparent 0%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1000% 1000%;
  background-color: transparent;
  outline: 0 solid transparent;
  outline-offset: 2px;
  color: alpha(${fg}, 0.7);
  color: alpha(${fg}, 0.7);
}

tabbar tab:hover:not(:selected) {
  background-color: alpha(currentColor, 0.08);
  color: ${fg};
  box-shadow: none;
  color: ${fg};
}

tabbar tab:disabled {
  color: alpha(${fg}, 0.32);
  background-color: transparent;
  color: alpha(${fg}, 0.32);
}

tabbar tab:active {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), border-image 225ms cubic-bezier(0, 0, 0.2, 1), background-size 0ms, background-image 0ms;
  animation: ripple 225ms cubic-bezier(0, 0, 0.2, 1) forwards;
  background-image: radial-gradient(circle, alpha(currentColor, 0.08) 10%, transparent 0%);
  background-size: 0% 0%;
  background-color: alpha(${accent}, 0.85);
  color: ${accentfg};
  box-shadow: none;
  color: ${accentfg};
}

tabbar tab:selected:not(:active) {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), border-image 225ms cubic-bezier(0, 0, 0.2, 1), background-size 0ms, background-image 0ms, background-color 0ms;
  background-color: ${accent};
  color: ${accentfg};
}

tabbar tab:selected:not(:active):disabled {
  color: alpha(${accentfg}, 0.5);
}

tabbar > revealer > box {
  box-shadow: none;
}

tabbar .box {
  background-color: ${bg};
  background-image: none;
  padding: 0;
  margin: 0;
  border-radius: 0;
  min-height: 36px;
  border: none;
  box-shadow: inset 0 -1px alpha(${bg}, 0.12);
}

tabbar .box:backdrop {
  background-color: ${bg};
  transition: background-color 75ms cubic-bezier(0, 0, 0.2, 1);
}

tabbar .box:backdrop > scrolledwindow,
tabbar .box:backdrop > .start-action,
tabbar .box:backdrop > .end-action {
  filter: none;
  transition: none;
}

tabbar tabbox {
  padding: 0;
  margin: 0;
  min-height: 36px;
}

tabbar tabbox > background {
  background: none;
}

tabbar tabbox > separator {
  margin: 9px 0;
  transition: opacity 150ms ease-in-out;
}

tabbar tabbox > separator.hidden {
  opacity: 0;
}

tabbar tabbox > tabboxchild {
  padding: 0;
  margin: 0;
}

tabbar tab {
  padding: 6px;
  margin: 6px 2px;
}

tabbar tab.needs-attention {
  background-image: radial-gradient(ellipse at bottom, alpha(${bg}, 0.8), alpha(${accent}, 0.4) 10%, alpha(${accent}, 0) 30%);
}

tabbar tab.needs-attention:hover {
  background-image: image(alpha(currentColor, 0.03)), radial-gradient(ellipse at bottom, alpha(${bg}, 0.8), alpha(${accent}, 0.4) 10%, alpha(${accent}, 0) 30%);
}

tabbar tabbox.single-tab tab, tabbar tabbox.single-tab tab:hover, tabbar tabbox.single-tab tab:active {
  background: none;
}

tabbar undershoot {
  transition: background 150ms ease-in-out;
}

tabbar undershoot.left {
  background: linear-gradient(to right, ${bg}, alpha(${fg}, 0) 20px);
}

tabbar undershoot.right {
  background: linear-gradient(to left, ${bg}, alpha(${fg}, 0) 20px);
}

tabbar .needs-attention-left undershoot.left {
  background: linear-gradient(to right, alpha(${accent}, 0.5), alpha(${accent}, 0.3) 1px, alpha(${accent}, 0) 20px);
}

tabbar .needs-attention-right undershoot.right {
  background: linear-gradient(to left, alpha(${accent}, 0.5), alpha(${accent}, 0.3) 1px, alpha(${accent}, 0) 20px);
}

tabbar .start-action,
tabbar .end-action {
  padding: 6px 5px;
}

tabbar .start-action:dir(ltr),
tabbar .end-action:dir(rtl) {
  padding-right: 0;
}

tabbar .start-action:dir(rtl),
tabbar .end-action:dir(ltr) {
  padding-left: 0;
}

tabbar.inline .box {
  background-color: transparent;
  color: inherit;
  box-shadow: none;
  padding-bottom: 0;
}

tabbar.inline .box:backdrop {
  background-color: transparent;
  transition: none;
}

tabbar.inline .box:backdrop > scrolledwindow,
tabbar.inline .box:backdrop > .start-action,
tabbar.inline .box:backdrop > .end-action {
  filter: none;
  transition: none;
}

dnd tab {
  min-height: 24px;
  background-color: ${bg};
  color: ${fg};
  box-shadow: 0 1px 5px 1px alpha(${fg}, 0.09), 0 2px 14px 3px apha(${fg}, 0.05), 0 0 0 1px apha(${fg}, 0.05);
  outline: 1px solid alpha(${fg}, 0.75);
  outline-offset: -1px;
  margin: 24px;
}

dnd tab.needs-attention {
  background-image: radial-gradient(ellipse at bottom, alpha(${bg}, 0.8), alpha(${accent}, 0.4) 10%, alpha(${accent}, 0) 30%);
}

tabbar tab,
dnd tab {
  padding: 6px;
}

tabbar tab button.image-button,
dnd tab button.image-button {
  padding: 0;
  margin: 0;
  min-width: 24px;
  min-height: 24px;
  border-radius: 9999px;
  color: alpha(${fg}, 0.7);
}

tabbar tab button.image-button:hover, tabbar tab button.image-button:active,
dnd tab button.image-button:hover,
dnd tab button.image-button:active {
  color: ${fg};
}

tabbar tab button.image-button:disabled,
dnd tab button.image-button:disabled {
  color: alpha(${fg}, 0.32);
}

tabbar tab indicator,
dnd tab indicator {
  min-height: 2px;
  border-radius: 2px;
  background: alpha(${accent}, 0.5);
  transform: translateY(4px);
}

tabthumbnail {
  border-radius: 6px;
  transition: box-shadow 200ms ease-out;
}

tabthumbnail > box {
  margin: 6px;
}

tabthumbnail:drop(active) {
  box-shadow: inset 0 0 0 2px alpha(${orange}, 0.4);
  background-color: alpha(${orange}, 0.1);
}

tabthumbnail .needs-attention:dir(ltr) {
  transform: translate(8px, -8px);
}

tabthumbnail .needs-attention:dir(rtl) {
  transform: translate(-8px, -8px);
}

tabthumbnail .needs-attention > widget {
  background: ${accent};
  min-width: 12px;
  min-height: 12px;
  border-radius: 6px;
  margin: 3px;
  box-shadow: 0 1px 2px alpha(${accent}, 0.4);
}

tabthumbnail .card {
  background: none;
  border: none;
  box-shadow: none;
  color: inherit;
}

tabthumbnail .card picture {
  outline: 1px solid alpha(${bg}, 0.12);
  outline-offset: -1px;
  border-radius: 6px;
}

tabthumbnail.pinned .card {
  background-color: alpha(${bg}, 0.04);
  color: ${fg};
}

tabthumbnail .icon-title-box {
  border-spacing: 6px;
}

tabthumbnail .tab-unpin-icon {
  margin: 6px;
  min-width: 24px;
  min-height: 24px;
}

tabthumbnail button.circular {
  margin: 6px;
  background-color: alpha(${bg}, 0.04);
  min-width: 24px;
  min-height: 24px;
}

tabthumbnail button.circular:hover {
  background-color: alpha(currentColor, 0.08);
}

tabthumbnail button.circular:active {
  background-color: alpha(currentColor, 0.12);
}

taboverview > .overview .new-tab-button {
  margin: 18px;
}

tabview:drop(active),
tabbox:drop(active),
tabgrid:drop(active) {
  box-shadow: none;
}

/**************
 * Scrollbars *
 **************/
scrollbar {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1);
  background-color: ${bg};
  box-shadow: none;
  outline: none;
}

scrollbar.top {
  border-bottom: 1px solid alpha(${bg}, 0.12);
}

scrollbar.bottom {
  border-top: 1px solid alpha(${bg}, 0.12);
}

scrollbar.left {
  border-right: 1px solid alpha(${bg}, 0.12);
}

scrollbar.right {
  border-left: 1px solid alpha(${bg}, 0.12);
}

scrollbar > range > trough {
  border: none;
  background: none;
  padding: 0;
  outline: none;
}

scrollbar > range > trough > slider {
  transition: background-color 75ms cubic-bezier(0, 0, 0.2, 1);
  min-width: 8px;
  min-height: 8px;
  border: 4px solid transparent;
  border-radius: 9999px;
  background-clip: padding-box;
  background-color: alpha(${bg}, 0.5);
  box-shadow: none;
  outline: none;
}

scrollbar > range > trough > slider:hover {
  background-color: alpha(${bg}, 0.7);
}

scrollbar > range > trough > slider:active {
  background-color: ${bg};
}

scrollbar > range > trough > slider:disabled {
  background-color: alpha(${bg}, 0.32);
}

scrollbar > range.fine-tune > trough > slider {
  min-width: 4px;
  min-height: 4px;
}

scrollbar > range.fine-tune.horizontal > trough > slider {
  margin: 2px 0;
}

scrollbar > range.fine-tune.vertical > trough > slider {
  margin: 0 2px;
}

scrollbar.overlay-indicator:not(.fine-tune) > range > trough > slider {
  transition-property: background-color, min-height, min-width;
}

scrollbar.overlay-indicator:not(.dragging):not(.hovering) {
  border-color: transparent;
  background-color: transparent;
}

scrollbar.overlay-indicator:not(.dragging):not(.hovering) > range > trough > slider {
  min-width: 4px;
  min-height: 4px;
  margin: 0;
  border: 1px solid alpha(${bg}, 0.3);
}

scrollbar.overlay-indicator:not(.dragging):not(.hovering) button {
  min-width: 4px;
  min-height: 4px;
  margin: 0;
  border: 1px solid alpha(${bg}, 0.3);
  border-radius: 9999px;
  background-color: alpha(${bg}, 0.5);
  background-clip: padding-box;
  -gtk-icon-source: none;
}

scrollbar.overlay-indicator:not(.dragging):not(.hovering) button:disabled {
  background-color: alpha(${bg}, 0.32);
}

scrollbar.overlay-indicator:not(.dragging):not(.hovering).horizontal > range > trough > slider {
  min-width: 24px;
}

scrollbar.overlay-indicator:not(.dragging):not(.hovering).horizontal button {
  min-width: 8px;
}

scrollbar.overlay-indicator:not(.dragging):not(.hovering).vertical > range > trough > slider {
  min-height: 24px;
}

scrollbar.overlay-indicator:not(.dragging):not(.hovering).vertical button {
  min-height: 8px;
}

scrollbar.overlay-indicator.dragging, scrollbar.overlay-indicator.hovering {
  background-color: alpha(${bg}, 0.04);
}

scrollbar.horizontal > range > trough > slider {
  min-width: 24px;
}

scrollbar.vertical > range > trough > slider {
  min-height: 24px;
}

scrollbar button {
  min-width: 16px;
  min-height: 16px;
  padding: 0;
  border-radius: 0;
}

scrollbar.vertical button.down {
  -gtk-icon-source: -gtk-icontheme("pan-down-symbolic");
}

scrollbar.vertical button.up {
  -gtk-icon-source: -gtk-icontheme("pan-up-symbolic");
}

scrollbar.horizontal button.down {
  -gtk-icon-source: -gtk-icontheme("pan-end-symbolic");
}

scrollbar.horizontal button.up {
  -gtk-icon-source: -gtk-icontheme("pan-start-symbolic");
}

/**********
 * Switch *
 **********/
switch {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1);
  margin: 6px 0;
  padding: 0;
	border: 2px solid ${accent};
  border-radius: 9999px;
  background-color: alpha(${bg}, 0.5);
  background-clip: border-box;
  font-size: 0;
  color: transparent;
}

switch image {
  margin: -8px;
}

switch > slider {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1);
  min-width: 18px;
  min-height: 18px;
  margin: 3px;
  border-radius: 9999px;
  outline: none;
  background-color: ${bg};
  border: none;
}

switch:checked > slider {
	background-color: alpha(${accent}, 0.85)
}

switch:not(:checked) > slider {
	background-color: alpha(${accent}, 0.5)
}

switch:focus slider, switch:hover slider, switch:focus:hover slider {
  background-color: alpha(${accent}, 1);
  box-shadow: 0 0 0 6px alpha(${bg}, 0.12);
}

switch:disabled {
  background-color: ${accent};
  opacity: 0.5;
}

switch:disabled > slider {
  background-color: ${bg};
  opacity: 1.0;
}

/*************************
 * Check and Radio items *
 *************************/
.view.content-view.check:not(list),
.content-view .tile check:not(list) {
  min-height: 40px;
  min-width: 40px;
  margin: 0;
  padding: 0;
  box-shadow: none;
  background-color: transparent;
  background-image: none;
}

.view.content-view.check:not(list):hover, .view.content-view.check:not(list):active,
.content-view .tile check:not(list):hover,
.content-view .tile check:not(list):active {
  box-shadow: 0 0 0 10px alpha(${bg}, 0.12);
}

.view.content-view.check:not(list),
.content-view .tile check:not(list) {
  -gtk-icon-source: -gtk-scaled(url("assets/selectionmode-checkbox-unchecked-dark.png"), url("assets/selectionmode-checkbox-unchecked-dark@2.png"));
}

.view.content-view.check:not(list):checked,
.content-view .tile check:not(list):checked {
  -gtk-icon-source: -gtk-scaled(url("assets/selectionmode-checkbox-checked-dark.png"), url("assets/selectionmode-checkbox-checked-dark@2.png"));
}

checkbutton,
radiobutton {
  outline: none;
  border-spacing: 3px;
}

check,
radio {
  min-height: 20px;
  min-width: 20px;
  margin: 3px;
  padding: 0;
  border-radius: 9999px;
  border: none;
  color: transparent;
  background-color: alpha(${bg}, 0.12);
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1);
}

check:hover,
radio:hover {
  box-shadow: 0 0 0 6px alpha(${bg}, 0.04);
  background-color: alpha(${bg}, 0.15);
}

check:active,
radio:active {
  box-shadow: 0 0 0 6px alpha(${bg}, 0.12);
  background-color: alpha(${bg}, 0.2);
}

check:disabled,
radio:disabled {
  background-color: alpha(${bg}, 0.04);
}

check:checked, check:indeterminate,
radio:checked,
radio:indeterminate {
  color: alpha(${accentfg}, 0.87);
  background-color: ${accent};
	border: 2px solid ${accent};
}

check:not(:checked), check:indeterminate,
radio:not(:checked),
radio:indeterminate {
  color: alpha(${fg}, 0.25);
  background-color: ${bg};
	border: 2px solid ${accent};
}

check:checked:hover, check:indeterminate:hover,
radio:checked:hover,
radio:indeterminate:hover {
  box-shadow: 0 0 0 6px alpha(${accent}, 0.15);
	color: ${accentfg};
  background-color: ${accent};
}

check:checked:active, check:indeterminate:active,
radio:checked:active,
radio:indeterminate:active {
  box-shadow: 0 0 0 6px alpha(${accent}, 0.2);
  background-color: ${accent};
}

check:checked:disabled, check:indeterminate:disabled,
radio:checked:disabled,
radio:indeterminate:disabled {
  color: alpha(${accentfg}, 0.6);
  background-color: alpha(${accent}, 0.35);
}

popover modelbutton.flat check, popover modelbutton.flat check:focus, popover modelbutton.flat check:hover, popover modelbutton.flat check:focus:hover, popover modelbutton.flat check:active, popover modelbutton.flat check:disabled, popover modelbutton.flat radio, popover modelbutton.flat radio:focus, popover modelbutton.flat radio:hover, popover modelbutton.flat radio:focus:hover, popover modelbutton.flat radio:active, popover modelbutton.flat radio:disabled {
  transition: none;
  box-shadow: none;
  background-image: none;
}

popover modelbutton.flat check.left:dir(rtl), popover modelbutton.flat radio.left:dir(rtl) {
  margin-left: -3px;
  margin-right: 6px;
}

popover modelbutton.flat check.right:dir(ltr), popover modelbutton.flat radio.right:dir(ltr) {
  margin-left: 6px;
  margin-right: -3px;
}

popover.menu check, popover.menu radio {
  transition: none;
  margin: 0;
  padding: 0;
}

popover.menu check:dir(ltr), popover.menu radio:dir(ltr) {
  margin-right: 6px;
  margin-left: -3px;
}

popover.menu check:dir(rtl), popover.menu radio:dir(rtl) {
  margin-left: 6px;
  margin-right: -3px;
}

popover.menu check, popover.menu check:hover, popover.menu check:disabled, popover.menu check:checked:hover, popover.menu check:indeterminate:hover, popover.menu radio, popover.menu radio:hover, popover.menu radio:disabled, popover.menu radio:checked:hover, popover.menu radio:indeterminate:hover {
  box-shadow: none;
}


check {
  -gtk-icon-size: 20px;
}


check:checked {
  -gtk-icon-source: -gtk-scaled(-gtk-recolor(url("assets/scalable/checkbox-checked-symbolic.svg")), -gtk-recolor(url("assets/scalable/checkbox-checked-symbolic@2.svg")));
}


check:indeterminate {
  -gtk-icon-source: -gtk-scaled(-gtk-recolor(url("assets/scalable/checkbox-mixed-symbolic.svg")), -gtk-recolor(url("assets/scalable/checkbox-mixed-symbolic@2.svg")));
}


radio {
  -gtk-icon-size: 20px;
}


radio:checked {
  -gtk-icon-source: -gtk-scaled(-gtk-recolor(url("assets/scalable/radio-checked-symbolic.svg")), -gtk-recolor(url("assets/scalable/radio-checked-symbolic@2.svg")));
}


radio:indeterminate {
  -gtk-icon-source: -gtk-scaled(-gtk-recolor(url("assets/scalable/radio-mixed-symbolic.svg")), -gtk-recolor(url("assets/scalable/radio-mixed-symbolic@2.svg")));
}


popover.menu check {
  min-height: 16px;
  min-width: 16px;
  -gtk-icon-size: 16px;
}


popover.menu check:checked {
  -gtk-icon-source: -gtk-scaled(-gtk-recolor(url("assets/scalable/small-checkbox-checked-symbolic.svg")), -gtk-recolor(url("assets/scalable/small-checkbox-checked-symbolic@2.svg")));
}


popover.menu check:indeterminate {
  -gtk-icon-source: -gtk-scaled(-gtk-recolor(url("assets/scalable/small-checkbox-mixed-symbolic.svg")), -gtk-recolor(url("assets/scalable/small-checkbox-mixed-symbolic@2.svg")));
}


popover.menu radio {
  min-height: 16px;
  min-width: 16px;
  -gtk-icon-size: 16px;
}


popover.menu radio:checked {
  -gtk-icon-source: -gtk-scaled(-gtk-recolor(url("assets/scalable/small-radio-checked-symbolic.svg")), -gtk-recolor(url("assets/scalable/small-radio-checked-symbolic@2.svg")));
}


popover.menu radio:indeterminate {
  -gtk-icon-source: -gtk-scaled(-gtk-recolor(url("assets/scalable/small-radio-mixed-symbolic.svg")), -gtk-recolor(url("assets/scalable/small-radio-mixed-symbolic@2.svg")));
}

check:not(:checked):active {
  -gtk-icon-transform: rotate(90deg);
}

treeview.view radio, treeview.view check,
columnview.view radio,
columnview.view check {
  padding: 0;
  margin: 0;
  transition: none;
}

treeview.view radio, treeview.view radio:hover, treeview.view radio:disabled, treeview.view radio:checked:hover, treeview.view radio:indeterminate:hover, treeview.view check, treeview.view check:hover, treeview.view check:disabled, treeview.view check:checked:hover, treeview.view check:indeterminate:hover,
columnview.view radio,
columnview.view radio:hover,
columnview.view radio:disabled,
columnview.view radio:checked:hover,
columnview.view radio:indeterminate:hover,
columnview.view check,
columnview.view check:hover,
columnview.view check:disabled,
columnview.view check:checked:hover,
columnview.view check:indeterminate:hover {
  box-shadow: none;
}

treeview.view:hover check, treeview.view:hover radio, treeview.view:selected check, treeview.view:selected radio, treeview.view:focus check, treeview.view:focus radio,
columnview.view:hover check,
columnview.view:hover radio,
columnview.view:selected check,
columnview.view:selected radio,
columnview.view:focus check,
columnview.view:focus radio {
  box-shadow: none;
}

treeview.view:hover check:checked, treeview.view:hover radio:checked, treeview.view:selected check:checked, treeview.view:selected radio:checked, treeview.view:focus check:checked, treeview.view:focus radio:checked,
columnview.view:hover check:checked,
columnview.view:hover radio:checked,
columnview.view:selected check:checked,
columnview.view:selected radio:checked,
columnview.view:focus check:checked,
columnview.view:focus radio:checked {
  color: alpha(${accentfg}, 0.87);
  background-color: ${accent};
}

/************
 * GtkScale *
 ************/
scale {
  min-height: 2px;
  min-width: 2px;
}

scale.horizontal {
  padding: 17px 12px;
}

scale.vertical {
  padding: 12px 17px;
}

scale > trough {
  transition: background-color 75ms cubic-bezier(0, 0, 0.2, 1);
  outline: none;
  background-color: alpha(${bg}, 0.3);
}

scale > trough:disabled {
  background-color: alpha(${bg}, 0.12);
}

scale > trough > highlight {
  transition: background-image 75ms cubic-bezier(0, 0, 0.2, 1);
  background-image: image(${accent});
}

scale > trough > highlight:disabled {
  background-color: ${bg};
  background-image: image(alpha(${bg}, 0.32));
}

scale > trough > fill {
  transition: background-color 75ms cubic-bezier(0, 0, 0.2, 1);
  background-color: alpha(${bg}, 0.3);
}

scale > trough > fill:disabled {
  background-color: transparent;
}

scale > trough > slider {
  min-height: 18px;
  min-width: 18px;
  margin: -8px;
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: 9999px;
  color: ${accentfg};
  background-color: ${bg};
  box-shadow: inset 0 0 0 2px ${accent};
}

scale > trough > slider:hover {
  box-shadow: inset 0 0 0 2px ${accent}, 0 0 0 8px alpha(${bg}, 0.12);
}

scale > trough > slider:active {
  box-shadow: inset 0 0 0 4px ${accent}, 0 0 0 8px alpha(${bg}, 0.12);
}

scale > trough > slider:disabled {
  box-shadow: inset 0 0 0 2px alpha(${bg}, 0.32);
}

scale.fine-tune.horizontal {
  min-height: 4px;
  padding-top: 16px;
  padding-bottom: 16px;
}

scale.fine-tune.vertical {
  min-width: 4px;
  padding-left: 16px;
  padding-right: 16px;
}

scale.fine-tune > trough > slider {
  margin: -7px;
}

scale > marks,
scale > value {
  color: alpha(${fg}, 0.7);
}

scale indicator {
  background-color: alpha(${bg}, 0.3);
  color: transparent;
}

scale.marks-before:not(.marks-after) > trough > slider, scale.marks-after:not(.marks-before) > trough > slider {
  transform: rotate(0);
}

scale.horizontal > marks.top {
  margin-bottom: 7px;
  margin-top: -15px;
}

scale.horizontal.fine-tune > marks.top {
  margin-bottom: 6px;
  margin-top: -14px;
}

scale.horizontal > marks.bottom {
  margin-top: 7px;
  margin-bottom: -15px;
}

scale.horizontal.fine-tune > marks.bottom {
  margin-top: 6px;
  margin-bottom: -14px;
}

scale.vertical > marks.top {
  margin-right: 7px;
  margin-left: -15px;
}

scale.vertical.fine-tune > marks.top {
  margin-right: 6px;
  margin-left: -14px;
}

scale.vertical > marks.bottom {
  margin-left: 7px;
  margin-right: -15px;
}

scale.vertical.fine-tune > marks.bottom {
  margin-left: 6px;
  margin-right: -14px;
}

scale.horizontal indicator {
  min-height: 8px;
  min-width: 1px;
}

scale.vertical indicator {
  min-height: 1px;
  min-width: 8px;
}

scale.horizontal.marks-before:not(.marks-after) > trough > slider {
  transition: background-color 75ms cubic-bezier(0, 0, 0.2, 1), background-size 300ms cubic-bezier(0, 0, 0.2, 1), background-image 1200ms cubic-bezier(0, 0, 0.2, 1);
  min-height: 32px;
  min-width: 32px;
  margin: -15px;
  border-radius: 50%;
  background-size: auto, 1000% 1000%;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: transparent;
}

scale.horizontal.marks-before:not(.marks-after) > trough > slider, scale.horizontal.marks-before:not(.marks-after) > trough > slider:hover, scale.horizontal.marks-before:not(.marks-after) > trough > slider:active, scale.horizontal.marks-before:not(.marks-after) > trough > slider:disabled {
  box-shadow: none;
}

scale.horizontal.marks-before:not(.marks-after) > trough > slider:focus {
  background-color: alpha(currentColor, 0.08);
}

scale.horizontal.marks-before:not(.marks-after) > trough > slider:hover {
  background-color: alpha(currentColor, 0.08);
}

scale.horizontal.marks-before:not(.marks-after) > trough > slider:focus:hover {
  background-color: alpha(currentColor, 0.16);
}

scale.horizontal.marks-before:not(.marks-after) > trough > slider:active {
  background-size: auto, 0% 0%;
  background-color: alpha(currentColor, 0.08);
}

scale.horizontal.marks-before:not(.marks-after) > trough > slider {
  background-image: -gtk-scaled(url("assets/scale-horz-marks-before-slider-dark.png"), url("assets/scale-horz-marks-before-slider-dark@2.png"));
}

scale.horizontal.marks-before:not(.marks-after) > trough > slider:disabled {
  background-image: -gtk-scaled(url("assets/scale-horz-marks-before-slider-disabled-dark.png"), url("assets/scale-horz-marks-before-slider-disabled-dark@2.png"));
}

scale.horizontal.marks-before:not(.marks-after) > trough > slider:active {
  background-image: -gtk-scaled(url("assets/scale-horz-marks-before-slider-dark.png"), url("assets/scale-horz-marks-before-slider-dark@2.png"));
}

scale.horizontal.marks-after:not(.marks-before) > trough > slider {
  transition: background-color 75ms cubic-bezier(0, 0, 0.2, 1), background-size 300ms cubic-bezier(0, 0, 0.2, 1), background-image 1200ms cubic-bezier(0, 0, 0.2, 1);
  min-height: 32px;
  min-width: 32px;
  margin: -15px;
  border-radius: 50%;
  background-size: auto, 1000% 1000%;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: transparent;
}

scale.horizontal.marks-after:not(.marks-before) > trough > slider, scale.horizontal.marks-after:not(.marks-before) > trough > slider:hover, scale.horizontal.marks-after:not(.marks-before) > trough > slider:active, scale.horizontal.marks-after:not(.marks-before) > trough > slider:disabled {
  box-shadow: none;
}

scale.horizontal.marks-after:not(.marks-before) > trough > slider:focus {
  background-color: alpha(currentColor, 0.08);
}

scale.horizontal.marks-after:not(.marks-before) > trough > slider:hover {
  background-color: alpha(currentColor, 0.08);
}

scale.horizontal.marks-after:not(.marks-before) > trough > slider:focus:hover {
  background-color: alpha(currentColor, 0.16);
}

scale.horizontal.marks-after:not(.marks-before) > trough > slider:active {
  background-size: auto, 0% 0%;
  background-color: alpha(currentColor, 0.08);
}

scale.horizontal.marks-after:not(.marks-before) > trough > slider {
  background-image: -gtk-scaled(url("assets/scale-horz-marks-after-slider-dark.png"), url("assets/scale-horz-marks-after-slider-dark@2.png"));
}

scale.horizontal.marks-after:not(.marks-before) > trough > slider:disabled {
  background-image: -gtk-scaled(url("assets/scale-horz-marks-after-slider-disabled-dark.png"), url("assets/scale-horz-marks-after-slider-disabled-dark@2.png"));
}

scale.horizontal.marks-after:not(.marks-before) > trough > slider:active {
  background-image: -gtk-scaled(url("assets/scale-horz-marks-after-slider-dark.png"), url("assets/scale-horz-marks-after-slider-dark@2.png"));
}

scale.vertical.marks-before:not(.marks-after) > trough > slider {
  transition: background-color 75ms cubic-bezier(0, 0, 0.2, 1), background-size 300ms cubic-bezier(0, 0, 0.2, 1), background-image 1200ms cubic-bezier(0, 0, 0.2, 1);
  min-height: 32px;
  min-width: 32px;
  margin: -15px;
  border-radius: 50%;
  background-size: auto, 1000% 1000%;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: transparent;
}

scale.vertical.marks-before:not(.marks-after) > trough > slider, scale.vertical.marks-before:not(.marks-after) > trough > slider:hover, scale.vertical.marks-before:not(.marks-after) > trough > slider:active, scale.vertical.marks-before:not(.marks-after) > trough > slider:disabled {
  box-shadow: none;
}

scale.vertical.marks-before:not(.marks-after) > trough > slider:focus {
  background-color: alpha(currentColor, 0.08);
}

scale.vertical.marks-before:not(.marks-after) > trough > slider:hover {
  background-color: alpha(currentColor, 0.08);
}

scale.vertical.marks-before:not(.marks-after) > trough > slider:focus:hover {
  background-color: alpha(currentColor, 0.16);
}

scale.vertical.marks-before:not(.marks-after) > trough > slider:active {
  background-size: auto, 0% 0%;
  background-color: alpha(currentColor, 0.08);
}

scale.vertical.marks-before:not(.marks-after) > trough > slider {
  background-image: -gtk-scaled(url("assets/scale-vert-marks-before-slider-dark.png"), url("assets/scale-vert-marks-before-slider-dark@2.png"));
}

scale.vertical.marks-before:not(.marks-after) > trough > slider:disabled {
  background-image: -gtk-scaled(url("assets/scale-vert-marks-before-slider-disabled-dark.png"), url("assets/scale-vert-marks-before-slider-disabled-dark@2.png"));
}

scale.vertical.marks-before:not(.marks-after) > trough > slider:active {
  background-image: -gtk-scaled(url("assets/scale-vert-marks-before-slider-dark.png"), url("assets/scale-vert-marks-before-slider-dark@2.png"));
}

scale.vertical.marks-after:not(.marks-before) > trough > slider {
  transition: background-color 75ms cubic-bezier(0, 0, 0.2, 1), background-size 300ms cubic-bezier(0, 0, 0.2, 1), background-image 1200ms cubic-bezier(0, 0, 0.2, 1);
  min-height: 32px;
  min-width: 32px;
  margin: -15px;
  border-radius: 50%;
  background-size: auto, 1000% 1000%;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: transparent;
}

scale.vertical.marks-after:not(.marks-before) > trough > slider, scale.vertical.marks-after:not(.marks-before) > trough > slider:hover, scale.vertical.marks-after:not(.marks-before) > trough > slider:active, scale.vertical.marks-after:not(.marks-before) > trough > slider:disabled {
  box-shadow: none;
}

scale.vertical.marks-after:not(.marks-before) > trough > slider:focus {
  background-color: alpha(currentColor, 0.08);
}

scale.vertical.marks-after:not(.marks-before) > trough > slider:hover {
  background-color: alpha(currentColor, 0.08);
}

scale.vertical.marks-after:not(.marks-before) > trough > slider:focus:hover {
  background-color: alpha(currentColor, 0.16);
}

scale.vertical.marks-after:not(.marks-before) > trough > slider:active {
  background-size: auto, 0% 0%;
  background-color: alpha(currentColor, 0.08);
}

scale.vertical.marks-after:not(.marks-before) > trough > slider {
  background-image: -gtk-scaled(url("assets/scale-vert-marks-after-slider-dark.png"), url("assets/scale-vert-marks-after-slider-dark@2.png"));
}

scale.vertical.marks-after:not(.marks-before) > trough > slider:disabled {
  background-image: -gtk-scaled(url("assets/scale-vert-marks-after-slider-disabled-dark.png"), url("assets/scale-vert-marks-after-slider-disabled-dark@2.png"));
}

scale.vertical.marks-after:not(.marks-before) > trough > slider:active {
  background-image: -gtk-scaled(url("assets/scale-vert-marks-after-slider-dark.png"), url("assets/scale-vert-marks-after-slider-dark@2.png"));
}

scale.color {
  min-height: 0;
  min-width: 0;
}

scale.color.horizontal {
  padding: 0 0 12px 0;
}

scale.color.horizontal > trough > slider:dir(ltr), scale.color.horizontal > trough > slider:dir(rtl) {
  margin-bottom: -13.5px;
  margin-top: 11.5px;
}

scale.color.vertical:dir(ltr) {
  padding: 0 0 0 12px;
}

scale.color.vertical:dir(ltr) slider {
  margin-left: -13.5px;
  margin-right: 11.5px;
}

scale.color.vertical:dir(rtl) {
  padding: 0 12px 0 0;
}

scale.color.vertical:dir(rtl) > trough > slider {
  margin-right: -13.5px;
  margin-left: 11.5px;
}

/*****************
 * Progress bars *
 *****************/
progressbar {
  color: alpha(${fg}, 0.7);
  font-size: smaller;
}

progressbar.horizontal trough,
progressbar.horizontal progress {
  min-height: 6px;
}

progressbar.vertical trough,
progressbar.vertical progress {
  min-width: 6px;
}

progressbar trough {
  border-radius: 6px;
  background-color: alpha(${bg}, 0.12);
}

progressbar progress {
  border-radius: 6px;
  background-color: ${accent};
}

progressbar.osd {
  min-width: 6px;
  min-height: 6px;
  background-color: transparent;
  box-shadow: none;
  margin: 0;
  padding: 0;
}

progressbar.osd trough {
  background-color: transparent;
}

progressbar.osd progress {
  background-color: ${accent};
}

progressbar trough.empty progress {
  all: unset;
}

/*************
 * Level Bar *
 *************/
levelbar.horizontal block {
  min-height: 6px;
}

levelbar.horizontal.discrete block {
  min-width: 36px;
}

levelbar.horizontal.discrete block:not(:last-child) {
  margin-right: 2px;
}

levelbar.vertical block {
  min-width: 6px;
}

levelbar.vertical.discrete block {
  min-height: 36px;
}

levelbar.vertical.discrete block:not(:last-child) {
  margin-bottom: 2px;
}

levelbar trough {
  border-radius: 6px;
}

levelbar block.low {
  background-color: ${yellow};
}

levelbar block.high, levelbar block:not(.empty) {
  background-color: ${accent};
}

levelbar block.full {
  background-color: ${green};
}

levelbar block.empty {
  background-color: alpha(${bg}, 0.12);
}

/****************
 * Print dialog *
*****************/
window.dialog.print drawing {
  color: ${fg};
  background: none;
  border: none;
  padding: 0;
}

window.dialog.print drawing paper {
  padding: 0;
  border: 1px solid alpha(${bg}, 0.12);
  background-color: ${bg};
  color: ${fg};
}

window.dialog.print .dialog-action-box {
  margin: 12px;
}

/**********
 * Frames *
 **********/
frame,
.frame {
  border: 1px solid alpha(${bg}, 0.12);
}

frame > list,
.frame > list {
  border: none;
}

frame.view,
.frame.view {
  border-radius: 6px;
}

frame.flat,
.frame.flat {
  border-style: none;
}

frame {
  border-radius: 6px;
}

frame > label {
  margin: 4px;
}

frame.flat > border, statusbar frame > border {
  border: none;
}

actionbar > revealer > box {
  padding: 6px;
  border-spacing: 0;
  box-shadow: inset 0 1px alpha(${bg}, 0.12);
  background-color: ${bg};
  background-clip: border-box;
  border: none;
}

actionbar > revealer > box button, actionbar > revealer > box entry,
actionbar > revealer > box menubutton, actionbar > revealer > box menubutton > button,
actionbar > revealer > box splitbutton, actionbar > revealer > box splitbutton > button,
actionbar > revealer > box spinbutton {
  margin: 0;
}

statusbar {
  padding: 6px 18px;
}

scrolledwindow viewport.frame {
  border: none;
}

stack scrolledwindow.frame viewport.frame list {
  border: none;
}

scrolledwindow > overshoot.top {
  background-image: radial-gradient(farthest-side at top, alpha(currentColor, 0.12) 85%, alpha(currentColor, 0)), radial-gradient(farthest-side at top, alpha(currentColor, 0.05), alpha(currentColor, 0));
  background-size: 100% 3%, 100% 50%;
  background-repeat: no-repeat;
  background-position: top;
  background-color: transparent;
  border: none;
  box-shadow: none;
}

scrolledwindow > overshoot.bottom {
  background-image: radial-gradient(farthest-side at bottom, alpha(currentColor, 0.12) 85%, alpha(currentColor, 0)), radial-gradient(farthest-side at bottom, alpha(currentColor, 0.05), alpha(currentColor, 0));
  background-size: 100% 3%, 100% 50%;
  background-repeat: no-repeat;
  background-position: bottom;
  background-color: transparent;
  border: none;
  box-shadow: none;
}

scrolledwindow > overshoot.left {
  background-image: radial-gradient(farthest-side at left, alpha(currentColor, 0.12) 85%, alpha(currentColor, 0)), radial-gradient(farthest-side at left, alpha(currentColor, 0.05), alpha(currentColor, 0));
  background-size: 3% 100%, 50% 100%;
  background-repeat: no-repeat;
  background-position: left;
  background-color: transparent;
  border: none;
  box-shadow: none;
}

scrolledwindow > overshoot.right {
  background-image: radial-gradient(farthest-side at right, alpha(currentColor, 0.12) 85%, alpha(currentColor, 0)), radial-gradient(farthest-side at right, alpha(currentColor, 0.05), alpha(currentColor, 0));
  background-size: 3% 100%, 50% 100%;
  background-repeat: no-repeat;
  background-position: right;
  background-color: transparent;
  border: none;
  box-shadow: none;
}

scrolledwindow.undershoot-top > undershoot.top {
  box-shadow: none;
  background: linear-gradient(to bottom, alpha(alpha(${fg}, 0.25), 0.75), transparent 6px);
}

scrolledwindow.undershoot-bottom > undershoot.bottom {
  box-shadow: none;
  background: linear-gradient(to top, alpha(alpha(${fg}, 0.25), 0.75), transparent 6px);
}

scrolledwindow.undershoot-start:dir(ltr) > undershoot.left {
  box-shadow: none;
  background: linear-gradient(to right, alpha(alpha(${fg}, 0.25), 0.75), transparent 6px);
}

scrolledwindow.undershoot-start:dir(rtl) > undershoot.right {
  box-shadow: none;
  background: linear-gradient(to left, alpha(alpha(${fg}, 0.25), 0.75), transparent 6px);
}

scrolledwindow.undershoot-end:dir(ltr) > undershoot.right {
  box-shadow: none;
  background: linear-gradient(to left, alpha(alpha(${fg}, 0.25), 0.75), transparent 6px);
}

scrolledwindow.undershoot-end:dir(rtl) > undershoot.left {
  box-shadow: none;
  background: linear-gradient(to right, alpha(alpha(${fg}, 0.25), 0.75), transparent 6px);
}

scrolledwindow > undershoot {
  background-image: none;
  box-shadow: none;
  border: none;
}

separator {
  min-width: 1px;
  min-height: 1px;
  background-color: alpha(${bg}, 0.12);
}

stacksidebar + separator.vertical,
stacksidebar separator.horizontal, button.font separator, button.file separator, separator.spacer {
  min-width: 0;
  min-height: 0;
  background-color: transparent;
  background-image: none;
}

/*********
 * Lists *
 *********/
list.content,
list.boxed-list {
  border-radius: 7px;
  box-shadow: none;
  border: 1px solid alpha(${bg}, 0.12);
}

listview,
list {
  border-color: alpha(${bg}, 0.12);
  background-color: ${bg};
  background-clip: padding-box;
}

listview > row,
list > row {
  padding: 6px;
  background-clip: padding-box;
}

listview > row.expander,
list > row.expander {
  padding: 0px;
}

listview > row.expander .row-header,
list > row.expander .row-header {
  padding: 2px;
}

listview.horizontal row.separator:not(:last-child), listview.separators.horizontal > row:not(.separator):not(:last-child),
list.horizontal row.separator:not(:last-child),
list.separators.horizontal > row:not(.separator):not(:last-child) {
  border-left: 1px solid alpha(${bg}, 0.12);
}

listview:not(.horizontal) row.separator:not(:last-child), listview.separators:not(.horizontal) > row:not(.separator):not(:last-child),
list:not(.horizontal) row.separator:not(:last-child),
list.separators:not(.horizontal) > row:not(.separator):not(:last-child) {
  border-bottom: 1px solid alpha(${bg}, 0.12);
}

list.frame {
  border-radius: 6px;
}

listview.view {
  color: ${fg};
  background-color: transparent;
}

popover.menu listview.view {
  padding: 0;
  border-radius: 6px;
}

popover.menu listview.view > row {
  margin-left: 0;
  margin-right: 0;
  border-radius: 6px;
}

row {
  color: alpha(${fg}, 0.7);
  background-clip: padding-box;
}

.nautilus-window .nautilus-grid-view child.activatable, columnview.view > header > button,
treeview.view > header > button, row.activatable {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), background-size 300ms cubic-bezier(0, 0, 0.2, 1), background-image 1200ms cubic-bezier(0, 0, 0.2, 1), font-weight 0;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  background-image: radial-gradient(circle, transparent 10%, transparent 0%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1000% 1000%;
  outline: none;
}

.nautilus-window .nautilus-grid-view child.activatable:focus, columnview.view > header > button:focus,
treeview.view > header > button:focus, row.activatable:focus {
  color: ${fg};
  background-color: transparent;
  box-shadow: none;
  outline: none;
}

.nautilus-window .nautilus-grid-view child.activatable:hover, columnview.view > header > button:hover,
treeview.view > header > button:hover, .nautilus-window .nautilus-grid-view child.has-open-popup.activatable, columnview.view > header > button.has-open-popup,
treeview.view > header > button.has-open-popup, row.activatable:hover, row.activatable.has-open-popup {
  color: ${fg};
  background-color: alpha(currentColor, 0.05);
  box-shadow: none;
}

.nautilus-window .nautilus-grid-view child.activatable:active, columnview.view > header > button:active,
treeview.view > header > button:active, row.activatable:active {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), background-size 0ms, background-image 0ms, font-weight 0ms;
  animation: ripple 225ms cubic-bezier(0, 0, 0.2, 1) forwards;
  background-image: radial-gradient(circle, alpha(currentColor, 0.05) 10%, transparent 0%);
  background-size: 0% 0%;
  background-color: alpha(currentColor, 0.05);
  color: ${fg};
  box-shadow: none;
}

.nautilus-window .nautilus-grid-view child.activatable:selected {
  background-color: alpha(${accent}, 0.1);
}

columnview.view > header > button:selected, treeview.view:selected:not(:hover) {
  background-color: ${accent};
  color: ${accentfg};
}

.nautilus-window .nautilus-grid-view child.activatable:selected:hover {
  background-color: alpha(${accent}, 0.18);
} 

columnview.view > header > button:selected:hover, treeview.view:selected:hover {
  background-color: ${accent};
  color: ${accentfg};
}

treeview.view.progressbar:selected {
  border-bottom: 6px solid ${bg};
}

button row.activatable:focus, button row.activatable:hover, button row.activatable:active {
  box-shadow: none;
  background: none/
}

button:checked row.activatable {
  color: alpha(${fg}, 0.87);
}

row:selected {
  background-color: ${accent};
  color: ${accentfg};
  box-shadow: none;
}

row.activatable:selected, row:selected:hover, row:focus:selected:hover, row:focus:active:selected:hover, row.activatable:selected:hover,row:selected:focus, row:selected:focus-visible:focus-within,
row:selected:focus:hover, row:selected:focus-visible:focus-within:hover {
  background-color: alpha(${accent}, 0.85);
	color: ${accentfg};
}

row:selected button image,
row:selected button label {
  color: inherit;
}

row:selected:disabled {
  color: alpha(${accentfg}, 0.5);
}

.rich-list {
  /* rich lists usually containing other widgets than just labels/text */
}

.rich-list > row {
  padding: 9px 12px;
  min-height: 32px;
  /* should be tall even when only containing a label */
}

.rich-list > row:last-child {
  border-bottom: none;
}

.rich-list > row > box {
  border-spacing: 12px;
}

row label.subtitle {
  font-size: smaller;
}

row > box.header {
  margin-left: 12px;
  margin-right: 12px;
  border-spacing: 6px;
  min-height: 50px;
}

row > box.header > .icon:disabled {
  filter: opacity(0.45);
}

row > box.header > box.title {
  margin-top: 6px;
  margin-bottom: 6px;
  border-spacing: 3px;
  padding: 0;
}

row > box.header > box.title,
row > box.header > box.title > .title,
row > box.header > box.title > .subtitle {
  padding: 0;
  font-weight: inherit;
}

row > box.header > .prefixes,
row > box.header > .suffixes {
  border-spacing: 6px;
}

row > box.header > .icon:dir(ltr),
row > box.header > .prefixes:dir(ltr) {
  margin-right: 6px;
}

row > box.header > .icon:dir(rtl),
row > box.header > .prefixes:dir(rtl) {
  margin-left: 6px;
}

row.property > box.header > box.title > .subtitle {
  font-size: inherit;
  opacity: 1;
}

row.entry:not(:selected).activatable.focused:hover, row.entry:not(:selected).activatable.focused:active {
  background-color: transparent;
}

row.entry:disabled text {
  opacity: 0.45;
}

row.entry:disabled .dim-label, row.entry:disabled row.expander image.expander-row-arrow, row.expander row.entry:disabled image.expander-row-arrow, row.entry:disabled row.property > box.header > box.title > .title, row.entry:disabled .subtitle {
  opacity: 1;
}

row.entry .edit-icon, row.entry .indicator {
  min-width: 24px;
  min-height: 24px;
  padding: 5px;
}

row.entry .edit-icon:disabled {
  opacity: 0.5;
}

row.entry .indicator {
  opacity: 0.65;
}

row.entry.monospace {
  font-family: inherit;
}

row.entry.monospace text {
  font-family: monospace;
}

row.spin:not(:selected).activatable.focused:hover, row.spin:not(:selected).activatable.focused:active {
  background-color: transparent;
}

row.spin spinbutton {
  background: none;
  border-spacing: 6px;
  box-shadow: none;
}

row.spin spinbutton, row.spin spinbutton:focus {
  outline: none;
}

row.spin spinbutton > button.image-button.up:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child, row.spin spinbutton > button.image-button.up:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(ltr):last-child, row.spin spinbutton > button.image-button.up:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(rtl):first-child,
row.spin spinbutton > button.image-button.down:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque),
row.spin spinbutton > button.image-button.down:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(ltr):last-child,
row.spin spinbutton > button.image-button.down:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(rtl):first-child {
  min-width: 30px;
  min-height: 30px;
  margin: 10px 2px;
  border: none;
}

row.spin:disabled spinbutton > button.image-button.up:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:disabled, row.spin:disabled spinbutton > button.image-button.up:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(ltr):last-child:disabled, row.spin:disabled spinbutton > button.image-button.up:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):last-child:dir(rtl):first-child:disabled,
row.spin:disabled spinbutton > button.image-button.down:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):disabled,
row.spin:disabled spinbutton > button.image-button.down:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(ltr):last-child:disabled,
row.spin:disabled spinbutton > button.image-button.down:not(.flat):not(.raised):not(.suggested-action):not(.destructive-action):not(.opaque):dir(rtl):first-child:disabled {
  filter: none;
}

row.entry:not(:selected).activatable.focused:hover, row.entry:not(:selected).activatable.focused:active,
row.spin:not(:selected).activatable.focused:hover,
row.spin:not(:selected).activatable.focused:active {
  background-color: transparent;
}

row.entry.error text > selection:focus-within,
row.spin.error text > selection:focus-within {
  background-color: alpha(${red}, 0.2);
}

row.entry.error text > cursor-handle > contents,
row.spin.error text > cursor-handle > contents {
  background-color: currentColor;
}

row.entry.error .dim-label, row.entry.error row.expander image.expander-row-arrow, row.expander row.entry.error image.expander-row-arrow, row.entry.error row.property > box.header > box.title > .title, row.entry.error .subtitle,
row.spin.error .dim-label,
row.spin.error row.expander image.expander-row-arrow,
row.expander row.spin.error image.expander-row-arrow,
row.spin.error row.property > box.header > box.title > .title,
row.spin.error .subtitle {
  opacity: 1;
}

row.entry.error .suggested-action,
row.spin.error .suggested-action {
  background-color: ${red};
  color: ${fg};
}

row.entry.warning text > selection:focus-within,
row.spin.warning text > selection:focus-within {
  background-color: alpha(${yellow}, 0.2);
}

row.entry.warning text > cursor-handle > contents,
row.spin.warning text > cursor-handle > contents {
  background-color: currentColor;
}

row.entry.warning .dim-label, row.entry.warning row.expander image.expander-row-arrow, row.expander row.entry.warning image.expander-row-arrow, row.entry.warning row.property > box.header > box.title > .title, row.entry.warning .subtitle,
row.spin.warning .dim-label,
row.spin.warning row.expander image.expander-row-arrow,
row.expander row.spin.warning image.expander-row-arrow,
row.spin.warning row.property > box.header > box.title > .title,
row.spin.warning .subtitle {
  opacity: 1;
}

row.entry.warning .suggested-action,
row.spin.warning .suggested-action {
  background-color: ${yellow};
  color: alpha(${fg}, 0.87);
}

row.entry.success text > selection:focus-within,
row.spin.success text > selection:focus-within {
  background-color: alpha(${green}, 0.2);
}

row.entry.success text > cursor-handle > contents,
row.spin.success text > cursor-handle > contents {
  background-color: currentColor;
}

row.entry.success .dim-label, row.entry.success row.expander image.expander-row-arrow, row.expander row.entry.success image.expander-row-arrow, row.entry.success row.property > box.header > box.title > .title, row.entry.success .subtitle,
row.spin.success .dim-label,
row.spin.success row.expander image.expander-row-arrow,
row.expander row.spin.success image.expander-row-arrow,
row.spin.success row.property > box.header > box.title > .title,
row.spin.success .subtitle {
  opacity: 1;
}

row.entry.success .suggested-action,
row.spin.success .suggested-action {
  background-color: ${green};
  color: ${fg};
}

row.combo image.dropdown-arrow:disabled {
  filter: opacity(0.45);
}

row.combo listview.inline {
  background: none;
  border: none;
  box-shadow: none;
  color: inherit;
}

row.combo listview.inline, row.combo listview.inline:disabled {
  background: none;
  color: inherit;
}

row.combo popover > contents {
  min-width: 120px;
}

row.combo popover > contents .combo-searchbar {
  margin: 6px;
}

row.combo popover > contents .combo-searchbar + scrolledwindow > undershoot.top {
  box-shadow: none;
  background: linear-gradient(to bottom, alpha(alpha(${bg}, 0.12), 0.75), transparent 6px);
}

list.content > row, list.content > row.expander row.header,
list.boxed-list > row,
list.boxed-list > row.expander row.header, row.expander list.nested > row {
  border-bottom: 1px solid alpha(${bg}, 0.12);
}

list.content > row:not(:selected).activatable:hover, list.content > row.expander row.header:not(:selected).activatable:hover,
list.boxed-list > row:not(:selected).activatable:hover,
list.boxed-list > row.expander row.header:not(:selected).activatable:hover, row.expander list.nested > row:not(:selected).activatable:hover {
  background-color: alpha(currentColor, 0.08);
}

list.content > row:not(:selected).activatable:active, list.content > row.expander row.header:not(:selected).activatable:active,
list.boxed-list > row:not(:selected).activatable:active,
list.boxed-list > row.expander row.header:not(:selected).activatable:active, row.expander list.nested > row:not(:selected).activatable:active {
  background-color: alpha(currentColor, 0.12);
}

list.content > row:not(:selected).activatable.has-open-popup, list.content > row.expander row.header:not(:selected).activatable.has-open-popup,
list.boxed-list > row:not(:selected).activatable.has-open-popup,
list.boxed-list > row.expander row.header:not(:selected).activatable.has-open-popup, row.expander list.nested > row:not(:selected).activatable.has-open-popup {
  background-color: alpha(currentColor, 0.03);
}

row.expander {
  background: none;
  padding: 0px;
}

row.expander > box > list {
  background: none;
  color: inherit;
}

row.expander list.nested {
  color: inherit;
}

row.expander image.expander-row-arrow {
  transition: -gtk-icon-transform 200ms cubic-bezier(0, 0, 0.2, 1);
}

row.expander image.expander-row-arrow:dir(ltr) {
  margin-left: 6px;
}

row.expander image.expander-row-arrow:dir(rtl) {
  margin-right: 6px;
}

row.expander image.expander-row-arrow:dir(ltr) {
  -gtk-icon-transform: rotate(0.5turn);
}

row.expander image.expander-row-arrow:dir(rtl) {
  -gtk-icon-transform: rotate(-0.5turn);
}

row.expander image.expander-row-arrow:disabled {
  filter: opacity(0.45);
}

row.expander:checked image.expander-row-arrow {
  -gtk-icon-transform: rotate(0turn);
  opacity: 1;
}

row.expander:checked image.expander-row-arrow:not(:disabled) {
  color: ${accent};
}

.osd row.expander:checked image.expander-row-arrow:not(:disabled) {
  color: inherit;
}

list.content > row.expander,
list.boxed-list > row.expander {
  border: none;
}

list.content > row:first-child, list.content > row:first-child.expander row.header,
list.boxed-list > row:first-child,
list.boxed-list > row:first-child.expander row.header {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

list.content > row:last-child, list.content > row:last-child.expander:not(:checked), list.content > row:last-child.expander:not(:checked) row.header, list.content > row:last-child.expander:checked list.nested, list.content > row:last-child.expander:checked list.nested > row:last-child,
list.boxed-list > row:last-child,
list.boxed-list > row:last-child.expander:not(:checked),
list.boxed-list > row:last-child.expander:not(:checked) row.header,
list.boxed-list > row:last-child.expander:checked list.nested,
list.boxed-list > row:last-child.expander:checked list.nested > row:last-child {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0;
}

columnview > listview > row {
  padding: 0;
}

columnview > listview > row > cell {
  padding: 8px 6px;
}

columnview > listview > row > cell:not(:first-child) {
  border-left: 1px solid transparent;
}

columnview.column-separators > listview > row > cell {
  border-left-color: alpha(${bg}, 0.12);
}

columnview.data-table > listview > row > cell {
  padding-top: 2px;
  padding-bottom: 2px;
}

treeexpander {
  border-spacing: 6px;
}

columnview row:not(:selected) cell editablelabel:not(.editing):focus-within {
  outline: 2px solid alpha(currentColor, 0.06);
}

columnview row:not(:selected) cell editablelabel.editing:focus-within {
  outline: 2px solid ${accent};
}

columnview row:not(:selected) cell editablelabel.editing text selection {
  color: alpha(${accentfg}, 0.87);
  background-color: ${accent};
}

/*********************
 * App Notifications *
 *********************/
.app-notification {
  margin: 6px;
  border-spacing: 0;
  padding: 0;
  border: none;
  background-image: none;
}

.app-notification button.text-button:not(:disabled) {
  color: ${accent};
}

.app-notification > box > label {
  margin-left: 9px;
}

.app-notification.frame,
.app-notification border {
  border: none;
}

/*************
 * Expanders *
 *************/
expander {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1);
  min-width: 16px;
  min-height: 16px;
  color: alpha(${fg}, 0.7);
  -gtk-icon-source: -gtk-icontheme("pan-end-symbolic");
}

expander:dir(rtl) {
  -gtk-icon-source: -gtk-icontheme("pan-end-symbolic-rtl");
}

expander:hover, expander:active {
  color: ${fg};
}

expander:checked {
  -gtk-icon-source: -gtk-icontheme("pan-down-symbolic");
}

expander:disabled {
  color: alpha(${fg}, 0.32);
}

expander-widget > box > title {
  border-radius: 6px;
}

expander-widget > box > title:hover > expander {
  color: alpha(${fg}, 0.7);
}

.navigation-sidebar:not(decoration):not(window):drop(active):focus, .navigation-sidebar:not(decoration):not(window):drop(active),
placessidebar:not(decoration):not(window):drop(active):focus,
placessidebar:not(decoration):not(window):drop(active),
stackswitcher:not(decoration):not(window):drop(active):focus,
stackswitcher:not(decoration):not(window):drop(active),
expander-widget:not(decoration):not(window):drop(active):focus,
expander-widget:not(decoration):not(window):drop(active) {
  box-shadow: none;
}

/************
 * Calendar *
 ************/
calendar {
  padding: 0;
  border: 1px solid alpha(${bg}, 0.12);
  border-radius: 6px;
  color: ${fg};
}

calendar:disabled {
  color: alpha(${fg}, 0.5);
}

calendar:selected {
  border-radius: 6px;
}

calendar > header {
  padding: 3px;
  border-bottom: 1px solid alpha(${bg}, 0.12);
}

calendar > header > button {
  min-height: 24px;
}

calendar > grid {
  margin: 3px;
}

calendar > grid > label {
  border-radius: 6px;
  margin: 0;
}

calendar > grid > label.today:selected {
  box-shadow: none;
}

calendar > grid > label:focus {
  outline-style: none;
}

calendar > grid > label.day-number {
  padding: 6px;
}

calendar > grid > label.day-number.other-month {
  color: alpha(currentColor, 0.3);
}

/***********
 * Dialogs *
 ***********/
window.messagedialog .response-area button, window.dialog.message .dialog-action-area > button {
  border-radius: 0;
  min-height: 28px;
  padding: 6px 12px;
  margin: 0;
  border: none;
}

window.messagedialog .response-area button:first-child, window.dialog.message .dialog-action-area > button:first-child {
  border-radius: 0 0 0 12px;
}

window.messagedialog .response-area button:last-child, window.dialog.message .dialog-action-area > button:last-child {
  border-radius: 0 0 12px 0;
}

window.messagedialog .response-area button:only-child, window.dialog.message .dialog-action-area > button:only-child {
  border-radius: 0 0 12px 12px;
}

window.dialog.message.background {
  background-color: ${bg};
}

window.dialog.message box.dialog-vbox.vertical {
  margin-top: 6px;
  border-spacing: 24px;
}

window.dialog.message box.dialog-vbox.vertical > box.vertical {
  margin-bottom: 6px;
}

window.dialog.message box.dialog-vbox.vertical > box > box > box > label.title {
  font-weight: 800;
  font-size: 15pt;
}

window.dialog.message .titlebar {
  min-height: 24px;
  border-style: none;
  box-shadow: inset 0 1px alpha(${bg}, 0.1);
  background-color: ${bg};
  color: ${fg};
}

window.dialog.message .titlebar:backdrop {
  background-color: ${bg};
  color: ${fg};
}

window.dialog.message .dialog-action-area {
  border-top: 1px solid alpha(${bg}, 0.12);
  margin: 0;
  border-spacing: 0;
}

window.dialog.message .dialog-action-area > button {
  border: none;
}

window.dialog.message .dialog-action-area > button:not(:last-child) {
  border-right: 1px solid alpha(${bg}, 0.12);
}

window.dialog.message .dialog-action-area > button.suggested-action:not(:disabled) {
  color: ${accent};
}

window.dialog.message .dialog-action-area > button.destructive-action:not(:disabled) {
  color: ${red};
}

window.aboutdialog.background.csd scrolledwindow.frame, window.aboutdialog.background.csd scrolledwindow.frame > viewport.view, window.aboutdialog.background.csd scrolledwindow.frame > textview.view, window.aboutdialog.background.csd scrolledwindow.frame > textview.view > text {
  border-radius: 6px;
}

/********************
 * AdwMessageDialog *
 ********************/
window.messagedialog {
  background-color: ${bg};
  color: ${fg};
}

window.messagedialog .message-area {
  padding: 24px 30px;
  border-spacing: 10px;
}

window.messagedialog .response-area button {
  margin: 0;
}

window.messagedialog .response-area button:first-child {
  margin-left: 0;
}

window.messagedialog .response-area button:last-child {
  margin-right: 0;
}

window.messagedialog .response-area button.suggested {
  color: ${accent};
}

window.messagedialog .response-area button.destructive {
  color: ${red};
}

filechooser .dialog-action-box {
  border-top: 1px solid alpha(${bg}, 0.12);
}

filechooser #pathbarbox {
  border-bottom: 1px solid alpha(${bg}, 0.12);
  background-color: ${bg};
}

filechooser stack.view frame > border {
  border: none;
}

filechooserbutton > button > box {
  border-spacing: 6px;
}

filechooserbutton:drop(active) {
  box-shadow: none;
  border-color: transparent;
}

/***********
 * Sidebar *
 ***********/
.sidebar {
  border-style: none;
  background-color: ${bg};
}

.sidebar listview.view,
.sidebar list {
  background-color: transparent;
  color: inherit;
}

stacksidebar.sidebar:dir(ltr), stacksidebar.sidebar.left, stacksidebar.sidebar.left:dir(rtl) {
  box-shadow: inset -1px 0 alpha(${bg}, 0.12);
}

stacksidebar.sidebar:dir(rtl), stacksidebar.sidebar.right, stacksidebar.sidebar.right:dir(ltr) {
  box-shadow: inset 1px 0 alpha(${bg}, 0.12);
}

.sidebar-pane stacksidebar.sidebar, leaflet.unfolded > box > stacksidebar.sidebar {
  box-shadow: none;
}

stacksidebar list {
  padding: 6px;
  background-color: ${bg};
}

stacksidebar row {
  min-height: 24px;
  padding: 6px;
  border-radius: 6px;
}

stacksidebar row:selected {
  font-weight: 500;
}

stacksidebar row + row {
  margin-top: 4px;
}

stacksidebar row > label {
  padding-left: 6px;
  padding-right: 6px;
  color: inherit;
}

separator.sidebar {
  background-color: alpha(${bg}, 0.12);
  border-right: none;
}

separator.sidebar.selection-mode, .selection-mode separator.sidebar {
  background-color: alpha(${bg}, 0.12);
}

/**********************
 * Navigation Sidebar *
 **********************/
.navigation-sidebar {
  padding: 4.5px 0;
  border-right: none;
}

.navigation-sidebar, .navigation-sidebar.view, .navigation-sidebar.view:disabled {
  background-color: transparent;
  color: inherit;
}

.navigation-sidebar.background, .navigation-sidebar.background:disabled {
  background-color: ${bg};
  color: alpha(${fg}, 0.7);
}

.navigation-sidebar > separator {
  margin: 4.5px 0;
}

.navigation-sidebar > row {
  min-height: 24px;
  padding: 6px;
  border-radius: 6px;
  margin: 1.5px 6px;
}

/****************
 * File chooser *
 ****************/
row image.sidebar-icon {
  transition: color 75ms cubic-bezier(0, 0, 0.2, 1);
  color: alpha(${fg}, 0.7);
}

row image.sidebar-icon:disabled {
  color: alpha(${fg}, 0.32);
}

placessidebar > viewport.frame {
  border-style: none;
}

placessidebar list > separator {
  margin: 3px 0;
}

placessidebar row:selected {
  font-weight: 500;
}

placessidebar row image.sidebar-icon {
  color: inherit;
  opacity: 0.75;
}

placessidebar row image.sidebar-icon:dir(ltr) {
  padding-right: 8px;
}

placessidebar row image.sidebar-icon:dir(rtl) {
  padding-left: 8px;
}

placessidebar row label.sidebar-label {
  color: inherit;
}

placessidebar row label.sidebar-label:dir(ltr) {
  padding-right: 2px;
}

placessidebar row label.sidebar-label:dir(rtl) {
  padding-left: 2px;
}

placessidebar row.sidebar-placeholder-row {
  background-color: alpha(currentColor, 0.08);
}

placessidebar row.sidebar-new-bookmark-row {
  color: ${accent};
}

placessidebar row.sidebar-new-bookmark-row image.sidebar-icon {
  color: ${accent};
}

placessidebar row:drop(active) {
  /*background-color: alpha(currentColor, 0.08);*/
  background-color: ${accent};
}

placesview .server-list-button > image {
  transition: 200ms cubic-bezier(0, 0, 0.2, 1);
  -gtk-icon-transform: rotate(0turn);
}

placesview .server-list-button:checked > image {
  transition: 200ms cubic-bezier(0, 0, 0.2, 1);
  -gtk-icon-transform: rotate(-0.5turn);
}

placesview > actionbar > revealer > box > label {
  border-spacing: 6px;
}

/*********
 * Paned *
 *********/
paned > separator {
  min-width: 1px;
  min-height: 1px;
  -gtk-icon-source: none;
  border-style: none;
  background-color: transparent;
  background-image: image(${bg});
  background-size: 1px 1px;
  background-clip: content-box;
  box-shadow: none;
}

paned > separator.wide {
  min-width: 6px;
  min-height: 6px;
  background-color: ${bg};
  background-image: image(${bg}), image(${bg});
  background-size: 1px 1px, 1px 1px;
}

paned.horizontal > separator {
  background-repeat: repeat-y;
}

paned.horizontal > separator:dir(ltr) {
  margin: 0 -8px 0 0;
  padding: 0 8px 0 0;
  background-position: left;
}

paned.horizontal > separator:dir(rtl) {
  margin: 0 0 0 -8px;
  padding: 0 0 0 8px;
  background-position: right;
}

paned.horizontal > separator.wide {
  margin: 0;
  padding: 0;
  background-repeat: repeat-y, repeat-y;
  background-position: left, right;
}

paned.vertical > separator {
  margin: 0 0 -8px 0;
  padding: 0 0 8px 0;
  background-repeat: repeat-x;
  background-position: top;
}

paned.vertical > separator.wide {
  margin: 0;
  padding: 0;
  background-repeat: repeat-x, repeat-x;
  background-position: bottom, top;
}

/************
 * GtkVideo *
 ************/
video {
  background: black;
  border-radius: 6px;
}

video image.osd {
  min-width: 64px;
  min-height: 64px;
  border-radius: 9999px;
  border: none;
}

/**************
 * GtkInfoBar *
 **************/
infobar > revealer > box {
  padding: 6px;
  border-spacing: 12px;
  border-bottom: 1px solid alpha(${bg}, 0.12);
  box-shadow: none;
}

infobar.info > revealer > box, infobar.info:hover > revealer > box, infobar.info:backdrop > revealer > box {
  background-color: ${bg};
  color: ${fg};
}

infobar.info > revealer > box button.text-button:not(:disabled):not(.suggested-action):not(.destructive-action), infobar.info:hover > revealer > box button.text-button:not(:disabled):not(.suggested-action):not(.destructive-action), infobar.info:backdrop > revealer > box button.text-button:not(:disabled):not(.suggested-action):not(.destructive-action) {
  color: ${accent};
}

infobar.action > revealer > box, infobar.action:backdrop > revealer > box, infobar.question > revealer > box, infobar.question:backdrop > revealer > box {
  background-color: ${accent};
  color: alpha(${accentfg}, 0.87);
}

infobar.action > revealer > box button, infobar.action > revealer > box button:hover, infobar.action > revealer > box button:focus, infobar.action > revealer > box button:active, infobar.action > revealer > box button:checked, infobar.action > revealer > box button.text-button:not(:disabled), infobar.action:backdrop > revealer > box button, infobar.action:backdrop > revealer > box button:hover, infobar.action:backdrop > revealer > box button:focus, infobar.action:backdrop > revealer > box button:active, infobar.action:backdrop > revealer > box button:checked, infobar.action:backdrop > revealer > box button.text-button:not(:disabled), infobar.question > revealer > box button, infobar.question > revealer > box button:hover, infobar.question > revealer > box button:focus, infobar.question > revealer > box button:active, infobar.question > revealer > box button:checked, infobar.question > revealer > box button.text-button:not(:disabled), infobar.question:backdrop > revealer > box button, infobar.question:backdrop > revealer > box button:hover, infobar.question:backdrop > revealer > box button:focus, infobar.question:backdrop > revealer > box button:active, infobar.question:backdrop > revealer > box button:checked, infobar.question:backdrop > revealer > box button.text-button:not(:disabled) {
  color: alpha(${fg}, 0.87);
}

infobar.action > revealer > box *:link, infobar.action:backdrop > revealer > box *:link, infobar.question > revealer > box *:link, infobar.question:backdrop > revealer > box *:link {
  color: alpha(${fg}, 0.87);
}

infobar.action:hover > revealer > box, infobar.question:hover > revealer > box {
  background-color: ${accent};
}

infobar.warning > revealer > box, infobar.warning:backdrop > revealer > box {
  background-color: ${yellow};
  color: alpha(${fg}, 0.87);
}

infobar.warning > revealer > box button, infobar.warning > revealer > box button:hover, infobar.warning > revealer > box button:focus, infobar.warning > revealer > box button:active, infobar.warning > revealer > box button:checked, infobar.warning > revealer > box button.text-button:not(:disabled), infobar.warning:backdrop > revealer > box button, infobar.warning:backdrop > revealer > box button:hover, infobar.warning:backdrop > revealer > box button:focus, infobar.warning:backdrop > revealer > box button:active, infobar.warning:backdrop > revealer > box button:checked, infobar.warning:backdrop > revealer > box button.text-button:not(:disabled) {
  color: alpha(${fg}, 0.87);
}

infobar.warning > revealer > box *:link, infobar.warning:backdrop > revealer > box *:link {
  color: alpha(${fg}, 0.87);
}

infobar.warning:hover > revealer > box {
  background-color: ${orange};
}

infobar.error > revealer > box, infobar.error:backdrop > revealer > box {
  background-color: ${red};
  color: ${fg};
}

infobar.error > revealer > box button, infobar.error > revealer > box button:hover, infobar.error > revealer > box button:focus, infobar.error > revealer > box button:active, infobar.error > revealer > box button:checked, infobar.error > revealer > box button.text-button:not(:disabled), infobar.error:backdrop > revealer > box button, infobar.error:backdrop > revealer > box button:hover, infobar.error:backdrop > revealer > box button:focus, infobar.error:backdrop > revealer > box button:active, infobar.error:backdrop > revealer > box button:checked, infobar.error:backdrop > revealer > box button.text-button:not(:disabled) {
  color: ${fg};
}

infobar.error > revealer > box *:link, infobar.error:backdrop > revealer > box *:link {
  color: ${fg};
}

infobar.error:hover > revealer > box {
  background-color: ${red};
}

/************
 * Tooltips *
 ************/
tooltip {
  padding: 6px 12px;
  box-shadow: none;
  border: none;
}

tooltip.background {
  background-color: alpha(${bg}, 0.9);
  color: ${fg};
  box-shadow: 0 2px 3px -1px alpha(${fg}, 0.05), 0 4px 6px 0 apha(${fg}, 0.06), 0 1px 10px 0 apha(${fg}, 0.05);
  border-radius: 6px;
  margin: 2px 6px 8px 6px;
}

tooltip > box {
  border-spacing: 6px;
}

/*****************
 * Color Chooser *
 *****************/
colorswatch.top {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

colorswatch.top overlay {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

colorswatch.bottom {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

colorswatch.bottom overlay {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

colorswatch.left, colorswatch:first-child:not(.top) {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

colorswatch.left overlay, colorswatch:first-child:not(.top) overlay {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

colorswatch.right, colorswatch:last-child:not(.bottom) {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

colorswatch.right overlay, colorswatch:last-child:not(.bottom) overlay {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

colorswatch.dark {
  color: ${fg};
}

colorswatch.light {
  color: alpha(${fg}, 0.87);
}

colorchooser colorswatch:hover {
  transition: box-shadow 200ms ease-out;
  box-shadow: 0 0 0 2px ${accent};
}

colorswatch#add-color-button {
  border-radius: 6px 0 0 6px;
  color: ${fg};
}

colorswatch#add-color-button:only-child {
  border-radius: 6px;
}

colorswatch#add-color-button overlay {
  background-color: alpha(${bg}, 0.04);
}

colorswatch#add-color-button overlay:hover {
  background-color: alpha(${bg}, 0.12);
  box-shadow: none;
}

colorswatch#add-color-button overlay:active {
  background-color: alpha(${bg}, 0.3);
}

colorswatch:disabled {
  opacity: 0.5;
}

colorswatch:disabled overlay {
  box-shadow: none;
}

colorswatch#editor-color-sample {
  border-radius: 6px;
}

colorswatch#editor-color-sample overlay {
  border-radius: 6px;
}

colorswatch#editor-color-sample overlay:hover {
  box-shadow: 0 2px 3px -2px alpha(${fg}, 0.3), 0 1px 2px -1px apha(${fg}, 0.24), 0 1px 2px -1px apha(${fg}, 0.17);
}

colorchooser .popover.osd {
  transition: box-shadow 200ms ease-out;
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 alpha(${fg}, 0.15), 0 3px 3px 0 apha(${fg}, 0.18), 0 3px 6px 0 apha(${fg}, 0.12), inset 0 1px apha(${bg}, 0.1);
  background-color: ${bg};
}

colorchooser .popover.osd:backdrop {
  box-shadow: 0 4px 3px -3px alpha(${fg}, 0.2), 0 2px 2px -1px apha(${fg}, 0.24), 0 1px 3px 0 apha(${fg}, 0.12), inset 0 1px apha(${bg}, 0.1);
}

/********
 * Misc *
 ********/
.content-view {
  background-color: ${bg};
}

/**********************
 * Window Decorations *
 **********************/
window {
  border: none;
}

window.csd {
  border-radius: 12px;
  outline-offset: -1px;
  outline: 1px solid alpha(${bg}, 0.1);
  margin: 0;
  transition: none;
  box-shadow: 0 1px 3px 0 alpha(${fg}, 0.2), 0 15px 16px 2px apha(${fg}, 0.14), 0 6px 18px 5px apha(${fg}, 0.12), 0 0 36px transparent, 0 0 0 1px apha(${fg}, 0.75);
}

window.csd:backdrop {
  transition: box-shadow 200ms ease-out;
  box-shadow: 0 1px 2px 0 alpha(${fg}, 0.15), 0 3px 3px 0 apha(${fg}, 0.18), 0 3px 6px 0 apha(${fg}, 0.12), 0 0 36px transparent, 0 0 0 1px apha(${fg}, 0.75);
}

window.csd.maximized, window.csd.fullscreen, window.csd.tiled, window.csd.tiled-top, window.csd.tiled-right, window.csd.tiled-bottom, window.csd.tiled-left {
  border-radius: 0;
  transition: none;
}

window.csd.maximized, window.csd.fullscreen {
  box-shadow: none;
  outline: none;
}

window.solid-csd {
  margin: 0;
  padding: 2px;
  border-radius: 0;
  background-color: ${bg};
  border: 1px solid ${bg};
}

window.solid-csd:backdrop {
  background-color: ${bg};
}

window.ssd {
  box-shadow: 0 0 0 1px alpha(${bg}, 0.12);
}

windowcontrols > button:not(.suggested-action):not(.destructive-action) {
  min-height: 16px;
  min-width: 16px;
  padding: 10px 0;
  margin-left: 4px;
  margin-right: 4px;
}

windowcontrols > button.minimize:not(.suggested-action):not(.destructive-action), windowcontrols > button.maximize:not(.suggested-action):not(.destructive-action), windowcontrols > button.close:not(.suggested-action):not(.destructive-action) {
  color: transparent;
  background: none;
}

windowcontrols > button.minimize:hover:not(.suggested-action):not(.destructive-action), windowcontrols > button.minimize:active:not(.suggested-action):not(.destructive-action), windowcontrols > button.maximize:hover:not(.suggested-action):not(.destructive-action), windowcontrols > button.maximize:active:not(.suggested-action):not(.destructive-action), windowcontrols > button.close:hover:not(.suggested-action):not(.destructive-action), windowcontrols > button.close:active:not(.suggested-action):not(.destructive-action) {
  box-shadow: none;
}

windowcontrols > button.minimize:active:not(.suggested-action):not(.destructive-action) > image, windowcontrols > button.maximize:active:not(.suggested-action):not(.destructive-action) > image, windowcontrols > button.close:active:not(.suggested-action):not(.destructive-action) > image {
  box-shadow: inset 0 0 0 9999px alpha(${fg}, 0.25);
}

windowcontrols > button.minimize:hover:not(.suggested-action):not(.destructive-action), windowcontrols > button.minimize:active:not(.suggested-action):not(.destructive-action), windowcontrols > button.maximize:hover:not(.suggested-action):not(.destructive-action), windowcontrols > button.maximize:active:not(.suggested-action):not(.destructive-action), windowcontrols > button.close:hover:not(.suggested-action):not(.destructive-action), windowcontrols > button.close:active:not(.suggested-action):not(.destructive-action) {
  color: alpha(${fg}, 0.5);
}

windowcontrols > button.minimize:backdrop:not(.suggested-action):not(.destructive-action) > image, windowcontrols > button.maximize:backdrop:not(.suggested-action):not(.destructive-action) > image, windowcontrols > button.close:backdrop:not(.suggested-action):not(.destructive-action) > image {
  background-color: alpha(${bg}, 0.3);
}

windowcontrols > button.minimize:backdrop:hover:not(.suggested-action):not(.destructive-action), windowcontrols > button.minimize:backdrop:active:not(.suggested-action):not(.destructive-action), windowcontrols > button.maximize:backdrop:hover:not(.suggested-action):not(.destructive-action), windowcontrols > button.maximize:backdrop:active:not(.suggested-action):not(.destructive-action), windowcontrols > button.close:backdrop:hover:not(.suggested-action):not(.destructive-action), windowcontrols > button.close:backdrop:active:not(.suggested-action):not(.destructive-action) {
  color: alpha(${fg}, 0.5);
}

windowcontrols > button.minimize:not(.suggested-action):not(.destructive-action) > image {
  background-color: ${yellow};
}

windowcontrols > button.minimize:active:not(.suggested-action):not(.destructive-action) > image {
  background-color: #f2dfb7;
}

windowcontrols > button.maximize:not(.suggested-action):not(.destructive-action) > image {
  background-color: ${green};
}

windowcontrols > button.maximize:active:not(.suggested-action):not(.destructive-action) > image {
  background-color: #bce3b0;
}

windowcontrols > button.close:not(.suggested-action):not(.destructive-action) > image {
  background-color: ${orange};
}

windowcontrols > button.close:active:not(.suggested-action):not(.destructive-action) > image {
  background-color: ${orange};
}

windowcontrols {
  border-spacing: 6px;
}

windowcontrols:not(.empty).start:dir(ltr), windowcontrols:not(.empty).end:dir(rtl) {
  margin-right: 6px;
  margin-left: 6px;
}

windowcontrols:not(.empty).start:dir(rtl), windowcontrols:not(.empty).end:dir(ltr) {
  margin-left: 6px;
  margin-right: 6px;
}

windowcontrols > button:not(.suggested-action):not(.destructive-action) > image {
  border-radius: 100%;
  padding: 0;
}

.view:selected, iconview:selected, gridview > child:selected, columnview.view:selected,
treeview.view:selected, calendar:selected, calendar > grid > label.day-number:selected {
  background-color: alpha(${accent}, 0.75);
}

flowbox > flowboxchild:selected, calendar > grid > label.today {
  color: ${accentfg};
  background-color: alpha(${accent}, 0.2);
}

textview text selection:focus, textview text selection, label > selection,
entry > text > selection, spinbutton > text > selection,
entry headerbar popover.background entry > text > selection,
headerbar popover.background entry entry > text > selection, calendar > grid > label.today:selected {
  color: alpha(${accentfg}, 0.87);
  background-color: ${accent};
}

/**********************
 * Touch Copy & Paste *
 **********************/
cursor-handle {
  color: ${accent};
  -gtk-icon-source: -gtk-recolor(url("assets/scalable/cursor-handle-symbolic.svg"));
}

cursor-handle.insertion-cursor:dir(ltr), cursor-handle.insertion-cursor:dir(rtl) {
  padding-top: 6px;
}

shortcuts-section {
  margin: 20px;
}

.shortcuts-search-results {
  margin: 20px;
  border-spacing: 24px;
}

shortcut {
  border-spacing: 6px;
}

shortcut > .keycap {
  min-width: 12px;
  min-height: 26px;
  margin-top: 2px;
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  border: solid 1px alpha(${bg}, 0.12);
  border-radius: 7px;
  box-shadow: inset 0 -2px alpha(${bg}, 0.12);
  background-color: ${bg};
  color: ${fg};
  font-size: smaller;
}

:not(decoration):not(window):drop(active) {
  caret-color: ${accent};
}

stackswitcher {
  min-height: 0;
  padding: 3px;
  border-radius: 9px;
  background-color: alpha(${bg}, 0.04);
  border: none;
}

stackswitcher.linked:not(.vertical) > button:not(.suggested-action):not(.destructive-action) {
  margin: 0 0;
  background-color: transparent;
  border-radius: 6px;
  padding: 3px 10px;
}

stackswitcher.linked:not(.vertical) > button:not(.suggested-action):not(.destructive-action).text-button {
  min-width: 100px;
}

stackswitcher.linked:not(.vertical) > button:not(.suggested-action):not(.destructive-action):focus:not(:hover):not(:checked) {
  box-shadow: none;
}

stackswitcher.linked:not(.vertical) > button:not(.suggested-action):not(.destructive-action):hover {
  background-color: alpha(currentColor, 0.08);
  color: ${fg};
  outline: 0 solid transparent;
}

stackswitcher.linked:not(.vertical) > button:not(.suggested-action):not(.destructive-action):active {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), background-size 0ms, background-image 0ms, border 0ms;
  animation: ripple 225ms cubic-bezier(0, 0, 0.2, 1) forwards;
  background-image: radial-gradient(circle, alpha(currentColor, 0.08) 10%, transparent 0%);
  background-size: 0% 0%;
  background-color: alpha(currentColor, 0.08);
  color: ${fg};
  outline: 0 solid transparent;
}

stackswitcher.linked:not(.vertical) > button:not(.suggested-action):not(.destructive-action):checked {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), border-image 225ms cubic-bezier(0, 0, 0.2, 1), background-size 0ms, background-image 0ms, background-color 0ms;
  background-color: alpha(${accent}, 0.85);
  color: ${accentfg};
}

stackswitcher button.text-button {
  min-width: 100px;
}

stackswitcher button.circular,
stackswitcher button.text-button.circular {
  min-width: 36px;
  min-height: 36px;
  padding: 0;
}

/*************
 * App Icons *
 *************/
.lowres-icon {
  -gtk-icon-shadow: 0 1px 2px alpha(${fg}, 0.1);
}

.icon-dropshadow {
  -gtk-icon-shadow: 0 1px 12px alpha(${fg}, 0.05), 0 1px 6px apha(${fg}, 0.1);
}

/*********
 * Emoji *
 *********/
popover.emoji-picker {
  padding: 0;
}

popover.emoji-picker > contents {
  padding: 0;
}

.emoji-searchbar {
  padding: 6px;
  border-spacing: 6px;
  border-bottom: 1px solid alpha(${bg}, 0.12);
  background: none;
}

.emoji-searchbar entry text {
  background: none;
  box-shadow: none;
}

.emoji-toolbar {
  padding: 0;
  border-spacing: 3px;
  border-top: 1px solid alpha(${bg}, 0.12);
  background: none;
}

button.emoji-section {
  margin: 0;
  padding: 6px;
  border-radius: 6px;
}

button.emoji-section:checked {
  color: ${accent};
}

popover.emoji-picker emoji {
  font-size: x-large;
  padding: 6px;
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: 6px;
}

popover.emoji-picker emoji:focus, popover.emoji-picker emoji:hover {
  background: alpha(currentColor, 0.08);
}

emoji-completion-row {
  min-height: 28px;
  padding: 0 12px;
}

emoji-completion-row > box {
  border-spacing: 6px;
  padding: 2px 6px;
}

emoji-completion-row:focus, emoji-completion-row:hover,
emoji-completion-row emoji:hover, emoji-completion-row emoji:focus {
  background-color: alpha(currentColor, 0.08);
  color: ${fg};
}

popover.entry-completion > contents {
  padding: 0;
}

.nautilus-window placesview label {
  color: alpha(${fg}, 0.7);
}

.nautilus-window .floating-bar {
  min-height: 32px;
  padding: 0;
  margin: 6px;
  border-style: none;
  border-radius: 6px;
  background-color: ${accent};
  color: alpha(${accentfg}, 0.87);
  box-shadow: 0 3px 3px -2px alpha(${accentfg}, 0.05), 0 2px 3px -1px apha(${accentfg}, 0.06), 0 1px 4px 0 apha(${accentfg}, 0.05);
}

.nautilus-window .floating-bar button {
  margin: 4px;
  color: alpha(${accentfg}, 0.87);
}

#NautilusQueryEditor > menubutton > button.image-button {
  min-width: 24px;
  min-height: 24px;
}

#NautilusQueryEditor > text, #NautilusQueryEditor > box, #NautilusQueryEditor > menubutton > button.image-button {
  margin: 6px 0;
}

#NautilusQueryEditorTag {
  background-color: alpha(${bg}, 0.12);
}

#NautilusQueryEditorTag > button.image-button {
  margin: 0;
  padding: 0;
}

#NautilusPathBar {
  background-color: alpha(${bg}, 0.04);
  border-radius: 6px;
  margin: 6px 0;
}

.content-pane #NautilusPathBar {
  background-color: alpha(${bg}, 0.04);
}

#NautilusPathButton {
  margin: 0 3px;
  border-radius: 6px;
}

#NautilusPathButton.current-dir {
  color: ${fg};
}

#NautilusPathButton.current-dir:hover, #NautilusPathButton.current-dir:active {
  background: none;
  box-shadow: none;
}

.content-pane #NautilusPathButton.current-dir {
  color: ${fg};
}

#NautilusPathButton:first-child {
  margin-left: 0;
}

#NautilusViewCell clamp box {
  margin: 0;
  border-spacing: 0;
}

navigation-view-page > toolbarview > scrolledwindow > viewport > clamp > box.medium > box > stack > button {
  margin-top: 12px;
}

window.dialog > box > stack > box > box > notebook.frame {
  border-width: 0 0 0 1px;
  border-radius: 0;
}

.background-thumbnail > button.remove-button {
  margin: 6px;
}

.display-container.card {
  border-radius: 0;
  box-shadow: none;
  border-width: 0 0 1px 0;
}

.display-container .history-view {
  background-color: ${bg};
}

.display-container #displayitem {
  padding: 0 12px 8px 0;
  font-size: 1.4em;
  border-top: 1px solid alpha(${bg}, 0.12);
}

.math-buttons button {
  font-size: 1.1em;
  padding: 2px 6px;
}

.math-buttons button.text-button {
  padding-left: 16px;
  padding-right: 16px;
}

leaflet button.number-button {
  background-color: alpha(${bg}, 0.1);
}

leaflet button.number-button:hover {
  background-color: alpha(${bg}, 0.2);
}

leaflet button.number-button:active {
  background-color: alpha(${bg}, 0.3);
}

label.primary-label, label.month-name, label.secondary-label {
  font-size: 16pt;
  font-weight: bold;
  padding: 12px;
}

label.primary-label, label.month-name {
  color: ${accent};
}

label.secondary-label {
  color: alpha(${fg}, 0.5);
}

calendar-view {
  font-size: 10pt;
}

calendar-view:selected {
  color: ${accent};
  font-weight: bold;
}

calendar-view.header,
label.header {
  font-size: 10pt;
  font-weight: bold;
  color: alpha(${fg}, 0.5);
}

calendar-view.current,
weekgrid.current {
  background-color: alpha(${accent}, 0.3);
}

popover.events {
  background-color: ${bg};
  padding: 0;
}

popover.events box {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

popover.events list {
  background-color: ${bg};
  border-radius: 6px;
}

popover.events scrolledwindow {
  border-width: 0;
}

popover.events button {
  border-radius: 6px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-style: solid none none;
  box-shadow: none;
}

event {
  margin: 1px;
  font-size: 0.9rem;
}

event widget.content {
  margin: 4px;
}

event.timed, event:not(.slanted):not(.slanted-start):not(.slanted-end) {
  border-radius: 6px;
}

event.timed widget.edge {
  border-radius: 3px;
  min-width: 5px;
}

event.slanted-start, event.slanted-end:dir(rtl) {
  padding-left: 16px;
  border-radius: 0 3px 3px 0;
}

event.slanted-end, event.slanted-start:dir(rtl) {
  padding-right: 16px;
  border-radius: 3px 0 0 3px;
}

event:not(.timed).color-dark {
  color: ${fg};
  outline-color: alpha(${fg}, 0.3);
}

event.timed, event:not(.timed).color-light {
  color: alpha(black, 0.75);
  outline-color: alpha(${bg}, 0.5);
}

popover.event-popover,
popover.event-popover > contents {
  padding: 0;
}

.search-viewport {
  background-color: ${bg};
}

.calendar-list {
  background-color: transparent;
}

.calendar-list > list {
  border-radius: 4px;
}

.calendar-color-image {
  -gtk-icon-filter: none;
}

image.calendar-color-image,
button:active:not(:backdrop) .calendar-color-image,
button:checked:not(:backdrop) .calendar-color-image,
.calendars-list .calendar-color-image:not(:backdrop):not(:disabled),
.calendar-list .calendar-color-image:not(:backdrop):not(:disabled),
.sources-button:not(:backdrop):not(:disabled) .calendar-color-image {
  -gtk-icon-shadow: 0 1px alpha(black, 0.1);
}

datechooser navigator {
  margin-right: 6px;
  margin-left: 6px;
  margin-bottom: 6px;
}

datechooser navigator label {
  font-weight: bold;
}

datechooser navigator button.flat,
datechooser navigator button.toggle,
datechooser navigator button.image-button {
  min-height: 36px;
  min-width: 36px;
  padding: 0;
}

datechooser .weeknum, datechooser .weekday {
  color: alpha(${fg}, 0.5);
  font-size: smaller;
}

datechooser button.day {
  font-size: 10pt;
  font-weight: normal;
  margin: 3px;
  padding: 0;
  min-height: 36px;
  min-width: 36px;
  transition: none;
}

datechooser button.day dot {
  background-color: ${bg};
  border-radius: 50%;
  min-height: 3px;
  min-width: 3px;
}

datechooser button.day:selected, datechooser button.day.today:selected {
  background-color: ${accent};
  color: alpha(${accentfg}, 0.87);
  font-weight: bold;
}

datechooser button.day:selected dot, datechooser button.day.today:selected dot {
  background-color: alpha(${accent}, 0.87);
}

datechooser button.day.today {
  color: ${accent};
}

datechooser button.day.today dot {
  background-color: ${accent};
}

datechooser button.day.other-month:not(:hover), datechooser button.day.other-month:backdrop {
  color: alpha(currentColor, 0.1);
}

datechooser button.day.other-month:not(:hover) dot, datechooser button.day.other-month:backdrop dot {
  background-color: alpha(currentColor, 0.1);
}

datechooser button.day.other-month:hover:not(:backdrop) {
  color: alpha(${fg}, 0.5);
}

datechooser button.day.other-month:hover:not(:backdrop) dot {
  background-color: alpha(${bg}, 0.5);
}

.week-header {
  padding: 0;
}

.week-header > box:first-child {
  border-bottom: 1px solid alpha(${bg}, 0.12);
}

.week-header .week-number {
  font-size: 16pt;
  font-weight: bold;
  padding: 12px 12px 18px 12px;
  color: alpha(${fg}, 0.3);
}

.week-header.week-temperature {
  font-size: 10pt;
  font-weight: bold;
  color: alpha(${fg}, 0.5);
}

.week-header.lines {
  color: alpha(${fg}, 0.12);
}

weekhourbar > label {
  font-size: 10pt;
  padding: 4px 6px;
}

.week-view .lines {
  color: alpha(${fg}, 0.12);
}

weekgrid > widget.now-strip {
  background-color: alpha(${accent}, 0.8);
  margin: 0 0 0 1px;
  min-height: 3px;
}

weekgrid:selected, weekgrid.dnd,
.week-header:selected,
.week-header.dnd {
  background-color: alpha(${accent}, 0.25);
}

monthcell {
  border: solid 1px alpha(${bg}, 0.12);
  border-width: 1px 0 0 1px;
  background-color: transparent;
  transition: background-color 200ms;
}

monthcell:hover:not(.out-of-month):not(.today) {
  background-color: ${bg};
  transition: background-color 200ms;
  color: ${fg};
}

monthcell:selected {
  background-color: alpha(${accent}, 0.1);
}

monthcell:selected:hover {
  background-color: alpha(${accent}, 0.2);
}

monthcell:selected label.day-label {
  font-weight: bold;
}

monthcell:nth-child(7n + 1) {
  border-left-width: 0;
}

monthcell.today {
  background-color: alpha(${accent}, 0.2);
}

monthcell.today:hover {
  background-color: alpha(${accent}, 0.3);
  color: ${accentfg};
}

monthcell.today:selected {
  background-color: alpha(${accent}, 0.25);
}

monthcell.today:selected:hover {
  background-color: alpha(${accent}, 0.35);
}

monthcell label {
  color: ${fg};
  font-size: 0.9rem;
}

monthcell label.day-label {
  font-size: 1rem;
}

monthcell.out-of-month {
  background-color: alpha(${bg}, 0.04);
}

monthcell.out-of-month label {
  color: alpha(${fg}, 0.7);
}

monthcell button {
  padding: 0 6px;
  border-radius: 0;
  border-bottom: none;
  border-right: none;
}

monthpopover > box {
  margin: 0;
  padding: 0;
  background-color: transparent;
}

.notes-section box > textview {
  border-radius: 6px;
  padding: 6px;
}

.notes-section box > textview > text {
  background: none;
}

agenda-view list > row {
  padding: 2px 12px;
}

agenda-view list > label {
  padding: 6px 12px;
}

agenda-view > scrolledwindow > viewport > list.background {
  background-color: transparent;
}

label.no-events {
  font-style: italic;
}

searchbutton > popover > arrow {
  background: none;
  border: none;
}

datechooser {
  padding: 6px;
}

datechooser .current-week {
  background: alpha(${bg}, 0.7);
  color: ${fg};
  border-radius: 6px;
}

menubutton.sources-button {
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 0;
  border-top-style: none;
  border-bottom-style: none;
}

menubutton.sources-button:hover:not(:backdrop) {
  background-image: none;
  text-shadow: none;
}

menubutton.sources-button > button {
  border-radius: 0;
}

menubutton.sources-button > button .title {
  font-size: 10pt;
  font-weight: normal;
  padding: 0 6px;
}

menubutton.sources-button > button .subtitle {
  font-size: 8pt;
  padding: 0 6px;
}

menubutton.sources-button > button .calendar-color-image {
  -gtk-icon-size: 12px;
}

menubutton stack > box {
  border-spacing: 6px;
}

.topbar headerbar menubutton.sources-button > button {
  border-radius: 0 0 6px 6px;
}

.contacts-contact-list list.navigation-sidebar {
  background: none;
}

.details-page {
  margin: 24px 0px;
}

.installed-overlay-box {
  font-size: smaller;
  background-color: ${accent};
  border-radius: 0;
  color: alpha(${accentfg}, 0.87);
  text-shadow: 0 1px 0 alpha(${accentfg}, 0.2);
}

screenshot-carousel box.frame {
  border-width: 1px 0;
  border-radius: 0;
}

screenshot-carousel button,
.featured-carousel button {
  margin: 12px;
}

.screenshot-image-main .image1,
.screenshot-image-main .image2 {
  margin-top: 6px;
  margin-bottom: 12px;
  margin-left: 6px;
  margin-right: 6px;
}

.app-tile-label {
  font-size: 105%;
}

.review-textbox {
  padding: 6px;
}

.origin-rounded-box {
  background-color: alpha(${bg}, 0.12);
  border-radius: 9999px;
  padding: 4px;
}

.origin-beta {
  color: ${yellow};
}

.origin-button > button {
  padding: 3px 9px;
}

.card flowboxchild.card {
  border: none;
  box-shadow: none;
  padding: 0;
  background: none;
}

.category-tile.card {
  padding: 21px;
  border: none;
  border-radius: 6px;
  min-width: 140px;
  font-weight: 900;
  font-size: larger;
  box-shadow: 0 3px 3px -2px alpha(${fg}, 0.05), 0 2px 3px -1px apha(${fg}, 0.06), 0 1px 4px 0 apha(${fg}, 0.05);
}

.category-tile.card.category-tile-iconless {
  padding: 9px 15px;
  min-width: 130px;
  font-size: 105%;
  font-weight: normal;
  box-shadow: none;
  background-color: alpha(${bg}, 0.04);
}

.category-tile.card.category-create {
  background: linear-gradient(180deg, ${magenta} 0%, ${blue} 100%);
  color: ${fg};
}

.category-tile.card.category-create:hover {
  background: linear-gradient(180deg, shade(${magenta}, 1.07) 0%, shade(${blue}, 1.1) 100%);
  color: ${fg};
}

.category-tile.card.category-create:active {
  background: linear-gradient(180deg, shade(${magenta}, 0.95) 0%, shade(${blue}, 0.95) 100%);
  color: ${fg};
}

.category-tile.card.category-develop {
  background: ${bg};
  color: ${fg};
}

.category-tile.card.category-develop:hover {
  background: shade(${bg}, 1.2);
  color: ${fg};
}

.category-tile.card.category-develop:active {
  background-color: shade(${bg}, 0.95);
  color: ${fg};
}

.category-tile.card.category-learn {
  background: linear-gradient(180deg, ${green} 30%, ${green} 100%);
  color: ${fg};
}

.category-tile.card.category-learn:hover {
  background: linear-gradient(180deg, shade(${green}, 1.06) 30%, shade(${green}, 1.06) 100%);
  color: ${fg};
}

.category-tile.card.category-learn:active {
  background: linear-gradient(180deg, shade(${green}, 0.95) 30%, shade(${green}, 0.95) 100%);
  color: ${fg};
}

.category-tile.card.category-play {
  background: linear-gradient(75deg, ${yellow} 0%, ${magenta} 50%, ${blue} 100%);
  color: ${blue};
}

.category-tile.card.category-play:hover {
  background: linear-gradient(75deg, shade(${yellow}, 1.07) 0%, shade(${magenta}, 1.07) 50%, shade(${blue}, 1.07) 100%);
  color: ${blue};
}

.category-tile.card.category-play:active {
  background: linear-gradient(75deg, shade(${yellow}, 0.97) 0%, shade(${magenta}, 0.95) 50%, shade(${blue}, 1.07) 100%);
  color: ${blue};
}

.category-tile.card.category-socialize {
  background: linear-gradient(90deg, ${red} 0%, ${orange} 100%);
  color: alpha(${fg}, 0.7);
}

.category-tile.card.category-socialize:hover {
  background: linear-gradient(90deg, shade(${red}, 1.08) 0%, shade(${orange}, 1.08) 100%);
}

.category-tile.card.category-socialize:active {
  background: linear-gradient(90deg, shade(${red}, 0.95) 0%, shade(${orange}, 0.95) 100%);
}

.category-tile.card.category-work {
  padding: 1px;
  /* FIXME: work around https://gitlab.gnome.org/GNOME/gtk/-/issues/4324 */
  color: ${blue};
  background-color: ${yellow};
  background-image: linear-gradient(alpha(${bg}, 0.12) 1px, transparent 1px), linear-gradient(90deg, apha(${bg}, 0.12) 1px, transparent 1px);
  background-size: 10px 10px, 10px 10px;
  background-position: -1px -4px, center -1px;
}

.category-tile.card.category-work:hover {
  color: ${blue};
  background-color: ${yellow};
  background-image: linear-gradient(alpha(${bg}, 0.12) 1px, transparent 1px), linear-gradient(90deg, apha(${bg}, 0.12) 1px, transparent 1px);
}

.category-tile.card.category-work:active {
  color: ${blue};
  background-color: ${yellow};
  background-image: linear-gradient(alpha(${bg}, 0.12) 1px, transparent 1px), linear-gradient(90deg, apha(${bg}, 0.12) 1px, transparent 1px);
}

clamp.medium .category-tile:not(.category-tile-iconless),
clamp.large .category-tile:not(.category-tile-iconless) {
  font-size: larger;
}

.featured-tile {
  padding: 0;
  box-shadow: none;
  color: ${fg};
}

.featured-tile label.title-1 {
  margin-top: 6px;
  margin-bottom: 6px;
}

.featured-tile.narrow label.title-1 {
  font-size: 16pt;
}

.application-details-infobar, .application-details-infobar.info {
  background-color: alpha(${bg}, 0.04);
  color: ${fg};
  border: 1px solid alpha(${bg}, 0.12);
}

.application-details-infobar.warning {
  background-color: ${yellow};
  color: alpha(${fg}, 0.87);
  border: 1px solid alpha(${fg}, 0.12);
}

@keyframes install-progress-unknown-move {
  0% {
    background-position: 0%;
  }
  50% {
    background-position: 100%;
  }
  100% {
    background-position: 0%;
  }
}

.application-details-description .button {
  padding-left: 24px;
  padding-right: 24px;
}

.install-progress {
  background-image: linear-gradient(to top, ${accent} 2px, alpha(${accent}, 0) 2px);
  background-repeat: no-repeat;
  background-position: 0 bottom;
  background-size: 0;
  transition: none;
}

.install-progress:dir(rtl) {
  background-position: 100% bottom;
}

.review-row > * {
  margin: 12px;
}

.review-row button {
  font-size: smaller;
}

.review-row .vote-buttons button {
  margin-right: -1px;
}

.review-row .vote-buttons button:not(:first-child) {
  border-image: linear-gradient(to top, alpha(${bg}, 0.12), apha(${bg}, 0.12)) 0 0 0 1/5px 0 5px 1px;
}

.review-row .vote-buttons button:hover,
.review-row .vote-buttons button:active,
.review-row .vote-buttons button:hover + button,
.review-row .vote-buttons button:active + button {
  border-image: none;
}

review-bar {
  color: alpha(${fg}, 0.5);
  background-image: none;
  background-color: alpha(${bg}, 0.3);
}

.review-histogram star-image {
  color: alpha(${fg}, 0.5);
}

.version-arrow-label {
  font-size: x-small;
}

.overview-more-button {
  font-size: smaller;
  padding: 0 16px;
}

.app-row-origin-text {
  font-size: smaller;
}

.app-listbox-header {
  padding: 6px;
  border-bottom: 1px solid alpha(${bg}, 0.12);
}

.image-list {
  background-color: transparent;
}

box.star {
  background-color: transparent;
  background-image: none;
}

button.star {
  outline-offset: 0;
  background-color: transparent;
  background-image: none;
  border-image: none;
  border-radius: 0;
  border-width: 0;
  padding: 0;
  box-shadow: none;
  outline-offset: -1px;
}

star-image {
  color: ${yellow};
}

.dimmer-label {
  opacity: 0.25;
}

.update-failed-details {
  font-family: Monospace;
  font-size: smaller;
  padding: 16px;
}

.upgrade-banner {
  padding: 0px;
  border-radius: 6px;
  border: none;
}

.upgrade-banner-background {
  background: linear-gradient(to bottom, ${green}, ${blue});
  color: ${fg};
}

.upgrade-buttons #button_upgrades_install {
  padding-left: 16px;
  padding-right: 16px;
}

scrolledwindow.list-page > viewport > clamp > box {
  margin: 24px 12px;
  border-spacing: 24px;
}

.update-preferences preferencesgroup > box > box {
  margin-top: 18px;
}

.section > label:not(:first-child) {
  margin-top: 6px;
}

.section > box:not(:first-child) {
  margin-top: 12px;
}

clamp.status-page {
  margin: 36px 12px;
}

clamp.status-page .iconbox {
  min-height: 128px;
  min-width: 128px;
}

clamp.status-page .icon {
  color: alpha(${fg}, 0.5);
  min-height: 32px;
  min-width: 32px;
}

clamp.status-page .icon:not(:last-child) {
  margin-bottom: 36px;
}

clamp.status-page .title:not(:last-child) {
  margin-bottom: 12px;
}

app-context-bar .context-tile {
  border: 1px solid alpha(${bg}, 0.12);
  background-color: transparent;
  border-radius: 0;
  padding: 24px 12px 21px 12px;
  outline-offset: 5px;
  transition-property: outline, outline-offset, background-image;
  border-bottom: none;
  border-right: none;
}

app-context-bar .context-tile:hover {
  background-image: none;
  background-color: alpha(currentColor, 0.08);
}

app-context-bar .context-tile.keyboard-activating, app-context-bar .context-tile:active {
  background-color: alpha(currentColor, 0.12);
}

app-context-bar .context-tile:focus:focus-visible {
  outline-offset: -1px;
}

app-context-bar.horizontal box:first-child .context-tile:first-child, app-context-bar.vertical .context-tile:first-child {
  border-left: none;
}

app-context-bar.horizontal .context-tile, app-context-bar.vertical box:first-child .context-tile {
  border-top: none;
}

app-context-bar > box:not(:first-child) > button.flat {
  border-radius: 0;
}

app-context-bar > box:not(:first-child) > button.flat:last-child {
  border-radius: 0 6px 6px 0;
}

app-context-bar > box:first-child > button.flat {
  border-radius: 0;
}

app-context-bar > box:first-child > button.flat:first-child {
  border-radius: 6px 0 0 6px;
}

app-context-bar > box > button.flat {
  border-left-color: alpha(${bg}, 0.12);
}

carousel.card {
  border: none;
  background-color: alpha(${bg}, 0.04);
}

.context-tile-lozenge {
  min-height: 28px;
  min-width: 28px;
  padding: 6px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 9999px;
}

.context-tile-lozenge.large {
  font-size: 24px;
  padding: 16px;
  min-width: 24px;
  /* 60px minus the left and right padding */
  min-height: 24px;
  /* 60px minus the top and bottom padding */
}

.context-tile-lozenge.wide-image image {
  margin-top: -28px;
  margin-bottom: -28px;
}

.context-tile-lozenge image {
  -gtk-icon-style: symbolic;
}

.context-tile-lozenge.grey {
  color: ${fg};
  background-color: alpha(${bg}, 0.12);
}

.context-tile-lozenge.green, .context-tile-lozenge.details-rating-0 {
  color: ${green};
  background-color: alpha(${green}, 0.15);
}

.context-tile-lozenge.blue, .context-tile-lozenge.details-rating-5 {
  color: ${blue};
  background-color: alpha(${blue}, 0.15);
}

.context-tile-lozenge.yellow, .context-tile-lozenge.details-rating-12 {
  color: ${orange};
  background-color: alpha(${yellow}, 0.15);
}

.context-tile-lozenge.details-rating-15 {
  color: ${orange};
  background-color: alpha(${orange}, 0.15);
}

.context-tile-lozenge.red, .context-tile-lozenge.details-rating-18 {
  color: ${red};
  background-color: alpha(${red}, 0.15);
}

.eol-red {
  font-weight: bold;
  color: ${red};
}

window.narrow .app-title {
  font-size: 16pt;
}

window.narrow .app-developer {
  font-size: small;
}

.install-progress-label {
  font-size: smaller;
  font-feature-settings: "tnum";
}

scrolledwindow.fake-adw-status-page > viewport > box {
  margin: 36px 12px;
}

scrolledwindow.fake-adw-status-page > viewport > box > clamp:not(:last-child) > box {
  margin-bottom: 36px;
}

scrolledwindow.fake-adw-status-page > viewport > box > clamp > box > .icon:not(:last-child) {
  margin-bottom: 36px;
}

scrolledwindow.fake-adw-status-page > viewport > box > clamp > box > .title:not(:last-child) {
  margin-bottom: 12px;
}

statuspage.icon-dropshadow image.icon {
  -gtk-icon-shadow: 0 1px 12px alpha(${fg}, 0.05), 0 -1px apha(${fg}, 0.05), 1px 0 apha(${fg}, 0.1), 0 1px apha(${fg}, 0.3), -1px 0 apha(${fg}, 0.1);
}

window.info scrollbar.vertical {
  margin-top: 48px;
  background: none;
  box-shadow: none;
}

window.info scrollbar.vertical trough {
  margin-top: 0;
}

row.app > box.header {
  margin-left: 12px;
  margin-right: 12px;
}

row.app > box.header {
  border-spacing: 12px;
}

row.app > box.header > image {
  margin-top: 12px;
  margin-bottom: 12px;
}

row.app label.warning {
  color: ${red};
}

@keyframes pre-delay {
  from {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}

@keyframes fade-in {
  from {
    filter: opacity(0%);
  }
}

/* Give a fade-in animation to spinners. */
spinner.fade-in:checked {
  animation: pre-delay 0.5s linear 1, fade-in 1s linear 1, spin 1s linear infinite;
  animation-delay: 0s, 0.5s, 0.5s;
}

window > contents > leaflet > box > stack.background {
  background-color: transparent;
  background-image: linear-gradient(to bottom, transparent, transparent 48px, ${bg} 48px, ${bg});
}

@define-color weather_temp_chart_fill_color alpha(${yellow}, 0.5);
@define-color weather_temp_chart_stroke_color ${yellow};
@define-color weather_thermometer_warm_color ${yellow};
@define-color weather_thermometer_cold_color ${blue};
#places-label {
  font-weight: bold;
}

#temperature-label {
  font-size: 32pt;
  font-weight: 900;
  margin-left: 9px;
}

#conditions-grid *:backdrop {
  color: alpha(${fg}, 0.7);
}

.content-view.cell {
  font-weight: bold;
}

#locationEntry {
  margin: 6px;
}

.weather-popover {
  margin-top: 6px;
}

.forecast-card {
  transition: border-radius 100ms ease-out;
  border-radius: 6px;
}

.forecast-card separator {
  background-color: alpha(${bg}, 0.12);
}

#daily-forecast-box > separator:last-child {
  background-color: transparent;
  min-width: 0;
}

#conditions-grid,
#attributionGrid {
  margin-left: 18px;
  margin-right: 18px;
}

#weather-page .small .forecast-card {
  margin-left: 0;
  margin-right: 0;
  border-radius: 0;
  border-width: 1px 0;
}

.forecast-temperature-label {
  font-weight: bold;
  color: ${orange};
}

WeatherThermometer {
  margin-bottom: 12px;
}

WeatherThermometer > label.high {
  font-weight: bold;
  color: ${yellow};
}

WeatherThermometer > label.low {
  font-weight: bold;
  color: ${blue};
}

.forecast-button {
  margin: 0 12px;
}

.forecast-graphic {
  margin: 18px;
}

button.osd.circular {
  border-radius: 9999px;
  min-width: 24px;
  min-height: 24px;
}

button.osd.circular > image {
  padding: 0;
}

scrolledwindow.inline list,
scrolledwindow.inline listview {
  background: none;
  color: inherit;
}

scrolledwindow.inline undershoot.top {
  box-shadow: inset 0 1px alpha(${bg}, 0.12);
}

.search-view {
  background-color: ${blue};
  color: ${fg};
}

.search-view menubutton button:focus:focus-visible {
  outline-color: alpha(${accent}, 0.3);
}

image.circular {
  min-width: 36px;
  min-height: 36px;
  padding: 0;
  border-radius: 9999px;
}

.large-button {
  padding: 6px;
}

.alarm-time {
  font-size: 2.5em;
  font-weight: 300;
}

.clocks-ampm-toggle-button,
.clocks-secondary-standalone-label {
  font-size: 18pt;
}

.clocks-standalone-label,
.clocks-ringing-label {
  font-size: 6em;
  font-weight: 300;
}

.clocks-ringing-title {
  font-size: 1.5em;
  font-weight: bold;
}

.clocks-alarm-setup-time {
  font-size: 32pt;
}

.clocks-timer-label,
.clocks-spinbutton {
  font-size: 48pt;
}

.timer-panel .timer-header {
  font-size: 20pt;
  font-weight: 300;
}

.timer-countdown {
  font-size: 40pt;
  font-weight: 300;
}

/* Stopwatch Panel */
.lap-time {
  font-weight: bold;
}

.stopped-stopwatch label,
.running-stopwatch label,
.paused-stopwatch label {
  font-size: 70px;
  font-weight: lighter;
}

.stopped-stopwatch .seconds-label {
  font-weight: 300;
}

.running-stopwatch .seconds-label,
.running-stopwatch .miliseconds-label {
  color: ${accent};
}

.stopped-stopwatch .miliseconds-label,
.running-stopwatch .miliseconds-label,
.paused-stopwatch .miliseconds-label {
  font-size: 50px;
}

.running-stopwatch .seconds-label,
.paused-stopwatch .seconds-label {
  font-weight: 300;
}

.clock-location {
  font-weight: bolder;
}

.hidden {
  opacity: 0;
}

.clock-time {
  font-size: 2em;
  padding: 0.2em 0.5em;
  border-radius: 1em;
}

.none .clock-time {
  background: alpha(currentColor, 0.2);
}

.night .clock-time {
  color: ${blue};
  background-color: alpha(${blue}, 0.25);
}

.naut .clock-time,
.astro .clock-time {
  color: ${orange};
  background-color: alpha(${orange}, 0.25);
}

.civil .clock-time,
.day .clock-time {
  color: ${yellow};
  background: alpha(${yellow}, 0.25);
}

headerbar splitbutton notification button {
  margin: 0;
  min-height: 24px;
  min-width: 24px;
  padding: 0;
}

popover.background.global-search > arrow, popover.background.global-search > contents {
  padding: 0;
}

panelframeswitcher {
  padding: 6px;
  min-height: 36px;
}

.frameheader.header {
  background-color: ${bg};
}

.frameheader.header:backdrop {
  background-color: ${bg};
}

.frameheader.header > button {
  border: none;
  margin: 0;
  padding: 3px;
}

.frameheader.header tabbar.inline > revealer > box {
  min-height: 24px;
}

.frameheader.header tabbar.inline > revealer > box .start-action {
  padding: 0;
  border: none;
}

.frameheader.header tabbar.inline > revealer > box .end-action {
  padding: 0;
  border-left: 1px solid alpha(${bg}, 0.12);
}

.frameheader.header tabbar.inline > revealer > box .end-action button {
  margin: 6px;
}

.frameheader.header tabbar.inline > revealer > box tabbox {
  border: none;
  background: none;
}

panelstatusbar > menubutton > button,
panelstatusbar > paneltogglebutton button {
  border-radius: 0;
}

.style-variant {
  padding: 0 12px;
}

.style-variant button.toggle {
  padding: 0;
}

.style-variant button.toggle, .style-variant button.toggle:hover, .style-variant button.toggle:focus, .style-variant button.toggle:active, .style-variant button.toggle:checked {
  background: none;
  outline: none;
  border: none;
  box-shadow: none;
}

.style-variant button.toggle > stylevariantpreview > .wallpaper {
  border-radius: 6px;
  outline-color: transparent;
  outline-width: 3px;
  outline-offset: 3px;
  outline-style: solid;
  box-shadow: none;
}

.style-variant button.toggle:hover > stylevariantpreview > .wallpaper {
  outline-color: alpha(${bg}, 0.04);
}

.style-variant button.toggle:active > stylevariantpreview > .wallpaper {
  outline-color: alpha(${bg}, 0.3);
}

.style-variant button.toggle:checked > stylevariantpreview > .wallpaper {
  outline-color: ${accent};
}

playlistview scrollbar.overlay-indicator.dragging, playlistview scrollbar.overlay-indicator.hovering {
  background-color: transparent;
}

playlistview queuerow picture.cover,
playlistview queuerow image.card {
  border: none;
}

.exit-info {
  padding: 6px;
  border-top: 2px solid ${accent};
  background: alpha(${accent}, 0.9);
  color: alpha(${accentfg}, 0.87);
}

.error .exit-info {
  border-top: 2px solid ${red};
  background: alpha(${red}, 0.9);
  color: ${fg};
}

window.dialog > .dialog-vbox > box > scrolledwindow > viewport > widget > list.boxed-list {
  border: none;
  border-radius: 0;
}

window.dialog > .dialog-vbox > box > scrolledwindow > viewport > widget > list.boxed-list > row:first-child, window.dialog > .dialog-vbox > box > scrolledwindow > viewport > widget > list.boxed-list > row:last-child {
  border-radius: 0;
}

.card {
  border-radius: 6px;
  border: 1px solid alpha(${bg}, 0.12);
  background-clip: border-box;
  box-shadow: none;
  outline: none;
  background-color: ${bg};
  color: ${fg};
}

.card.activatable {
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1);
}

.card.activatable:hover {
  background-image: none;
  background-color: alpha(currentColor, 0.08);
  color: ${fg};
  outline: 0 solid transparent;
}

.card.activatable:active {
  background-image: none;
  transition: all 75ms cubic-bezier(0, 0, 0.2, 1), background-size 0ms, background-image 0ms, border 0ms;
  animation: ripple 225ms cubic-bezier(0, 0, 0.2, 1) forwards;
  background-image: radial-gradient(circle, alpha(currentColor, 0.08) 10%, transparent 0%);
  background-size: 0% 0%;
  background-color: alpha(currentColor, 0.08);
  color: ${fg};
  outline: 0 solid transparent;
}

toast {
  margin: 12px;
  margin-bottom: 24px;
  border-radius: 9999px;
  border-spacing: 6px;
  padding: 6px;
  box-shadow: 0 2px 3px -1px alpha(${fg}, 0.1), 0 4px 6px 0 apha(${fg}, 0.12), 0 1px 10px 0 apha(${fg}, 0.1), inset 0 1px apha(${bg}, 0.1);
  background-color: ${bg};
  color: ${fg};
  border: none;
}

toast:dir(ltr) {
  padding-left: 12px;
}

toast:dir(rtl) {
  padding-right: 12px;
}

toast > label {
  margin: 0 6px;
}

viewswitcher {
  margin: 0;
  border-spacing: 3px;
}

viewswitcher.wide {
  margin-top: 6px;
  margin-bottom: 6px;
}

viewswitcher.wide button.toggle {
  margin: 0;
}

viewswitcher.narrow button.toggle {
  border-radius: 0;
  margin: 0;
}

viewswitcher.narrow button.toggle:focus-within, viewswitcher.narrow button.toggle:focus {
  box-shadow: none;
}

viewswitcher button.toggle {
  font-weight: bold;
  padding: 0;
}

viewswitcher button.toggle > stack > box.narrow {
  font-size: 0.75rem;
  padding-top: 6px;
  padding-bottom: 4px;
  border-spacing: 4px;
}

viewswitcher button.toggle > stack > box.narrow > stack > label {
  padding-left: 6px;
  padding-right: 6px;
}

viewswitcher button.toggle > stack > box.wide {
  padding: 2px 12px;
  border-spacing: 6px;
}

viewswitcherbar actionbar > revealer > box {
  padding: 0;
}

viewswitchertitle {
  margin-top: 0;
  margin-bottom: 0;
}

viewswitchertitle viewswitcher {
  margin-left: 12px;
  margin-right: 12px;
}

viewswitchertitle viewswitcher.narrow {
  margin-top: 0;
  margin-bottom: 0;
}

viewswitchertitle viewswitcher.narrow button.toggle > stack > box.narrow {
  padding-top: 0;
  padding-bottom: 0;
  border-spacing: 0;
}

viewswitchertitle viewswitcher.wide {
  margin-top: 6px;
  margin-bottom: 6px;
}

viewswitchertitle windowtitle {
  margin-top: 0;
  margin-bottom: 0;
}

.top-bar headerbar viewswitchertitle viewswitcher.narrow button.toggle {
  border-radius: 0 0 6px 6px;
}

indicatorbin > indicator, indicatorbin > mask {
  min-width: 6px;
  min-height: 6px;
  border-radius: 9999px;
}

indicatorbin > indicator {
  margin: 1px;
  background-color: alpha(currentColor, 0.4);
}

indicatorbin > indicator > label {
  font-size: 0.6rem;
  font-weight: bold;
  padding: 1px 4px;
  color: ${fg};
}

indicatorbin > mask {
  padding: 1px;
  background: black;
}

indicatorbin.needs-attention > indicator {
  background-color: ${accent};
}

indicatorbin.needs-attention > indicator > label {
  color: alpha(${accentfg}, 0.87);
}

preferencespage > scrolledwindow > viewport > clamp > box {
  margin: 24px 12px;
  border-spacing: 24px;
}

preferencesgroup > box, preferencesgroup > box .labels {
  border-spacing: 6px;
}

preferencesgroup > box > box.header:not(.single-line) {
  margin-bottom: 6px;
}

preferencesgroup > box > box.single-line {
  min-height: 34px;
}

preferencesgroup > box button.background-preview-button.toggle {
  padding: 0;
  background: none;
  box-shadow: none;
  outline-color: transparent;
  outline-width: 3px;
  outline-offset: 3px;
  outline-style: solid;
}

preferencesgroup > box button.background-preview-button.toggle, preferencesgroup > box button.background-preview-button.toggle > background-preview {
  border-radius: 6px;
}

preferencesgroup > box button.background-preview-button.toggle:hover {
  outline-color: alpha(${bg}, 0.04);
}

preferencesgroup > box button.background-preview-button.toggle:active {
  outline-color: alpha(${bg}, 0.3);
}

preferencesgroup > box button.background-preview-button.toggle:checked {
  outline-color: ${accent};
}

preferencesgroup > box .cutout-button {
  background-color: ${bg};
}

window.about .main-page > viewport > clamp > box {
  margin: 12px;
  border-spacing: 6px;
}

window.about .main-page > viewport > clamp > box > box {
  margin-top: 18px;
  border-spacing: 18px;
  margin-bottom: 6px;
}

window.about .main-page .app-version {
  padding: 3px 18px;
  color: ${accent};
  border-radius: 6px;
  margin-top: 3px;
}

window.about .subpage > viewport > clamp > box {
  margin: 18px 12px;
  border-spacing: 18px;
}

window.about .subpage > clamp > textview {
  background: none;
  color: inherit;
}

statuspage > scrolledwindow > viewport > box {
  margin: 36px 12px;
  border-spacing: 36px;
}

statuspage > scrolledwindow > viewport > box > clamp > box {
  border-spacing: 12px;
}

statuspage > scrolledwindow > viewport > box > clamp > box > .icon {
  -gtk-icon-size: 128px;
  color: alpha(currentColor, 0.55);
}

statuspage > scrolledwindow > viewport > box > clamp > box > .icon:disabled {
  opacity: 0.35;
}

statuspage > scrolledwindow > viewport > box > clamp > box > .icon:not(:last-child) {
  margin-bottom: 24px;
}

statuspage.compact > scrolledwindow > viewport > box {
  margin: 24px 12px;
  border-spacing: 24px;
}

statuspage.compact > scrolledwindow > viewport > box > clamp > box > .icon {
  -gtk-icon-size: 96px;
}

statuspage.compact > scrolledwindow > viewport > box > clamp > box > .icon:not(:last-child) {
  margin-bottom: 12px;
}

statuspage.compact > scrolledwindow > viewport > box > clamp > box > .title {
  font-size: 18pt;
}

flap > dimming,
leaflet > dimming,
navigation-view > dimming,
overlay-split-view > dimming {
  background: alpha(${fg}, 0.25);
}

flap > border,
leaflet > border,
navigation-view > border,
overlay-split-view > border {
  background: none;
}

flap > shadow,
leaflet > shadow,
navigation-view > shadow,
overlay-split-view > shadow {
  min-width: 56px;
  min-height: 56px;
}

flap > shadow.left,
leaflet > shadow.left,
navigation-view > shadow.left,
overlay-split-view > shadow.left {
  background-image: linear-gradient(to right, alpha(alpha(${fg}, 0.25), 0.7), alpha(apha(${fg}, 0.25), 0.14) 40px, alpha(apha(${fg}, 0.25), 0) 56px), linear-gradient(to right, alpha(apha(${fg}, 0.25), 0.4), alpha(apha(${fg}, 0.25), 0.14) 7px, alpha(apha(${fg}, 0.25), 0) 24px);
}

flap > shadow.right,
leaflet > shadow.right,
navigation-view > shadow.right,
overlay-split-view > shadow.right {
  background-image: linear-gradient(to left, alpha(alpha(${fg}, 0.25), 0.7), alpha(apha(${fg}, 0.25), 0.14) 40px, alpha(apha(${fg}, 0.25), 0) 56px), linear-gradient(to left, alpha(apha(${fg}, 0.25), 0.4), alpha(apha(${fg}, 0.25), 0.14) 7px, alpha(apha(${fg}, 0.25), 0) 24px);
}

flap > shadow.up,
leaflet > shadow.up,
navigation-view > shadow.up,
overlay-split-view > shadow.up {
  background-image: linear-gradient(to bottom, alpha(alpha(${fg}, 0.25), 0.7), alpha(apha(${fg}, 0.25), 0.14) 40px, alpha(apha(${fg}, 0.25), 0) 56px), linear-gradient(to bottom, alpha(apha(${fg}, 0.25), 0.4), alpha(apha(${fg}, 0.25), 0.14) 7px, alpha(apha(${fg}, 0.25), 0) 24px);
}

flap > shadow.down,
leaflet > shadow.down,
navigation-view > shadow.down,
overlay-split-view > shadow.down {
  background-image: linear-gradient(to top, alpha(alpha(${fg}, 0.25), 0.7), alpha(apha(${fg}, 0.25), 0.14) 40px, alpha(apha(${fg}, 0.25), 0) 56px), linear-gradient(to top, alpha(apha(${fg}, 0.25), 0.4), alpha(apha(${fg}, 0.25), 0.14) 7px, alpha(apha(${fg}, 0.25), 0) 24px);
}

toolbarview.undershoot-top scrolledwindow > undershoot.top {
  box-shadow: none;
  background: linear-gradient(to bottom, alpha(alpha(${fg}, 0.25), 0.75), transparent 6px);
}

toolbarview.undershoot-bottom scrolledwindow > undershoot.bottom {
  box-shadow: none;
  background: linear-gradient(to top, alpha(alpha(${fg}, 0.25), 0.75), transparent 6px);
}

.unfolded stacksidebar.sidebar {
  border: none;
}

.sidebar-pane {
  background-color: ${bg};
  color: ${fg};
}

.sidebar-pane:backdrop {
  color: alpha(${fg}, 0.5);
  background-color: ${bg};
  transition: background-color 75ms cubic-bezier(0, 0, 0.2, 1);
}

.sidebar-pane .sidebar-pane {
  background-color: transparent;
  color: inherit;
}

.sidebar-pane .toolbar,
.sidebar-pane .sidebar,
.sidebar-pane .navigation-sidebar,
.sidebar-pane searchbar > revealer > box {
  background-color: transparent;
  box-shadow: none;
  border: none;
}

.sidebar-pane banner > revealer > widget {
  background-color: gtkmix(${accent}, ${bg}, 30%);
  color: ${accentfg};
}

.sidebar-pane banner > revealer > widget:backdrop {
  background-color: gtkmix(${accent}, ${bg}, 30%);
}

/* Middle pane in three-pane setups */
.content-pane .sidebar-pane,
.sidebar-pane .content-pane {
  background-color: ${bg};
  color: ${fg};
}

.content-pane .sidebar-pane:backdrop,
.sidebar-pane .content-pane:backdrop {
  background-color: ${bg};
  transition: background-color 75ms cubic-bezier(0, 0, 0.2, 1);
}

.content-pane .sidebar-pane banner > revealer > widget,
.sidebar-pane .content-pane banner > revealer > widget {
  background-color: gtkmix(${accent}, ${bg}, 30%);
  color: ${fg};
}

.content-pane .sidebar-pane banner > revealer > widget:backdrop,
.sidebar-pane .content-pane banner > revealer > widget:backdrop {
  background-color: gtkmix(${accent}, ${bg}, 30%);
}

.sidebar-pane:dir(ltr), .sidebar-pane:dir(ltr) banner > revealer > widget, .sidebar-pane.end:dir(rtl), .sidebar-pane.end:dir(rtl) banner > revealer > widget,
.content-pane .sidebar-pane:dir(ltr),
.content-pane .sidebar-pane:dir(ltr) banner > revealer > widget,
.content-pane .sidebar-pane.end:dir(rtl),
.content-pane .sidebar-pane.end:dir(rtl) banner > revealer > widget,
.sidebar-pane .content-pane:dir(ltr),
.sidebar-pane .content-pane:dir(ltr) banner > revealer > widget,
.sidebar-pane .content-pane.end:dir(rtl),
.sidebar-pane .content-pane.end:dir(rtl) banner > revealer > widget {
  box-shadow: none;
  border-right: 1px solid alpha(${bg}, 0.12);
}

.sidebar-pane:dir(rtl), .sidebar-pane:dir(rtl) banner > revealer > widget, .sidebar-pane.end:dir(ltr), .sidebar-pane.end:dir(ltr) banner > revealer > widget,
.content-pane .sidebar-pane:dir(rtl),
.content-pane .sidebar-pane:dir(rtl) banner > revealer > widget,
.content-pane .sidebar-pane.end:dir(ltr),
.content-pane .sidebar-pane.end:dir(ltr) banner > revealer > widget,
.sidebar-pane .content-pane:dir(rtl),
.sidebar-pane .content-pane:dir(rtl) banner > revealer > widget,
.sidebar-pane .content-pane.end:dir(ltr),
.sidebar-pane .content-pane.end:dir(ltr) banner > revealer > widget {
  box-shadow: none;
  border-left: 1px solid alpha(${bg}, 0.12);
}

.sidebar-pane toolbarview.undershoot-top scrolledwindow > undershoot.top,
.content-pane toolbarview.undershoot-top scrolledwindow > undershoot.top,
.content-pane .sidebar-pane toolbarview.undershoot-top scrolledwindow > undershoot.top,
.sidebar-pane .content-pane toolbarview.undershoot-top scrolledwindow > undershoot.top {
  box-shadow: inset 0 1px alpha(${bg}, 0.08);
  background: linear-gradient(to bottom, alpha(alpha(${fg}, 0.25), 0.75), transparent 6px);
}

.sidebar-pane toolbarview.undershoot-bottom scrolledwindow > undershoot.bottom,
.content-pane toolbarview.undershoot-bottom scrolledwindow > undershoot.bottom,
.content-pane .sidebar-pane toolbarview.undershoot-bottom scrolledwindow > undershoot.bottom,
.sidebar-pane .content-pane toolbarview.undershoot-bottom scrolledwindow > undershoot.bottom {
  box-shadow: inset 0 -1px alpha(${bg}, 0.08);
  background: linear-gradient(to top, alpha(alpha(${fg}, 0.25), 0.75), transparent 6px);
}

.sidebar-pane scrolledwindow.undershoot-top > undershoot.top,
.content-pane scrolledwindow.undershoot-top > undershoot.top,
.content-pane .sidebar-pane scrolledwindow.undershoot-top > undershoot.top,
.sidebar-pane .content-pane scrolledwindow.undershoot-top > undershoot.top {
  box-shadow: inset 0 1px alpha(${bg}, 0.08);
  background: linear-gradient(to bottom, alpha(alpha(${fg}, 0.25), 0.75), transparent 6px);
}

.sidebar-pane scrolledwindow.undershoot-bottom > undershoot.bottom,
.content-pane scrolledwindow.undershoot-bottom > undershoot.bottom,
.content-pane .sidebar-pane scrolledwindow.undershoot-bottom > undershoot.bottom,
.sidebar-pane .content-pane scrolledwindow.undershoot-bottom > undershoot.bottom {
  box-shadow: inset 0 -1px alpha(${bg}, 0.08);
  background: linear-gradient(to top, alpha(alpha(${fg}, 0.25), 0.75), transparent 6px);
}

.sidebar-pane scrolledwindow.undershoot-start:dir(ltr) > undershoot.left,
.content-pane scrolledwindow.undershoot-start:dir(ltr) > undershoot.left,
.content-pane .sidebar-pane scrolledwindow.undershoot-start:dir(ltr) > undershoot.left,
.sidebar-pane .content-pane scrolledwindow.undershoot-start:dir(ltr) > undershoot.left {
  box-shadow: inset 1px 0 alpha(${bg}, 0.08);
  background: linear-gradient(to right, alpha(alpha(${fg}, 0.25), 0.75), transparent 6px);
}

.sidebar-pane scrolledwindow.undershoot-start:dir(rtl) > undershoot.right,
.content-pane scrolledwindow.undershoot-start:dir(rtl) > undershoot.right,
.content-pane .sidebar-pane scrolledwindow.undershoot-start:dir(rtl) > undershoot.right,
.sidebar-pane .content-pane scrolledwindow.undershoot-start:dir(rtl) > undershoot.right {
  box-shadow: inset -1px 0 alpha(${bg}, 0.08);
  background: linear-gradient(to left, alpha(alpha(${fg}, 0.25), 0.75), transparent 6px);
}

.sidebar-pane scrolledwindow.undershoot-end:dir(ltr) > undershoot.right,
.content-pane scrolledwindow.undershoot-end:dir(ltr) > undershoot.right,
.content-pane .sidebar-pane scrolledwindow.undershoot-end:dir(ltr) > undershoot.right,
.sidebar-pane .content-pane scrolledwindow.undershoot-end:dir(ltr) > undershoot.right {
  box-shadow: inset -1px 0 alpha(${bg}, 0.08);
  background: linear-gradient(to left, alpha(alpha(${fg}, 0.25), 0.75), transparent 6px);
}

.sidebar-pane scrolledwindow.undershoot-end:dir(rtl) > undershoot.left,
.content-pane scrolledwindow.undershoot-end:dir(rtl) > undershoot.left,
.content-pane .sidebar-pane scrolledwindow.undershoot-end:dir(rtl) > undershoot.left,
.sidebar-pane .content-pane scrolledwindow.undershoot-end:dir(rtl) > undershoot.left {
  box-shadow: inset 1px 0 alpha(${bg}, 0.08);
  background: linear-gradient(to right, alpha(alpha(${fg}, 0.25), 0.75), transparent 6px);
}

.sidebar-pane flap > dimming,
.sidebar-pane leaflet > dimming,
.sidebar-pane navigation-view > dimming,
.sidebar-pane overlay-split-view > dimming,
.content-pane flap > dimming,
.content-pane leaflet > dimming,
.content-pane navigation-view > dimming,
.content-pane overlay-split-view > dimming,
.content-pane .sidebar-pane flap > dimming,
.content-pane .sidebar-pane leaflet > dimming,
.content-pane .sidebar-pane navigation-view > dimming,
.content-pane .sidebar-pane overlay-split-view > dimming,
.sidebar-pane .content-pane flap > dimming,
.sidebar-pane .content-pane leaflet > dimming,
.sidebar-pane .content-pane navigation-view > dimming,
.sidebar-pane .content-pane overlay-split-view > dimming {
  background: alpha(${fg}, 0.25);
}

.sidebar-pane flap > border,
.sidebar-pane leaflet > border,
.sidebar-pane navigation-view > border,
.sidebar-pane overlay-split-view > border,
.content-pane flap > border,
.content-pane leaflet > border,
.content-pane navigation-view > border,
.content-pane overlay-split-view > border,
.content-pane .sidebar-pane flap > border,
.content-pane .sidebar-pane leaflet > border,
.content-pane .sidebar-pane navigation-view > border,
.content-pane .sidebar-pane overlay-split-view > border,
.sidebar-pane .content-pane flap > border,
.sidebar-pane .content-pane leaflet > border,
.sidebar-pane .content-pane navigation-view > border,
.sidebar-pane .content-pane overlay-split-view > border {
  background: none;
}

.sidebar-pane flap > shadow,
.sidebar-pane leaflet > shadow,
.sidebar-pane navigation-view > shadow,
.sidebar-pane overlay-split-view > shadow,
.content-pane flap > shadow,
.content-pane leaflet > shadow,
.content-pane navigation-view > shadow,
.content-pane overlay-split-view > shadow,
.content-pane .sidebar-pane flap > shadow,
.content-pane .sidebar-pane leaflet > shadow,
.content-pane .sidebar-pane navigation-view > shadow,
.content-pane .sidebar-pane overlay-split-view > shadow,
.sidebar-pane .content-pane flap > shadow,
.sidebar-pane .content-pane leaflet > shadow,
.sidebar-pane .content-pane navigation-view > shadow,
.sidebar-pane .content-pane overlay-split-view > shadow {
  min-width: 56px;
  min-height: 56px;
}

.sidebar-pane flap > shadow.left,
.sidebar-pane leaflet > shadow.left,
.sidebar-pane navigation-view > shadow.left,
.sidebar-pane overlay-split-view > shadow.left,
.content-pane flap > shadow.left,
.content-pane leaflet > shadow.left,
.content-pane navigation-view > shadow.left,
.content-pane overlay-split-view > shadow.left,
.content-pane .sidebar-pane flap > shadow.left,
.content-pane .sidebar-pane leaflet > shadow.left,
.content-pane .sidebar-pane navigation-view > shadow.left,
.content-pane .sidebar-pane overlay-split-view > shadow.left,
.sidebar-pane .content-pane flap > shadow.left,
.sidebar-pane .content-pane leaflet > shadow.left,
.sidebar-pane .content-pane navigation-view > shadow.left,
.sidebar-pane .content-pane overlay-split-view > shadow.left {
  background-image: linear-gradient(to right, alpha(alpha(${fg}, 0.25), 0.7), alpha(apha(${fg}, 0.25), 0.14) 40px, alpha(apha(${fg}, 0.25), 0) 56px), linear-gradient(to right, alpha(apha(${fg}, 0.25), 0.4), alpha(apha(${fg}, 0.25), 0.14) 7px, alpha(apha(${fg}, 0.25), 0) 24px);
}

.sidebar-pane flap > shadow.right,
.sidebar-pane leaflet > shadow.right,
.sidebar-pane navigation-view > shadow.right,
.sidebar-pane overlay-split-view > shadow.right,
.content-pane flap > shadow.right,
.content-pane leaflet > shadow.right,
.content-pane navigation-view > shadow.right,
.content-pane overlay-split-view > shadow.right,
.content-pane .sidebar-pane flap > shadow.right,
.content-pane .sidebar-pane leaflet > shadow.right,
.content-pane .sidebar-pane navigation-view > shadow.right,
.content-pane .sidebar-pane overlay-split-view > shadow.right,
.sidebar-pane .content-pane flap > shadow.right,
.sidebar-pane .content-pane leaflet > shadow.right,
.sidebar-pane .content-pane navigation-view > shadow.right,
.sidebar-pane .content-pane overlay-split-view > shadow.right {
  background-image: linear-gradient(to left, alpha(alpha(${fg}, 0.25), 0.7), alpha(apha(${fg}, 0.25), 0.14) 40px, alpha(apha(${fg}, 0.25), 0) 56px), linear-gradient(to left, alpha(apha(${fg}, 0.25), 0.4), alpha(apha(${fg}, 0.25), 0.14) 7px, alpha(apha(${fg}, 0.25), 0) 24px);
}

.sidebar-pane flap > shadow.up,
.sidebar-pane leaflet > shadow.up,
.sidebar-pane navigation-view > shadow.up,
.sidebar-pane overlay-split-view > shadow.up,
.content-pane flap > shadow.up,
.content-pane leaflet > shadow.up,
.content-pane navigation-view > shadow.up,
.content-pane overlay-split-view > shadow.up,
.content-pane .sidebar-pane flap > shadow.up,
.content-pane .sidebar-pane leaflet > shadow.up,
.content-pane .sidebar-pane navigation-view > shadow.up,
.content-pane .sidebar-pane overlay-split-view > shadow.up,
.sidebar-pane .content-pane flap > shadow.up,
.sidebar-pane .content-pane leaflet > shadow.up,
.sidebar-pane .content-pane navigation-view > shadow.up,
.sidebar-pane .content-pane overlay-split-view > shadow.up {
  background-image: linear-gradient(to bottom, alpha(alpha(${fg}, 0.25), 0.7), alpha(apha(${fg}, 0.25), 0.14) 40px, alpha(apha(${fg}, 0.25), 0) 56px), linear-gradient(to bottom, alpha(apha(${fg}, 0.25), 0.4), alpha(apha(${fg}, 0.25), 0.14) 7px, alpha(apha(${fg}, 0.25), 0) 24px);
}

.sidebar-pane flap > shadow.down,
.sidebar-pane leaflet > shadow.down,
.sidebar-pane navigation-view > shadow.down,
.sidebar-pane overlay-split-view > shadow.down,
.content-pane flap > shadow.down,
.content-pane leaflet > shadow.down,
.content-pane navigation-view > shadow.down,
.content-pane overlay-split-view > shadow.down,
.content-pane .sidebar-pane flap > shadow.down,
.content-pane .sidebar-pane leaflet > shadow.down,
.content-pane .sidebar-pane navigation-view > shadow.down,
.content-pane .sidebar-pane overlay-split-view > shadow.down,
.sidebar-pane .content-pane flap > shadow.down,
.sidebar-pane .content-pane leaflet > shadow.down,
.sidebar-pane .content-pane navigation-view > shadow.down,
.sidebar-pane .content-pane overlay-split-view > shadow.down {
  background-image: linear-gradient(to top, alpha(alpha(${fg}, 0.25), 0.7), alpha(apha(${fg}, 0.25), 0.14) 40px, alpha(apha(${fg}, 0.25), 0) 56px), linear-gradient(to top, alpha(apha(${fg}, 0.25), 0.4), alpha(apha(${fg}, 0.25), 0.14) 7px, alpha(apha(${fg}, 0.25), 0) 24px);
}

.sidebar-pane headerbar, .sidebar-pane headerbar:backdrop, .sidebar-pane .top-bar, .sidebar-pane .top-bar:backdrop,
.content-pane headerbar,
.content-pane headerbar:backdrop,
.content-pane .top-bar,
.content-pane .top-bar:backdrop {
  background-color: transparent;
  box-shadow: none;
}

.sidebar-pane tabbar .box, .sidebar-pane tabbar .box:backdrop,
.content-pane tabbar .box,
.content-pane tabbar .box:backdrop {
  background-color: transparent;
  box-shadow: none;
}

.sidebar-pane tabbar tab,
.content-pane tabbar tab {
  color: alpha(${fg}, 0.7);
}

.sidebar-pane tabbar tab:hover:not(:selected), .sidebar-pane tabbar tab:active,
.content-pane tabbar tab:hover:not(:selected),
.content-pane tabbar tab:active {
  color: ${fg};
}

.sidebar-pane tabbar tab:selected:not(:active),
.content-pane tabbar tab:selected:not(:active) {
  background-color: ${accent};
  color: ${accentfg};
  box-shadow: none;
}

.sidebar-pane tabbar tab:disabled,
.content-pane tabbar tab:disabled {
  color: alpha(${fg}, 0.32);
}

.sidebar-pane tabbar button.image-button,
.content-pane tabbar button.image-button {
  color: alpha(${fg}, 0.7);
}

.sidebar-pane tabbar button.image-button:hover, .sidebar-pane tabbar button.image-button:active,
.content-pane tabbar button.image-button:hover,
.content-pane tabbar button.image-button:active {
  color: ${accentfg};
  background-color: ${accent};
}

.sidebar-pane tabbar button.image-button:disabled,
.content-pane tabbar button.image-button:disabled {
  color: alpha(CurrentColor, 0.32);
}

.top-bar {
  box-shadow: inset 0 -1px alpha(${bg}, 0.12);
  background-color: ${bg};
}

.top-bar:backdrop {
  background-color: ${bg};
}

.top-bar .collapse-spacing {
  padding: 0;
}

themeselector,
panelthemeselector {
  margin: 9px;
}

themeselector checkbutton,
panelthemeselector checkbutton {
  padding: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 1px;
  background-clip: content-box;
  border-radius: 9999px;
  box-shadow: inset 0 0 0 1px alpha(${bg}, 0.12);
}

themeselector checkbutton.follow:checked, themeselector checkbutton.light:checked, themeselector checkbutton.dark:checked,
panelthemeselector checkbutton.follow:checked,
panelthemeselector checkbutton.light:checked,
panelthemeselector checkbutton.dark:checked {
  box-shadow: inset 0 0 0 2px ${accent};
}

themeselector checkbutton.follow,
panelthemeselector checkbutton.follow {
  background-image: linear-gradient(to bottom right, ${fg} 50%, ${bg} 50%);
}

themeselector checkbutton.light,
panelthemeselector checkbutton.light {
  background-color: ${bg};
}

themeselector checkbutton.dark,
panelthemeselector checkbutton.dark {
  background-color: ${bg};
}

themeselector checkbutton.theme-selector radio,
panelthemeselector checkbutton.theme-selector radio {
  -gtk-icon-source: none;
  border: none;
  background: none;
  box-shadow: none;
  min-height: 20px;
  min-width: 20px;
  padding: 0;
}

themeselector checkbutton.theme-selector radio:hover, themeselector checkbutton.theme-selector radio:active, themeselector checkbutton.theme-selector radio:checked,
panelthemeselector checkbutton.theme-selector radio:hover,
panelthemeselector checkbutton.theme-selector radio:active,
panelthemeselector checkbutton.theme-selector radio:checked {
  background-color: transparent;
}

themeselector checkbutton.theme-selector radio:checked,
panelthemeselector checkbutton.theme-selector radio:checked {
  -gtk-icon-size: 20px;
  -gtk-icon-source: -gtk-scaled(-gtk-recolor(url("assets/scalable/checkbox-checked-symbolic.svg")), -gtk-recolor(url("assets/scalable/checkbox-checked-symbolic@2.svg")));
  color: alpha(${accentfg}, 0.87);
  background-color: ${accent};
}

themeselector checkbutton.theme-selector radio:checked, themeselector checkbutton.theme-selector radio:checked:hover, themeselector checkbutton.theme-selector radio:checked:active,
panelthemeselector checkbutton.theme-selector radio:checked,
panelthemeselector checkbutton.theme-selector radio:checked:hover,
panelthemeselector checkbutton.theme-selector radio:checked:active {
  box-shadow: 0 2px 3px -1px alpha(${fg}, 0.08), 0 1px 2px 0 apha(${fg}, 0.1);
}

themeswitcher {
  padding: 6px;
}

themeswitcher .check {
  min-height: 20px;
  min-width: 20px;
  background: none;
  padding: 0;
  margin: 0;
  border-radius: 9999px;
  color: alpha(${accentfg}, 0.87);
  background-color: ${accent};
}

themeswitcher .check, themeswitcher .check:hover, themeswitcher .check:active {
  box-shadow: 0 2px 3px -1px alpha(${fg}, 0.08), 0 1px 2px 0 apha(${fg}, 0.1);
}

themeswitcher checkbutton {
  padding: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 1px;
  background-clip: content-box;
  border-radius: 9999px;
  box-shadow: inset 0 0 0 1px alpha(${bg}, 0.12);
}

themeswitcher checkbutton:checked {
  box-shadow: inset 0 0 0 2px ${accent};
}

themeswitcher checkbutton radio, themeswitcher checkbutton radio:hover, themeswitcher checkbutton radio:active, themeswitcher checkbutton radio:checked, themeswitcher checkbutton radio:checked:hover, themeswitcher checkbutton radio:checked:active {
  background-color: transparent;
  border: none;
  background: none;
  box-shadow: none;
  color: transparent;
  -gtk-icon-source: none;
  -gtk-icon-size: 0;
}

themeswitcher checkbutton.system {
  background: linear-gradient(-45deg, ${bg} 50%, ${fg} 50%);
}

themeswitcher checkbutton.light {
  color: alpha(black, 0.8);
  background-color: ${fg};
}

themeswitcher checkbutton.dark {
  color: ${fg};
  background-color: ${bg};
}

/* GTK NAMED COLORS
   ----------------
   use responsibly! */
/*
widget text/foreground color */
@define-color theme_fg_color ${fg};
/*
text color for entries, views and content in general */
@define-color theme_text_color ${fg};
/*
widget base background color */
@define-color theme_bg_color ${bg};
/*
text widgets and the like base background color */
@define-color theme_base_color ${fg};
/*
base background color of selections */
@define-color theme_selected_bg_color ${accent};
/*
text/foreground color of selections */
@define-color theme_selected_fg_color alpha(${accentfg}, 0.87);
/*
base background color of insensitive widgets */
@define-color insensitive_bg_color ${bg};
/*
text foreground color of insensitive widgets */
@define-color insensitive_fg_color alpha(${fg}, 0.5);
/*
insensitive text widgets and the like base background color */
@define-color insensitive_base_color ${bg};
/*
widget text/foreground color on backdrop windows */
@define-color theme_unfocused_fg_color ${fg};
/*
text color for entries, views and content in general on backdrop windows */
@define-color theme_unfocused_text_color ${fg};
/*
widget base background color on backdrop windows */
@define-color theme_unfocused_bg_color ${bg};
/*
text widgets and the like base background color on backdrop windows */
@define-color theme_unfocused_base_color ${bg};
/*
base background color of selections on backdrop windows */
@define-color theme_unfocused_selected_bg_color ${accent};
/*
text/foreground color of selections on backdrop windows */
@define-color theme_unfocused_selected_fg_color alpha(${accentfg}, 0.87);
/*
insensitive color on backdrop windows */
@define-color unfocused_insensitive_color alpha(${bg}, 0.5);
/*
widgets main borders color */
@define-color borders alpha(${bg}, 0.12);
/*
widgets main borders color on backdrop windows */
@define-color unfocused_borders alpha(${bg}, 0.12);
/*
these are pretty self explicative */
@define-color warning_color ${yellow};
@define-color error_color ${red};
@define-color success_color ${green};
/*
these colors are exported for the window manager and shouldn't be used in applications,
read if you used those and something break with a version upgrade you're on your own... */
@define-color wm_title ${fg};
@define-color wm_unfocused_title alpha(${bg}, 0.7);
@define-color wm_highlight alpha(${bg}, 0.1);
@define-color wm_border ${bg};
@define-color wm_bg ${bg};
@define-color wm_unfocused_bg ${bg};
@define-color wm_button_icon ${fg};
@define-color wm_button_close_hover_bg ${orange};
@define-color wm_button_close_active_bg ${red};
@define-color wm_button_max_hover_bg ${green};
@define-color wm_button_max_active_bg ${green};
@define-color wm_button_min_hover_bg ${yellow};
@define-color wm_button_min_active_bg ${yellow};
/*
FIXME this is really an API */
@define-color content_view_bg ${bg};
@define-color placeholder_text_color ${fg};
/* Very contrasty background for text views (@theme_text_color foreground) */
@define-color text_view_bg ${bg};
@define-color budgie_tasklist_indicator_color alpha(${bg}, 0.3);
@define-color budgie_tasklist_indicator_color_active ${accent};
@define-color budgie_tasklist_indicator_color_active_window ${accent};
@define-color budgie_tasklist_indicator_color_attention ${yellow};

/* GTK NAMED COLORS
   ----------------
   use responsibly! */
@define-color accent_bg_color ${accent};
@define-color accent_fg_color ${accentfg};
@define-color accent_color ${accent};
@define-color destructive_bg_color ${red};
@define-color destructive_fg_color ${fg};
@define-color destructive_color ${red};
@define-color success_bg_color ${green};
@define-color success_fg_color ${fg};
@define-color success_color ${green};
@define-color warning_bg_color ${yellow};
@define-color warning_fg_color alpha(${fg}, 0.87);
@define-color warning_color ${yellow};
@define-color error_bg_color ${red};
@define-color error_fg_color ${fg};
@define-color error_color ${red};
@define-color window_bg_color ${bg};
@define-color window_fg_color ${fg};
@define-color view_bg_color ${bg};
@define-color view_fg_color ${fg};
@define-color headerbar_bg_color ${bg};
@define-color headerbar_fg_color ${fg};
@define-color headerbar_border_color alpha(${accent}, 0.12);
@define-color headerbar_backdrop_color ${bg};
@define-color headerbar_shade_color alpha(${bg}, 0.12);
@define-color card_bg_color ${bg};
@define-color card_fg_color ${fg};
@define-color card_shade_color alpha(${bg}, 0.12);
@define-color dialog_bg_color ${bg};
@define-color dialog_fg_color ${fg};
@define-color popover_bg_color ${bg};
@define-color popover_fg_color ${fg};
@define-color shade_color alpha(${bg}, 0.12);
@define-color scrollbar_outline_color alpha(${bg}, 0.12);` }
