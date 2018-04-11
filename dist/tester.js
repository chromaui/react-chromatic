module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("denodeify");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(2);

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(4);

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var waitForBuild = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(client, variables) {
    var _ref2, build, status, inProgressCount, specCount, changeCount, errorCount;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return client.runQuery(TesterBuildQuery, variables);

          case 2:
            _ref2 = _context.sent;
            build = _ref2.app.build;

            debug('build:' + (0, _stringify2.default)(build));
            status = build.status, inProgressCount = build.inProgressCount, specCount = build.specCount, changeCount = build.changeCount, errorCount = build.errorCount;

            if (!(status === 'BUILD_IN_PROGRESS')) {
              _context.next = 11;
              break;
            }

            if (inProgressCount !== lastInProgressCount) {
              lastInProgressCount = inProgressCount;
              log(inProgressCount + '/' + pluralize(specCount, 'spec') + ' remain to test. ' + ('(' + pluralize(changeCount, 'change') + ', ' + pluralize(errorCount, 'error') + ')'));
            }

            _context.next = 10;
            return new _promise2.default(function (resolve) {
              return setTimeout(resolve, BUILD_POLL_INTERVAL);
            });

          case 10:
            return _context.abrupt('return', waitForBuild(client, variables));

          case 11:
            return _context.abrupt('return', build);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function waitForBuild(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _denodeify = __webpack_require__(3);

var _denodeify2 = _interopRequireDefault(_denodeify);

var _nodeAsk = __webpack_require__(12);

var _debug = __webpack_require__(5);

var _debug2 = _interopRequireDefault(_debug);

var _treeKill = __webpack_require__(13);

var _treeKill2 = _interopRequireDefault(_treeKill);

var _runtimes = __webpack_require__(14);

var _runtimes2 = _interopRequireDefault(_runtimes);

var _startApp = __webpack_require__(17);

var _startApp2 = _interopRequireDefault(_startApp);

var _tunnel = __webpack_require__(19);

var _tunnel2 = _interopRequireDefault(_tunnel);

var _packageJson = __webpack_require__(21);

var _GraphQLClient = __webpack_require__(25);

var _GraphQLClient2 = _interopRequireDefault(_GraphQLClient);

var _git = __webpack_require__(27);

var _package = __webpack_require__(29);

var _environment = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BUILD_POLL_INTERVAL = 1000;

var TesterCreateAppTokenMutation = '\n  mutation TesterCreateAppTokenMutation($appCode: String!) {\n    createAppToken(code: $appCode)\n  }\n';

var TesterCreateBuildMutation = '\n  mutation TesterCreateBuildMutation($input: CreateBuildInput!, $isolatorUrl: String!) {\n    createBuild(input: $input, isolatorUrl: $isolatorUrl) {\n      id\n      number\n      specCount\n      componentCount\n      webUrl\n    }\n  }\n';

var TesterBuildQuery = '\n  query TesterBuildQuery($buildNumber: Int!) {\n    app {\n      build(number: $buildNumber) {\n        id\n        status\n        autoAcceptChanges\n        inProgressCount: snapshotCount(statuses: [SNAPSHOT_IN_PROGRESS])\n        specCount\n        changeCount: snapshotCount(statuses: [SNAPSHOT_PENDING, SNAPSHOT_ACCEPTED, SNAPSHOT_DENIED])\n        errorCount: snapshotCount(statuses: [SNAPSHOT_CAPTURE_ERROR])\n      }\n    }\n  }\n';

var debug = (0, _debug2.default)('react-chromatic:tester');

function log(msg) {
  // eslint-disable-next-line no-console
  console.log('Chromatic Tester: ' + msg);
}

function pluralize(n, noun, noNumber) {
  var pluralizedNoun = n === 1 ? noun : noun + 's';

  return noNumber ? pluralizedNoun : n + ' ' + pluralizedNoun;
}

var lastInProgressCount = void 0;

exports.default = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref3) {
    var appCode = _ref3.appCode,
        scriptName = _ref3.scriptName,
        _ref3$noStart = _ref3.noStart,
        noStart = _ref3$noStart === undefined ? false : _ref3$noStart,
        port = _ref3.port,
        _ref3$appPath = _ref3.appPath,
        appPath = _ref3$appPath === undefined ? '/' : _ref3$appPath,
        url = _ref3.url,
        only = _ref3.only,
        _ref3$autoAcceptChang = _ref3.autoAcceptChanges,
        autoAcceptChanges = _ref3$autoAcceptChang === undefined ? false : _ref3$autoAcceptChang,
        _ref3$exitZeroOnChang = _ref3.exitZeroOnChanges,
        exitZeroOnChanges = _ref3$exitZeroOnChang === undefined ? false : _ref3$exitZeroOnChang,
        _ref3$verbose = _ref3.verbose,
        verbose = _ref3$verbose === undefined ? false : _ref3$verbose,
        _ref3$indexUrl = _ref3.indexUrl,
        indexUrl = _ref3$indexUrl === undefined ? _environment.CHROMATIC_INDEX_URL : _ref3$indexUrl,
        _ref3$tunnelUrl = _ref3.tunnelUrl,
        tunnelUrl = _ref3$tunnelUrl === undefined ? _environment.CHROMATIC_TUNNEL_URL : _ref3$tunnelUrl,
        _ref3$createTunnel = _ref3.createTunnel,
        createTunnel = _ref3$createTunnel === undefined ? true : _ref3$createTunnel,
        _ref3$originalArgv = _ref3.originalArgv,
        originalArgv = _ref3$originalArgv === undefined ? false : _ref3$originalArgv;

    var uri, client, _ref5, jwtToken, _ref6, commit, committedAt, committerEmail, committerName, branch, baselineCommits, appPathWithSlash, appUrl, child, isolatorUrl, tunnel, predicate, match, runtimeSpecs, fromCI, exitCode, _ref8, _ref8$createBuild, number, specCount, componentCount, webUrl, onlineHint, _ref9, status, buildAutoAcceptChanges, changeCount, errorCount, scriptCommand, confirmed;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            uri = indexUrl + '/graphql';
            client = new _GraphQLClient2.default({ uri: uri });

            if (appCode) {
              _context2.next = 4;
              break;
            }

            throw new Error('You must provide an app code  -- visit https://www.chromaticqa.com to get your code.' + '\nPass your app code with the `CHROMATIC_APP_CODE` environment variable or the `--app-code` flag.');

          case 4:
            if (!((!scriptName && !noStart || !port) && !url)) {
              _context2.next = 6;
              break;
            }

            throw new Error('You must provide a npm script name (`--script-name`) and port (`--port`) so we can start your app');

          case 6:
            _context2.prev = 6;
            _context2.next = 9;
            return client.runQuery(TesterCreateAppTokenMutation, {
              appCode: appCode
            });

          case 9:
            _ref5 = _context2.sent;
            jwtToken = _ref5.createAppToken;

            client.setJwtToken(jwtToken);
            _context2.next = 19;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2['catch'](6);

            if (!(_context2.t0[0] && _context2.t0[0].message && _context2.t0[0].message.match('No app with code'))) {
              _context2.next = 18;
              break;
            }

            throw new Error('Incorrect app code \'' + appCode + '\' -- visit https://www.chromaticqa.com to get your code');

          case 18:
            throw _context2.t0;

          case 19:
            _context2.next = 21;
            return (0, _git.getCommit)();

          case 21:
            _ref6 = _context2.sent;
            commit = _ref6.commit;
            committedAt = _ref6.committedAt;
            committerEmail = _ref6.committerEmail;
            committerName = _ref6.committerName;
            _context2.next = 28;
            return (0, _git.getBranch)();

          case 28:
            branch = _context2.sent;

            debug('git info: ' + (0, _stringify2.default)({ commit: commit, committedAt: committedAt, branch: branch }));

            _context2.next = 32;
            return (0, _git.getBaselineCommits)(client);

          case 32:
            baselineCommits = _context2.sent;

            debug('Found baselineCommits: ' + baselineCommits);

            appPathWithSlash = appPath[0] === '/' ? appPath : '/' + appPath;
            appUrl = url || 'http://localhost:' + port + appPathWithSlash;
            child = void 0;

            if (!(!noStart && !url)) {
              _context2.next = 45;
              break;
            }

            log('Starting app with `npm run ' + scriptName + '`');
            _context2.next = 41;
            return (0, _startApp2.default)({ scriptName: scriptName, url: appUrl });

          case 41:
            child = _context2.sent;

            log('Started app on port ' + port);
            _context2.next = 50;
            break;

          case 45:
            _context2.next = 47;
            return (0, _startApp.checkResponse)(appUrl);

          case 47:
            if (_context2.sent) {
              _context2.next = 49;
              break;
            }

            throw new Error('No server responding at ' + appUrl + ' -- make sure you\'ve started it.');

          case 49:
            log('Detected app on port ' + port);

          case 50:
            isolatorUrl = appUrl;
            tunnel = void 0;

            if (!(createTunnel && !url)) {
              _context2.next = 59;
              break;
            }

            log('Opening tunnel to Chromatic capture servers');
            _context2.next = 56;
            return (0, _tunnel2.default)({ tunnelUrl: tunnelUrl, port: port });

          case 56:
            tunnel = _context2.sent;

            debug('Opened tunnel to ' + tunnel.url);
            isolatorUrl = '' + tunnel.url + appPathWithSlash;

          case 59:

            debug('Connecting to ' + isolatorUrl);
            log('Uploading and verifying build (this may take a few minutes depending on your connection)');

            predicate = function predicate() {
              return true;
            };

            if (!only) {
              _context2.next = 68;
              break;
            }

            match = only.match(/(.*):([^:]*)/);

            if (match) {
              _context2.next = 66;
              break;
            }

            throw new Error('--only argument must provided in the from "componentName:specName"');

          case 66:
            log('Running only the \'' + match[1] + '\' spec of \'' + match[2] + '\'');

            predicate = function predicate(_ref7) {
              var name = _ref7.name,
                  componentName = _ref7.componentName,
                  otherComponentName = _ref7.component.name;
              return name === match[2] && (componentName || otherComponentName) === match[1];
            };

          case 68:
            _context2.next = 70;
            return (0, _runtimes2.default)(isolatorUrl, { verbose: verbose });

          case 70:
            _context2.t1 = predicate;
            runtimeSpecs = _context2.sent.filter(_context2.t1);

            log('Found ' + runtimeSpecs.length + ' specs');

            fromCI = !!process.env.CI;

            debug('Detected build fromCI:' + fromCI);
            debug('Detected package version:' + _package.version);

            exitCode = 5;
            _context2.prev = 77;
            _context2.next = 80;
            return client.runQuery(TesterCreateBuildMutation, {
              input: {
                autoAcceptChanges: autoAcceptChanges,
                branch: branch,
                commit: commit,
                committedAt: committedAt,
                baselineCommits: baselineCommits,
                runtimeSpecs: runtimeSpecs,
                fromCI: fromCI,
                packageVersion: _package.version,
                committerEmail: committerEmail,
                committerName: committerName
              },
              isolatorUrl: isolatorUrl
            });

          case 80:
            _ref8 = _context2.sent;
            _ref8$createBuild = _ref8.createBuild;
            number = _ref8$createBuild.number;
            specCount = _ref8$createBuild.specCount;
            componentCount = _ref8$createBuild.componentCount;
            webUrl = _ref8$createBuild.webUrl;
            onlineHint = 'View it online at ' + webUrl;

            log('Started Build ' + number + ' ' + ('(' + pluralize(componentCount, 'component') + ', ' + pluralize(specCount, 'spec') + ').\n\n' + onlineHint + '.'));

            _context2.next = 90;
            return waitForBuild(client, {
              buildNumber: number
            });

          case 90:
            _ref9 = _context2.sent;
            status = _ref9.status;
            buildAutoAcceptChanges = _ref9.autoAcceptChanges;
            changeCount = _ref9.changeCount;
            errorCount = _ref9.errorCount;
            _context2.t2 = status;
            _context2.next = _context2.t2 === 'BUILD_PASSED' ? 98 : _context2.t2 === 'BUILD_ACCEPTED' ? 101 : _context2.t2 === 'BUILD_PENDING' ? 101 : _context2.t2 === 'BUILD_DENIED' ? 101 : _context2.t2 === 'BUILD_FAILED' ? 105 : _context2.t2 === 'BUILD_TIMED_OUT' ? 108 : _context2.t2 === 'BUILD_ERROR' ? 111 : 114;
            break;

          case 98:
            log('Build ' + number + ' passed! ' + onlineHint + '.');
            exitCode = 0;
            return _context2.abrupt('break', 115);

          case 101:
            log('Build ' + number + ' has ' + pluralize(changeCount, 'change') + '. ' + onlineHint + '.');
            exitCode = exitZeroOnChanges || buildAutoAcceptChanges ? 0 : 1;
            if (exitCode !== 0) {
              log('Pass --exit-zero-on-changes if you want this command to exit successfully in this case.\n  Alternatively, pass --auto-accept-changes if you want changed builds to pass on this branch.\n  Read more: http://docs.chromaticqa.com/test');
            }
            return _context2.abrupt('break', 115);

          case 105:
            log('Build ' + number + ' has ' + pluralize(errorCount, 'error') + '. ' + onlineHint + '.');
            exitCode = 2;
            return _context2.abrupt('break', 115);

          case 108:
            log('Build ' + number + ' has timed out. Ensure your machine is connected to the internet and please try again.');
            exitCode = 3;
            return _context2.abrupt('break', 115);

          case 111:
            log('Build ' + number + ' has failed to run. Our apologies. Please try again.');
            exitCode = 4;
            return _context2.abrupt('break', 115);

          case 114:
            throw new Error('Unexpected build status: ' + status);

          case 115:
            _context2.next = 125;
            break;

          case 117:
            _context2.prev = 117;
            _context2.t3 = _context2['catch'](77);

            if (!(_context2.t3.length && _context2.t3[0] && _context2.t3[0].message.match(/Cannot run a build with no specs./))) {
              _context2.next = 124;
              break;
            }

            log(_context2.t3[0].message);
            exitCode = 255;
            _context2.next = 125;
            break;

          case 124:
            throw _context2.t3;

          case 125:
            _context2.prev = 125;

            if (tunnel) {
              tunnel.close();
            }

            if (!child) {
              _context2.next = 130;
              break;
            }

            _context2.next = 130;
            return (0, _denodeify2.default)(_treeKill2.default)(child.pid, 'SIGHUP');

          case 130:
            return _context2.finish(125);

          case 131:
            if (!(!(0, _packageJson.checkPackageJson)() && originalArgv)) {
              _context2.next = 138;
              break;
            }

            scriptCommand = ('chromatic test ' + originalArgv.slice(2).join(' ')).replace(/--app-code[= ]\S+/, '');
            _context2.next = 135;
            return (0, _nodeAsk.confirm)("\nYou have not added Chromatic's test script to your `package.json`. Would you like me to do it for you?");

          case 135:
            confirmed = _context2.sent;

            if (confirmed) {
              (0, _packageJson.addScriptToPackageJson)('chromatic', scriptCommand);
              // eslint-disable-next-line no-console
              console.log('\nAdded script `chromatic`. You can now run it here or in CI with `npm run chromatic` (or `yarn chromatic`)');
            } else {
              // eslint-disable-next-line no-console
              console.log('\nNo problem. You can add it later with:\n{\n  "scripts": {\n    "chromatic": "' + scriptCommand + '"\n  }\n}');
            }

            // eslint-disable-next-line no-console
            console.log('\nMake sure you set the `CHROMATIC_APP_CODE` environment variable when running builds (in particular on your CI server).');

          case 138:
            return _context2.abrupt('return', exitCode);

          case 139:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[6, 14], [77, 117, 125, 131]]);
  }));

  function runTest(_x3) {
    return _ref4.apply(this, arguments);
  }

  return runTest;
}();

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("node-ask");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("tree-kill");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = __webpack_require__(6);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = __webpack_require__(4);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(2);

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__(15);

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _jsdom = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addShimsToJSDOM(dom) {
  Object.defineProperty(dom.window, 'matchMedia', {
    value: function value() {
      return {
        matches: true,
        addListener: function addListener() {},
        removeListener: function removeListener() {}
      };
    }
  });

  var LocalStorageMock = function () {
    function LocalStorageMock() {
      (0, _classCallCheck3.default)(this, LocalStorageMock);

      this.store = {};
    }

    (0, _createClass3.default)(LocalStorageMock, [{
      key: 'getItem',
      value: function getItem(key) {
        return this.store[key];
      }
    }, {
      key: 'removeItem',
      value: function removeItem(key) {
        delete this.store[key];
      }
    }, {
      key: 'setItem',
      value: function setItem(key, value) {
        this.store[key] = value.toString();
      }
    }, {
      key: 'clear',
      value: function clear() {
        this.store = {};
      }
    }]);
    return LocalStorageMock;
  }();

  Object.defineProperty(dom.window, 'localStorage', {
    value: new LocalStorageMock()
  });

  var WorkerMock = function () {
    function WorkerMock() {
      (0, _classCallCheck3.default)(this, WorkerMock);
    }

    (0, _createClass3.default)(WorkerMock, [{
      key: 'addEventListener',
      value: function addEventListener() {}
    }, {
      key: 'removeEventLister',
      value: function removeEventLister() {}
    }, {
      key: 'postMessage',
      value: function postMessage() {}
    }, {
      key: 'terminate',
      value: function terminate() {}
    }]);
    return WorkerMock;
  }();

  Object.defineProperty(dom.window, 'Worker', WorkerMock);

  Object.defineProperty(dom.window, 'crypto', {
    value: {
      getRandomValues: function getRandomValues() {
        return 0;
      }
    }
  });
} /* eslint-disable no-console, class-methods-use-this */

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$verbose = _ref2.verbose,
        verbose = _ref2$verbose === undefined ? false : _ref2$verbose;

    var logs, virtualConsole, dom;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            logs = [];
            virtualConsole = new _jsdom.VirtualConsole();

            (0, _keys2.default)(console).forEach(function (logType) {
              virtualConsole.on(logType, function (log) {
                return logs.push({ logType: logType, log: log });
              });
            });
            virtualConsole.on('jsdomError', function (log) {
              return logs.push({ logType: 'error', log: log });
            });

            if (verbose) {
              virtualConsole.sendTo(console);
            }

            _context.next = 7;
            return _jsdom.JSDOM.fromURL(url, {
              userAgent: 'Chromatic',
              // We need to execute the scripts on the page
              runScripts: 'dangerously',
              // We need to load scripts that are loaded via script tags
              resources: 'usable',
              // Send console.logs -> /dev/null (so to speak)
              virtualConsole: virtualConsole,
              // Add a requestAnimationFrame polyfill, react@16 warns about it
              pretendToBeVisual: true
            });

          case 7:
            dom = _context.sent;


            // NOTE: this line runs immediately after the HTML for the page has been loaded
            // it's not possible that any external script tags have been executed.
            // It is possible that they have a <script> tag that need these shims, but
            // I highly doubt it. If we run into this we can always use JSDOM's old API
            // to inject our own scripts at 'create' time
            addShimsToJSDOM(dom);

            return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
              return dom.window.document.addEventListener('DOMContentLoaded', function () {
                var separator = '=========================';

                if (!dom.window.__chromaticRuntimeSpecs__ && !dom.window.__STORYBOOK_CLIENT_API__) {
                  console.error('Didn\'t find \'window.__chromaticRuntimeSpecs__\' at ' + url + '.\n' + 'Have you installed the Chromatic widget or addon correctly?\n');

                  if (!verbose && logs.length) {
                    console.error('Your app\'s output:\n' + separator + '\n');
                    logs.forEach(function (_ref3) {
                      var logType = _ref3.logType,
                          log = _ref3.log;
                      return console[logType](log);
                    });
                    console.error('\n' + separator + '\n');
                  }
                  reject(new Error('Didn\'t find \'window.__chromaticRuntimeSpecs__\' at ' + url + '.'));
                }

                // If their app logged something to console.error, it's probably, but
                // not definitely an issue. See https://github.com/hichroma/chromatic/issues/757
                if (logs.find(function (log) {
                  return log.logType === 'error';
                })) {
                  console.error('\nYour app logged the following to the error console:\n' + separator);
                  logs.filter(function (log) {
                    return log.logType === 'error';
                  }).forEach(function (_ref4) {
                    var logType = _ref4.logType,
                        log = _ref4.log;
                    return console[logType](log);
                  });
                  console.error('\n' + separator + '\nThis may lead to some stories not working right or getting detected by Chromatic' + '\nWe suggest you fix the errors, but we will continue anyway..\n');
                }

                var specs = void 0;
                if (dom.window.__chromaticRuntimeSpecs__) {
                  specs = dom.window.__chromaticRuntimeSpecs__();
                } else {
                  specs = dom.window.__STORYBOOK_CLIENT_API__.getStorybook().map(function (_ref5) {
                    var kind = _ref5.kind,
                        stories = _ref5.stories;
                    return stories.map(function (_ref6) {
                      var name = _ref6.name;
                      return {
                        runtime: 'storybook-no-addon',
                        component: { name: kind },
                        name: name,
                        input: (0, _stringify2.default)({ kind: kind, name: name })
                      };
                    });
                  }).reduce(function (a, b) {
                    return [].concat((0, _toConsumableArray3.default)(a), (0, _toConsumableArray3.default)(b));
                  }, []);
                }

                dom.window.close();
                resolve(specs);
              });
            }));

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function getRuntimeSpecs(_x2) {
    return _ref.apply(this, arguments);
  }

  return getRuntimeSpecs;
}();

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("jsdom");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkResponse = undefined;

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__(2);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var checkResponse = exports.checkResponse = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _isomorphicFetch2.default)(url);

          case 3:
            return _context.abrupt('return', true);

          case 6:
            _context.prev = 6;
            _context.t0 = _context['catch'](0);
            return _context.abrupt('return', false);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 6]]);
  }));

  return function checkResponse(_x) {
    return _ref.apply(this, arguments);
  };
}();

