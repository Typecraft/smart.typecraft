var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean-css');

gulp.task('sass', () => {
  return gulp.src('public/scss/**/*.scss')
    .pipe(sass()).on('error', sass.logError)
    .pipe(gulp.dest('web/static/css'));
});

gulp.task('sass:production', () => {
  return gulp.src(scssFolders)
    .pipe(sass()).on('error', sass.logError)
    .pipe(clean())
    .pipe(gulp.dest('tcweb/static/css'));
});

gulp.task('watch:sass', () => {
  gulp.watch(scssFolders, ['sass']);
});

gulp.task('watch', ['watch:sass']);

gulp.task('default', ['sass']);
gulp.task('production', ['sass:production']);
