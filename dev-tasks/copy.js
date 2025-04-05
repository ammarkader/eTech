const gulp = require("gulp");
const changed = require("gulp-changed");

// Task to copy HTML files from the root to dist
gulp.task("copy:html", () => {
  return gulp
    .src("*.html")
    .pipe(changed("dist/", { hasChanged: changed.compareContents }))
    .pipe(gulp.dest("dist/"));
});

// Task to copy CSS files from the root to dist
gulp.task("copy:css", () => {
  return gulp
    .src("*.css")
    .pipe(changed("dist/", { hasChanged: changed.compareContents }))
    .pipe(gulp.dest("dist/"));
});

// Task to copy vendor JavaScript files
gulp.task("copy:js", () => {
  return gulp
    .src("src/scripts/vendor/**/*.*")
    .pipe(changed("dist/js/vendor/", { hasChanged: changed.compareContents }))
    .pipe(gulp.dest("dist/js/vendor/"));
});

// Task to copy image files
gulp.task("copy:images", () => {
  return gulp
    .src("src/images/**/*")
    .pipe(changed("dist/images/", { hasChanged: changed.compareContents }))
    .pipe(gulp.dest("dist/images/"));
});

// Main 'copy' task to run all copy sub-tasks in parallel
gulp.task(
  "copy",
  gulp.parallel("copy:images", "copy:js", "copy:html", "copy:css")
);

// 'copy:watch' task to watch for changes in all relevant files
gulp.task("copy:watch", (done) => {
  gulp.watch(["src/images/**/*"], gulp.series("copy:images"));
  gulp.watch(["src/scripts/vendor/**/*"], gulp.series("copy:js"));
  gulp.watch(["*.html"], gulp.series("copy:html"));
  gulp.watch(["*.css"], gulp.series("copy:css"));
  done();
});
