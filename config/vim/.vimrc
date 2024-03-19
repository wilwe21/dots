colo ags
" PLUGINS {{{
call plug#begin('~/.vim/plugins')
 Plug 'vim-airline/vim-airline'
 Plug 'catppuccin/vim', { 'as': 'catppuccin' } 
 Plug 'cakebaker/scss-syntax.vim'
 Plug 'vim-airline/vim-airline-themes'
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
let g:airline_theme = 'ags'
set showmode
set showmatch
set hlsearch
" Functions {{{
" }}}
" Binds {{{
 vmap <C-c> y
 "vmap <C-c> '<,'>!wl-copy
 nmap <F1> :silent exec '!tts -s "'.getline(".").printf('" &')<CR>:redr!<CR>
 nmap <C-F1> :silent exec '!tpl -p -v -s "'.getline(".").printf('" &')<CR>:redr!<CR>
 nmap <C-F2> :silent exec '!tpl -p -m -v -s "'.getline(".").printf('" &')<CR>:redr!<CR>
 nmap <F2> :silent exec '!tts -m -s "'.getline(".").printf('" &')<CR>:redr!<CR>
" }}}
