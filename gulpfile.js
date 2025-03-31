'use strict';
const gulp = require('gulp');

require('require-dir')('./dev-tasks');

gulp.task('build', gulp.series( 'clean', 'copy', 'styles', 'scripts'));

gulp.task('watch', gulp.parallel('copy:watch', 'scripts:watch', 'styles:watch'));

gulp.task('dev', gulp.series('build', 'watch'));


// var concat = require('gulp-concat');
// sass.compiler = require('sass');
// const sass = require('gulp-sass')(require('sass'));
