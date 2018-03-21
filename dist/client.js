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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("ejson");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isolator = __webpack_require__(5);

var _isolator2 = _interopRequireDefault(_isolator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasSetup = false; /* eslint-env browser */

function configure() {
  var runtimes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (hasSetup) {
    throw new Error('Chromatic already configured.');
  }
  hasSetup = true;

  if (runtimes === []) {
    throw new Error('Chromatic must be configured with at least one runtime. http://docs.chromaticqa.com/runtime-api');
  }

  // If we are rendered in an iframe, (by ourself), then we need to clear
  // the screen right away, rather than waiting for a spec
  var isIsolator = document.location.hash.match('__chromatic_isolator__');

  (0, _isolator2.default)({
    runtimes: [].concat(runtimes), // allow passing a single runtime
    clearScreen: isIsolator
  });
}

exports.default = configure;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(0);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toConsumableArray2 = __webpack_require__(1);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = configure;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(7);

var _render = __webpack_require__(8);

var _serialize = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env browser */
var chromaticRoot = void 0;

var drawn = false;
function drawIsolator() {
  if (drawn) {
    return;
  }
  var styles = '\n  /* ensure a given element is not laid out at all */\n  .' + _render.NO_LAYOUT_CLASS + ' {\n    margin: 0 !important;\n    padding: 0 !important;\n    position: static !important;\n  }\n  ';
  var el = document.createElement('style');
  el.type = 'text/css';
  el.innerHTML = styles;
  document.head.appendChild(el);

  chromaticRoot = document.createElement('div');

  // Hide all existing content
  document.querySelectorAll('body > *').forEach(function (e) {
    e.style.display = 'none';
  });

  // Add our root
  document.body.appendChild(chromaticRoot);
  drawn = true;
}

function configure(_ref) {
  var runtimes = _ref.runtimes,
      clearScreen = _ref.clearScreen;

  if (clearScreen) {
    drawIsolator();
  }

  var runtimeRenderers = {};
  runtimes.forEach(function (r) {
    runtimeRenderers[r.runtime] = r.renderSpec;
  });

  function runtimeSpecs() {
    return runtimes.map(function (_ref2) {
      var runtime = _ref2.runtime,
          specs = _ref2.specs;
      return specs().map(function (spec) {
        return (0, _extends3.default)({ runtime: runtime }, spec);
      });
    }).reduce(function (a, b) {
      return [].concat((0, _toConsumableArray3.default)(a), (0, _toConsumableArray3.default)(b));
    }, []);
  }

  function renderSpecToDom(spec) {
    drawIsolator();

    var parsedSpec = (0, _extends3.default)({}, spec, {
      input: typeof spec.input === 'string' ? (0, _serialize.parse)(spec.input) : spec.input
    });

    var element = void 0;
    if (spec.runtime) {
      var renderer = runtimeRenderers[spec.runtime];
      if (!renderer) {
        throw new Error('Didn\'t find a renderer for runtime \'' + spec.runtime + '\' -- are you sure you added it in your client configuration?');
      }
      var renderedSpec = renderer(parsedSpec);
      element = _react2.default.createElement(
        'div',
        { className: _render.CONTAINER_CLASS },
        renderedSpec
      );
    } else {
      throw new Error('No runtime passed for spec', spec);
    }

    (0, _reactDom.unmountComponentAtNode)(chromaticRoot);
    (0, _reactDom.render)(element, chromaticRoot);
  }

  // API to be used by test script to gather runtime spec definitions
  window.__chromaticRuntimeSpecs__ = runtimeSpecs;

  // API to be used by capture worker to render a spec
  window.__renderChromaticSpec__ = renderSpecToDom;

  function handleMessage(_ref3) {
    var data = _ref3.data,
        source = _ref3.source,
        origin = _ref3.origin;

    // TODO -- is it unsafe to not check origin? I don't get the sense it matters

    var message = data.message,
        rest = (0, _objectWithoutProperties3.default)(data, ['message']);

    if (message === 'requestCapabilities') {
      source.postMessage({
        message: 'capabilities',
        service: 'chromatic-isolator',
        version: 0
      }, origin);
    } else if (message === 'renderSpec') {
      try {
        renderSpecToDom(rest.spec);
      } catch (error) {
        source.postMessage({
          message: 'renderSpecError',
          error: error.toString()
        }, origin);

        // For now, throw the error so we can see it in the iframe
        throw error;
      }
    }
  }

  window.addEventListener('message', handleMessage, false);
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONTAINER_CLASS = exports.NO_LAYOUT_CLASS = undefined;

var _toConsumableArray2 = __webpack_require__(1);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = __webpack_require__(9);

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = __webpack_require__(0);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = __webpack_require__(10);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = renderSpec;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NO_LAYOUT_CLASS = exports.NO_LAYOUT_CLASS = '__chromatic__no_layout'; // Render a spec in our format to a React element.
// Note that this is *NOT* a stateless functional component
// We *don't* want to end up with our own element type, instead
// we need to construct an element tree *as we saved it*.
/* eslint-disable react/prop-types */

var CONTAINER_CLASS = exports.CONTAINER_CLASS = '__chromatic_rendered_spec_container';

// We need at least a single div so we can set the CONTAINER_CLASS
var defaultAncestors = [{ name: 'div' }];
// Don't specify if we don't know
var defaultDimensions = { width: '', height: '' };

function wrapInAncestors(element, ancestors, _ref) {
  var width = _ref.width,
      height = _ref.height;

  return ancestors.reduceRight(function (output, _ref2, index) {
    var Tag = _ref2.name,
        id = _ref2.id,
        className = _ref2.className;

    var classes = [NO_LAYOUT_CLASS, className];
    if (index === ancestors.length - 1) {
      classes.push(CONTAINER_CLASS);
    }
    return _react2.default.createElement(
      Tag,
      { id: id, className: classes.join(' '), style: { width: width, height: height } },
      output
    );
  }, element);
}

function renderInputElement(element, options) {
  if ((typeof element === 'undefined' ? 'undefined' : (0, _typeof3.default)(element)) !== 'object') {
    return element;
  }

  var name = element.name,
      props = element.props;


  var mappedProps = {};
  var mappedChildren = [];
  if (props) {
    var children = props.children,
        otherProps = (0, _objectWithoutProperties3.default)(props, ['children']);


    (0, _keys2.default)(otherProps).forEach(function (propName) {
      mappedProps[propName] = options.mapProps(propName, props[propName]);
    });

    if (children) {
      mappedChildren = [].concat(children).map(function (e) {
        return renderInputElement(e, options);
      });
    }
  }

  var component = options.nameToComponent(name);

  return _react.createElement.apply(undefined, [component, mappedProps].concat((0, _toConsumableArray3.default)(mappedChildren)));
}

function renderSpec(_ref3) {
  var _ref3$input = _ref3.input,
      element = _ref3$input.element,
      _ref3$input$ancestors = _ref3$input.ancestors,
      ancestors = _ref3$input$ancestors === undefined ? defaultAncestors : _ref3$input$ancestors,
      _ref3$input$dimension = _ref3$input.dimensions,
      dimensions = _ref3$input$dimension === undefined ? defaultDimensions : _ref3$input$dimension;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { nameToComponent: function nameToComponent(name) {
      return name;
    }, mapProps: function mapProps(name, value) {
      return value;
    } };

  var reactElement = renderInputElement(element, options);

  return wrapInAncestors(reactElement, ancestors, dimensions);
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Callback = exports.parse = exports.stringify = undefined;

var _ejson = __webpack_require__(3);

var _Callback = __webpack_require__(12);

var _Callback2 = _interopRequireDefault(_Callback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.stringify = _ejson.stringify;
exports.parse = _ejson.parse;
exports.Callback = _Callback2.default;

// Ensure this has been registered

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(13);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(14);

var _createClass3 = _interopRequireDefault(_createClass2);

var _ejson = __webpack_require__(3);

var _ejson2 = _interopRequireDefault(_ejson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Callback = function () {
  function Callback(name) {
    (0, _classCallCheck3.default)(this, Callback);

    // super('throw new Error("I shouldn\'t have been called!");');
    this.name = name;
  }

  (0, _createClass3.default)(Callback, [{
    key: 'toString',
    value: function toString() {
      return 'function ' + this.name + '()';
    }
  }, {
    key: 'toJSONValue',
    value: function toJSONValue() {
      return this.name;
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'typeName',
    value: function typeName() {
      return 'ChromaticCallback';
    }
  }]);
  return Callback;
}();

// eslint-disable-next-line no-underscore-dangle


exports.default = Callback;
if (!_ejson2.default._getTypes().ChromaticCallback) {
  _ejson2.default.addType('ChromaticCallback', function (name) {
    return new Callback(name);
  });
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ })
/******/ ]);
//# sourceMappingURL=client.js.map