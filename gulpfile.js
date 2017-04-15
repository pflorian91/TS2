/**
 * gulpfile created on 4/14/17 10:25 PM.
 *
 * @description Gulp configuration file. Compiles Typescript code to ES5.
 * @author Florian Popa <florian@webgenerals.com>
 */

'use strict';

var gulp            = require('gulp');
var ts              = require('gulp-typescript');
var tsProject       = ts.createProject('tsconfig.json');
var merge           = require('merge2');
var sourcemaps      = require('gulp-sourcemaps');
var babel           = require('gulp-babel');
var tslint          = require('gulp-tslint');

const tslintOptions = {
    configuration:       "tslint.json",
    formatter:           "stylish",
    formattersDirectory: null,
    rulesDirectory:      null,
    tslint:              null,
    program:             null
};

const tslintReportOptions = {
    emitError: false,
    reportLimit: 0,
    summarizeFailureOutput: false
};

gulp.task('scripts', function () {
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

gulp.task('lint', function () {
    gulp.src('source/**/*.ts')
        .pipe(tslint(tslintOptions))
        .pipe(tslint.report(tslintReportOptions));
});

gulp.task('default', [ 'scripts', 'lint' ], function () {
    gulp.watch('source/**/*.ts', [ 'scripts', 'lint' ]);
});
