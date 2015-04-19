module.exports = function(gulp, gutil) {
  var jade = require('gulp-jade');
  var prod = gutil.env.prod;

  gulp.task('templates', function() {
    return gulp.srcWithErrorHandling(gulp.config.source + '/views/*.jade')
      .pipe(jade({
        pretty: !prod
      }))
      .pipe(gulp.dest(gulp.config.target));
  });
};
