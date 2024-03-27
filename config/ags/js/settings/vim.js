import App from 'resource:///com/github/Aylur/ags/app.js';
import options from '../options.js';
import { readFile, writeFileSync, execAsync } from 'resource:///com/github/Aylur/ags/utils.js';

export async function reloadVim() {
    options.color.red.connect('changed', vim);
    options.color.green.connect('changed', vim);
    options.color.yellow.connect('changed', vim);
    options.color.blue.connect('changed', vim);
    options.color.magenta.connect('changed', vim);
    options.color.teal.connect('changed', vim);
    options.color.orange.connect('changed', vim);
    options.theme.accent.accent.connect('changed', vim);
    options.theme.accent.fg.connect('changed', vim);
    options.theme.fg.connect('changed', vim);
    options.theme.bg.connect('changed', vim);
    options.vim.airline.left.connect('changed', vim);
    options.vim.airline.right.connect('changed', vim);
}

function getColor(scss) {
  // Split the string into segments (with slight modification)
  const segments = scss.split(/([^\s\(\)\[\]:]+|[^\s\(\)\[\]]+:)/).filter(Boolean);

  let colorString = "";
  for (const segment of segments) {
    if (segment.includes('$') && !segment.endsWith(':')) {
      // Handle SCSS variable, but not ending with colon
      const variableName = segment.replace('$', '');
      const resolvedOption = options.list().find(opt => opt.scss === variableName);

      if (resolvedOption) {
        // Check for circular dependencies before recursion (optional)
        if (isCircularDependency(scss, resolvedOption.value)) {
          throw new Error(`Circular dependency detected in color variables: ${scss}`);
        }

        // Resolve nested variables recursively (modified)
        const resolvedValue = getColor(resolvedOption.value);
        colorString += resolvedValue;
      } else {
        // Variable not found, treat as plain text
        colorString += segment;
      }
    } else {
      // Plain text, colon, or nested structure, add directly
      colorString += segment;
    }
  }

  return colorString || null; // Return null if no color is found
}
// Helper function to detect circular dependencies (optional)
function isCircularDependency(currentVar, potentialVar) {
  if (!potentialVar.includes('$')) {
    return false;
  }

  const nextVarName = potentialVar.replace('$', '');
  const nextOption = options.list().find(opt => opt.scss === nextVarName);

  if (!nextOption) {
    return false;
  }

  return (nextOption.value === currentVar) || isCircularDependency(currentVar, nextOption.value, options);
}

