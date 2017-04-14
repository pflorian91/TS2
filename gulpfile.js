/**
 * gulpfile created on 4/14/17 10:25 PM.
 *
 * @description [To be completed]
 * @author Florian Popa <florian@webgenerals.com>
 */

var gulp       = require("gulp");
var ts         = require("gulp-typescript");
var tsProject  = ts.createProject("tsconfig.json");
var merge      = require('merge2');
var sourcemaps = require('gulp-sourcemaps');
var babel      = require('gulp-babel');

gulp.task("scripts", function () {
    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject(ts.reporter.longReporter()));

    // Merge the two output streams, so this task is finished when the IO of both operations is done.
    return merge([
        tsResult.dts.pipe(gulp.dest('dist')),
        tsResult.js
            .pipe(babel({
                presets: [ 'es2015' ]
            }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('dist'))
    ]);
});

gulp.task('watch', [ 'scripts' ], function () {
    gulp.watch('source/**/*.ts', [ 'scripts' ]);
});

gulp.task('default', [ 'scripts', 'watch' ]);
