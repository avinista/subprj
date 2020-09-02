const gulp = require("gulp");
const gap = require("gulp-append-prepend");
var sass = require('gulp-sass');

gulp.task("sass", function () { 
  gulp.src("./src/scss/app.scss") .pipe(sass().on("error", sass.logError)) .pipe(gulp.dest("./src/assets/css")); });

 gulp.task("sass:watch", function() { gulp.watch("./src/scss/app.scss", ["sass"]);});

gulp.task('default', function() {
  gulp.src('app/Resources/assets/sass/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('web/css'));
});

gulp.task("licenses", async function() {
  // this is to add Creative Tim licenses in the production mode for the minified js
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText()
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified html
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText()
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified css
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText()
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
