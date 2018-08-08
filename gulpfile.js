// Gulpfile
var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.
var sass = require('gulp-sass');

gulp.task('serve', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./styles/main.scss', ['sass']);
    gulp.watch("./*.html").on('change', bs.reload);
});

gulp.task('sass', function () {
    return gulp.src('./styles/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./assets'))
      .pipe(bs.stream());
  });

  gulp.task('default', ['serve']);