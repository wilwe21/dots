" PLUGINS {{{
call plug#begin('~/.vim/plugins')
 Plug 'vim-airline/vim-airline'
 Plug 'vim-airline/vim-airline-themes'
 Plug 'mg979/vim-visual-multi', { 'bramch': 'master' }
 Plug 'cakebaker/scss-syntax.vim'
 Plug 'gko/vim-coloresque'
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
set mouse=a
set backspace=indent,eol,start
set tabstop=2
autocmd Filetype css setlocal tabstop=2
autocmd Filetype javascript setlocal tabstop=4
let g:airline_theme = 'ags'
colo ags
" Functions {{{
function! ExecuteLineAsTTS(mute = "false", sel = 'false', lang = "en")
  if a:sel == 'false'
	  let line = getline('.')
  else 
	  let line = visual#get_current_selection()
  endif
  let line = substitute(line, '-', '', 'g')
  let line = substitute(line, '"', '', 'g')
  let line = substitute(line, "'", '', 'g')
  let line = substitute(line, '\n', ' ', 'g')
  let line = substitute(line, '!', '\\!', 'g')
  let line = substitute(line, '#', '\\#', 'g')
  if a:mute == "false"
	  let cmd = 'tts -l ' . a:lang .' -s "' . line . '" &'
  else
	  let cmd = 'tts -m -l ' . a:lang .' -s "' . line . '" &'
  endif
  execute '!'.cmd
  redraw!
endfunction
function! ExecuteLineAsTPL(mute = "false", sel = 'false', lang = "pl")
  if a:sel == 'false'
	  let line = getline('.')
  else
	  let line = visual#get_current_selection()
  endif
  let line = substitute(line, '"', '', 'g')
  let line = substitute(line, '-', '', 'g')
  let line = substitute(line, "'", '', 'g')
  let line = substitute(line, '\n', ' ', 'g')
  let line = substitute(line, '!', '\\!', 'g')
  let line = substitute(line, '#', '\\#', 'g')
  if a:mute == "false"
	  let cmd = 'tpl -p -v -l ' . a:lang .' -s "' . line . '" &'
  else
	  let cmd = 'tpl -p -m -v -l ' . a:lang .' -s "' . line . '" &'
  endif
  execute '!'.cmd
  redraw!
endfunction
function! BackgroundSentence(sel='false')
  if a:sel == 'false'
	  let line = getline('.')
  else
	  let line = visual#get_current_selection()
  endif
  let line = substitute(line, '-', '', 'g')
  let line = substitute(line, '"', '', 'g')
  let line = substitute(line, "'", '', 'g')
  let line = substitute(line, "/", ' ', 'g')
  let line = substitute(line, '\n', ' ', 'g')
  let line = substitute(line, '!', '\\!', 'g')
  let line = substitute(line, '#', '\\#', 'g')
  let cmd = 'backsen -t "' . line . '" &'
  execute '!'.cmd
  redraw!
endfunction
" }}}
" Binds {{{
 noremap <C-c> "+y
 noremap <C-x> "+p
 nmap <C-F4> :silent :call BackgroundSentence()<CR>
 vmap <C-F4> :silent :call BackgroundSentence('true')<CR>
 nmap <F1> :silent :call ExecuteLineAsTTS()<CR>
 nmap <C-1> :silent :call ExecuteLineAsTTS('false','false','pl')<CR>
 nmap <C-`> :silent :call ExecuteLineAsTTS('false','true','pl')<CR>
 nmap <C-F1> :silent :call ExecuteLineAsTPL()<CR>
 nmap <C-F2> :silent :call ExecuteLineAsTPL("true")<CR>
 nmap <F2> :silent :call ExecuteLineAsTTS("true")<CR>
 vmap <F1> :silent :call ExecuteLineAsTTS("false",'true')<CR>
 vmap <C-F1> :silent :call ExecuteLineAsTPL("false",'true')<CR>
 vmap <C-F2> :silent :call ExecuteLineAsTPL("true",'true')<CR>
 vmap <C-1> :silent :call ExecuteLineAsTPL("false",'true','pl')<CR>
 vmap <C-2> :silent :call ExecuteLineAsTPL("true",'true','pl')<CR>
 vmap <F2> :silent :call ExecuteLineAsTTS("true",'true')<CR>
" }}}
