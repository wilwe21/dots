colo ags
" PLUGINS {{{
call plug#begin('~/.vim/plugins')
 Plug 'vim-airline/vim-airline'
 Plug 'catppuccin/vim', { 'as': 'catppuccin' } 
 Plug 'cakebaker/scss-syntax.vim'
 Plug 'skammer/vim-css-color'
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
let g:cssColorVimDoNotMessMyUpdatetime = 1
set showmode
set showmatch
set hlsearch
