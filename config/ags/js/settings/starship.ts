import options from '../options.ts';
import { readFile, writeFileAsync } from "astal/file"
import { execAsync } from 'astal/process'
import { getColor } from '../utils.ts';

export async function reloadStarship() {
    options.starship.format.connect('changed', starship);
    options.starship.username.bg.connect('changed', starship);
    options.starship.username.fg.connect('changed', starship);
    options.starship.directory.bg.connect('changed', starship);
    options.starship.directory.fg.connect('changed', starship);
    options.starship.time.bg.connect('changed', starship);
    options.starship.time.fg.connect('changed', starship);
    options.starship.ldec.connect('changed', starship);
    options.starship.rdec.connect('changed', starship);
}

export function starship() {
    const theme = getColor(options.starship.format.value);
    const ldec = options.starship.ldec.value;
    const rdec = options.starship.rdec.value;
    const ubg = getColor(options.starship.username.bg.value);
    const ufg = getColor(options.starship.username.fg.value);
    const dbg = getColor(options.starship.directory.bg.value);
    const dfg = getColor(options.starship.directory.fg.value);
    const tbg = getColor(options.starship.time.bg.value);
    const tfg = getColor(options.starship.time.fg.value);
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
format = '[${ldec}](${ubg})[$user ]($style)[${rdec}](${ubg})'

[directory]
style = "bg:${dbg} fg:${dfg}"
format = "[${ldec}](${dbg})[ $path ]($style)[${rdec}](${dbg})"
truncation_length = 3
truncation_symbol = "…/"

[time]
disabled = false
time_format = "%R" # Hour:Minute Format
style = "bg:${tbg} fg:${tfg}"
format = '[${ldec}](${tbg})[ $time ]($style)[${rdec}](${tbg})'`
    writeFileAsync(`/home/wilwe/.config/starship.toml`, String(conf))
}
