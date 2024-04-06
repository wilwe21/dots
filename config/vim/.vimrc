" PLUGINS {{{
call plug#begin('~/.vim/plugins')
 Plug 'vim-airline/vim-airline'
 Plug 'vim-airline/vim-airline-themes'
 Plug 'mg979/vim-visual-multi', { 'bramch': 'master' }
 Plug 'catppuccin/vim', { 'as': 'catppuccin' } 
 Plug 'cakebaker/scss-syntax.vim'
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
function! ExecuteLineAsTTS(mute = "false")
  let line = getline('.')
  let line = substitute(line, '"', '', 'g')
  let line = substitute(line, '!', '\\!', 'g')
  if a:mute == "false"
	  let cmd = 'tts -s "' . line . '" &'
  else
	  let cmd = 'tts -m -s "' . line . '" &'
  endif
  execute '!'.cmd
  redraw!
endfunction
function! ExecuteLineAsTPL(mute = "false")
  let line = getline('.')
  let line = substitute(line, '"', '', 'g')
  let line = substitute(line, '!', '\\!', 'g')
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
" }}}
