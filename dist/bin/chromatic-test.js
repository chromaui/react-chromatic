#!/usr/bin/env node
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _jsonfile = require('jsonfile');

var _tester = require('../tester');

var _tester2 = _interopRequireDefault(_tester);

var _environment = require('../assets/environment');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Ensure NODE_ENV is set
process.env.NODE_ENV = process.env.NODE_ENV || 'test';

_commander2.default.option('-a, --app-code [code]', 'the code for your app, get from chromaticqa.com').option('-s, --script-name [name]', 'The npm script that starts your app/storybook.').option('-S, --do-not-start', "Don't attempt to start; use if your app is already running", false).option('-p, --port [port]', 'What port does your app serve?').option('--app-path [path]', 'URI path component to access Chromatic within the target app').option('--storybook-addon', 'Autodetect config for storybook addon setup', false).option('--url [url]', 'App is already running at url').option('--exit-zero-on-changes', "Use a 0 exit code if changes are detected (i.e. don't stop the build)", false).option('--debug', 'Output more debugging information', false).parse(process.argv);

function findOption(storybookScript, shortName, longName) {
  var parts = storybookScript.split(/[\s+|=]/);
  var index = parts.indexOf(longName);
  if (index === -1) {
    index = parts.indexOf(shortName);
  }
  if (index === -1) {
    throw new Error('Didn\'t find storybook option: ' + shortName + '/' + longName + ' in \'' + storybookScript + '\'');
  }
  return parts[index + 1];
}

var storybookOptions = {};
if (_commander2.default.storybookAddon) {
  storybookOptions = {
    appPath: '/iframe.html'
  };

  var packageJson = (0, _jsonfile.readFileSync)(_path2.default.resolve('./package.json'));
  var scriptName = _commander2.default.scriptName || 'storybook';
  var storybookScript = packageJson.scripts && packageJson.scripts[scriptName];

  if (storybookScript) {
    var port = _commander2.default.port || findOption(storybookScript, '-p', '--port');

    storybookOptions = (0, _extends3.default)({}, storybookOptions, {
      scriptName: scriptName,
      port: port
    });

    // eslint-disable-next-line no-console
    console.log('Chromatic Tester: Detected \'' + scriptName + '\' script, running with inferred options:\n  --script-name=' + scriptName + ' --port=' + port + '\nOverride any of the above if they were inferred incorrectly.\n');
  } else {
    // eslint-disable-next-line no-console
    console.error('Chromatic Tester: Didn\'t find a script called \'' + scriptName + '\' in your `package.json`.\n' + 'Make sure you set the `--script-name` option to the value of the npm script that starts your storybook');
    process.exit(255);
  }
}

var commanderOptions = {
  config: _commander2.default.config,
  appCode: _commander2.default.appCode || _environment.CHROMATIC_APP_CODE,
  scriptName: _commander2.default.scriptName,
  noStart: _commander2.default.doNotStart,
  port: _commander2.default.port,
  appPath: _commander2.default.appPath,
  url: _commander2.default.url,
  exitZeroOnChanges: _commander2.default.exitZeroOnChanges,
  verbose: _commander2.default.debug,
  createTunnel: _environment.CHROMATIC_CREATE_TUNNEL !== 'false',
  originalArgv: process.argv
};

// We want the user's options to win, but not if they are undefined!
//   (That's what Object.assign would do)
function combine(obj1, obj2) {
  var ret = {};

  [obj1, obj2].forEach(function (obj) {
    (0, _keys2.default)(obj).filter(function (key) {
      return obj[key] !== undefined;
    }).forEach(function (key) {
      ret[key] = obj[key];
    });
  });

  return ret;
}

(function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var commandLineOptions, exitCode;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            commandLineOptions = combine(storybookOptions, commanderOptions);
            _context.next = 4;
            return (0, _tester2.default)(commandLineOptions);

          case 4:
            exitCode = _context.sent;

            process.exit(exitCode);
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);

            // eslint-disable-next-line no-console
            console.error(_context.t0);
            // Not sure what exit code to use but this can mean error.
            process.exit(255);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));

  function executeTest() {
    return _ref.apply(this, arguments);
  }

  return executeTest;
})()();
//# sourceMappingURL=chromatic-test.js.map