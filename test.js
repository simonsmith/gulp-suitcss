var gutil = require('gulp-util');
var path = require('path');
var fs = require('fs');
var suitcss = require('./');
var expect = require('chai').expect;

it('should preprocess a CSS file', function(done) {
  var stream = suitcss({
    root: 'fixtures',
    autoprefixer: {
      browsers: ['IE 10'],
    },
  });
  var fixture = fs.readFileSync('./fixtures/index.css');
  var expected = fs.readFileSync('./fixtures/component.out.css', 'utf-8');

  stream.on('data', function(file) {
    expect(file.contents.toString()).to.equal(expected);
  });
  stream.on('end', done);

  stream.write(new gutil.File({
    cwd: __dirname,
    base: path.join(__dirname, 'fixtures'),
    path: path.join(__dirname, 'fixtures', 'index.css'),
    contents: fixture,
  }));

  stream.end();
});

it('should output errors', function(done) {
  var stream = suitcss();

  stream.on('error', function(file) {
    expect(file.name).to.equal('CssSyntaxError');
    done();
  });

  stream.write(new gutil.File({
    cwd: __dirname,
    base: path.join(__dirname, 'fixtures'),
    path: path.join(__dirname, 'fixtures', 'index.css'),
    contents: new Buffer('@import "./fake/css'),
  }));

  stream.end();
});