export function vim() {
    const red = getColor(options.color.red.value);
    const green = getColor(options.color.green.value);
    const yellow = getColor(options.color.yellow.value);
    const blue = getColor(options.color.blue.value);
    const magenta = getColor(options.color.magenta.value);
    const teal = getColor(options.color.teal.value);
    const orange = getColor(options.color.orange.value);
    const accent = getColor(options.theme.accent.accent.value);
    const accentfg = getColor(options.theme.accent.fg.value);
    const fg = getColor(options.theme.fg.value);
    const bg = getColor(options.theme.bg.value);
    const lsep = options.vim.airline.left.value;
    const rsep = options.vim.airline.right.value;
    const conf = `" Name: catppuccin_macchiato.vim
hi clear
if exists('syntax on')
    syntax reset
endif
let g:colors_name='catppuccin_macchiato'
set t_Co=256
let s:rosewater = "#F4DBD6"
let s:flamingo = "#F0C6C6"
let s:pink = "#F5BDE6"
let s:mauve = "${magenta}"
let s:red = "${red}"
let s:maroon = "#EE99A0"
let s:peach = "${orange}"
let s:yellow = "${yellow}"
let s:green = "${green}"
let s:teal = "${teal}"
let s:sky = "#91D7E3"
let s:sapphire = "#7DC4E4"
let s:blue = "${blue}"
let s:lavender = "#B7BDF8"
let s:accent = "${accent}"
let s:accentfg = "${accentfg}"
let s:text = "${fg}"
let s:subtext1 = "${fg}"
let s:subtext0 = "${fg}"
let s:overlay2 = "#939AB7"
let s:overlay1 = "#8087A2"
let s:overlay0 = "#6E738D"
let s:surface2 = "#5B6078"
let s:surface1 = "#494D64"
let s:surface0 = "#363A4F"
let s:base = "${bg}"
let s:mantle = "#1E2030"
let s:crust = "#181926"
function! s:hi(group, guisp, guifg, guibg, gui, cterm)
  let cmd = ""
  if a:guisp != ""
    let cmd = cmd . " guisp=" . a:guisp
  endif
  if a:guifg != ""
    let cmd = cmd . " guifg=" . a:guifg
  endif
  if a:guibg != ""
    let cmd = cmd . " guibg=" . a:guibg
  endif
  if a:gui != ""
    let cmd = cmd . " gui=" . a:gui
  endif
  if a:cterm != ""
    let cmd = cmd . " cterm=" . a:cterm
  endif
  if cmd != ""
    exec "hi " . a:group . cmd
  endif
endfunction
call s:hi("Normal", "NONE", s:text, "NONE", "NONE", "NONE")
call s:hi("Visual", "NONE", "NONE", s:surface1,"bold", "bold")
call s:hi("Conceal", "NONE", s:overlay1, "NONE", "NONE", "NONE")
call s:hi("ColorColumn", "NONE", "NONE", s:surface0, "NONE", "NONE")
call s:hi("Cursor", "NONE", s:base, s:text, "NONE", "NONE")
call s:hi("lCursor", "NONE", s:base, s:text, "NONE", "NONE")
call s:hi("CursorIM", "NONE", s:base, s:text, "NONE", "NONE")
call s:hi("CursorColumn", "NONE", "NONE", s:mantle, "NONE", "NONE")
call s:hi("CursorLine", "NONE", "NONE", s:surface0, "NONE", "NONE")
call s:hi("Directory", "NONE", s:blue, "NONE", "NONE", "NONE")
call s:hi("DiffAdd", "NONE", s:base, s:green, "NONE", "NONE")
call s:hi("DiffChange", "NONE", s:base, s:yellow, "NONE", "NONE")
call s:hi("DiffDelete", "NONE", s:base, s:red, "NONE", "NONE")
call s:hi("DiffText", "NONE", s:base, s:blue, "NONE", "NONE")
call s:hi("EndOfBuffer", "NONE", "NONE", "NONE", "NONE", "NONE")
call s:hi("ErrorMsg", "NONE", s:red, "NONE", "bolditalic"    , "bold,italic")
call s:hi("VertSplit", "NONE", s:crust, "NONE", "NONE", "NONE")
call s:hi("Folded", "NONE", s:blue, s:surface1, "NONE", "NONE")
call s:hi("FoldColumn", "NONE", s:overlay0, s:base, "NONE", "NONE")
call s:hi("SignColumn", "NONE", s:surface1, s:base, "NONE", "NONE")
call s:hi("IncSearch", "NONE", s:surface1, s:pink, "NONE", "NONE")
call s:hi("CursorLineNr", "NONE", s:accent, s:mauve, "NONE", "NONE")
call s:hi("LineNr", "NONE", s:accent, "NONE", "NONE", "NONE")
call s:hi("MatchParen", "NONE", s:peach, "NONE", "bold", "bold")
call s:hi("ModeMsg", "NONE", s:text, "NONE", "bold", "bold")
call s:hi("MoreMsg", "NONE", s:blue, "NONE", "NONE", "NONE")
call s:hi("NonText", "NONE", s:overlay0, "NONE", "NONE", "NONE")
call s:hi("Pmenu", "NONE", s:overlay2, s:surface0, "NONE", "NONE")
call s:hi("PmenuSel", "NONE", s:text, s:surface1, "bold", "bold")
call s:hi("PmenuSbar", "NONE", "NONE", s:surface1, "NONE", "NONE")
call s:hi("PmenuThumb", "NONE", "NONE", s:overlay0, "NONE", "NONE")
call s:hi("Question", "NONE", s:blue, "NONE", "NONE", "NONE")
call s:hi("QuickFixLine", "NONE", "NONE", s:surface1, "bold", "bold")
call s:hi("Search", "NONE", s:pink, s:surface1, "bold", "bold")
call s:hi("SpecialKey", "NONE", s:subtext0, "NONE", "NONE", "NONE")
call s:hi("SpellBad", s:red, "NONE", "NONE", "underline", "underline")
call s:hi("SpellCap", s:yellow, "NONE", "NONE", "underline", "underline")
call s:hi("SpellLocal", s:blue, "NONE", "NONE", "underline", "underline")
call s:hi("SpellRare", s:green, "NONE", "NONE", "underline", "underline")
call s:hi("StatusLine", "NONE", s:text, s:mantle, "NONE", "NONE")
call s:hi("StatusLineNC", "NONE", s:surface1, s:mantle, "NONE", "NONE")
call s:hi("TabLine", "NONE", s:surface1, s:mantle, "NONE", "NONE")
call s:hi("TabLineFill", "NONE", "NONE", s:mantle, "NONE", "NONE")
call s:hi("TabLineSel", "NONE", s:green, s:surface1, "NONE", "NONE")
call s:hi("Title", "NONE", s:blue, "NONE", "bold", "bold")
call s:hi("VisualNOS", "NONE", "NONE", s:surface1, "bold", "bold")
call s:hi("WarningMsg", "NONE", s:yellow, "NONE", "NONE", "NONE")
call s:hi("WildMenu", "NONE", "NONE", s:overlay0, "NONE", "NONE")
call s:hi("Comment", "NONE", s:surface2, "NONE", "NONE", "NONE")
call s:hi("Constant", "NONE", s:peach, "NONE", "NONE", "NONE")
call s:hi("Identifier", "NONE", s:flamingo, "NONE", "NONE", "NONE")
call s:hi("Statement", "NONE", s:accent, "NONE", "NONE", "NONE")
call s:hi("PreProc", "NONE", s:pink, "NONE", "NONE", "NONE")
call s:hi("Type", "NONE", s:blue, "NONE", "NONE", "NONE")
call s:hi("Special", "NONE", s:pink, "NONE", "NONE", "NONE")
call s:hi("Underlined", "NONE", s:text, s:base, "underline", "underline")
call s:hi("Error", "NONE", s:red, "NONE", "NONE", "NONE")
call s:hi("Todo", "NONE", s:base, s:yellow, "bold", "bold")
call s:hi("String", "NONE", s:green, "NONE", "NONE", "NONE")
call s:hi("Character", "NONE", s:blue, "NONE", "NONE", "NONE")
call s:hi("Number", "NONE", s:teal, "NONE", "NONE", "NONE")
call s:hi("Boolean", "NONE", s:blue, "NONE", "NONE", "NONE")
call s:hi("Float", "NONE", s:teal, "NONE", "NONE", "NONE")
call s:hi("Function", "NONE", s:accent, "NONE", "NONE", "NONE")
call s:hi("Conditional", "NONE", s:yellow, "NONE", "NONE", "NONE")
call s:hi("Repeat", "NONE", s:yellow, "NONE", "NONE", "NONE")
call s:hi("Label", "NONE", s:accent, "NONE", "NONE", "NONE")
call s:hi("Operator", "NONE", s:blue, "NONE", "NONE", "NONE")
call s:hi("Keyword", "NONE", s:red, "NONE", "NONE", "NONE")
call s:hi("Include", "NONE", s:red, "NONE", "NONE", "NONE")
call s:hi("StorageClass", "NONE", s:yellow, "NONE", "NONE", "NONE")
call s:hi("Structure", "NONE", s:mauve, "NONE", "NONE", "NONE")
call s:hi("Typedef", "NONE", s:yellow, "NONE", "NONE", "NONE")
call s:hi("debugPC", "NONE", "NONE", s:crust, "NONE", "NONE")
call s:hi("debugBreakpoint", "NONE", s:overlay0, s:base, "NONE", "NONE")
hi link Define PreProc
hi link Macro PreProc
hi link PreCondit PreProc
hi link SpecialChar Special
hi link Tag Special
hi link Delimiter Special
hi link SpecialComment Special
hi link Debug Special
hi link Exception Error
hi link StatusLineTerm StatusLine
hi link StatusLineTermNC StatusLineNC
hi link Terminal Normal
hi link Ignore Comment
" Set terminal colors for playing well with plugins like fzf
let g:terminal_ansi_colors = [
  \\ s:surface1, s:red, s:green, s:yellow, s:blue, s:pink, s:teal, s:subtext1,
  \\ s:surface2, s:red, s:green, s:yellow, s:blue, s:pink, s:teal, s:subtext0
\\ ]`
    const airline = `scriptencoding utf-8

let g:airline#themes#ags#palette = {}

let s:magenta = "${magenta}"
let s:red = "${red}"
let s:orange = "${orange}"
let s:yellow = "${yellow}"
let s:teal = "${teal}"
let s:blue = "${blue}"
let s:green = "${green}"
let s:fg = "${fg}"
let s:accent = "${accent}"
let s:accentfg = "${accentfg}"
let s:bg = "${bg}"

let s:N1 = [ s:accentfg, s:accent, 59, 149 ]
let s:N2 = [ s:accent, s:bg, 149, 59 ]
let s:N3 = [ s:fg, s:bg, 145, 16 ]
let g:airline#themes#ags#palette.normal = airline#themes#generate_color_map( s:N1, s:N2, s:N3 )

let s:I1 = [ s:bg, s:green, 59, 74 ]
let s:I2 = [ s:teal, s:bg, 74, 59 ]
let s:I3 = [ s:fg, s:bg, 145, 16 ]
let g:airline#themes#ags#palette.insert = airline#themes#generate_color_map( s:I1, s:I2, s:I3 )
let g:airline#themes#ags#palette.terminal = copy(g:airline#themes#ags#palette.insert)
let g:airline#themes#ags#palette.replace = copy(g:airline#themes#ags#palette.insert)

let s:V1 = [ s:bg, s:blue, 59, 209 ]
let s:V2 = [ s:blue, s:bg, 209, 59 ]
let s:V3 = [ s:fg, s:bg, 145, 16 ]
let g:airline#themes#ags#palette.visual = airline#themes#generate_color_map( s:V1, s:V2, s:V3 )

let g:airline_left_sep = "${lsep}"
let g:airline_right_sep = "${rsep}"`
    writeFileSync(String(conf), '/home/wilwe/.vim/colors/ags.vim')
    writeFileSync(String(airline), '/home/wilwe/.vim/autoload/airline/themes/ags.vim')
}
