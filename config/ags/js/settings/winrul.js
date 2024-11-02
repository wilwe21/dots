import App from 'resource:///com/github/Aylur/ags/app.js';
import options from '../options.js';
import { readFile, writeFile, execAsync, USER } from 'resource:///com/github/Aylur/ags/utils.js';

export async function reloadWinruls() {
    options.kitty.opacity.connect('changed', WINRUL)
}
export async function WINRUL() {
    const kitt_opa = options.kitty.opacity.value;
    const conf = `windowrulev2=opacity ${kitt_opa}, class:(kitty)$`
    writeFile(String(conf), `/home/${USER}/.hyprland.conf/config/agswr.conf`)
}
