var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var autoprefixer = require('gulp-autoprefixer');
var path = require('path');

gulp.task('svgstore', function () {
    return gulp
        .src('img/svg/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [
                    { cleanupIDs: { minify: true } },
                    { removeTitle: true }
                ]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('img/'));
});

gulp.task('svgmin', function () {
    return gulp.src('img/svg/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return { plugins: [ { removeTitle: true } ] }
        }))
        .pipe(gulp.dest('img/svg/min/'));
});

gulp.task('cssprefix', function () {
    return gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});