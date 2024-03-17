" PLUGINS {{{
call plug#begin('~/.vim/plugins')
 Plug 'vim-airline/vim-airline'
 Plug 'catppuccin/vim', { 'as': 'catppuccin' } 
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
colo catppuccin_macchiato
let g:airline_theme = 'catppuccin_macchiato'
set showmode
set showmatch
set hlsearch
