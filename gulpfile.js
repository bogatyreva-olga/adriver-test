'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concatCss = require('gulp-concat');
const minifyCss = require("gulp-clean-css");

function buildStyles() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest('./build/css'));
};

exports.default = buildStyles;
exports.watch = function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
};
