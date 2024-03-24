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
" }}}
" Binds {{{
 vmap <C-c> "+y
 nmap <C-x> "+p
 nmap <F1> :silent exec '!tts -s "'.getline(".").printf('" &')<CR>:redr!<CR>
 nmap <C-F1> :silent exec '!tpl -p -v -s "'.getline(".").printf('" &')<CR>:redr!<CR>
 nmap <C-F2> :silent exec '!tpl -p -m -v -s "'.getline(".").printf('" &')<CR>:redr!<CR>
 nmap <F2> :silent exec '!tts -m -s "'.getline(".").printf('" &')<CR>:redr!<CR>
" }}}
