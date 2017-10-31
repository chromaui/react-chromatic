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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

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
    CHROMATIC_TUNNEL_URL = _process$env$CHROMATI3 === undefined ? 'https://tunnel.chromaticqa.com' : _process$env$CHROMATI3;
exports.CHROMATIC_SERVER_PORT = CHROMATIC_SERVER_PORT;
exports.CHROMATIC_INDEX_URL = CHROMATIC_INDEX_URL;
exports.CHROMATIC_TUNNEL_URL = CHROMATIC_TUNNEL_URL;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(0);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(21);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(22);

var _createClass3 = _interopRequireDefault(_createClass2);

var _apolloFetch = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GraphQLClient = function () {
  function GraphQLClient(_ref) {
    var uri = _ref.uri,
        jwtToken = _ref.jwtToken;
    (0, _classCallCheck3.default)(this, GraphQLClient);

    this.apolloFetch = (0, _apolloFetch.createApolloFetch)({ uri: uri });

    if (jwtToken) {
      this.setJwtToken(jwtToken);
    }
  }

  (0, _createClass3.default)(GraphQLClient, [{
    key: 'setJwtToken',
    value: function setJwtToken(jwtToken) {
      this.apolloFetch.use(function (_ref2, next) {
        var options = _ref2.options;

        if (jwtToken) {
          // eslint-disable-next-line no-param-reassign
          options.headers = (0, _extends3.default)({}, options.headers, {
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(0);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _localtunnel = __webpack_require__(28);

var _localtunnel2 = _interopRequireDefault(_localtunnel);

var _denodeify = __webpack_require__(3);

var _denodeify2 = _interopRequireDefault(_denodeify);

var _environment = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
    var port = _ref.port;
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
              host: _environment.CHROMATIC_TUNNEL_URL
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBaselineCommits = exports.getBranch = exports.getCommit = exports.FETCH_N_INITAL_BUILD_COMMITS = undefined;

var _toConsumableArray2 = __webpack_require__(24);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = __webpack_require__(23);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(0);

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
            return _context.abrupt('return', _context.sent);

          case 6:
            _context.prev = 6;
            _context.t0 = _context['catch'](0);

            // eslint-disable-next-line no-console
            console.error('Unable to execute git command \'' + command + '\'.\n');
            if (_context.t0.message && _context.t0.message.match('Not a git repository')) {
              // eslint-disable-next-line no-console
              console.error('Chromatic only works in git projects.\n' + 'Contact us at support@hichroma.com if you need to use Chromatic outside of one.\n\n');
            }
            throw _context.t0;

          case 11:
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

var getCommit = exports.getCommit = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var _trim$split, _trim$split2, commit, committedAtSeconds;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return execGitCommand('git log -n 1 --format="%H %ct"');

          case 2:
            _trim$split = _context2.sent.trim().split(' ');
            _trim$split2 = (0, _slicedToArray3.default)(_trim$split, 2);
            commit = _trim$split2[0];
            committedAtSeconds = _trim$split2[1];
            return _context2.abrupt('return', { commit: commit, committedAt: committedAtSeconds * 1000 });

          case 7:
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
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return execGitCommand('git rev-parse --abbrev-ref HEAD');

          case 2:
            return _context3.abrupt('return', _context3.sent.trim());

          case 3:
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

// We use rev-list to get all the commits that are ancestors of HEAD but not
// ancestors of any of the <commits>.
//
// These commits naturally form a tree that meets up to the complete history of
// <commits> (call that the "known" history, from chromatic's perspective).
// git calls the commits in the known history where the tree joins the "boundary".
// Of the boundary commits:
//   - Those that are actually members of <commits> correspond to builds that
//     we want to use as a baseline
//   - Otherwise they correspond to commits in the known history that we have
//     commit path to but no known build on that path.
//
// We are just going to follow a simple algorithm: on the first pass, grab
// X commits, check which are boundaries. If there are boundaries not in those
// commits, choose the *oldest*, and grab all builds that are more recent.
// In the second pass we do not care which


var getBaselinesFromCommits = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(commits) {
    var boundaryData, baselineCommits, oldestCommittedAt;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return execGitCommand('git rev-list HEAD --boundary --format=\'%m%H %ct\'       --not ' + commits.map(function (c) {
              return c.trim();
            }).join(' '));

          case 2:
            boundaryData = _context4.sent;
            baselineCommits = [];
            oldestCommittedAt = null;

            boundaryData.trim().split('\n')
            // rev-list lists each commit like:
            // commit 4a1c922edd61fa0e9d3cb25d4e205816701557a5
            // >4a1c922edd61fa0e9d3cb25d4e205816701557a5 1495065352
            // We want the second line if it matches ("-")
            .filter(function (l) {
              return !l.match('commit') && l.match('-');
            }).forEach(function (rawRow) {
              var _rawRow$trim$split = rawRow.trim().split(' '),
                  _rawRow$trim$split2 = (0, _slicedToArray3.default)(_rawRow$trim$split, 2),
                  commitWithDash = _rawRow$trim$split2[0],
                  committedAtSeconds = _rawRow$trim$split2[1];

              var commit = commitWithDash.slice(1);

              if (commits.find(function (c) {
                return c === commit;
              })) {
                baselineCommits.push(commit);
              } else if (oldestCommittedAt === null) {
                oldestCommittedAt = committedAtSeconds * 1000;
              } else {
                oldestCommittedAt = Math.min(oldestCommittedAt, committedAtSeconds * 1000);
              }
            });

            return _context4.abrupt('return', {
              baselineCommits: baselineCommits,
              oldestCommittedAt: oldestCommittedAt
            });

          case 7:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getBaselinesFromCommits(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

// eslint-disable-next-line import/prefer-default-export


var getBaselineCommits = exports.getBaselineCommits = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(client) {
    var recentCommits, _ref6, currentCommit, _ref7, recentBaselineCommits, oldestCommittedAt, allPossibleCommits, _ref8, baselineCommits;

    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return client.runQuery(TesterGetRecentBuildCommitsQuery);

          case 2:
            recentCommits = _context5.sent.app.buildCommits;

            debug('First ' + FETCH_N_INITAL_BUILD_COMMITS + ' commits: ' + recentCommits);

            // Short-circuit: on first run, there's definitely no baseline!

            if (!(recentCommits.length === 0)) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt('return', []);

          case 6:
            _context5.next = 8;
            return getCommit();

          case 8:
            _ref6 = _context5.sent;
            currentCommit = _ref6.commit;

            if (!recentCommits.find(function (c) {
              return c === currentCommit;
            })) {
              _context5.next = 12;
              break;
            }

            return _context5.abrupt('return', [currentCommit]);

          case 12:
            _context5.next = 14;
            return getBaselinesFromCommits(recentCommits);

          case 14:
            _ref7 = _context5.sent;
            recentBaselineCommits = _ref7.baselineCommits;
            oldestCommittedAt = _ref7.oldestCommittedAt;

            debug('Baselines from initial commits: ' + recentBaselineCommits + ' [' + oldestCommittedAt + ']');

            // console.log(recentBaselineCommits, oldestCommittedAt);
            // Important optimization. If we are sure that there aren't any older relevant
            // builds, we can avoid an extra query

            if (!(oldestCommittedAt === null || recentCommits.length < FETCH_N_INITAL_BUILD_COMMITS)) {
              _context5.next = 20;
              break;
            }

            return _context5.abrupt('return', recentBaselineCommits);

          case 20:
            _context5.next = 22;
            return client.runQuery(TesterGetAllPossibleBuildCommitsQuery, {
              oldestCommittedAt: oldestCommittedAt
            });

          case 22:
            allPossibleCommits = _context5.sent.app.buildCommits;

            debug('allPossibleCommits: ' + allPossibleCommits);

            _context5.next = 26;
            return getBaselinesFromCommits([].concat((0, _toConsumableArray3.default)(recentCommits), (0, _toConsumableArray3.default)(allPossibleCommits)));

          case 26:
            _ref8 = _context5.sent;
            baselineCommits = _ref8.baselineCommits;

            debug('allPossible baselineCommits: ' + baselineCommits);
            return _context5.abrupt('return', baselineCommits);

          case 30:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getBaselineCommits(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

var _child_process = __webpack_require__(7);

var _denodeify = __webpack_require__(3);

var _denodeify2 = _interopRequireDefault(_denodeify);

var _debug = __webpack_require__(5);

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('react-chromatic:tester:git');

var FETCH_N_INITAL_BUILD_COMMITS = exports.FETCH_N_INITAL_BUILD_COMMITS = 20;
var TesterGetRecentBuildCommitsQuery = '\n  query TesterGetRecentBuildCommitsQuery {\n    app {\n      buildCommits(limit: ' + FETCH_N_INITAL_BUILD_COMMITS + ')\n    }\n  }\n';

var TesterGetAllPossibleBuildCommitsQuery = '\n  query TesterGetAllPossibleBuildCommitsQuery($oldestCommittedAt: Float!) {\n    app {\n      buildCommits(skip: ' + FETCH_N_INITAL_BUILD_COMMITS + ', oldestCommittedAt: $oldestCommittedAt)\n    }\n  }\n';

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = __webpack_require__(20);

var _values2 = _interopRequireDefault(_values);

exports.checkPackageJson = checkPackageJson;
exports.addScriptToPackageJson = addScriptToPackageJson;

var _path = __webpack_require__(29);

var _path2 = _interopRequireDefault(_path);

var _jsonfile = __webpack_require__(27);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(2);

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__(19);

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = __webpack_require__(0);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsdom = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addShimsToJSDOM(dom) {
  // This is reasonably common
  Object.defineProperty(dom.window, 'matchMedia', {
    value: function value() {
      return { matches: true };
    }
  });
} /* eslint-disable no-console */

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url) {
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

            _context.next = 6;
            return _jsdom.JSDOM.fromURL(url, {
              // We need to execute the scripts on the page
              runScripts: 'dangerously',
              // We need to load scripts that are loaded via script tags
              resources: 'usable',
              // Send console.logs -> /dev/null (so to speak)
              virtualConsole: virtualConsole
            });

          case 6:
            dom = _context.sent;


            // NOTE: this line runs immediately after the HTML for the page has been loaded
            // it's not possible that any external script tags have been executed.
            // It is possible that they have a <script> tag that need these shims, but
            // I highly doubt it. If we run into this we can always use JSDOM's old API
            // to inject our own scripts at 'create' time
            addShimsToJSDOM(dom);

            return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
              return dom.window.document.addEventListener('DOMContentLoaded', function () {
                if (!dom.window.__chromaticRuntimeSpecs__) {
                  console.error('Didn\'t find \'window.__chromaticRuntimeSpecs__\' at ' + url + '.\n' + 'Have you installed the Chromatic widget or addon correctly?\n');

                  if (logs.length) {
                    var separator = '=========================';
                    console.error('Your app\'s output:\n' + separator + '\n');
                    logs.forEach(function (_ref2) {
                      var logType = _ref2.logType,
                          log = _ref2.log;
                      return console[logType](log);
                    });
                    console.error('\n' + separator + '\n');
                  }
                  reject(new Error('Didn\'t find \'window.__chromaticRuntimeSpecs__\' at ' + url + '.'));
                }
                var specs = dom.window.__chromaticRuntimeSpecs__();
                dom.window.close();
                resolve(specs);
              });
            }));

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function getRuntimeSpecs(_x) {
    return _ref.apply(this, arguments);
  }

  return getRuntimeSpecs;
}();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__(2);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(0);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var checkResponse = function () {
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

var _child_process = __webpack_require__(7);

var _isomorphicFetch = __webpack_require__(25);

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

            if (scriptName !== 'none') {
              child = (0, _child_process.spawn)('npm', ['run', scriptName], {
                env: (0, _extends3.default)({}, process.env, {
                  NODE_ENV: 'development',
                  BROWSER: 'none'
                })
              });
            }

            _context4.next = 4;
            return waitForResponse(child, url);

          case 4:
            return _context4.abrupt('return', child);

          case 5:
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
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("node-ask");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("tree-kill");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(2);

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(14);

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = __webpack_require__(0);

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

var _nodeAsk = __webpack_require__(15);

var _debug = __webpack_require__(5);

var _debug2 = _interopRequireDefault(_debug);

var _treeKill = __webpack_require__(16);

var _treeKill2 = _interopRequireDefault(_treeKill);

var _environment = __webpack_require__(4);

var _runtimes = __webpack_require__(12);

var _runtimes2 = _interopRequireDefault(_runtimes);

var _startApp = __webpack_require__(13);

var _startApp2 = _interopRequireDefault(_startApp);

var _tunnel = __webpack_require__(9);

var _tunnel2 = _interopRequireDefault(_tunnel);

var _packageJson = __webpack_require__(11);

var _GraphQLClient = __webpack_require__(8);

var _GraphQLClient2 = _interopRequireDefault(_GraphQLClient);

var _git = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BUILD_POLL_INTERVAL = 1000;

var TesterCreateAppTokenMutation = '\n  mutation TesterCreateAppTokenMutation($appCode: String!) {\n    createAppToken(code: $appCode)\n  }\n';

var TesterCreateBuildMutation = '\n  mutation TesterCreateBuildMutation($input: CreateBuildInput!, $isolatorUrl: String!) {\n    createBuild(input: $input, isolatorUrl: $isolatorUrl) {\n      id\n      number\n      specCount\n      componentCount\n      webUrl\n    }\n  }\n';

var TesterBuildQuery = '\n  query TesterBuildQuery($buildNumber: Int!) {\n    app {\n      build(number: $buildNumber) {\n        id\n        status\n        inProgressCount: snapshotCount(status: SNAPSHOT_IN_PROGRESS)\n        specCount\n        changeCount: snapshotCount(change: SNAPSHOT_VISUALLY_DIFFERENT)\n        errorCount: snapshotCount(status: SNAPSHOT_CAPTURE_ERROR)\n      }\n    }\n  }\n';

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
        port = _ref3.port,
        _ref3$appPath = _ref3.appPath,
        appPath = _ref3$appPath === undefined ? '/' : _ref3$appPath,
        _ref3$indexUrl = _ref3.indexUrl,
        indexUrl = _ref3$indexUrl === undefined ? _environment.CHROMATIC_INDEX_URL : _ref3$indexUrl,
        _ref3$createTunnel = _ref3.createTunnel,
        createTunnel = _ref3$createTunnel === undefined ? true : _ref3$createTunnel;

    var uri, client, _ref5, jwtToken, _ref6, commit, committedAt, branch, baselineCommits, appPathWithSlash, url, child, runtimeSpecs, isolatorUrl, tunnel, exitCode, _ref7, _ref7$createBuild, number, specCount, componentCount, webUrl, onlineHint, _ref8, status, changeCount, errorCount, scriptCommand, confirmed, fullScriptName, message;

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

            throw new Error('You must provide an app code  -- visit https://chromaticqa.com to get your code');

          case 4:
            if (!(!scriptName || !port)) {
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

            throw new Error('Incorrect app code \'' + appCode + '\' -- visit https://chromaticqa.com to get your code');

          case 18:
            throw _context2.t0;

          case 19:
            _context2.next = 21;
            return (0, _git.getCommit)();

          case 21:
            _ref6 = _context2.sent;
            commit = _ref6.commit;
            committedAt = _ref6.committedAt;
            _context2.next = 26;
            return (0, _git.getBranch)();

          case 26:
            branch = _context2.sent;

            debug('git info: ' + (0, _stringify2.default)({ commit: commit, committedAt: committedAt, branch: branch }));

            _context2.next = 30;
            return (0, _git.getBaselineCommits)(client);

          case 30:
            baselineCommits = _context2.sent;

            debug('Found baselineCommits: ' + baselineCommits);

            appPathWithSlash = appPath[0] === '/' ? appPath : '/' + appPath;
            url = 'http://localhost:' + port + appPathWithSlash;

            if (scriptName !== 'none') {
              log('Starting app with `npm run ' + scriptName + '`');
            }
            _context2.next = 37;
            return (0, _startApp2.default)({ scriptName: scriptName, url: url });

          case 37:
            child = _context2.sent;

            if (child) {
              log('Started app on port ' + port);
            } else {
              log('Detected app on port ' + port);
            }

            _context2.next = 41;
            return (0, _runtimes2.default)(url);

          case 41:
            runtimeSpecs = _context2.sent;
            isolatorUrl = url;
            tunnel = void 0;

            if (!createTunnel) {
              _context2.next = 50;
              break;
            }

            _context2.next = 47;
            return (0, _tunnel2.default)({ port: port });

          case 47:
            tunnel = _context2.sent;

            log('Opened tunnel to ' + tunnel.url);
            isolatorUrl = '' + tunnel.url + appPathWithSlash;

          case 50:
            exitCode = 5;
            _context2.prev = 51;
            _context2.next = 54;
            return client.runQuery(TesterCreateBuildMutation, {
              input: {
                branch: branch,
                commit: commit,
                committedAt: committedAt,
                baselineCommits: baselineCommits,
                runtimeSpecs: runtimeSpecs
              },
              isolatorUrl: isolatorUrl
            });

          case 54:
            _ref7 = _context2.sent;
            _ref7$createBuild = _ref7.createBuild;
            number = _ref7$createBuild.number;
            specCount = _ref7$createBuild.specCount;
            componentCount = _ref7$createBuild.componentCount;
            webUrl = _ref7$createBuild.webUrl;
            onlineHint = 'View it online at ' + webUrl;

            log('Started Build ' + number + ' ' + ('(' + pluralize(componentCount, 'component') + ', ' + pluralize(specCount, 'spec') + ').\n\n' + onlineHint + '.'));

            _context2.next = 64;
            return waitForBuild(client, {
              buildNumber: number
            });

          case 64:
            _ref8 = _context2.sent;
            status = _ref8.status;
            changeCount = _ref8.changeCount;
            errorCount = _ref8.errorCount;
            _context2.t1 = status;
            _context2.next = _context2.t1 === 'BUILD_PASSED' ? 71 : _context2.t1 === 'BUILD_PENDING' ? 74 : _context2.t1 === 'BUILD_ACCEPTED' ? 74 : _context2.t1 === 'BUILD_DENIED' ? 74 : _context2.t1 === 'BUILD_FAILED' ? 77 : _context2.t1 === 'BUILD_TIMED_OUT' ? 80 : _context2.t1 === 'BUILD_ERROR' ? 83 : 86;
            break;

          case 71:
            log('Build ' + number + ' passed! ' + onlineHint + '.');
            exitCode = 0;
            return _context2.abrupt('break', 87);

          case 74:
            log('Build ' + number + ' has ' + pluralize(changeCount, 'change') + '. ' + onlineHint + '.');
            exitCode = 1;
            return _context2.abrupt('break', 87);

          case 77:
            log('Build ' + number + ' has ' + pluralize(errorCount, 'error') + '. ' + onlineHint + '.');
            exitCode = 2;
            return _context2.abrupt('break', 87);

          case 80:
            log('Build ' + number + ' has timed out. Ensure your machine is connected to the internet and please try again.');
            exitCode = 3;
            return _context2.abrupt('break', 87);

          case 83:
            log('Build ' + number + ' has failed to run. Our apologies. Please try again.');
            exitCode = 4;
            return _context2.abrupt('break', 87);

          case 86:
            throw new Error('Unexpected build status: ' + status);

          case 87:
            _context2.next = 97;
            break;

          case 89:
            _context2.prev = 89;
            _context2.t2 = _context2['catch'](51);

            if (!(_context2.t2.length && _context2.t2[0] && _context2.t2[0].message.match(/Cannot run a build with no specs./))) {
              _context2.next = 96;
              break;
            }

            log(_context2.t2[0].message);
            exitCode = 255;
            _context2.next = 97;
            break;

          case 96:
            throw _context2.t2;

          case 97:
            _context2.prev = 97;

            if (tunnel) {
              tunnel.close();
            }

            if (!child) {
              _context2.next = 102;
              break;
            }

            _context2.next = 102;
            return (0, _denodeify2.default)(_treeKill2.default)(child.pid, 'SIGHUP');

          case 102:
            return _context2.finish(97);

          case 103:
            if ((0, _packageJson.checkPackageJson)()) {
              _context2.next = 124;
              break;
            }

            scriptCommand = 'chromatic test --app-code \'' + appCode + '\' --port=' + port;
            _context2.next = 107;
            return (0, _nodeAsk.confirm)("\nYou have not added Chromatic's test script to your `package.json`. Would you like me to do it for you?");

          case 107:
            confirmed = _context2.sent;

            if (!confirmed) {
              _context2.next = 122;
              break;
            }

            fullScriptName = scriptName;

            if (!(fullScriptName === 'none')) {
              _context2.next = 117;
              break;
            }

            _context2.next = 113;
            return (0, _nodeAsk.prompt)('What npm script do you use to start your app? [start]');

          case 113:
            _context2.t3 = _context2.sent;

            if (_context2.t3) {
              _context2.next = 116;
              break;
            }

            _context2.t3 = 'start';

          case 116:
            fullScriptName = _context2.t3;

          case 117:

            scriptCommand = scriptCommand + ' --script-name=\'' + fullScriptName + '\'';

            (0, _packageJson.addScriptToPackageJson)('chromatic', scriptCommand);
            console.log('\nAdded script `chromatic`. You can now run it here or in CI with `npm run chromatic` (or `yarn chromatic`)');
            _context2.next = 124;
            break;

          case 122:
            message = '\nNo problem. You can add it later as: "' + scriptCommand;


            if (scriptName === 'none') {
              console.log(message + ' --script-name=<script-name>\n  (<script-name> is the name of the npm script you use to start your app)');
            } else {
              console.log(message);
            }

          case 124:
            return _context2.abrupt('return', exitCode);

          case 125:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[6, 14], [51, 89, 97, 103]]);
  }));

  function runTest(_x3) {
    return _ref4.apply(this, arguments);
  }

  return runTest;
}();

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("apollo-fetch");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/values");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("jsdom");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("jsonfile");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("localtunnel");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);
//# sourceMappingURL=tester.js.map