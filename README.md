
## Information

<table>
<tr>
<td>Package</td><td>gulp-suitcss</td>
</tr>
<tr>
<td>Description</td>
<td>Preprocess and validate SUIT CSS components</td>
</tr>
<tr>
<td>Node Version</td>
<td>≥ 0.10</td>
</tr>
</table>

## Usage

Compile to CSS

```javascript
var suitcss = require('gulp-suitcss');

gulp.task('suitcss', function() {
  var YOUR_OPTION = {};

  gulp.src('./lib/*.css')
    .pipe(suitcss(YOUR_OPTION)))
    .pipe(gulp.dest('./dist/'))
});
```

## Options

All options supported by the [suitcss-preprocessor](https://github.com/suitcss/preprocessor) are supported





## LICENSE

(MIT License)

Copyright (c) 2013 Blaine Bublitz

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.