var waitForResponse = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(child, url) {
    var timeoutAt;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            timeoutAt = Date.now() + TIMEOUT;
            return _context3.abrupt('return', new _promise2.default(function (resolve, reject) {
              var check = function () {
                var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                  return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          if (!(Date.now() > timeoutAt)) {
                            _context2.next = 4;
                            break;
                          }

                          resolved = true;
                          reject(new Error('No server responding at ' + url + ' within ' + TIMEOUT / 1000 + ' seconds.'));
                          return _context2.abrupt('return');

                        case 4:
                          _context2.next = 6;
                          return checkResponse(url);

                        case 6:
                          if (!_context2.sent) {
                            _context2.next = 10;
                            break;
                          }

                          resolved = true;
                          resolve();
                          return _context2.abrupt('return');

                        case 10:
                          setTimeout(check, CHECK_EVERY);

                        case 11:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));

                return function check() {
                  return _ref3.apply(this, arguments);
                };
              }();

              var resolved = false;

              check();

              if (child) {
                var output = '';
                child.stderr.on('data', function (e) {
                  output += e.toString();
                });
                child.stdout.on('data', function (o) {
                  output += o.toString();
                });

                child.on('close', function () {
                  if (!resolved) {
                    reject(new Error('Script failed to start: ' + output + '\n'));
                  }
                });
              }
            }));

          case 2:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function waitForResponse(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var _child_process = __webpack_require__(10);

var _isomorphicFetch = __webpack_require__(18);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHECK_EVERY = 1000;
var TIMEOUT = 5 * 60 * 1000;

exports.default = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref4) {
    var _ref4$scriptName = _ref4.scriptName,
        scriptName = _ref4$scriptName === undefined ? 'start' : _ref4$scriptName,
        url = _ref4.url;
    var child;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            child = void 0;

            if (!(scriptName !== 'none')) {
              _context4.next = 7;
              break;
            }

            _context4.next = 4;
            return checkResponse(url);

          case 4:
            if (!_context4.sent) {
              _context4.next = 6;
              break;
            }

            throw new Error('Detected process already running at ' + url + '\nIf you are sure this is your server, pass `--do-not-start` to skip this step.');

          case 6:

            child = (0, _child_process.spawn)('npm', ['run', scriptName], {
              env: (0, _extends3.default)({}, process.env, {
                NODE_ENV: 'development',
                BROWSER: 'none'
              })
            });

          case 7:
            _context4.next = 9;
            return waitForResponse(child, url);

          case 9:
            return _context4.abrupt('return', child);

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  function startApp(_x4) {
    return _ref5.apply(this, arguments);
  }

  return startApp;
}();

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _localtunnel = __webpack_require__(20);

