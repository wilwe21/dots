import options from '../options.ts';
import { readFile, writeFileAsync } from "astal/file"
import { execAsync } from 'astal/process'
import { getColor } from '../utils.ts';

export async function reloadVim() {
    options.colors.white.connect('changed', vim);
    options.colors.black.connect('changed', vim);
    options.colors.red.connect('changed', vim);
    options.colors.green.connect('changed', vim);
    options.colors.yellow.connect('changed', vim);
    options.colors.blue.connect('changed', vim);
    options.colors.magenta.connect('changed', vim);
    options.colors.teal.connect('changed', vim);
    options.colors.orange.connect('changed', vim);
	options.colors.rosewater.connect('changed', vim);
	options.colors.pink.connect('changed', vim);
	options.colors.flamingo.connect('changed', vim);
	options.colors.maroon.connect('changed', vim);
	options.colors.sky.connect('changed', vim);
	options.colors.sapphire.connect('changed', vim);
	options.colors.lavender.connect('changed', vim);
  options.colors.accent.connect('changed', vim);
  options.colors.accentfg.connect('changed', vim);
  options.colors.fg.connect('changed', vim);
  options.colorse.bg.connect('changed', vim);
  options.vim.airline.left.connect('changed', vim);
  options.vim.airline.right.connect('changed', vim);
	options.vim.colors.normal.fg.connect('changed', vim);
	options.vim.colors.normal.bg.connect('changed', vim);
	options.vim.colors.visual.fg.connect('changed', vim);
	options.vim.colors.visual.bg.connect('changed', vim);
	options.vim.colors.linenr.fg.connect('changed', vim);
	options.vim.colors.linenr.bg.connect('changed', vim);
	options.vim.colors.statement.fg.connect('changed', vim);
	options.vim.colors.statement.bg.connect('changed', vim);
	options.vim.colors.type.fg.connect('changed', vim);
	options.vim.colors.type.bg.connect('changed', vim);
	options.vim.colors.special.fg.connect('changed', vim);
	options.vim.colors.special.bg.connect('changed', vim);
	options.vim.colors.error.fg.connect('changed', vim);
	options.vim.colors.error.bg.connect('changed', vim);
	options.vim.colors.string.fg.connect('changed', vim);
	options.vim.colors.string.bg.connect('changed', vim);
	options.vim.colors.character.fg.connect('changed', vim);
	options.vim.colors.character.bg.connect('changed', vim);
	options.vim.colors.number.fg.connect('changed', vim);
	options.vim.colors.number.bg.connect('changed', vim);
	options.vim.colors.boolean.fg.connect('changed', vim);
	options.vim.colors.boolean.bg.connect('changed', vim);
	options.vim.colors.float.fg.connect('changed', vim);
	options.vim.colors.float.bg.connect('changed', vim);
	options.vim.colors.function.fg.connect('changed', vim);
	options.vim.colors.function.bg.connect('changed', vim);
	options.vim.colors.conditional.fg.connect('changed', vim);
	options.vim.colors.conditional.bg.connect('changed', vim);
	options.vim.colors.repeat.fg.connect('changed', vim);
	options.vim.colors.repeat.bg.connect('changed', vim);
	options.vim.colors.label.fg.connect('changed', vim);
	options.vim.colors.label.bg.connect('changed', vim);
	options.vim.colors.operator.fg.connect('changed', vim);
	options.vim.colors.operator.bg.connect('changed', vim);
	options.vim.colors.keyword.fg.connect('changed', vim);
	options.vim.colors.keyword.bg.connect('changed', vim);
	options.vim.colors.include.fg.connect('changed', vim);
	options.vim.colors.include.bg.connect('changed', vim);
	options.vim.colors.structure.fg.connect('changed', vim);
	options.vim.colors.structure.bg.connect('changed', vim);
}

