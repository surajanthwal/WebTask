var gulp = require('gulp'),
    util = require("gulp-util"),
    sass = require("gulp-sass"),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util');
log = util.log;

gulp.task('default', ['watch']);

gulp.task("build-css", function () {
    log("Generate CSS files " + (new Date()).toString());
    gulp.src('./public/sass/main.scss')
        .pipe(sass({style: 'expanded'}))
        .pipe(autoprefixer("last 3 version", "safari 5", "ie 8", "ie 9"))
        .pipe(gulp.dest("./"));
    // .pipe(rename({suffix: '.min'}))
    // .pipe(minifycss())
    // .pipe(gulp.dest('target/css'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function () {
    gulp.watch('./public/**/*.scss', ['build-css'], function () {
        return gulp.task('serve');
    });
});

gulp.task('serve', function () {
    gulp.src('index.html')
        .pipe(webserver({
            port: '8080',
            livereload: true,
            open: true
        }));
});
