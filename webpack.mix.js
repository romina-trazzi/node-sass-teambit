let mix = require('laravel-mix');

mix
.js('src/main.js', 'js') // Prende il file dalla cartella search, lo compila e mette il nuovo in dist\js
.sass('src/style.scss', 'css') // Prende il file dalla cartella search, lo compila e mette il nuovo in dist\css
.setPublicPath('dist'); // Stabilisce il nome della cartella principale dei file compilati

