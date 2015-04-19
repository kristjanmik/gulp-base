var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

module.exports = function(gulp) {
  gulp.task('watch', ['build'], function() {
    livereload.listen();

    watch(gulp.config.source + '/styles/**/*.less', function() {
      gulp.start('styles');
    });

    watch(gulp.config.source + '/js/**/*.js', function() {
      gulp.start('scripts');
    });

    watch([
      gulp.config.source + '/*.html',
      gulp.config.source + '/img/**/*.{png,gif,jpg,jpeg,svg}',
      gulp.config.source + '/fonts/**/*',
      gulp.config.source + '/videos/**/*'
    ], function() {
      gulp.start('copy');
    });

    watch(gulp.config.source + '/views/**/*.jade', function() {
      gulp.start('templates');
    });

    watch(gulp.config.source + '/img/**/*.{png,gif,jpg,jpeg,svg}', function() {
      gulp.start('images');
    });
  });
};
