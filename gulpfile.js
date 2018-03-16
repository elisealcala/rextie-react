var gulp = require('gulp')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var browserify = require('browserify')
var babel = require('babelify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var plumber = require('gulp-plumber')

var dirs = {
  src: './src',
  dest: './dist'
};

var sassPaths = {
  src: dirs.src + '/css/*.scss',
  dest: dirs.dest + '/css/'
};

var jsPaths = {
  src: dirs.src + '/js/main.js',
  dest: dirs.dest + '/js/'
};

gulp.task('compressScripts', function () {
  gulp.src(jsPaths.src)
    .pipe(plumber())
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsPaths.dest));
});

gulp.task('js', function () {
  return browserify(jsPaths.src, { debug: true, extensions: ['es6'] })
    .transform("babelify")
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(jsPaths.dest))
});

gulp.task('sass', function () {
  gulp.src(sassPaths.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(sassPaths.dest));
});

gulp.task('watch', function () {
  gulp.watch(sassPaths.src, ['sass']);
  gulp.watch(jsPaths.src, ['js']);
});

gulp.task('default', ['watch', 'compressScripts']);
