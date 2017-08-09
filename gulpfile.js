const gulp = require('gulp');
const sass = require('gulp-sass');
const concatCss = require('gulp-concat-css');
const concat = require('gulp-concat');
const babelify = require('babelify');
const browserify = require('browserify')
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const fontAwesome = require('node-font-awesome');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const jsmin = require('gulp-jsmin');
const rename = require('gulp-rename');

const path = "./"

// sass
gulp.task('sass', () => {
  return gulp.src('styles/sass/*.scss')
    .pipe(sass({
      includePaths: [
        require('node-normalize-scss').includePaths,
        './node_modules/sass-mediaqueries',
        fontAwesome.scssPath
      ]
    }).on('error', sass.logError))
    .pipe(concatCss('style.css'))
    .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
    .pipe(gulp.dest(path + 'styles/css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(path + 'styles/css'));
});

// fontawesome fonts
gulp.task('fonts', function() {
  gulp.src(fontAwesome.fonts)
    .pipe(gulp.dest(path + '/fonts/fontawesome'));
});

// es6
gulp.task('es6', () => {
  browserify('js/es6/App.js')
		.transform('babelify', {
			presets: ['es2015']
		})
		.bundle()	
		.pipe(source('js/bundle.js'))
		.pipe(buffer())
    .pipe(gulp.dest(path))
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(path));
});

// watch
gulp.task('watch', () => {
  gulp.watch('js/es6/*.js', ['es6']);
  gulp.watch('styles/sass/*.scss', ['sass']);
});

gulp.task('default', ['watch', 'es6', 'sass', 'fonts']);