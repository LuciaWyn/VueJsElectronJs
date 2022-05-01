let mix = require('laravel-mix');
  

mix.js('src/app.js', 'renderer.js').vue({version:3});