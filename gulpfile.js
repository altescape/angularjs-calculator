/**
 * Created by michaelwatts
 * Date: 10/06/2014
 * Time: 11:43
 */


var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    protractor = require("gulp-protractor").protractor;

gulp.task('default', function () {
  return gulp.src('app/css/app.sass')
      .pipe(sass({
        lineNumbers: true,
        style: gutil.env.production ? 'compressed' : 'expanded'
      }))
      .pipe(autoprefixer("last 3 versions", "> 5%", "ie 8", "ie 7", "Firefox > 17", "ios 7", { cascade: true }))
      .pipe(gulp.dest('app/css'));
});

var sass_watcher = gulp.watch('app/css/*.sass', ['default']);

sass_watcher.on('change', function(event) {
  console.log('File '+event.path+' was '+event.type+', running tasks...');
});


gulp.task('test', function(){
  return gulp.src(["test/*.js"])
      .pipe(protractor({
        configFile: "test/protractor.config.js",
        args: ['--baseUrl', 'http://angularjs.dev/']
      }));
});
