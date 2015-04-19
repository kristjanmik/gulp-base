var runSequence = require('run-sequence');

module.exports = function(gulp) {
  gulp.task('build', ['clean'], function(cb) {
    runSequence('copy', 'scripts', 'styles', 'templates', 'images', cb);
  });
};