var _localtunnel2 = _interopRequireDefault(_localtunnel);

var _denodeify = __webpack_require__(3);

var _denodeify2 = _interopRequireDefault(_denodeify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
    var tunnelUrl = _ref.tunnelUrl,
        port = _ref.port;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (port) {
              _context.next = 2;
              break;
            }

            throw new Error('Need to pass a port into `openTunnel`');

          case 2:
            return _context.abrupt('return', (0, _denodeify2.default)(_localtunnel2.default)(port, {
              local_host: 'localhost',
              host: tunnelUrl
            }));

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function openTunnel(_x) {
    return _ref2.apply(this, arguments);
  }

  return openTunnel;
}();

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("localtunnel");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = __webpack_require__(22);

var _values2 = _interopRequireDefault(_values);

exports.checkPackageJson = checkPackageJson;
exports.addScriptToPackageJson = addScriptToPackageJson;

var _path = __webpack_require__(23);

var _path2 = _interopRequireDefault(_path);

var _jsonfile = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkPackageJson() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$appDir = _ref.appDir,
      appDir = _ref$appDir === undefined ? process.cwd() : _ref$appDir;

  var packageJson = (0, _jsonfile.readFileSync)(_path2.default.resolve(appDir, './package.json'));

  return (0, _values2.default)(packageJson.scripts || {}).find(function (script) {
    return script.match('chromatic test');
  });
}

