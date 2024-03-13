import App from 'resource:///com/github/Aylur/ags/app.js';
import options from '../options.js';
import { readFile, writeFileSync, execAsync } from 'resource:///com/github/Aylur/ags/utils.js';

export async function reloadStarship() {
    options.starship.format.connect('changed', starship);
    options.starship.username.bg.connect('changed', starship);
    options.starship.username.fg.connect('changed', starship);
    options.starship.directory.bg.connect('changed', starship);
    options.starship.directory.fg.connect('changed', starship);
    options.starship.time.bg.connect('changed', starship);
    options.starship.time.fg.connect('changed', starship);
}
export function starship() {
    const theme = options.starship.format.value;
    const ubg = options.starship.username.bg.value;
    const ufg = options.starship.username.fg.value;
    const dbg = options.starship.directory.bg.value;
    const dfg = options.starship.directory.fg.value;
    const tbg = options.starship.time.bg.value;
    const tfg = options.starship.time.fg.value;
    const conf = `#made by wilwe
format = """
${theme}
"""
command_timeout = 5000
# Disable the blank line at the start of the prompt
add_newline = true

# You can also replace your username with a neat symbol like  to save some space
[username]
show_always = true
style_user = "bg:${ubg} fg:${ufg}"
format = '[$user ]($style)'

[directory]
style = "bg:${dbg} fg:${dfg}"
format = "[ $path ]($style)"
truncation_length = 3
truncation_symbol = "…/"

[time]
disabled = false
time_format = "%R" # Hour:Minute Format
style = "bg:${tbg} fg:${tfg}"
format = '[ $time ]($style)'`
    writeFileSync(String(conf), '/tmp/ags/starship.conf')
    Utils.execAsync(['hyprctl', 'dispatch', 'exec', '/home/wilwe/.hyprland.conf/scripts/theme -p'])
}
