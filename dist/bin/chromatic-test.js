#!/usr/bin/env node
'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _jsonfile = require('jsonfile');

var _tester = require('../tester');

var _tester2 = _interopRequireDefault(_tester);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Ensure NODE_ENV is set
process.env.NODE_ENV = process.env.NODE_ENV || 'test';

_commander2.default.option('-a, --app-code [code]', 'the code for your app, get from chromaticqa.com').option('-s, --script-name [name]', 'How to start your app. Set to none if your app is already running.').option('-p, --port [port]', 'What port does your app serve?').option('--app-path [path]', "Do we need to access a different path (instead of '/')?", '/').option('--storybook-addon', 'Autodetect config for storybook addon setup', false).option('--debug', 'Output more debugging information', false).option('--create-tunnel [boolean]', 'tunnel the service over the internet (default true)', true).option('--index-url [url]', 'index to connect to').parse(process.argv);

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
    var port = findOption(storybookScript, '-p', '--port');

    var configDir = './.storybook';
    try {
      configDir = findOption(storybookScript, '-c', '--config-dir');
    } catch (e) {
      if (e.message.match('find storybook option')) {
        // eslint-disable-next-line no-console
        console.log('Chromatic Tester: ' + e.message + ', using default (\'' + configDir + '\')');
      } else {
        throw e;
      }
    }

    storybookOptions = (0, _extends3.default)({}, storybookOptions, {
      scriptName: scriptName,
      port: port
    });

    // eslint-disable-next-line no-console
    console.log('Chromatic Tester: Detected \'' + scriptName + '\' script, running on port ' + port + ' and with config dir \'' + configDir + '\'');
  } else {
    // eslint-disable-next-line no-console
    console.error('Chromatic Tester: Didn\'t find a script called \'' + scriptName + '\' in your `package.json`.\n' + 'Make sure you set the `--script-name` option to the value of the npm script that starts your storybook');
    process.exit(255);
  }
}

var commandLineOptions = (0, _extends3.default)({
  config: _commander2.default.config,
  appCode: _commander2.default.appCode,
  scriptName: _commander2.default.scriptName,
  port: _commander2.default.port,
  appPath: _commander2.default.appPath,
  verbose: _commander2.default.debug,
  createTunnel: _commander2.default.createTunnel !== 'false',
  indexUrl: _commander2.default.indexUrl
}, storybookOptions);

(0, _tester2.default)(commandLineOptions).then(function (code) {
  return process.exit(code);
}).catch(function (e) {
  // eslint-disable-next-line no-console
  console.error(e);
  // Not sure what exit code to use but this can mean error.
  process.exit(255);
});
//# sourceMappingURL=chromatic-test.js.map