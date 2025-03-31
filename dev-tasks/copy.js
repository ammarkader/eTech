const gulp = require('gulp');
// const flatten = require('gulp-flatten');
const changed = require('gulp-changed');

// gulp.task('copy:php', () => {
//   return gulp
//     .src('src/php/**/*')
//     .pipe(flatten())
//     .pipe(changed('dist/', { hasChanged: changed.compareContents }))
//     .pipe(gulp.dest('dist/'));
// });

gulp.task('copy:js', () => {
  return gulp
    .src('src/scripts/vendor/**/*.*')
    // .pipe(flatten())
    // .pipe(changed('dist/js/', { hasChanged: changed.compareContents }))
    .pipe(changed('dist/js/vendor/', { hasChanged: changed.compareContents }))
    .pipe(gulp.dest('dist/js/vendor/'));
});

gulp.task('copy:images', () => {
  return gulp
    .src('src/images/**/*')
    // .pipe(flatten())
    .pipe(changed('dist/images/', { hasChanged: changed.compareContents }))
    .pipe(gulp.dest('dist/images/'));
});

gulp.task( 'copy', gulp.series( 'copy:images', 'copy:js' ) );

gulp.task('copy:watch', (done) => {
  gulp.watch(['src/images/**/*'], gulp.series('copy:images'));
  gulp.watch(['src/scripts/vendor/**/*'], gulp.series('copy:js'));
  // gulp.watch([], gulp.series('copy'));
  done();
});