function addScriptToPackageJson(scriptName, scriptCommand) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$appDir = _ref2.appDir,
      appDir = _ref2$appDir === undefined ? process.cwd() : _ref2$appDir;

  var filename = _path2.default.resolve(appDir, './package.json');
  var packageJson = (0, _jsonfile.readFileSync)(filename);

  if (packageJson[scriptName]) {
    throw new Error('Script named \'' + scriptName + '\' already exists in package.json');
  }

  if (!packageJson.scripts) {
    packageJson.scripts = {};
  }
  packageJson.scripts[scriptName] = scriptCommand;
  (0, _jsonfile.writeFileSync)(filename, packageJson, { spaces: 2 });
}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/values");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("jsonfile");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _apolloFetch = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GraphQLClient = function () {
  function GraphQLClient(_ref) {
    var uri = _ref.uri,
        jwtToken = _ref.jwtToken,
        headers = _ref.headers;
    (0, _classCallCheck3.default)(this, GraphQLClient);

    this.apolloFetch = (0, _apolloFetch.createApolloFetch)({ uri: uri });
    this.headers = headers;

    if (jwtToken) {
      this.setJwtToken(jwtToken);
    }
  }

  (0, _createClass3.default)(GraphQLClient, [{
    key: 'setJwtToken',
    value: function setJwtToken(jwtToken) {
      var _this = this;

      this.apolloFetch.use(function (_ref2, next) {
        var options = _ref2.options;

        if (jwtToken) {
          // eslint-disable-next-line no-param-reassign
          options.headers = (0, _extends3.default)({}, options.headers, _this.headers, {
            authorization: 'bearer ' + jwtToken
          });
        }

        next();
      });
    }
  }, {
    key: 'runQuery',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(query, variables) {
        var _ref4, data, errors;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.apolloFetch({ query: query, variables: variables });

              case 2:
                _ref4 = _context.sent;
                data = _ref4.data;
                errors = _ref4.errors;

                if (!errors) {
                  _context.next = 7;
                  break;
                }

                throw errors;

              case 7:
                return _context.abrupt('return', data);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function runQuery(_x, _x2) {
        return _ref3.apply(this, arguments);
      }

      return runQuery;
    }()

    // Convenience static method

  }], [{
    key: 'runQuery',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(options, query, variables) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', new GraphQLClient(options).runQuery(query, variables));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function runQuery(_x3, _x4, _x5) {
        return _ref5.apply(this, arguments);
      }

      return runQuery;
    }()
  }]);
  return GraphQLClient;
}();

