" PLUGINS {{{
call plug#begin('~/.vim/plugins')
 Plug 'vim-airline/vim-airline'
 Plug 'vim-airline/vim-airline-themes'
 Plug 'mg979/vim-visual-multi', { 'bramch': 'master' }
 Plug 'catppuccin/vim', { 'as': 'catppuccin' } 
 Plug 'cakebaker/scss-syntax.vim'
 Plug 'roymanigley/get-visual-selection-vim-plugin'
call plug#end()
" }}}
set nocompatible
filetype on
set termguicolors
filetype plugin on
filetype indent on
syntax on
set relativenumber
set number
set showmode
set showmatch
set hlsearch
let g:airline_theme = 'ags'
colo ags
" Functions {{{
function! ExecuteLineAsTTS(mute = "false", sel = 'false')
  if a:sel == 'false'
	  let line = getline('.')
  else 
	  let line = visual#get_current_selection()
  endif
  let line = substitute(line, '"', '', 'g')
  let line = substitute(line, "'", '', 'g')
  let line = substitute(line, '\n', ' ', 'g')
  let line = substitute(line, '!', '\\!', 'g')
  let line = substitute(line, '#', '\\#', 'g')
  if a:mute == "false"
	  let cmd = 'tts -s "' . line . '" &'
  else
	  let cmd = 'tts -m -s "' . line . '" &'
  endif
  execute '!'.cmd
  redraw!
endfunction
function! ExecuteLineAsTPL(mute = "false", sel = 'false')
  if a:sel == 'false'
	  let line = getline('.')
  else
	  let line = visual#get_current_selection()
  endif
  let line = substitute(line, '"', '', 'g')
  let line = substitute(line, "'", '', 'g')
  let line = substitute(line, '\n', ' ', 'g')
  let line = substitute(line, '!', '\\!', 'g')
  let line = substitute(line, '#', '\\#', 'g')
  if a:mute == "false"
	  let cmd = 'tpl -p -v -s "' . line . '" &'
  else
	  let cmd = 'tpl -p -m -v -s "' . line . '" &'
  endif
  execute '!'.cmd
  redraw!
endfunction
" }}}
" Binds {{{
 vmap <C-c> "+y
 nmap <C-x> "+p
 nmap <F1> :silent :call ExecuteLineAsTTS()<CR>
 nmap <C-F1> :silent :call ExecuteLineAsTPL()<CR> 
 nmap <C-F2> :silent :call ExecuteLineAsTPL("true")<CR>
 nmap <F2> :silent :call ExecuteLineAsTTS("true")<CR>
 vmap <F1> :silent :call ExecuteLineAsTTS("false",'true')<CR>
 vmap <C-F1> :silent :call ExecuteLineAsTPL("false",'true')<CR> 
 vmap <C-F2> :silent :call ExecuteLineAsTPL("true",'true')<CR>
 vmap <F2> :silent :call ExecuteLineAsTTS("true",'true')<CR>
" }}}
