const gulp = require('gulp');
const clean = require('gulp-clean');
const fs = require('fs-extra');

gulp.task('clean', () => {
  // gulp.src(['dist'], { read: false }).pipe(clean());
  return fs.existsSync('dist') ? gulp.src(['dist'], { read: false }).pipe(clean()) : Promise.resolve();
});

gulp.task('clean:images', () => {
    return fs.existsSync('dist') ? gulp.src(['dist/images/'], { read: false }).pipe(clean()) : Promise.resolve();
});