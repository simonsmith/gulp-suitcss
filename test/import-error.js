'use strict';

var test = require('tap').test;

var gulp = require('gulp');
var task = require('../');
var path = require('path');

var filename = path.join(__dirname, './fixtures/suit-import-error.css');

test('import error module should emit errors of suitcss correctly ', function (t) {
    gulp.src(filename)
        .pipe(task()
            .on('error', function (err) {
                t.ok(err);
                t.ok(err instanceof Error);
                t.end();
            }));
});
