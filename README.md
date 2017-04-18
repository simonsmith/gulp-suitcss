# gulp-suitcss [![Build Status](https://travis-ci.org/simonsmith/gulp-suitcss.svg?branch=master)](https://travis-ci.org/simonsmith/gulp-suitcss) [![Build status](https://ci.appveyor.com/api/projects/status/ah0mjm381w6p0r5d?svg=true)](https://ci.appveyor.com/project/simonsmith/gulp-suitcss)

> Preprocess CSS with the [suitcss-preprocessor](https://github.com/suitcss/preprocessor)

## Install

```
$ npm install gulp-suitcss --save-dev
```

## Usage

```js
const gulp = require('gulp');
const suitcss = require('gulp-suitcss');

gulp.task('default', () =>
  gulp.src('src/index.css')
    .pipe(suitcss({
      minify: true,
    }))
    .pipe(gulp.dest('build'))
);
```

## API

### suitcss([options])

#### options

See the [suitcss preprocessor API](https://github.com/suitcss/preprocessor#nodejs).

## Credit

Original version by Casear Chu