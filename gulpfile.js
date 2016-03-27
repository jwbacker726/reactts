"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // Runs a local dev server
var open = require('gulp-open'); // Open a url in a web browser
var print = require('gulp-print');
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify'); // JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');

var config = {
    port: 9111,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: [
            './src/**/*.js',
            './src/**/*.jsx'
        ],
        images: './src/images/*',
        dist: './dist',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        mainJs: './src/main.js'
    }
};

// Start a local development server
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});


gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('print', function () {
    gulp.src(config.paths.html)
        .pipe(print());
});

gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('js', function () {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());

    // skipped favicon.ico stuff
});

gulp.task('lint', function () {
    return gulp.src(config.paths.js)
        .pipe(eslint({config: 'eslint.config.json'}))
        .pipe(eslint.format());
});

gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);
