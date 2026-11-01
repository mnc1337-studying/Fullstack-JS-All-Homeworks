const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();


function styles() {
    return src('src/styles/main.scss')
        .pipe(sass({ style: 'expanded' }).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('docs/css'))

        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('docs/css'))
        .pipe(browserSync.stream());
}

function html() {
    return src('src/index.html').pipe(dest('docs')).pipe(browserSync.stream());
}


function serve() {
    browserSync.init({ server: 'docs' });
    watch('src/styles/**/*.scss', styles);
    watch('src/*.html', html);
}

exports.build = series(html, styles);
exports.default = series(html, styles, serve);