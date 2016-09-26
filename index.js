var gutil = require('gulp-util');
var through = require('through2');
var preprocessor = require('suitcss-preprocessor');
var assign = require('lodash.assign');

module.exports = suitcss;

var PLUGIN_NAME = 'gulp-suitcss';

function suitcss(opts) {
  opts = opts || {};

  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
      return;
    }

    assign(opts, {
      postcss: {
        from: file.path,
        to: file.path,
      },
    });

    preprocessor(file.contents.toString(), opts)
      .then(function(result) {
        file.contents = new Buffer(result.css);

        var warnings = result.warnings();
        if (warnings.length > 0) {
          gutil.log(PLUGIN_NAME, ':\n  ' + warnings.join('\n  '));
        }

        setImmediate(cb, null, file);
      })
      .catch(function(err) {
        var cssError = err.name === 'CssSyntaxError';
        if (cssError) {
          err.message += err.showSourceCode();
        }

        // Prevent stream’s unhandled exception from being suppressed by Promise
        // https://git.io/vihyQ
        setImmediate(cb, new gutil.PluginError(PLUGIN_NAME, err, {
          fileName: file.path,
          showStack: !cssError,
        }));
      });
  });
}
