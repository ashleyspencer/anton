// Gulpfile
var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('serve', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });

	//tell gulp to watch files
	//watch file and then run task by name
	gulp.watch('./public/css/sass/*.scss', ['sass']);
	gulp.watch('./public/js/*.js', ['js',bs.reload]);
    gulp.watch("./*.html").on('change', bs.reload);
});

gulp.task('sass', function () {
    return gulp.src('./public/css/sass/main.scss')
	  .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/css'))
      .pipe(bs.stream());
  });

gulp.task('js', function () {
	return gulp.src('./public/js/app.js')
		.pipe(sourcemaps.init())
		.pipe(rename('app.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
      .pipe(gulp.dest('./public/js'))
});

gulp.task('default', ['serve']);