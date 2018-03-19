var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('copy', function() {
  gulp.src('node_modules/react-mdl/extra/**/*')
    .pipe(gulp.dest('vendor/react-mdl'))
});

gulp.task("build", function(){
  return browserify({
    entries: ["./src/index.js"],
    extensions: [".js", ".jsx"]
  })
  .transform(babelify.configure({
    presets : ["es2015", "react"],
    plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
  }))
  .bundle()
  .pipe(source("bundle.js"))
  .pipe(gulp.dest("./assets/js"));
});

gulp.task('default', ['copy', 'build']);