exports.default = GraphQLClient;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("apollo-fetch");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBaselineCommits = exports.getBranch = exports.getCommit = exports.FETCH_N_INITIAL_BUILD_COMMITS = undefined;

var _toConsumableArray2 = __webpack_require__(6);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = __webpack_require__(28);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var execGitCommand = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(command) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _denodeify2.default)(_child_process.exec)(command);

          case 3:
            return _context.abrupt('return', _context.sent.trim());

          case 6:
            _context.prev = 6;
            _context.t0 = _context['catch'](0);

            // eslint-disable-next-line no-console
            if (_context.t0.message && _context.t0.message.match('Not a git repository')) {
              console.error('Unable to execute git command \'' + command + '\'.\n');
              // eslint-disable-next-line no-console
              console.error('Chromatic only works in git projects.\n' + 'Contact us at support@hichroma.com if you need to use Chromatic outside of one.\n\n');
            }
            throw _context.t0;

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 6]]);
  }));

  return function execGitCommand(_x) {
    return _ref.apply(this, arguments);
  };
}();

// NOTE: At some point we should check that the commit has been pushed to the
// remote and the branch matches with origin/REF, but for now we are naive about
// adhoc builds.

// We could cache this, but it's probably pretty quick
var getCommit = exports.getCommit = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var _split, _split2, commit, committedAtSeconds, committerEmail, committerName;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return execGitCommand('git log -n 1 --format="%H,%ct,%ce,%cn"');

          case 2:
            _split = _context2.sent.split(',');
            _split2 = (0, _slicedToArray3.default)(_split, 4);
            commit = _split2[0];
            committedAtSeconds = _split2[1];
            committerEmail = _split2[2];
            committerName = _split2[3];
            return _context2.abrupt('return', { commit: commit, committedAt: committedAtSeconds * 1000, committerEmail: committerEmail, committerName: committerName });

          case 9:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getCommit() {
    return _ref2.apply(this, arguments);
  };
}();

