"use strict";

const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

elixir( (mix) => {
    mix
        .sass('app.scss')
        .webpack('master.js')
        .copy('./node_modules/material-design-iconic-font/dist/fonts', 'public/fonts')
        .copy('./node_modules/font-awesome/fonts', 'public/fonts')
    ;
});