const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

function comprimirJS() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}

function compilarSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        style: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

function comprimirImagens() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

exports.default = function() {
    gulp.watch('./source/scripts/*.js', {ignoreInitial:false}, gulp.series(comprimirJS))
    gulp.watch('./source/styles/*.scss', {ignoreInitial:false}, gulp.series(compilarSass))
    gulp.watch('./source/images/*', {ignoreInitial:false}, gulp.series(comprimirImagens))
}