var getBranch = exports.getBranch = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
    var branch;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return execGitCommand('git rev-parse --abbrev-ref HEAD');

          case 2:
            branch = _context3.sent;

            if (!(branch === 'HEAD')) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt('return', process.env.CI_BRANCH || branch);

          case 5:
            return _context3.abrupt('return', branch);

          case 6:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getBranch() {
    return _ref3.apply(this, arguments);
  };
}();

// git rev-list in a basic form gives us a list of commits reaching back to
// `firstCommittedAtSeconds` (i.e. when the first build of this app happened)
// in reverse chronological order.
//
// A simplified version of what we are doing here is just finding the first
// commit in that list that has a build. We only want to send `limit` to
// the server in this pass (although we may already know some commits that do
// or do not have builds from earlier passes). So we just pick the first `limit`
// commits from the command, filtering out `commitsWith[out]Builds`.
//
// However, it's not quite that simple -- because of branching. However,
// passing commits after `--not` in to `git rev-list` *occludes* all the ancestors
// of those commits. This is exactly what we need once we find one or more commits
// that do have builds: a list of the ancestors of HEAD that are not accestors of
// `commitsWithBuilds`.
//
// The other complexity is that if we know a few `commitsWithBuilds` from the server
// we don't know immediately which of those are the nearer ancestor to HEAD
// (and thus shoudl be used as the baseline).
// However, the `--boundary` argument will tell us exactly where we stop in the
// history in travelling back from HEAD.
//
// If we stop at a commit that has a build, then it is a baseline!
// If we stop at a commit that *does not* have a build, that means that commit
// branched off another commit that *is* an ancestor of a commit that does have a build.
// [If this sentence is confusing, see the 'partial' test for some clarity]
// So also long as we've checked every commit on the path back to that commit, we can stop.
var nextCommitsAndBoundaries = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(limit, _ref4) {
    var firstCommittedAtSeconds = _ref4.firstCommittedAtSeconds,
        commitsWithBuilds = _ref4.commitsWithBuilds,
        commitsWithoutBuilds = _ref4.commitsWithoutBuilds;
    var command, commits, boundaryCommits, nextCommits;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // We want the next limit commits that aren't "covered" by `commitsWithBuilds`
            // This will print out all commits in `commitsWithoutBuilds` (except if they are covered),
            // so we ask enough that we'll definitely get `limit` unknown commits
            command = 'git rev-list HEAD --boundary       ' + (firstCommittedAtSeconds ? '--since ' + firstCommittedAtSeconds : '') + '       -n ' + (limit + commitsWithoutBuilds.length) + ' --not ' + commitsForCLI(commitsWithBuilds);

            debug('running ' + command);
            _context4.next = 4;
            return execGitCommand(command);

          case 4:
            _context4.t0 = function (c) {
              return !!c;
            };

            commits = _context4.sent.split('\n').filter(_context4.t0);

            debug('command output: ' + commits);

            // Boundary commits are listed with a `-` in front of the hash
            boundaryCommits = commits.filter(function (c) {
              return c[0] === '-';
            }).map(function (c) {
              return c.slice(1);
            })
            // We want the commitsWithBuilds on the boundary. There may be others on the boundary.
            .filter(function (c) {
              return commitsWithBuilds.includes(c);
            });
            nextCommits = commits
            // Both boundary and non boundary commits are candidates for builds
            .map(function (c) {
              return c[0] === '-' ? c.slice(1) : c;
            })
            // No sense in checking commits we already know about
            .filter(function (c) {
              return !commitsWithBuilds.includes(c);
            }).filter(function (c) {
              return !commitsWithoutBuilds.includes(c);
            }).slice(0, limit);
            return _context4.abrupt('return', {
              nextCommits: nextCommits,
              boundaryCommits: boundaryCommits
            });

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function nextCommitsAndBoundaries(_x2, _x3) {
    return _ref5.apply(this, arguments);
  };
}();