export function vim() {
    const black = getColor(options.colors.black.value);
    const red = getColor(options.colors.red.value);
    const white = getColor(options.colors.white.value);
    const green = getColor(options.colors.green.value);
    const yellow = getColor(options.colors.yellow.value);
    const blue = getColor(options.colors.blue.value);
    const magenta = getColor(options.colors.magenta.value);
    const teal = getColor(options.colors.teal.value);
    const orange = getColor(options.colors.orange.value);
	const rosewater = getColor(options.colors.rosewater.value);
	const flamingo = getColor(options.colors.flamingo.value);
	const pink = getColor(options.colors.pink.value);
	const maroon = getColor(options.colors.maroon.value);
	const sky = getColor(options.colors.sky.value);
	const sapphire = getColor(options.colors.sapphire.value);
	const lavender = getColor(options.colors.lavender.value);	
    const accent = getColor(options.colors.accent.value);
    const accentfg = getColor(options.colors.accentfg.value);
    const fg = getColor(options.colors.fg.value);
    const bg = getColor(options.colors.bg.value);
    const lsep = options.vim.airline.left.value;
    const rsep = options.vim.airline.right.value;
	const nfg = options.vim.colors.normal.fg.value;
	const nbg = options.vim.colors.normal.bg.value;
	const vfg = options.vim.colors.visual.fg.value;
	const vbg = options.vim.colors.visual.bg.value;
	const lnrfg = options.vim.colors.linenr.fg.value;
	const lnrbg = options.vim.colors.linenr.bg.value;
	const statfg = options.vim.colors.statement.fg.value;
	const statbg = options.vim.colors.statement.bg.value;
	const typfg = options.vim.colors.type.fg.value;
	const typbg = options.vim.colors.type.bg.value;
	const spcfg = options.vim.colors.special.fg.value;
	const spcbg = options.vim.colors.special.bg.value;
	const efg = options.vim.colors.error.fg.value;
	const ebg = options.vim.colors.error.bg.value;
	const stfg = options.vim.colors.string.fg.value;
	const stbg = options.vim.colors.string.bg.value;
	const chfg = options.vim.colors.character.fg.value;
	const chbg = options.vim.colors.character.bg.value;
	const numfg = options.vim.colors.number.fg.value;
	const numbg = options.vim.colors.number.bg.value;
	const boolfg = options.vim.colors.boolean.fg.value;
	const boolbg = options.vim.colors.boolean.bg.value;
	const flofg = options.vim.colors.float.fg.value;
	const flobg = options.vim.colors.float.bg.value;
	const funfg = options.vim.colors.function.fg.value;
	const funbg = options.vim.colors.function.bg.value;
	const condfg = options.vim.colors.conditional.fg.value;
	const condbg = options.vim.colors.conditional.bg.value;
	const repfg = options.vim.colors.repeat.fg.value;
	const repbg = options.vim.colors.repeat.bg.value;
	const labfg = options.vim.colors.label.fg.value;
	const labbg = options.vim.colors.label.bg.value;
	const opfg = options.vim.colors.operator.fg.value;
	const opbg = options.vim.colors.operator.bg.value;
	const keyfg = options.vim.colors.keyword.fg.value;
	const keybg = options.vim.colors.keyword.bg.value;
	const incfg = options.vim.colors.include.fg.value;
	const incbg = options.vim.colors.include.bg.value;
	const strucfg = options.vim.colors.structure.fg.value;
	const strucbg = options.vim.colors.structure.bg.value;
    const conf = `" Name: catppuccin_macchiato.vim
hi clear
if exists('syntax on')
    syntax reset
endif
let g:colors_name='catppuccin_macchiato'
set t_Co=256
let s:black = "${black}"
let s:white = "${white}"
let s:rosewater = "${rosewater}"
let s:flamingo = "${flamingo}"
let s:pink = "${pink}"
let s:mauve = "${magenta}"
let s:red = "${red}"
let s:maroon = "${maroon}"
let s:peach = "${orange}"
let s:yellow = "${yellow}"
let s:green = "${green}"
let s:teal = "${teal}"
let s:sky = "${sky}"
let s:sapphire = "${sapphire}"
let s:blue = "${blue}"
let s:lavender = "${lavender}"
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
call s:hi("Normal", "NONE", ${nfg}, ${nbg}, "NONE", "NONE")
call s:hi("Visual", "NONE", ${vfg}, ${vbg},"bold", "bold")
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
call s:hi("LineNr", "NONE", ${lnrfg}, ${lnrbg}, "NONE", "NONE")
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
call s:hi("Statement", "NONE", ${statfg}, ${statbg}, "NONE", "NONE")
call s:hi("PreProc", "NONE", s:pink, "NONE", "NONE", "NONE")
call s:hi("Type", "NONE", ${typfg}, ${typbg}, "NONE", "NONE")
call s:hi("Special", "NONE", ${spcfg}, ${spcbg}, "NONE", "NONE")
call s:hi("Underlined", "NONE", s:text, s:base, "underline", "underline")
call s:hi("Error", "NONE", ${efg}, ${ebg}, "NONE", "NONE")
call s:hi("Todo", "NONE", s:base, s:yellow, "bold", "bold")
call s:hi("String", "NONE", ${stfg}, ${stbg}, "NONE", "NONE")
call s:hi("Character", "NONE", ${chfg}, ${chbg}, "NONE", "NONE")
call s:hi("Number", "NONE", ${numfg}, ${numbg}, "NONE", "NONE")
call s:hi("Boolean", "NONE", ${boolfg}, ${boolbg}, "NONE", "NONE")
call s:hi("Float", "NONE", ${flofg}, ${flobg}, "NONE", "NONE")
call s:hi("Function", "NONE", ${funfg}, ${funbg}, "NONE", "NONE")
call s:hi("Conditional", "NONE", ${condfg}, ${condbg}, "NONE", "NONE")
call s:hi("Repeat", "NONE", ${repfg}, ${repbg}, "NONE", "NONE")
call s:hi("Label", "NONE", ${labfg}, ${labbg}, "NONE", "NONE")
call s:hi("Operator", "NONE", ${opfg}, ${opbg}, "NONE", "NONE")
call s:hi("Keyword", "NONE", ${keyfg}, ${keybg}, "NONE", "NONE")
call s:hi("Include", "NONE", ${incfg}, ${incbg}, "NONE", "NONE")
call s:hi("StorageClass", "NONE", s:yellow, "NONE", "NONE", "NONE")
call s:hi("Structure", "NONE", ${strucfg}, ${strucbg}, "NONE", "NONE")
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
    writeFileAsync(String(conf), `/home/wilwe/.vim/colors/ags.vim`)
    writeFileAsync(String(airline), `/home/wilwe/.vim/autoload/airline/themes/ags.vim`)
}