// Exponentially iterate `limit` up to infinity to find baselines


var step = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(client, limit, _ref6) {
    var headCommit = _ref6.headCommit,
        firstCommittedAtSeconds = _ref6.firstCommittedAtSeconds,
        commitsWithBuilds = _ref6.commitsWithBuilds,
        commitsWithoutBuilds = _ref6.commitsWithoutBuilds;

    var _ref8, nextCommits, boundaryCommits, _ref9, newCommitsWithBuilds, newCommitsWithoutBuilds;

    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            debug('step: checking ' + limit + ' up to ' + firstCommittedAtSeconds);
            debug('step: commitsWithBuilds: ' + commitsWithBuilds);
            debug('step: commitsWithoutBuilds: ' + commitsWithoutBuilds);

            _context5.next = 5;
            return nextCommitsAndBoundaries(limit, {
              firstCommittedAtSeconds: firstCommittedAtSeconds,
              commitsWithBuilds: commitsWithBuilds,
              commitsWithoutBuilds: commitsWithoutBuilds
            });

          case 5:
            _ref8 = _context5.sent;
            nextCommits = _ref8.nextCommits;
            boundaryCommits = _ref8.boundaryCommits;


            debug('step: nextCommits: ' + nextCommits);
            debug('step: boundaryCommits: ' + boundaryCommits);

            // No more commits uncovered by boundaryCommits!

            if (!(nextCommits.length === 0)) {
              _context5.next = 13;
              break;
            }

            debug('step: no nextCommits; we are done');
            return _context5.abrupt('return', boundaryCommits);

          case 13:
            _context5.next = 15;
            return client.runQuery(TesterHasBuildsWithCommitsQuery, {
              commits: nextCommits
            });

          case 15:
            _ref9 = _context5.sent;
            newCommitsWithBuilds = _ref9.app.hasBuildsWithCommits;

            debug('step: newCommitsWithBuilds: ' + newCommitsWithBuilds);

            // Special case -- if there is an existing build for the current HEAD,
            // we can short circuit any more work; also this is important because
            // `git rev-list --boundary` doesn't treat HEAD as a boundary

            if (!newCommitsWithBuilds.find(function (c) {
              return c === headCommit;
            })) {
              _context5.next = 21;
              break;
            }

            debug('step: HEAD has a build; short circuiting');
            return _context5.abrupt('return', [headCommit]);

          case 21:
            newCommitsWithoutBuilds = nextCommits.filter(function (commit) {
              return !newCommitsWithBuilds.find(function (c) {
                return c === commit;
              });
            });
            return _context5.abrupt('return', step(client, limit * 2, {
              firstCommittedAtSeconds: firstCommittedAtSeconds,
              commitsWithBuilds: [].concat((0, _toConsumableArray3.default)(commitsWithBuilds), (0, _toConsumableArray3.default)(newCommitsWithBuilds)),
              commitsWithoutBuilds: [].concat((0, _toConsumableArray3.default)(commitsWithoutBuilds), (0, _toConsumableArray3.default)(newCommitsWithoutBuilds))
            }));

          case 23:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function step(_x4, _x5, _x6) {
    return _ref7.apply(this, arguments);
  };
}();

// eslint-disable-next-line import/prefer-default-export


var getBaselineCommits = exports.getBaselineCommits = function () {
  var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(client) {
    var _ref11, firstBuild, _ref12, commit;

    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return client.runQuery(TesterFirstCommittedAtQuery);

          case 2:
            _ref11 = _context6.sent;
            firstBuild = _ref11.app.firstBuild;

            if (firstBuild) {
              _context6.next = 7;
              break;
            }

            debug('App has no builds, returning []');
            return _context6.abrupt('return', []);

          case 7:
            _context6.next = 9;
            return getCommit();

          case 9:
            _ref12 = _context6.sent;
            commit = _ref12.commit;
            return _context6.abrupt('return', step(client, FETCH_N_INITIAL_BUILD_COMMITS, {
              headCommit: commit,
              firstCommittedAtSeconds: firstBuild.committedAt && firstBuild.committedAt / 1000,
              commitsWithBuilds: [],
              commitsWithoutBuilds: []
            }));

          case 12:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function getBaselineCommits(_x7) {
    return _ref10.apply(this, arguments);
  };
}();

var _child_process = __webpack_require__(10);

var _denodeify = __webpack_require__(3);

var _denodeify2 = _interopRequireDefault(_denodeify);

var _debug = __webpack_require__(5);

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('react-chromatic:tester:git');

var FETCH_N_INITIAL_BUILD_COMMITS = exports.FETCH_N_INITIAL_BUILD_COMMITS = 20;

var TesterFirstCommittedAtQuery = '\n  query TesterFirstCommittedAtQuery {\n    app {\n      firstBuild {\n        committedAt\n      }\n    }\n  }\n';

var TesterHasBuildsWithCommitsQuery = '\n  query TesterHasBuildsWithCommitsQuery($commits: [String!]!) {\n    app {\n      hasBuildsWithCommits(commits: $commits)\n    }\n  }\n';

function commitsForCLI(commits) {
  return commits.map(function (c) {
    return c.trim();
  }).join(' ');
}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {"name":"react-chromatic","version":"0.8.2-dev","description":"Visual Testing for React Components","browser":"./dist/client.js","main":"./dist/assets/null-server.js","scripts":{"prebuild":"rm -rf ./dist","build:bin":"../../node_modules/.bin/babel -s -d ./dist ./src -D --only 'assets,bin'","build:webpack":"../../node_modules/.bin/webpack","build":"../../node_modules/.bin/npm-run-all --serial -l build:**","prepare":"npm run build","dev":"../../node_modules/.bin/npm-run-all --parallel -l 'build:** -- --watch'"},"bin":{"chromatic":"./dist/bin/chromatic.js"},"dependencies":{"apollo-fetch":"^0.6.0","babel-runtime":"^6.26.0","commander":"^2.9.0","debug":"^3.0.1","denodeify":"^1.2.1","ejson":"^2.1.2","es6-error":"^4.0.2","isomorphic-fetch":"^2.2.1","jsdom":"^11.5.1","jsonfile":"^4.0.0","localtunnel":"^1.8.3","node-ask":"^1.0.1","tree-kill":"^1.1.0"},"peerDependencies":{"react":"15.x || 16.x","react-dom":"15.x || 16.x"},"devDependencies":{"babel-cli":"^6.26.0","npm-run-all":"^4.0.2","prettier-eslint":"^7.1.0","tmp":"^0.0.33","webpack":"^3.10.0","webpack-node-externals":"^1.6.0"}}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Note this file differs from our usual convention because it is packaged
var _process$env = process.env,
    _process$env$CHROMATI = _process$env.CHROMATIC_SERVER_PORT,
    CHROMATIC_SERVER_PORT = _process$env$CHROMATI === undefined ? 3004 : _process$env$CHROMATI,
    _process$env$CHROMATI2 = _process$env.CHROMATIC_INDEX_URL,
    CHROMATIC_INDEX_URL = _process$env$CHROMATI2 === undefined ? 'https://index.chromaticqa.com' : _process$env$CHROMATI2,
    _process$env$CHROMATI3 = _process$env.CHROMATIC_TUNNEL_URL,
    CHROMATIC_TUNNEL_URL = _process$env$CHROMATI3 === undefined ? 'https://tunnel.chromaticqa.com' : _process$env$CHROMATI3,
    _process$env$CHROMATI4 = _process$env.CHROMATIC_CREATE_TUNNEL,
    CHROMATIC_CREATE_TUNNEL = _process$env$CHROMATI4 === undefined ? 'true' : _process$env$CHROMATI4,
    CHROMATIC_APP_CODE = _process$env.CHROMATIC_APP_CODE;
exports.CHROMATIC_SERVER_PORT = CHROMATIC_SERVER_PORT;
exports.CHROMATIC_INDEX_URL = CHROMATIC_INDEX_URL;
exports.CHROMATIC_TUNNEL_URL = CHROMATIC_TUNNEL_URL;
exports.CHROMATIC_CREATE_TUNNEL = CHROMATIC_CREATE_TUNNEL;
exports.CHROMATIC_APP_CODE = CHROMATIC_APP_CODE;

/***/ })
/******/ ]);
//# sourceMappingURL=tester.js.map