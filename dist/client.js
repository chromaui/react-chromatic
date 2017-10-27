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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 105);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paper = exports.pageMargins = exports.breakpoint = exports.typography = exports.spacing = exports.color = exports.background = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding: 0 ', 'px;\n  @media (min-width: ', 'px) {\n    margin: 0 ', '%;\n  }\n  @media (min-width: ', 'px) {\n    margin: 0 ', '%;\n  }\n  @media (min-width: ', 'px) {\n    margin: 0 ', '%;\n  }\n'], ['\n  padding: 0 ', 'px;\n  @media (min-width: ', 'px) {\n    margin: 0 ', '%;\n  }\n  @media (min-width: ', 'px) {\n    margin: 0 ', '%;\n  }\n  @media (min-width: ', 'px) {\n    margin: 0 ', '%;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  background: ', ';\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0 1px 3px 0;\n'], ['\n  background: ', ';\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0 1px 3px 0;\n']);

var _styledComponents = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Global style variables
var background = exports.background = {
  app: '#F6F9FC',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF'
};

var color = exports.color = {
  // Palette
  primary: '#1EA7FD',
  secondary: '#FC521F',
  tertiary: '#DDDDDD',

  // Grayscale
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',

  // Status
  positive: '#66BF3C',
  negative: '#FF4400',
  warning: '#E69D00'
};

var spacing = exports.spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30
  },
  borderRadius: {
    small: 5,
    default: 10
  }
};

var typography = exports.typography = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace'
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800'
  },
  size: {
    s1: '12',
    s2: '14',
    s3: '16',
    m1: '20',
    m2: '24',
    m3: '28',
    l1: '32',
    l2: '40',
    l3: '48',
    code: '90'
  }
};

var breakpoint = exports.breakpoint = '600';
var pageMargin = '5.55555';

var pageMargins = exports.pageMargins = (0, _styledComponents.css)(_templateObject, spacing.padding.medium, breakpoint * 1, pageMargin * 1, breakpoint * 2, pageMargin * 2, breakpoint * 3, pageMargin * 3);

var paper = exports.paper = (0, _styledComponents.css)(_templateObject2, color.lightest);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inlineGlow = exports.jiggle = exports.progressLoading = exports.glow = exports.rotate360 = exports.easing = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n'], ['\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  0%, 100% { opacity: 1; }\n  50% { opacity: .4; }\n'], ['\n  0%, 100% { opacity: 1; }\n  50% { opacity: .4; }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\t0%, 100% { transform: translateX(-100%); }\n\t50% { transform: translateX(300%); }\n'], ['\n\t0%, 100% { transform: translateX(-100%); }\n\t50% { transform: translateX(300%); }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  0%, 100% { transform:translate3d(0,0,0); }\n  12.5%, 62.5% { transform:translate3d(-4px,0,0); }\n  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }\n'], ['\n  0%, 100% { transform:translate3d(0,0,0); }\n  12.5%, 62.5% { transform:translate3d(-4px,0,0); }\n  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  animation: ', ' 1.5s ease-in-out infinite;\n  background: ', ';\n  color: transparent;\n  cursor: progress;\n'], ['\n  animation: ', ' 1.5s ease-in-out infinite;\n  background: ', ';\n  color: transparent;\n  cursor: progress;\n']); // Global animations -- extends the animate-css-styled-components package


var _styledComponents = __webpack_require__(2);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var easing = exports.easing = {
  rubber: 'cubic-bezier(0.175, 0.885, 0.335, 1.05)'
};

var rotate360 = exports.rotate360 = (0, _styledComponents.keyframes)(_templateObject);

var glow = exports.glow = (0, _styledComponents.keyframes)(_templateObject2);

var progressLoading = exports.progressLoading = (0, _styledComponents.keyframes)(_templateObject3);

var jiggle = exports.jiggle = (0, _styledComponents.keyframes)(_templateObject4);

var inlineGlow = exports.inlineGlow = (0, _styledComponents.css)(_templateObject5, glow, _styles.color.mediumlight);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  vertical-align: middle;\n'], ['\n  display: inline-block;\n  vertical-align: middle;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  fill: ', ';\n'], ['\n  fill: ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

var _icons = __webpack_require__(44);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Svg = _styledComponents2.default.svg(_templateObject);

// prettier-ignore
var Path = _styledComponents2.default.path(_templateObject2, _styles.color.darkest);

function Icon(_ref) {
  var icon = _ref.icon,
      props = (0, _objectWithoutProperties3.default)(_ref, ['icon']);

  return _react2.default.createElement(
    Svg,
    (0, _extends3.default)({ viewBox: '0 0 1024 1024', width: '20px', height: '20px' }, props),
    _react2.default.createElement(Path, { d: _icons2.default[icon] })
  );
}

Icon.propTypes = {
  icon: _propTypes2.default.string.isRequired
};

exports.default = Icon;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  transition: all 150ms ease-out;\n  text-decoration: none;\n\n  color: ', ';\n  > svg path { fill: ', '; }\n  &:hover, &:focus {\n    cursor: pointer;\n    transform: translate3d(0,-1px,0);\n    color: ', ';\n    > svg path { fill: ', ' }\n  }\n  &:active {\n    transform: translate3d(0,0,0);\n    color: ', ';\n    > svg path { fill: ', ' }\n  }\n\n  > svg {\n    display: inline-block;\n    height: .85em;\n    width: .85em;\n    vertical-align: text-top;\n    position: relative;\n    bottom: -.225em;\n    margin-right: .25em;  \n  }\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  display: inline-block;\n  transition: all 150ms ease-out;\n  text-decoration: none;\n\n  color: ', ';\n  > svg path { fill: ', '; }\n  &:hover, &:focus {\n    cursor: pointer;\n    transform: translate3d(0,-1px,0);\n    color: ', ';\n    > svg path { fill: ', ' }\n  }\n  &:active {\n    transform: translate3d(0,0,0);\n    color: ', ';\n    > svg path { fill: ', ' }\n  }\n\n  > svg {\n    display: inline-block;\n    height: .85em;\n    width: .85em;\n    vertical-align: text-top;\n    position: relative;\n    bottom: -.225em;\n    margin-right: .25em;  \n  }\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    svg {\n      height: 1em;\n      width: 1em;\n      vertical-align: top;\n      position: relative;\n      bottom: 0;\n      margin-right: 0;\n    }\n  '], ['\n    svg {\n      height: 1em;\n      width: 1em;\n      vertical-align: top;\n      position: relative;\n      bottom: 0;\n      margin-right: 0;\n    }\n  ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    color: ', ';\n    > svg path { fill: ', '; }\n\n    &:hover {\n      color: ', ';\n      > svg path { fill: ', '; }\n    }\n\n    &:active {\n      color: ', ';\n      > svg path { fill: ', '; }\n    }\n\t'], ['\n    color: ', ';\n    > svg path { fill: ', '; }\n\n    &:hover {\n      color: ', ';\n      > svg path { fill: ', '; }\n    }\n\n    &:active {\n      color: ', ';\n      > svg path { fill: ', '; }\n    }\n\t']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    color: inherit;\n\n    &:hover, &:active {\n      color: inherit;\n      text-decoration: underline;\n    }\n\t'], ['\n    color: inherit;\n\n    &:hover, &:active {\n      color: inherit;\n      text-decoration: underline;\n    }\n\t']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    border: 0;\n    background: none;\n    padding: 0;\n    font-size: inherit;\n\n    &:focus {\n      border-bottom: 1px solid;\n    }\n  '], ['\n    border: 0;\n    background: none;\n    padding: 0;\n    font-size: inherit;\n\n    &:focus {\n      border-bottom: 1px solid;\n    }\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = __webpack_require__(21);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var LinkWrapper = _styledComponents2.default.a(_templateObject, _styles.color.primary, _styles.color.primary, (0, _polished.darken)(0.07, _styles.color.primary), (0, _polished.darken)(0.07, _styles.color.primary), (0, _polished.darken)(0.10, _styles.color.primary), (0, _polished.darken)(0.10, _styles.color.primary), function (props) {
  return props.icon && (0, _styledComponents.css)(_templateObject2);
}, function (props) {
  return props.secondary && (0, _styledComponents.css)(_templateObject3, _styles.color.mediumdark, _styles.color.mediumdark, _styles.color.dark, _styles.color.dark, _styles.color.darker, _styles.color.darker);
}, function (props) {
  return props.tertiary && (0, _styledComponents.css)(_templateObject3, _styles.color.dark, _styles.color.dark, _styles.color.darkest, _styles.color.darkest, _styles.color.mediumdark, _styles.color.mediumdark);
}, function (props) {
  return props.nochrome && (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.inverse && (0, _styledComponents.css)(_templateObject3, _styles.color.lightest, _styles.color.lightest, _styles.color.lighter, _styles.color.lighter, _styles.color.light, _styles.color.light);
}, function (props) {
  return props.isButton && (0, _styledComponents.css)(_templateObject5);
});

var LinkButton = LinkWrapper.withComponent('button');

function Link(_ref) {
  var isButton = _ref.isButton,
      props = (0, _objectWithoutProperties3.default)(_ref, ['isButton']);

  if (isButton) {
    return _react2.default.createElement(LinkButton, (0, _extends3.default)({ isButton: true }, props));
  }
  return _react2.default.createElement(LinkWrapper, props);
}

Link.propTypes = {
  isButton: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

Link.defaultProps = {
  isButton: false,
  children: null
};

exports.default = Link;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormState = exports.Textarea = exports.Select = exports.Radio = exports.Input = exports.Checkbox = exports.TooltipLinkList = exports.TooltipNote = exports.TooltipMessage = exports.WithTooltip = exports.Radar = exports.Spinner = exports.ProgressDots = exports.ProgressBar = exports.TableDrawer = exports.Table = exports.Subheading = exports.Subheader = exports.SpecList = exports.Canvas = exports.ComponentHeader = exports.Wobbler = exports.StatusLight = exports.Logo = exports.Link = exports.Icon = exports.Highlight = exports.EmptyMessage = exports.Clipboard = exports.Cardinal = exports.ButtonToggle = exports.ButtonHover = exports.Button = exports.Breadcrumb = exports.BadgeCount = exports.Badge = exports.Avatar = exports.formatting = exports.icons = exports.animation = exports.global = exports.styles = undefined;

var _Avatar = __webpack_require__(65);

Object.defineProperty(exports, 'Avatar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Avatar).default;
  }
});

var _Badge = __webpack_require__(38);

Object.defineProperty(exports, 'Badge', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Badge).default;
  }
});

var _BadgeCount = __webpack_require__(66);

Object.defineProperty(exports, 'BadgeCount', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BadgeCount).default;
  }
});

var _Breadcrumb = __webpack_require__(67);

Object.defineProperty(exports, 'Breadcrumb', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Breadcrumb).default;
  }
});

var _Button = __webpack_require__(22);

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Button).default;
  }
});

var _ButtonHover = __webpack_require__(68);

Object.defineProperty(exports, 'ButtonHover', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ButtonHover).default;
  }
});

var _ButtonToggle = __webpack_require__(69);

Object.defineProperty(exports, 'ButtonToggle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ButtonToggle).default;
  }
});

var _Cardinal = __webpack_require__(70);

Object.defineProperty(exports, 'Cardinal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Cardinal).default;
  }
});

var _Clipboard = __webpack_require__(71);

Object.defineProperty(exports, 'Clipboard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Clipboard).default;
  }
});

var _EmptyMessage = __webpack_require__(28);

Object.defineProperty(exports, 'EmptyMessage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_EmptyMessage).default;
  }
});

var _Highlight = __webpack_require__(72);

Object.defineProperty(exports, 'Highlight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Highlight).default;
  }
});

var _Icon = __webpack_require__(14);

Object.defineProperty(exports, 'Icon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Icon).default;
  }
});

var _Link = __webpack_require__(15);

Object.defineProperty(exports, 'Link', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Link).default;
  }
});

var _Logo = __webpack_require__(73);

Object.defineProperty(exports, 'Logo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Logo).default;
  }
});

var _StatusLight = __webpack_require__(39);

Object.defineProperty(exports, 'StatusLight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StatusLight).default;
  }
});

var _Wobbler = __webpack_require__(74);

Object.defineProperty(exports, 'Wobbler', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Wobbler).default;
  }
});

var _ComponentHeader = __webpack_require__(76);

Object.defineProperty(exports, 'ComponentHeader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ComponentHeader).default;
  }
});

var _Canvas = __webpack_require__(75);

Object.defineProperty(exports, 'Canvas', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Canvas).default;
  }
});

var _SpecList = __webpack_require__(80);

Object.defineProperty(exports, 'SpecList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SpecList).default;
  }
});

var _Subheader = __webpack_require__(81);

Object.defineProperty(exports, 'Subheader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Subheader).default;
  }
});

var _Subheading = __webpack_require__(82);

Object.defineProperty(exports, 'Subheading', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Subheading).default;
  }
});

var _Table = __webpack_require__(90);

Object.defineProperty(exports, 'Table', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Table).default;
  }
});

var _TableDrawer = __webpack_require__(91);

Object.defineProperty(exports, 'TableDrawer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TableDrawer).default;
  }
});

var _ProgressBar = __webpack_require__(85);

Object.defineProperty(exports, 'ProgressBar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ProgressBar).default;
  }
});

var _ProgressDots = __webpack_require__(86);

Object.defineProperty(exports, 'ProgressDots', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ProgressDots).default;
  }
});

var _Spinner = __webpack_require__(29);

Object.defineProperty(exports, 'Spinner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Spinner).default;
  }
});

var _Radar = __webpack_require__(87);

Object.defineProperty(exports, 'Radar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Radar).default;
  }
});

var _WithTooltip = __webpack_require__(30);

Object.defineProperty(exports, 'WithTooltip', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_WithTooltip).default;
  }
});

var _TooltipMessage = __webpack_require__(94);

Object.defineProperty(exports, 'TooltipMessage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TooltipMessage).default;
  }
});

var _TooltipNote = __webpack_require__(45);

Object.defineProperty(exports, 'TooltipNote', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TooltipNote).default;
  }
});

var _TooltipLinkList = __webpack_require__(93);

Object.defineProperty(exports, 'TooltipLinkList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TooltipLinkList).default;
  }
});

var _Checkbox = __webpack_require__(83);

Object.defineProperty(exports, 'Checkbox', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Checkbox).default;
  }
});

var _Input = __webpack_require__(41);

Object.defineProperty(exports, 'Input', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Input).default;
  }
});

var _Radio = __webpack_require__(42);

Object.defineProperty(exports, 'Radio', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Radio).default;
  }
});

var _Select = __webpack_require__(84);

Object.defineProperty(exports, 'Select', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Select).default;
  }
});

var _Textarea = __webpack_require__(43);

Object.defineProperty(exports, 'Textarea', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Textarea).default;
  }
});

var _FormState = __webpack_require__(40);

Object.defineProperty(exports, 'FormState', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FormState).default;
  }
});

var _styles = __webpack_require__(5);

var styles = _interopRequireWildcard(_styles);

var _global = __webpack_require__(89);

var global = _interopRequireWildcard(_global);

var _animation = __webpack_require__(7);

var animation = _interopRequireWildcard(_animation);

var _icons = __webpack_require__(44);

var icons = _interopRequireWildcard(_icons);

var _formatting = __webpack_require__(88);

var formatting = _interopRequireWildcard(_formatting);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.styles = styles;
exports.global = global;
exports.animation = animation;
exports.icons = icons;
exports.formatting = formatting;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Callback = exports.parse = exports.stringify = undefined;

var _ejson = __webpack_require__(56);

var _Callback = __webpack_require__(46);

var _Callback2 = _interopRequireDefault(_Callback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.stringify = _ejson.stringify;
exports.parse = _ejson.parse;
exports.Callback = _Callback2.default;

// Ensure this has been registered

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  vertical-align: top;\n'], ['\n  display: inline-block;\n  vertical-align: top;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  opacity: 0;\n'], ['\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  opacity: 0;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  padding: ', ';\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transition: all 150ms ease-out;\n  transform: translate3d(0,0,0);\n  vertical-align: top;\n  white-space: nowrap;\n  user-select: none;\n  opacity: 1;\n  margin: 0;\n  background: transparent;\n\n\n  font-size: ', 'px;\n  font-weight: ', ';\n  line-height: 1;\n\n  &:hover {\n    transform: translate3d(0,-1px,0);\n  }\n\n  &:active {\n    transform: translate3d(0,0,0);\n  }\n\n  ', ' {\n    transform: scale3d(1,1,1) translate3d(0,0,0);\n    transition: transform 700ms ', ';\n    opacity: 1;\n  }\n\n  ', ' {\n    transform: translate3d(0, 100%, 0);\n  }\n\n  svg {\n    height: ', 'px;\n    width: ', 'px;\n    vertical-align: top;\n    margin-right: ', 'px;\n    margin-top: ', 'px;\n    margin-bottom: ', 'px;\n\n    /* Necessary for js mouse events to not glitch out when hovering on svgs */\n    pointer-events: none;\n  }\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  padding: ', ';\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transition: all 150ms ease-out;\n  transform: translate3d(0,0,0);\n  vertical-align: top;\n  white-space: nowrap;\n  user-select: none;\n  opacity: 1;\n  margin: 0;\n  background: transparent;\n\n\n  font-size: ', 'px;\n  font-weight: ', ';\n  line-height: 1;\n\n  &:hover {\n    transform: translate3d(0,-1px,0);\n  }\n\n  &:active {\n    transform: translate3d(0,0,0);\n  }\n\n  ', ' {\n    transform: scale3d(1,1,1) translate3d(0,0,0);\n    transition: transform 700ms ', ';\n    opacity: 1;\n  }\n\n  ', ' {\n    transform: translate3d(0, 100%, 0);\n  }\n\n  svg {\n    height: ', 'px;\n    width: ', 'px;\n    vertical-align: top;\n    margin-right: ', 'px;\n    margin-top: ', 'px;\n    margin-bottom: ', 'px;\n\n    /* Necessary for js mouse events to not glitch out when hovering on svgs */\n    pointer-events: none;\n  }\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    cursor: not-allowed !important;\n\t\topacity: .5;\n    &:hover {\n      transform: none;\n    }\n\t'], ['\n    cursor: not-allowed !important;\n\t\topacity: .5;\n    &:hover {\n      transform: none;\n    }\n\t']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    cursor: progress !important;\n    opacity: .7;\n\n    ', ' {\n      transition: transform 700ms ', ';\n      transform: translate3d(0, -50%,0);\n      opacity: 1;\n    }\n\n    ', ' {\n      transform: scale3d(0,0,1) translate3d(0,-100%,0);\n      opacity: 0;\n    }\n\n    &:hover {\n      transform: none;\n    }\n\t'], ['\n    cursor: progress !important;\n    opacity: .7;\n\n    ', ' {\n      transition: transform 700ms ', ';\n      transform: translate3d(0, -50%,0);\n      opacity: 1;\n    }\n\n    ', ' {\n      transform: scale3d(0,0,1) translate3d(0,-100%,0);\n      opacity: 0;\n    }\n\n    &:hover {\n      transform: none;\n    }\n\t']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n    svg {\n      display: block;\n      margin: 0;\n    }\n    ', '\n\n    ', '\n  '], ['\n    svg {\n      display: block;\n      margin: 0;\n    }\n    ', '\n\n    ', '\n  ']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  \t\tpadding: 7px;\n  \t'], ['\n  \t\tpadding: 7px;\n  \t']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  \t\tpadding: 12px;\n  \t'], ['\n  \t\tpadding: 12px;\n  \t']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n    background: ', ';\n    color: ', ';\n    svg path { fill: ', '; }\n\n    ', '\n\t'], ['\n    background: ', ';\n    color: ', ';\n    svg path { fill: ', '; }\n\n    ', '\n\t']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n      &:hover { background: ', ';}\n      &:active { box-shadow: rgba(0,0,0,.1) 0 0 0 3em inset; }\n    '], ['\n      &:hover { background: ', ';}\n      &:active { box-shadow: rgba(0,0,0,.1) 0 0 0 3em inset; }\n    ']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n    background: transparent;\n    box-shadow: ', ' 0 0 0 1px inset;\n    color: ', ';\n    svg path { fill: ', '; }\n\n    ', '\n\n\t'], ['\n    background: transparent;\n    box-shadow: ', ' 0 0 0 1px inset;\n    color: ', ';\n    svg path { fill: ', '; }\n\n    ', '\n\n\t']),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(['\n      &:hover { background: transparent;}\n      &:active {\n        box-shadow: ', ' 0 0 0 3em inset;\n        color: ', ';\n      }\n    '], ['\n      &:hover { background: transparent;}\n      &:active {\n        box-shadow: ', ' 0 0 0 3em inset;\n        color: ', ';\n      }\n    ']),
    _templateObject13 = (0, _taggedTemplateLiteral3.default)(['\n      &:hover { background: ', '; }\n      &:active { box-shadow: rgba(0,0,0,.1) 0 0 0 3em inset; }\n    '], ['\n      &:hover { background: ', '; }\n      &:active { box-shadow: rgba(0,0,0,.1) 0 0 0 3em inset; }\n    ']),
    _templateObject14 = (0, _taggedTemplateLiteral3.default)(['\n    background: transparent;\n    box-shadow: ', ' 0 0 0 1px inset;\n    color: ', ';\n    svg path { fill: ', '; }\n\n    ', '\n\t'], ['\n    background: transparent;\n    box-shadow: ', ' 0 0 0 1px inset;\n    color: ', ';\n    svg path { fill: ', '; }\n\n    ', '\n\t']),
    _templateObject15 = (0, _taggedTemplateLiteral3.default)(['\n    background: ', ';\n    color: ', ';\n    svg path { fill: ', '; }\n\n    ', '\n\n\t'], ['\n    background: ', ';\n    color: ', ';\n    svg path { fill: ', '; }\n\n    ', '\n\n\t']),
    _templateObject16 = (0, _taggedTemplateLiteral3.default)(['\n      &:hover { background: transparent;}\n    '], ['\n      &:hover { background: transparent;}\n    ']),
    _templateObject17 = (0, _taggedTemplateLiteral3.default)(['\n    box-shadow: ', ' 0 0 0 1px inset;\n\t\tcolor: ', ';\n    background: transparent;\n\n    svg path { fill: ', '; }\n\n    ', '\n\t'], ['\n    box-shadow: ', ' 0 0 0 1px inset;\n\t\tcolor: ', ';\n    background: transparent;\n\n    svg path { fill: ', '; }\n\n    ', '\n\t']),
    _templateObject18 = (0, _taggedTemplateLiteral3.default)(['\n      &:hover { box-shadow: ', ' 0 0 0 1px inset; }\n\n      &:active {\n        background: ', ';\n        box-shadow: ', ' 0 0 0 1px inset;\n        color: ', ';\n      }\n    '], ['\n      &:hover { box-shadow: ', ' 0 0 0 1px inset; }\n\n      &:active {\n        background: ', ';\n        box-shadow: ', ' 0 0 0 1px inset;\n        color: ', ';\n      }\n    ']),
    _templateObject19 = (0, _taggedTemplateLiteral3.default)(['\n    background: ', ';\n    box-shadow: ', ' 0 0 0 1px inset;\n    color: ', ';\n\n    svg path { fill: ', '; }\n\t'], ['\n    background: ', ';\n    box-shadow: ', ' 0 0 0 1px inset;\n    color: ', ';\n\n    svg path { fill: ', '; }\n\t']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = __webpack_require__(21);

var _styles = __webpack_require__(5);

var _animation = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = _styledComponents2.default.span(_templateObject);

var Loading = _styledComponents2.default.span(_templateObject2);

// prettier-ignore
var ButtonWrapper = _styledComponents2.default.button(_templateObject3, function (props) {
  return props.small ? '8px 16px' : '13px 20px';
}, function (props) {
  return props.small ? _styles.typography.size.s1 : _styles.typography.size.s2;
}, _styles.typography.weight.extrabold, Text, _animation.easing.rubber, Loading, function (props) {
  return props.small ? '14' : '16';
}, function (props) {
  return props.small ? '14' : '16';
}, function (props) {
  return props.small ? '4' : '6';
}, function (props) {
  return props.small ? '-1' : '-2';
}, function (props) {
  return props.small ? '-1' : '-2';
}, function (props) {
  return props.disabled && (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.loading && (0, _styledComponents.css)(_templateObject5, Loading, _animation.easing.rubber, Text);
}, function (props) {
  return props.icon && (0, _styledComponents.css)(_templateObject6, props.small && (0, _styledComponents.css)(_templateObject7), !props.small && (0, _styledComponents.css)(_templateObject8));
}, function (props) {
  return props.primary && (0, _styledComponents.css)(_templateObject9, _styles.color.primary, _styles.color.lightest, _styles.color.lightest, !props.loading && (0, _styledComponents.css)(_templateObject10, (0, _polished.darken)(0.05, _styles.color.primary)));
}, function (props) {
  return props.primary && props.active && (0, _styledComponents.css)(_templateObject11, _styles.color.primary, _styles.color.primary, _styles.color.primary, !props.loading && (0, _styledComponents.css)(_templateObject12, _styles.color.primary, _styles.color.lightest));
}, function (props) {
  return props.secondary && (0, _styledComponents.css)(_templateObject9, _styles.color.secondary, _styles.color.lightest, _styles.color.lightest, !props.loading && (0, _styledComponents.css)(_templateObject13, (0, _polished.darken)(0.05, _styles.color.secondary)));
}, function (props) {
  return props.secondary && props.active && (0, _styledComponents.css)(_templateObject14, _styles.color.secondary, _styles.color.secondary, _styles.color.secondary, !props.loading && (0, _styledComponents.css)(_templateObject12, _styles.color.secondary, _styles.color.lightest));
}, function (props) {
  return props.tertiary && (0, _styledComponents.css)(_templateObject15, _styles.color.tertiary, _styles.color.darkest, _styles.color.darkest, !props.loading && (0, _styledComponents.css)(_templateObject13, (0, _polished.darken)(0.05, _styles.color.tertiary)));
}, function (props) {
  return props.tertiary && props.active && (0, _styledComponents.css)(_templateObject11, _styles.color.medium, _styles.color.darkest, _styles.color.tertiary, !props.loading && (0, _styledComponents.css)(_templateObject16));
}, function (props) {
  return props.outline && (0, _styledComponents.css)(_templateObject17, _styles.color.medium, _styles.color.dark, _styles.color.dark, !props.loading && (0, _styledComponents.css)(_templateObject18, _styles.color.mediumdark, _styles.color.medium, _styles.color.medium, _styles.color.darkest));
}, function (props) {
  return props.outline && props.active && (0, _styledComponents.css)(_templateObject19, _styles.color.medium, _styles.color.medium, _styles.color.darkest, _styles.color.darkest);
});

var ButtonLink = ButtonWrapper.withComponent('a');

function Button(_ref) {
  var loading = _ref.loading,
      isLink = _ref.isLink,
      children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['loading', 'isLink', 'children']);

  if (isLink) {
    return _react2.default.createElement(
      ButtonLink,
      (0, _extends3.default)({ loading: loading }, props),
      _react2.default.createElement(
        Text,
        null,
        children
      ),
      loading && _react2.default.createElement(
        Loading,
        null,
        'Loading'
      )
    );
  }
  return _react2.default.createElement(
    ButtonWrapper,
    (0, _extends3.default)({ loading: loading }, props),
    _react2.default.createElement(
      Text,
      null,
      children
    ),
    loading && _react2.default.createElement(
      Loading,
      null,
      'Loading'
    )
  );
}

Button.propTypes = {
  loading: _propTypes2.default.bool,
  isLink: _propTypes2.default.bool,
  children: _propTypes2.default.node.isRequired
};

Button.defaultProps = {
  loading: false,
  isLink: false
};

exports.default = Button;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.hashSpecInput = hashSpecInput;

var _mobx = __webpack_require__(18);

var _serialize = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Make this a hash? - https://github.com/hichroma/chromatic/issues/157
function hashSpecInput(input) {
  var _ref = typeof input === 'string' ? (0, _serialize.parse)(input) : input,
      element = _ref.element,
      ancestors = _ref.ancestors;

  return (0, _serialize.stringify)({ element: element, ancestors: ancestors });
}

var Spec = function Spec(_ref2) {
  var id = _ref2.id,
      name = _ref2.name,
      component = _ref2.component,
      number = _ref2.number,
      input = _ref2.input,
      key = _ref2.key,
      domElement = _ref2.domElement,
      node = _ref2.node;
  (0, _classCallCheck3.default)(this, Spec);

  this.input = typeof input === 'string' ? (0, _serialize.parse)(input) : input;
  this.node = node;

  this.key = key || hashSpecInput(this.input);
  this.internalId = this.id || this.key;
  this.domElement = domElement;

  (0, _mobx.extendObservable)(this, {
    id: id,
    name: name,
    status: id ? 'saved' : 'unsaved',
    component: component || { name: this.input.element.name },
    number: number
  });
};

exports.default = Spec;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formatReactElementNode = __webpack_require__(118);

var _formatReactElementNode2 = _interopRequireDefault(_formatReactElementNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsxStopChars = ['<', '>', '{', '}'];

var shouldBeEscaped = function shouldBeEscaped(s) {
  return jsxStopChars.some(function (jsxStopChar) {
    return s.includes(jsxStopChar);
  });
};

var escape = function escape(s) {
  if (!shouldBeEscaped(s)) {
    return s;
  }

  return '{`' + s + '`}';
};

exports.default = function (node, inline, lvl, options) {
  if (node.type === 'number') {
    return String(node.value);
  }

  if (node.type === 'string') {
    return node.value ? escape(String(node.value)) : '';
  }

  if (node.type === 'ReactElement') {
    return (0, _formatReactElementNode2.default)(node, inline, lvl, options);
  }

  throw new TypeError('Unknow format type "' + node.type + '"');
};
//# sourceMappingURL=formatTreeNode.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: ', ';\n'], ['\n  font-weight: ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  padding: ', 'px;\n  text-align: center;\n  color: ', ';\n  font-size: ', 'px;\n'], ['\n  padding: ', 'px;\n  text-align: center;\n  color: ', ';\n  font-size: ', 'px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Title = _styledComponents2.default.div(_templateObject, _styles.typography.weight.extrabold);

var Desc = _styledComponents2.default.div(_templateObject2);

// prettier-ignore
var Message = _styledComponents2.default.div(_templateObject3, _styles.spacing.padding.large, _styles.color.dark, _styles.typography.size.s2);

function EmptyMessage(_ref) {
  var noun = _ref.noun,
      children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['noun', 'children']);

  return _react2.default.createElement(
    Message,
    props,
    _react2.default.createElement(
      Title,
      null,
      'No ',
      noun || 'data'
    ),
    _react2.default.createElement(
      Desc,
      null,
      children || 'Nothing here'
    )
  );
}

EmptyMessage.propTypes = {
  noun: _propTypes2.default.string,
  children: _propTypes2.default.node
};

EmptyMessage.defaultProps = {
  noun: null,
  children: null
};

exports.default = EmptyMessage;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  border-radius: 3em;\n  cursor: progress;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  transition: all 200ms ease-out;\n  vertical-align: top;\n\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -16px;\n  margin-left: -16px;\n  height: 32px;\n  width: 32px;\n\n  animation: ', ' .7s linear infinite;\n\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(0,0,0,.03);\n  border-top-color: rgba(0,0,0,.15);\n\n  ', '\n\n  ', '\n'], ['\n  border-radius: 3em;\n  cursor: progress;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  transition: all 200ms ease-out;\n  vertical-align: top;\n\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -16px;\n  margin-left: -16px;\n  height: 32px;\n  width: 32px;\n\n  animation: ', ' .7s linear infinite;\n\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(0,0,0,.03);\n  border-top-color: rgba(0,0,0,.15);\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    border-color: rgba(255,255,255,.2);\n    border-top-color: rgba(255,255,255,.4);\n  '], ['\n    border-color: rgba(255,255,255,.2);\n    border-top-color: rgba(255,255,255,.4);\n  ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    margin-top: -6px;\n    margin-left: -6px;\n    height: 12px;\n    width: 12px;\n    border: 1px solid ', ';\n    border-bottom-color: transparent;\n  '], ['\n    margin-top: -6px;\n    margin-left: -6px;\n    height: 12px;\n    width: 12px;\n    border: 1px solid ', ';\n    border-bottom-color: transparent;\n  ']);

exports.default = Spinner;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

var _animation = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var SpinnerWrapper = _styledComponents2.default.div(_templateObject, _animation.rotate360, function (props) {
  return props.inverse && (0, _styledComponents.css)(_templateObject2);
}, function (props) {
  return props.inForm && (0, _styledComponents.css)(_templateObject3, _styles.color.primary);
});

function Spinner(_ref) {
  var props = (0, _objectWithoutProperties3.default)(_ref, []);

  return _react2.default.createElement(SpinnerWrapper, props);
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  cursor: ', ';\n'], ['\n  display: inline-block;\n  cursor: ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(27);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Popper = __webpack_require__(92);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A target that doesn't speak popper
// prettier-ignore
var TargetContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.mode === 'hover' ? 'default' : 'pointer';
});

function withinElements(element, elements) {
  return !!elements.find(function (e) {
    return e === element;
  }) || element.parentNode && withinElements(element.parentNode, elements);
}

var WithTooltip = function (_Component) {
  (0, _inherits3.default)(WithTooltip, _Component);

  function WithTooltip(props, context) {
    (0, _classCallCheck3.default)(this, WithTooltip);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WithTooltip.__proto__ || (0, _getPrototypeOf2.default)(WithTooltip)).call(this, props, context));

    _this.state = { hidden: props.mode !== 'click-start-open' };
    _this.onHide = _this.onHide.bind(_this);
    _this.onHideIfOutsideTooltip = _this.onHideIfOutsideTooltip.bind(_this);
    _this.onShow = _this.onShow.bind(_this);
    _this.onToggleHidden = _this.onToggleHidden.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(WithTooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.targetElement) {
        // Don't try and render the popper if we haven't actually rendered a DOM
        // element -- i.e we are testing
        return;
      }
      document.body.addEventListener('click', this.onHideIfOutsideTooltip, false);
      this.popper = document.createElement('div');
      this.popper.setAttribute('style', 'height:0; width: 0;');
      this.rootEl = document.getElementById('chromatic-root') || document.body;
      this.rootEl.appendChild(this.popper);
      this.renderPopper();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderPopper();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('click', this.onHideIfOutsideTooltip);
      (0, _reactDom.unmountComponentAtNode)(this.popper);
      this.rootEl.removeChild(this.popper);
      this.unmounted = true;
    }
  }, {
    key: 'onHide',
    value: function onHide() {
      var _this2 = this;

      var hide = function hide() {
        if (!_this2.unmounted) {
          _this2.setState({ hidden: true });
        }
      };
      if (this.props.mode === 'hover') {
        this.timeout = setTimeout(hide, 300);
      } else {
        hide();
      }
    }
  }, {
    key: 'onHideIfOutsideTooltip',
    value: function onHideIfOutsideTooltip(event) {
      if (!this.state.hidden && !withinElements(event.target, [this.targetElement, this.popperElement])) {
        this.onHide();
      }
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      clearTimeout(this.timeout);
      this.setState({ hidden: false });
    }
  }, {
    key: 'onToggleHidden',
    value: function onToggleHidden() {
      if (this.state.hidden) {
        this.onShow();
      } else {
        this.onHide();
      }
    }
  }, {
    key: 'events',
    value: function events() {
      var mode = this.props.mode;

      var events = void 0;
      if (mode === 'hover') {
        events = {
          onMouseOver: this.onShow,
          onMouseOut: this.onHide
        };
      } else if (mode === 'click' || mode === 'click-start-open') {
        events = {
          onClick: this.onToggleHidden
        };
      }

      return events;
    }
  }, {
    key: 'renderPopper',
    value: function renderPopper() {
      var _this3 = this;

      var _props = this.props,
          mode = _props.mode,
          placement = _props.placement,
          children = _props.children,
          hasChrome = _props.hasChrome,
          tooltip = _props.tooltip,
          props = (0, _objectWithoutProperties3.default)(_props, ['mode', 'placement', 'children', 'hasChrome', 'tooltip']);
      var hidden = this.state.hidden;


      if (!hidden) {
        var managerElement = _react2.default.createElement(
          _Popper.Manager,
          props,
          _react2.default.createElement(
            _Popper.Target,
            { mode: mode },
            function (_ref) {
              var ref = _ref.targetProps.ref;
              return ref(_this3.targetElement) || _react2.default.createElement('div', null);
            }
          ),
          _react2.default.createElement(
            _Popper.PopperWithArrow,
            (0, _extends3.default)({
              innerRef: function innerRef(r) {
                _this3.popperElement = r;
              },
              placement: placement,
              hidden: hidden,
              hasChrome: hasChrome
            }, this.events()),
            tooltip
          )
        );

        (0, _reactDom.render)(managerElement, this.popper);
      } else {
        (0, _reactDom.unmountComponentAtNode)(this.popper);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          mode = _props2.mode,
          placement = _props2.placement,
          children = _props2.children,
          hasChrome = _props2.hasChrome,
          tooltip = _props2.tooltip,
          props = (0, _objectWithoutProperties3.default)(_props2, ['mode', 'placement', 'children', 'hasChrome', 'tooltip']);


      return _react2.default.createElement(
        TargetContainer,
        (0, _extends3.default)({}, this.events(), {
          innerRef: function innerRef(r) {
            _this4.targetElement = r;
          },
          mode: mode
        }, props),
        this.props.children
      );
    }
  }]);
  return WithTooltip;
}(_react.Component);

WithTooltip.propTypes = {
  mode: _propTypes2.default.string,
  placement: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  hasChrome: _propTypes2.default.bool,
  tooltip: _propTypes2.default.node.isRequired
};

WithTooltip.defaultProps = {
  mode: 'hover',
  placement: 'top',
  hasChrome: true
};

exports.default = WithTooltip;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONTAINER_CLASS = exports.NO_LAYOUT_CLASS = undefined;

var _toConsumableArray2 = __webpack_require__(55);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = __webpack_require__(13);

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = __webpack_require__(35);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = renderSpec;

var _react = __webpack_require__(0);

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (times, tabStop) {
  if (times === 0) {
    return '';
  }

  return new Array(times * tabStop).fill(' ').join('');
};
//# sourceMappingURL=spacer.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _tree = __webpack_require__(52);

var getReactElementDisplayName = function getReactElementDisplayName(element) {
  return element.type.displayName || element.type.name || ( // function name
  typeof element.type === 'function' // function without a name, you should provide one
  ? 'No Display Name' : element.type);
};

var noChildren = function noChildren(propsValue, propName) {
  return propName !== 'children';
};

var onlyMeaningfulChildren = function onlyMeaningfulChildren(children) {
  return children !== true && children !== false && children !== null && children !== '';
};

var filterProps = function filterProps(originalProps, cb) {
  var filteredProps = {};

  Object.keys(originalProps).filter(function (key) {
    return cb(originalProps[key], key);
  }).forEach(function (key) {
    return filteredProps[key] = originalProps[key];
  });

  return filteredProps;
};

var parseReactElement = function parseReactElement(element, options) {
  var _options$displayName = options.displayName,
      displayNameFn = _options$displayName === undefined ? getReactElementDisplayName : _options$displayName;


  if (typeof element === 'string') {
    return (0, _tree.createStringTreeNode)(element);
  } else if (typeof element === 'number') {
    return (0, _tree.createNumberTreeNode)(element);
  } else if (!(0, _react.isValidElement)(element)) {
    throw new Error('react-element-to-jsx-string: Expected a React.Element, got `' + (typeof element === 'undefined' ? 'undefined' : _typeof(element)) + '`');
  }

  var displayName = displayNameFn(element);

  var props = filterProps(element.props, noChildren);
  if (element.ref !== null) {
    props.ref = element.ref;
  }

  var key = element.key;
  if (typeof key === 'string' && key.search(/^\./)) {
    // React automatically add key=".X" when there are some children
    props.key = key;
  }

  var defaultProps = filterProps(element.type.defaultProps || {}, noChildren);
  var childrens = _react.Children.toArray(element.props.children).filter(onlyMeaningfulChildren).map(function (child) {
    return parseReactElement(child, options);
  });

  return (0, _tree.createReactElementTreeNode)(displayName, props, defaultProps, childrens);
};

exports.default = parseReactElement;
//# sourceMappingURL=parseReactElement.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectedReact = undefined;

var _values = __webpack_require__(54);

var _values2 = _interopRequireDefault(_values);

exports.default = listen;

var _reactDevtoolsCore = __webpack_require__(136);

var _mobx = __webpack_require__(18);

var _MockWebSocket = __webpack_require__(107);

var _MockWebSocket2 = _interopRequireDefault(_MockWebSocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var detectedReact = exports.detectedReact = (0, _mobx.observable)(false);

// We need to set this stuff up *RIGHT AWAY* before react gets imported.
// So we can't even wait for the `listen` call
/* eslint-env browser */
var oldWS = window.WebSocket;
window.WebSocket = _MockWebSocket2.default;
(0, _reactDevtoolsCore.connectToDevTools)();
window.WebSocket = oldWS;

// eslint-disable-next-line no-underscore-dangle
var hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;

var listening = false;
var renderers = {};
hook.sub('renderer-attached', function (_ref) {
  var id = _ref.id,
      renderer = _ref.renderer,
      helpers = _ref.helpers;

  detectedReact.set(true);
  if (!listening) {
    // We need to force devtools to re-attach these renderers later
    renderers[id] = { id: id, renderer: renderer, helpers: helpers };
  }
});

function listen(onNode) {
  // eslint-disable-next-line no-underscore-dangle
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.on('react-devtools', function (agent) {
    listening = true;
    agent.on('mount', function (node) {
      var element = agent.getNodeForID(node.id);

      // Need to wait for the element to get attached to the DOM
      setTimeout(function () {
        onNode({ node: node, element: element, event: 'mount' });
      }, 0);
    });

    agent.on('update', function (node) {
      var element = agent.getNodeForID(node.id);

      onNode({ node: node, element: element, event: 'update' });
    });

    agent.on('unmount', function (nodeId) {
      onNode({ nodeId: nodeId, event: 'unmount' });
    });

    // Fake re-attaching all renderers. This triggers the backend to walk the
    // tree, emitting "mount" events on the agent
    (0, _values2.default)(renderers).forEach(function (renderer) {
      hook.emit('renderer-attached', renderer);
    });
  });
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  vertical-align: top;\n  font-size: ', 'px;\n  line-height: ', 'px;\n  padding: ', ';\n  border-radius: ', ';\n\n  ', '\n  ', '\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  display: inline-block;\n  vertical-align: top;\n  font-size: ', 'px;\n  line-height: ', 'px;\n  padding: ', ';\n  border-radius: ', ';\n\n  ', '\n  ', '\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    color: ', ';\n    background: ', ';\n\t'], ['\n    color: ', ';\n    background: ', ';\n\t']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    color: ', ';\n    background: ', ';\n    font-weight: ', ';\n\t'], ['\n    color: ', ';\n    background: ', ';\n    font-weight: ', ';\n\t']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    color: ', ';\n  '], ['\n    color: ', ';\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var BadgeWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.appearance === "change" ? _styles.typography.size.s2 : '11';
}, function (props) {
  return props.appearance === "change" ? '20' : '12';
}, function (props) {
  return props.appearance === "change" ? '4px 6px' : '5px 12px 3px';
}, function (props) {
  return props.appearance === "change" ? '4px' : '3em';
}, function (props) {
  return props.status === 'positive' && (0, _styledComponents.css)(_templateObject2, _styles.color.positive, _styles.background.positive);
}, function (props) {
  return props.status === 'negative' && (0, _styledComponents.css)(_templateObject2, _styles.color.negative, _styles.background.negative);
}, function (props) {
  return props.status === 'warning' && (0, _styledComponents.css)(_templateObject2, _styles.color.warning, _styles.background.warning);
}, function (props) {
  return props.status === 'error' && (0, _styledComponents.css)(_templateObject3, _styles.color.lightest, _styles.color.negative, _styles.typography.weight.bold);
}, function (props) {
  return props.status === 'neutral' && (0, _styledComponents.css)(_templateObject2, _styles.color.dark, _styles.color.mediumlight);
}, function (props) {
  return props.appearance === 'change' && (0, _styledComponents.css)(_templateObject4, _styles.color.dark);
});

function Badge(_ref) {
  var props = (0, _objectWithoutProperties3.default)(_ref, []);

  return _react2.default.createElement(BadgeWrapper, props);
}

exports.default = Badge;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  border-radius: 3em;\n  cursor: ', ';\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  transition: all 200ms ease-out;\n  transform: translate3d(0,0,0);\n  vertical-align: top;\n\n  &:before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    content: \'\';\n    border-radius: 3em;\n    z-index: 1;\n  }\n\n  /* dimensions */\n  height: 44px;\n  width: 44px;\n\n  ', '\n\n  ', '\n\n  ', '\n\n  /* background */\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  background-color: ', ';\n  border-radius: 3em;\n  cursor: ', ';\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  transition: all 200ms ease-out;\n  transform: translate3d(0,0,0);\n  vertical-align: top;\n\n  &:before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    content: \'\';\n    border-radius: 3em;\n    z-index: 1;\n  }\n\n  /* dimensions */\n  height: 44px;\n  width: 44px;\n\n  ', '\n\n  ', '\n\n  ', '\n\n  /* background */\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    height: 32px;\n    width: 32px;\n\t'], ['\n    height: 32px;\n    width: 32px;\n\t']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    height: 20px;\n    width: 20px;\n\t'], ['\n    height: 20px;\n    width: 20px;\n\t']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    animation: ', ' 1.5s ease-in-out infinite;\n\t'], ['\n    animation: ', ' 1.5s ease-in-out infinite;\n\t']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    background-color: ', ';\n    background-image: linear-gradient(20deg, #74E48B 0%, #61D135 100%);\n\n    &:before {\n      background-image: radial-gradient(50% 100%, rgba(0,189,255,0.30) 14%, rgba(0,0,0,0.00) 100%);\n    }\n\t'], ['\n    background-color: ', ';\n    background-image: linear-gradient(20deg, #74E48B 0%, #61D135 100%);\n\n    &:before {\n      background-image: radial-gradient(50% 100%, rgba(0,189,255,0.30) 14%, rgba(0,0,0,0.00) 100%);\n    }\n\t']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n    background-color: ', ';\n    background-image: linear-gradient(22deg, #EB7E44 0%, #FF4400 100%), linear-gradient(-245deg, rgba(255,219,0,0.30) 5%, rgba(0,0,0,0.00) 100%);\n\t'], ['\n    background-color: ', ';\n    background-image: linear-gradient(22deg, #EB7E44 0%, #FF4400 100%), linear-gradient(-245deg, rgba(255,219,0,0.30) 5%, rgba(0,0,0,0.00) 100%);\n\t']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n    background-color: ', ';\n    background-image: linear-gradient(20deg, #FED230 0%, #FEBB30 100%);\n\n    &:before {\n      background-image: radial-gradient(50% 100%, rgba(255,133,0,0.30) 14%, rgba(0,0,0,0.00) 100%);\n    }\n\t'], ['\n    background-color: ', ';\n    background-image: linear-gradient(20deg, #FED230 0%, #FEBB30 100%);\n\n    &:before {\n      background-image: radial-gradient(50% 100%, rgba(255,133,0,0.30) 14%, rgba(0,0,0,0.00) 100%);\n    }\n\t']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n    background-color: transparent;\n    border: 1px solid ', ';\n\n    &:before {\n      background: ', ';\n      border-radius: 3em;\n      position: absolute;\n      top: 20%;\n      left: calc(50% - 1px);\n      height: 45%;\n      width: 2px;\n    }\n\n    &:after {\n      background: ', ';\n      border-radius: 3em;\n      content: \'\';\n      position: absolute;\n      bottom: 20%;\n      left: calc(50% - 1px);\n      height: 2px;\n      width: 2px;\n    }\n\t'], ['\n    background-color: transparent;\n    border: 1px solid ', ';\n\n    &:before {\n      background: ', ';\n      border-radius: 3em;\n      position: absolute;\n      top: 20%;\n      left: calc(50% - 1px);\n      height: 45%;\n      width: 2px;\n    }\n\n    &:after {\n      background: ', ';\n      border-radius: 3em;\n      content: \'\';\n      position: absolute;\n      bottom: 20%;\n      left: calc(50% - 1px);\n      height: 2px;\n      width: 2px;\n    }\n\t']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n    animation: ', ' .7s linear infinite;\n    background: transparent;\n    border-width: ', ';\n    border-style: solid;\n    border-left-color: #00AAFF;\n    border-bottom-color: #25CCFD;\n    border-right-color: #58FAF9;\n    border-top-color: transparent;\n\t'], ['\n    animation: ', ' .7s linear infinite;\n    background: transparent;\n    border-width: ', ';\n    border-style: solid;\n    border-left-color: #00AAFF;\n    border-bottom-color: #25CCFD;\n    border-right-color: #58FAF9;\n    border-top-color: transparent;\n\t']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

var _animation = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Status = _styledComponents2.default.div(_templateObject, _styles.color.mediumlight, function (props) {
  return props.progress ? 'progress' : 'inherit';
}, function (props) {
  return props.size === 'medium' && (0, _styledComponents.css)(_templateObject2);
}, function (props) {
  return props.size === 'small' && (0, _styledComponents.css)(_templateObject3);
}, function (props) {
  return props.status === 'loading' && (0, _styledComponents.css)(_templateObject4, _animation.glow);
}, function (props) {
  return props.status === 'positive' && (0, _styledComponents.css)(_templateObject5, _styles.color.positive);
}, function (props) {
  return props.status === 'negative' && (0, _styledComponents.css)(_templateObject6, _styles.color.negative);
}, function (props) {
  return props.status === 'warning' && (0, _styledComponents.css)(_templateObject7, _styles.color.warning);
}, function (props) {
  return props.status === 'error' && (0, _styledComponents.css)(_templateObject8, _styles.color.mediumdark, _styles.color.mediumdark, _styles.color.mediumdark);
}, function (props) {
  return props.status === 'progress' && (0, _styledComponents.css)(_templateObject9, _animation.rotate360, props.size === 'small' ? '1px' : '2px');
});

function StatusLight(_ref) {
  var status = _ref.status,
      className = _ref.className,
      size = _ref.size,
      props = (0, _objectWithoutProperties3.default)(_ref, ['status', 'className', 'size']);

  return _react2.default.createElement(Status, (0, _extends3.default)({ status: status, className: className, size: size }, props));
}

StatusLight.propTypes = {
  status: _propTypes2.default.oneOf(['positive', 'negative', 'warning', 'loading', 'progress', 'error']),
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  className: _propTypes2.default.string
};

StatusLight.defaultProps = {
  status: 'loading',
  size: 'large',
  className: null
};

exports.default = StatusLight;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _mobxReactForm = __webpack_require__(134);

var _mobxReactForm2 = _interopRequireDefault(_mobxReactForm);

var _validatorjs = __webpack_require__(59);

var _validatorjs2 = _interopRequireDefault(_validatorjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defaultBindings(_ref) {
  var field = _ref.field,
      props = _ref.props,
      $try = _ref.$try;

  var keys = ['id', 'name', 'type', 'value', 'label', 'placeholder', 'disabled', 'onChange', 'onBlur', 'onFocus', 'autoFocus',
  // Added this
  'error'];
  var bindings = {};
  keys.forEach(function (key) {
    bindings[key] = $try(props[key], field[key]);
  });
  // For react keys
  bindings.key = bindings.id;
  return bindings;
}

var FormData = function (_MobxReactForm) {
  (0, _inherits3.default)(FormData, _MobxReactForm);

  function FormData(options, _ref2) {
    var _ref2$plugins = _ref2.plugins,
        plugins = _ref2$plugins === undefined ? { dvr: _validatorjs2.default } : _ref2$plugins,
        hooks = _ref2.hooks;
    (0, _classCallCheck3.default)(this, FormData);
    return (0, _possibleConstructorReturn3.default)(this, (FormData.__proto__ || (0, _getPrototypeOf2.default)(FormData)).call(this, options, { plugins: plugins, hooks: hooks }));
  }
  // eslint-disable-next-line class-methods-use-this


  (0, _createClass3.default)(FormData, [{
    key: 'bindings',
    value: function bindings() {
      return {
        Default: defaultBindings,
        Select: function Select(_ref3) {
          var field = _ref3.field,
              props = _ref3.props,
              $try = _ref3.$try;
          return (0, _extends3.default)({}, defaultBindings({ field: field, props: props, $try: $try }), {
            options: $try(props.options, field.options)
          });
        },
        Radio: function Radio(_ref4) {
          var field = _ref4.field,
              props = _ref4.props,
              $try = _ref4.$try;
          return (0, _extends3.default)({}, defaultBindings({ field: field, props: props, $try: $try }), {
            key: $try(props.id, field.id) + '-' + props.value,
            checked: field.value === props.value
          });
        },
        Checkbox: function Checkbox(_ref5) {
          var field = _ref5.field,
              props = _ref5.props,
              $try = _ref5.$try;
          return (0, _extends3.default)({}, defaultBindings({ field: field, props: props, $try: $try }), {
            value: true,
            checked: field.value
          });
        }
      };
    }
  }]);
  return FormData;
}(_mobxReactForm2.default);

exports.default = FormData;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: ', ';\n  font-family: ', ';\n  font-size: ', 'px;\n'], ['\n  font-weight: ', ';\n  font-family: ', ';\n  font-size: ', 'px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 0.33em;\n'], ['\n  margin-bottom: 0.33em;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  ::placeholder: ', ';\n  appearance: none;\n  border:none;\n  box-sizing: border-box;\n  display: block;\n  outline: none;\n  width: 100%;\n  margin: 0;\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: .5;\n  }\n\n  &:-webkit-autofill { -webkit-box-shadow: 0 0 0 3em ', ' inset; }\n'], ['\n  ::placeholder: ', ';\n  appearance: none;\n  border:none;\n  box-sizing: border-box;\n  display: block;\n  outline: none;\n  width: 100%;\n  margin: 0;\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: .5;\n  }\n\n  &:-webkit-autofill { -webkit-box-shadow: 0 0 0 3em ', ' inset; }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  position: relative;\n  vertical-align: top;\n  width: 100%;\n\n  ', ' {\n    background: ', ';\n    border-radius: 0;\n    color: ', ';\n    font-family: ', ';\n    font-size: ', 'px;\n    line-height: 20px;\n    padding: .7111em 1em; //40\n\n    &:focus { box-shadow: ', ' 0 0 0 1px inset; }\n\n    ', '\n\n    ', '\n\n    ', '\n\n    ', '\n  }\n\n  &:before {\n    position: absolute;\n    top: 50%;\n    right: 1.25em;\n    transform: translate3d(100%, -50%, 0);\n    transition: all 200ms ease-out;\n    font-family: ', ' ;\n    font-size: ', 'px;\n    content: attr(data-error);\n    line-height: 1em;\n    opacity: 0;\n    padding: .25em 0 .25em .5em;\n    pointer-events: none;\n    z-index: 1;\n\n    background: ', ';\n    color: ', ';\n\n    ', '\n    ', '\n  }\n\n  ', '\n\n  ', '\n'], ['\n  display: inline-block;\n  position: relative;\n  vertical-align: top;\n  width: 100%;\n\n  ', ' {\n    background: ', ';\n    border-radius: 0;\n    color: ', ';\n    font-family: ', ';\n    font-size: ', 'px;\n    line-height: 20px;\n    padding: .7111em 1em; //40\n\n    &:focus { box-shadow: ', ' 0 0 0 1px inset; }\n\n    ', '\n\n    ', '\n\n    ', '\n\n    ', '\n  }\n\n  &:before {\n    position: absolute;\n    top: 50%;\n    right: 1.25em;\n    transform: translate3d(100%, -50%, 0);\n    transition: all 200ms ease-out;\n    font-family: ', ' ;\n    font-size: ', 'px;\n    content: attr(data-error);\n    line-height: 1em;\n    opacity: 0;\n    padding: .25em 0 .25em .5em;\n    pointer-events: none;\n    z-index: 1;\n\n    background: ', ';\n    color: ', ';\n\n    ', '\n    ', '\n  }\n\n  ', '\n\n  ', '\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n      box-shadow: ', ' 0 0 0 1px inset;\n\n      &:focus { box-shadow: ', ' 0 0 0 1px inset; }\n    '], ['\n      box-shadow: ', ' 0 0 0 1px inset;\n\n      &:focus { box-shadow: ', ' 0 0 0 1px inset; }\n    ']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n      padding: 0;\n      border: none;\n      box-shadow: none;\n      background: none;\n\n      &:focus { box-shadow: none !important; }\n    '], ['\n      padding: 0;\n      border: none;\n      box-shadow: none;\n      background: none;\n\n      &:focus { box-shadow: none !important; }\n    ']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n      font-size: ', 'px;\n      line-height: 16px;\n      padding: .5em 1em; //28\n      border-radius: 3em;\n      background: transparent;\n\n      box-shadow: ', ' 0 0 0 1px inset;\n\n      &:focus { box-shadow: ', ' 0 0 0 1px inset; }\n    '], ['\n      font-size: ', 'px;\n      line-height: 16px;\n      padding: .5em 1em; //28\n      border-radius: 3em;\n      background: transparent;\n\n      box-shadow: ', ' 0 0 0 1px inset;\n\n      &:focus { box-shadow: ', ' 0 0 0 1px inset; }\n    ']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n      font-size: ', 'px;\n      line-height: 16px;\n      font-family: ', ';\n      border-radius: 2px;\n      background: rgba(0,0,0,.05);\n      padding: 3px 6px;\n    '], ['\n      font-size: ', 'px;\n      line-height: 16px;\n      font-family: ', ';\n      border-radius: 2px;\n      background: rgba(0,0,0,.05);\n      padding: 3px 6px;\n    ']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)([' right: 0; '], [' right: 0; ']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n      top: -4px;\n      right: auto;\n      left: 0;\n      border-radius: 4px;\n      padding: 6px;\n    '], ['\n      top: -4px;\n      right: auto;\n      left: 0;\n      border-radius: 4px;\n      padding: 6px;\n    ']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n    > svg {\n      transition: all 150ms ease-out;\n      position: absolute;\n      top: 50%;\n      height: 1em;\n      width: 1em;\n  \t\tfont-size: ', 'em;\n  \t\tmargin-top: -.5em;\n  \t\tz-index: 1;\n\n      background: transparent;\n\n      path {\n        transition: all 150ms ease-out;\n        fill: ', ';\n      }\n    }\n\n    ', ':focus + svg path {\n      fill: ', ';\n    }\n\n    ', ' {\n      padding-left: 2.5em;\n\n      ', ';\n      ', ';\n    }\n    > svg { left: ', 'em; }\n\n  '], ['\n    > svg {\n      transition: all 150ms ease-out;\n      position: absolute;\n      top: 50%;\n      height: 1em;\n      width: 1em;\n  \t\tfont-size: ', 'em;\n  \t\tmargin-top: -.5em;\n  \t\tz-index: 1;\n\n      background: transparent;\n\n      path {\n        transition: all 150ms ease-out;\n        fill: ', ';\n      }\n    }\n\n    ', ':focus + svg path {\n      fill: ', ';\n    }\n\n    ', ' {\n      padding-left: 2.5em;\n\n      ', ';\n      ', ';\n    }\n    > svg { left: ', 'em; }\n\n  ']),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)([' padding-left: 2.25em; '], [' padding-left: 2.25em; ']),
    _templateObject13 = (0, _taggedTemplateLiteral3.default)([' padding-left: 1.7em; '], [' padding-left: 1.7em; ']),
    _templateObject14 = (0, _taggedTemplateLiteral3.default)(['\n    &:before {\n      color: ', ';\n      transform: translate3d(0%, -50%, 0);\n      opacity: 1;\n    }\n\n    ', '\n\n    ', ';\n\n    svg {\n      animation: ', ' 700ms ease-out;\n      path { fill: ', '; }\n    }\n\n  '], ['\n    &:before {\n      color: ', ';\n      transform: translate3d(0%, -50%, 0);\n      opacity: 1;\n    }\n\n    ', '\n\n    ', ';\n\n    svg {\n      animation: ', ' 700ms ease-out;\n      path { fill: ', '; }\n    }\n\n  ']),
    _templateObject15 = (0, _taggedTemplateLiteral3.default)(['\n      &:before {\n        opacity: 0;\n      }\n      &:hover:before {\n        transform: translate3d(0%, -100%, 0);\n        opacity: 1;\n      }\n    '], ['\n      &:before {\n        opacity: 0;\n      }\n      &:hover:before {\n        transform: translate3d(0%, -100%, 0);\n        opacity: 1;\n      }\n    ']),
    _templateObject16 = (0, _taggedTemplateLiteral3.default)(['\n      ', ' {\n          box-shadow: ', ' 0 0 0 1px inset;\n          &:focus { box-shadow: ', ' 0 0 0 1px inset !important;  }\n      }\n    '], ['\n      ', ' {\n          box-shadow: ', ' 0 0 0 1px inset;\n          &:focus { box-shadow: ', ' 0 0 0 1px inset !important;  }\n      }\n    ']),
    _templateObject17 = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject18 = (0, _taggedTemplateLiteral3.default)(['\n    display: table-row;\n\n    ', ', ', ' {\n      display: table-cell;\n    }\n\n    ', ' {\n      width: 1px;\n      padding-right: 20px;\n    }\n\n    ', ' {\n      width: auto;\n    }\n\n  '], ['\n    display: table-row;\n\n    ', ', ', ' {\n      display: table-cell;\n    }\n\n    ', ' {\n      width: 1px;\n      padding-right: 20px;\n    }\n\n    ', ' {\n      width: auto;\n    }\n\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

var _animation = __webpack_require__(7);

var _Icon = __webpack_require__(14);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Label = _styledComponents2.default.span(_templateObject, function (props) {
  return props.appearance !== 'code' && _styles.typography.weight.extrabold;
}, function (props) {
  return props.appearance === 'code' && _styles.typography.type.code;
}, function (props) {
  return props.appearance === 'code' ? _styles.typography.size.s1 : _styles.typography.size.s2;
});

// prettier-ignore
var LabelWrapper = _styledComponents2.default.div(_templateObject2);

// prettier-ignore
var InputText = _styledComponents2.default.input.attrs({ type: 'text' })(_templateObject3, _styles.color.medium, _styles.color.lightest);

// prettier-ignore
var InputWrapper = _styledComponents2.default.div(_templateObject4, InputText, _styles.color.lightest, _styles.color.darkest, function (props) {
  return props.appearance === 'code' && _styles.typography.type.code;
}, function (props) {
  return props.appearance === 'code' ? _styles.typography.size.s1 : _styles.typography.size.s2;
}, _styles.color.primary, function (props) {
  return props.appearance === 'secondary' && (0, _styledComponents.css)(_templateObject5, _styles.color.mediumlight, _styles.color.primary);
}, function (props) {
  return props.appearance === 'tertiary' && (0, _styledComponents.css)(_templateObject6);
}, function (props) {
  return props.appearance === 'pill' && (0, _styledComponents.css)(_templateObject7, _styles.typography.size.s1, _styles.color.medium, _styles.color.primary);
}, function (props) {
  return props.appearance === 'code' && (0, _styledComponents.css)(_templateObject8, _styles.typography.size.s2 - 1, _styles.typography.type.code);
}, function (props) {
  return props.appearance === 'code' ? _styles.typography.type.code : _styles.typography.type.primary;
}, _styles.typography.size.s1, function (props) {
  return props.appearance !== 'tertiary' && 'rgba(255,255,255,.9)';
}, _styles.color.negative, function (props) {
  return props.appearance === 'tertiary' && (0, _styledComponents.css)(_templateObject9);
}, function (props) {
  return props.appearance === 'code' && (0, _styledComponents.css)(_templateObject10);
}, function (props) {
  return props.icon && (0, _styledComponents.css)(_templateObject11, props.appearance === 'pill' ? 0.75 : 1, _styles.color.mediumdark, InputText, _styles.color.darker, InputText, props.appearance === 'pill' && (0, _styledComponents.css)(_templateObject12), props.appearance === 'tertiary' && (0, _styledComponents.css)(_templateObject13), props.appearance === 'tertiary' ? 0 : 0.8);
}, function (props) {
  return props.error && (0, _styledComponents.css)(_templateObject14, _styles.color.negative, props.appearance === 'code' && (0, _styledComponents.css)(_templateObject15), props.appearance !== 'tertiary' && (0, _styledComponents.css)(_templateObject16, InputText, _styles.color.negative, _styles.color.negative), _animation.jiggle, _styles.color.negative);
});
// prettier-ignore
var InputContainer = _styledComponents2.default.div(_templateObject17, function (props) {
  return props.orientation === 'horizontal' && (0, _styledComponents.css)(_templateObject18, LabelWrapper, InputWrapper, LabelWrapper, InputWrapper);
});

function Input(_ref) {
  var value = _ref.value,
      label = _ref.label,
      orientation = _ref.orientation,
      icon = _ref.icon,
      error = _ref.error,
      appearance = _ref.appearance,
      className = _ref.className,
      props = (0, _objectWithoutProperties3.default)(_ref, ['value', 'label', 'orientation', 'icon', 'error', 'appearance', 'className']);

  return _react2.default.createElement(
    InputContainer,
    { orientation: orientation, className: className },
    label && _react2.default.createElement(
      LabelWrapper,
      null,
      _react2.default.createElement(
        Label,
        { appearance: appearance },
        label
      )
    ),
    _react2.default.createElement(
      InputWrapper,
      { error: error, 'data-error': error, icon: icon, appearance: appearance },
      _react2.default.createElement(InputText, (0, _extends3.default)({ value: value }, props)),
      icon && _react2.default.createElement(_Icon2.default, { icon: icon })
    )
  );
}

Input.propTypes = {
  value: _propTypes2.default.string,
  appearance: _propTypes2.default.oneOf(['default', 'secondary', 'tertiary', 'pill', 'code']),
  label: _propTypes2.default.string,
  orientation: _propTypes2.default.oneOf(['vertical', 'horizontal']),
  icon: _propTypes2.default.string,
  error: _propTypes2.default.string,
  className: _propTypes2.default.string
};

Input.defaultProps = {
  value: '',
  appearance: 'default',
  label: null,
  orientation: 'vertical',
  icon: null,
  error: null,
  className: null
};

exports.default = Input;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  cursor: pointer;\n  font-size: ', 'px;\n  font-weight: ', ';\n  min-height: 1em;\n\tposition: relative;\n  display: block;\n'], ['\n  cursor: pointer;\n  font-size: ', 'px;\n  font-weight: ', ';\n  min-height: 1em;\n\tposition: relative;\n  display: block;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: ', ';\n  color: ', ';\n  margin-left: 6px;\n'], ['\n  font-weight: ', ';\n  color: ', ';\n  margin-left: 6px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  float: left;\n  margin: 0 .6em 0 0;\n  visibility: hidden;\n\n  & + ', ' {\n    display: block;\n\n    line-height: 1;\n\n    &:before,\n    &:after {\n      transition: all 150ms ease-out;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 14px;\n      width: 14px;\n      content: \'\';\n      display: block;\n      border-radius: 3em;\n    }\n  }\n\n  & + ', ':before { box-shadow: ', ' 0 0 0 1px inset; }\n\n  &:checked + ', ':before { box-shadow: ', ' 0 0 0 1px inset; }\n\n\t& + ', ':after {\n    transform: scale3d(0,0,1);\n\n    height: 10px;\n    margin-left: 2px;\n    margin-top: 2px;\n    width: 10px;\n\n    opacity: 0;\n  }\n\n\t&:checked + ', ':after {\n    transform: scale3d(1,1,1);\n    background: ', ';\n    opacity: 1;\n  }\n'], ['\n  float: left;\n  margin: 0 .6em 0 0;\n  visibility: hidden;\n\n  & + ', ' {\n    display: block;\n\n    line-height: 1;\n\n    &:before,\n    &:after {\n      transition: all 150ms ease-out;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 14px;\n      width: 14px;\n      content: \'\';\n      display: block;\n      border-radius: 3em;\n    }\n  }\n\n  & + ', ':before { box-shadow: ', ' 0 0 0 1px inset; }\n\n  &:checked + ', ':before { box-shadow: ', ' 0 0 0 1px inset; }\n\n\t& + ', ':after {\n    transform: scale3d(0,0,1);\n\n    height: 10px;\n    margin-left: 2px;\n    margin-top: 2px;\n    width: 10px;\n\n    opacity: 0;\n  }\n\n\t&:checked + ', ':after {\n    transform: scale3d(1,1,1);\n    background: ', ';\n    opacity: 1;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Label = _styledComponents2.default.label(_templateObject, _styles.typography.size.s2, _styles.typography.weight.bold);

// prettier-ignore
var Error = _styledComponents2.default.span(_templateObject2, _styles.typography.weight.regular, _styles.color.negative);

var LabelText = _styledComponents2.default.span(_templateObject3);

// prettier-ignore
var Input = _styledComponents2.default.input.attrs({ type: 'radio' })(_templateObject4, LabelText, LabelText, _styles.color.mediumdark, LabelText, _styles.color.primary, LabelText, LabelText, _styles.color.primary);

function Radio(_ref) {
  var value = _ref.value,
      label = _ref.label,
      error = _ref.error,
      className = _ref.className,
      props = (0, _objectWithoutProperties3.default)(_ref, ['value', 'label', 'error', 'className']);

  return _react2.default.createElement(
    Label,
    { className: className },
    _react2.default.createElement(Input, (0, _extends3.default)({ value: value }, props, { type: 'radio' })),
    _react2.default.createElement(
      LabelText,
      null,
      label,
      error && _react2.default.createElement(
        Error,
        null,
        error
      )
    )
  );
}

Radio.propTypes = {
  value: _propTypes2.default.string,
  label: _propTypes2.default.string,
  error: _propTypes2.default.string,
  className: _propTypes2.default.string
};

Radio.defaultProps = {
  value: '',
  label: null,
  error: null,
  className: null
};

exports.default = Radio;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\n'], ['\n\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  font-weight: ', ';\n  &:not(:only-child) { margin-left: .5em; }\n'], ['\n  color: ', ';\n  font-weight: ', ';\n  &:not(:only-child) { margin-left: .5em; }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: ', 'em;\n  font-weight: ', ';\n  font-family: ', ';\n  font-size: ', 'px;\n'], ['\n  margin-bottom: ', 'em;\n  font-weight: ', ';\n  font-family: ', ';\n  font-size: ', 'px;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  ::placeholder: ', ';\n  appearance: none;\n  border:none;\n  box-sizing: border-box;\n  display: block;\n  outline: none;\n  width: 100%;\n  word-wrap: break-word;\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: .5;\n  }\n\n  &:-webkit-autofill { -webkit-box-shadow: 0 0 0 3em ', ' inset; }\n'], ['\n  ::placeholder: ', ';\n  appearance: none;\n  border:none;\n  box-sizing: border-box;\n  display: block;\n  outline: none;\n  width: 100%;\n  word-wrap: break-word;\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: .5;\n  }\n\n  &:-webkit-autofill { -webkit-box-shadow: 0 0 0 3em ', ' inset; }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  font-family: ', ';\n  font-size: ', 'px;\n  overflow: hidden;\n  position: relative;\n  vertical-align: top;\n  width: 100%;\n\n  ', ' {\n    background: ', ';\n    border-radius: 0;\n    color: ', ';\n    font-size: ', 'px;\n    line-height: 20px;\n    padding: .7111em 1em; //40\n\n    &:focus { box-shadow: ', ' 0 0 0 1px inset; }\n\n    ', '\n\n    ', '\n\n    ', '\n  }\n\n  ', '\n\n'], ['\n  display: inline-block;\n  font-family: ', ';\n  font-size: ', 'px;\n  overflow: hidden;\n  position: relative;\n  vertical-align: top;\n  width: 100%;\n\n  ', ' {\n    background: ', ';\n    border-radius: 0;\n    color: ', ';\n    font-size: ', 'px;\n    line-height: 20px;\n    padding: .7111em 1em; //40\n\n    &:focus { box-shadow: ', ' 0 0 0 1px inset; }\n\n    ', '\n\n    ', '\n\n    ', '\n  }\n\n  ', '\n\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n      box-shadow: ', ' 0 0 0 1px inset;\n\n      &:focus { box-shadow: ', ' 0 0 0 1px inset; }\n    '], ['\n      box-shadow: ', ' 0 0 0 1px inset;\n\n      &:focus { box-shadow: ', ' 0 0 0 1px inset; }\n    ']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n      padding: 0;\n      border: none;\n      box-shadow: none;\n      background: none;\n\n      &:focus { box-shadow: none !important; }\n    '], ['\n      padding: 0;\n      border: none;\n      box-shadow: none;\n      background: none;\n\n      &:focus { box-shadow: none !important; }\n    ']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n      font-size: ', 'px;\n      line-height: 16px;\n      font-family: ', ';\n      border-radius: 2px;\n      background: rgba(0,0,0,.05);\n      padding: 6px 6px;\n    '], ['\n      font-size: ', 'px;\n      line-height: 16px;\n      font-family: ', ';\n      border-radius: 2px;\n      background: rgba(0,0,0,.05);\n      padding: 6px 6px;\n    ']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n    ', ';\n  '], ['\n    ', ';\n  ']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n      ', ' {\n          box-shadow: ', ' 0 0 0 1px inset;\n          &:focus { box-shadow: ', ' 0 0 0 1px inset !important;  }\n      }\n    '], ['\n      ', ' {\n          box-shadow: ', ' 0 0 0 1px inset;\n          &:focus { box-shadow: ', ' 0 0 0 1px inset !important;  }\n      }\n    ']),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject13 = (0, _taggedTemplateLiteral3.default)(['\n    display: table-row;\n\n    ', ', ', ' {\n      display: table-cell;\n    }\n\n    ', ' {\n      width: 1px;\n      padding-right: 20px;\n    }\n\n    ', ' {\n      width: auto;\n    }\n\n  '], ['\n    display: table-row;\n\n    ', ', ', ' {\n      display: table-cell;\n    }\n\n    ', ' {\n      width: 1px;\n      padding-right: 20px;\n    }\n\n    ', ' {\n      width: auto;\n    }\n\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Label = _styledComponents2.default.span(_templateObject);

// prettier-ignore
var ErrorMessage = _styledComponents2.default.span(_templateObject2, _styles.color.negative, _styles.typography.weight.regular);
// prettier-ignore
var LabelWrapper = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.appearance === 'code' ? 0.5 : 0.33;
}, function (props) {
  return props.appearance !== 'code' && _styles.typography.weight.extrabold;
}, function (props) {
  return props.appearance === 'code' && _styles.typography.type.code;
}, function (props) {
  return props.appearance === 'code' ? _styles.typography.size.s1 : _styles.typography.size.s2;
});

// prettier-ignore
var Subtext = _styledComponents2.default.div(_templateObject4);

// prettier-ignore
var TextareaText = _styledComponents2.default.textarea(_templateObject5, _styles.color.medium, _styles.color.lightest);

// prettier-ignore
var TextareaWrapper = _styledComponents2.default.div(_templateObject6, function (props) {
  return props.appearance === 'code' && _styles.typography.type.code;
}, function (props) {
  return props.appearance === 'code' ? _styles.typography.size.s1 : _styles.typography.size.s2;
}, TextareaText, _styles.color.lightest, _styles.color.darkest, _styles.typography.size.s2, _styles.color.primary, function (props) {
  return props.appearance === 'secondary' && (0, _styledComponents.css)(_templateObject7, _styles.color.mediumlight, _styles.color.primary);
}, function (props) {
  return props.appearance === 'tertiary' && (0, _styledComponents.css)(_templateObject8);
}, function (props) {
  return props.appearance === 'code' && (0, _styledComponents.css)(_templateObject9, _styles.typography.size.s1, _styles.typography.type.code);
}, function (props) {
  return props.error && (0, _styledComponents.css)(_templateObject10, props.appearance !== 'tertiary' && (0, _styledComponents.css)(_templateObject11, TextareaText, _styles.color.negative, _styles.color.negative));
});

// prettier-ignore
var TextareaContainer = _styledComponents2.default.div(_templateObject12, function (props) {
  return props.orientation === 'horizontal' && (0, _styledComponents.css)(_templateObject13, LabelWrapper, TextareaWrapper, LabelWrapper, TextareaWrapper);
});

function Textarea(_ref) {
  var value = _ref.value,
      label = _ref.label,
      error = _ref.error,
      subtext = _ref.subtext,
      subtextSentiment = _ref.subtextSentiment,
      appearance = _ref.appearance,
      orientation = _ref.orientation,
      className = _ref.className,
      other = (0, _objectWithoutProperties3.default)(_ref, ['value', 'label', 'error', 'subtext', 'subtextSentiment', 'appearance', 'orientation', 'className']);

  return _react2.default.createElement(
    TextareaContainer,
    { orientation: orientation, className: className },
    (label || error) && _react2.default.createElement(
      LabelWrapper,
      { appearance: appearance },
      label && _react2.default.createElement(
        Label,
        null,
        label
      ),
      error && _react2.default.createElement(
        ErrorMessage,
        null,
        error
      )
    ),
    _react2.default.createElement(
      TextareaWrapper,
      { error: error, appearance: appearance },
      _react2.default.createElement(TextareaText, (0, _extends3.default)({ value: value, rows: '7' }, other)),
      subtext && _react2.default.createElement(
        Subtext,
        { sentiment: subtextSentiment },
        subtext
      )
    )
  );
}

Textarea.propTypes = {
  value: _propTypes2.default.string.isRequired,
  appearance: _propTypes2.default.oneOf(['default', 'secondary', 'tertiary', 'code']),
  label: _propTypes2.default.string,
  orientation: _propTypes2.default.oneOf(['vertical', 'horizontal']),
  error: _propTypes2.default.string,
  subtext: _propTypes2.default.string,
  subtextSentiment: _propTypes2.default.oneOf(['default', 'negative', 'warning']),
  className: _propTypes2.default.string
};

Textarea.defaultProps = {
  appearance: 'default',
  label: null,
  orientation: 'vertical',
  error: null,
  subtext: null,
  subtextSentiment: 'default',
  className: null
};

exports.default = Textarea;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Global style variables
var icons = {
  chroma: 'M511.714 956.324c-92.92 0-168.518-75.594-168.518-168.514v-334.082l131.54 75.954v215.936c0 13.172 7.082 25.446 18.48 32.030l139.33 80.43c8.33 4.814 17.014 9.168 25.872 12.966-29.646 52.72-85.44 85.28-146.704 85.28zM753.584 816.61c-29.36 0-58.43-7.812-84.064-22.59l-83.828-48.404 289.354-167.028c8.3-4.802 16.402-10.152 24.132-15.936 30.858 52.030 31.182 116.622 0.568 169.664-30.034 51.994-86.040 84.294-146.162 84.294zM270.334 816.576c-60.084 0-116.064-32.278-146.102-84.238-22.494-39.012-28.466-84.426-16.814-127.866 11.68-43.512 39.564-79.858 78.522-102.334l83.806-48.398 0.018 334.018c0 9.624 0.57 19.294 1.69 28.814-0.374 0.002-0.748 0.004-1.12 0.004zM548.73 529.73l186.996-107.966c11.416-6.588 18.506-18.864 18.506-32.040v-160.856c0.012-9.456-0.56-19.116-1.706-28.778 0.364-0.002 0.732-0.004 1.096-0.004 60.114 0 116.104 32.296 146.124 84.29 46.436 80.486 18.75 183.742-61.714 230.176l-289.302 167.040v-151.862zM325.248 357.624c-5.632-3.242-12.030-4.954-18.504-4.954-6.428 0-12.804 1.708-18.44 4.936l-139.344 80.452c-8.348 4.802-16.462 10.142-24.172 15.912-30.824-52-31.14-116.59-0.546-169.664 30.048-52 86.050-84.306 146.148-84.306 29.326 0 58.394 7.822 84.064 22.624l289.3 167.054-131.482 75.91-187.024-107.964zM390.964 158.644c-8.334-4.826-17.036-9.192-25.92-13.004 29.634-52.742 85.418-85.316 146.67-85.316 92.92 0 168.514 75.6 168.514 168.522v96.81l-289.264-167.012z',
  repository: 'M856.020 159.804c-0.122-52.916-43.048-95.774-95.992-95.774h-591.968c-1.754 0-3.468 0.154-5.164 0.37-19.644 2.54-34.836 19.292-34.836 39.63v784.584c0 22.094 17.91 40 40 40h151.972v63.594c0 10.876 6.548 20.682 16.598 24.844 10.046 4.164 21.612 1.87 29.304-5.818l34.78-34.748 34.78 34.748c5.144 5.14 12.020 7.87 19.014 7.87 3.466 0 6.962-0.672 10.292-2.052 10.048-4.164 16.598-13.968 16.598-24.844v-63.594h278.63c52.642 0 95.368-42.38 95.968-94.882h0.036v-673.916l-0.012-0.012zM776.020 159.988l-0.014 504.628h-519.974v-520.584h503.996c8.796-0 15.972 7.158 15.992 15.956zM760.028 848.616h-278.63v-56h-161.366v56h-111.972v-104h567.944l-0.002 88.204c-0.102 8.71-7.27 15.796-15.974 15.796zM320.032 240.396c0-17.67 14.328-31.998 31.998-31.998s32.002 14.326 32.002 31.998c0 17.674-14.332 32-32.002 32-17.672-0.002-31.998-14.326-31.998-32zM320.032 349.79c0-17.67 14.328-31.998 31.998-31.998s32.002 14.328 32.002 31.998c0 17.676-14.332 32-32.002 32-17.672 0-31.998-14.324-31.998-32zM320.032 459.188c0-17.67 14.328-32 31.998-32s32.002 14.328 32.002 32c0 17.674-14.332 31.998-32.002 31.998-17.672 0-31.998-14.324-31.998-31.998zM384.032 568.582c0 17.674-14.332 31.998-32.002 31.998s-31.998-14.324-31.998-31.998c0-17.67 14.328-32 31.998-32 17.67 0.002 32.002 14.33 32.002 32z',
  zoom: 'M948.286 891.716l-201.952-201.954c53.558-66.010 85.672-150.13 85.672-241.758 0-212.082-171.926-384.004-384.004-384.004s-384.004 171.922-384.004 384.004c0 212.080 171.926 384.004 384.004 384.004 91.63 0 175.75-32.114 241.762-85.674l201.95 201.954c15.624 15.62 40.952 15.618 56.57 0 15.618-15.624 15.622-40.952 0.002-56.572zM233.040 662.968c-57.42-57.42-89.042-133.764-89.042-214.964 0-81.202 31.622-157.546 89.042-214.964s133.76-89.040 214.962-89.040 157.542 31.622 214.962 89.040c57.42 57.416 89.042 133.762 89.042 214.964s-31.622 157.544-89.042 214.964c-57.42 57.416-133.76 89.040-214.962 89.040s-157.544-31.624-214.962-89.040zM488.034 600.002c-0.002 22.090-17.914 40-40 40-22.090 0-40-17.906-39.996-39.994l-0.002-112.018h-112.040c-22.092 0-39.996-17.906-39.996-39.996 0-22.094 17.906-40 40-40.002l112.036-0.002-0.002-111.998c0-22.090 17.908-39.998 39.998-39.998 22.092 0 39.998 17.904 40.002 40v111.996l111.966 0.002c22.092 0.002 40 17.912 40 39.998 0 22.092-17.904 40-39.994 39.996l-111.972 0.002v112.014z',
  medium: 'M957.288 275.906c1.304 1.030 1.73 2.842 0.828 4.316l-271.62 441.376-195.276-317.318 155.604-252.876c5.574-9.058 15.876-14.254 26.226-14.254 2.498 0 4.99 0.386 7.432 1.012 1.95 0.494 3.864 1.112 5.688 2.028l270.6 135.302c0.208 0.096 0.35 0.276 0.518 0.414zM405.504 346.676v287.844l255.85 127.93-255.85-415.774zM699.794 781.67l210.612 105.296c27.398 13.704 49.624 4.104 49.624-21.42v-506.748l-260.236 422.872zM361.090 276.318l-263.986-131.994c-4.764-2.378-9.294-3.508-13.408-3.508-11.554 0-19.664 8.944-19.664 23.954v569.938c0 15.258 11.168 33.328 24.812 40.15l232.5 116.25c5.96 2.976 11.636 4.39 16.77 4.39 14.45 0 24.582-11.188 24.582-29.95v-586.636c0-1.094-0.62-2.106-1.606-2.594z',
  graphql: 'M896.38 635.332c-7.286-4.206-14.934-7.196-22.714-9.074v-228.148c7.788-1.882 15.44-4.874 22.732-9.082 40.902-23.614 54.92-75.934 31.3-116.846-23.62-40.914-75.942-54.932-116.846-31.318-7.286 4.21-13.704 9.34-19.22 15.14l-197.586-114.076c2.266-7.68 3.502-15.802 3.502-24.212 0-47.232-38.3-85.53-85.544-85.53-47.242 0-85.544 38.298-85.544 85.53 0 8.42 1.238 16.552 3.508 24.24l-197.598 114.046c-5.518-5.802-11.936-10.93-19.218-15.138-40.902-23.614-93.22-9.596-116.846 31.318-23.62 40.91-9.6 93.228 31.3 116.846 7.29 4.208 14.94 7.202 22.728 9.082v228.15c-7.782 1.878-15.434 4.866-22.718 9.074-40.91 23.62-54.93 75.938-31.31 116.848 23.624 40.914 75.944 54.932 116.856 31.312 7.28-4.206 13.692-9.334 19.206-15.13l197.588 114.080c-2.262 7.68-3.498 15.792-3.498 24.2 0 47.244 38.302 85.544 85.546 85.544 47.242 0 85.542-38.302 85.542-85.544 0-9.362-1.524-18.36-4.308-26.79l196.558-113.484c5.914 6.624 12.946 12.446 21.046 17.126 40.912 23.618 93.23 9.602 116.856-31.314 23.618-40.914 9.598-93.232-31.318-116.85zM253.492 689.212c-1.88-7.73-4.856-15.33-9.038-22.568-4.142-7.18-9.194-13.516-14.892-18.98l258.558-447.814c7.58 2.198 15.586 3.402 23.878 3.402 8.262 0 16.242-1.196 23.802-3.38l258.574 447.85c-5.676 5.456-10.704 11.77-14.834 18.928-4.182 7.238-7.162 14.838-9.042 22.566l-517.006-0.004zM771.404 291.408c-6.156 21.512-3.936 45.396 8.138 66.306 12.066 20.91 31.638 34.772 53.348 40.2v228.538c-1.074 0.266-2.144 0.56-3.208 0.868l-258.56-447.826c0.804-0.768 1.596-1.556 2.372-2.354l197.91 114.268zM450.526 177.162c0.75 0.772 1.516 1.536 2.296 2.282l-258.578 447.856c-1.038-0.3-2.084-0.586-3.134-0.85v-228.536c21.708-5.428 41.276-19.29 53.348-40.202 12.074-20.91 14.294-44.794 8.134-66.306l197.934-114.244zM575.392 849.216c-15.65-17.262-38.256-28.108-63.39-28.108-24.152 0-45.946 10.026-61.5 26.112l-197.908-114.266c0.28-0.986 0.544-1.98 0.794-2.972h517.226c0.464 1.888 0.976 3.756 1.57 5.61l-196.792 113.624z',
  redux: 'M359.016 943.608c-23.82 5.948-47.642 8.322-71.512 8.322-88.208 0-168.084-36.982-207.444-96.534-52.432-79.882-70.296-249.182 102.538-374.356 3.586 19.078 10.746 45.292 15.492 60.834-22.656 16.652-58.39 50.064-81.046 95.324-32.19 63.184-28.61 126.404 9.54 184.798 26.194 39.304 67.926 63.176 121.564 70.34 65.598 8.332 131.154-3.582 194.332-36.94 92.998-48.898 155.014-107.282 195.49-187.162-10.702-10.75-17.818-26.248-19.074-44.15-1.168-36.942 27.45-67.922 64.388-69.132h2.418c35.73 0 65.55 28.61 66.714 64.384 1.206 35.73-24.986 65.546-59.548 69.132-65.6 134.686-181.254 225.312-333.852 255.14zM902.646 540.622c-90.59-106.072-224.11-164.488-376.708-164.488h-19.072c-10.744-21.444-33.402-35.752-58.388-35.752h-2.418c-36.944 1.186-65.548 32.192-64.392 69.13 1.216 35.774 30.99 64.394 66.81 64.394h2.328c26.242-1.208 48.894-17.892 58.434-40.542h21.45c90.624 0 176.46 26.234 253.968 77.482 59.55 39.36 102.49 90.576 126.356 152.596 20.24 50.052 19.074 98.952-2.42 140.64-33.356 63.228-89.37 97.794-163.292 97.794-47.69 0-92.998-14.33-116.822-25.082-13.118 11.958-36.984 31.028-53.64 42.944 51.226 23.87 103.7 36.94 153.762 36.94 114.446 0 199.070-63.132 231.268-126.362 34.562-69.13 32.188-188.326-57.224-289.694zM297.046 708.706c1.21 35.828 30.984 64.394 66.764 64.394h2.368c36.992-1.168 65.556-32.15 64.39-69.132-1.162-35.732-30.984-64.394-66.758-64.394h-2.376c-2.418 0-5.958 0-8.332 1.208-48.89-81.090-69.132-169.27-62.014-264.648 4.792-71.528 28.616-133.516 70.346-184.766 34.568-44.106 101.326-65.57 146.598-66.758 126.402-2.396 180.044 154.968 183.576 218.144 15.542 3.584 41.734 11.936 59.644 17.892-14.328-193.118-133.526-293.266-247.97-293.266-107.28 0-206.236 77.484-245.552 191.932-54.848 152.596-19.070 299.212 47.644 414.826-5.912 8.374-9.494 21.498-8.328 34.568z',
  grid: 'M437.162 552.368c-1.694-0.216-3.408-0.37-5.162-0.37h-263.978c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v264.040c0 22.094 17.91 40 40 40h263.978c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-264.044c0-20.34-15.19-37.094-34.838-39.632zM208.022 816.038v-184.040h183.978v184.040h-183.978zM437.162 128.4c-1.694-0.216-3.408-0.37-5.162-0.37h-263.978c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v263.968c0 22.094 17.91 40 40 40h263.978c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-263.972c0-20.342-15.19-37.096-34.838-39.632zM208.022 392v-183.968h183.978v183.968h-183.978zM861.212 552.368c-1.694-0.216-3.408-0.37-5.162-0.37h-264.050c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v264.040c0 22.094 17.91 40 40 40h264.048c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-264.044c0.002-20.34-15.19-37.094-34.836-39.632zM632 816.038v-184.040h184.048v184.040h-184.048zM861.212 128.4c-1.694-0.216-3.408-0.37-5.162-0.37h-264.050c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v263.968c0 22.094 17.91 40 40 40h264.048c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-263.972c0.002-20.342-15.19-37.096-34.836-39.632zM632 392v-183.968h184.048v183.968h-184.048z',
  redirect: 'M913.852 702.796c-15.594-15.648-40.922-15.694-56.57-0.1l-57.204 57.006v-451.424c0-0.372-0.028-0.736-0.074-1.098-0.458-99.016-80.86-179.15-179.988-179.15-99.412 0-180 80.592-180 180 0 0.084 0.004 0.166 0.004 0.248h-0.004v343.504h-0.006c0 0.082 0.006 0.164 0.006 0.248 0 55.14-44.86 100-100 100s-100-44.86-100-100c0-0.084 0.006-0.166 0.006-0.248h-0.002v-483.752c0-22.092-17.91-40-40-40s-40.004 17.908-40.004 40v483.752c0 0.018 0.002 0.036 0.002 0.054 0 0.064-0.002 0.128-0.002 0.194 0 99.408 80.59 180 180 180 99.412 0 180-80.592 180-180 0-0.084-0.004-0.166-0.004-0.248h0.004v-343.504h0.008c0-0.082-0.008-0.164-0.008-0.248 0-55.138 44.86-100 100-100s100 44.862 100 100c0 0.084-0.008 0.166-0.008 0.248h0.070v451.008l-56.368-56.506c-15.602-15.642-40.93-15.67-56.566-0.070-7.836 7.814-11.754 18.066-11.754 28.32 0 10.218 3.894 20.442 11.68 28.252l124.692 125c15.594 15.632 40.91 15.67 56.554 0.084l125.434-125c15.652-15.598 15.692-40.92 0.102-56.57z',
  grow: 'M541.146 448.384c-1.694-0.216-3.408-0.37-5.162-0.37h-367.968c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v368.032c0 22.094 17.91 40 40 40h367.968c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-368.036c0-20.34-15.192-37.094-34.838-39.632zM208.016 816.046v-288.032h287.968v288.032h-287.968zM736.032 856.046c0 22.090-17.908 40-40 40-22.090 0-40-17.908-40-40v-487.902l-488.016 0.002c-22.090 0-40-17.91-40-40s17.908-40.002 40-40.002h528.016c1.754 0 3.468 0.152 5.162 0.37 19.646 2.538 34.838 19.292 34.838 39.63v527.902zM896.032 168.030v688.004c-0.002 22.088-17.91 39.996-40 39.996s-40.002-17.908-40.002-40c0 0 0.002-304.026 0.002-304.040v-343.96h-343.96c-0.014 0-304.040 0.002-304.040 0.002-22.090 0-40-17.91-40-40s17.908-40.002 40-40.002h688c1.754 0 3.468 0.152 5.162 0.37 19.646 2.536 34.838 19.29 34.838 39.63z',
  lightning: 'M320.022 1022.644c-7.408 0-14.852-2.052-21.44-6.238-15.292-9.714-22.144-28.494-16.706-45.774l115.186-365.908-214.552-52.57c-14.714-3.606-26.128-15.214-29.486-29.988-3.356-14.772 1.92-30.174 13.632-39.786l576-472.662c14.458-11.864 35.208-12.126 49.962-0.626 14.752 11.496 19.568 31.682 11.594 48.602l-171.202 363.256 208.648 51.756c14.29 3.544 25.476 14.652 29.124 28.914s-0.834 29.376-11.668 39.344l-512 471.112c-7.586 6.984-17.308 10.568-27.092 10.568zM279.236 493.49l178.314 43.69c10.74 2.632 19.912 9.59 25.336 19.226s6.62 21.086 3.298 31.636l-83.030 263.76 347.066-319.352-183.82-45.596c-11.63-2.884-21.356-10.832-26.498-21.656-5.144-10.822-5.164-23.382-0.054-34.22l116.31-246.788-376.922 309.3z',
  requestchange: 'M925.164 193.396c-1.696-0.214-3.41-0.368-5.164-0.368h-816c-1.754 0-3.468 0.152-5.16 0.368-19.648 2.54-34.84 19.292-34.84 39.632v560c0 22.094 17.91 40 40 40h111.886v86.004c0 22.090 17.91 40 40 40 0.292 0 0.582-0.040 0.876-0.046 10.536 0.238 21.144-3.624 29.18-11.67l114.292-114.286h519.766c13.808 0 25.98-6.996 33.168-17.636 0.102-0.144 0.184-0.304 0.282-0.458 0.614-0.922 1.2-1.86 1.722-2.836 0.046-0.082 0.082-0.172 0.124-0.254 2.988-5.618 4.704-12.008 4.704-18.812v0-560c-0-20.346-15.192-37.098-34.836-39.638zM880 753.028h-736v-480h736v480zM756.334 484.17l-125-125.436c-15.594-15.65-40.92-15.692-56.568-0.1-15.648 15.594-15.694 40.92-0.1 56.568l57.004 57.204h-335.67c-22.092 0-40 17.908-40 40s17.908 40 40 40h335.258l-56.508 56.368c-15.64 15.602-15.672 40.928-0.070 56.57 7.814 7.832 18.066 11.752 28.32 11.75 10.22 0 20.442-3.892 28.25-11.68l125-124.688c15.634-15.596 15.672-40.912 0.084-56.556z',
  transfer: 'M916.25 348.726l-125 124.688c-7.808 7.79-18.032 11.68-28.25 11.68-10.254 0.002-20.506-3.918-28.32-11.75-15.602-15.64-15.57-40.966 0.070-56.568l56.508-56.368h-655.258c-22.092 0-40-17.908-40-40s17.908-40 40-40h655.672l-57.006-57.206c-15.594-15.646-15.548-40.972 0.1-56.566s40.972-15.55 56.568 0.098l125 125.438c15.588 15.644 15.548 40.958-0.084 56.554zM107.666 731.892l125 125.438c15.596 15.648 40.92 15.692 56.568 0.098s15.694-40.92 0.1-56.566l-57.006-57.206h655.672c22.092 0 40-17.908 40-40s-17.908-40-40-40h-655.258l56.508-56.368c15.64-15.602 15.672-40.928 0.070-56.568-7.814-7.832-18.066-11.752-28.32-11.75-10.218 0-20.442 3.89-28.25 11.68l-125 124.688c-15.632 15.596-15.672 40.91-0.084 56.554z',
  calendar: 'M920.036 160.030h-112.004v-72c0-22.092-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v72.004h-432v-72c0-22.092-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v72.004h-112.004c-1.38 0-2.746 0.070-4.090 0.208-20.168 2.046-35.91 19.080-35.91 39.792v688c0 22.090 17.91 40 40 40h816.008c22.098 0 40-17.91 40-40v-688c0-22.094-17.908-40-40-40zM356.032 848.026h-212.004v-142.662h212.004v142.662zM356.032 665.364h-212.004v-162.664h212.004v162.664zM356.032 462.7h-212.004v-142.662h212.004v142.662zM628.032 848.026h-232v-142.662h232v142.662zM628.032 665.364h-232v-162.664h232v162.664zM628.032 462.7h-232v-142.662h232v142.662zM880.036 848.026h-212.004v-142.662h212.004v142.662zM880.036 665.364h-212.004v-162.664h212.004v162.664zM880.036 462.7h-212.004v-142.662h212.004v142.662z',
  sidebar: 'M920.032 127.858h-816c-22.092 0-40 17.908-40 40v688c0 22.092 17.908 40 40 40h316.578c1.13 0.096 2.266 0.172 3.422 0.172s2.292-0.078 3.424-0.172h492.576c22.092 0 40-17.908 40-40v-688c0-22.092-17.908-40-40-40zM144.032 207.858h240v608h-240v-608zM880.032 815.858h-416v-608h416v608zM198.734 288.030c0-17.674 14.328-32 32.002-32h66.396c17.672 0 32 14.326 32 32 0 17.676-14.324 32-32 32h-66.398c-17.674 0-32-14.326-32-32zM198.734 416.030c0-17.674 14.328-32 32.002-32h66.396c17.672 0 32 14.326 32 32 0 17.676-14.324 32-32 32h-66.398c-17.674 0-32-14.326-32-32zM198.734 544.030c0-17.674 14.328-32 32.002-32h66.396c17.672 0 32 14.326 32 32 0 17.676-14.324 32-32 32h-66.398c-17.674 0-32-14.326-32-32z',
  tablet: 'M200.022 927.988h624.018c1.38 0 2.746-0.072 4.090-0.208 20.168-2.050 35.91-19.080 35.91-39.792v-751.916c0-22.092-17.91-40-40-40h-624.018c-22.098 0-40 17.908-40 40v751.916c0 22.094 17.906 40 40 40zM512.002 878.206c-17.674 0-32.004-14.328-32.004-31.998 0-17.678 14.33-32.002 32.004-32.002 17.67 0 32 14.324 32 32.002 0 17.67-14.33 31.998-32 31.998zM240.022 176.078h544.018v591.902h-544.018v-591.902z',
  atmosphere: 'M968.156 633.83h-141.96c11.038-28.97 18.188-59.854 20.798-92.026h113.162c16.542 0 30-13.458 30-30 0-16.544-13.458-30.002-30-30.002h-712.3l1.932-11.636c9.074-54.688 34.76-104.484 74.28-144.004 50.24-50.242 117.038-77.91 188.090-77.91 63.596 0 125.064 22.728 173.082 64l20.458 17.584h-249.542c-16.542 0-30 13.46-30 30.002s13.458 30 30 30h448c25.366 0 46-20.636 46-46 0-25.366-20.634-46-46-46-17.664 0-33.98 10.32-41.568 26.29l-2.712 5.708h-66.844c-60.064-91.306-163.444-151.584-280.906-151.584-174.622 0-318.11 133.214-334.434 303.55h-77.254l-2.712-5.708c-7.588-15.972-23.904-26.292-41.568-26.292-25.366 0-46 20.636-46 46s20.634 46 46 46c0 0 121.102 0.016 121.102 0.024l599.742-0.024-1.672 11.446c-3.802 26.030-11.416 51.218-22.628 74.866l-2.708 5.716h-613.834c-16.542 0-30 13.458-30 30.002 0 16.542 13.458 30 30 30h91.96c59.558 94.004 164.486 156.416 284.008 156.416s224.452-62.414 284.014-156.416h127.736l2.712 5.708c7.588 15.97 23.904 26.29 41.568 26.29 25.366 0 46-20.636 46-46-0.002-25.364-20.636-46-46.002-46zM710.050 693.834l-19.128 17.398c-48.938 44.508-112.424 69.018-178.764 69.018s-129.826-24.51-178.764-69.018l-19.128-17.398h395.784z',
  browser: 'M920.004 128h-816.008c-1.38 0-2.746 0.070-4.090 0.208-20.168 2.048-35.91 19.080-35.91 39.792v688c0 22.090 17.91 40 40 40h816.008c22.098 0 40-17.91 40-40v-688c-0-22.094-17.906-40-40-40zM368 177.78c17.674 0 32.004 14.328 32.004 31.998 0 17.676-14.33 32.002-32.004 32.002-17.67 0-32-14.326-32-32.002 0-17.67 14.33-31.998 32-31.998zM272 177.78c17.674 0 32.004 14.328 32.004 31.998 0 17.676-14.33 32.002-32.004 32.002-17.67 0-32-14.326-32-32.002 0-17.67 14.33-31.998 32-31.998zM176 177.78c17.674 0 32.004 14.328 32.004 31.998 0 17.676-14.33 32.002-32.004 32.002-17.67 0-32-14.326-32-32.002 0-17.67 14.33-31.998 32-31.998zM880.004 815.996h-736.008v-527.988h736.008v527.988z',
  database: 'M895.95 221.364c-3.414-87.32-173.972-157.672-383.918-157.672s-380.504 70.352-383.918 157.672h-0.082v578.328c0 88.552 171.918 160.338 384 160.338s384-71.786 384-160.338v-578.328h-0.082zM798.412 430.578c-15.6 11.386-37.69 22.346-63.882 31.696-60.984 21.77-140.002 33.758-222.498 33.758s-161.514-11.988-222.498-33.758c-26.192-9.348-48.282-20.308-63.88-31.696-8.706-6.352-13.646-11.608-16.122-14.874v-92.9c70.29 37.478 179.654 61.566 302.5 61.566s232.21-24.088 302.5-61.566v92.9c-2.476 3.266-7.416 8.522-16.12 14.874zM814.532 514.464v93.24c-2.474 3.266-7.416 8.522-16.12 14.874-15.6 11.386-37.69 22.346-63.882 31.696-60.984 21.77-140.002 33.758-222.498 33.758s-161.514-11.988-222.498-33.758c-26.192-9.348-48.282-20.308-63.88-31.696-8.706-6.352-13.646-11.608-16.122-14.874v-93.24c70.29 37.48 179.654 61.566 302.5 61.566s232.21-24.086 302.5-61.566zM225.652 209.146c15.6-11.386 37.69-22.346 63.88-31.696 60.984-21.77 140.002-33.758 222.498-33.758s161.514 11.988 222.498 33.758c26.192 9.348 48.282 20.308 63.882 31.696 8.704 6.352 13.646 11.608 16.12 14.874v0.026c-2.474 3.266-7.416 8.522-16.12 14.874-15.6 11.386-37.69 22.346-63.882 31.696-60.984 21.77-140.002 33.758-222.498 33.758s-161.514-11.988-222.498-33.758c-26.192-9.348-48.282-20.308-63.88-31.696-8.706-6.352-13.646-11.608-16.122-14.874v-0.026c2.476-3.268 7.418-8.524 16.122-14.874zM798.412 814.578c-15.6 11.386-37.69 22.346-63.882 31.696-60.984 21.77-140.002 33.758-222.498 33.758s-161.514-11.988-222.498-33.758c-26.192-9.348-48.282-20.308-63.88-31.696-8.714-6.36-13.66-11.62-16.13-14.886h0.010v-93.228c70.29 37.48 179.654 61.566 302.5 61.566s232.21-24.086 302.5-61.566v93.228h0.010c-2.474 3.266-7.42 8.526-16.132 14.886z',
  expandalt: 'M512.008 959.964c-10.236 0-20.47-3.904-28.282-11.712l-239.898-239.838c-15.624-15.62-15.624-40.946-0.006-56.57 15.622-15.622 40.948-15.624 56.568-0.004l211.618 211.562 211.712-211.658c15.624-15.618 40.952-15.616 56.568 0.004 15.62 15.624 15.618 40.95-0.006 56.57l-239.994 239.934c-7.808 7.808-18.044 11.712-28.28 11.712zM483.824 75.744l-239.994 239.934c-15.624 15.62-15.624 40.948-0.006 56.57s40.944 15.622 56.568 0.004l211.712-211.658 211.618 211.562c15.622 15.62 40.948 15.616 56.568-0.006 15.62-15.624 15.618-40.95-0.006-56.57l-239.898-239.836c-7.81-7.81-18.044-11.714-28.282-11.714s-20.47 3.906-28.28 11.714z',
  mobile: 'M648 64h-272c-66.274 0-120 53.726-120 120v656c0 66.274 53.726 120 120 120h272c66.274 0 120-53.726 120-120v-656c0-66.274-53.726-120-120-120zM376 144h272c22.056 0 40 17.944 40 40v495.968h-352v-495.968c0-22.056 17.946-40 40-40zM648 880h-272c-22.054 0-40-17.944-40-40v-80.032h352v80.032c0 22.056-17.944 40-40 40zM544.034 819.962c0 17.676-14.33 32.002-32.004 32.002-17.67 0-32-14.326-32-32.002 0-17.672 14.33-31.998 32-31.998 17.674-0 32.004 14.326 32.004 31.998z',
  watch: 'M736.172 108.030c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20 0 11.046 8.956 20 20 20h408.282c11.044 0 20-8.954 20-20zM736.172 50.37c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20s8.956 20 20 20h408.282c11.044 0 20-8.956 20-20zM736.172 973.692c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20s8.956 20 20 20h408.282c11.044 0 20-8.956 20-20zM736.172 916.030c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20 0 11.046 8.956 20 20 20h408.282c11.044 0 20-8.954 20-20zM717.53 228c18.904 0 34.286 15.14 34.286 33.75v500.502c0 18.61-15.38 33.75-34.286 33.75h-411.43c-18.904 0-34.286-15.14-34.286-33.75v-500.502c0-18.61 15.38-33.75 34.286-33.75h411.43zM717.53 148h-411.43c-63.118 0-114.286 50.928-114.286 113.75v500.502c0 62.822 51.166 113.75 114.286 113.75h411.43c63.118 0 114.286-50.926 114.286-113.75v-500.502c-0.002-62.822-51.168-113.75-114.286-113.75v0zM680.036 511.53c0 22.090-17.91 40-40 40h-128.004c-5.384 0-10.508-1.078-15.196-3.006-0.124-0.048-0.254-0.086-0.376-0.132-0.61-0.262-1.188-0.57-1.782-0.86-0.572-0.276-1.16-0.528-1.718-0.828-0.204-0.112-0.39-0.246-0.594-0.364-0.918-0.514-1.832-1.050-2.704-1.64-0.086-0.058-0.164-0.128-0.254-0.188-10.492-7.21-17.382-19.284-17.382-32.98v-151.5c0-22.094 17.91-40 40.004-40 22.088 0 40 17.906 40 40v111.498h88c22.094-0.002 40.002 17.91 40.006 40z',
  home: 'M948.12 483.624l-407.814-407.754c-7.812-7.808-18.046-11.712-28.282-11.712-10.238 0-20.472 3.904-28.282 11.712l-407.92 407.86c-15.624 15.622-15.624 40.948-0.006 56.57s40.944 15.622 56.568 0.004l19.616-19.612v366.708c0 22.090 17.91 40 40 40h190.696c0.416 0.014 0.82 0.062 1.238 0.062 11.054 0 21.060-4.484 28.3-11.734 7.266-7.244 11.766-17.262 11.766-28.332 0-0.418-0.050-0.822-0.062-1.238v-263.204h176.060v263.934c0 22.090 17.91 40 40 40l191.876 0.124c2.292 0 4.524-0.236 6.708-0.608 0.45-0.074 0.91-0.116 1.356-0.206 0.21-0.044 0.414-0.116 0.628-0.162 17.906-3.972 31.308-19.924 31.308-39.026v-366.492l19.682 19.68c15.622 15.62 40.948 15.616 56.568-0.006s15.618-40.948-0.004-56.568zM791.876 448.272v398.71l-111.874-0.074v-263.876c0-0.020-0.002-0.042-0.002-0.062 0-0.006 0-0.014 0-0.022 0-22.090-17.91-40-40-40h-254.002c-0.556 0-1.1 0.060-1.65 0.084-0.14-0.002-0.274-0.022-0.414-0.022-22.090 0-40 17.91-40 40v264.382h-111.934v-399.392c0-2.286-0.234-4.512-0.604-6.694l280.626-280.584 280.514 280.472c-0.412 2.302-0.66 4.658-0.66 7.078z',
  useralt: 'M532.716 960c115.572 0 227.634-22.612 333.076-67.208 18.116-7.66 35.888-15.94 53.336-24.774v-18.726c0-116.912-241.728-223.528-306.458-233.828-20.1-3.198-20.556-58.458-20.556-58.458s59.050-58.452 71.922-137.062c34.618 0 56.004-83.57 21.378-112.972 1.448-30.95 44.5-242.972-173.474-242.972-217.976 0-174.916 212.022-173.476 242.972-34.622 29.402-13.244 112.972 21.38 112.972 12.864 78.61 71.916 137.062 71.916 137.062s-0.458 55.262-20.554 58.458c-64.042 10.19-301.326 114.674-306.334 230.124 30.474 17.61 62.084 33.376 94.776 47.204 105.436 44.596 217.498 67.208 333.068 67.208z',
  user: 'M512.062 65.062c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448zM776.324 769.132c-55.386-54.52-155.436-95.864-189.492-101.282-14.918-2.376-15.258-43.39-15.258-43.39s43.832-43.39 53.384-101.738c25.698 0 41.568-62.032 15.87-83.856 1.072-22.974 33.038-180.352-128.766-180.352s-129.836 157.376-128.768 180.352c-25.706 21.824-9.83 83.856 15.87 83.856 9.552 58.348 53.382 101.738 53.382 101.738s-0.34 41.020-15.256 43.39c-34.056 5.418-134.104 46.762-189.49 101.282-66.932-69.018-103.738-159.708-103.738-256.070 0-98.296 38.278-190.708 107.786-260.212 69.51-69.506 161.918-107.788 260.214-107.788s190.708 38.278 260.214 107.788c69.506 69.506 107.786 161.916 107.786 260.212-0 96.364-36.808 187.054-103.738 256.070z',
  useradd: 'M123.302 833.14c-26.284-11.118-51.696-23.792-76.196-37.95 4.028-92.818 194.792-176.82 246.28-185.012 16.158-2.57 16.526-46.994 16.526-46.994s-47.476-46.996-57.818-110.196c-27.836 0-45.024-67.186-17.19-90.824-1.158-24.882-35.776-195.34 139.468-195.34 175.242 0 140.628 170.458 139.464 195.34 27.838 23.638 10.644 90.824-17.188 90.824-10.346 63.2-57.822 110.196-57.822 110.196s0.37 44.424 16.528 46.994c52.042 8.282 246.38 93.996 246.38 187.988v15.054c-14.028 7.102-28.316 13.76-42.88 19.918-84.77 35.852-174.864 54.032-267.78 54.032-92.912 0.002-183.004-18.178-267.772-54.030zM910.064 335h-80.008v-80.010c0.002-22.088-17.906-39.992-39.996-39.992-22.088 0-39.998 17.906-39.998 39.996v80.006h-80.002c-22.094 0-40 17.908-39.998 40-0.002 22.090 17.904 39.996 39.996 39.996h80.004v80.002c0 22.094 17.908 40 40 40 22.090 0 39.996-17.906 39.996-39.996v-80.006l80.010-0.002c22.090 0.002 39.994-17.906 39.994-39.996 0-22.088-17.908-39.998-39.998-39.998z',
  users: 'M123.302 822.204c-26.284-11.118-51.696-23.792-76.196-37.95 4.028-92.818 194.792-176.82 246.28-185.012 16.158-2.57 16.526-46.998 16.526-46.998s-47.476-46.994-57.818-110.192c-27.836 0-45.024-67.186-17.19-90.822-1.158-24.884-35.776-195.342 139.468-195.342 175.242 0 140.628 170.458 139.464 195.342 27.838 23.636 10.644 90.822-17.188 90.822-10.346 63.2-57.822 110.192-57.822 110.192s0.37 44.426 16.528 46.998c52.042 8.282 246.38 93.996 246.38 187.988v15.054c-14.028 7.102-28.316 13.758-42.88 19.918-84.77 35.852-174.864 54.032-267.78 54.032-92.912 0-183.004-18.18-267.772-54.030zM977.018 652.224c0-64.612-133.592-123.532-169.364-129.222-11.106-1.768-11.36-32.306-11.36-32.306s32.634-32.304 39.744-75.746c19.132 0 30.954-46.188 11.818-62.436 0.798-17.106 24.592-134.276-95.874-134.276-120.462 0-96.666 117.17-95.87 134.276-19.134 16.248-7.32 62.436 11.816 62.436 7.11 43.442 39.742 75.746 39.742 75.746s-0.25 30.54-11.358 32.306c-23.154 3.684-87.282 29.672-129.644 65.068 21.022 10.038 42.072 21.39 61.066 33.186 14.278 8.866 27.392 17.866 39.338 26.986 35.696 27.262 60.956 55.638 75.646 84.934 2.784 0.032 5.562 0.102 8.352 0.102 77.788 0 153.58-12.792 225.944-37.976v-43.078z',
  profile: 'M396.984 530.228c-12.040-5.090-23.676-10.896-34.898-17.38 1.846-42.512 89.218-80.984 112.798-84.736 7.402-1.178 7.568-21.526 7.568-21.526s-21.742-21.524-26.48-50.47c-12.748 0-20.622-30.77-7.874-41.596-0.532-11.398-16.384-89.468 63.878-89.468s64.408 78.070 63.876 89.468c12.75 10.826 4.876 41.596-7.872 41.596-4.738 28.948-26.482 50.47-26.482 50.47s0.168 20.348 7.568 21.526c23.836 3.792 112.846 43.050 112.846 86.102v6.894c-6.426 3.252-12.968 6.3-19.64 9.122-38.826 16.422-80.090 24.746-122.646 24.746-42.552-0.002-83.816-8.326-122.642-24.748zM800 145h-592.004v736h592.004c8.708 0 15.876-7.086 15.972-15.796v-704.246c-0.018-8.8-7.176-15.958-15.972-15.958zM800 65c52.944 0 95.872 42.858 95.992 95.772l0.012 0.014v705.334h-0.036c-0.602 52.502-43.324 94.88-95.968 94.88h-632.004c-22.090 0-40-17.906-40-40v-816c0-20.338 15.192-37.090 34.836-39.628 1.696-0.218 3.41-0.372 5.164-0.372h632.004zM736.282 792.998c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20s8.956 20 20 20h408.282c11.044 0 20-8.956 20-20zM736.282 704.998c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20s8.956 20 20 20h408.282c11.044 0 20-8.956 20-20zM736.282 616.998c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20s8.956 20 20 20h408.282c11.044 0 20-8.956 20-20z',
  bookmark: 'M760.054 960.036c-10.38 0-20.586-4.044-28.234-11.662l-219.79-218.888-219.79 218.888c-11.454 11.408-28.648 14.796-43.572 8.598-14.926-6.202-24.654-20.776-24.654-36.94v-816.032c0-22.092 17.908-40 40-40h496.032c22.092 0 40 17.908 40 40v816.032c0 16.164-9.728 30.738-24.654 36.94-4.96 2.060-10.17 3.064-15.338 3.064z',
  bookmarkhollow: 'M760.054 960.036c-10.38 0-20.586-4.044-28.234-11.662l-219.79-218.888-219.79 218.888c-11.454 11.406-28.648 14.796-43.572 8.598-14.926-6.202-24.654-20.776-24.654-36.94v-816.032c0-22.092 17.908-40 40-40h496.032c22.092 0 40 17.908 40 40v816.032c0 16.164-9.728 30.738-24.654 36.94-4.96 2.060-10.17 3.064-15.338 3.064zM512.032 633.032c10.21 0 20.422 3.886 28.226 11.658l179.79 179.052v-679.742h-416.032v679.742l179.79-179.052c7.804-7.772 18.014-11.658 28.226-11.658z',
  star: 'M763.972 919.5c-6.368 0-12.758-1.518-18.61-4.596l-233.358-122.688-233.37 122.688c-13.476 7.090-29.808 5.904-42.124-3.042-12.318-8.95-18.486-24.118-15.912-39.124l44.57-259.856-188.792-184.028c-10.904-10.626-14.828-26.524-10.124-41.004s17.222-25.034 32.292-27.222l260.906-37.912 116.686-236.42c6.738-13.652 20.644-22.296 35.87-22.296v0c15.226 0 29.13 8.644 35.87 22.298l116.674 236.418 260.906 37.912c15.068 2.19 27.586 12.742 32.292 27.222s0.782 30.376-10.124 41.004l-188.792 184.028 44.24 257.93c0.62 2.796 0.946 5.704 0.946 8.688 0 22.054-17.848 39.942-39.888 40-0.054 0-0.106 0-0.158 0z',
  starhollow: 'M763.972 919.5c-6.368 0-12.758-1.518-18.61-4.596l-233.358-122.688-233.37 122.688c-13.476 7.090-29.808 5.904-42.124-3.042-12.318-8.95-18.486-24.118-15.912-39.124l44.57-259.856-188.792-184.028c-10.904-10.626-14.828-26.524-10.124-41.004s17.222-25.034 32.292-27.222l260.906-37.912 116.686-236.42c6.738-13.652 20.644-22.296 35.87-22.296v0c15.226 0 29.13 8.644 35.87 22.298l116.674 236.418 260.906 37.912c15.068 2.19 27.586 12.742 32.292 27.222s0.782 30.376-10.124 41.004l-188.792 184.028 44.24 257.93c0.62 2.796 0.946 5.704 0.946 8.688 0 22.054-17.848 39.942-39.888 40-0.054 0-0.106 0-0.158 0zM190.256 428.144l145.812 142.13c9.428 9.192 13.73 22.432 11.504 35.406l-34.424 200.7 180.244-94.758c11.654-6.13 25.576-6.126 37.226 0l180.232 94.756-34.422-200.698c-2.226-12.974 2.076-26.214 11.504-35.406l145.812-142.13-201.51-29.282c-13.030-1.892-24.292-10.076-30.118-21.882l-90.114-182.596-90.122 182.598c-5.826 11.804-17.090 19.988-30.118 21.88l-201.506 29.282z',
  circle: 'M960 512c0 247.424-200.576 448-448 448s-448-200.576-448-448c0-247.424 200.576-448 448-448s448 200.576 448 448z',
  circlehollow: 'M960 513c0-247.424-200.574-448-448-448-247.422 0-448 200.576-448 448s200.578 448 448 448c247.426 0 448-200.576 448-448zM251.786 773.216c-69.504-69.508-107.786-161.918-107.786-260.216 0-98.294 38.282-190.708 107.786-260.216 69.506-69.504 161.918-107.784 260.214-107.784s190.708 38.28 260.214 107.784c69.508 69.508 107.786 161.922 107.786 260.216 0 98.296-38.278 190.708-107.786 260.214-69.506 69.508-161.922 107.786-260.214 107.786-98.296 0-190.708-38.278-260.214-107.784z',
  heart: 'M895.032 194.328c-20.906-21.070-46.492-37.316-76.682-48.938-30.104-11.71-63.986-17.39-101.474-17.39-19.55 0-38.744 2.882-57.584 9.094-18.472 6.062-36.584 14.242-54.072 24.246-17.476 9.828-34.056 21.276-49.916 33.898-16.038 12.8-30.456 25.572-43.346 38.664-13.52-13.092-28.026-25.864-43.616-38.664-15.684-12.624-32.080-24.070-49.382-33.898-17.214-10.004-35.414-18.184-54.704-24.246-19.104-6.21-38.568-9.094-58.034-9.094-37.126 0-70.56 5.68-100.48 17.39-29.732 11.622-55.328 27.868-76.328 48.938-20.994 21.094-37.214 46.962-48.478 77.328-11.174 30.544-16.942 64.5-16.942 101.812 0 21.628 3.068 43.078 9.19 64.53 6.308 21.096 14.416 41.986 24.876 61.642 10.446 19.656 22.702 38.488 36.584 56.59 13.88 18.124 28.388 34.516 43.344 49.58l305.766 305.112c8.466 7.558 18.11 11.444 28.204 11.444 10.726 0 19.914-3.884 27.308-11.444l305.934-304.226c14.78-14.772 29.382-31.368 43.166-49.378 14.058-18.212 26.314-37.222 37.042-57.23 10.9-19.924 19.192-40.638 25.406-62 6.218-21.188 9.198-42.61 9.198-64.618 0-37.312-5.592-71.268-16.582-101.812-11.264-30.366-27.22-56.236-48.398-77.33z',
  hearthollow: 'M716.876 208c27.708 0 52.092 4.020 72.47 11.948l0.132 0.052 0.13 0.050c19.866 7.644 35.774 17.664 48.632 30.624l0.166 0.168 0.17 0.168c12.586 12.536 22.304 28.27 29.706 48.094 7.782 21.786 11.726 46.798 11.726 74.364 0 14.658-1.95 28.426-5.958 42.086l-0.028 0.092-0.026 0.092c-4.866 16.72-11.006 31.752-18.776 45.952l-0.162 0.298-0.16 0.296c-8.81 16.434-18.58 31.532-29.864 46.148l-0.204 0.264c-11.316 14.786-23.48 28.708-36.154 41.378l-277.122 275.574-276.94-276.35c-13.32-13.43-25.248-27.074-36.488-41.75-11.386-14.848-21.284-30.136-29.444-45.49-7.206-13.54-13.494-29.17-18.7-46.472-4.030-14.264-5.988-28.044-5.988-42.116 0-27.36 4.042-52.314 12.016-74.176 7.214-19.378 17.344-35.708 30.066-48.492 12.998-13.042 28.958-23.148 48.826-30.914 20.436-8 43.764-11.886 71.32-11.886 11.536 0 22.738 1.742 33.298 5.174l0.374 0.122 0.376 0.12c13.116 4.122 26.066 9.874 38.494 17.094l0.34 0.2 0.344 0.196c12.736 7.234 25.308 15.876 38.43 26.412 14.486 11.906 27.060 23.048 38.428 34.056l56.994 55.192 55.662-56.532c10.324-10.484 22.18-21.040 36.242-32.264 13.382-10.646 26.216-19.38 39.228-26.698l0.256-0.144 0.254-0.144c13.008-7.442 26.228-13.386 39.294-17.676l0.050-0.016 0.050-0.018c10.354-3.414 20.998-5.076 32.54-5.076zM716.876 128c-19.55 0-38.744 2.882-57.584 9.094-18.472 6.062-36.584 14.242-54.072 24.246-17.476 9.828-34.056 21.276-49.916 33.898-16.038 12.8-30.456 25.572-43.346 38.664-13.52-13.092-28.026-25.864-43.616-38.664-15.684-12.624-32.080-24.070-49.382-33.898-17.214-10.004-35.414-18.184-54.704-24.246-19.104-6.21-38.568-9.094-58.034-9.094-37.126 0-70.56 5.68-100.48 17.39-29.732 11.622-55.328 27.868-76.328 48.938-20.994 21.094-37.214 46.962-48.478 77.328-11.174 30.544-16.942 64.5-16.942 101.812 0 21.628 3.068 43.078 9.19 64.53 6.308 21.096 14.416 41.986 24.876 61.642 10.446 19.656 22.702 38.488 36.584 56.59 13.88 18.124 28.388 34.516 43.344 49.58l305.766 305.112c8.466 7.558 18.11 11.444 28.204 11.444 10.726 0 19.914-3.884 27.308-11.444l305.934-304.226c14.78-14.772 29.382-31.368 43.166-49.378 14.058-18.212 26.314-37.222 37.042-57.23 10.9-19.924 19.192-40.638 25.406-62 6.218-21.188 9.198-42.61 9.198-64.618 0-37.312-5.592-71.268-16.582-101.812-11.262-30.366-27.216-56.234-48.396-77.328-20.906-21.070-46.492-37.316-76.682-48.938-30.106-11.712-63.988-17.392-101.476-17.392v0z',
  facehappy: 'M960 513c0-247.424-200.574-448-448-448-247.422 0-448 200.576-448 448s200.578 448 448 448c247.426 0 448-200.576 448-448zM251.786 773.214c-69.504-69.508-107.786-161.918-107.786-260.214 0-98.294 38.282-190.708 107.786-260.216 69.506-69.504 161.918-107.784 260.214-107.784s190.708 38.28 260.214 107.784c69.508 69.508 107.786 161.922 107.786 260.216 0 98.296-38.278 190.708-107.786 260.214-69.506 69.506-161.922 107.786-260.214 107.786-98.296 0-190.708-38.28-260.214-107.786zM416.5 384.998c0 35.346-28.654 64-64 64s-64-28.654-64-64 28.654-64 64-64 64 28.654 64 64zM736 384.998c0 35.346-28.654 64-64 64s-64-28.654-64-64 28.654-64 64-64 64 28.654 64 64zM763.62 636.976v0.094c-49.554 87.14-143.21 145.93-250.62 145.93-107.486 0-201.2-58.868-250.726-146.108v-0.092c-3.34-5.842-5.274-12.59-5.274-19.8s1.934-13.958 5.274-19.798v-0.198h0.122c6.918-11.946 19.808-20.004 34.606-20.004s27.69 8.058 34.61 20.004h0.098c35.756 63.222 103.614 105.996 181.29 105.996s145.54-42.774 181.3-105.996h0.090c6.918-11.946 19.81-20.004 34.606-20.004s27.69 8.058 34.61 20.004h0.014v0.024c3.402 5.88 5.38 12.69 5.38 19.972 0 7.286-1.978 14.094-5.38 19.976z',
  facesad: 'M960 513c0-247.424-200.574-448-448-448-247.422 0-448 200.576-448 448s200.578 448 448 448c247.426 0 448-200.576 448-448zM251.786 773.214c-69.504-69.506-107.786-161.918-107.786-260.214 0-98.294 38.282-190.708 107.786-260.216 69.506-69.504 161.918-107.784 260.214-107.784s190.708 38.28 260.214 107.784c69.508 69.508 107.786 161.922 107.786 260.216 0 98.296-38.278 190.708-107.786 260.214-69.506 69.506-161.922 107.786-260.214 107.786-98.296 0-190.708-38.28-260.214-107.786zM416.5 384.998c0 35.346-28.654 64-64 64s-64-28.654-64-64 28.654-64 64-64 64 28.654 64 64zM736 384.998c0 35.346-28.654 64-64 64s-64-28.654-64-64 28.654-64 64-64 64 28.654 64 64zM262.38 684.024v-0.094c49.552-87.14 143.208-145.93 250.62-145.93 107.486 0 201.2 58.868 250.726 146.108v0.092c3.34 5.842 5.274 12.59 5.274 19.8s-1.934 13.958-5.274 19.798v0.198h-0.122c-6.918 11.946-19.808 20.004-34.606 20.004s-27.69-8.058-34.61-20.004h-0.098c-35.76-63.222-103.618-105.996-181.292-105.996s-145.54 42.774-181.3 105.996h-0.090c-6.918 11.946-19.808 20.004-34.606 20.004s-27.69-8.058-34.61-20.004h-0.014v-0.024c-3.402-5.88-5.38-12.69-5.38-19.972 0.002-7.286 1.98-14.094 5.382-19.976z',
  faceneutral: 'M968 513c0-247.424-200.574-448-448-448-247.422 0-448 200.576-448 448s200.578 448 448 448c247.426 0 448-200.576 448-448zM259.786 773.214c-69.504-69.506-107.786-161.918-107.786-260.214 0-98.294 38.282-190.708 107.786-260.216 69.506-69.504 161.918-107.784 260.214-107.784s190.708 38.28 260.214 107.784c69.508 69.508 107.786 161.922 107.786 260.216 0 98.296-38.278 190.708-107.786 260.214-69.506 69.506-161.922 107.786-260.214 107.786-98.296 0-190.708-38.28-260.214-107.786zM424.5 384.998c0 35.346-28.654 64-64 64s-64-28.654-64-64 28.654-64 64-64 64 28.654 64 64zM744 384.998c0 35.346-28.654 64-64 64s-64-28.654-64-64 28.654-64 64-64 64 28.654 64 64zM777 641c0 22.094-17.906 40-40 40h-432c-22.090 0-40-17.906-40-40 0-22.090 17.91-40 40-40h432c22.094 0 40 17.91 40 40z',
  lock: 'M896.032 915.53v-467.498c0-19.102-13.402-35.052-31.31-39.026-0.21-0.046-0.414-0.12-0.628-0.162-0.444-0.090-0.904-0.13-1.354-0.208-2.186-0.37-4.416-0.606-6.708-0.606h-55.902l0.002-55.85h0.020c0-159.14-129.010-288.15-288.15-288.15-159.128 0-288.13 128.992-288.15 288.118v55.884h-54.852c-20.71 0-37.746 15.742-39.792 35.91-0.136 1.344-0.208 2.708-0.208 4.090v463.332c-0.618 2.792-0.968 5.688-0.968 8.668 0 22.094 17.91 40 40 40h688.27c22.092 0 40-17.91 40-40-0.002-1.524-0.104-3.024-0.27-4.502zM209 488.032h607.032v392h-607.032v-392zM303.85 352.182c0-114.776 93.376-208.15 208.15-208.15 114.59 0 207.842 93.074 208.142 207.596 0 0.084-0.012 0.164-0.012 0.248v56.156h-416.284l0.004-55.85zM552.164 691.858l-0.002 58.188c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.906-40-40v-57.974c-14.704-11.726-24.134-29.782-24.134-50.048 0-35.346 28.654-64 64-64s64 28.654 64 64c0 20.142-9.318 38.104-23.868 49.836z',
  unlock: 'M896.032 915.53v-467.498c0-1.988-0.194-3.926-0.472-5.834-0.11-0.744-0.192-1.498-0.34-2.226-1.524-7.44-5.136-14.1-10.164-19.408-0.252-0.266-0.48-0.554-0.738-0.814-0.496-0.494-1.036-0.944-1.554-1.412-0.43-0.386-0.84-0.8-1.288-1.17-0.292-0.24-0.608-0.446-0.904-0.676-2.506-1.954-5.244-3.616-8.176-4.934-0.744-0.334-1.504-0.632-2.27-0.922-4.39-1.656-9.124-2.604-14.094-2.604h-552.184l0.002-55.85c0-114.776 93.376-208.15 208.15-208.15 86.038 0 160.034 52.474 191.7 127.096 0.012 0.028 0.030 0.044 0.042 0.072 5.978 14.566 20.284 24.832 37.006 24.832 22.090 0 40-17.906 40-40 0-4.71-0.86-9.21-2.354-13.41-0.182-0.694-0.42-1.438-0.782-2.292-43.666-103.582-146.14-176.296-265.612-176.296-159.128 0-288.13 128.994-288.15 288.12v55.882h-54.85c-20.71 0-37.746 15.742-39.792 35.91-0.136 1.344-0.208 2.708-0.208 4.090v463.332c-0.618 2.794-0.968 5.688-0.968 8.668 0 22.094 17.91 40 40 40h688.27c22.092 0 40-17.91 40-40-0.002-1.528-0.104-3.028-0.27-4.506zM209 488.032h607.032v392h-607.032v-392zM552.164 691.86l-0.002 58.186c0.004 22.088-17.906 39.996-39.996 40-22.094 0-40.004-17.908-40-40v-57.976c-14.702-11.726-24.134-29.782-24.134-50.048 0-35.346 28.654-64 64-64s64 28.654 64 64c0 20.142-9.318 38.102-23.868 49.838z',
  key: 'M768.032 320.032c0 35.346-28.654 64-64 64s-64-28.654-64-64 28.654-64 64-64 64 28.654 64 64zM960.032 353.092c0 159.062-128.946 288.010-288.008 288.010-35.306 0-69.124-6.368-100.38-17.996l-27.736 27.738-0.002 54.464c0 0.016 0.002 0.028 0.002 0.040 0 11.046-4.478 21.046-11.716 28.29-6.334 6.332-14.784 10.55-24.196 11.508-1.346 0.136-2.708 0.208-4.090 0.208h-71.748l-0.002 71.96c0 0.012 0.002 0.040 0.002 0.040 0 11.046-4.478 21.046-11.716 28.286-6.334 6.336-14.784 10.554-24.196 11.508-1.346 0.136-2.708 0.208-4.090 0.208h-71.996l-0.002 62.684c0 22.094-17.908 40-40 40-0.022 0-0.042 0-0.062 0-0.022 0-0.042 0-0.064 0h-175.996c-13.76 0-25.888-6.95-33.086-17.524-4.362-6.406-6.916-14.14-6.916-22.476v-112c0-0.664 0.066-1.308 0.1-1.964 0.032-0.618 0.034-1.234 0.092-1.852 0.11-1.148 0.288-2.278 0.492-3.398 0.024-0.128 0.034-0.258 0.058-0.386 1.614-8.378 5.848-15.808 11.808-21.446l325.456-325.458c-11.642-31.274-18.020-65.11-18.020-100.44 0-159.060 128.946-288.006 288.006-288.006 159.060-0.004 288.006 128.942 288.006 288.002zM880.032 353.092c0-114.696-93.312-208.006-208.008-208.006s-208.006 93.31-208.006 208.006c0 43.208 13.246 83.376 35.884 116.668l-57.36 57.362c-0.136-0.184-0.27-0.368-0.408-0.546l-298.102 298.106-0.002 55.356h96.124v-62.684c0-0.708 0.070-1.394 0.106-2.094 0.036-0.664 0.036-1.336 0.102-1.992 0.132-1.316 0.334-2.61 0.592-3.882 0.006-0.028 0.008-0.058 0.014-0.090 0.258-1.262 0.58-2.5 0.956-3.714 0.012-0.040 0.018-0.078 0.030-0.118 4.676-15.032 17.976-26.262 34.114-27.902 1.344-0.136 2.708-0.208 4.090-0.208h71.998v-67.64c-0.156-1.434-0.248-2.882-0.248-4.36 0-22.094 17.908-40 40-40h71.998v-30.692c0-0.148 0.020-0.29 0.022-0.438 0.008-10.226 3.912-20.45 11.714-28.254l55.99-55.988c1.982-1.984 4.124-3.71 6.38-5.188l18.68-18.684c33.030 22.090 72.702 34.992 115.332 34.992 114.694-0 208.008-93.314 208.008-208.010z',
  arrowleftalt: 'M107.854 539.924l282.834 283.272c15.594 15.65 40.92 15.692 56.568 0.1 15.648-15.594 15.694-40.92 0.1-56.568l-214.838-215.040h655.412c22.092 0 40-17.908 40-40s-17.908-40-40-40h-655l214.75-214.61c15.64-15.602 15.672-40.928 0.070-56.568-7.814-7.834-18.066-11.752-28.32-11.75-10.22 0-20.442 3.892-28.25 11.68l-283.242 282.93c-15.634 15.594-15.672 40.91-0.084 56.554z',
  arrowrightalt: 'M916.266 483.792l-282.834-283.272c-15.594-15.65-40.92-15.692-56.568-0.1-15.648 15.594-15.694 40.92-0.1 56.568l214.838 215.040h-655.412c-22.092 0-40 17.908-40 40s17.908 40 40 40h655l-214.748 214.61c-15.64 15.602-15.672 40.928-0.070 56.568 7.814 7.834 18.066 11.752 28.32 11.75 10.22 0 20.442-3.892 28.25-11.68l283.242-282.93c15.632-15.596 15.67-40.91 0.082-56.554z',
  sync: 'M998.786 474.516l-91 90.988c-8.028 8.036-18.624 11.902-29.152 11.676-10.536 0.234-21.144-3.632-29.184-11.676l-92.3-92.296c-15.624-15.622-15.624-40.95 0-56.57 15.622-15.622 40.95-15.624 56.57 0l26.146 26.148c-13.774-61.416-44.624-117.806-90.216-163.394-63.46-63.464-147.84-98.414-237.586-98.414-89.75 0-174.128 34.95-237.59 98.414-27.012 27.012-48.836 57.824-65.024 91.214l-0.008-0.004c-6.722 12.632-20.008 21.242-35.32 21.242-22.090 0-40-17.906-40-40 0-5.464 1.102-10.668 3.086-15.414l-0.004-0.004c0.016-0.032 0.024-0.058 0.040-0.090 0.036-0.078 0.070-0.156 0.106-0.234 0.73-1.632 0.208-0.718 5.004-9.996 69.18-133.726 208.766-225.128 369.71-225.128 203.224 0 372.374 145.734 408.728 338.392l21.424-21.424c15.618-15.622 40.946-15.622 56.566 0s15.624 40.948 0.004 56.57zM889.992 682.11c0 5.464-1.106 10.672-3.090 15.414l0.008 0.004c-0.016 0.036-0.028 0.058-0.040 0.090-0.036 0.078-0.074 0.156-0.106 0.234-0.73 1.636-0.208 0.718-5.008 10-69.176 133.722-208.762 225.124-369.708 225.124-205.2 0-375.668-148.578-409.76-344.022l-19.478 19.478c-15.622 15.622-40.95 15.622-56.57 0-15.618-15.622-15.622-40.95 0-56.57l90.996-90.992c8.032-8.032 18.628-11.902 29.152-11.672 10.536-0.238 21.144 3.632 29.188 11.672l92.296 92.3c15.624 15.618 15.624 40.946 0 56.566-15.618 15.622-40.946 15.624-56.566 0.004l-29.292-29.292c12.466 65.568 44.214 125.882 92.448 174.116 63.46 63.46 147.84 98.41 237.586 98.41 89.75 0 174.124-34.95 237.59-98.41 27.012-27.012 48.836-57.824 65.020-91.218l0.008 0.004c6.726-12.632 20.012-21.242 35.324-21.242 22.092 0.002 40.002 17.912 40.002 40.002zM145.83 545.416l1.4 0.248-0.824-0.824-0.576 0.576z',
  reply: 'M679.496 431.738c-0.414-0.062-0.834-0.102-1.266-0.102h-477.482l171.506-171.504c15.622-15.622 15.622-40.95-0.002-56.57-15.62-15.624-40.948-15.624-56.568 0l-239.734 239.732c-0.958 0.956-1.868 1.958-2.724 3.006-0.328 0.402-1.884 2.482-2.324 3.138-0.36 0.54-1.696 2.77-2.008 3.352-0.308 0.58-1.424 2.936-1.676 3.544-0.036 0.086-0.468 1.268-0.648 1.774-0.23 0.636-0.474 1.266-0.672 1.918-0.186 0.612-0.818 3.13-0.95 3.788-0.148 0.748-0.522 3.318-0.574 3.862-0.262 2.642-0.262 5.3 0 7.942 0.044 0.448 0.412 3.032 0.58 3.874 0.112 0.556 0.74 3.088 0.958 3.808 0.158 0.524 1.036 2.992 1.328 3.7 0.192 0.458 1.298 2.828 1.688 3.552 0.208 0.386 0.446 0.75 0.666 1.126 0.436 0.752 1.844 2.888 2.084 3.224 0.52 0.724 4.262 5.074 4.29 5.098l239.718 239.72c15.62 15.618 40.948 15.618 56.57 0 15.62-15.624 15.622-40.948 0-56.57l-171.516-171.514h471.296c114.52 0.084 207.688 93.124 207.988 207.594 0 0.084-0.012 0.164-0.012 0.248v95.876c-0.004 22.094 17.906 40.002 40 40 22.090-0.002 40-17.91 39.996-39.998l0.004-95.57h0.020c0-156.594-124.914-284.012-280.536-288.048z',
  expand: 'M959.688 920.068l0.31-176c0.040-22.094-17.84-40.032-39.93-40.070-22.092-0.040-40.032 17.838-40.070 39.93l-0.142 79.672-235.734-235.732c-15.622-15.622-40.948-15.622-56.57 0s-15.622 40.948 0 56.568l235.442 235.442-78.946-0.1c-22.092-0.028-40.022 17.86-40.050 39.952-0.014 11.064 4.464 21.084 11.714 28.334 7.228 7.224 17.208 11.702 28.236 11.714l175.688 0.22c22.086 0.028 40.014-17.846 40.052-39.93zM920.178 64.228l-176-0.308c-22.094-0.040-40.032 17.84-40.070 39.93-0.040 22.092 17.838 40.032 39.93 40.070l79.672 0.14-235.732 235.734c-15.622 15.622-15.622 40.948 0 56.568s40.948 15.622 56.568 0l235.442-235.442-0.1 78.946c-0.028 22.092 17.86 40.022 39.952 40.050 11.064 0.014 21.084-4.464 28.334-11.714 7.224-7.228 11.702-17.208 11.714-28.236l0.22-175.688c0.026-22.082-17.846-40.010-39.93-40.050zM64.236 103.742l-0.308 176c-0.040 22.094 17.84 40.032 39.93 40.070 22.092 0.040 40.032-17.84 40.070-39.93l0.14-79.672 235.734 235.73c15.622 15.622 40.948 15.622 56.568 0s15.622-40.946 0-56.566l-235.442-235.442 78.946 0.098c22.092 0.028 40.022-17.86 40.050-39.95 0.014-11.066-4.464-21.086-11.714-28.336-7.228-7.222-17.208-11.7-28.236-11.714l-175.688-0.218c-22.084-0.026-40.012 17.844-40.050 39.93zM103.748 959.766l176 0.308c22.094 0.040 40.032-17.84 40.070-39.93 0.040-22.092-17.84-40.032-39.93-40.070l-79.672-0.14 235.73-235.734c15.622-15.622 15.622-40.948 0-56.568s-40.946-15.622-56.566 0l-235.442 235.442 0.098-78.946c0.028-22.092-17.86-40.022-39.95-40.050-11.066-0.014-21.086 4.464-28.336 11.714-7.222 7.228-11.7 17.208-11.714 28.236l-0.218 175.688c-0.026 22.082 17.844 40.010 39.93 40.050z',
  arrowleft: 'M257.93 511.976c0-10.236 3.902-20.47 11.71-28.282l344.098-344.158c15.622-15.624 40.946-15.624 56.57-0.006 15.622 15.622 15.624 40.948 0.004 56.568l-315.82 315.876 315.868 315.922c15.618 15.624 15.618 40.952-0.004 56.568-15.622 15.62-40.95 15.618-56.57-0.006l-344.146-344.202c-7.808-7.81-11.71-18.044-11.71-28.28z',
  arrowup: 'M512.024 256c10.236 0 20.47 3.904 28.282 11.712l344.154 344.098c15.624 15.62 15.624 40.946 0.006 56.57-15.622 15.622-40.948 15.624-56.568 0.004l-315.876-315.82-315.922 315.868c-15.624 15.618-40.952 15.618-56.568-0.004-15.62-15.624-15.618-40.95 0.006-56.57l344.204-344.144c7.81-7.81 18.046-11.714 28.282-11.714z',
  arrowdown: 'M511.976 768.002c-10.236 0-20.47-3.904-28.282-11.712l-344.154-344.098c-15.624-15.62-15.624-40.946-0.006-56.57 15.622-15.622 40.948-15.624 56.568-0.004l315.876 315.82 315.922-315.868c15.624-15.618 40.952-15.616 56.568 0.004 15.62 15.624 15.618 40.95-0.006 56.57l-344.204 344.144c-7.81 7.81-18.046 11.714-28.282 11.714z',
  arrowright: 'M768.072 514.022c0 10.236-3.904 20.47-11.712 28.282l-344.098 344.156c-15.62 15.624-40.946 15.624-56.568 0.006-15.622-15.622-15.624-40.948-0.006-56.568l315.82-315.876-315.868-315.922c-15.618-15.624-15.618-40.952 0.004-56.568 15.624-15.62 40.95-15.618 56.57 0.006l344.144 344.204c7.81 7.81 11.714 18.044 11.714 28.28z',
  chevrondown: 'M511.976 833c-10.236 0-20.47-3.904-28.282-11.712l-471.934-471.874c-15.624-15.62-15.624-40.946-0.006-56.57 15.622-15.622 40.948-15.624 56.568-0.004l443.652 443.598 443.61-443.556c15.624-15.618 40.952-15.616 56.568 0.004 15.62 15.624 15.618 40.95-0.006 56.57l-471.89 471.832c-7.808 7.808-18.044 11.712-28.28 11.712z',
  back: 'M512.030 880c-98.296 0-190.708-38.28-260.214-107.784-69.508-69.508-107.786-161.922-107.786-260.216 0-98.296 38.278-190.708 107.786-260.214s161.918-107.786 260.214-107.786c98.292 0 190.708 38.28 260.214 107.786 69.504 69.508 107.786 161.918 107.786 260.214 0 98.294-38.282 190.708-107.786 260.216-69.508 69.504-161.922 107.784-260.214 107.784zM512.030 960c247.422 0 448-200.576 448-448s-200.578-448-448-448c-247.426 0-448 200.576-448 448s200.574 448 448 448v0zM267.63 538.67l125 125.438c15.596 15.648 40.922 15.692 56.57 0.098s15.692-40.92 0.098-56.566l-57.004-57.206h335.672c22.090 0 40-17.908 40-40s-17.91-40-40-40h-335.26l56.508-56.368c15.64-15.602 15.672-40.928 0.070-56.568-7.814-7.832-18.064-11.752-28.318-11.75-10.22 0-20.444 3.89-28.25 11.68l-125 124.688c-15.634 15.596-15.672 40.91-0.086 56.554z',
  download: 'M881 513.188c0 98.296-38.28 190.708-107.784 260.214-69.508 69.508-161.922 107.786-260.216 107.786-98.296 0-190.708-38.28-260.214-107.786s-107.786-161.916-107.786-260.214c0-98.294 38.28-190.708 107.786-260.216 69.508-69.504 161.918-107.784 260.214-107.784 98.294 0 190.708 38.28 260.216 107.784 69.504 69.508 107.784 161.922 107.784 260.216zM961 513.188c0-247.424-200.576-448-448-448s-448 200.576-448 448 200.576 448 448 448 448-200.576 448-448v0zM539.672 757.584l125.436-125c15.65-15.594 15.692-40.92 0.1-56.568-15.594-15.648-40.92-15.694-56.568-0.1l-57.204 57.004v-335.67c0-22.092-17.908-40-40-40s-40 17.908-40 40v335.258l-56.368-56.508c-15.602-15.64-40.928-15.672-56.568-0.070-7.834 7.814-11.752 18.066-11.75 28.32 0 10.22 3.892 20.442 11.68 28.25l124.688 125c15.594 15.634 40.91 15.672 56.554 0.084z',
  upload: 'M143.996 511.998c0-98.296 38.28-190.708 107.784-260.214 69.508-69.508 161.922-107.786 260.216-107.786 98.296 0 190.708 38.278 260.214 107.786s107.786 161.918 107.786 260.214c0 98.292-38.28 190.708-107.786 260.214-69.508 69.504-161.918 107.786-260.214 107.786-98.294 0-190.708-38.282-260.216-107.786-69.504-69.508-107.784-161.922-107.784-260.214zM63.996 511.998c0 247.422 200.576 448 448 448s448-200.578 448-448c0-247.426-200.576-448-448-448s-448 200.574-448 448v0zM485.324 267.598l-125.438 125c-15.648 15.596-15.692 40.922-0.098 56.57s40.92 15.692 56.566 0.098l57.206-57.004v335.672c0 22.090 17.908 40 40 40s40-17.91 40-40v-335.26l56.368 56.508c15.602 15.64 40.928 15.672 56.568 0.070 7.832-7.814 11.752-18.064 11.75-28.318 0-10.22-3.89-20.444-11.68-28.25l-124.688-125c-15.594-15.634-40.91-15.672-56.554-0.086z',
  proceed: 'M512 144c98.296 0 190.708 38.28 260.214 107.784 69.506 69.508 107.786 161.922 107.786 260.216 0 98.296-38.28 190.708-107.786 260.214-69.506 69.508-161.918 107.786-260.214 107.786-98.294 0-190.708-38.28-260.216-107.786-69.504-69.506-107.784-161.916-107.784-260.214 0-98.294 38.28-190.708 107.784-260.216 69.508-69.504 161.922-107.784 260.216-107.784zM512 64c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448v0zM756.396 484.14l-125-125.436c-15.594-15.65-40.92-15.692-56.568-0.1-15.648 15.594-15.694 40.92-0.1 56.568l57.004 57.204h-335.67c-22.092 0-40 17.908-40 40s17.908 40 40 40h335.258l-56.508 56.368c-15.64 15.602-15.672 40.928-0.070 56.568 7.814 7.834 18.066 11.752 28.32 11.75 10.22 0 20.442-3.892 28.25-11.68l125-124.688c15.634-15.594 15.672-40.91 0.084-56.554z',
  info: 'M828.782 195.216c-174.954-174.958-458.614-174.958-633.566 0-174.958 174.954-174.958 458.612 0 633.568 174.954 174.954 458.614 174.954 633.566 0 174.956-174.952 174.956-458.614 0-633.568zM772.214 772.214c-69.508 69.506-161.918 107.784-260.214 107.784-98.3 0-190.71-38.278-260.218-107.784-69.504-69.506-107.782-161.92-107.786-260.214 0.004-98.296 38.282-190.708 107.786-260.214 69.508-69.506 161.922-107.786 260.218-107.788 98.292 0.002 190.708 38.282 260.214 107.79 69.504 69.504 107.782 161.916 107.786 260.212-0.004 98.294-38.282 190.708-107.786 260.214zM512.996 361.124c-22.090 0-40-17.906-40-40v0c0-22.088 17.91-40 40-40v0c22.090 0 40.004 17.912 40.004 40v0c0 22.092-17.914 40-40.004 40v0zM512.998 743.094c-22.090 0-40-17.906-40-40v-240.002c0-22.090 17.91-40 40-40v0c22.090 0 40.004 17.91 40.004 40v240.002c0 22.094-17.914 40-40.004 40v0z',
  question: 'M828.782 195.218c-174.954-174.958-458.614-174.958-633.566 0-174.958 174.954-174.958 458.612 0 633.566 174.954 174.956 458.614 174.956 633.566 0 174.956-174.95 174.956-458.614 0-633.566zM772.214 772.216c-69.508 69.504-161.918 107.782-260.214 107.782-98.3 0-190.71-38.278-260.218-107.782-69.504-69.506-107.782-161.92-107.786-260.216 0.004-98.298 38.282-190.708 107.786-260.216 69.508-69.504 161.922-107.784 260.218-107.784 98.292 0 190.708 38.28 260.214 107.788 69.504 69.504 107.782 161.916 107.786 260.214-0.004 98.294-38.282 190.708-107.786 260.214zM512.996 784.784c-22.090 0-40-17.906-40-40v0c0-22.090 17.91-40 40-40v0c22.090 0 40.004 17.91 40.004 40v0c0 22.094-17.914 40-40.004 40v0zM552.996 572.27v52.898c0.004 22.088-17.906 39.996-39.996 40-22.094 0-40.004-17.908-40-40v-88c-0.004-21.752 17.372-39.416 38.996-39.952v-0.146c53.118 0 96.332-43.212 96.332-96.33 0-53.116-43.214-96.328-96.332-96.328-53.098 0-96.296 43.184-96.324 96.278 0 0.014 0 0.034 0 0.050 0 22.094-17.914 40-40.004 40s-40-17.906-40-40c0-97.382 78.946-176.328 176.328-176.328 97.386 0 176.332 78.946 176.332 176.328 0 83.268-57.722 153.048-135.332 171.53z',
  alert: 'M511.998 623.846c-22.090 0-40-17.906-40-40v-208c0-22.090 17.91-40 40-40v0c22.090 0 40.004 17.91 40.004 40v208c0 22.094-17.914 40-40.004 40v0zM511.998 743.846c22.090 0 40.004-17.906 40.004-40v0c0-22.090-17.914-40-40.004-40v0c-22.090 0-40 17.91-40 40v0c0 22.094 17.91 40 40 40v0zM512.142 211.808l-340.074 589.028h680.148l-340.074-589.028zM512.142 92.51c14.5 0 29 9.526 40 28.58l398.638 690.462c22 38.106 4 69.282-40 69.282h-797.278c-44 0-62-31.176-40-69.282l398.638-690.462c11.002-19.052 25.502-28.58 40.002-28.58v0z',
  edit: 'M948.56 263.376c12.704-12.708 15.072-31.836 7.11-46.936-1.84-3.524-4.232-6.832-7.192-9.792-0.286-0.286-0.594-0.528-0.886-0.8l-129.318-128.634c-0.048-0.048-0.088-0.106-0.138-0.154-7.812-7.812-18.050-11.716-28.292-11.714-10.242-0.004-20.484 3.902-28.296 11.714-0.064 0.066-0.12 0.136-0.184 0.204l-636.168 636.168c-5.868 5.134-10.21 11.958-12.298 19.748l-47.606 177.664c-3.7 13.804 0.248 28.534 10.352 38.638 7.602 7.6 17.816 11.714 28.288 11.714 3.452 0 6.93-0.446 10.352-1.364l177.664-47.606c7.296-1.956 13.732-5.904 18.74-11.216l521.486-521.484c1.126-0.904 2.222-1.87 3.268-2.914 1.042-1.044 2.006-2.138 2.91-3.264l107.75-107.748c0.836-0.71 1.668-1.432 2.458-2.224zM806.9 291.66l-73.592-73.202 56.61-56.61 73.594 73.2-56.612 56.612zM281.566 816.996l-73.4-73.4 468.572-468.568 73.594 73.202-468.766 468.766zM160.496 864.628l11.742-43.822 32.080 32.080-43.822 11.742z',
  paintbrush: 'M946.58 293.66c12.704-12.708 15.072-31.836 7.108-46.938-1.838-3.524-4.23-6.83-7.19-9.79-0.282-0.282-0.588-0.52-0.876-0.792l-129.338-128.654c-0.046-0.046-0.084-0.098-0.13-0.144-7.814-7.812-18.056-11.718-28.296-11.714-10.24 0-20.48 3.906-28.292 11.714-0.064 0.066-0.12 0.138-0.184 0.206l-557.048 557.048c-2.194 2.192-4.042 4.59-5.622 7.11-70.624 87.486-17.922 195.43-174.738 239.554 0 0 64.758 18.11 144.33 18.11 74.374 0 161.678-15.824 221.23-77.020 0.394-0.364 0.808-0.696 1.192-1.078l1.734-1.734c0.852-0.798 1.678-1.578 2.504-2.426 0.348-0.356 0.668-0.728 1.010-1.086l168.756-168.756c1.126-0.906 2.224-1.872 3.272-2.918 1.044-1.044 2.008-2.14 2.914-3.266l375.212-375.212c0.834-0.706 1.664-1.424 2.452-2.214zM537.462 589.402l-73.594-73.206 324.068-324.064 73.594 73.2-324.068 324.070zM388.178 667.684c-13.288-13.632-28.584-23.974-44.78-31.016l63.902-63.902 73.596 73.204-64.246 64.248c-6.498-15.23-15.964-29.698-28.472-42.534zM229.848 791.928c8.294-30.346 14.852-54.332 32.416-73.862 0.83-0.864 2.664-2.702 4.26-4.286 8.030-6.792 17.534-8.246 24.198-8.246 14.386 0 29.026 6.554 40.162 17.98 19.592 20.106 21.934 49.238 5.596 66.874l-1.712 1.712c-0.798 0.752-1.612 1.524-2.462 2.354l-0.86 0.84-0.834 0.864c-30.666 31.79-75.914 45.424-118.104 50.542 7.53-18.888 12.598-37.426 17.34-54.772z',
  close: 'M693.022 637.866c15.62 15.622 15.618 40.95 0 56.566-15.622 15.622-40.946 15.624-56.562 0.002l-124.46-124.458-124.456 124.458c-15.622 15.622-40.944 15.622-56.562 0-15.624-15.622-15.624-40.946-0.002-56.568l124.454-124.456-124.452-124.45c-15.622-15.622-15.622-40.946 0-56.564 15.62-15.624 40.944-15.624 56.568-0.002l124.45 124.45 124.454-124.452c15.622-15.62 40.95-15.62 56.566 0 15.622 15.62 15.624 40.944 0.002 56.56l-124.456 124.458 124.456 124.456zM828.784 828.784c-174.956 174.956-458.614 174.956-633.566 0-174.958-174.956-174.958-458.614 0-633.566 174.954-174.958 458.612-174.958 633.566 0 174.954 174.952 174.954 458.612 0 633.566zM880 511.998c-0.002-98.296-38.28-190.708-107.786-260.212s-161.92-107.786-260.214-107.788c-98.296 0.002-190.71 38.282-260.216 107.786-69.506 69.508-107.782 161.918-107.786 260.214 0.002 98.296 38.282 190.71 107.786 260.216 69.508 69.506 161.918 107.784 260.216 107.784 98.296 0 190.708-38.278 260.214-107.784s107.784-161.92 107.786-260.216z',
  trash: 'M919.5 225.208h-215.5v-120.080c0-20.344-15.192-37.096-34.836-39.632-1.696-0.216-3.41-0.372-5.164-0.372h-304.004c-1.754 0-3.468 0.152-5.164 0.372-19.644 2.54-34.836 19.292-34.836 39.628v120.084h-215.996c-22.090 0-40 17.912-40 40.002 0 22.092 17.91 40 40 40h27.216l53.916 615.914h0.214c0 22.092 17.91 40 40 40h573.372c22.094 0 40-17.91 40-40h0.148l53.916-615.914h26.716c22.090 0 40-17.91 40-40s-17.908-40.002-39.998-40.002zM399.996 145.126h224.004v80.082h-224.004v-80.082zM762.062 881.124h-500.124l-50.414-575.912h600.954l-50.416 575.912zM632.004 697.124v-240c-0.004-22.092 17.906-40.002 40-40.002 22.090 0.002 40 17.908 40 40.002l-0.004 240.002c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.906-40-40zM311.996 697.124v-240c-0.004-22.092 17.906-40.002 40-40.002 22.090 0.002 40 17.908 40 40.002l-0.004 240.002c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.906-40-40zM472 697.124v-240c-0.004-22.092 17.906-40.002 40-40.002 22.090 0.002 40 17.908 40 40.002l-0.004 240.002c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.906-40-40z',
  cross: 'M1013.286 955.716l-443.72-443.716 443.718-443.718c15.622-15.622 15.62-40.948-0.004-56.566-15.618-15.622-40.942-15.622-56.562 0l-443.716 443.718-443.72-443.718c-15.62-15.624-40.946-15.622-56.566 0-15.622 15.62-15.622 40.944 0 56.566l443.722 443.718-443.722 443.722c-15.622 15.618-15.62 40.942 0 56.56s40.948 15.622 56.566 0l443.72-443.718 443.722 443.718c15.618 15.624 40.942 15.622 56.56 0 15.62-15.618 15.622-40.944 0.002-56.566z',
  delete: 'M828.786 195.216c-174.958-174.956-458.612-174.958-633.568 0-174.954 174.954-174.956 458.612 0 633.566 174.954 174.956 458.614 174.956 633.568 0 174.954-174.954 174.952-458.612 0-633.566zM251.786 251.786c69.506-69.506 161.916-107.784 260.212-107.788 84.838 0 165.278 28.538 230.402 81.028l-517.372 517.374c-52.492-65.126-81.026-145.568-81.030-230.404 0.004-98.294 38.282-190.704 107.788-260.21zM772.214 772.214c-69.506 69.506-161.918 107.784-260.214 107.786-84.836-0.004-165.276-28.538-230.402-81.030l517.376-517.372c52.492 65.126 81.028 145.564 81.028 230.402-0.004 98.296-38.284 190.71-107.788 260.214z',
  power: 'M472 473.188v-368c-0.004-22.092 17.906-40.002 40-40 22.090 0 40 17.906 40 40l-0.004 368.002c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.906-40-40zM746.804 201.726v0.188c-13.138-9.004-26.808-17.292-40.978-24.768-1.994-1.050-3.492-1.84-4.668-2.458-1.75-0.892-3.518-1.756-5.28-2.624-0.004-0.002-0.008-0.004-0.012-0.006-0.080-0.032-0.158-0.074-0.234-0.108-0.032-0.012-0.056-0.024-0.090-0.042l-0.006 0.008c-4.724-2.022-9.924-3.168-15.386-3.212-22.090-0.178-40.14 17.588-40.32 39.678-0.122 15.112 8.166 28.298 20.47 35.208 31.9 15.71 61.418 36.616 87.492 62.292 2.796 2.754 5.52 5.562 8.208 8.394v-0.146c59.436 62.664 92.062 144.352 92.062 231.056 0 89.748-34.95 174.124-98.412 237.588s-147.84 98.412-237.588 98.412-174.124-34.95-237.588-98.412-98.412-147.84-98.412-237.588c0-81.652 28.962-158.834 81.972-219.886 5.814-6.69 11.902-13.192 18.288-19.474 26.064-25.652 55.564-46.538 87.446-62.238 12.342-6.892 20.66-20.106 20.542-35.238-0.17-22.088-18.218-39.86-40.306-39.69-5.468 0.044-10.664 1.186-15.392 3.208l-0.004-0.008c-0.036 0.016-0.058 0.028-0.088 0.042-0.042 0.018-0.084 0.038-0.126 0.056-1.862 0.918-3.728 1.828-5.574 2.774-0.458 0.238-0.948 0.496-1.512 0.792-1.096 0.566-2.18 1.148-3.27 1.722-15.704 8.294-30.804 17.572-45.232 27.736v-0.124c-106.896 75.288-176.742 199.646-176.742 340.33 0 229.75 186.25 416 416 416s416-186.25 416-416c-0.002-142.654-71.82-268.52-181.26-343.462z',
  add: 'M512 144c98.296 0 190.708 38.28 260.214 107.784 69.506 69.508 107.786 161.922 107.786 260.216 0 98.296-38.28 190.708-107.786 260.214-69.508 69.506-161.918 107.786-260.214 107.786-98.294 0-190.708-38.28-260.216-107.786-69.504-69.508-107.784-161.918-107.784-260.214 0-98.294 38.28-190.708 107.784-260.216 69.508-69.504 161.922-107.784 260.216-107.784zM512 64c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448v0zM729.002 473h-176.008v-176.008c0.002-22.090-17.906-39.994-39.996-39.994-22.088 0-39.998 17.908-39.998 39.998v176.004h-176c-22.094 0-40 17.908-39.998 40-0.002 22.090 17.904 39.996 39.996 39.996h176.002v176.004c0 22.094 17.908 40 40 39.998 22.090 0.002 39.996-17.904 39.996-39.996v-176.006l176.012-0.002c22.090 0.002 39.994-17.906 39.994-39.996-0.002-22.088-17.91-39.998-40-39.998z',
  plus: 'M921.002 473h-368.008v-368.004c0.002-22.090-17.906-39.996-39.996-39.996-22.088 0-39.998 17.91-39.998 40v368h-368.002c-22.094 0-40 17.908-39.998 40-0.002 22.090 17.904 39.996 39.996 39.996l368.004-0.002v368.010c0 22.094 17.908 40 40 39.996 22.090 0.004 39.996-17.902 39.996-39.996v-368.010h368.010c22.090 0.002 39.994-17.906 39.994-39.996-0-22.088-17.908-39.998-39.998-39.998z',
  document: 'M863.98 242.454c0.008-0.23-0.094-3.944-0.152-4.624-0.058-0.688-0.368-2.972-0.496-3.742-0.008-0.058-0.352-1.712-0.54-2.486-0.124-0.508-0.246-1.014-0.39-1.518-0.226-0.784-1.106-3.292-1.296-3.78-0.304-0.754-1.426-3.162-1.668-3.626-0.398-0.762-1.75-3.028-2.008-3.418-0.606-0.924-1.262-1.81-1.942-2.678-0.132-0.168-0.246-0.346-0.382-0.512-0.98-1.212-2.028-2.364-3.14-3.454l-104.020-104.9c-3.714-3.714-7.988-6.518-12.54-8.464-0.090-0.040-3.762-1.404-4.008-1.48-0.942-0.288-1.894-0.516-2.852-0.732-0.336-0.076-0.66-0.176-0.996-0.244-1-0.2-3.618-0.558-3.922-0.59-1.324-0.13-2.652-0.204-3.976-0.204h-519.652c-1.754 0-3.468 0.152-5.164 0.372-19.644 2.54-34.836 19.292-34.836 39.628v752c0 22.094 17.91 40 40 40h624c22.090 0 40-17.906 40-40l-0.020-645.548zM784 848h-544v-672l439.614 0.002v65.186c0 22.090 17.91 40 40 40h64.368l0.018 566.812zM664 336c22.090 0 40 17.908 40 40s-17.91 40-40 40h-304c-22.092 0-40-17.908-40-40s17.908-40 40-40h304zM704 528c0 22.092-17.91 40-40 40h-304c-22.092 0-40-17.908-40-40s17.908-40 40-40h304c22.090 0 40 17.908 40 40zM704 680c0 22.092-17.91 40-40 40h-304c-22.092 0-40-17.908-40-40s17.908-40 40-40h304c22.090 0 40 17.908 40 40z',
  graphline: 'M820.536 489.23c-15.624 15.618-40.954 15.618-56.57 0l-42.006-42.002-169.898 169.9c-7.822 7.82-18.076 11.722-28.326 11.712-10.248 0.008-20.496-3.894-28.314-11.712l-96.178-96.182-140.67 140.674c-15.624 15.622-40.954 15.618-56.57-0.004-15.624-15.618-15.624-40.946 0-56.566l168.946-168.946c7.812-7.816 18.058-11.72 28.3-11.716 10.238-0.002 20.476 3.904 28.29 11.716l96.204 96.204 168.91-168.91c0.33-0.356 0.626-0.73 0.972-1.076 7.824-7.824 18.084-11.726 28.34-11.712 10.252-0.012 20.508 3.892 28.332 11.714 0.346 0.346 0.64 0.72 0.972 1.074l69.266 69.266c15.62 15.618 15.616 40.942 0 56.566zM880 144h-736v736h736v-736zM920 64c22.092 0 40 17.908 40 40v816c0 22.092-17.908 40-40 40h-816c-22.092 0-40-17.908-40-40v-816c0-22.092 17.908-40 40-40h816z',
  docchart: 'M919.938 128h-816.008c-1.38 0-2.746 0.070-4.090 0.208-20.168 2.046-35.91 19.080-35.91 39.792v688c0 22.090 17.91 40 40 40h816.008c22.098 0 40-17.91 40-40v-688c0-22.094-17.906-40-40-40zM395.934 470.67h232v162.664h-232v-162.664zM355.934 633.334h-212.004v-162.664h212.004v162.664zM395.934 430.67v-142.662h232v142.662h-232zM667.934 470.67h212.004v162.664h-212.004v-162.664zM667.934 430.67v-142.662h212.004v142.662h-212.004zM355.934 288.008v142.662h-212.004v-142.662h212.004zM143.93 673.334h212.004v142.662h-212.004v-142.662zM395.934 673.334h232v142.662h-232v-142.662zM667.934 673.334h212.004v142.662h-212.004v-142.662z',
  doclist: 'M919.938 128h-816.008c-1.38 0-2.746 0.070-4.090 0.208-20.168 2.046-35.91 19.080-35.91 39.792v688c0 22.090 17.91 40 40 40h816.008c22.098 0 40-17.91 40-40v-688c-0-22.094-17.906-40-40-40zM143.93 288.008h736.008v527.988h-736.008v-527.988zM248 400.004c0-22.090 17.91-40 40-40h448c22.094 0 40 17.906 40 40 0 22.090-17.906 40-40 40h-448c-22.090 0-40-17.91-40-40zM776 552.002c0 22.094-17.906 40-40 40h-448c-22.090 0-40-17.906-40-40 0-22.090 17.91-40 40-40h448c22.094 0 40 17.91 40 40zM776 704c0 22.094-17.906 40-40 40h-448c-22.090 0-40-17.906-40-40 0-22.090 17.91-40 40-40h448c22.094 0 40 17.91 40 40z',
  category: 'M925.224 256.37c-1.694-0.216-3.408-0.37-5.162-0.37h-816c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v624c0 22.094 17.91 40 40 40h816c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-624.004c0-20.342-15.19-37.096-34.838-39.632zM144.062 880v-544h736v544h-736zM896.11 180c0 11.044-8.954 20-20 20h-728.032c-11.046 0-20-8.956-20-20v0c0-11.046 8.954-20 20-20h728.032c11.046 0 20 8.954 20 20v0zM832.094 84c0 11.044-8.954 20-20 20h-600c-11.046 0-20-8.956-20-20v0c0-11.046 8.954-20 20-20h600c11.046 0 20 8.954 20 20v0z',
  copy: 'M960.132 210.186c0-0.444-0.050-0.874-0.066-1.312-0.024-0.684-0.044-1.366-0.104-2.046-0.060-0.74-0.158-1.468-0.26-2.198-0.080-0.564-0.156-1.128-0.258-1.692-0.146-0.792-0.328-1.566-0.518-2.34-0.124-0.508-0.244-1.014-0.39-1.518-0.224-0.784-0.488-1.548-0.76-2.312-0.176-0.49-0.344-0.98-0.538-1.466-0.302-0.754-0.642-1.486-0.988-2.216-0.224-0.472-0.436-0.946-0.68-1.41-0.398-0.762-0.838-1.496-1.284-2.228-0.242-0.396-0.466-0.798-0.722-1.19-0.608-0.924-1.262-1.81-1.942-2.678-0.132-0.168-0.248-0.346-0.382-0.512-0.98-1.212-2.028-2.364-3.14-3.454l-104.020-104.9c-3.714-3.714-7.988-6.518-12.542-8.464-0.088-0.040-0.174-0.084-0.262-0.122-0.994-0.418-2.006-0.774-3.024-1.108-0.242-0.080-0.474-0.176-0.72-0.252-0.942-0.288-1.894-0.516-2.854-0.732-0.334-0.076-0.658-0.176-0.996-0.244-0.998-0.2-2.004-0.336-3.010-0.458-0.306-0.038-0.606-0.1-0.912-0.13-1.322-0.13-2.65-0.204-3.976-0.204h-391.784c-1.754 0-3.468 0.152-5.162 0.372-19.646 2.538-34.838 19.29-34.838 39.628v145.516h-279.874c-1.754 0-3.468 0.152-5.162 0.372-19.646 2.538-34.838 19.29-34.838 39.628v628.28c0 22.094 17.91 40 40 40h496.118c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 2.084-3.466 2.128-3.548 2.992-5.612 4.704-12.010 4.704-18.808 0 0 0 0 0-0.004v-145.518h279.874c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 2.084-3.466 2.128-3.548 2.992-5.612 4.704-12.010 4.704-18.808 0 0 0 0 0-0.004v-521.828c0.008-0.23-0.016-0.458-0.014-0.688 0.002-0.202 0.028-0.39 0.028-0.584zM144.124 878.792v-548.278h311.752v65.186c0 22.090 17.91 40 40 40h64.366v443.092h-416.118zM640.244 693.278v-296.31c0.006-0.23-0.018-0.458-0.014-0.688 0.004-0.196 0.030-0.382 0.030-0.578 0-0.444-0.052-0.874-0.066-1.312-0.024-0.684-0.044-1.366-0.104-2.046-0.062-0.74-0.16-1.468-0.262-2.198-0.078-0.564-0.152-1.128-0.258-1.692-0.144-0.792-0.324-1.566-0.516-2.34-0.124-0.508-0.246-1.014-0.39-1.518-0.226-0.784-0.488-1.548-0.76-2.312-0.174-0.49-0.342-0.98-0.538-1.466-0.302-0.754-0.64-1.486-0.988-2.216-0.222-0.472-0.438-0.946-0.68-1.41-0.398-0.762-0.838-1.496-1.284-2.228-0.242-0.396-0.466-0.798-0.724-1.19-0.606-0.924-1.262-1.81-1.942-2.678-0.13-0.168-0.246-0.346-0.382-0.512-0.978-1.212-2.028-2.364-3.138-3.454l-104.020-104.9c-3.714-3.714-7.988-6.518-12.542-8.464-0.088-0.040-0.172-0.084-0.262-0.122-0.994-0.418-2.004-0.774-3.024-1.108-0.242-0.080-0.476-0.176-0.72-0.252-0.942-0.288-1.896-0.516-2.854-0.732-0.334-0.076-0.658-0.176-0.996-0.244-0.998-0.2-2.004-0.336-3.012-0.458-0.304-0.038-0.602-0.1-0.91-0.13-1.322-0.13-2.648-0.204-3.976-0.204h-31.916v-105.516h311.752v65.186c0 22.090 17.91 40 40 40h64.366v443.092h-239.87z',
  book: 'M896.054 159.774c-0.122-52.914-43.048-95.774-95.992-95.774h-632.004c-1.754 0-3.468 0.154-5.164 0.372-19.644 2.54-34.836 19.292-34.836 39.628v816c0 22.094 17.91 40 40 40h632.004c52.642 0 95.368-42.378 95.968-94.88h0.036v-705.332l-0.012-0.014zM368.062 144h80v271.922l-11.728-11.718c-15.62-15.606-40.924-15.606-56.542 0l-11.728 11.718v-271.922zM816.036 864.204c-0.1 8.712-7.268 15.796-15.972 15.796h-592.004v-736h80.004v368.426c0 16.176 9.742 30.758 24.684 36.954 14.944 6.192 32.146 2.778 43.586-8.656l51.728-51.68 51.728 51.68c7.652 7.644 17.876 11.708 28.28 11.708 5.156 0 10.356-1 15.306-3.050 14.944-6.196 24.684-20.778 24.684-36.954v-368.428h272c8.796 0 15.972 7.16 15.992 15.958l-0.016 704.246z',
  certificate: 'M832.032 384.032c0-176.728-143.266-320-320-320s-320 143.272-320 320c0 104.662 50.25 197.584 127.938 255.966v311.5c0 16.174 9.74 30.756 24.682 36.952 4.954 2.052 10.152 3.050 15.31 3.050 10.402 0 20.626-4.060 28.276-11.702l123.726-123.58 123.772 123.332c11.452 11.412 28.644 14.804 43.574 8.608 14.93-6.2 24.66-20.776 24.66-36.942v-311.124c77.756-58.376 128.062-151.342 128.062-256.060zM272.032 384.032c0-64.106 24.964-124.374 70.292-169.706 45.33-45.33 105.6-70.294 169.708-70.294s124.376 24.964 169.708 70.294c45.33 45.332 70.292 105.6 70.292 169.706s-24.964 124.376-70.292 169.704c-45.33 45.33-105.6 70.294-169.708 70.294s-124.376-24.964-169.708-70.294c-45.328-45.328-70.292-105.598-70.292-169.704zM623.968 854.89l-83.804-83.508c-15.622-15.564-40.898-15.552-56.502 0.034l-83.694 83.594v-171.17c34.878 13.042 72.632 20.192 112.062 20.192 39.382 0 77.094-7.13 111.938-20.142v171z',
  print: 'M925.922 304.496c-1.698-0.218-3.41-0.37-5.166-0.37h-88.64v-93.548c0.006-0.21-0.016-0.422-0.014-0.634 0.004-0.212 0.036-0.416 0.036-0.63 0-0.478-0.054-0.942-0.074-1.416-0.024-0.636-0.042-1.27-0.094-1.906-0.066-0.776-0.168-1.54-0.276-2.302-0.074-0.534-0.146-1.066-0.242-1.596-0.15-0.82-0.338-1.624-0.538-2.424-0.12-0.48-0.23-0.958-0.37-1.436-0.234-0.812-0.506-1.608-0.792-2.398-0.164-0.462-0.322-0.924-0.504-1.38-0.318-0.788-0.668-1.552-1.036-2.316-0.208-0.436-0.406-0.88-0.628-1.312-0.424-0.802-0.88-1.574-1.352-2.344-0.218-0.358-0.422-0.724-0.656-1.078-0.636-0.972-1.324-1.91-2.042-2.82-0.098-0.124-0.182-0.252-0.282-0.376-0.988-1.224-2.048-2.388-3.172-3.488l-104.004-104.882c-3.696-3.696-7.948-6.486-12.466-8.432-0.122-0.050-0.224-0.11-0.344-0.16-0.974-0.41-1.966-0.756-2.962-1.084-0.262-0.086-0.512-0.19-0.78-0.272-0.926-0.284-1.87-0.506-2.812-0.722-0.346-0.080-0.684-0.182-1.034-0.252-0.988-0.198-1.988-0.334-2.988-0.456-0.31-0.040-0.618-0.102-0.93-0.134-1.324-0.132-2.652-0.204-3.978-0.204h-455.67c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.29-34.838 39.63v200h-87.356c-1.754 0-3.468 0.152-5.164 0.37-19.644 2.538-34.836 19.29-34.836 39.63v320c0 22.094 17.91 40 40 40h87.368v216c0 22.094 17.91 40 40 40h560.006c13.81 0 25.982-6.996 33.17-17.636 0.102-0.146 0.184-0.306 0.282-0.458 0.612-0.922 1.2-1.86 1.722-2.836 0.046-0.082 0.080-0.17 0.124-0.254 2.994-5.612 4.704-12.008 4.704-18.808 0 0 0 0 0-0.004v-216h88.624c13.808 0 25.982-6.996 33.168-17.636 0.104-0.148 0.186-0.308 0.286-0.458 0.612-0.922 1.198-1.862 1.72-2.836 0.046-0.082 0.082-0.172 0.124-0.256 2.994-5.61 4.702-12.008 4.702-18.806 0 0 0 0 0-0.004v-320c0-20.344-15.186-37.096-34.834-39.636zM272.116 144.128h375.634v65.186c0 1.38 0.070 2.746 0.208 4.090 2.048 20.168 19.080 35.91 39.792 35.91h64.366v54.812h-480v-159.998zM272.124 880.126v-327.998h480.006v327.998zM880.756 384.128v239.998h-48.624v-111.998c0-20.34-15.19-37.092-34.836-39.63-1.694-0.218-565.17-0.372-565.17-0.372-1.754 0-3.468 0.152-5.162 0.372-19.646 2.538-34.838 19.29-34.838 39.628v112h-47.368v-239.998zM664.124 608.126c22.092 0 40 17.908 40 40s-17.908 40-40 40h-304c-22.092 0-40-17.908-40-40s17.908-40 40-40h304zM704.124 784.126c0 22.092-17.908 40-40 40h-304c-22.092 0-40-17.908-40-40s17.908-40 40-40h304c22.092 0 40 17.908 40 40z',
  listunordered: 'M961 233c0 22.090-17.908 40-40 40h-607.996c-22.090 0-40-17.908-40-40v0c0-22.090 17.908-40.002 40-40.002h607.996c22.092 0 40 17.912 40 40.002v0zM961 793c0-22.090-17.908-40.002-40-40.002h-607.996c-22.092 0-40 17.912-40 40.002v0c0 22.092 17.91 40 40 40h607.996c22.092 0 40-17.91 40-40v0zM961 606.332c0-22.090-17.908-40-40-40h-607.996c-22.092 0-40 17.91-40 40v0c0 22.094 17.91 40 40 40h607.996c22.092 0 40-17.91 40-40v0zM961 419.668c0-22.090-17.908-40.004-40-40.004h-607.996c-22.092 0-40 17.914-40 40.004v0c0 22.090 17.91 40 40 40h607.996c22.092-0 40-17.91 40-40v0zM129 168.998c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64zM129 728.998c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64zM129 542.332c-35.346 0-64 28.652-64 64 0 35.344 28.654 64 64 64s64-28.656 64-64c0-35.348-28.654-64-64-64zM129 355.664c-35.346 0-64 28.656-64 64 0 35.348 28.654 64 64 64s64-28.652 64-64c0-35.344-28.654-64-64-64z',
  graphbar: 'M324.832 513c22.090 0 40 17.91 40 40v304c0 22.090-17.906 40-40 40v0c-22.090 0-40-17.906-40-40v-304c0-22.090 17.91-40 40-40v0zM884.832 128.998c-22.090 0-40 17.906-40 40v688.002c0 22.094 17.91 40 40 40v0c22.094 0 40-17.91 40-40v-688.002c0-22.094-17.91-40-40-40v0zM698.164 256.998c-22.090 0-40 17.91-40 40v560.002c0 22.094 17.91 40 40 40v0c22.094 0 40-17.91 40-40v-560.002c0-22.090-17.91-40-40-40v0zM511.5 384.998c-22.090 0-40.004 17.91-40.004 40v432.002c0 22.094 17.914 40 40.004 40v0c22.090 0 40-17.91 40-40v-432.002c0-22.090-17.91-40-40-40v0zM139.168 641c-22.090 0-40 17.91-40 40v176c0 22.094 17.91 40 40 40v0c22.094 0 40-17.91 40-40v-176c0-22.090-17.91-40-40-40v0z',
  menu: 'M960 232c0 22.092-17.908 40-40.002 40h-815.996c-22.092 0-40-17.908-40-40v0c0-22.090 17.908-40 40-40h815.998c22.092 0 40 17.91 40 40v0zM768 416c0 22.090-17.908 40-40 40h-624c-22.090 0-40-17.908-40-40v0c0-22.090 17.908-40.002 40-40.002h624c22.092 0.002 40 17.914 40 40.002v0zM832 608c0 22.092-17.906 40.002-40 40.002h-688c-22.090 0-40-17.91-40-40.002v0c0-22.090 17.908-40 40-40h688c22.094 0 40 17.912 40 40v0zM576 792c0 22.094-17.91 40-40.002 40h-431.998c-22.090 0-40-17.906-40-40v0c0-22.094 17.908-40.002 40-40.002h432c22.094 0.002 40 17.912 40 40.002v0z',
  filter: 'M962.030 168.032c0 22.092-17.908 40-40.002 40h-815.996c-22.092 0-40-17.908-40-40v0c0-22.090 17.908-40 40-40h815.998c22.092 0 40 17.908 40 40v0zM770 544.034c0 22.090-17.908 40-40 40h-432c-22.090 0-40-17.908-40-40v0c0-22.090 17.908-40.002 40-40.002h432c22.090 0 40 17.912 40 40.002v0zM642.030 728.032c0 22.094-17.91 40-40.002 40h-175.998c-22.090 0-40-17.906-40-40v0c0-22.094 17.908-40.002 40-40.002h176c22.094 0.002 40 17.91 40 40.002v0zM866 352.030c0 22.092-17.906 40.002-40 40.002h-624c-22.090 0-40-17.91-40-40.002v0c0-22.090 17.908-40 40-40h624c22.092 0 40 17.91 40 40v0zM512.030 928.034c22.090 0 40.004-17.906 40.004-40v0c0-22.090-17.914-40-40.004-40v0c-22.090 0-40 17.91-40 40v0c0 22.092 17.91 40 40 40v0z',
  ellipsis: 'M184 393c66.274 0 120 53.73 120 120s-53.726 120-120 120c-66.286 0-120-53.73-120-120s53.714-120 120-120zM512 393c66.272 0 120 53.73 120 120s-53.728 120-120 120c-66.286 0-120-53.73-120-120s53.714-120 120-120zM840 393c66.272 0 120 53.73 120 120s-53.728 120-120 120c-66.286 0-120-53.73-120-120s53.714-120 120-120z',
  cog: 'M396.458 151.486l27.768 27.768c23.28 23.29 54.262 36.116 87.242 36.116 0.318 0 0.636 0 0.958-0.004 0.292 0.002 0.58 0.004 0.872 0.004 32.99 0 63.976-12.83 87.22-36.098l27.61-27.604c19.584 6.294 38.582 14.192 56.892 23.642v39.976c0 32.878 13.406 64.804 36.842 87.888 23.072 23.384 54.966 36.762 87.804 36.762l39.442 0.002c9.168 17.906 16.852 36.462 23.014 55.574l-27.676 27.676c-23.222 23.224-36.318 55.242-36.094 88.096-0.248 32.884 12.844 64.934 36.094 88.19l27.928 27.928c-6.298 19.704-14.212 38.812-23.704 57.23l-38.984 0.002c-0.008 0-0.012 0-0.022 0-32.84 0-64.74 13.38-87.814 36.776-23.43 23.080-36.83 55-36.83 87.876v39.116c-18.38 9.486-37.456 17.406-57.122 23.714l-27.348-27.346c-23.278-23.3-54.264-36.13-87.254-36.13-0.292 0-0.58 0.002-0.872 0.004-0.318-0.004-0.636-0.004-0.958-0.004-32.978 0-63.962 12.826-87.228 36.102l-27.552 27.554c-19.874-6.338-39.144-14.32-57.708-23.902l-0.002-38.13c0.012-32.854-13.368-64.764-36.772-87.846-23.082-23.43-55.004-36.834-87.878-36.834h-38.506c-9.776-18.846-17.898-38.42-24.328-58.624l27.49-27.49c23.246-23.248 36.338-55.296 36.088-88.182 0.224-32.854-12.872-64.872-36.092-88.094l-27.23-27.232c6.29-19.612 14.182-38.628 23.636-56.966h38.942c32.878 0 64.802-13.402 87.884-36.838 23.398-23.086 36.778-54.994 36.766-87.81l0.002-39.028c18.492-9.546 37.688-17.506 57.48-23.834zM421.486 60.208c-59.932 11.946-115.658 35.516-164.752 68.268l-0.004 85.866c0.004 11.676-4.886 22.194-12.706 29.68-7.486 7.83-18.012 12.728-29.702 12.728h-85.806c-32.624 48.946-56.132 104.484-68.088 164.204l60.39 60.394c8.256 8.256 12.234 19.15 11.998 29.968 0.246 10.83-3.734 21.738-11.998 30.004l-60.562 60.56c11.97 60.402 35.74 116.552 68.826 165.948h85.24c11.69 0 22.214 4.9 29.702 12.73 7.818 7.482 12.708 17.998 12.706 29.676l0.004 85.004c49.162 32.796 104.976 56.386 165.006 68.316l60.654-60.656c8.028-8.032 18.55-12.014 29.072-12.014 0.312 0 0.62 0.004 0.93 0.010 0.298-0.006 0.602-0.010 0.9-0.010 10.526 0 21.046 3.982 29.070 12.014l60.542 60.534c59.78-11.968 115.376-35.512 164.356-68.19v-85.956c0-11.69 4.9-22.214 12.73-29.702 7.486-7.818 18.002-12.708 29.678-12.706l85.876-0.004c32.668-49.032 56.182-104.674 68.104-164.504l-61.050-61.052c-8.266-8.266-12.244-19.174-12-30.004-0.236-10.818 3.742-21.712 12-29.968l60.882-60.888c-11.91-59.144-35.158-114.178-67.37-162.758l-86.444-0.004c-0.004 0-0.008 0-0.008 0-11.674 0-22.188-4.89-29.67-12.708-7.83-7.486-12.73-18.012-12.73-29.702v-86.816c-48.912-32.632-104.418-56.158-164.106-68.14l-60.792 60.784c-8.024 8.032-18.546 12.014-29.070 12.014-0.3 0-0.602-0.004-0.9-0.012-0.308 0.008-0.618 0.012-0.93 0.012-10.522 0-21.044-3.982-29.072-12.014l-60.906-60.906zM511.856 314.472c-109.014 0-197.386 88.372-197.386 197.384 0 109.010 88.374 197.382 197.386 197.382v0.134c0.746 0 1.492 0.012 2.24 0.004 14.806-0.16 29.214-1.942 43.056-5.182 1.022-0.238 1.932-0.496 2.794-0.762 17.328-4.988 29.94-21.012 29.738-39.916-0.242-22.71-18.846-40.926-41.556-40.686-2.996 0.032-5.902 0.402-8.708 1.042-0.090 0.016-0.178 0-0.266 0.022-8.18 1.99-16.708 3.096-25.472 3.224-0.586-0.074-1.19-0.124-1.826-0.124-63.486 0-115.142-51.65-115.142-115.138 0-63.49 51.656-115.142 115.142-115.142 63.488 0 115.14 51.652 115.14 115.142 0 8.924-1.028 17.616-2.964 25.958-0.020 0.090-0.008 0.178-0.020 0.268-0.61 2.812-0.948 5.724-0.948 8.72 0 22.71 18.408 41.122 41.122 41.122 18.906 0 34.792-12.778 39.596-30.158 0.262-0.866 0.508-1.78 0.736-2.804 3.092-13.876 4.722-28.3 4.722-43.106 0-109.012-88.372-197.384-197.384-197.384z',
  wrench: 'M959.438 274.25c0-22.090-17.914-40-40.004-40-11.16 0-21.242 4.582-28.496 11.954l-60.152 60.148c-15.622 15.622-40.946 15.618-56.566-0.004l-56.57-56.566c-15.622-15.622-15.622-40.95 0-56.57l59.55-59.546c7.75-7.292 12.614-17.618 12.614-29.102 0-22.090-17.914-40-40.004-40-1.598 0-3.164 0.122-4.71 0.304-0.012 0-0.020-0.008-0.032-0.004-94.958 11.586-168.504 92.492-168.504 190.574 0 23.528 4.238 46.058 11.98 66.886l-503.078 503.074c-1.496 1.496-2.8 3.102-4.012 4.758-10.914 13.676-17.454 30.992-17.454 49.848 0 44.188 35.818 79.996 79.996 79.996 18.906 0 36.27-6.574 49.964-17.54 1.614-1.188 3.18-2.464 4.64-3.926l503.078-503.078c20.828 7.742 43.36 11.98 66.882 11.98 97.988 0 178.828-73.402 190.54-168.222v-0.012c0.2-1.628 0.338-3.272 0.338-4.952zM151.996 912c-22.090 0-40-17.906-40-40 0-22.090 17.91-40 40-40s40.004 17.91 40.004 40c0 22.094-17.914 40-40.004 40z',
  nut: 'M512.034 144.030l318.696 184v368l-318.696 184-318.702-184v-368l318.702-184zM512.034 64.030c-13.812 0-27.624 3.574-40 10.718l-318.702 184c-24.752 14.29-40 40.7-40 69.282v368c0 28.582 15.248 54.994 40 69.28l318.702 184c12.376 7.146 26.19 10.72 40 10.72 13.814 0 27.624-3.572 40-10.72l318.696-184c24.752-14.288 40-40.698 40-69.28v-368c0-28.582-15.248-54.992-40-69.282l-318.696-184c-12.376-7.144-26.188-10.718-40-10.718v0zM511.63 314.25c-109.014 0-197.386 88.372-197.386 197.384 0 109.010 88.374 197.382 197.386 197.382v0.134c0.746 0 1.492 0.012 2.24 0.004 14.806-0.162 29.214-1.942 43.056-5.182 1.022-0.24 1.932-0.496 2.794-0.762 17.328-4.988 29.94-21.012 29.738-39.916-0.242-22.71-18.846-40.926-41.556-40.684-2.996 0.032-5.902 0.402-8.708 1.040-0.090 0.016-0.178 0-0.266 0.022-8.18 1.99-16.708 3.094-25.474 3.222-0.584-0.072-1.188-0.124-1.826-0.124-63.486 0-115.142-51.65-115.142-115.138 0-63.49 51.656-115.142 115.142-115.142 63.488 0 115.14 51.652 115.14 115.142 0 8.924-1.028 17.616-2.964 25.96-0.020 0.088-0.008 0.178-0.020 0.266-0.61 2.814-0.948 5.724-0.948 8.72 0 22.712 18.408 41.122 41.122 41.122 18.906 0 34.792-12.776 39.596-30.158 0.262-0.866 0.508-1.78 0.736-2.804 3.092-13.876 4.724-28.3 4.724-43.106 0-109.010-88.372-197.382-197.384-197.382z',
  camera: 'M925.164 208.372c-1.694-0.218-3.408-0.372-5.162-0.372h-471.968v-39.962c0-20.344-15.192-37.096-34.836-39.63-1.696-0.218-3.41-0.374-5.164-0.374h-176.004c-1.754 0-3.468 0.152-5.164 0.374-19.644 2.538-34.836 19.29-34.836 39.626v39.966h-88.032c-1.754 0-3.468 0.152-5.162 0.372-19.646 2.536-34.838 19.29-34.838 39.628v528c0 22.094 17.91 40 40 40h816.004c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.46 0.612-0.922 1.2-1.86 1.722-2.836 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-528.004c-0-20.342-15.192-37.096-34.838-39.63zM880.002 736h-736.004v-448h736.004v448zM512 402.522c60.368 0 109.478 49.112 109.478 109.478s-49.112 109.478-109.478 109.478-109.478-49.112-109.478-109.478 49.11-109.478 109.478-109.478zM512 322.522c-104.644 0-189.478 84.832-189.478 189.478 0 104.644 84.834 189.478 189.478 189.478 104.646 0 189.478-84.834 189.478-189.478 0-104.646-84.832-189.478-189.478-189.478v0z',
  eye: 'M1008.714 490.522c-9.002-12.594-223.276-308.808-496.684-308.808-273.444 0-487.682 296.214-496.684 308.808l-15.316 21.49 15.316 21.466c9.002 12.618 223.24 308.808 496.684 308.808 273.408 0 487.682-296.19 496.684-308.808l15.316-21.466-15.316-21.49zM807.68 631.688c-46 39.142-92.558 70.064-138.382 91.904-53.874 25.676-106.786 38.694-157.266 38.694-50.49 0-103.406-13.018-157.282-38.696-45.826-21.838-92.382-52.758-138.378-91.902-53.708-45.706-94.302-92.122-116.61-119.672 22.36-27.602 63.028-74.094 116.612-119.696 45.996-39.146 92.554-70.068 138.378-91.908 53.876-25.678 106.792-38.698 157.28-38.698 50.48 0 103.39 13.020 157.264 38.696 45.824 21.842 92.382 52.764 138.382 91.91 53.602 45.614 94.264 92.098 116.624 119.696-22.306 27.544-62.898 73.954-116.622 119.672zM692.032 512.036c0 99.41-80.588 180-180 180s-180-80.59-180-180c0-99.406 80.588-179.998 180-179.998s180 80.59 180 179.998z',
  photo: 'M920 64h-816c-22.092 0-40 17.91-40 40v816c0 22.094 17.908 40 40 40h816c22.092 0 40-17.906 40-40v-816c0-22.090-17.908-40-40-40zM880 144v449.782l-235.39-235.392c-7.502-7.5-17.676-11.714-28.286-11.714s-20.784 4.214-28.286 11.716l-169.804 169.804-40.958-40.958c-15.622-15.622-40.95-15.622-56.57 0l-176.708 176.708v-519.946h736.002zM144 880v-102.914l204.992-204.994 215.972 215.974c7.81 7.81 18.048 11.714 28.286 11.714s20.474-3.904 28.286-11.714c15.62-15.622 15.62-40.95 0-56.57l-146.732-146.73 141.522-141.524 263.676 263.68v173.078h-736.002zM356.174 400.542c52.466 0 95-42.536 95-95s-42.534-95-95-95-95 42.536-95 95 42.534 95 95 95zM356.174 250.542c30.326 0 55 24.672 55 55s-24.674 55-55 55-55-24.672-55-55 24.674-55 55-55z',
  video: 'M926.050 273.364c-9.556 0-20.574 3.8-32.278 11.812l-189.738 129.894v-151.068c0-20.342-15.192-37.094-34.838-39.63-1.694-0.218-3.408-0.372-5.162-0.372h-560.002c-1.754 0-3.468 0.152-5.162 0.372-19.646 2.538-34.838 19.29-34.838 39.628v496.002c0 22.092 17.91 40 40 40h560.004c13.808 0 25.98-6.998 33.168-17.638 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.922 1.2-1.862 1.722-2.836 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.612 4.704-12.010 4.704-18.81v-151.066l189.738 129.886c11.706 8.012 22.718 11.812 32.278 11.812 20.092 0 33.736-16.806 33.736-46.622v-384.032c0-29.816-13.644-46.62-33.738-46.62zM624.036 720h-480.004v-415.998h480.004v415.998zM879.788 632.3l-175.728-120.296 175.728-120.302v240.598zM240.688 663.534c-22.090 0-40-17.906-40-40v0c0-22.090 17.91-40 40-40v0c22.090 0 40.004 17.91 40.004 40v0c0 22.092-17.914 40-40.004 40v0z',
  speaker: 'M692.070 580.856c18.156-18.156 28.152-42.266 28.152-67.89-0.008-25.622-10.002-49.726-28.148-67.872-8.476-8.478-18.308-15.188-29-19.922-0.222-0.098-0.408-0.22-0.566-0.364-13.294-6.5-22.476-20.116-22.476-35.914 0-22.090 17.91-40 40-40 5.774 0 11.246 1.248 16.204 3.45 0.016 0.006 0.026 0.008 0.040 0.016 19.292 8.656 37.036 20.832 52.368 36.164 33.254 33.254 51.574 77.446 51.58 124.43 0.006 46.996-18.31 91.204-51.58 124.472-15.064 15.062-32.45 27.074-51.344 35.7-0.154 0.070-0.286 0.112-0.434 0.176-5.124 2.382-10.812 3.75-16.832 3.75-22.090 0-40-17.906-40-40 0-16.196 9.644-30.112 23.488-36.402 0.156-0.11 0.32-0.216 0.516-0.304 10.314-4.712 19.81-11.268 28.032-19.49zM861.778 275.386c-47.824-47.824-107.946-79.588-173.204-92.242-0.356-0.078-0.712-0.146-1.072-0.214-0.060-0.012-0.124-0.026-0.186-0.038-0.506-0.096-0.976-0.162-1.422-0.208-1.918-0.282-3.868-0.476-5.864-0.476-22.090 0-40 17.91-40 40 0 19.024 13.292 34.91 31.084 38.968 0.352 0.128 0.728 0.244 1.162 0.326 48.7 9.268 95.226 32.748 132.934 70.452 99.972 99.972 100.054 261.984-0.002 362.040-37.684 37.684-84.152 61.14-132.788 70.426-0.084 0.016-0.144 0.046-0.224 0.066-18.338 3.644-32.166 19.816-32.166 39.222 0 22.094 17.91 40 40 40 2.776 0 5.484-0.286 8.102-0.822 0.094-0.018 0.172-0.018 0.27-0.038 65.32-12.626 125.496-44.406 173.376-92.286 131.008-131.008 131.008-344.172 0-475.176zM525.988 159.516v704.968c0 22.090-17.906 40-40 40-12.73 0-24.046-5.966-31.374-15.234l-51.056-61.722v0.216l-122.14-147.666h-177.386c-22.090 0-40-17.906-40-40v0 0-256c0-5.22 1.030-10.194 2.85-14.766 0.104-0.266 0.184-0.542 0.294-0.804 0.39-0.924 0.844-1.812 1.3-2.702 0.134-0.26 0.242-0.538 0.382-0.794 0.246-0.456 0.54-0.878 0.804-1.324 6.972-11.726 19.734-19.61 34.368-19.61h177.386l173.13-209.238c7.324-9.316 18.67-15.324 31.44-15.324 22.092-0 40.002 17.91 40.002 40zM445.988 270.826l-126.708 153.252h-175.248v176h175.248l19.832 23.998h0.17l106.708 129.112v-482.362z',
  phone: '',
  flag: 'M168 960.060c-22.092 0-40-17.908-40-40v-816.36c0-22.092 17.908-40 40-40h687.698c16.178 0 30.764 9.746 36.956 24.694 6.192 14.946 2.77 32.15-8.67 43.59l-188.918 188.922 189.218 189.216c11.44 11.442 14.862 28.646 8.67 43.592-6.192 14.948-20.776 24.694-36.956 24.694h-647.998v341.654c0 22.090-17.908 39.998-40 39.998zM208 498.406h551.428l-149.218-149.216c-15.622-15.622-15.622-40.95 0-56.568l148.918-148.922h-551.128v354.706z',
  pin: 'M512 959.916c-13.36 0-25.84-6.672-33.262-17.782l-242.080-362.324c-0.12-0.176-0.236-0.356-0.354-0.536-36.394-54.5-55.63-118.042-55.63-183.804 0-182.696 148.632-331.324 331.326-331.324 182.696 0 331.328 148.628 331.328 331.324 0 60.71-16.554 119.98-47.906 171.652-0.758 1.528-1.618 3.016-2.578 4.45l-5.786 8.664c-0.054 0.082-0.112 0.164-0.168 0.246-0.042 0.070-0.104 0.16-0.148 0.23l-241.484 361.426c-7.422 11.106-19.898 17.778-33.258 17.778zM303.458 535.784l0.026 0.040c0.038 0.054 0.158 0.238 0.194 0.292l208.324 311.796 212.374-317.86c0.376-0.696 0.778-1.382 1.198-2.062 24.7-39.708 37.758-85.532 37.758-132.52 0-138.582-112.746-251.324-251.328-251.324s-251.326 112.742-251.326 251.324c0 50.054 14.674 98.39 42.432 139.782 0.114 0.176 0.232 0.356 0.348 0.532zM512 304.4c49.98 0 90.64 40.66 90.64 90.64 0 49.976-40.66 90.636-90.64 90.636s-90.64-40.66-90.64-90.636c0-49.98 40.66-90.64 90.64-90.64zM512 224.4c-94.242 0-170.64 76.398-170.64 170.64s76.398 170.636 170.64 170.636 170.64-76.394 170.64-170.636-76.398-170.64-170.64-170.64v0z',
  compass: 'M960 512c0-247.424-200.574-448-448-448-247.422 0-448 200.576-448 448s200.578 448 448 448c247.426 0 448-200.576 448-448zM251.786 772.214c-69.504-69.508-107.786-161.918-107.786-260.214 0-98.294 38.282-190.708 107.786-260.216 69.508-69.504 161.918-107.784 260.214-107.784s190.708 38.28 260.214 107.784c69.508 69.508 107.786 161.922 107.786 260.216 0 98.296-38.278 190.708-107.786 260.214s-161.922 107.786-260.214 107.786c-98.296 0-190.708-38.28-260.214-107.786zM565.742 565.74c-0.93 0.93-1.95 1.768-3.050 2.498l-237.586 158.392c-7.934 5.29-18.496 4.242-25.238-2.498-6.738-6.742-7.786-17.304-2.496-25.236l158.39-237.588c1.464-2.2 3.348-4.082 5.546-5.546l237.586-158.392c7.934-5.29 18.496-4.242 25.238 2.498 6.742 6.742 7.79 17.304 2.5 25.238l-158.394 237.586c-0.73 1.1-1.566 2.118-2.496 3.048zM386.122 637.878l151.054-100.704-50.352-50.352-100.702 151.056z',
  globe: 'M530.878 65.424c-6.748-1.014-13.090-1.424-18.878-1.424s-12.13 0.41-18.878 1.424c-238.662 9.9-429.122 206.48-429.122 447.576 0 247.424 200.578 448 448 448 247.426 0 448-200.576 448-448 0-241.098-190.456-437.678-429.122-447.576zM877.84 472.998h-158.508c-3.16-92.542-17.532-179.266-41.262-247.494-6.442-18.52-13.534-35.536-21.228-50.988 42.548 18.214 81.66 44.556 115.374 78.268 59.988 59.99 96.69 137.046 105.624 220.214zM512 880c-65.872 0-120.112-143.058-127.206-327h254.41c-7.092 183.942-61.332 327-127.204 327zM384.714 472.998c6.426-175.362 55.69-314.010 117.15-327.852 3.372-0.092 6.748-0.146 10.134-0.146s6.764 0.054 10.136 0.146c61.46 13.842 110.722 152.49 117.148 327.852h-254.568zM251.786 252.784c33.714-33.71 72.826-60.052 115.374-78.268-7.694 15.452-14.788 32.468-21.226 50.988-23.732 68.228-38.104 154.952-41.264 247.494h-158.508c8.934-83.168 45.636-160.224 105.624-220.214zM146.16 553h158.578c3.298 91.792 17.632 177.762 41.194 245.498 6.798 19.55 14.33 37.416 22.526 53.542-43.050-18.232-82.616-44.772-116.672-78.826-59.988-59.99-96.69-137.044-105.626-220.214zM772.214 773.214c-34.054 34.054-73.622 60.592-116.672 78.824 8.196-16.126 15.726-33.99 22.528-53.542 23.558-67.736 37.892-153.704 41.192-245.498h158.578c-8.934 83.172-45.634 160.226-105.626 220.216z',
  location: 'M960.002 512l-0.002-0.026c-0.006-114.646-43.746-229.288-131.216-316.758-174.954-174.958-458.614-174.958-633.566 0-174.958 174.954-174.958 458.612 0 633.568 87.45 87.45 202.056 131.186 316.674 131.214 0.022 0 0.042 0.002 0.064 0.002 0.014 0 0.026-0.002 0.042-0.002 114.654 0 229.308-43.738 316.788-131.214 87.472-87.47 131.21-202.114 131.216-316.76l0-0.024zM772.216 772.214c-60 59.998-137.072 96.702-220.258 105.626v-133.84c0-22.090-17.914-40-40.004-40s-40 17.91-40 40v133.83c-83.154-8.942-160.194-45.64-220.172-105.618-59.986-59.988-96.686-137.042-105.624-220.21h133.84c22.090 0 40-17.914 40-40.004s-17.91-40-40-40h-133.84c8.936-83.17 45.636-160.226 105.624-220.214 59.978-59.976 137.020-96.676 220.172-105.622v133.836c0 22.094 17.91 40 40 40s40.004-17.906 40.004-40v-133.844c83.184 8.926 160.258 45.63 220.258 105.63 59.986 59.986 96.688 137.042 105.624 220.212h-133.838c-22.094 0-40 17.91-40 40s17.906 40.004 40 40.004h133.838c-8.938 83.172-45.636 160.226-105.624 220.214z',
  search: 'M949.288 892.716l-201.952-201.954c53.558-66.010 85.672-150.13 85.672-241.758 0-212.082-171.926-384.004-384.004-384.004s-384.004 171.922-384.004 384.004c0 212.080 171.926 384.004 384.004 384.004 91.63 0 175.75-32.114 241.762-85.674l201.95 201.954c15.624 15.62 40.952 15.618 56.57 0 15.618-15.622 15.622-40.952 0.002-56.572zM234.042 663.968c-57.42-57.42-89.042-133.764-89.042-214.964 0-81.202 31.622-157.546 89.042-214.964s133.76-89.040 214.962-89.040 157.542 31.622 214.962 89.040c57.42 57.416 89.042 133.762 89.042 214.964s-31.622 157.544-89.042 214.964c-57.42 57.416-133.76 89.040-214.962 89.040s-157.544-31.622-214.962-89.040z',
  timer: 'M576 540.658c0 35.344-28.654 64-64 64s-64-28.656-64-64c0-20.27 9.432-38.324 24.134-50.050v-193.418c-0.004-22.092 17.906-40.002 40-40 22.090 0 40 17.906 40 40l-0.004 193.626c14.552 11.732 23.87 29.692 23.87 49.842zM928.32 543.934c0 229.79-186.28 416.066-416.068 416.066-229.786 0-416.064-186.278-416.064-416.066 0-216.26 164.998-393.958 375.97-414.134l0.188-49.794h-16.348c-22.092 0-40.002-17.91-39.998-40 0-22.090 17.906-40.004 40-40.004l112 0.002c22.090-0.002 39.998 17.91 40 40 0 22.090-17.908 40-40 39.998h-15.656l-0.19 49.782c77.246 7.352 148.33 35.812 207.422 79.564l41.854-41.856c15.622-15.622 40.95-15.618 56.57 0.002s15.622 40.948 0 56.568l-38.9 38.9c67.822 74.028 109.22 172.66 109.22 280.972zM848.32 543.934c0-89.768-34.958-174.16-98.432-237.634s-147.87-98.432-237.636-98.432c-89.766 0-174.158 34.958-237.632 98.432s-98.432 147.868-98.432 237.634c0 89.766 34.958 174.16 98.432 237.636 63.474 63.472 147.868 98.43 237.632 98.43 89.768 0 174.162-34.958 237.636-98.43 63.476-63.476 98.432-147.87 98.432-237.636z',
  time: 'M512 64c-247.424 0-448 200.578-448 448.004 0 247.422 200.576 448 448 448s448-200.578 448-448c0-247.424-200.576-448.004-448-448.004zM772.214 772.22c-69.508 69.504-161.918 107.786-260.214 107.786s-190.708-38.282-260.214-107.786c-69.508-69.508-107.786-161.918-107.786-260.214s38.278-190.708 107.786-260.214c69.508-69.504 161.918-107.786 260.214-107.786s190.708 38.278 260.214 107.786c69.504 69.508 107.786 161.918 107.786 260.214s-38.282 190.706-107.786 260.214zM768.004 517.004c0 22.090-17.91 40-40 40h-216c-5.384 0-10.508-1.078-15.196-3.008-0.124-0.046-0.254-0.086-0.376-0.132-0.61-0.262-1.188-0.57-1.782-0.86-0.572-0.278-1.16-0.528-1.718-0.828-0.204-0.114-0.39-0.246-0.594-0.364-0.918-0.516-1.832-1.050-2.704-1.64-0.086-0.058-0.164-0.128-0.254-0.188-10.492-7.21-17.382-19.286-17.382-32.98v-285c0-22.094 17.91-40 40.004-40 22.088 0 40 17.906 40 40v244.996h175.996c22.094 0 40.002 17.916 40.006 40.004z',
  dashboard: 'M567.594 674.956c-17.674 30.61-56.816 41.098-87.426 23.426-30.61-17.676-41.1-56.816-23.426-87.426 10.134-17.554 27.33-28.472 45.928-31.278l146.974-254.57c11.042-19.132 35.506-25.688 54.64-14.64 19.13 11.046 25.688 35.508 14.64 54.64l-147.084 254.75c6.736 17.434 5.826 37.648-4.246 55.098zM512.002 209.26c-98.296 0-190.708 38.28-260.214 107.786s-107.786 161.92-107.786 260.214c0 81.428 26.252 158.786 74.768 222.452 88.404-30.49 188.406-46.448 292.732-46.448 104.662 0 204.926 16.046 293.524 46.716 48.65-63.712 74.976-141.164 74.976-222.72 0-98.294-38.28-190.708-107.786-260.214s-161.918-107.786-260.214-107.786zM512.002 129.26c247.424 0 448 200.578 448 448 0 124.132-50.494 236.468-132.054 317.602-87.096-38.574-196.984-61.598-316.446-61.598-119.146 0-228.772 22.902-315.758 61.296-81.376-81.114-131.742-193.324-131.742-317.3 0-247.422 200.576-448 448-448v0z',
  hourglass: 'M511.926 801.946c-22.090 0-40-17.906-40-40v0c0-22.090 17.91-40 40-40v0c22.090 0 40.004 17.91 40.004 40v0c0 22.094-17.914 40-40.004 40v0zM831.682 915.242c0.192 1.582 0.318 3.186 0.318 4.82 0 22.090-17.908 40-40 40h-560c-22.092 0-40-17.914-40-40 0-2.438 0.252-4.812 0.67-7.128 2.36-53.636 18.034-105.7 45.852-151.554 0.734-1.476 1.562-2.912 2.492-4.296l5.582-8.364c0.054-0.080 0.11-0.158 0.164-0.238 0.042-0.068 0.098-0.156 0.144-0.222l157.704-236.036-158.5-237.228c-0.116-0.17-0.23-0.342-0.34-0.516-32.842-49.178-51.11-105.994-53.368-165.044-0.238-1.762-0.402-3.546-0.402-5.374 0-22.090 17.908-40 40-40h560c22.092 0 40 17.914 40 40 0 2.056-0.204 4.064-0.504 6.038-2.194 54.020-17.886 106.48-45.894 152.648-0.734 1.472-1.562 2.91-2.492 4.294l-5.582 8.366c-0.054 0.078-0.11 0.156-0.164 0.236-0.042 0.068-0.098 0.154-0.144 0.222l-157.734 236.082 158.468 237.182c0.116 0.168 0.23 0.344 0.34 0.516 32.946 49.33 51.226 106.346 53.39 165.596zM749.958 144.060h-475.99c6.138 31.304 18.384 61.124 36.354 87.916 0.118 0.17 0.23 0.344 0.342 0.514l0.024 0.038c0.036 0.054 0.15 0.23 0.186 0.284l54.286 81.25h293.596l58.196-87.1c0.366-0.67 0.75-1.334 1.154-1.99 15.492-24.916 26.228-52.324 31.852-80.912zM497.528 512.178l-0.032 0.046 14.426 21.592 93.378-139.756h-186.692l78.92 118.118zM305.96 799.156c-15.498 24.91-26.234 52.318-31.856 80.906h476.052c-6.138-31.304-18.384-61.122-36.354-87.918-0.118-0.168-0.23-0.344-0.342-0.512l-0.024-0.040c-0.036-0.050-0.15-0.23-0.186-0.282l-140.242-209.902-28.98 43.374c-7.166 10.72-19.21 17.162-32.11 17.162-12.896 0-24.942-6.442-32.11-17.166l-28.76-43.044-143.938 215.428c-0.36 0.674-0.744 1.338-1.15 1.994z',
  play: 'M878.78 477.856l-591.884-341.722c-9.464-5.464-18.426-8.050-26.386-8.048-19.516 0.002-33.002 15.546-33.002 42.338v683.446c0 26.792 13.482 42.338 33.002 42.338 7.96 0 16.924-2.586 26.386-8.048l591.884-341.722c32.664-18.864 32.664-49.724 0-68.582z',
  stop: 'M960 512c0-247.424-200.574-448-448-448-247.422 0-448 200.576-448 448s200.578 448 448 448c247.426 0 448-200.576 448-448zM251.786 772.214c-69.504-69.508-107.786-161.918-107.786-260.214 0-98.294 38.282-190.708 107.786-260.216 69.508-69.504 161.918-107.784 260.214-107.784s190.708 38.28 260.214 107.784c69.508 69.508 107.786 161.922 107.786 260.216 0 98.296-38.278 190.708-107.786 260.214s-161.922 107.786-260.214 107.786c-98.296 0-190.708-38.28-260.214-107.786zM664 704h-304c-22.092 0-40-17.908-40-40v-304c0-22.092 17.908-40 40-40h304c22.092 0 40 17.908 40 40v304c0 22.092-17.908 40-40 40zM400 624h224v-224h-224v224z',
  email: 'M960.032 268.004c0.748-10.040-2.246-20.364-9.226-28.684-5.984-7.132-13.938-11.62-22.394-13.394-0.13-0.026-0.268-0.066-0.396-0.092-1.082-0.22-2.172-0.376-3.272-0.5-0.25-0.032-0.492-0.080-0.742-0.102-1.028-0.096-2.052-0.136-3.090-0.156-0.292-0.002-0.582-0.042-0.876-0.042h-816.008c-21.416 0-38.848 16.844-39.898 38-0.034 0.628-0.092 1.256-0.096 1.89 0 0.034-0.006 0.074-0.006 0.114 0 0.050 0.008 0.102 0.008 0.152v495.692c0 0.054-0.008 0.106-0.008 0.156 0 22.090 17.91 40 40 40h816.004c13.808 0 25.98-6.996 33.17-17.636 0.1-0.148 0.182-0.312 0.28-0.458 0.606-0.93 1.196-1.868 1.722-2.84 0.046-0.082 0.080-0.172 0.124-0.258 2.992-5.604 4.704-12.008 4.704-18.804v0 0-493.038zM144.032 350.156l339.946 281.188c6.568 6.434 14.918 10.168 23.564 11.122 0.16 0.024 0.32 0.050 0.48 0.066 0.838 0.082 1.676 0.114 2.518 0.14 0.496 0.020 0.994 0.058 1.492 0.058s0.996-0.042 1.492-0.058c0.842-0.028 1.68-0.058 2.518-0.14 0.16-0.016 0.32-0.042 0.48-0.066 8.646-0.958 16.996-4.688 23.564-11.122l339.946-281.206v370.894h-736v-370.876zM215.066 305.030h593.91l-296.946 245.422-296.964-245.422z',
  comment: 'M288 378.668h448c22.094 0 40 17.906 40 40 0 22.090-17.906 40-40 40h-448c-22.090 0-40-17.91-40-40s17.91-40 40-40zM736 565.334h-448c-22.090 0-40 17.91-40 40 0 22.094 17.91 40 40 40h448c22.094 0 40-17.906 40-40 0-22.090-17.906-40-40-40zM960 232.004v560c0 6.804-1.714 13.196-4.704 18.812-0.042 0.082-0.078 0.172-0.124 0.254-0.524 0.976-1.11 1.914-1.722 2.836-0.098 0.152-0.18 0.314-0.282 0.458-7.188 10.64-19.36 17.636-33.168 17.636h-519.766l-114.292 114.286c-8.036 8.046-18.644 11.91-29.18 11.67-0.292 0.008-0.582 0.046-0.876 0.046-22.090 0-40-17.91-40-40v-86.004h-111.886c-22.090 0-40-17.906-40-40v0-560c0-20.34 15.192-37.094 34.84-39.632 1.692-0.214 3.406-0.368 5.16-0.368h816c1.754 0 3.468 0.154 5.164 0.368 19.644 2.542 34.836 19.296 34.836 39.638zM880 272h-736v480h736v-480z',
  link: 'M743.52 529.234c5.616-5.616 83.048-83.046 88.462-88.46 30.944-32.778 47.97-75.636 47.97-120.792 0-47.048-18.304-91.26-51.542-124.484-33.228-33.22-77.43-51.516-124.458-51.516-45.024 0-87.792 16.94-120.536 47.72l-104.458 104.456c-30.792 32.738-47.734 75.512-47.734 120.548 0 41.916 14.576 81.544 41.248 113.196 3.264 3.876 6.666 7.664 10.292 11.29 4.258 4.258 8.704 8.262 13.304 12.022 0.054 0.080 0.096 0.152 0.148 0.232 9.572 7.308 15.778 18.804 15.778 31.776 0 22.094-17.914 40-40.004 40-8.542 0-16.442-2.696-22.938-7.26-2.746-1.93-20.622-17.43-30.35-28.050-0.008-0.010-0.018-0.018-0.026-0.028-4.992-5.432-13.234-15.23-18.552-22.65s-16.556-25.872-17.036-26.736c-0.7-1.262-2.974-5.526-3.422-6.39-0.69-1.334-6.118-12.67-6.114-12.67-14.342-31.96-22.332-67.4-22.332-104.728 0-60.826 21.198-116.648 56.58-160.544 0.252-0.314 4.61-5.594 6.594-7.866 0.304-0.35 5.038-5.636 7.16-7.874 0.252-0.268 105.86-105.874 106.128-106.126 45.902-43.584 107.958-70.314 176.264-70.314 141.382 0 255.998 114.5 255.998 256 0 68.516-26.882 130.688-70.652 176.61-0.144 0.148-109.854 109.546-112.090 111.528-0.958 0.848-5.072 4.352-5.072 4.352-6.448 5.434-13.132 10.592-20.1 15.378 0.412-6.836 0.644-13.702 0.644-20.6 0-26.46-3.108-52.206-8.918-76.918l-0.236-1.102zM616.144 767.82c35.382-43.896 56.58-99.718 56.58-160.544 0-37.328-7.99-72.768-22.332-104.728 0.004 0 0.006-0.002 0.010-0.004-0.258-0.576-0.538-1.14-0.8-1.714-0.686-1.498-2.894-6.112-3.296-6.93-0.668-1.344-2.952-5.732-3.386-6.604-3.48-6.982-8.708-15.126-9.49-16.366-0.498-0.792-0.996-1.58-1.502-2.364-0.834-1.29-15.364-22.066-26.656-34.466-0.008-0.010-0.018-0.018-0.026-0.028-7.056-8.448-24.932-24.198-30.35-28.050-6.47-4.602-14.396-7.26-22.938-7.26-22.090 0-40.004 17.906-40.004 40 0 12.97 6.206 24.466 15.778 31.776 0.052 0.080 0.094 0.152 0.148 0.232 4.602 3.76 20.334 19.434 23.598 23.31 26.672 31.65 41.248 71.28 41.248 113.196 0 45.038-16.944 87.81-47.734 120.548l-104.458 104.456c-32.742 30.782-75.512 47.72-120.536 47.72-47.028 0-91.228-18.294-124.458-51.516-33.236-33.224-51.542-77.436-51.542-124.484 0-45.154 17.028-88.014 47.97-120.792 5.414-5.414 40.812-40.812 68.958-68.958 7.176-7.176 13.888-13.886 19.504-19.502v-0.002c-0.356-1.562-0.246-1.096-0.246-1.096-5.81-24.712-8.918-50.458-8.918-76.918 0-6.898 0.232-13.764 0.644-20.6-6.966 4.788-20.1 15.33-20.1 15.33-0.734 0.62-9.518 8.388-11.68 10.45-0.16 0.154-105.338 105.33-105.482 105.478-43.77 45.922-70.652 108.094-70.652 176.61 0 141.5 114.616 256 255.998 256 68.306 0 130.362-26.73 176.264-70.314 0.27-0.254 105.876-105.86 106.128-106.126 0.004-0.002 13.506-15.426 13.758-15.74z',
  paperclip: 'M824.25 369.354c68.146-70.452 67.478-182.784-2.094-252.354-70.296-70.296-184.266-70.296-254.558 0-0.014 0.012-0.028 0.026-0.042 0.042-0.004 0.002-0.006 0.004-0.010 0.008l-433.144 433.142c-0.036 0.036-0.074 0.068-0.11 0.106-0.054 0.052-0.106 0.11-0.16 0.162l-2.668 2.67c-0.286 0.286-0.528 0.596-0.8 0.888-43.028 44.88-66.664 103.616-66.664 165.986 0 64.106 24.962 124.376 70.292 169.704 45.328 45.33 105.598 70.292 169.706 70.292 50.612 0 98.822-15.57 139.186-44.428 4.932-1.952 9.556-4.906 13.544-8.894l16.802-16.802c0.056-0.056 0.116-0.112 0.172-0.168 0.038-0.038 0.074-0.076 0.112-0.116l289.010-289.014c15.622-15.618 15.62-40.942 0-56.56s-40.948-15.62-56.566 0l-289.124 289.122c-62.482 62.484-163.792 62.484-226.274 0-62.484-62.482-62.484-163.79 0-226.272h-0.002l433.134-433.12c0.058-0.060 0.112-0.122 0.172-0.18 38.99-38.99 102.43-38.99 141.42 0 38.992 38.99 38.99 102.432 0 141.422-0.058 0.060-0.122 0.114-0.18 0.17l0.006 0.006-280.536 280.534c-0.002-0.002-0.002-0.004-0.004-0.006l-79.978 79.98c-0.010 0.010-0.016 0.020-0.028 0.028-0.008 0.012-0.018 0.018-0.028 0.028l-0.064 0.062c-15.622 15.624-40.944 15.624-56.562 0-15.624-15.62-15.624-40.944-0.002-56.566l0.062-0.062c0.010-0.010 0.018-0.020 0.028-0.028 0.008-0.012 0.020-0.018 0.028-0.028l79.98-79.978c-0.002-0.002-0.004-0.002-0.006-0.004l136.508-136.512c15.622-15.62 15.62-40.944-0.002-56.562-15.618-15.62-40.946-15.62-56.564 0l-219.342 219.344c-1.284 1.284-2.42 2.652-3.494 4.052-40.4 47.148-38.316 118.184 6.322 162.824 44.64 44.638 115.674 46.722 162.82 6.324 1.402-1.072 2.772-2.21 4.054-3.494l2.83-2.832c0.002 0 0.002 0 0.002 0s0 0 0 0l360.54-360.54c0.058-0.056 0.12-0.114 0.18-0.172 0.050-0.050 0.098-0.106 0.15-0.158l0.994-0.994c0.34-0.338 0.63-0.702 0.952-1.052z',
  box: 'M960.016 408.080c0-0.672-0.046-1.342-0.078-2.014-0.032-0.594-0.044-1.19-0.102-1.782-0.068-0.726-0.186-1.448-0.294-2.17-0.080-0.54-0.144-1.080-0.248-1.616-0.138-0.724-0.326-1.442-0.506-2.16-0.134-0.534-0.252-1.070-0.408-1.6-0.196-0.662-0.436-1.314-0.668-1.968-0.204-0.582-0.396-1.166-0.628-1.74-0.226-0.56-0.494-1.11-0.75-1.662-0.3-0.656-0.598-1.312-0.934-1.954-0.242-0.454-0.514-0.894-0.774-1.342-0.414-0.716-0.83-1.43-1.292-2.124-0.256-0.382-0.538-0.752-0.806-1.128-0.514-0.716-1.036-1.428-1.602-2.116-0.090-0.11-0.162-0.226-0.254-0.336-0.244-0.292-0.516-0.542-0.768-0.826-0.534-0.6-1.068-1.198-1.644-1.772-0.48-0.478-0.982-0.924-1.48-1.376-0.354-0.316-0.674-0.658-1.040-0.964l-405.788-335.666c-6.568-6.436-14.918-10.166-23.564-11.124-0.16-0.022-0.32-0.050-0.48-0.066-0.838-0.082-1.676-0.11-2.518-0.14-0.496-0.020-0.994-0.058-1.492-0.058s-0.996 0.040-1.492 0.058c-0.842 0.028-1.68 0.058-2.518 0.14-0.16 0.016-0.32 0.044-0.48 0.066-8.646 0.956-16.996 4.688-23.564 11.124l-405.662 335.542c-7.13 5.982-11.616 13.93-13.392 22.382-0.032 0.14-0.070 0.278-0.1 0.42-0.212 1.072-0.37 2.152-0.494 3.238-0.032 0.258-0.078 0.51-0.106 0.77-0.086 0.89-0.114 1.786-0.138 2.68-0.014 0.39-0.052 0.78-0.054 1.17 0 0.040-0.006 0.074-0.006 0.114v204.856c-0.958 12.434 3.854 25.128 14.134 33.754l405.662 335.54c6.568 6.438 14.918 10.168 23.564 11.124 0.16 0.020 0.32 0.050 0.48 0.066 0.838 0.082 1.676 0.114 2.518 0.14 0.496 0.020 0.994 0.058 1.492 0.058 0.054 0 0.11-0.008 0.162-0.008 0.042 0 0.084 0.008 0.126 0.008 0.342 0 0.672-0.042 1.012-0.050 0.062-0.004 0.126-0.008 0.192-0.008 0.134-0.004 0.27-0.020 0.402-0.024 10.602-0.422 20.136-4.938 27.054-12.046l404.526-334.624c0.084-0.066 0.166-0.136 0.248-0.204l0.12-0.098c0.17-0.144 0.314-0.304 0.48-0.45 0.814-0.704 1.614-1.43 2.37-2.2 0.296-0.3 0.562-0.624 0.85-0.934 0.602-0.652 1.2-1.308 1.756-2 0.3-0.372 0.566-0.758 0.852-1.136 0.504-0.672 1.002-1.344 1.462-2.046 0.242-0.368 0.458-0.75 0.686-1.124 0.458-0.754 0.908-1.508 1.316-2.292 0.164-0.312 0.304-0.636 0.46-0.954 0.426-0.872 0.832-1.746 1.196-2.652 0.092-0.23 0.168-0.464 0.256-0.696 0.376-0.996 0.728-2 1.026-3.032 0.042-0.148 0.074-0.296 0.114-0.442 0.306-1.102 0.578-2.218 0.79-3.356 0.016-0.082 0.024-0.164 0.038-0.246 0.212-1.184 0.382-2.378 0.49-3.598v0c0.1-1.156 0.176-2.32 0.176-3.5v-204.86c0.024-0.318 0.022-0.638 0.040-0.958 0.026-0.668 0.074-1.338 0.074-2.008zM143.89 493.202l328.14 271.42v103.902l-328.14-271.18v-104.142zM552.032 764.402l327.868-271.212v103.88l-327.868 270.972v-103.64zM511.898 122.66l345.348 285.42-345.348 285.42-345.374-285.42 345.374-285.42z',
  structure: 'M954.324 833.3c0.208-0.558 0.388-1.128 0.586-1.692 0.3-0.868 0.608-1.734 0.882-2.61 0.234-0.746 0.444-1.5 0.66-2.25 0.212-0.734 0.432-1.464 0.624-2.204 0.204-0.766 0.378-1.54 0.562-2.308 0.18-0.766 0.366-1.528 0.528-2.292 0.146-0.692 0.272-1.386 0.402-2.082 0.168-0.89 0.332-1.778 0.476-2.668 0.090-0.566 0.164-1.136 0.244-1.704 0.148-1.058 0.29-2.118 0.404-3.18 0.042-0.422 0.080-0.852 0.12-1.274 0.118-1.23 0.212-2.46 0.282-3.696 0.018-0.304 0.030-0.606 0.042-0.906 0.062-1.36 0.098-2.718 0.104-4.082 0-0.114 0.008-0.226 0.008-0.34 0-0.128-0.010-0.258-0.010-0.39-0.006-1.368-0.042-2.734-0.104-4.102-0.014-0.296-0.030-0.594-0.044-0.89-0.070-1.246-0.166-2.492-0.284-3.738-0.042-0.434-0.084-0.864-0.128-1.292-0.116-1.050-0.25-2.098-0.4-3.144-0.088-0.628-0.18-1.258-0.282-1.882-0.13-0.8-0.276-1.598-0.428-2.394-0.162-0.868-0.332-1.73-0.518-2.594-0.116-0.524-0.24-1.046-0.364-1.57-0.264-1.128-0.542-2.25-0.846-3.36-0.070-0.254-0.144-0.504-0.214-0.754-11.38-40.382-48.464-69.996-92.488-69.996-3.066 0-6.096 0.16-9.088 0.442l-264.576-458.262c21.080-29.698 24.3-70.13 4.9-103.732-12.596-21.816-32.458-36.812-54.764-43.724-0.062-0.020-0.124-0.036-0.186-0.054-1.394-0.43-2.798-0.83-4.21-1.196-0.296-0.076-0.596-0.142-0.894-0.216-1.208-0.3-2.422-0.586-3.642-0.84-0.384-0.082-0.774-0.148-1.16-0.224-1.168-0.228-2.338-0.444-3.514-0.626-0.384-0.060-0.776-0.112-1.162-0.168-1.208-0.174-2.416-0.332-3.63-0.46-0.35-0.038-0.7-0.066-1.048-0.1-1.27-0.12-2.54-0.218-3.814-0.29-0.32-0.018-0.642-0.032-0.964-0.044-1.294-0.058-2.594-0.094-3.892-0.1-0.166 0-0.328-0.012-0.492-0.012-0.19 0-0.376 0.014-0.564 0.014-1.21 0.008-2.42 0.040-3.63 0.092-0.494 0.022-0.986 0.046-1.478 0.074-0.992 0.060-1.986 0.136-2.978 0.226-0.722 0.064-1.442 0.134-2.16 0.214-0.696 0.080-1.392 0.17-2.090 0.266-1.014 0.136-2.026 0.286-3.032 0.452-0.352 0.060-0.704 0.124-1.054 0.19-44.97 8.028-79.122 47.302-79.122 94.582 0 20.756 6.602 39.958 17.79 55.67l-264.58 458.26c-2.954-0.274-5.94-0.434-8.962-0.434-53.078 0-96.11 43.032-96.11 96.11 0 53.082 43.032 96.11 96.11 96.11 38.8 0 72.208-23.004 87.386-56.11l529.202-0.004c0.138 0.304 0.292 0.606 0.436 0.91 0.226 0.48 0.456 0.958 0.69 1.434 0.474 0.968 0.966 1.93 1.476 2.882 0.214 0.402 0.432 0.8 0.65 1.2 0.314 0.566 0.604 1.14 0.93 1.708 0.284 0.488 0.59 0.958 0.88 1.442 0.122 0.2 0.244 0.398 0.37 0.602 27.086 44.372 84.766 59.278 130.040 33.136 18.864-10.89 32.624-27.214 40.478-45.852 0.054-0.132 0.104-0.266 0.158-0.398 0.518-1.248 1.020-2.506 1.486-3.776zM238.414 744.282l264.542-458.204c0.424 0.042 0.85 0.064 1.276 0.098 0.668 0.056 1.334 0.112 2.004 0.152 0.652 0.040 1.306 0.066 1.96 0.092 1.122 0.046 2.244 0.076 3.368 0.084 0.146 0.002 0.292 0.012 0.438 0.012 0.168 0 0.334-0.012 0.502-0.014 1.436-0.004 2.874-0.040 4.31-0.108 0.088-0.006 0.176-0.010 0.262-0.014 1.376-0.070 2.75-0.168 4.124-0.296l264.596 458.298c-3.48 4.894-6.514 10.122-9.042 15.636h-529.226c-2.546-5.55-5.602-10.814-9.114-15.736z',
  commit: 'M984.032 472h-186.808c-19.474-140.12-139.74-248-285.222-248s-265.748 107.88-285.222 248h-186.746c-22.092 0-40 17.912-40 40.002 0 22.092 17.91 40 40 40h186.746c19.476 140.122 139.74 247.998 285.222 247.998s265.746-107.876 285.222-247.998h186.808c22.092 0 40-17.91 40-40s-17.908-40.002-40-40.002zM512 720c-114.692 0-208-93.308-208-208s93.308-208 208-208 208 93.308 208 208-93.308 208-208 208z',
  cpu: 'M392.016 672.016h240.032c22.092 0 40-17.908 40-40v-240.032c0-22.092-17.908-40-40-40h-240.032c-22.092 0-40 17.908-40 40v240.032c0 22.092 17.908 40 40 40zM432.016 431.984h160.032v160.032h-160.032v-160.032zM864.032 424h71.98c22.094 0 40.004-17.906 40.004-40 0-22.092-17.906-40-40-40h-71.984v-143.968c0-22.092-17.908-40-40-40h-144v-72.012c0-22.094-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v72.016h-176v-72.012c0-22.094-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v72.016h-144c-22.092 0-40 17.908-40 40v143.968h-71.984c-22.094 0-40 17.908-40 40s17.91 40 40 40h71.984v176h-71.984c-22.094 0-40 17.908-40 40s17.91 40 40 40h71.984v144.030c0 22.092 17.908 40 40 40h144v71.954c0 22.094 17.906 40 40 40s40-17.91 40-40v-71.954h176v71.954c0 22.094 17.906 40 40 40s40-17.91 40-40v-71.954h144c22.092 0 40-17.908 40-40v-144.030h71.98c22.094 0 40.004-17.906 40.004-40 0-22.092-17.906-40-40-40h-71.984v-176zM784.032 784.032h-143.692c-0.104 0-0.204-0.016-0.308-0.016s-0.206 0.016-0.308 0.016h-127.382c-0.104 0-0.204-0.016-0.308-0.016s-0.206 0.016-0.308 0.016h-127.382c-0.104 0-0.204-0.016-0.308-0.016s-0.206 0.016-0.308 0.016h-143.696v-544h544v544z',
  memory: 'M320.032 416.032v-152.968c0-22.094 17.91-40 40-40 22.094 0 40 17.91 40 40.004v152.964c0 22.090-17.906 40-40 40s-40-17.908-40-40zM512 456.032c22.094 0 40-17.91 40-40v-152.964c0-22.094-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v152.968c0 22.092 17.908 40 40 40zM664.032 456.032c22.094 0 40-17.91 40-40v-82.996c0-22.094-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v83c0 22.092 17.906 40 40 40zM864.018 316.616v603.418c0 0.004 0 0.004 0 0.004 0 6.798-1.71 13.198-4.704 18.808-0.044 0.084-0.078 0.172-0.124 0.254-0.524 0.976-1.112 1.914-1.722 2.836-0.098 0.15-0.18 0.312-0.282 0.46-7.188 10.638-19.36 17.634-33.168 17.634h-623.99c-22.090 0-40-17.908-40-40v-343.574c-0.002-0.142-0.022-0.282-0.022-0.426 0-0.142 0.020-0.282 0.022-0.426v-471.574c0-20.34 15.192-37.092 34.838-39.63 1.694-0.216 3.408-0.37 5.162-0.37l411.254 0.052c10.594-0.286 21.282 3.58 29.368 11.668l211.672 212.206c7.906 7.908 11.792 18.298 11.696 28.66zM240.026 144.034v391.998h543.99v-203.27l-188.252-188.728h-355.738zM784.016 880.032v-264h-543.99v264h543.99z',
  outbox: 'M960.062 616v304c0 1.382-0.070 2.746-0.208 4.090-2.046 20.172-19.080 35.91-39.792 35.91h-816c-22.090 0-40-17.906-40-40v-304c0-22.090 17.91-40 40-40s40 17.91 40 40v264h736v-264c0-22.090 17.91-40 40-40s40 17.912 40 40zM664.732 200.168l-124.41-124.41c-0.014-0.014-0.024-0.028-0.038-0.042-3.57-3.57-7.664-6.284-12.018-8.222-5.316-2.368-11.028-3.54-16.742-3.47-0.14-0.002-0.276-0.020-0.414-0.020-13.552 0-25.512 6.756-32.748 17.072l-119.1 119.092c-15.622 15.62-15.618 40.948 0.002 56.57 15.622 15.62 40.95 15.62 56.568 0l55.276-55.276v462.54c0 22.094 17.912 40 40.002 40 22.092 0 40-17.91 40-40v-464.314l57.052 57.052c15.622 15.624 40.948 15.62 56.568 0 15.628-15.624 15.628-40.952 0.002-56.572z',
  share: 'M896.006 920c0 22.090-17.91 40-40 40h-688.006c-22.090 0-40-17.906-40-40v-549.922c-0.838-3.224-1.33-6.588-1.33-10.072 0-22.090 17.908-40.004 40-40.004h178.66c22.092 0.004 40 17.914 40 40.004 0 22.088-17.908 40-40 40h-137.33v479.996h607.998v-479.996h-138.658c-22.090 0-40-17.912-40-40 0-22.090 17.906-40.004 40-40.004h178.658c22.090 0 40 17.91 40 40v559.844c0 0.050 0.008 0.102 0.008 0.154zM665.622 200.168l-124.452-124.45c-8.042-8.042-18.65-11.912-29.186-11.674-1.612-0.034-3.222 0-4.828 0.16-0.558 0.054-1.098 0.16-1.648 0.238-0.742 0.104-1.484 0.192-2.218 0.338-0.656 0.13-1.29 0.31-1.934 0.472-0.622 0.154-1.244 0.292-1.86 0.476-0.64 0.196-1.258 0.436-1.886 0.66-0.602 0.216-1.208 0.414-1.802 0.66-0.598 0.248-1.17 0.54-1.754 0.814-0.598 0.282-1.202 0.546-1.788 0.86-0.578 0.312-1.13 0.664-1.694 1-0.552 0.332-1.116 0.644-1.654 1.006-0.67 0.448-1.3 0.942-1.942 1.426-0.394 0.302-0.806 0.576-1.196 0.894-1.046 0.858-2.052 1.768-3.008 2.726l-124.398 124.39c-15.622 15.62-15.618 40.948 0.002 56.57 15.622 15.62 40.95 15.62 56.568 0l56.164-56.166v439.426c0 22.094 17.912 40 40.002 40 22.092 0 40-17.91 40-40v-441.202l57.942 57.942c15.622 15.624 40.948 15.62 56.568 0 15.626-15.618 15.626-40.946 0.002-56.566z',
  button: 'M644.634 802.32c-4.558 5.434-10.254 9.328-16.446 11.672l0.008 0.024-45.628 16.606 27.54 75.66c7.554 20.756-3.148 43.71-23.906 51.266s-43.714-3.146-51.27-23.906l-27.54-75.656-47.63 17.29c-6.020 1.956-12.586 2.518-19.254 1.342-21.75-3.836-36.282-24.582-32.45-46.34l30.57-173.328c2.55-14.476 12.61-25.714 25.458-30.508 0.292-0.118 0.586-0.23 0.878-0.34 0.238-0.084 0.476-0.168 0.718-0.246 12.942-4.624 27.91-2.492 39.196 6.98l134.824 113.13c16.932 14.2 19.144 39.432 4.932 56.354zM960.002 664v-368.082c0-22.092-17.908-40-40-40h-816c-22.092 0-40 17.908-40 40l-0.292 368.238c0 22.092 17.908 40 40 40h240.292c22.092 0 40-17.908 40-40s-17.908-40-40-40h-200.292l0.292-288.238h736v288.082h-200c-22.092 0-40 17.908-40 40s17.908 40 40 40h240c22.092 0 40-17.908 40-40z',
  check: 'M948.598 199.75c-15.622-15.618-40.95-15.618-56.57 0l-535.644 535.644-224.060-224.062c-15.624-15.624-40.954-15.62-56.57 0-15.624 15.62-15.624 40.948 0 56.568l251.574 251.574c0.252 0.266 0.472 0.55 0.734 0.812 7.82 7.82 18.072 11.724 28.322 11.714 10.25 0.010 20.502-3.894 28.322-11.714 0.248-0.248 0.456-0.518 0.698-0.77l563.196-563.202c15.618-15.618 15.618-40.94-0.002-56.564z',
  form: 'M948.362 178.828l-471.082 470.086c-0.24 0.25-0.45 0.52-0.698 0.77-7.82 7.82-18.070 11.722-28.32 11.712-10.25 0.010-20.504-3.892-28.324-11.712-0.262-0.262-0.48-0.546-0.734-0.812l-221.736-221.738c-15.624-15.622-15.624-40.95 0-56.566 15.618-15.622 40.946-15.624 56.57 0l194.224 194.222 443.53-442.528c15.622-15.618 40.95-15.618 56.57 0 15.62 15.62 15.62 40.946 0 56.566zM98.372 128.448c-18.926 0-34.266 15.342-34.266 34.268v699.032c0 18.926 15.34 34.266 34.266 34.266h699.032c18.926 0 34.266-15.34 34.266-34.266v-430.588c0 0 0.002-1.184 0.002-1.788 0-22.090-17.914-40-40.004-40s-40 17.91-40 40c0 0.288 0.002 386.64 0.002 386.64h-607.562v-607.564h600.002c22.090-0.002 40.002-17.906 40.002-40 0-22.090-17.914-40-40.004-40z',
  admin: 'M919.596 847.534h-88.414v-467.716l88.75-0.044c13.688-0.132 26.958-7.25 34.294-19.96 11.044-19.13 4.49-43.596-14.642-54.64l-407.904-235.676c-0.44-0.254-0.894-0.45-1.34-0.684-0.542-0.29-1.084-0.578-1.638-0.84-0.696-0.328-1.4-0.62-2.108-0.904-0.478-0.194-0.954-0.388-1.44-0.56-0.78-0.282-1.564-0.524-2.352-0.754-0.442-0.126-0.878-0.256-1.324-0.37-0.808-0.206-1.618-0.376-2.43-0.528-0.468-0.088-0.934-0.174-1.404-0.246-0.768-0.116-1.534-0.204-2.302-0.274-0.554-0.052-1.108-0.096-1.664-0.124-0.672-0.034-1.34-0.044-2.012-0.044-0.67 0-1.338 0.012-2.010 0.044-0.556 0.030-1.11 0.072-1.664 0.124-0.77 0.070-1.536 0.158-2.302 0.274-0.468 0.072-0.938 0.158-1.402 0.246-0.814 0.152-1.624 0.322-2.432 0.528-0.444 0.114-0.882 0.242-1.322 0.37-0.79 0.23-1.574 0.472-2.356 0.754-0.484 0.172-0.958 0.368-1.438 0.56-0.708 0.286-1.41 0.576-2.11 0.904-0.554 0.262-1.094 0.55-1.636 0.84-0.446 0.234-0.9 0.43-1.34 0.684l-407.906 235.672c-19.128 11.044-25.686 35.51-14.64 54.64 7.34 12.71 20.606 19.828 34.292 19.96v0.044h89.842v467.716h-89.474c-22.090 0-40 17.91-40 40s17.91 40 40 40h128.276c0.402 0.012 0.794 0.060 1.2 0.060s0.796-0.048 1.2-0.060h183.602c0.402 0.012 0.794 0.060 1.2 0.060s0.796-0.048 1.2-0.060h183.602c0.402 0.012 0.794 0.060 1.2 0.060s0.796-0.048 1.2-0.060h313.154c22.098 0 40-17.91 40-40-0.006-22.090-17.914-39.996-40.006-39.996zM751.182 847.534h-105.94v-467.716h105.94v467.716zM252.93 299.816l258.736-149.486 258.738 149.486h-517.474zM565.242 379.816v467.716h-106v-467.716h106zM273.242 379.816h106v467.716h-106v-467.716z',
  paragraph: 'M728.032 96.032h-116.98c-0.026 0-0.050-0.004-0.076-0.004s-0.050 0.004-0.076 0.004h-199.848c-0.026 0-0.050-0.004-0.076-0.004s-0.050 0.004-0.076 0.004h-31.924c-123.712 0-224 100.292-224 224 0 121.032 95.994 219.628 216 223.842v344.158c0 22.092 17.91 40 40 40 22.086 0 40-17.908 40-40v-712h120v712c0 22.092 17.91 40 40 40 22.086 0 40-17.908 40-40v-712h77.056c22.094 0 40-17.91 40-40 0-22.092-17.91-40-40-40z',
  bell: 'M901.344 760.018l-57.644-77.648c-7.906-7.906-11.77-38.284-11.71-48.646h0.042v-200.588h-0.364c-6.878-148.106-114.428-269.902-255.792-298.528 0.208-2.1 0.318-4.228 0.318-6.384 0-35.452-28.738-64.194-64.194-64.194-35.458 0-64.194 28.742-64.194 64.194 0 2.19 0.112 4.352 0.326 6.486-141.128 28.802-248.446 150.488-255.316 298.426h-0.364v200.588h0.042c0.058 10.362-3.804 40.74-11.71 48.646l-57.644 77.648c-8.802 8.802-16.35 18.978-16.35 32.208 0 22.092 17.908 40 40 40h255.876c-0.814 5.412-1.28 10.936-1.28 16.576 0 61.43 49.794 111.23 111.23 111.23 61.432 0 111.228-49.8 111.228-111.23 0-5.638-0.464-11.164-1.282-16.576h255.128c22.092 0 40-17.908 40-40 0.004-13.23-7.542-23.404-16.346-32.208zM272.732 436.848c2.862-61.602 29.032-119.104 73.69-161.91 44.786-42.93 103.628-66.62 165.692-66.706h0.26c62.062 0.086 120.906 23.776 165.692 66.706 44.658 42.806 70.828 100.308 73.69 161.91l0.278 5.962v149.384h-479.58v-149.384l0.278-5.962zM543.846 848.8c0 17.22-14.010 31.23-31.228 31.23-17.22 0-31.23-14.010-31.23-31.23 0-6.096 1.784-11.768 4.82-16.576h52.818c3.038 4.81 4.82 10.482 4.82 16.576zM512.484 752.226h-283.922l14.572-19.63c12.064-14.542 20.078-33.27 24.982-58.158 0.146-0.742 0.276-1.496 0.416-2.244h487.42c0.138 0.748 0.268 1.5 0.414 2.244 4.904 24.888 12.918 43.616 24.982 58.158l14.572 19.63h-283.436z',
  rss: 'M256.094 865.048c0 53.020-42.972 96-96 96-53.020 0-96-42.98-96-96 0-53.016 42.98-96 96-96s96 42.984 96 96zM510.020 918.352c-0.018-0.172-0.042-0.344-0.050-0.52-0.054-0.676-0.124-1.34-0.214-2.004-10.582-105.644-57.866-200.46-128.894-271.536v0c-71.074-71.054-165.906-118.352-271.564-128.934-0.664-0.090-1.33-0.16-2.006-0.214-0.174-0.016-0.348-0.040-0.52-0.054-0.254-0.024-0.5-0.024-0.742-0.008-0.64-0.032-1.278-0.098-1.922-0.098-22.098 0-40 17.908-40 40 0 20.582 15.542 37.516 35.536 39.738 0.042 0.004 0.066 0.036 0.106 0.040 84.82 8.098 163.514 45.024 224.542 106.042v0c61.036 61.036 97.964 139.738 106.070 224.574 0.004 0.040 0.036 0.070 0.042 0.106 2.222 19.988 19.156 35.536 39.736 35.536 22.092 0 40-17.902 40-40 0-0.644-0.066-1.282-0.098-1.922 0-0.246 0-0.492-0.022-0.746zM734.688 918.45c-0.004-0.090-0.018-0.186-0.024-0.276-0.040-0.544-0.058-1.102-0.124-1.638-10.972-167.816-83.558-318.804-195.33-430.616h0.002c-111.812-111.788-262.81-184.384-430.644-195.36-0.542-0.060-1.094-0.084-1.642-0.122-0.092-0.008-0.182-0.016-0.272-0.022-0.020-0.002-0.042 0.004-0.054 0.004-0.836-0.052-1.664-0.124-2.512-0.124-22.092 0-40 17.908-40 40 0 21.036 16.246 38.24 36.874 39.842 0.046 0.008 0.078 0.038 0.128 0.042 66.876 4.086 131.786 19.292 193.406 45.358 70.472 29.81 133.78 72.494 188.166 126.874v0c54.394 54.396 97.090 117.71 126.902 188.204 26.064 61.624 41.274 126.532 45.362 193.408 0.004 0.052 0.036 0.080 0.042 0.13 1.604 20.624 18.802 36.87 39.844 36.87 22.090 0 40-17.904 40-40 0-0.85-0.074-1.678-0.126-2.514-0.002-0.024 0.006-0.040 0.002-0.060zM959.126 920.556c-0.002-0.094 0.008-0.164 0.004-0.262-10.342-231.204-108.314-439.604-261.486-592.796v-0.002c-153.2-153.19-361.61-251.174-592.828-261.518-0.096-0.004-0.168 0.006-0.262 0.004-0.176-0.004-0.348-0.030-0.524-0.030-22.098 0-40 17.91-40 40 0 20.988 16.168 38.164 36.716 39.834 0.184 0.042 0.356 0.086 0.566 0.098 97.040 4.314 191.186 25.538 280.376 63.258 97.14 41.090 184.406 99.928 259.368 174.876v0c74.96 74.964 133.81 162.24 174.908 259.398 37.718 89.19 58.946 183.336 63.26 280.376 0.010 0.208 0.052 0.38 0.096 0.562 1.67 20.552 18.848 36.72 39.834 36.72 22.092 0 40-17.906 40-40-0-0.17-0.024-0.342-0.028-0.518z',
  basket: 'M632.254 695.604v-112.016c-0.004-22.092 17.906-40.002 40-40.002 22.090 0.002 40 17.908 40 40.002l-0.004 112.018c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.904-40-40zM352.246 735.604c22.090-0.002 40-17.91 39.996-39.998l0.004-112.018c0-22.094-17.91-40-40-40.002-22.094 0-40.004 17.91-40 40.002v112.016c-0.004 22.096 17.906 40.002 40 40zM512.25 735.604c22.090-0.002 40-17.91 39.996-39.998l0.004-112.018c0-22.094-17.91-40-40-40.002-22.094 0-40.004 17.91-40 40.002v112.016c-0.004 22.096 17.906 40.002 40 40zM950.3 397.424c-7.596-8.686-18.574-13.67-30.114-13.67h-313.284c0.87 5.196 1.346 10.524 1.346 15.966 0 24.608-9.27 47.044-24.494 64.034h290.684l-47.318 351.376-629.908-0.030-47.502-351.346h291.034c-15.224-16.988-24.494-39.426-24.494-64.034 0-5.444 0.476-10.772 1.346-15.966h-313.66c-11.542 0-22.524 4.986-30.12 13.678-7.596 8.694-11.066 20.242-9.52 31.682l51.614 381.742 0.050 0.042c5.832 47.424 46.222 84.158 95.222 84.172l0.054 0.034 601.816-0.034c0.042 0 0.082 0.002 0.124 0.002 49.414 0 90.090-37.34 95.396-85.336l51.258-380.64c1.54-11.44-1.934-22.984-9.53-31.672zM805.492 105.34c-15.622-15.622-40.95-15.624-56.572 0.004l-230.684 230.684c-2.052-0.2-4.132-0.306-6.236-0.306-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64c0-2.652-0.18-5.262-0.494-7.83l229.986-229.98c15.622-15.624 15.616-40.95-0-56.572z',
  credit: 'M376.188 672.062h-112.124c-22.092 0-40-17.908-40-40s17.908-40 40-40h112.124c22.092 0 40 17.908 40 40s-17.908 40-40 40zM960 232.002v560c0 6.8-1.708 13.2-4.704 18.81-0.044 0.082-0.078 0.172-0.124 0.254-0.524 0.974-1.112 1.914-1.722 2.836-0.098 0.15-0.18 0.31-0.282 0.458-7.188 10.64-19.36 17.638-33.168 17.638h-816c-22.090 0-40-17.908-40-40v-559.998c0-20.34 15.192-37.092 34.838-39.628 1.694-0.218 3.408-0.372 5.162-0.372h816c1.754 0 3.468 0.152 5.162 0.372 19.646 2.536 34.838 19.288 34.838 39.63zM144 272.002v80.030h736v-80.030h-736zM880 751.998v-239.966h-736v239.966h736z',
  support: 'M828.814 195.216c-174.956-174.956-458.614-174.956-633.566 0-174.958 174.956-174.956 458.612 0 633.568s458.614 174.956 633.566 0c174.958-174.956 174.956-458.612 0-633.568zM813.592 723.072l-92.714-92.712c41.542-73.186 41.548-163.544 0.016-236.734l92.7-92.698c43.176 61.41 66.44 134.45 66.44 211.074-0.004 76.62-23.266 149.662-66.442 211.070zM398.916 625.116c-62.382-62.384-62.382-163.89 0-226.274 30.216-30.216 70.398-46.86 113.146-46.864h0.010c42.724 0 82.898 16.642 113.12 46.866 62.382 62.38 62.382 163.886 0 226.272-30.22 30.22-70.4 46.864-113.136 46.864-42.74-0.002-82.92-16.644-113.14-46.864zM723.104 210.44l-92.696 92.698c-36.59-20.766-77.464-31.162-118.356-31.158-40.888 0.004-81.78 10.406-118.378 31.178l-92.714-92.716c61.408-43.176 134.452-66.438 211.070-66.44 76.622-0.004 149.668 23.262 211.074 66.438zM210.472 300.928l92.724 92.726c-41.512 73.176-41.506 163.506 0.016 236.678l-92.742 92.74c-43.176-61.408-66.438-134.454-66.44-211.072 0.004-76.624 23.264-149.664 66.442-211.072zM512.032 880c-76.624-0.002-149.666-23.264-211.072-66.44l92.74-92.742c36.59 20.766 77.464 31.16 118.356 31.16 40.868 0 81.738-10.392 118.322-31.144l92.726 92.726c-61.408 43.176-134.454 66.44-211.072 66.44z',
  shield: 'M875.146 148.994c-0.064-0.040-0.116-0.094-0.184-0.132-92.714-52.39-221.036-84.83-362.846-84.83-138.512 0-270.346 34.356-362.51 84.618-0.606 0.33-1.138 0.658-1.608 0.986-11.954 6.918-20.016 19.81-20.016 34.614v451.4c0 12.7 5.938 23.996 15.166 31.32l340.538 281.676c6.568 6.434 14.918 10.168 23.564 11.122 0.16 0.024 0.32 0.050 0.48 0.066 0.838 0.082 1.676 0.114 2.518 0.14 0.496 0.020 0.994 0.058 1.492 0.058s0.996-0.040 1.492-0.058c0.842-0.032 1.68-0.058 2.518-0.14 0.16-0.016 0.32-0.042 0.48-0.066 8.646-0.958 16.996-4.688 23.564-11.122l339.36-280.718c10.326-7.23 17.094-19.2 17.094-32.762v-450.918c0.002-15.254-8.54-28.506-21.102-35.254zM207.984 208.212c36.292-18.168 77.668-32.854 123.356-43.722 57.062-13.576 117.884-20.458 180.778-20.458s123.714 6.882 180.778 20.458c30.186 7.182 58.474 16.040 84.674 26.456l-490.846 490.848-78.738-65.070v-408.512zM511.742 867.75l-163.078-134.77 467.586-467.584v350.69l-304.508 251.664z',
  beaker: 'M848.64 790.56l-208.638-361.374v-252.062h24c22.092 0 40-17.908 40-40s-17.908-40-40-40h-304.002c-22.092 0-40 17.908-40 40s17.908 40 40 40h24v252.066l-208.636 361.37c-44 76.208-8 138.564 80 138.564h513.278c87.998 0 123.998-62.354 79.998-138.564zM464 177.124h96.002l-0.070 273.376 63.872 110.628h-223.678c35.932-62.268 63.872-110.684 63.876-110.692v-273.312zM768.64 849.124h-513.278c-8.28 0-14.186-0.976-17.968-2 1.004-3.792 3.112-9.394 7.25-16.564 0 0 54.598-94.614 109.316-189.436l316.026-0.002 109.374 189.44c4.138 7.168 6.246 12.77 7.25 16.562-3.784 1.024-9.69 2-17.97 2z',
  google: 'M799.094 79.996c0 0-200.938 0-267.936 0-120.126 0-233.188 91.004-233.188 196.434 0 107.692 81.904 194.624 204.124 194.624 8.496 0 16.75-0.148 24.812-0.74-7.942 15.186-13.594 32.286-13.594 50.022 0 29.974 16.094 54.226 36.466 74.042-15.376 0-30.248 0.438-46.438 0.438-148.782 0.036-263.312 94.784-263.312 193.056 0 96.758 125.534 157.312 274.312 157.312 169.656 0 263.312-96.25 263.312-193.024 0-77.6-22.908-124.062-93.686-174.156-24.216-17.128-70.534-58.812-70.534-83.32 0-28.69 8.19-42.868 51.406-76.624 44.346-34.63 75.688-83.302 75.688-139.944 0-67.372-30-133.058-86.374-154.746h85l59.942-43.374zM701.504 735.438c2.092 8.992 3.276 18.226 3.276 27.624 0 78.226-50.374 139.304-194.934 139.304-102.874 0-177.124-65.078-177.124-143.304 0-76.622 92.122-140.434 194.934-139.32 24.004 0.254 46.376 4.136 66.69 10.702 55.812 38.834 95.874 60.808 107.158 104.994zM536.844 443.782c-69-2.094-134.624-77.212-146.564-167.876-11.874-90.664 34.378-160.030 103.442-157.97 68.996 2.060 134.594 74.818 146.53 165.432 11.906 90.696-34.408 162.508-103.408 160.414z',
  gdrive: 'M465.926 641.356l-149.328 258.708h494.074l149.328-258.708h-494.074zM917.704 567.988l-256.33-444.048h-298.686l256.356 444.048h298.66zM320.236 197.442l-256.236 443.914 149.36 258.708 256.23-443.914-149.354-258.708z',
  youtube: 'M704.010 511.988c0-12.332-5.038-21.358-15.042-26.992l-255.982-159.99c-10.344-6.666-21.178-6.998-32.51-1.008-10.988 5.984-16.492 15.312-16.492 28.002v320c0 12.69 5.504 22.018 16.492 28.002 5.332 2.678 10.516 3.996 15.506 3.996 6.668 0 12.334-1.644 17.004-4.98l255.982-160.014c10.004-5.69 15.042-14.684 15.042-26.992v-0.024zM960 511.988c0 31.99-0.164 56.98-0.488 75.032-0.334 17.99-1.754 40.738-4.27 68.25-2.516 27.504-6.262 52.058-11.27 73.742-5.332 24.338-16.84 44.85-34.504 61.496-17.64 16.63-38.306 26.308-61.96 28.988-73.992 8.342-185.824 12.526-335.508 12.526-149.668 0-261.5-4.184-335.5-12.526-23.662-2.656-44.414-12.302-62.242-28.988-17.834-16.678-29.412-37.182-34.744-61.496-4.672-21.684-8.258-46.238-10.756-73.742-2.508-27.512-3.928-50.26-4.254-68.25-0.342-18.050-0.504-43.042-0.504-75.032 0-31.998 0.162-57.010 0.504-75.008 0.326-18.022 1.746-40.768 4.254-68.28 2.498-27.474 6.262-52.082 11.252-73.744 5.34-24.336 16.842-44.842 34.504-61.496 17.648-16.654 38.324-26.332 61.986-29.010 74-8.312 185.832-12.472 335.5-12.472 149.684 0 261.516 4.16 335.508 12.472 23.654 2.678 44.406 12.356 62.232 29.010 17.826 16.678 29.422 37.16 34.73 61.496 4.702 21.662 8.256 46.27 10.772 73.744 2.516 27.512 3.936 50.258 4.27 68.28 0.324 17.998 0.488 43.010 0.488 75.008z',
  facebook: 'M582.52 960h-167.88v-448h-112v-154.396l112-0.052-0.166-90.948c-0.036-125.974 34.12-202.604 182.484-202.604h123.542v154.424h-77.19c-57.782 0-60.566 21.56-60.566 61.85l-0.218 77.278h138.854l-16.376 154.394-122.36 0.052-0.124 448.002z',
  thumbsup: 'M256.972 768.004c0-8.67-3.156-16.158-9.484-22.534-6.332-6.34-13.836-9.484-22.504-9.458-8.682 0-16.188 3.172-22.516 9.458-6.33 6.344-9.488 13.84-9.488 22.534 0 8.692 3.158 16.186 9.488 22.532 6.328 6.286 13.834 9.458 22.516 9.458 8.668 0.028 16.172-3.118 22.504-9.458 6.328-6.376 9.484-13.868 9.484-22.532zM832.948 480.010c0-17.004-6.478-31.908-19.468-44.734-13.014-12.82-27.834-19.25-44.512-19.276h-175.97c0-19.328 7.98-45.904 24.004-79.724 15.968-33.826 23.978-60.568 23.978-80.256 0-32.646-5.332-56.808-15.994-72.48-10.664-15.664-31.988-23.484-63.98-23.484-8.696 8.64-15.012 22.828-19.032 42.486-4.020 19.69-9.102 40.606-15.254 62.752-6.168 22.172-16.080 40.382-29.762 54.738-7.344 7.68-20.168 22.832-38.5 45.496-1.326 1.67-5.164 6.65-11.512 15.010-6.342 8.342-11.594 15.178-15.762 20.508-4.156 5.308-9.91 12.386-17.252 21.218-7.328 8.862-14 16.186-19.988 22.038-5.986 5.794-12.412 11.73-19.26 17.744-6.852 5.984-13.508 10.5-19.99 13.48-6.478 3.010-12.4 4.484-17.756 4.512h-15.982v320.010h15.982c4.332 0 9.596 0.492 15.774 1.504 6.168 1.012 11.676 2.080 16.488 3.258 4.812 1.144 11.154 2.98 19.002 5.466 7.862 2.512 13.702 4.424 17.502 5.74 3.812 1.31 9.732 3.422 17.756 6.238 8.026 2.842 12.866 4.586 14.506 5.272 70.324 24.334 127.304 36.504 170.996 36.504h60.482c64.006 0 96.024-27.836 96.024-83.478 0-8.664-0.848-18.016-2.514-27.996 10.004-5.334 17.936-14.084 23.758-26.276 5.824-12.172 8.724-24.416 8.778-36.746 0-12.366-3.008-23.844-9.024-34.51 17.664-16.682 26.524-36.496 26.524-59.496 0-8.308-1.696-17.554-5.032-27.72-3.336-10.202-7.492-18.104-12.468-23.762 10.636-0.328 19.55-8.15 26.714-23.486 7.192-15.34 10.744-28.82 10.744-40.496v-0.054zM896.984 479.516c0 29.638-8.204 56.816-24.5 81.506 2.98 10.994 4.484 22.476 4.484 34.482 0 25.674-6.344 49.68-19.004 71.99 1.012 7 1.506 14.164 1.506 21.488 0 33.688-10.008 63.354-29.968 89.026 0.326 46.32-13.834 82.904-42.518 109.756-28.682 26.848-66.522 40.246-113.496 40.246h-64.528c-31.99 0-63.542-3.746-94.742-11.268-31.168-7.492-67.246-18.402-108.23-32.758-38.662-13.312-61.656-19.956-68.984-19.956h-143.996c-17.664 0-32.742-6.292-45.252-18.784-12.508-12.5-18.756-27.588-18.756-45.254v-319.982c0-17.666 6.248-32.728 18.756-45.226 12.51-12.52 27.588-18.784 45.252-18.784h136.998c12.002-8.010 34.818-33.822 68.478-77.484 19.33-24.99 37.168-46.344 53.508-64.008 7.996-8.314 13.918-22.586 17.744-42.766 3.828-20.178 8.912-41.232 15.256-63.24 6.36-21.984 16.68-40.002 30.994-53.998 13.002-12.362 28.012-18.514 45.018-18.514 27.998 0 53.152 5.414 75.464 16.242 22.31 10.828 39.316 27.748 50.964 50.77 11.704 23.002 17.5 53.978 17.5 92.962 0 31.008-7.984 63-23.98 96.028h88.014c34.67 0 64.634 12.628 89.956 37.98 25.346 25.346 38.008 55.144 38.008 89.49l0.054 0.056z',
  twitter: 'M960 233.114c-32.946 14.616-68.41 24.5-105.598 28.942 37.954-22.762 67.098-58.774 80.856-101.688-35.52 21.054-74.894 36.368-116.726 44.598-33.542-35.724-81.316-58.038-134.204-58.038-101.496 0-183.796 82.292-183.796 183.814 0 14.424 1.628 28.45 4.758 41.89-152.75-7.668-288.22-80.872-378.876-192.072-15.822 27.15-24.898 58.706-24.898 92.42 0 63.776 32.458 120.034 81.782 153.010-30.116-0.944-58.458-9.212-83.262-22.982-0.028 0.75-0.028 1.546-0.028 2.324 0 89.070 63.356 163.334 147.438 180.256-15.426 4.186-31.664 6.426-48.442 6.426-11.836 0-23.35-1.146-34.574-3.28 23.406 73.006 91.286 126.16 171.726 127.632-62.914 49.324-142.18 78.696-228.314 78.696-14.828 0-29.448-0.876-43.842-2.568 81.33 52.138 177.96 82.574 281.786 82.574 338.11 0 523-280.104 523-523.014 0-7.986-0.164-15.914-0.542-23.778 35.952-25.96 67.124-58.318 91.756-95.162z',
  github: 'M512.062 64.032c-247.426 0-448 200.576-448 448s200.574 448 448 448c247.422 0 448-200.576 448-448s-200.578-448-448-448zM251.846 772.246c-69.506-69.508-107.784-161.918-107.784-260.214 0-98.294 38.278-190.708 107.784-260.216 69.508-69.504 161.92-107.784 260.216-107.784s190.708 38.28 260.214 107.784c69.504 69.508 107.786 161.922 107.786 260.216 0 98.296-38.282 190.708-107.786 260.214-42.852 42.848-94.41 73.806-150.684 91.27v-65.104c0-34.584-11.86-60.022-35.578-76.31 14.864-1.43 28.512-3.43 40.942-6.002 12.434-2.572 25.578-6.292 39.442-11.146s26.292-10.644 37.3-17.364c11-6.712 21.574-15.434 31.718-26.15s18.648-22.866 25.508-36.444c6.864-13.57 12.292-29.866 16.292-48.874 4.004-19.006 6-39.944 6-62.802 0-44.3-14.434-82.032-43.296-113.182 13.14-34.294 11.714-71.594-4.29-111.894l-10.718-1.286c-7.43-0.858-20.79 2.286-40.082 9.434-19.29 7.144-40.942 18.864-64.95 35.152-34.016-9.432-69.308-14.148-105.894-14.148-36.87 0-72.024 4.716-105.46 14.148-15.144-10.29-29.51-18.79-43.086-25.508s-24.436-11.29-32.582-13.718c-8.144-2.43-15.718-3.93-22.722-4.5-7-0.574-11.5-0.714-13.504-0.43-2 0.286-3.43 0.572-4.288 0.86-16.004 40.582-17.436 77.88-4.288 111.894-28.868 31.152-43.3 68.878-43.3 113.178 0 22.866 2 43.798 6.002 62.804 4 19.010 9.432 35.296 16.292 48.876s15.364 25.722 25.508 36.442c10.146 10.718 20.72 19.438 31.724 26.152s23.436 12.504 37.298 17.362c13.862 4.858 27.008 8.574 39.442 11.146 12.434 2.57 26.080 4.574 40.942 6.002-23.438 16.004-35.152 41.444-35.152 76.31v66.404c-57.936-17.198-111.030-48.638-154.966-92.572z'
};

exports.default = icons;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding: 2px 6px;\n  line-height: 16px;\n  font-size: 10px;\n  font-weight: ', ';\n  color: ', ';\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.30);\n  border-radius: 4px;\n  white-space: nowrap;\n  pointer-events: none;\n  z-index: -1;\n  background: rgba(0, 0, 0, .4);\n  margin: 6px;\n'], ['\n  padding: 2px 6px;\n  line-height: 16px;\n  font-size: 10px;\n  font-weight: ', ';\n  color: ', ';\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.30);\n  border-radius: 4px;\n  white-space: nowrap;\n  pointer-events: none;\n  z-index: -1;\n  background: rgba(0, 0, 0, .4);\n  margin: 6px;\n']);

exports.default = TooltipNote;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Note = _styledComponents2.default.div(_templateObject, _styles.typography.weight.bold, _styles.color.lightest);

function TooltipNote(_ref) {
  var note = _ref.note;

  return _react2.default.createElement(
    Note,
    null,
    note
  );
}

TooltipNote.propTypes = {
  note: _propTypes2.default.string.isRequired
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _ejson = __webpack_require__(56);

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _es6Error = __webpack_require__(57);

var _es6Error2 = _interopRequireDefault(_es6Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO -- expand to UnserializablePropError, more helpful
//   https://github.com/hichroma/chromatic/issues/158
var UnserializeableInputError = function (_ExtendableError) {
  (0, _inherits3.default)(UnserializeableInputError, _ExtendableError);

  function UnserializeableInputError(data) {
    (0, _classCallCheck3.default)(this, UnserializeableInputError);

    var _this = (0, _possibleConstructorReturn3.default)(this, (UnserializeableInputError.__proto__ || (0, _getPrototypeOf2.default)(UnserializeableInputError)).call(this));

    _this.data = data;
    return _this;
  }

  (0, _createClass3.default)(UnserializeableInputError, [{
    key: 'toString',
    value: function toString() {
      return 'found node with unserializable input ' + this.data;
    }
  }]);
  return UnserializeableInputError;
}(_es6Error2.default);

exports.default = UnserializeableInputError;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Spec2 = __webpack_require__(23);

var _Spec3 = _interopRequireDefault(_Spec2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// All errors are unique errors
var errorCounter = 0;

var ErrorSpec = function (_Spec) {
  (0, _inherits3.default)(ErrorSpec, _Spec);

  function ErrorSpec(_ref) {
    var error = _ref.error,
        node = _ref.node,
        _ref$component = _ref.component,
        component = _ref$component === undefined ? { name: node.name } : _ref$component,
        domElement = _ref.domElement;
    (0, _classCallCheck3.default)(this, ErrorSpec);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ErrorSpec.__proto__ || (0, _getPrototypeOf2.default)(ErrorSpec)).call(this, {
      component: component,
      key: (errorCounter += 1).toString(),
      node: node,
      domElement: domElement
    }));

    _this.error = error;
    _this.status = 'unsaveable';
    _this.unsaveableReason = error.toString();
    return _this;
  }

  return ErrorSpec;
}(_Spec3.default);

exports.default = ErrorSpec;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnattachedNodeError = exports.DetectionError = undefined;

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _es6Error = __webpack_require__(57);

var _es6Error2 = _interopRequireDefault(_es6Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DetectionError = exports.DetectionError = function (_ExtendableError) {
  (0, _inherits3.default)(DetectionError, _ExtendableError);

  function DetectionError() {
    (0, _classCallCheck3.default)(this, DetectionError);
    return (0, _possibleConstructorReturn3.default)(this, (DetectionError.__proto__ || (0, _getPrototypeOf2.default)(DetectionError)).apply(this, arguments));
  }

  return DetectionError;
}(_es6Error2.default);

var UnattachedNodeError = exports.UnattachedNodeError = function (_DetectionError) {
  (0, _inherits3.default)(UnattachedNodeError, _DetectionError);

  function UnattachedNodeError() {
    (0, _classCallCheck3.default)(this, UnattachedNodeError);
    return (0, _possibleConstructorReturn3.default)(this, (UnattachedNodeError.__proto__ || (0, _getPrototypeOf2.default)(UnattachedNodeError)).apply(this, arguments));
  }

  (0, _createClass3.default)(UnattachedNodeError, [{
    key: 'toString',

    // eslint-disable-next-line class-methods-use-this
    value: function toString() {
      return 'found unattached node';
    }
  }]);
  return UnattachedNodeError;
}(DetectionError);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(36);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(34);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    mutation WidgetCreateSpec($input: CreateSpecInput!) {\n      createSpec(input: $input) {\n        id\n        number\n        component {\n          specCount\n        }\n      }\n    }\n  '], ['\n    mutation WidgetCreateSpec($input: CreateSpecInput!) {\n      createSpec(input: $input) {\n        id\n        number\n        component {\n          specCount\n        }\n      }\n    }\n  ']);

var _reactApollo = __webpack_require__(26);

var _graphqlTag = __webpack_require__(25);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _mobx = __webpack_require__(18);

var _serialize = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject), {
  props: function props(_ref) {
    var mutate = _ref.mutate,
        app = _ref.ownProps.data.app;
    return {
      onCreateSpec: (0, _mobx.action)(function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(spec) {
          var componentName, name, input, _ref3, _ref3$data$createSpec, id, number, specCount, error;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // eslint-disable-next-line no-param-reassign
                  spec.status = 'saving';

                  componentName = spec.component.name, name = spec.name, input = spec.input;
                  _context.next = 4;
                  return mutate({
                    variables: {
                      input: {
                        appId: app.id,
                        componentName: componentName,
                        name: name,
                        input: (0, _serialize.stringify)(input)
                      }
                    }
                  });

                case 4:
                  _ref3 = _context.sent;
                  _ref3$data$createSpec = _ref3.data.createSpec;
                  id = _ref3$data$createSpec.id;
                  number = _ref3$data$createSpec.number;
                  specCount = _ref3$data$createSpec.component.specCount;
                  error = _ref3.error;

                  if (!error) {
                    _context.next = 12;
                    break;
                  }

                  throw error;

                case 12:

                  // eslint-disable-next-line no-param-reassign
                  spec.id = id;
                  // eslint-disable-next-line no-param-reassign
                  spec.status = 'saved';
                  // eslint-disable-next-line no-param-reassign
                  spec.number = number;
                  // eslint-disable-next-line no-param-reassign
                  spec.component = (0, _extends3.default)({}, spec.component, {
                    specCount: specCount
                  });

                case 16:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, undefined);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }())
    };
  }
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(13);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  margin-left: 10px;\n  ', '\n'], ['\n  margin-left: 10px;\n  ', '\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    animation: ', ' 1s ease-out 1s 1;\n  '], ['\n    animation: ', ' 1s ease-out 1s 1;\n  ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  position: fixed;\n  left: ', 'px;\n  bottom: ', 'px;\n  z-index: 444444;\n  white-space: nowrap;\n\n  ', ', ', ' {\n    display: inline-block;\n  }\n'], ['\n  position: fixed;\n  left: ', 'px;\n  bottom: ', 'px;\n  z-index: 444444;\n  white-space: nowrap;\n\n  ', ', ', ' {\n    display: inline-block;\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  position: fixed;\n  z-index: 111111;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  transition: opacity 0.25s ease-out;\n  opacity: ', ';\n'], ['\n  position: fixed;\n  z-index: 111111;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  transition: opacity 0.25s ease-out;\n  opacity: ', ';\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  position: fixed;\n  left: ', 'px;\n  bottom: 50px;\n  z-index: 333333;\n\n  ', ' + ', ' {\n    margin-top: 10px;\n  }\n'], ['\n  position: fixed;\n  left: ', 'px;\n  bottom: 50px;\n  z-index: 333333;\n\n  ', ' + ', ' {\n    margin-top: 10px;\n  }\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  margin: 0.5rem 0 0;\n'], ['\n  width: 100%;\n  margin: 0.5rem 0 0;\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  position: fixed;\n  width: 0px;\n  height: 0px;\n  bottom: 0px;\n  right: 0px;\n  z-index: 2147483647;\n'], ['\n  position: fixed;\n  width: 0px;\n  height: 0px;\n  bottom: 0px;\n  right: 0px;\n  z-index: 2147483647;\n']); /* eslint-env browser */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mobxReact = __webpack_require__(20);

var _components = __webpack_require__(16);

var _WidgetButton = __webpack_require__(100);

var _WidgetButton2 = _interopRequireDefault(_WidgetButton);

var _WidgetButtonTest = __webpack_require__(101);

var _WidgetButtonTest2 = _interopRequireDefault(_WidgetButtonTest);

var _WidgetNotification = __webpack_require__(102);

var _WidgetNotification2 = _interopRequireDefault(_WidgetNotification);

var _WidgetShade = __webpack_require__(104);

var _WidgetShade2 = _interopRequireDefault(_WidgetShade);

var _WidgetScanner = __webpack_require__(103);

var _WidgetScanner2 = _interopRequireDefault(_WidgetScanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spacing = _components.styles.spacing;
var jiggle = _components.animation.jiggle;


var Launcher = (0, _styledComponents2.default)(_WidgetButton2.default)(_templateObject);

// prettier-ignore
var Tester = (0, _styledComponents2.default)(_WidgetButtonTest2.default)(_templateObject2, function (props) {
  return props.highlight && (0, _styledComponents.css)(_templateObject3, jiggle);
});

var Buttons = _styledComponents2.default.div(_templateObject4, spacing.padding.medium, spacing.padding.medium, Launcher, Tester);

var Shade = (0, _styledComponents2.default)(_WidgetShade2.default)(_templateObject5, function (props) {
  return props.active ? 1 : 0;
});

var Notification = (0, _styledComponents2.default)(_WidgetNotification2.default)(_templateObject);

var Notifications = _styledComponents2.default.div(_templateObject6, spacing.padding.medium, Notification, Notification);

var CodeCopyClipboard = (0, _styledComponents2.default)(_components.Clipboard)(_templateObject7);

var Chromatic = _styledComponents2.default.div(_templateObject8);

// The indexes we move to when we see these things, if we are on-boarding:
var FIRST_COMPONENT_INDEX = 3;

function shouldOnboard(_ref) {
  var loading = _ref.loading,
      componentCount = _ref.componentCount,
      detectedSpecs = _ref.detectedSpecs,
      criticalError = _ref.criticalError;

  return !loading && componentCount === 0 && detectedSpecs.length > 0 && !criticalError;
}

var WidgetScreen = function (_Component) {
  (0, _inherits3.default)(WidgetScreen, _Component);

  function WidgetScreen(props, context) {
    (0, _classCallCheck3.default)(this, WidgetScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WidgetScreen.__proto__ || (0, _getPrototypeOf2.default)(WidgetScreen)).call(this, props, context));

    _this.state = {
      // You only enter onboarding if you start with no components
      appOnboardingIndex: shouldOnboard(props) ? 0 : -1,
      showBuildInstructions: false
    };

    _this.onDeactivate = _this.onDeactivate.bind(_this);
    _this.onActivate = _this.onActivate.bind(_this);
    _this.onToggleActive = _this.onToggleActive.bind(_this);
    _this.onDocumentKeyDown = _this.onDocumentKeyDown.bind(_this);
    _this.onNextOnboardingStep = _this.onNextOnboardingStep.bind(_this);
    _this.onShowBuildInstructions = _this.onShowBuildInstructions.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(WidgetScreen, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('keydown', this.onDocumentKeyDown, false);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState(function (_ref2) {
        var appOnboardingIndex = _ref2.appOnboardingIndex;

        if (appOnboardingIndex === -1) {
          if (shouldOnboard(newProps)) {
            return { appOnboardingIndex: 0 };
          }
          return {};
        }

        if (newProps.componentCount > 0) {
          return {
            appOnboardingIndex: Math.max(appOnboardingIndex, FIRST_COMPONENT_INDEX)
          };
        }
        return {};
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onDocumentKeyDown);
    }
  }, {
    key: 'onDeactivate',
    value: function onDeactivate() {
      this.props.onActivate(false);
    }
  }, {
    key: 'onActivate',
    value: function onActivate() {
      this.props.onActivate(true);
      this.setState(function (_ref3) {
        var appOnboardingIndex = _ref3.appOnboardingIndex;
        return {
          appOnboardingIndex: appOnboardingIndex === 0 ? 1 : appOnboardingIndex
        };
      });
    }
  }, {
    key: 'onToggleActive',
    value: function onToggleActive() {
      if (this.props.active) {
        this.onDeactivate();
      } else {
        this.onActivate();
      }
    }
  }, {
    key: 'onDocumentKeyDown',
    value: function onDocumentKeyDown(event) {
      if (event.ctrlKey && event.key === 'm') {
        this.onToggleActive();
      }
    }
  }, {
    key: 'onNextOnboardingStep',
    value: function onNextOnboardingStep() {
      var appOnboardingIndex = this.state.appOnboardingIndex;

      if (appOnboardingIndex === -1) {
        return;
      }
      this.setState({
        appOnboardingIndex: appOnboardingIndex < 4 ? appOnboardingIndex + 1 : -1
      });
    }
  }, {
    key: 'onShowBuildInstructions',
    value: function onShowBuildInstructions() {
      this.setState({ showBuildInstructions: true });
      this.onNextOnboardingStep();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          loading = _props.loading,
          componentCount = _props.componentCount,
          detectedReact = _props.detectedReact,
          detectedSpecs = _props.detectedSpecs,
          active = _props.active,
          testCommand = _props.testCommand,
          activeError = _props.activeError,
          criticalError = _props.criticalError,
          onCreateSpec = _props.onCreateSpec,
          onShowComponentSpecs = _props.onShowComponentSpecs;
      var _state = this.state,
          appOnboardingIndex = _state.appOnboardingIndex,
          showBuildInstructions = _state.showBuildInstructions;


      var componentNames = {};
      detectedSpecs.forEach(function (s) {
        if (s.status !== 'unsaveable') {
          componentNames[s.component.name] = true;
        }
      });
      var detectedComponentCount = (0, _keys2.default)(componentNames).length;

      var notifications = [];

      if (!loading && !detectedReact) {
        notifications.push(_react2.default.createElement(Notification, {
          key: 'no-react',
          title: 'We didn\u2019t detect React on this page.',
          desc: _react2.default.createElement(
            'span',
            null,
            'You need to ensure that you import ',
            _react2.default.createElement(
              'code',
              null,
              'react-chromatic'
            ),
            ' ',
            _react2.default.createElement(
              'strong',
              null,
              'before'
            ),
            ' ',
            _react2.default.createElement(
              'code',
              null,
              'react'
            ),
            '.',
            _react2.default.createElement(
              _components.Link,
              { href: 'http://docs.chromaticqa.com/#client' },
              'Read more here'
            ),
            '.'
          )
        }));
      } else if (!loading && detectedSpecs.length === 0) {
        notifications.push(_react2.default.createElement(Notification, {
          key: 'no-components',
          title: 'We didn\u2019t find saveable components on this page.',
          desc: _react2.default.createElement(
            'span',
            null,
            'Browse around your app to find components to save. Some types of components',
            ' ',
            _react2.default.createElement(
              _components.Link,
              { href: 'http://docs.chromaticqa.com/components' },
              'aren\u2019t supported yet'
            ),
            '.'
          )
        }));
      }

      if (appOnboardingIndex === 0) {
        notifications.push(_react2.default.createElement(Notification, {
          key: 'welcome',
          title: '\uD83D\uDC4B\xA0 Chromatic is super easy to setup.',
          desc: 'We\u2019ll show you how to start getting UI tests in less than 3 minutes.',
          links: [{ title: 'Get started', onClick: this.onActivate }]
        }));
      }
      if (appOnboardingIndex === 1) {
        var nDisplayed = Math.min(3, detectedComponentCount);
        var displayedNames = (0, _keys2.default)(componentNames).slice(0, nDisplayed);
        var componentNameStr = displayedNames.slice(0, -1).join(', ');
        if (nDisplayed > 1) {
          componentNameStr += ' and ' + displayedNames.slice(-1)[0];
        }
        notifications.push(_react2.default.createElement(Notification, {
          key: 'autoFind',
          title: 'Chromatic automatically finds components on screen.',
          desc: 'We found ' + detectedComponentCount + ' components including ' + componentNameStr + '.',
          progress: [1, 3],
          links: [{ title: 'Continue', onClick: this.onNextOnboardingStep }]
        }));
      }
      if (appOnboardingIndex === 2) {
        notifications.push(_react2.default.createElement(Notification, {
          key: 'addSpec',
          title: 'Add test coverage by saving component specs.',
          desc: 'Saved specs are snapshotted for visual UI testing.',
          progress: [2, 3],
          figure: 'https://www.chromaticqa.com/static/widget-save-animation.gif'
        }));
      }
      if (appOnboardingIndex === 3) {
        var addedSpec = detectedSpecs.find(function (s) {
          return s.status === 'saved' || s.status === 'saving';
        });

        // If the user browses away from the page they were looking at,
        // The spec may disappear. That's OK, we will just stop onboarding
        if (addedSpec) {
          var addedComponentName = addedSpec.component.name;
          notifications.push(_react2.default.createElement(Notification, {
            key: 'runTest',
            title: '\uD83C\uDF89\xA0 You added test coverage for ' + addedComponentName + '!',
            desc: _react2.default.createElement(
              'span',
              null,
              'Future builds will now be tested using this spec. Now try starting a test. Just run the following command:',
              _react2.default.createElement(
                CodeCopyClipboard,
                { toCopy: testCommand },
                _react2.default.createElement(_components.Input, { value: testCommand, appearance: 'code', readOnly: true })
              )
            ),
            progress: [3, 3]
          }));
        }
      }
      if (showBuildInstructions) {
        notifications.push(_react2.default.createElement(Notification, {
          key: 'start-build',
          title: 'Run a Chromatic test',
          desc: _react2.default.createElement(
            'span',
            null,
            'with the following command.',
            ' ',
            _react2.default.createElement(
              _components.Link,
              { secondary: true, href: 'http://docs.chromaticqa.com/#setup_ci' },
              _react2.default.createElement(
                'b',
                null,
                'Learn more'
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              CodeCopyClipboard,
              { toCopy: testCommand },
              _react2.default.createElement(_components.Input, { value: testCommand, appearance: 'code', readOnly: true })
            )
          )
        }));
      }
      if (criticalError === 'no-app-code') {
        notifications.push(_react2.default.createElement(Notification, {
          key: 'no-app-code',
          title: 'Forgot your app code?',
          desc: _react2.default.createElement(
            'span',
            null,
            'Find your ',
            _react2.default.createElement(
              'code',
              null,
              'appCode'
            ),
            ' at ChromaticQA.com then use it when initializing the client.'
          ),
          links: [{
            title: 'View guide',
            href: 'http://docs.chromaticqa.com/',
            target: '_blank'
          }, {
            title: 'Go to Chromatic',
            href: 'http://chromaticqa.com',
            target: '_blank'
          }]
        }));
      }
      if (criticalError === 'bad-app-code') {
        notifications.push(_react2.default.createElement(Notification, {
          key: 'bad-app-code',
          title: 'Wrong app code?',
          desc: _react2.default.createElement(
            'span',
            null,
            'Make sure you\u2019re using the correct ',
            _react2.default.createElement(
              'code',
              null,
              'appCode'
            ),
            ' when initializing the client.'
          ),
          links: [{
            title: 'View guide',
            href: 'http://docs.chromaticqa.com/',
            target: '_blank'
          }]
        }));
      }
      if (activeError === 'no-isolator-connection') {
        notifications.push(_react2.default.createElement(Notification, {
          key: 'no-isolator-connection',
          title: 'Failed to connect to Chromatic Server.',
          desc: 'Ensure you\u2019re running it in your node process and have set ports correctly.',
          links: [{
            title: 'Learn More',
            href: 'http://docs.chromaticqa.com/',
            target: '_blank'
          }]
        }));
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          Chromatic,
          { loading: loading, active: active },
          _react2.default.createElement(
            Buttons,
            null,
            _react2.default.createElement(Launcher, {
              loading: loading,
              error: !!criticalError,
              active: active,
              count: detectedComponentCount,
              onClick: this.onToggleActive
            }),
            componentCount > 0 && _react2.default.createElement(Tester, { onClick: this.onShowBuildInstructions, highlight: appOnboardingIndex === 3 })
          ),
          _react2.default.createElement(
            Notifications,
            null,
            notifications
          ),
          _react2.default.createElement(Shade, { active: active })
        ),
        active && _react2.default.createElement(_WidgetScanner2.default, {
          specs: detectedSpecs,
          onShowComponentSpecs: onShowComponentSpecs,
          onCreateSpec: onCreateSpec
        })
      );
    }
  }]);
  return WidgetScreen;
}(_react.Component);

WidgetScreen.propTypes = {
  loading: _propTypes2.default.bool,
  componentCount: _propTypes2.default.number,
  detectedReact: _propTypes2.default.bool.isRequired,
  detectedSpecs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    internalId: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string,
    component: _propTypes2.default.shape({
      name: _propTypes2.default.string.isRequired
    }).isRequired,
    status: _propTypes2.default.oneOf(['unsaved', 'saving', 'saved', 'unsaveable']).isRequired,
    unsaveableReason: _propTypes2.default.string,
    domElement: _propTypes2.default.instanceOf(typeof Element !== 'undefined' ? Element : Object).isRequired
  }).isRequired).isRequired,
  active: _propTypes2.default.bool.isRequired,
  testCommand: _propTypes2.default.string,
  activeError: _propTypes2.default.oneOf(['no-isolator-connection', null]),
  criticalError: _propTypes2.default.oneOf(['no-app-code', 'bad-app-code', null]),
  onCreateSpec: _propTypes2.default.func,
  onShowComponentSpecs: _propTypes2.default.func.isRequired,
  onActivate: _propTypes2.default.func.isRequired
};

WidgetScreen.defaultProps = {
  loading: false,
  componentCount: 0,
  detectedSpecs: [],
  testCommand: 'loading',
  activeError: null,
  criticalError: null,
  appOnboarded: false,
  appOnboardingIndex: 0,
  appHasComponents: true,
  onCreateSpec: function onCreateSpec() {
    return 0;
  }
};

exports.default = (0, _mobxReact.observer)(WidgetScreen);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/* eslint-disable no-use-before-define */

var createStringTreeNode = exports.createStringTreeNode = function createStringTreeNode(value) {
  return {
    type: 'string',
    value: value
  };
};

var createNumberTreeNode = exports.createNumberTreeNode = function createNumberTreeNode(value) {
  return {
    type: 'number',
    value: value
  };
};

var createReactElementTreeNode = exports.createReactElementTreeNode = function createReactElementTreeNode(displayName, props, defaultProps, childrens) {
  return {
    type: 'ReactElement',
    displayName: displayName,
    props: props,
    defaultProps: defaultProps,
    childrens: childrens
  };
};
//# sourceMappingURL=tree.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/values");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("ejson");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("es6-error");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("react-popper");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("validatorjs");

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(36);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(34);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['', ';'], ['', ';']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n          mutation WidgetCreateAppTokenMutation($code: String!) {\n            createAppToken(code: $code)\n          }\n        '], ['\n          mutation WidgetCreateAppTokenMutation($code: String!) {\n            createAppToken(code: $code)\n          }\n        ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _apolloClient = __webpack_require__(125);

var _apolloClient2 = _interopRequireDefault(_apolloClient);

var _reactApollo = __webpack_require__(26);

var _graphqlTag = __webpack_require__(25);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _WidgetScreen = __webpack_require__(51);

var _WidgetScreen2 = _interopRequireDefault(_WidgetScreen);

var _WidgetPage = __webpack_require__(112);

var _WidgetPage2 = _interopRequireDefault(_WidgetPage);

var _SpecsPage = __webpack_require__(111);

var _SpecsPage2 = _interopRequireDefault(_SpecsPage);

var _components = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bodyStyles = _components.global.bodyStyles;


var StyleWrapper = _styledComponents2.default.div(_templateObject, bodyStyles);

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.token = null;

    var networkInterface = (0, _apolloClient.createNetworkInterface)({
      uri: _this.props.indexUrl + '/graphql'
    });

    networkInterface.use([{
      applyMiddleware: function applyMiddleware(req, next) {
        if (_this.token) {
          req.options.headers = (0, _extends3.default)({}, req.options.headers, {
            authorization: 'bearer ' + _this.token
          });
        }
        next();
      }
    }]);

    _this.apollo = new _apolloClient2.default({
      networkInterface: networkInterface
    });

    // While we are fetching our token, we just render loading
    _this.state = {
      Page: _WidgetScreen2.default,
      pageProps: { loading: true },
      active: false
    };

    _this.onShowComponentSpecs = _this.onShowComponentSpecs.bind(_this);
    _this.onHideComponentSpecs = _this.onHideComponentSpecs.bind(_this);
    _this.onActivate = _this.onActivate.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'componentWillMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var appCode, _ref2, createAppToken;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                appCode = this.props.appCode;

                if (appCode) {
                  _context.next = 4;
                  break;
                }

                this.setState({
                  Page: _WidgetScreen2.default,
                  pageProps: { criticalError: 'no-app-code' }
                });
                return _context.abrupt('return');

              case 4:
                _context.prev = 4;
                _context.next = 7;
                return this.apollo.mutate({
                  mutation: (0, _graphqlTag2.default)(_templateObject2),
                  variables: {
                    code: this.props.appCode
                  }
                });

              case 7:
                _ref2 = _context.sent;
                createAppToken = _ref2.data.createAppToken;

                this.token = createAppToken;
                this.setState({
                  Page: _WidgetPage2.default,
                  pageProps: {}
                });
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](4);

                // XXX: should check the error type here
                this.setState({
                  Page: _WidgetScreen2.default,
                  pageProps: { criticalError: 'bad-app-code' }
                });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 13]]);
      }));

      function componentWillMount() {
        return _ref.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: 'onShowComponentSpecs',
    value: function onShowComponentSpecs(componentName, specInternalId) {
      this.setState({
        Page: _SpecsPage2.default,
        pageProps: { componentName: componentName, specInternalId: specInternalId }
      });
    }
  }, {
    key: 'onHideComponentSpecs',
    value: function onHideComponentSpecs() {
      this.setState({
        Page: _WidgetPage2.default,
        pageProps: {}
      });
    }
  }, {
    key: 'onActivate',
    value: function onActivate(active) {
      this.setState({ active: active });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          appCode = _props.appCode,
          isolatorOptions = _props.isolatorOptions,
          detectedReact = _props.detectedReact,
          specs = _props.specs;
      var _state = this.state,
          Page = _state.Page,
          pageProps = _state.pageProps,
          active = _state.active;


      var detectedSpecs = specs.filter(function (s) {
        return s.status !== 'inactive';
      });

      return _react2.default.createElement(
        _reactApollo.ApolloProvider,
        { client: this.apollo },
        _react2.default.createElement(
          StyleWrapper,
          null,
          _react2.default.createElement(Page, (0, _extends3.default)({}, pageProps, {
            appCode: appCode,
            isolatorOptions: isolatorOptions,
            detectedReact: detectedReact,
            detectedSpecs: detectedSpecs,
            active: active,
            onShowComponentSpecs: this.onShowComponentSpecs,
            onHideComponentSpecs: this.onHideComponentSpecs,
            onActivate: this.onActivate
          }))
        )
      );
    }
  }]);
  return App;
}(_react.Component);

App.propTypes = {
  indexUrl: _propTypes2.default.string.isRequired,
  appCode: _propTypes2.default.string.isRequired,
  isolatorOptions: _propTypes2.default.shape({
    noTunnel: _propTypes2.default.bool.isRequired,
    port: _propTypes2.default.number.isRequired
  }).isRequired,
  detectedReact: _propTypes2.default.bool.isRequired,
  specs: _propTypes2.default.arrayOf(_propTypes2.default.shape({}).isRequired).isRequired
};

exports.default = App;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(13);

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.requireContextToComponentMap = requireContextToComponentMap;
exports.arrayToComponentMap = arrayToComponentMap;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addComponentToMap(componentMap, component) {
  var displayName = component && (component.displayName || component.name);
  if (displayName) {
    // eslint-disable-next-line no-param-reassign
    componentMap[displayName] = component;
  }
}

function addModuleExportToComponentMap(componentMap, moduleExport) {
  var remainingExports = moduleExport;

  // This is the case if `moduleExport` is a SFC or even extends React.Component
  // (of course it could be neither, but we can't tell)
  if (typeof moduleExport === 'function') {
    addComponentToMap(componentMap, moduleExport);
    return componentMap;
  }

  // eslint-disable-next-line no-underscore-dangle
  if (moduleExport.__esModule) {
    var defaultExport = moduleExport.default,
        __esModule = moduleExport.__esModule,
        rest = (0, _objectWithoutProperties3.default)(moduleExport, ['default', '__esModule']);

    remainingExports = rest;

    if (defaultExport) {
      addComponentToMap(componentMap, defaultExport);
    }
  }

  (0, _keys2.default)(remainingExports).forEach(function (name) {
    addComponentToMap(componentMap, moduleExport[name]);
  });

  return componentMap;
}

function requireContextToComponentMap(requireContexts) {
  var componentMap = {};
  [].concat(requireContexts).forEach(function (requireContext) {
    requireContext.keys().forEach(function (filename) {
      addModuleExportToComponentMap(componentMap, requireContext(filename));
    });
  });
  return componentMap;
}

function arrayToComponentMap(components) {
  var componentMap = {};
  components.forEach(function (component) {
    addComponentToMap(componentMap, component);
  });
  return componentMap;
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toConsumableArray2 = __webpack_require__(55);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = configure;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(27);

var _renderSpec = __webpack_require__(110);

var _renderSpec2 = _interopRequireDefault(_renderSpec);

var _render = __webpack_require__(31);

var _serialize = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chromaticRoot = void 0; /* eslint-env browser */


var drawn = false;
function drawIsolator() {
  if (drawn) {
    return;
  }
  var styles = '\n  body {\n    margin: 0;\n  }\n  /* ensure a given element is not laid out at all */\n  .' + _render.NO_LAYOUT_CLASS + ' {\n    margin: 0 !important;\n    padding: 0 !important;\n    position: static !important;\n  }\n  ';
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
  var components = _ref.components,
      runtimes = _ref.runtimes,
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
      element = (0, _renderSpec2.default)(parsedSpec, components);
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/* eslint-disable no-underscore-dangle, global-require */
if (!global._babelPolyfill) {
  __webpack_require__(126);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(123)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(53);

var _stringify2 = _interopRequireDefault(_stringify);

exports.insertElementSpec = insertElementSpec;
exports.markSpecsInactive = markSpecsInactive;
exports.default = detectSpecs;

var _mobx = __webpack_require__(18);

var _devtools = __webpack_require__(37);

var _devtools2 = _interopRequireDefault(_devtools);

var _SpecDetector = __webpack_require__(108);

var _SpecDetector2 = _interopRequireDefault(_SpecDetector);

var _Spec = __webpack_require__(23);

var _Spec2 = _interopRequireDefault(_Spec);

var _ErrorSpec = __webpack_require__(48);

var _ErrorSpec2 = _interopRequireDefault(_ErrorSpec);

var _errors = __webpack_require__(49);

var _UnserializeableInputError = __webpack_require__(47);

var _UnserializeableInputError2 = _interopRequireDefault(_UnserializeableInputError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// For debugging
// const formatSpec = s => `${s.component.name}:${s.node.id}[${s.node.children[0]}]`;

// Sort a list of specs so any spec that is a parent (in the VDOM tree) comes before it's child.
// This function assumes that the specs are continuous -- there is no "gap" between specs.
// The only time there can be a gap is if the spec is updating--i.e. there will be a gap
// just for it. Bail if we see something different.
function insertElementSpec(specs, spec) {
  var specChild = spec.node.children[0];
  for (var i = 0; i <= specs.length; i += 1) {
    if (i === specs.length || specChild === specs[i].node.id) {
      if (i > 0 && specs[i - 1].node.children[0] !== spec.node.id) {
        // For some unknown reason, devtools sometimes just re-emits mount events
        // for a tree of the VDOM with all new nodes, for no apparent reason.
        // I can't really see what we can do about it? So we just reset what
        // we know about this DOM element
        // throw new Error(
        //   `Spec detected in unexpected position: ${formatSpec(spec)}, ${specs.map(formatSpec)}`
        // );
        // eslint-disable-next-line no-use-before-define
        specs.forEach(function (s) {
          return removeSpec(s);
        });
        specs.splice(0, specs.length, spec);
      } else {
        specs.splice(i, 0, spec);
      }
      return specs;
    }
  }

  // this code is actually unreachable but eslint doesn't know
  return specs;
}

// Mark every spec for this element as "inactive", apart from the first
// non-error spec in the list (ordered as per above)
function markSpecsInactive(specs) {
  var allErrors = !specs.find(function (s) {
    return !s.error;
  });
  var foundFirst = false;
  specs.forEach(function (spec) {
    if (!allErrors && spec.status === 'unsaveable' || foundFirst) {
      // eslint-disable-next-line no-param-reassign
      spec.status = 'inactive';
    } else {
      foundFirst = true;
    }
  });
  return specs;
}

var detectedSpecs = (0, _mobx.observable)([]);
var knownElements = [];
// For each element above, an array of specs that attach to this element
var specsForKnownElements = [];
var specsByNodeId = {};

function specsForKnownElementForSpec(spec) {
  var elementIndex = knownElements.indexOf(spec.domElement);
  if (elementIndex === -1) {
    elementIndex = knownElements.length;
    knownElements.push(spec.domElement);
    specsForKnownElements.push([]);
  }
  return specsForKnownElements[elementIndex];
}

function addNewSpec(spec) {
  // console.log('add', spec.domNode);
  // events.push(`add ${spec.node.id}`);
  detectedSpecs.push(spec);
  specsByNodeId[spec.node.id] = spec;

  var specsForElement = specsForKnownElementForSpec(spec);
  // console.log(specsForElement.map(s => `${s.component.name}-${s.status}`));
  insertElementSpec(specsForElement, spec);
  // console.log(specsForElement.map(s => `${s.component.name}-${s.status}`));

  markSpecsInactive(specsForElement);
  // console.log(specsForElement.map(s => `${s.component.name}-${s.status}`));
}

function removeSpecFromList(list, spec) {
  list.splice(list.indexOf(spec), 1);
}

function removeSpec(spec) {
  specsByNodeId[spec.node.id] = null;
  removeSpecFromList(detectedSpecs, spec);
  removeSpecFromList(specsForKnownElementForSpec(spec), spec);
}

function detectSpecs(_ref) {
  var componentNames = _ref.componentNames,
      log = _ref.log;

  (0, _devtools2.default)(function (_ref2) {
    var node = _ref2.node,
        nodeId = _ref2.nodeId,
        element = _ref2.element,
        event = _ref2.event;

    if (event === 'unmount') {
      var _spec = specsByNodeId[nodeId];
      if (_spec) {
        removeSpec(_spec);
      }
      return;
    }

    var input = void 0;
    var detectedError = void 0;
    try {
      input = (0, _SpecDetector2.default)({ node: node, element: element });
    } catch (error) {
      var knownError = error instanceof _UnserializeableInputError2.default || error instanceof _errors.DetectionError || error instanceof _errors.UnattachedNodeError;

      if (log === 'info') {
        console.log('Chromatic: ' + error);
      } else if (!knownError && log !== 'quiet') {
        console.error('Chromatic: failed to handle node:');
        console.error(error);
        console.error(node);
        console.error(element);
      }

      detectedError = error;
    }

    // The previous version of this spec is no longer visible on the screen.
    // We remove it, there is not point in keeping it, then proceed as for a
    // brand new spec / error
    // In theory this should only happen for the 'update' event,
    // But devtools seems inconsistent will sometime shoot off mount events for
    // nodes that have been mounted before and not ever unmounted
    // (also sometimes update events for not-yet mounted nodes.)
    // It's best just to treat 'mount' and 'update' the same, I guess
    var oldSpec = specsByNodeId[node.id];
    if (oldSpec) {
      if (input && (0, _stringify2.default)(input) === oldSpec.key) {
        // Nothing's changed, so pull out
        return;
      }
      removeSpec(oldSpec);
    }

    var spec = void 0;
    if (input) {
      if (componentNames.find(function (n) {
        return n === input.element.name;
      })) {
        spec = new _Spec2.default({
          input: input,
          domElement: element,
          node: node
        });
      } else {
        spec = new _ErrorSpec2.default({
          error: new Error('Unknown component \'' + input.element.name + '\''),
          node: node,
          domElement: element
        });
      }
    } else if (detectedError) {
      // Don't show UnattachedNodeErrors because
      //   (a) you can't see them by definition,
      //   (b) they could be our nodes! we can't tell as they are unattached ;)
      if (!(detectedError instanceof _errors.UnattachedNodeError)) {
        spec = new _ErrorSpec2.default({
          error: detectedError,
          node: node,
          domElement: element
        });
      }
    }

    if (spec) {
      addNewSpec(spec);
    }
  });

  return detectedSpecs;
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(13);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background: ', ';\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: top;\n  overflow: hidden;\n\n  height: ', 'px;\n  width: ', 'px;\n  line-height: ', 'px;\n\n  ', '\n\n  ', '\n\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n  }\n\n  svg {\n    position: relative;\n    bottom: -2px;\n    height: 100%;\n    width: 100%;\n    vertical-align: top;\n  }\n\n  path {\n    fill: ', ';\n    animation: ', ' 1.5s ease-in-out infinite;\n  }\n'], ['\n  background: ', ';\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: top;\n  overflow: hidden;\n\n  height: ', 'px;\n  width: ', 'px;\n  line-height: ', 'px;\n\n  ', '\n\n  ', '\n\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n  }\n\n  svg {\n    position: relative;\n    bottom: -2px;\n    height: 100%;\n    width: 100%;\n    vertical-align: top;\n  }\n\n  path {\n    fill: ', ';\n    animation: ', ' 1.5s ease-in-out infinite;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    height: ', 'px;\n    width: ', 'px;\n    line-height: ', 'px;\n\t'], ['\n    height: ', 'px;\n    width: ', 'px;\n    line-height: ', 'px;\n\t']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  text-align: center;\n\n\n  font-size: ', 'px;\n  line-height: ', 'px;\n\n  ', '\n\n  ', '\n'], ['\n  color: ', ';\n  text-align: center;\n\n\n  font-size: ', 'px;\n  line-height: ', 'px;\n\n  ', '\n\n  ', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    font-size: ', 'px;\n    line-height: ', 'px;\n  '], ['\n    font-size: ', 'px;\n    line-height: ', 'px;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

var _animation = __webpack_require__(7);

var _Icon = __webpack_require__(14);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = {
  large: 40,
  medium: 28,
  small: 20
};

// prettier-ignore
var Image = _styledComponents2.default.div(_templateObject, function (props) {
  return !props.loading ? "#E6F9F8" : _styles.color.light;
}, sizes.medium, sizes.medium, sizes.medium, function (props) {
  return props.size === "small" && (0, _styledComponents.css)(_templateObject2, sizes.small, sizes.small, sizes.small);
}, function (props) {
  return props.size === "large" && (0, _styledComponents.css)(_templateObject2, sizes.large, sizes.large, sizes.large);
}, _styles.color.medium, _animation.glow);

// prettier-ignore
var Initial = _styledComponents2.default.div(_templateObject3, _styles.color.darker, _styles.typography.size.s2, sizes.medium, function (props) {
  return props.size === "small" && (0, _styledComponents.css)(_templateObject4, _styles.typography.size.s1, sizes.small);
}, function (props) {
  return props.size === "large" && (0, _styledComponents.css)(_templateObject4, _styles.typography.size.s3, sizes.large);
});

function Avatar(_ref) {
  var loading = _ref.loading,
      username = _ref.username,
      src = _ref.src,
      size = _ref.size,
      props = (0, _objectWithoutProperties3.default)(_ref, ['loading', 'username', 'src', 'size']);

  var avatarFigure = _react2.default.createElement(_Icon2.default, { icon: 'useralt' });

  if (!loading) {
    if (!src) {
      avatarFigure = _react2.default.createElement(
        Initial,
        { size: size },
        username.substring(0, 1)
      );
    } else {
      avatarFigure = _react2.default.createElement('img', { src: src, alt: username });
    }
  }

  return _react2.default.createElement(
    Image,
    (0, _extends3.default)({ size: size, loading: loading }, props, { title: username }),
    avatarFigure
  );
}

Avatar.propTypes = {
  loading: _propTypes2.default.bool,
  username: _propTypes2.default.string,
  src: _propTypes2.default.string,
  size: _propTypes2.default.oneOf((0, _keys2.default)(sizes))
};

Avatar.defaultProps = {
  loading: false,
  username: null,
  src: null,
  size: 'medium'
};

exports.default = Avatar;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  font-size: 10px;\n  font-weight: ', ';\n  line-height: 12px;\n  text-align: center;\n  padding: 4px 7px 4px;\n  border-radius: 3em;\n\n  color: ', ';\n\n  ', '\n  ', '\n  ', '\n'], ['\n  display: inline-block;\n  font-size: 10px;\n  font-weight: ', ';\n  line-height: 12px;\n  text-align: center;\n  padding: 4px 7px 4px;\n  border-radius: 3em;\n\n  color: ', ';\n\n  ', '\n  ', '\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    background-color: ', ';\n    background-image: linear-gradient(20deg, #74E48B 0%, #61D135 100%);\n\t'], ['\n    background-color: ', ';\n    background-image: linear-gradient(20deg, #74E48B 0%, #61D135 100%);\n\t']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    background-color: ', ';\n    background-image: linear-gradient(22deg, #EB7E44 0%, #FF4400 100%), linear-gradient(-245deg, rgba(255,219,0,0.30) 5%, rgba(0,0,0,0.00) 100%);\n\t'], ['\n    background-color: ', ';\n    background-image: linear-gradient(22deg, #EB7E44 0%, #FF4400 100%), linear-gradient(-245deg, rgba(255,219,0,0.30) 5%, rgba(0,0,0,0.00) 100%);\n\t']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    background-color: ', ';\n    background-image: linear-gradient(20deg, #FED230 0%, #FEBB30 100%);\n\t'], ['\n    background-color: ', ';\n    background-image: linear-gradient(20deg, #FED230 0%, #FEBB30 100%);\n\t']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Badge = _styledComponents2.default.div(_templateObject, _styles.typography.weight.bold, _styles.color.lightest, function (props) {
  return props.positive && (0, _styledComponents.css)(_templateObject2, _styles.color.positive);
}, function (props) {
  return props.negative && (0, _styledComponents.css)(_templateObject3, _styles.color.negative);
}, function (props) {
  return props.warning && (0, _styledComponents.css)(_templateObject4, _styles.color.warning);
});
function BadgeCount(_ref) {
  var count = _ref.count,
      props = (0, _objectWithoutProperties3.default)(_ref, ['count']);

  return _react2.default.createElement(
    Badge,
    props,
    count
  );
}

BadgeCount.propTypes = {
  count: _propTypes2.default.number.isRequired
};

exports.default = BadgeCount;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', ';\n  margin-right: .5em;\n'], ['\n  ', ';\n  margin-right: .5em;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: ', 'px;\n  font-weight: ', ';\n  display: inline-block;\n\n  svg {\n    display: inline-block;\n    height: .85em;\n    width: .85em;\n    vertical-align: text-top;\n    position: relative;\n    bottom: -.225em;\n    margin: 0 .25em;\n\n    path {\n      fill: ', ';\n    }\n  }\n'], ['\n  font-size: ', 'px;\n  font-weight: ', ';\n  display: inline-block;\n\n  svg {\n    display: inline-block;\n    height: .85em;\n    width: .85em;\n    vertical-align: text-top;\n    position: relative;\n    bottom: -.225em;\n    margin: 0 .25em;\n\n    path {\n      fill: ', ';\n    }\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)([''], ['']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

var _animation = __webpack_require__(7);

var _Link = __webpack_require__(15);

var _Link2 = _interopRequireDefault(_Link);

var _Icon = __webpack_require__(14);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Loading = _styledComponents2.default.span(_templateObject, _animation.inlineGlow);

// prettier-ignore
var Crumb = _styledComponents2.default.div(_templateObject2, _styles.typography.size.s2, _styles.typography.weight.extrabold, function (props) {
  return props.inverse ? _styles.color.lightest : _styles.color.mediumdark;
});

var BreadcrumbWrapper = _styledComponents2.default.div(_templateObject3);

function Breadcrumb(_ref) {
  var loading = _ref.loading,
      crumbs = _ref.crumbs,
      inverse = _ref.inverse,
      LinkWrapper = _ref.LinkWrapper,
      props = (0, _objectWithoutProperties3.default)(_ref, ['loading', 'crumbs', 'inverse', 'LinkWrapper']);

  var crumbsLinks = crumbs.map(function (_ref2, index) {
    var pathname = _ref2.pathname,
        href = _ref2.href;

    var link = _react2.default.createElement(
      _Link2.default,
      { inverse: inverse, tertiary: !inverse, href: href },
      pathname
    );
    if (LinkWrapper) {
      link = _react2.default.createElement(
        LinkWrapper,
        { href: href },
        link
      );
    }

    return _react2.default.createElement(
      Crumb,
      { key: pathname, inverse: inverse, loading: loading },
      !loading && link,
      loading && _react2.default.createElement(
        Loading,
        null,
        pathname
      ),
      !loading && index !== crumbs.length - 1 && _react2.default.createElement(_Icon2.default, { icon: 'arrowright', inverse: inverse })
    );
  });

  return _react2.default.createElement(
    BreadcrumbWrapper,
    (0, _extends3.default)({ loading: loading }, props),
    crumbsLinks
  );
}

Breadcrumb.propTypes = {
  loading: _propTypes2.default.bool,
  crumbs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    pathname: _propTypes2.default.string.isRequired,
    href: _propTypes2.default.string.isRequired
  })),
  inverse: _propTypes2.default.bool,
  LinkWrapper: _propTypes2.default.func
};

Breadcrumb.defaultProps = {
  loading: false,
  crumbs: [{
    pathname: 'Loading',
    href: '/loading'
  }, {
    pathname: 'Just-one',
    href: '/loading'
  }, {
    pathname: 'Moment',
    href: '/loading'
  }],
  inverse: false,
  LinkWrapper: null
};

exports.default = Breadcrumb;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  transform: translate3d(0,0,0);\n  display: inline-block;\n  opacity: 1;\n'], ['\n  transform: translate3d(0,0,0);\n  display: inline-block;\n  opacity: 1;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  transform: translate3d(0, 100%, 0);\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  opacity: 0;\n'], ['\n  transform: translate3d(0, 100%, 0);\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  opacity: 0;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  ', ', ', ' { transition: all 700ms ', '; }\n\n  &:hover {\n    ', ' {\n      transform: translate3d(0,-100%,0);\n      opacity: 0;\n    }\n    ', ' {\n      transform: translate3d(0, -50%,0);\n      opacity: 1;\n    }\n  }\n\n'], ['\n  ', ', ', ' { transition: all 700ms ', '; }\n\n  &:hover {\n    ', ' {\n      transform: translate3d(0,-100%,0);\n      opacity: 0;\n    }\n    ', ' {\n      transform: translate3d(0, -50%,0);\n      opacity: 1;\n    }\n  }\n\n']);

exports.default = ButtonHover;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animation = __webpack_require__(7);

var _Button = __webpack_require__(22);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Rest = _styledComponents2.default.span(_templateObject);

// prettier-ignore
var Hover = _styledComponents2.default.span(_templateObject2);

// prettier-ignore
var ButtonHoverInner = (0, _styledComponents2.default)(_Button2.default)(_templateObject3, Rest, Hover, _animation.easing.rubber, Rest, Hover);

function ButtonHover(_ref) {
  var text = _ref.text,
      active = _ref.active,
      props = (0, _objectWithoutProperties3.default)(_ref, ['text', 'active']);

  var restText = text[0];
  var hoverText = text[1];

  return _react2.default.createElement(
    ButtonHoverInner,
    (0, _extends3.default)({ active: active }, props),
    _react2.default.createElement(
      Rest,
      null,
      restText
    ),
    _react2.default.createElement(
      Hover,
      null,
      hoverText
    )
  );
}

ButtonHover.propTypes = {
  text: _propTypes2.default.arrayOf(_propTypes2.default.string.isRequired).isRequired,
  active: _propTypes2.default.bool
};
ButtonHover.defaultProps = {
  active: false
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  &:first-child {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    padding-left: ', 'px;\n  }\n  &:last-child {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    padding-right: ', 'px;\n  }\n  &:not(:first-child):not(:last-child) {\n    border-radius: 0;\n  }\n  &:not(:first-child) {\n    margin-left: -1px;\n  }\n\n  &:hover {\n    position: relative;\n    z-index: 1;\n  }\n'], ['\n  &:first-child {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    padding-left: ', 'px;\n  }\n  &:last-child {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    padding-right: ', 'px;\n  }\n  &:not(:first-child):not(:last-child) {\n    border-radius: 0;\n  }\n  &:not(:first-child) {\n    margin-left: -1px;\n  }\n\n  &:hover {\n    position: relative;\n    z-index: 1;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  vertical-align: top;\n  white-space: nowrap;\n'], ['\n  display: inline-block;\n  vertical-align: top;\n  white-space: nowrap;\n']);

exports.default = ButtonToggle;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Button = __webpack_require__(22);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var ButtonToggleInner = (0, _styledComponents2.default)(_Button2.default)(_templateObject, function (props) {
  return props.small ? '20' : '24';
}, function (props) {
  return props.small ? '20' : '24';
});

// prettier-ignore
var ButtonToggleWrapper = _styledComponents2.default.div(_templateObject2);

function ButtonToggle(_ref) {
  var titles = _ref.titles,
      onSelectIndex = _ref.onSelectIndex,
      selectedIndex = _ref.selectedIndex,
      props = (0, _objectWithoutProperties3.default)(_ref, ['titles', 'onSelectIndex', 'selectedIndex']);

  return _react2.default.createElement(
    ButtonToggleWrapper,
    props,
    titles.map(function (title, index) {
      return _react2.default.createElement(
        ButtonToggleInner,
        (0, _extends3.default)({
          key: title,
          active: index === selectedIndex,
          onClick: function onClick() {
            return onSelectIndex(index);
          },
          outline: true
        }, props),
        title
      );
    })
  );
}

ButtonToggle.propTypes = {
  titles: _propTypes2.default.arrayOf(_propTypes2.default.string.isRequired).isRequired,
  onSelectIndex: _propTypes2.default.func.isRequired,
  selectedIndex: _propTypes2.default.number.isRequired
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  display: block;\n\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n\n  span {\n    display: inline-block;\n  }\n\n'], ['\n  color: ', ';\n  display: block;\n\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n\n  span {\n    display: inline-block;\n  }\n\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    color: ', ';\n\t'], ['\n    color: ', ';\n\t']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    color: ', ';\n    text-decoration: none;\n    &:hover { color: ', ';}\n    &:active { color: ', ';}\n\t'], ['\n    color: ', ';\n    text-decoration: none;\n    &:hover { color: ', ';}\n    &:active { color: ', ';}\n\t']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  span {\n    display: inline-block;\n  }\n'], ['\n  span {\n    display: inline-block;\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  text-align: ', ';\n  vertical-align: top;\n  padding: 8px 12px;\n  border-radius: 4px;\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ' {\n    font-weight: ', ';\n    font-size: ', 'px;\n    line-height: ', 'px;\n    margin-bottom: 2px;\n  }\n\n  ', ' {\n    color: ', ';\n    font-size: ', 'px;\n    line-height: ', 'px;\n    clear: both;\n  }\n'], ['\n  display: inline-block;\n  text-align: ', ';\n  vertical-align: top;\n  padding: 8px 12px;\n  border-radius: 4px;\n\n  ', ';\n\n  ', ';\n\n  ', ';\n\n  ', ' {\n    font-weight: ', ';\n    font-size: ', 'px;\n    line-height: ', 'px;\n    margin-bottom: 2px;\n  }\n\n  ', ' {\n    color: ', ';\n    font-size: ', 'px;\n    line-height: ', 'px;\n    clear: both;\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n    ', ', ', ' {\n      overflow: hidden;\n\n      > span, a {\n        ', ';\n      }\n    }\n\t'], ['\n    ', ', ', ' {\n      overflow: hidden;\n\n      > span, a {\n        ', ';\n      }\n    }\n\t']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n    cursor: pointer;\n\n    &:hover {\n      background: ', ';\n    }\n\t'], ['\n    cursor: pointer;\n\n    &:hover {\n      background: ', ';\n    }\n\t']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n    background: ', ';\n\t'], ['\n    background: ', ';\n\t']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = __webpack_require__(21);

var _styles = __webpack_require__(5);

var _animation = __webpack_require__(7);

var _Link = __webpack_require__(15);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Count = _styledComponents2.default.div(_templateObject, _styles.color.dark, function (props) {
  return props.status === 'positive' && (0, _styledComponents.css)(_templateObject2, _styles.color.positive);
}, function (props) {
  return props.status === 'negative' && (0, _styledComponents.css)(_templateObject2, _styles.color.negative);
}, function (props) {
  return props.status === 'warning' && (0, _styledComponents.css)(_templateObject2, _styles.color.warning);
}, function (props) {
  return props.status === 'neutral' && (0, _styledComponents.css)(_templateObject2, _styles.color.mediumdark);
}, function (props) {
  return props.status === 'link' && (0, _styledComponents.css)(_templateObject3, _styles.color.primary, (0, _polished.darken)(0.07, _styles.color.primary), (0, _polished.darken)(0.10, _styles.color.primary));
});

var Text = _styledComponents2.default.div(_templateObject4);

// prettier-ignore
var CardinalInner = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.size === 'small' ? 'left' : 'center';
}, function (props) {
  return props.loading && (0, _styledComponents.css)(_templateObject6, Count, Text, _animation.inlineGlow);
}, function (props) {
  return props.selectable && (0, _styledComponents.css)(_templateObject7, _styles.background.app);
}, function (props) {
  return props.active && (0, _styledComponents.css)(_templateObject8, _styles.background.app);
}, Count, function (props) {
  return props.size === 'small' ? _styles.typography.weight.bold : _styles.typography.weight.regular;
}, function (props) {
  return props.size === 'small' ? _styles.typography.size.s2 : _styles.typography.size.l1;
}, function (props) {
  return props.size === 'small' ? _styles.typography.size.s3 : _styles.typography.size.l1;
}, Text, function (props) {
  return props.size === 'small' ? _styles.color.mediumdark : _styles.color.dark;
}, function (props) {
  return props.size === 'small' ? _styles.typography.size.s1 : _styles.typography.size.s2;
}, _styles.typography.size.s2);

function Cardinal(_ref) {
  var loading = _ref.loading,
      selectable = _ref.selectable,
      onHover = _ref.onHover,
      onClick = _ref.onClick,
      active = _ref.active,
      size = _ref.size,
      count = _ref.count,
      countLink = _ref.countLink,
      text = _ref.text,
      status = _ref.status,
      props = (0, _objectWithoutProperties3.default)(_ref, ['loading', 'selectable', 'onHover', 'onClick', 'active', 'size', 'count', 'countLink', 'text', 'status']);

  var countValue = count;
  if (countLink) {
    countValue = _react2.default.createElement(
      _Link2.default,
      { href: countLink },
      count
    );
  }
  var events = {};
  if (selectable) {
    events = {
      onMouseEnter: function onMouseEnter() {
        return onHover(true);
      },
      onMouseLeave: function onMouseLeave() {
        return onHover(false);
      },
      onClick: onClick
    };
  }

  return _react2.default.createElement(
    CardinalInner,
    (0, _extends3.default)({
      loading: loading,
      selectable: selectable,
      active: active,
      size: size
    }, events, props),
    _react2.default.createElement(
      Count,
      { status: status },
      _react2.default.createElement(
        'span',
        null,
        countValue
      )
    ),
    _react2.default.createElement(
      Text,
      null,
      _react2.default.createElement(
        'span',
        null,
        text
      )
    )
  );
}

Cardinal.propTypes = {
  loading: _propTypes2.default.bool,
  selectable: _propTypes2.default.bool,
  onHover: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  active: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['small', 'large']),
  count: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  countLink: _propTypes2.default.string,
  text: _propTypes2.default.string,
  status: _propTypes2.default.oneOf(['default', 'positive', 'negative', 'warning', 'neutral', 'link'])
};

Cardinal.defaultProps = {
  loading: false,
  selectable: false,
  onHover: function onHover() {
    return 0;
  },
  onClick: function onClick() {
    return 0;
  },
  active: false,
  size: 'large',
  status: 'default',
  count: '000',
  countLink: null,
  text: 'loading'
};

exports.default = Cardinal;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCopyToClipboard = __webpack_require__(135);

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

var _WithTooltip = __webpack_require__(30);

var _WithTooltip2 = _interopRequireDefault(_WithTooltip);

var _TooltipNote = __webpack_require__(45);

var _TooltipNote2 = _interopRequireDefault(_TooltipNote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Clipboard = function (_Component) {
  (0, _inherits3.default)(Clipboard, _Component);

  function Clipboard(props) {
    (0, _classCallCheck3.default)(this, Clipboard);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Clipboard.__proto__ || (0, _getPrototypeOf2.default)(Clipboard)).call(this, props));

    _this.state = { copied: false };
    _this.onHideConfirmation = _this.onHideConfirmation.bind(_this);
    _this.onShowConfirmation = _this.onShowConfirmation.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Clipboard, [{
    key: 'onHideConfirmation',
    value: function onHideConfirmation() {
      var _this2 = this;

      clearTimeout(this.timeout);
      var hide = function hide() {
        return _this2.setState({ copied: false });
      };
      this.timeout = setTimeout(hide, 300);
    }
  }, {
    key: 'onShowConfirmation',
    value: function onShowConfirmation() {
      clearTimeout(this.timeout);
      this.setState({ copied: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          toCopy = _props.toCopy,
          props = (0, _objectWithoutProperties3.default)(_props, ['children', 'toCopy']);

      return _react2.default.createElement(
        _reactCopyToClipboard2.default,
        (0, _extends3.default)({ text: toCopy, onCopy: this.onShowConfirmation }, props),
        _react2.default.createElement(
          _WithTooltip2.default,
          {
            placement: 'top',
            mode: 'hover',
            hasChrome: false,
            tooltip: _react2.default.createElement(_TooltipNote2.default, { note: this.state.copied ? 'Copied' : 'Copy to clipboard' })
          },
          children
        )
      );
    }
  }]);
  return Clipboard;
}(_react.Component);

exports.default = Clipboard;


Clipboard.propTypes = {
  children: _propTypes2.default.node.isRequired,
  toCopy: _propTypes2.default.string.isRequired
};

Clipboard.defaultProps = {};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  overflow-wrap: break-word;\n  max-width: 100%;\n  \n  .hljs{display:block;background:white;padding:0.5em;color:#333333;overflow-x:auto}.hljs-comment,.hljs-meta{color:#969896}.hljs-string,.hljs-variable,.hljs-template-variable,.hljs-strong,.hljs-emphasis,.hljs-quote{color:#df5000}.hljs-keyword,.hljs-selector-tag,.hljs-type{color:#a71d5d}.hljs-literal,.hljs-symbol,.hljs-bullet,.hljs-attribute{color:#0086b3}.hljs-section,.hljs-name{color:#63a35c}.hljs-tag{color:#333333}.hljs-title,.hljs-attr,.hljs-selector-id,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo{color:#795da3}.hljs-addition{color:#55a532;background-color:#eaffea}.hljs-deletion{color:#bd2c00;background-color:#ffecec}.hljs-link{text-decoration:underline}\n'], ['\n  color: ', ';\n  overflow-wrap: break-word;\n  max-width: 100%;\n  \n  .hljs{display:block;background:white;padding:0.5em;color:#333333;overflow-x:auto}.hljs-comment,.hljs-meta{color:#969896}.hljs-string,.hljs-variable,.hljs-template-variable,.hljs-strong,.hljs-emphasis,.hljs-quote{color:#df5000}.hljs-keyword,.hljs-selector-tag,.hljs-type{color:#a71d5d}.hljs-literal,.hljs-symbol,.hljs-bullet,.hljs-attribute{color:#0086b3}.hljs-section,.hljs-name{color:#63a35c}.hljs-tag{color:#333333}.hljs-title,.hljs-attr,.hljs-selector-id,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo{color:#795da3}.hljs-addition{color:#55a532;background-color:#eaffea}.hljs-deletion{color:#bd2c00;background-color:#ffecec}.hljs-link{text-decoration:underline}\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _highlight = __webpack_require__(130);

var _highlight2 = _interopRequireDefault(_highlight);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE: this is the full styles, requirable at `highlight.js/styles/default.css`
// If/when we know this package is only used inside webpack, we could use CSS-loader
// to require that directly, rather than reproducing it here
// prettier-ignore
var StyledHighlight = _styledComponents2.default.code(_templateObject, _styles.color.darker);

var Highlight = function (_Component) {
  (0, _inherits3.default)(Highlight, _Component);

  function Highlight() {
    (0, _classCallCheck3.default)(this, Highlight);
    return (0, _possibleConstructorReturn3.default)(this, (Highlight.__proto__ || (0, _getPrototypeOf2.default)(Highlight)).apply(this, arguments));
  }

  (0, _createClass3.default)(Highlight, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.highlightCode();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.highlightCode();
    }
  }, {
    key: 'highlightCode',
    value: function highlightCode() {
      if (!this.code.noHighlight) {
        _highlight2.default.highlightBlock(this.code);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          language = _props.language,
          children = _props.children,
          props = (0, _objectWithoutProperties3.default)(_props, ['language', 'children']);


      return _react2.default.createElement(
        'pre',
        props,
        _react2.default.createElement(
          StyledHighlight,
          {
            className: language,
            innerRef: function innerRef(r) {
              _this2.code = r;
            }
          },
          children
        )
      );
    }
  }]);
  return Highlight;
}(_react.Component);

exports.default = Highlight;


Highlight.propTypes = {
  children: _propTypes2.default.node.isRequired,
  language: _propTypes2.default.string
};

Highlight.defaultProps = {
  language: null
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  vertical-align: middle;\n\n  path {\n    fill: ', ';\n  }\n'], ['\n  display: inline-block;\n  vertical-align: middle;\n\n  path {\n    fill: ', ';\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var graphic = {
  path: 'M312.2192,87.5205 C299.9722,66.3085 277.1312,53.1325 252.6092,53.1325 C250.6632,53.1325 248.7262,53.2175 246.8052,53.3855 C247.6912,58.4475 248.1602,63.5955 248.1542,68.7625 L248.1542,129.9145 C248.1542,133.2665 246.3632,136.3605 243.4612,138.0345 L170.0292,180.4315 L170.0292,248.9895 L287.0402,181.4285 C319.8762,162.4795 331.1622,120.3535 312.2192,87.5205 L312.2192,87.5205 Z M160.6452,-0.0005 C133.5102,-0.0005 109.5322,15.5615 98.3632,39.5825 C103.2252,41.3395 107.9072,43.5265 112.3962,46.1255 L229.3952,113.6755 L229.3952,68.7535 C229.3952,30.8395 198.5632,-0.0005 160.6452,-0.0005 L160.6452,-0.0005 Z M220.2152,129.8955 L103.2012,62.3275 C92.7402,56.2955 80.8822,53.0995 68.9022,53.0995 C44.3732,53.0995 21.5372,66.2855 9.2812,87.4965 C-4.2658,110.9995 -2.7828,139.5515 12.4222,161.2205 C16.3582,157.8945 20.5962,154.9265 25.0832,152.3475 L78.0432,121.7705 C79.4962,120.9375 81.1142,120.5145 82.7222,120.5145 C84.3502,120.5145 85.9662,120.9375 87.4132,121.7705 L160.8572,164.1665 L220.2152,129.8955 Z M68.8802,296.8745 C70.8172,296.8745 72.7602,296.7995 74.6992,296.6365 C73.7962,291.5555 73.3512,286.4105 73.3512,281.2305 L73.3442,146.1295 L34.4542,168.5875 C18.5412,177.7715 7.1812,192.5935 2.4192,210.3375 C-2.3408,228.0845 0.1132,246.6075 9.2812,262.5085 C21.5372,283.7115 44.3572,296.8745 68.8802,296.8745 L68.8802,296.8745 Z M208.9232,303.9035 L155.9572,273.3295 C153.0622,271.6565 151.2742,268.5595 151.2742,265.2095 L151.2742,180.4145 L91.8932,146.1255 L91.8932,281.2495 C91.8932,319.1565 122.7442,349.9995 160.6452,349.9995 C187.7972,349.9995 211.7682,334.4385 222.9392,310.4335 C218.0922,308.6805 213.4122,306.4995 208.9232,303.9035 L208.9232,303.9035 Z M179.3932,265.2095 L296.4262,197.6525 C300.9072,195.0615 305.1382,192.0875 309.0732,188.7735 C324.2842,210.4485 325.7812,239.0015 312.2192,262.4975 C299.9662,283.7075 277.1102,296.8865 252.5942,296.8865 C240.6002,296.8865 228.7462,293.6985 218.2942,287.6715 L179.3932,265.2095 Z'
};

// prettier-ignore
var Svg = _styledComponents2.default.svg(_templateObject, function (props) {
  return props.inverse ? _styles.color.lightest : _styles.color.primary;
});

function Logo(_ref) {
  var inverse = _ref.inverse;

  return _react2.default.createElement(
    Svg,
    { viewBox: '0 0 322 350', width: '20px', height: '20px', inverse: inverse },
    _react2.default.createElement('path', { d: graphic.path })
  );
}

Logo.propTypes = {
  inverse: _propTypes2.default.bool.isRequired
};

Logo.defaultProps = {
  inverse: false
};

exports.default = Logo;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wobbler = function (_Component) {
  (0, _inherits3.default)(Wobbler, _Component);

  function Wobbler() {
    (0, _classCallCheck3.default)(this, Wobbler);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Wobbler.__proto__ || (0, _getPrototypeOf2.default)(Wobbler)).call(this));

    _this.state = { wobble: false };
    _this.wobble = _this.wobble.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Wobbler, [{
    key: 'wobble',
    value: function wobble() {
      this.setState({ wobble: Math.random() });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          Animator = _props.Animator,
          duration = _props.duration,
          children = _props.children,
          props = (0, _objectWithoutProperties3.default)(_props, ['Animator', 'duration', 'children']);
      var wobble = this.state.wobble;

      if (wobble) {
        return _react2.default.createElement(
          Animator,
          { key: wobble, duration: duration },
          children
        );
      }
      return _react2.default.createElement(
        'div',
        props,
        children
      );
    }
  }]);
  return Wobbler;
}(_react.Component);

exports.default = Wobbler;


Wobbler.propTypes = {
  Animator: _propTypes2.default.func.isRequired,
  duration: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired
};

Wobbler.defaultProps = {
  duration: null
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin-left: 6px;\n\n  color: ', ';\n  &:hover {\n    color: ', ';\n  }\n  &:active {\n    color: ', ';\n  }\n'], ['\n  margin-left: 6px;\n\n  color: ', ';\n  &:hover {\n    color: ', ';\n  }\n  &:active {\n    color: ', ';\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: ', ';\n  line-height: 16px;\n'], ['\n  font-weight: ', ';\n  line-height: 16px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: ', 'px;\n  padding: 12px 20px;\n  display: block;\n  border-bottom: 1px solid ', ';\n'], ['\n  font-size: ', 'px;\n  padding: 12px 20px;\n  display: block;\n  border-bottom: 1px solid ', ';\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  bottom: 16px;\n  right: 20px;\n  z-index: 2;\n  padding: 3px 5px;\n\n  background: ', ';\n  color: ', ';\n  border-radius: 4px;\n  font-size: ', 'px;\n  line-height: 18px;\n\n  svg {\n    path {\n      fill: ', ';\n    }\n    height: 12px;\n    width: 12px;\n    margin-right: 6px;\n  }\n'], ['\n  position: absolute;\n  bottom: 16px;\n  right: 20px;\n  z-index: 2;\n  padding: 3px 5px;\n\n  background: ', ';\n  color: ', ';\n  border-radius: 4px;\n  font-size: ', 'px;\n  line-height: 18px;\n\n  svg {\n    path {\n      fill: ', ';\n    }\n    height: 12px;\n    width: 12px;\n    margin-right: 6px;\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: ', 'px;\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  z-index: 1;\n\n  ', ' + ', ' {margin-left: 10px;}\n'], ['\n  font-size: ', 'px;\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  z-index: 1;\n\n  ', ' + ', ' {margin-left: 10px;}\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  flex: 0 0 auto;\n\n  ', ' position: relative;\n  margin: 0;\n  top: auto;\n  left: auto;\n'], ['\n  flex: 0 0 auto;\n\n  ', ' position: relative;\n  margin: 0;\n  top: auto;\n  left: auto;\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  position: relative;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media (min-width: ', 'px) {\n    padding: 1rem;\n  }\n'], ['\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  position: relative;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media (min-width: ', 'px) {\n    padding: 1rem;\n  }\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n  ', ';\n  min-height: 10em;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n\n  ', '\n'], ['\n  ', ';\n  min-height: 10em;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n\n  ', '\n']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n    ', ',\n    ', ' ', ' {\n      ', ';\n\n      svg { display: none; }\n    }\n\t'], ['\n    ', ',\n    ', ' ', ' {\n      ', ';\n\n      svg { display: none; }\n    }\n\t']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  margin: 0;\n  display: block;\n'], ['\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  margin: 0;\n  display: block;\n']),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(['\n  display: block;\n  max-width: 100%;\n  height: auto;\n'], ['\n  display: block;\n  max-width: 100%;\n  height: auto;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _recompose = __webpack_require__(17);

var _styles = __webpack_require__(5);

var _animation = __webpack_require__(7);

var _Icon = __webpack_require__(14);

var _Icon2 = _interopRequireDefault(_Icon);

var _Spinner = __webpack_require__(29);

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Link = __webpack_require__(15);

var _Link2 = _interopRequireDefault(_Link);

var _IsolatorFrame = __webpack_require__(77);

var _IsolatorFrame2 = _interopRequireDefault(_IsolatorFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabelLink = (0, _styledComponents2.default)(_Link2.default)(_templateObject, _styles.color.mediumdark, _styles.color.darkest, _styles.color.mediumdark);

// prettier-ignore
var LabelText = _styledComponents2.default.span(_templateObject2, _styles.typography.weight.bold);

// prettier-ignore
var Label = _styledComponents2.default.div(_templateObject3, _styles.typography.size.s2, _styles.color.mediumlight);

var ErrorMessage = _styledComponents2.default.div(_templateObject4, _styles.background.warning, _styles.color.dark, _styles.typography.size.s1, _styles.color.dark);

var Action = (0, _styledComponents2.default)(_Link2.default)(_templateObject5);

// prettier-ignore
var ActionGroup = _styledComponents2.default.div(_templateObject6, _styles.typography.size.s1, Action, Action);

var LoadingSpinner = (0, _styledComponents2.default)(_Spinner2.default)(_templateObject7, '' /* //overrides */);

var CanvasScroll = _styledComponents2.default.div(_templateObject8, _styles.breakpoint);

// prettier-ignore
var CanvasWrapper = _styledComponents2.default.div(_templateObject9, _styles.paper, function (props) {
  return props.loading && (0, _styledComponents.css)(_templateObject10, Label, ActionGroup, Action, _animation.inlineGlow);
});

// prettier-ignore
var Iframe = (0, _styledComponents2.default)(_IsolatorFrame2.default)(_templateObject11);

// prettier-ignore
var Img = _styledComponents2.default.img(_templateObject12);

function Canvas(_ref) {
  var loading = _ref.loading,
      label = _ref.label,
      labelLinkText = _ref.labelLinkText,
      labelLink = _ref.labelLink,
      LinkWrapper = _ref.LinkWrapper,
      interactive = _ref.interactive,
      figure = _ref.figure,
      spec = _ref.spec,
      error = _ref.error,
      setError = _ref.setError,
      props = (0, _objectWithoutProperties3.default)(_ref, ['loading', 'label', 'labelLinkText', 'labelLink', 'LinkWrapper', 'interactive', 'figure', 'spec', 'error', 'setError']);

  var onConnectionError = function onConnectionError() {
    var on = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    setError(on ? _react2.default.createElement(
      'span',
      null,
      'Failed to connect to Chromatic Isolator iframe. ',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        _Link2.default,
        { href: 'http://docs.chromaticqa.com/configuration', target: '_blank' },
        'Read more'
      )
    ) : false);
  };
  var onRenderingError = function onRenderingError(message) {
    setError(_react2.default.createElement(
      'span',
      null,
      'Failed to render spec: ',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'code',
        { style: { fontSize: '11px' } },
        message
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        _Link2.default,
        { href: 'http://docs.chromaticqa.com/specs', target: '_blank' },
        'Read more'
      )
    ));
  };

  var visualization = _react2.default.createElement(LoadingSpinner, null);
  if (!loading) {
    if (interactive) {
      visualization = _react2.default.createElement(
        Iframe,
        {
          title: label,
          src: figure,
          width: '400',
          height: '300',
          spec: spec,
          onConnectionError: onConnectionError,
          onRenderingError: onRenderingError
        },
        _react2.default.createElement(
          'p',
          null,
          'Your browser does not support iframes.'
        )
      );
    } else {
      visualization = _react2.default.createElement(Img, { alt: label, src: figure });
    }
  }

  var canvasLink = _react2.default.createElement(
    LabelLink,
    { tertiary: true, href: labelLink },
    labelLinkText
  );

  if (LinkWrapper) {
    canvasLink = _react2.default.createElement(
      LinkWrapper,
      { href: labelLink },
      canvasLink
    );
  }

  return _react2.default.createElement(
    CanvasWrapper,
    (0, _extends3.default)({ loading: loading }, props),
    !loading && label && _react2.default.createElement(
      Label,
      null,
      _react2.default.createElement(
        LabelText,
        null,
        label
      ),
      labelLink && canvasLink
    ),
    error && _react2.default.createElement(
      ErrorMessage,
      null,
      _react2.default.createElement(_Icon2.default, { icon: 'alert' }),
      error
    ),
    _react2.default.createElement(ActionGroup, null),
    _react2.default.createElement(
      CanvasScroll,
      { withLabel: label },
      figure && visualization
    )
  );
}

Canvas.propTypes = {
  loading: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  labelLinkText: _propTypes2.default.string,
  labelLink: _propTypes2.default.string,
  LinkWrapper: _propTypes2.default.func,
  interactive: _propTypes2.default.bool,
  figure: _propTypes2.default.string.isRequired,
  spec: _propTypes2.default.shape({
    input: _propTypes2.default.any.isRequired
  }),
  error: _propTypes2.default.node.isRequired,
  setError: _propTypes2.default.func.isRequired
};

Canvas.defaultProps = {
  loading: false,
  label: null,
  labelLinkText: null,
  labelLink: null,
  LinkWrapper: null,
  interactive: false,
  figure: 'http://via.placeholder.com/350x150',
  spec: { input: {} }
};

exports.default = (0, _recompose.hoistStatics)((0, _recompose.withState)('error', 'setError', false))(Canvas);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  && {\n    font-weight: ', ';\n    font-size: ', 'px;\n    line-height: 1;\n    padding: 4px 28px 4px 0;\n    overflow-wrap: break-word;\n    hyphens: auto;\n  }\n'], ['\n  && {\n    font-weight: ', ';\n    font-size: ', 'px;\n    line-height: 1;\n    padding: 4px 28px 4px 0;\n    overflow-wrap: break-word;\n    hyphens: auto;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: ', ';\n  font-size: ', 'px;\n  line-height: 1;\n  line-height: 18px;\n  color: ', ';\n'], ['\n  font-weight: ', ';\n  font-size: ', 'px;\n  line-height: 1;\n  line-height: 18px;\n  color: ', ';\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['', ';'], ['', ';']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  ', '\n\n  svg {\n    margin-right: 0;\n    margin-left: .25em;\n  }\n'], ['\n  ', '\n\n  svg {\n    margin-right: 0;\n    margin-left: .25em;\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  vertical-align: top;\n'], ['\n  display: inline-block;\n  vertical-align: top;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  vertical-align: top;\n  margin-left: 10px;\n  margin-right: 14px;\n  height: 18px;\n  border-right: 1px solid ', ';\n'], ['\n  display: inline-block;\n  vertical-align: top;\n  margin-left: 10px;\n  margin-right: 14px;\n  height: 18px;\n  border-right: 1px solid ', ';\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 0;\n  margin-top: 2px;\n'], ['\n  font-size: 0;\n  margin-top: 2px;\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 0;\n\n  ', ' {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n\n  ', '\n'], ['\n  font-size: 0;\n\n  ', ' {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n\n  ', '\n']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n    ', ' span, ', ' {\n      ', '\n    }\n  '], ['\n    ', ' span, ', ' {\n      ', '\n    }\n  ']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n  border-top: 1px solid ', ';\n  margin: .75rem 0 .75rem;\n'], ['\n  border-top: 1px solid ', ';\n  margin: .75rem 0 .75rem;\n']),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n'], ['\n  position: relative;\n']);

exports.default = ComponentHeader;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Link = __webpack_require__(15);

var _Link2 = _interopRequireDefault(_Link);

var _Icon = __webpack_require__(14);

var _Icon2 = _interopRequireDefault(_Icon);

var _WithTooltip = __webpack_require__(30);

var _WithTooltip2 = _interopRequireDefault(_WithTooltip);

var _styles = __webpack_require__(5);

var _animation = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Title = _styledComponents2.default.h1(_templateObject, _styles.typography.weight.extrabold, _styles.typography.size.m1);

var DetailStyle = (0, _styledComponents.css)(_templateObject2, _styles.typography.weight.bold, _styles.typography.size.s2 - 1, _styles.color.dark);

var Detail = _styledComponents2.default.span(_templateObject3, DetailStyle);

// prettier-ignore
var DetailLink = (0, _styledComponents2.default)(_Link2.default)(_templateObject4, DetailStyle);

var DetailTooltip = (0, _styledComponents2.default)(_WithTooltip2.default)(_templateObject5);

var DetailSeparator = _styledComponents2.default.span(_templateObject6, _styles.color.mediumlight);

var DetailWrapper = _styledComponents2.default.div(_templateObject7);

var Action = _styledComponents2.default.div(_templateObject8);

// prettier-ignore
var Meta = _styledComponents2.default.div(_templateObject9, Action, function (props) {
  return props.loading && (0, _styledComponents.css)(_templateObject10, Title, Detail, _animation.inlineGlow);
});

// prettier-ignore
var Break = _styledComponents2.default.div(_templateObject11, _styles.color.mediumlight);

// prettier-ignore
var Header = _styledComponents2.default.div(_templateObject12);

function ComponentHeader(_ref) {
  var loading = _ref.loading,
      build = _ref.build,
      name = _ref.component.name,
      branchTooltip = _ref.branchTooltip,
      buildTooltip = _ref.buildTooltip,
      actionButton = _ref.actionButton,
      props = (0, _objectWithoutProperties3.default)(_ref, ['loading', 'build', 'component', 'branchTooltip', 'buildTooltip', 'actionButton']);

  var detail = void 0;

  if (loading) {
    detail = _react2.default.createElement(
      Detail,
      null,
      'Loading'
    );
  }

  if (!loading && build) {
    var number = build.number,
        branch = build.branch;


    var buildInner = _react2.default.createElement(
      Detail,
      null,
      'Build ',
      number
    );

    if (buildTooltip) {
      buildInner = _react2.default.createElement(
        DetailTooltip,
        { placement: 'bottom', mode: 'click', tooltip: buildTooltip },
        _react2.default.createElement(
          DetailLink,
          { tertiary: true },
          buildInner,
          _react2.default.createElement(_Icon2.default, { icon: 'arrowdown' })
        )
      );
    }

    var branchInner = _react2.default.createElement(
      Detail,
      null,
      branch
    );

    if (branchTooltip) {
      branchInner = _react2.default.createElement(
        DetailTooltip,
        { placement: 'bottom', mode: 'click', tooltip: branchTooltip },
        _react2.default.createElement(
          DetailLink,
          { tertiary: true },
          branchInner,
          _react2.default.createElement(_Icon2.default, { icon: 'arrowdown' })
        )
      );
    }

    detail = _react2.default.createElement(
      DetailWrapper,
      null,
      branchInner,
      _react2.default.createElement(DetailSeparator, null),
      buildInner
    );
  }

  return _react2.default.createElement(
    Header,
    (0, _extends3.default)({ loading: loading }, props),
    _react2.default.createElement(
      Meta,
      { loading: loading },
      _react2.default.createElement(
        Title,
        null,
        _react2.default.createElement(
          'span',
          null,
          name
        )
      ),
      detail,
      !loading && _react2.default.createElement(
        Action,
        null,
        actionButton
      )
    ),
    _react2.default.createElement(Break, null)
  );
}

ComponentHeader.propTypes = {
  loading: _propTypes2.default.bool,
  build: _propTypes2.default.shape({
    id: _propTypes2.default.string.isRequired,
    number: _propTypes2.default.number.isRequired,
    branch: _propTypes2.default.string.isRequired
  }),
  component: _propTypes2.default.shape({
    name: _propTypes2.default.string
  }),
  buildTooltip: _propTypes2.default.node,
  branchTooltip: _propTypes2.default.node,
  actionButton: _propTypes2.default.node
};

ComponentHeader.defaultProps = {
  loading: false,
  build: null,
  component: {
    name: 'loading',
    specs: [],
    builds: []
  },
  buildTooltip: false,
  branchTooltip: false,
  actionButton: null
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _serialize = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The isolator should load pretty fast
var LOAD_TIMEOUT = 1000;

var IsolatorFrame = function (_Component) {
  (0, _inherits3.default)(IsolatorFrame, _Component);

  function IsolatorFrame(props) {
    (0, _classCallCheck3.default)(this, IsolatorFrame);

    var _this = (0, _possibleConstructorReturn3.default)(this, (IsolatorFrame.__proto__ || (0, _getPrototypeOf2.default)(IsolatorFrame)).call(this, props));

    _this.state = {
      connectionStatus: 'connecting'
    };

    _this.requestCapabilities = _this.requestCapabilities.bind(_this);
    _this.handleMessage = _this.handleMessage.bind(_this);
    _this.onConnectionErrorIfNotConnected = _this.onConnectionErrorIfNotConnected.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(IsolatorFrame, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('message', this.handleMessage, false);
      this.iframe.addEventListener('load', this.requestCapabilities);

      // Easiest thing is to wait for a timeout to show the connection error.
      // Nothing else seems very reliable
      setTimeout(this.onConnectionErrorIfNotConnected, LOAD_TIMEOUT);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (props.spec !== this.props.spec && this.state.connectionStatus === 'connected') {
        this.passIframeSpec(props.spec);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('message', this.handleMessage);
      this.iframe.removeEventListener('load', this.requestCapabilities);
    }
  }, {
    key: 'onConnectionErrorIfNotConnected',
    value: function onConnectionErrorIfNotConnected() {
      var _this2 = this;

      this.setState(function (_ref) {
        var connectionStatus = _ref.connectionStatus;

        if (connectionStatus === 'connecting') {
          _this2.props.onConnectionError(true);
          return { connectionStatus: 'failed' };
        }
        return {};
      });
    }
  }, {
    key: 'handleMessage',
    value: function handleMessage(_ref2) {
      var data = _ref2.data,
          origin = _ref2.origin;

      if (this.props.src.indexOf(origin) !== 0) {
        return;
      }

      var message = data.message,
          rest = (0, _objectWithoutProperties3.default)(data, ['message']);

      if (message === 'capabilities') {
        if (rest.service === 'chromatic-isolator') {
          this.setState({ connectionStatus: 'connected' });

          // In case the connection error fires too early
          //   (couldn't reproduce but it happened in #307)
          // clear the error once we connect.
          this.props.onConnectionError(false);

          if (this.props.spec) {
            this.passIframeSpec(this.props.spec);
          }
        }
      } else if (message === 'renderSpecError') {
        this.props.onRenderingError(rest.error);
      }
    }
  }, {
    key: 'requestCapabilities',
    value: function requestCapabilities() {
      this.iframe.contentWindow.postMessage({
        message: 'requestCapabilities'
      }, this.props.src);
    }
  }, {
    key: 'passIframeSpec',
    value: function passIframeSpec(_ref3) {
      var input = _ref3.input;

      this.iframe.contentWindow.postMessage({
        message: 'renderSpec',
        // The isolator only cares about the input of the spec
        spec: { input: (0, _serialize.stringify)(input) }
      }, this.props.src);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          spec = _props.spec,
          onRenderingError = _props.onRenderingError,
          onConnectionError = _props.onConnectionError,
          props = (0, _objectWithoutProperties3.default)(_props, ['spec', 'onRenderingError', 'onConnectionError']);

      return _react2.default.createElement('iframe', (0, _extends3.default)({
        title: 'Chromatic Isolator',
        'data-chromatic-isolator': true
      }, props, {
        ref: function ref(r) {
          _this3.iframe = r;
        }
      }));
    }
  }]);
  return IsolatorFrame;
}(_react.Component);

exports.default = IsolatorFrame;


IsolatorFrame.propTypes = {
  spec: _propTypes2.default.shape({
    input: _propTypes2.default.any.isRequired
  }).isRequired,
  src: _propTypes2.default.string.isRequired,
  onConnectionError: _propTypes2.default.func.isRequired,
  onRenderingError: _propTypes2.default.func.isRequired
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _keys = __webpack_require__(13);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  border-top: 1px solid ', ';\n  border-bottom: 1px solid ', ';\n  font-size: ', 'px;\n  padding: 10px 5px;\n  position: relative;\n'], ['\n  border-top: 1px solid ', ';\n  border-bottom: 1px solid ', ';\n  font-size: ', 'px;\n  padding: 10px 5px;\n  position: relative;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: table;\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  margin-bottom: 0.75em;\n\n  ', ', ', ' {\n    border-bottom: 4px solid transparent;\n  }\n\n  ', ':first-child {\n    border-bottom: 12px solid transparent;\n  }\n'], ['\n  display: table;\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  margin-bottom: 0.75em;\n\n  ', ', ', ' {\n    border-bottom: 4px solid transparent;\n  }\n\n  ', ':first-child {\n    border-bottom: 12px solid transparent;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: ', ';\n  float: right;\n  margin-left: 15px;\n'], ['\n  font-weight: ', ';\n  float: right;\n  margin-left: 15px;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  float: left;\n  margin-left: 0;\n'], ['\n  float: left;\n  margin-left: 0;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  overflow: hidden;\n'], ['\n  overflow: hidden;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _validatorjs = __webpack_require__(59);

var _validatorjs2 = _interopRequireDefault(_validatorjs);

var _mobxReact = __webpack_require__(20);

var _FormState2 = __webpack_require__(40);

var _FormState3 = _interopRequireDefault(_FormState2);

var _Link = __webpack_require__(15);

var _Link2 = _interopRequireDefault(_Link);

var _Input = __webpack_require__(41);

var _Input2 = _interopRequireDefault(_Input);

var _Textarea = __webpack_require__(43);

var _Textarea2 = _interopRequireDefault(_Textarea);

var _styles = __webpack_require__(5);

var _toString = __webpack_require__(96);

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Editor = _styledComponents2.default.form(_templateObject, _styles.color.medium, _styles.color.medium, _styles.typography.size.s2 - 1);

// prettier-ignore
var SpecInput = (0, _styledComponents2.default)(_Input2.default)(_templateObject2);
var SpecTextarea = (0, _styledComponents2.default)(_Textarea2.default)(_templateObject2);

var Fields = _styledComponents2.default.div(_templateObject3, SpecInput, SpecTextarea, SpecInput);

// prettier-ignore
var Action = (0, _styledComponents2.default)(_Link2.default)(_templateObject4, _styles.typography.weight.bold);

var ActionDelete = Action.extend(_templateObject5);

// prettier-ignore
var Actions = _styledComponents2.default.div(_templateObject6);

var isModifiableProp = function isModifiableProp(props, propName) {
  return propName !== 'children' && typeof props[propName] === 'string';
};

function propToString(props, propName) {
  if (propName === 'children') {
    return [].concat(props[propName]).map(function (element) {
      return (0, _toString2.default)({ input: { element: element } });
    }).join('\n');
  }

  var value = props[propName];

  return value && value.toString();
}

var SpecEditorFormData = function (_FormState) {
  (0, _inherits3.default)(SpecEditorFormData, _FormState);

  function SpecEditorFormData(_ref) {
    var name = _ref.name,
        props = _ref.props,
        hooks = _ref.hooks;
    (0, _classCallCheck3.default)(this, SpecEditorFormData);

    var fields = {
      name: {
        label: 'name',
        value: name,
        placeholder: 'Name this spec',
        rules: 'required|string',
        bindings: 'Default'
      }
    };
    (0, _keys2.default)(props).forEach(function (propName) {
      var modifiable = isModifiableProp(props, propName);
      fields['props-' + propName] = {
        label: propName,
        value: propToString(props, propName),
        placeholder: 'Value for the ' + propName + ' prop',
        rules: modifiable && 'required|string',
        bindings: 'Default',
        disabled: !modifiable
      };
    });

    return (0, _possibleConstructorReturn3.default)(this, (SpecEditorFormData.__proto__ || (0, _getPrototypeOf2.default)(SpecEditorFormData)).call(this, { fields: fields }, { plugins: { dvr: _validatorjs2.default }, hooks: hooks }));
  }

  return SpecEditorFormData;
}(_FormState3.default);

var SpecEditor = function (_Component) {
  (0, _inherits3.default)(SpecEditor, _Component);

  function SpecEditor(props, context) {
    (0, _classCallCheck3.default)(this, SpecEditor);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (SpecEditor.__proto__ || (0, _getPrototypeOf2.default)(SpecEditor)).call(this, props, context));

    var _props$spec = props.spec,
        name = _props$spec.name,
        inputProps = _props$spec.input.element.props;


    _this2.onFormSave = _this2.onFormSave.bind(_this2);

    _this2.formData = new SpecEditorFormData({
      name: name,
      props: inputProps,
      hooks: { onSuccess: _this2.onFormSave }
    });
    return _this2;
  }

  (0, _createClass3.default)(SpecEditor, [{
    key: 'onFormSave',
    value: function onFormSave(form) {
      var _this3 = this;

      var _form$values = form.values(),
          name = _form$values.name,
          propValues = (0, _objectWithoutProperties3.default)(_form$values, ['name']);

      var props = {};
      (0, _keys2.default)(propValues).forEach(function (propName) {
        // Only save the modifiable props; the spec will pass through the rest
        if (isModifiableProp(_this3.props.spec.input.element.props, propName)) {
          var realPropName = propName.slice(6);
          props[realPropName] = propValues[propName];
        }
      });
      this.props.onSave({
        name: name,
        props: props
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          props = _props.spec.input.element.props,
          onCancel = _props.onCancel,
          onDelete = _props.onDelete,
          other = (0, _objectWithoutProperties3.default)(_props, ['spec', 'onCancel', 'onDelete']);
      var formData = this.formData;


      var onClickDelete = function onClickDelete(event) {
        event.preventDefault();
        onDelete();
      };
      var actions = _react2.default.createElement(
        Actions,
        null,
        _react2.default.createElement(
          Action,
          { primary: true, onClick: formData.onSubmit, isButton: true },
          'Save spec'
        ),
        _react2.default.createElement(
          Action,
          { tertiary: true, onClick: onCancel, isButton: true },
          'Cancel'
        ),
        onDelete && _react2.default.createElement(
          ActionDelete,
          { tertiary: true, onClick: onClickDelete, isButton: true },
          'Delete'
        )
      );

      return _react2.default.createElement(
        Editor,
        other,
        _react2.default.createElement(
          Fields,
          null,
          _react2.default.createElement(SpecInput
          // eslint-disable-next-line react/jsx-no-bind
          , (0, _extends3.default)({}, formData.select('name').bind(), {
            appearance: 'code',
            orientation: 'horizontal'
          })),
          (0, _keys2.default)(props).filter(function (p) {
            return p !== 'children';
          }).map(function (propName) {
            return _react2.default.createElement(SpecInput
            // eslint-disable-next-line react/jsx-no-bind
            , (0, _extends3.default)({}, formData.select('props-' + propName).bind(), {
              appearance: 'code',
              orientation: 'horizontal'
            }));
          }),
          props.children && _react2.default.createElement(SpecTextarea
          // eslint-disable-next-line react/jsx-no-bind
          , (0, _extends3.default)({}, formData.select('props-children').bind(), {
            appearance: 'code',
            orientation: 'horizontal'
          }))
        ),
        actions
      );
    }
  }]);
  return SpecEditor;
}(_react.Component);

SpecEditor.propTypes = {
  spec: _propTypes2.default.shape({
    input: _propTypes2.default.shape({
      element: _propTypes2.default.shape({
        props: _propTypes2.default.any.isRequired
      })
    }).isRequired
  }).isRequired,
  onCancel: _propTypes2.default.func.isRequired,
  onSave: _propTypes2.default.func.isRequired,
  onDelete: _propTypes2.default.func
};

SpecEditor.defaultProps = {
  onDelete: function onDelete() {
    return 0;
  }
};

exports.default = (0, _mobxReact.observer)(SpecEditor);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  font-size: ', 'px;\n  line-height: 14px;\n  padding: 7px 0;\n\n  svg {\n    animation: ', ' 1200ms linear infinite;\n    height: 12px;\n    width: 12px;\n    margin-right: .4em;\n    vertical-align: top;\n    margin-top: 1px;\n\n    path { fill: ', '; }\n  }\n'], ['\n  color: ', ';\n  font-size: ', 'px;\n  line-height: 14px;\n  padding: 7px 0;\n\n  svg {\n    animation: ', ' 1200ms linear infinite;\n    height: 12px;\n    width: 12px;\n    margin-right: .4em;\n    vertical-align: top;\n    margin-top: 1px;\n\n    path { fill: ', '; }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  height: 6px;\n  width: 6px;\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 4px;\n  margin-top: 4px;\n'], ['\n  height: 6px;\n  width: 6px;\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 4px;\n  margin-top: 4px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: ', 'px;\n  font-weight: ', ';\n  line-height: 14px;\n  padding: 7px 0;\n'], ['\n  font-size: ', 'px;\n  font-weight: ', ';\n  line-height: 14px;\n  padding: 7px 0;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['margin-top: 4px;'], ['margin-top: 4px;']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  input {\n    margin-right: 10px;\n  }\n\n  input:checked + span {\n    font-weight: ', ';\n    color: ', ';\n  }\n\n  > span {\n    font-weight: ', ';\n  }\n'], ['\n  input {\n    margin-right: 10px;\n  }\n\n  input:checked + span {\n    font-weight: ', ';\n    color: ', ';\n  }\n\n  > span {\n    font-weight: ', ';\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  opacity: 0;\n  color: ', ';\n  font-weight: ', ';\n\n  path {\n    transition: all 150ms ease-in-out;\n    fill: ', ';\n  }\n\n  &:hover {\n    color: ', ';\n    path { fill: ', '; }\n  }\n'], ['\n  opacity: 0;\n  color: ', ';\n  font-weight: ', ';\n\n  path {\n    transition: all 150ms ease-in-out;\n    fill: ', ';\n  }\n\n  &:hover {\n    color: ', ';\n    path { fill: ', '; }\n  }\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  right: 0;\n  top: 0;\n'], ['\n  position: absolute;\n  right: 0;\n  top: 0;\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  padding: 7px 0;\n\n  ', '\n\n  &:hover ', ' {\n    opacity: 1;\n  }\n\n  ', '\n'], ['\n  position: relative;\n  padding: 7px 0;\n\n  ', '\n\n  &:hover ', ' {\n    opacity: 1;\n  }\n\n  ', '\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n    ', ' > span {\n      ', ';\n      float: left;\n\n      &:before {\n        animation: ', ' 1.5s ease-in-out infinite;\n        box-shadow: none;\n        background: ', ';\n      }\n    }\n  '], ['\n    ', ' > span {\n      ', ';\n      float: left;\n\n      &:before {\n        animation: ', ' 1.5s ease-in-out infinite;\n        box-shadow: none;\n        background: ', ';\n      }\n    }\n  ']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n    ', ' {\n      opacity: 1;\n    }\n  '], ['\n    ', ' {\n      opacity: 1;\n    }\n  ']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['margin-top: 0.75rem;'], ['margin-top: 0.75rem;']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _recompose = __webpack_require__(17);

var _Icon = __webpack_require__(14);

var _Icon2 = _interopRequireDefault(_Icon);

var _Badge = __webpack_require__(38);

var _Badge2 = _interopRequireDefault(_Badge);

var _Button = __webpack_require__(22);

var _Button2 = _interopRequireDefault(_Button);

var _Link = __webpack_require__(15);

var _Link2 = _interopRequireDefault(_Link);

var _Radio = __webpack_require__(42);

var _Radio2 = _interopRequireDefault(_Radio);

var _StatusLight = __webpack_require__(39);

var _StatusLight2 = _interopRequireDefault(_StatusLight);

var _SpecEditor = __webpack_require__(78);

var _SpecEditor2 = _interopRequireDefault(_SpecEditor);

var _styles = __webpack_require__(5);

var _animation = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Saving = _styledComponents2.default.div(_templateObject, _styles.color.mediumdark, _styles.typography.size.s1, _animation.rotate360, _styles.color.mediumdark);

// prettier-ignore
var ReviewStatus = (0, _styledComponents2.default)(_StatusLight2.default)(_templateObject2);

// prettier-ignore
var Review = (0, _styledComponents2.default)(_Link2.default)(_templateObject3, _styles.typography.size.s1, _styles.typography.weight.bold);

var DeleteBadge = (0, _styledComponents2.default)(_Badge2.default)(_templateObject4);

// prettier-ignore
var Spec = (0, _styledComponents2.default)(_Radio2.default)(_templateObject5, _styles.typography.weight.bold, _styles.color.primary, _styles.typography.weight.regular);

// prettier-ignore
var Action = (0, _styledComponents2.default)(_Button2.default)(_templateObject6, _styles.color.mediumdark, _styles.typography.weight.bold, _styles.color.mediumdark, _styles.color.dark, _styles.color.dark);

// prettier-ignore
var Actions = _styledComponents2.default.div(_templateObject7);

// prettier-ignore
var Item = _styledComponents2.default.div(_templateObject8, function (props) {
  return props.loading && (0, _styledComponents.css)(_templateObject9, Spec, _animation.inlineGlow, _animation.glow, _styles.color.medium);
}, Action, function (props) {
  return props.status === 'unsaved' && props.selected && (0, _styledComponents.css)(_templateObject10, Action);
});

var Editor = (0, _styledComponents2.default)(_SpecEditor2.default)(_templateObject11);

function SpecItem(_ref) {
  var loading = _ref.loading,
      spec = _ref.spec,
      index = _ref.index,
      reviewLink = _ref.reviewLink,
      selected = _ref.selected,
      onSelect = _ref.onSelect,
      onSave = _ref.onSave,
      onDelete = _ref.onDelete,
      editing = _ref.editing,
      onEdit = _ref.onEdit,
      props = (0, _objectWithoutProperties3.default)(_ref, ['loading', 'spec', 'index', 'reviewLink', 'selected', 'onSelect', 'onSave', 'onDelete', 'editing', 'onEdit']);
  var id = spec.id,
      name = spec.name,
      number = spec.number,
      status = spec.status;

  var saving = status === 'saving';
  var ourName = name || (status === 'saved' || status === 'deleted' ? 'Spec #' + number : 'Unsaved #' + (index + 1));

  var actionContents = void 0;

  if (reviewLink) {
    actionContents = _react2.default.createElement(
      Review,
      { href: reviewLink, secondary: true },
      _react2.default.createElement(ReviewStatus, { status: 'warning' }),
      'Review'
    );
  } else if (saving) {
    actionContents = _react2.default.createElement(
      Saving,
      null,
      _react2.default.createElement(_Icon2.default, { icon: 'sync' }),
      'Saving'
    );
  } else if (status === 'deleted') {
    actionContents = _react2.default.createElement(
      DeleteBadge,
      { status: 'neutral' },
      'Deleted'
    );
  } else if (onSave) {
    // Corresponds to SpecEditor being open
    if (editing) {
      actionContents = _react2.default.createElement(
        Action,
        { icon: true, small: true, onClick: function onClick() {
            return onEdit(false);
          }, title: 'Cancel' },
        _react2.default.createElement(_Icon2.default, { icon: 'close' })
      );
    } else if (onDelete) {
      // onDelete signals that a spec is Saved
      actionContents = _react2.default.createElement(
        Action,
        { icon: true, small: true, onClick: function onClick() {
            return onEdit(true);
          }, title: 'Edit' },
        _react2.default.createElement(_Icon2.default, { icon: 'edit' })
      );
    } else {
      actionContents = _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          Action,
          { icon: true, small: true, onClick: function onClick() {
              return onEdit(true);
            }, title: 'Edit' },
          _react2.default.createElement(_Icon2.default, { icon: 'edit' })
        ),
        _react2.default.createElement(
          Action,
          { small: true, icon: true, onClick: onSave, title: 'Save' },
          'Save'
        )
      );
    }
  }

  var onSaveAndClose = function onSaveAndClose(item) {
    onSave(item);
    onEdit(false);
  };
  return _react2.default.createElement(
    Item,
    (0, _extends3.default)({ loading: loading, status: status, selected: selected }, props),
    _react2.default.createElement(Spec, { label: ourName, name: 'spec', value: id, checked: selected, onChange: onSelect }),
    !loading && _react2.default.createElement(
      Actions,
      null,
      actionContents
    ),
    editing && _react2.default.createElement(Editor, {
      spec: spec,
      onSave: onSaveAndClose,
      onDelete: onDelete,
      onCancel: function onCancel() {
        return onEdit(false);
      }
    })
  );
}

SpecItem.propTypes = {
  loading: _propTypes2.default.bool,
  spec: _propTypes2.default.shape({
    id: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string,
    number: _propTypes2.default.number,
    status: _propTypes2.default.oneOf(['unsaved', 'saving', 'saved', 'deleted'])
  }),
  index: _propTypes2.default.number.isRequired,
  selected: _propTypes2.default.bool,
  onSelect: _propTypes2.default.func.isRequired,
  onSave: _propTypes2.default.func,
  onDelete: _propTypes2.default.func,
  reviewLink: _propTypes2.default.string,
  editing: _propTypes2.default.bool.isRequired,
  onEdit: _propTypes2.default.func.isRequired
};

SpecItem.defaultProps = {
  loading: false,
  spec: {
    id: 'loading',
    name: 'Loading spec',
    status: 'unsaved'
  },
  selected: false,
  reviewLink: null,
  onSave: null,
  onDelete: null
};

exports.default = (0, _recompose.withState)('editing', 'onEdit', false)(SpecItem);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)([''], ['']);

exports.default = SpecList;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(17);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _EmptyMessage = __webpack_require__(28);

var _EmptyMessage2 = _interopRequireDefault(_EmptyMessage);

var _SpecItem = __webpack_require__(79);

var _SpecItem2 = _interopRequireDefault(_SpecItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = _styledComponents2.default.div(_templateObject);

var Item = (0, _recompose.withHandlers)({
  onSelect: function onSelect(_ref) {
    var id = _ref.spec.id,
        _onSelect = _ref.onSelect;
    return function () {
      return _onSelect(id);
    };
  }
})(function (_ref2) {
  var spec = _ref2.spec,
      index = _ref2.index,
      selected = _ref2.selected,
      onSelect = _ref2.onSelect,
      onSave = _ref2.onSave,
      onDelete = _ref2.onDelete;
  return _react2.default.createElement(_SpecItem2.default, {
    spec: spec,
    index: index,
    selected: selected,
    onSelect: onSelect,
    onSave: onSave && function (values) {
      return onSave(spec.id, values);
    },
    onDelete: onDelete && function () {
      return onDelete(spec.id);
    }
  });
});

function SpecList(_ref3) {
  var loading = _ref3.loading,
      specs = _ref3.specs,
      selectedId = _ref3.selectedId,
      onSelect = _ref3.onSelect,
      onSave = _ref3.onSave,
      onDelete = _ref3.onDelete,
      props = (0, _objectWithoutProperties3.default)(_ref3, ['loading', 'specs', 'selectedId', 'onSelect', 'onSave', 'onDelete']);

  if (loading) {
    return _react2.default.createElement(
      List,
      props,
      _react2.default.createElement(_SpecItem2.default, { loading: true, index: 0, onSelect: function onSelect() {
          return 0;
        } }),
      _react2.default.createElement(_SpecItem2.default, { loading: true, index: 1, onSelect: function onSelect() {
          return 0;
        } }),
      _react2.default.createElement(_SpecItem2.default, { loading: true, index: 2, onSelect: function onSelect() {
          return 0;
        } }),
      _react2.default.createElement(_SpecItem2.default, { loading: true, index: 3, onSelect: function onSelect() {
          return 0;
        } }),
      _react2.default.createElement(_SpecItem2.default, { loading: true, index: 4, onSelect: function onSelect() {
          return 0;
        } })
    );
  }

  var SpecItems = specs.map(function (spec, index) {
    return _react2.default.createElement(Item, {
      key: spec.id,
      spec: spec,
      index: index,
      selected: spec.id === selectedId,
      onSelect: onSelect,
      onSave: onSave,
      onDelete: onDelete
    });
  });

  var empty = _react2.default.createElement(
    _EmptyMessage2.default,
    { noun: 'specs' },
    'Add specs by saving the states of this component.'
  );

  return _react2.default.createElement(
    List,
    props,
    specs.length > 0 ? SpecItems : empty
  );
}

SpecList.propTypes = {
  loading: _propTypes2.default.bool,
  specs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string,
    number: _propTypes2.default.number,
    status: _propTypes2.default.oneOf(['unsaved', 'saving', 'saved', 'deleted']).isRequired
  })),
  selectedId: _propTypes2.default.string,
  onSelect: _propTypes2.default.func.isRequired,
  onSave: _propTypes2.default.func,
  onDelete: _propTypes2.default.func
};

SpecList.defaultProps = {
  loading: false,
  specs: [],
  selectedId: null,
  onSelect: function onSelect() {
    return 0;
  },
  onSave: null,
  onDelete: null
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  display: flex;\n  margin-bottom: .75rem;\n  line-height: 28px;\n\n  ', ' { flex: 0 1 auto; }\n\n  ', ',\n  ', ' { flex: 1; }\n\n  ', ' { text-align: right; }\n\n  ', '\n'], ['\n  color: ', ';\n  display: flex;\n  margin-bottom: .75rem;\n  line-height: 28px;\n\n  ', ' { flex: 0 1 auto; }\n\n  ', ',\n  ', ' { flex: 1; }\n\n  ', ' { text-align: right; }\n\n  ', '\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    ', ' * { ', ' }\n  '], ['\n    ', ' * { ', ' }\n  ']);

exports.default = Subheader;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

var _animation = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Left = _styledComponents2.default.div(_templateObject);
var Center = _styledComponents2.default.div(_templateObject);
var Right = _styledComponents2.default.div(_templateObject);

// prettier-ignore
var SubheaderWrapper = _styledComponents2.default.div(_templateObject2, _styles.color.dark, Center, Left, Right, Right, function (props) {
  return props.loading && (0, _styledComponents.css)(_templateObject3, Left, _animation.inlineGlow);
});

function Subheader(_ref) {
  var loading = _ref.loading,
      left = _ref.left,
      center = _ref.center,
      right = _ref.right,
      props = (0, _objectWithoutProperties3.default)(_ref, ['loading', 'left', 'center', 'right']);

  return _react2.default.createElement(
    SubheaderWrapper,
    (0, _extends3.default)({}, props, { loading: loading }),
    left && _react2.default.createElement(
      Left,
      null,
      left
    ),
    !loading && center && _react2.default.createElement(
      Center,
      null,
      center
    ),
    !loading && right && _react2.default.createElement(
      Right,
      null,
      right
    )
  );
}

Subheader.propTypes = {
  loading: _propTypes2.default.bool,
  left: _propTypes2.default.node,
  center: _propTypes2.default.node,
  right: _propTypes2.default.node
};
Subheader.defaultProps = {
  loading: false,
  left: _react2.default.createElement(
    'span',
    null,
    'Loading'
  ),
  center: null,
  right: null
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  letter-spacing: .35em;\n  text-transform: uppercase;\n  font-weight: ', ';\n  font-size: ', 'px;\n'], ['\n  letter-spacing: .35em;\n  text-transform: uppercase;\n  font-weight: ', ';\n  font-size: ', 'px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Heading = _styledComponents2.default.span(_templateObject, _styles.typography.weight.extrabold, _styles.typography.size.s2 - 1);

var Subheading = function Subheading(props) {
  return _react2.default.createElement(Heading, props);
};

exports.default = Subheading;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  cursor: pointer;\n  font-size: ', 'px;\n  font-weight: ', ';\n  min-height: 1em;\n\tposition: relative;\n'], ['\n  cursor: pointer;\n  font-size: ', 'px;\n  font-weight: ', ';\n  min-height: 1em;\n\tposition: relative;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: ', ';\n  color: ', ';\n  margin-left: 6px;\n'], ['\n  font-weight: ', ';\n  color: ', ';\n  margin-left: 6px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0 .6em 0 0;\n  visibility: hidden;\n\n  & + ', ' {\n    display: inline-block;\n    vertical-align: text-top;\n    line-height: 1.2;\n\n    &:before,\n    &:after {\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 14px;\n      width: 14px;\n      content: \'\';\n      display: block;\n    }\n\n    &:before {\n      border-radius: 4px;\n    }\n\n    &:after {\n      border-radius: 3px;\n    }\n  }\n\n  & + ', ':before { box-shadow: ', ' 0 0 0 1px inset; }\n\n  &:checked + ', ':before { box-shadow: ', ' 0 0 0 1px inset; }\n\n\t& + ', ':after {\n    transition: all 150ms ease-out;\n    transform: scale3d(0,0,1);\n\n    height: 10px;\n    margin-left: 2px;\n    margin-top: 2px;\n    width: 10px;\n\n    opacity: 0;\n  }\n\n\t&:checked + ', ':after {\n    transform: scale3d(1,1,1);\n    background: ', ';\n    opacity: 1;\n  }\n'], ['\n  margin: 0 .6em 0 0;\n  visibility: hidden;\n\n  & + ', ' {\n    display: inline-block;\n    vertical-align: text-top;\n    line-height: 1.2;\n\n    &:before,\n    &:after {\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 14px;\n      width: 14px;\n      content: \'\';\n      display: block;\n    }\n\n    &:before {\n      border-radius: 4px;\n    }\n\n    &:after {\n      border-radius: 3px;\n    }\n  }\n\n  & + ', ':before { box-shadow: ', ' 0 0 0 1px inset; }\n\n  &:checked + ', ':before { box-shadow: ', ' 0 0 0 1px inset; }\n\n\t& + ', ':after {\n    transition: all 150ms ease-out;\n    transform: scale3d(0,0,1);\n\n    height: 10px;\n    margin-left: 2px;\n    margin-top: 2px;\n    width: 10px;\n\n    opacity: 0;\n  }\n\n\t&:checked + ', ':after {\n    transform: scale3d(1,1,1);\n    background: ', ';\n    opacity: 1;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Label = _styledComponents2.default.label(_templateObject, _styles.typography.size.s2, _styles.typography.weight.bold);

// prettier-ignore
var Error = _styledComponents2.default.span(_templateObject2, _styles.typography.weight.regular, _styles.color.negative);

var LabelText = _styledComponents2.default.span(_templateObject3);

// prettier-ignore
var Input = _styledComponents2.default.input.attrs({ type: 'checkbox' })(_templateObject4, LabelText, LabelText, _styles.color.mediumdark, LabelText, _styles.color.primary, LabelText, LabelText, _styles.color.primary);

function Checkbox(_ref) {
  var label = _ref.label,
      error = _ref.error,
      props = (0, _objectWithoutProperties3.default)(_ref, ['label', 'error']);

  return _react2.default.createElement(
    Label,
    null,
    _react2.default.createElement(Input, (0, _extends3.default)({}, props, { type: 'checkbox' })),
    _react2.default.createElement(
      LabelText,
      null,
      label,
      error && _react2.default.createElement(
        Error,
        null,
        error
      )
    )
  );
}

Checkbox.propTypes = {
  label: _propTypes2.default.string,
  error: _propTypes2.default.string
};

Checkbox.defaultProps = {
  label: null,
  error: null
};

exports.default = Checkbox;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: ', ';\n  font-size: ', 'px;\n'], ['\n  font-weight: ', ';\n  font-size: ', 'px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: .5em;\n'], ['\n  margin-bottom: .5em;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  appearance: none;\n  border: 0;\n  border-radius: 0;\n  font-size: ', 'px;\n  line-height: 20px;\n  padding: 10px 3em 10px 1em;\n  position: relative;\n  outline: none;\n  width: 100%;\n\n  ', '\n\n  ', '\n'], ['\n  appearance: none;\n  border: 0;\n  border-radius: 0;\n  font-size: ', 'px;\n  line-height: 20px;\n  padding: 10px 3em 10px 1em;\n  position: relative;\n  outline: none;\n  width: 100%;\n\n  ', '\n\n  ', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    cursor: not-allowed;\n  '], ['\n    cursor: not-allowed;\n  ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    cursor: progress;\n  '], ['\n    cursor: progress;\n  ']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  right: 16px;\n  left: auto;\n  z-index: 1;\n'], ['\n  right: 16px;\n  left: auto;\n  z-index: 1;\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  height: 40px;\n  line-height: normal;\n  overflow: hidden;\n  position: relative;\n  vertical-align: top;\n  width: 100%;\n\n  &:before {\n    content: "";\n\t  bottom: 1px;\n\t\tright: 1px;\n\t\ttop: 1px;\n\t\twidth: 2em;\n    margin-left: 1px;\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\tpointer-events: none;\n    border-radius: 4px;\n\t}\n\n  ', ' {\n    position: absolute;\n\t\tz-index: 1;\n\t\tpointer-events: none;\n    height: 12px;\n    margin-top: -5px;\n\t\tright: 12px;\n\t\ttop: 50%;\n\n    path {fill: ', ' }\n  }\n\n  ', ':focus { box-shadow: ', ' 0 0 0 1px inset; }\n\n  ', '\n\n  &:before { background-color: rgba(255,255,255,.9); }\n\t', ' {\n    background-color: ', ';\n    color: ', ';\n  }\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  display: inline-block;\n  height: 40px;\n  line-height: normal;\n  overflow: hidden;\n  position: relative;\n  vertical-align: top;\n  width: 100%;\n\n  &:before {\n    content: "";\n\t  bottom: 1px;\n\t\tright: 1px;\n\t\ttop: 1px;\n\t\twidth: 2em;\n    margin-left: 1px;\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\tpointer-events: none;\n    border-radius: 4px;\n\t}\n\n  ', ' {\n    position: absolute;\n\t\tz-index: 1;\n\t\tpointer-events: none;\n    height: 12px;\n    margin-top: -5px;\n\t\tright: 12px;\n\t\ttop: 50%;\n\n    path {fill: ', ' }\n  }\n\n  ', ':focus { box-shadow: ', ' 0 0 0 1px inset; }\n\n  ', '\n\n  &:before { background-color: rgba(255,255,255,.9); }\n\t', ' {\n    background-color: ', ';\n    color: ', ';\n  }\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n    opacity: 0.5;\n  '], ['\n    opacity: 0.5;\n  ']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n    ', ' { box-shadow: ', ' 0 0 0 1px inset; }\n  '], ['\n    ', ' { box-shadow: ', ' 0 0 0 1px inset; }\n  ']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n    width: auto;\n    height: auto;\n\n    ', ' {\n      color: ', ';\n\t    background-color: transparent;\n      font-weight: ', ';\n      padding: 0 1.5em 0 0;\n\t    text-decoration: none;\n\n      &:focus { box-shadow: none !important; }\n    }\n    &:before { content: none;  }\n    ', ' { right: 0; }\n  '], ['\n    width: auto;\n    height: auto;\n\n    ', ' {\n      color: ', ';\n\t    background-color: transparent;\n      font-weight: ', ';\n      padding: 0 1.5em 0 0;\n\t    text-decoration: none;\n\n      &:focus { box-shadow: none !important; }\n    }\n    &:before { content: none;  }\n    ', ' { right: 0; }\n  ']),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(['\n    ', ' { padding-left: 2.5em; }\n\n    ', ' + ', ' {\n      transition: all 150ms ease-out ;\n      position: absolute;\n      top: 50%;\n      left: .8em;\n\t\t\theight: 1em;\n      width: 1em;\n\t\t\tmargin-top: -.5em;\n\t\t\tz-index: 1;\n\n\t    path { fill: ', '; }\n    }\n    ', ':focus + ', ' path {\n      fill: ', ';\n\t  }\n  '], ['\n    ', ' { padding-left: 2.5em; }\n\n    ', ' + ', ' {\n      transition: all 150ms ease-out ;\n      position: absolute;\n      top: 50%;\n      left: .8em;\n\t\t\theight: 1em;\n      width: 1em;\n\t\t\tmargin-top: -.5em;\n\t\t\tz-index: 1;\n\n\t    path { fill: ', '; }\n    }\n    ', ':focus + ', ' path {\n      fill: ', ';\n\t  }\n  ']),
    _templateObject13 = (0, _taggedTemplateLiteral3.default)(['\n    ', ' {\n      box-shadow: ', ' 0 0 0 1px inset;\n      &:focus { box-shadow: ', ' 0 0 0 1px inset !important;  }\n    }\n\n    ', ' + ', ' {\n      animation: ', ' 700ms ease-out;\n      path { fill: ', '; }\n    }\n\n    &:before {\n      transition: all 300ms cubic-bezier(0.175, 0.885, 0.335, 1.05);\n\t\t\tfont-size: ', 'px;\n      font-family: ', ';\n\n      color: ', ';\n      content: attr(data-error);\n      line-height: 38px;\n      padding-right: 2.75em;\n\n      width: auto;\n      min-width: 2em;\n    }\n  '], ['\n    ', ' {\n      box-shadow: ', ' 0 0 0 1px inset;\n      &:focus { box-shadow: ', ' 0 0 0 1px inset !important;  }\n    }\n\n    ', ' + ', ' {\n      animation: ', ' 700ms ease-out;\n      path { fill: ', '; }\n    }\n\n    &:before {\n      transition: all 300ms cubic-bezier(0.175, 0.885, 0.335, 1.05);\n\t\t\tfont-size: ', 'px;\n      font-family: ', ';\n\n      color: ', ';\n      content: attr(data-error);\n      line-height: 38px;\n      padding-right: 2.75em;\n\n      width: auto;\n      min-width: 2em;\n    }\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

var _animation = __webpack_require__(7);

var _Icon = __webpack_require__(14);

var _Icon2 = _interopRequireDefault(_Icon);

var _Spinner = __webpack_require__(29);

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Label = _styledComponents2.default.span(_templateObject, _styles.typography.weight.extrabold, _styles.typography.size.s2);

// prettier-ignore
var LabelWrapper = _styledComponents2.default.div(_templateObject2);

// prettier-ignore
var Selector = _styledComponents2.default.select(_templateObject3, _styles.typography.size.s2, function (props) {
  return props.disabled && (0, _styledComponents.css)(_templateObject4);
}, function (props) {
  return props.inProgress && (0, _styledComponents.css)(_templateObject5);
});

var OptionWrapper = _styledComponents2.default.option(_templateObject6);

var Arrow = (0, _styledComponents2.default)(_Icon2.default).attrs({ icon: 'arrowdown' })(_templateObject6);

var SelectIcon = (0, _styledComponents2.default)(_Icon2.default)(_templateObject6);

var SelectSpinner = (0, _styledComponents2.default)(_Spinner2.default)(_templateObject7);

// prettier-ignore
var SelectWrapper = _styledComponents2.default.span(_templateObject8, Arrow, _styles.color.mediumdark, Selector, _styles.color.primary, function (props) {
  return props.disabled && (0, _styledComponents.css)(_templateObject9);
}, Selector, _styles.color.lightest, _styles.color.darkest, function (props) {
  return props.appearance === 'secondary' && (0, _styledComponents.css)(_templateObject10, Selector, _styles.color.mediumlight);
}, function (props) {
  return props.appearance === 'tertiary' && (0, _styledComponents.css)(_templateObject11, Selector, _styles.color.dark, _styles.typography.weight.bold, Arrow);
}, function (props) {
  return props.icon && (0, _styledComponents.css)(_templateObject12, Selector, Selector, SelectIcon, _styles.color.mediumdark, Selector, SelectIcon, _styles.color.darker);
}, function (props) {
  return props.error && (0, _styledComponents.css)(_templateObject13, Selector, _styles.color.negative, _styles.color.negative, Selector, SelectIcon, _animation.jiggle, _styles.color.negative, _styles.typography.size.s1, _styles.typography.type.primary, _styles.color.negative);
});

function Option(_ref) {
  var label = _ref.label,
      value = _ref.value;

  return _react2.default.createElement(
    OptionWrapper,
    { value: value },
    label
  );
}

Option.propTypes = {
  label: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired
};

function Select(_ref2) {
  var options = _ref2.options,
      value = _ref2.value,
      appearance = _ref2.appearance,
      label = _ref2.label,
      error = _ref2.error,
      icon = _ref2.icon,
      className = _ref2.className,
      inProgress = _ref2.inProgress,
      disabled = _ref2.disabled,
      other = (0, _objectWithoutProperties3.default)(_ref2, ['options', 'value', 'appearance', 'label', 'error', 'icon', 'className', 'inProgress', 'disabled']);

  return _react2.default.createElement(
    'div',
    { className: className },
    label && _react2.default.createElement(
      LabelWrapper,
      null,
      _react2.default.createElement(
        Label,
        null,
        label
      )
    ),
    _react2.default.createElement(
      SelectWrapper,
      {
        appearance: appearance,
        icon: icon,
        error: error,
        'data-error': error,
        disabled: disabled
      },
      !inProgress && _react2.default.createElement(Arrow, null),
      _react2.default.createElement(
        Selector,
        (0, _extends3.default)({
          value: value
        }, other, {
          disabled: disabled || inProgress,
          inProgress: inProgress
        }),
        options.map(function (option) {
          return _react2.default.createElement(Option, (0, _extends3.default)({}, option, { key: option.value }));
        })
      ),
      icon && _react2.default.createElement(SelectIcon, { icon: icon }),
      inProgress && _react2.default.createElement(SelectSpinner, { inForm: true })
    )
  );
}

Select.propTypes = {
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape(Option.propTypes)).isRequired,
  value: _propTypes2.default.string,
  appearance: _propTypes2.default.oneOf(['default', 'secondary', 'tertiary']),
  label: _propTypes2.default.string,
  error: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  className: _propTypes2.default.string,
  inProgress: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool
};

Select.defaultProps = {
  value: 'loading',
  options: [{ title: 'Loading', value: 'loading' }],
  appearance: 'default',
  label: null,
  error: null,
  icon: null,
  className: null,
  inProgress: false,
  disabled: false
};

exports.default = Select;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background: ', ' ;\n  position: relative;\n  height: 12px;\n  width: 100%;\n\n  ', '\n\n  ', '\n'], ['\n  background: ', ' ;\n  position: relative;\n  height: 12px;\n  width: 100%;\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    height: 4px;\n  '], ['\n    height: 4px;\n  ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    background: ', ';\n    overflow: hidden;\n\n    &:before {\n      animation: ', ' 3s ease-in-out infinite;\n      position: absolute;\n      height: 100%;\n      width: 33.3%;\n      transform: translateX(100%);\n      background: ', ';\n      z-index: 1;\n\t\t\tcontent: \'\';\n\t\t}\n  '], ['\n    background: ', ';\n    overflow: hidden;\n\n    &:before {\n      animation: ', ' 3s ease-in-out infinite;\n      position: absolute;\n      height: 100%;\n      width: 33.3%;\n      transform: translateX(100%);\n      background: ', ';\n      z-index: 1;\n\t\t\tcontent: \'\';\n\t\t}\n  ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);\n  transform: translateY(-2px);\n  z-index: 1;\n'], ['\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);\n  transform: translateY(-2px);\n  z-index: 1;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  float: left;\n  height: 100%;\n  transition: all 150ms ease-out;\n\n  ', '\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  float: left;\n  height: 100%;\n  transition: all 150ms ease-out;\n\n  ', '\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n    cursor: pointer;\n\n    &:hover { ', ' }\n    &:hover + * {\n      opacity: .3;\n    }\n  '], ['\n    cursor: pointer;\n\n    &:hover { ', ' }\n    &:hover + * {\n      opacity: .3;\n    }\n  ']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)([' ', ' '], [' ', ' ']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n    background-color: ', ';\n  '], ['\n    background-color: ', ';\n  ']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n    background-color: ', ';\n    background-image: linear-gradient(0deg, #5FC87A 0%, #61D135 100%);\n  '], ['\n    background-color: ', ';\n    background-image: linear-gradient(0deg, #5FC87A 0%, #61D135 100%);\n  ']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n    background-color: ', ';\n    background-image: linear-gradient(0deg, #F6691F 0%, #FF4400 100%);\n  '], ['\n    background-color: ', ';\n    background-image: linear-gradient(0deg, #F6691F 0%, #FF4400 100%);\n  ']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n    background-color: #FED230};\n  '], ['\n    background-color: #FED230};\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

var _animation = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var ProgressWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.selectable ? _styles.color.light : '#D0EFFF';
}, function (props) {
  return props.short && (0, _styledComponents.css)(_templateObject2);
}, function (props) {
  return props.loading && (0, _styledComponents.css)(_templateObject3, _styles.color.light, _animation.progressLoading, _styles.color.lighter);
});

var barHover = (0, _styledComponents.css)(_templateObject4);

// prettier-ignore
var Bar = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.selectable && (0, _styledComponents.css)(_templateObject6, barHover);
}, function (props) {
  return props.active && (0, _styledComponents.css)(_templateObject7, barHover);
}, function (props) {
  return props.status === 'testing' && (0, _styledComponents.css)(_templateObject8, _styles.color.primary);
}, function (props) {
  return props.status === 'positive' && (0, _styledComponents.css)(_templateObject9, _styles.color.positive);
}, function (props) {
  return props.status === 'negative' && (0, _styledComponents.css)(_templateObject10, _styles.color.negative);
}, function (props) {
  return props.status === 'warning' && (0, _styledComponents.css)(_templateObject11);
});

function ProgressBar(_ref) {
  var loading = _ref.loading,
      numerator = _ref.numerator,
      denominator = _ref.denominator,
      short = _ref.short,
      selectable = _ref.selectable,
      onHoverIndex = _ref.onHoverIndex,
      onClickIndex = _ref.onClickIndex,
      selectedIndexes = _ref.selectedIndexes,
      props = (0, _objectWithoutProperties3.default)(_ref, ['loading', 'numerator', 'denominator', 'short', 'selectable', 'onHoverIndex', 'onClickIndex', 'selectedIndexes']);

  return _react2.default.createElement(
    ProgressWrapper,
    (0, _extends3.default)({ loading: loading, short: short, selectable: selectable }, props),
    numerator.map(function (_ref2, index) {
      var bar = _ref2.bar,
          numeral = _ref2.numeral,
          status = _ref2.status;
      return _react2.default.createElement(Bar, (0, _extends3.default)({
        style: { width: numeral / denominator * 100 + '%' },
        status: status,
        key: bar,
        selectable: selectable,
        active: selectable && selectedIndexes.includes(index)
      }, selectable ? {
        onMouseEnter: function onMouseEnter() {
          return onHoverIndex(index, true);
        },
        onMouseLeave: function onMouseLeave() {
          return onHoverIndex(index, false);
        },
        onClick: function onClick() {
          return onClickIndex(index);
        }
      } : {}));
    })
  );
}

ProgressBar.propTypes = {
  loading: _propTypes2.default.bool.isRequired,
  numerator: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    bar: _propTypes2.default.string.isRequired,
    numeral: _propTypes2.default.number.isRequired,
    status: _propTypes2.default.oneOf(['testing', 'positive', 'negative', 'warning']).isRequired
  })).isRequired,
  denominator: _propTypes2.default.number.isRequired,
  short: _propTypes2.default.bool,
  selectable: _propTypes2.default.bool,
  selectedIndexes: _propTypes2.default.arrayOf(_propTypes2.default.number),
  onHoverIndex: _propTypes2.default.func,
  onClickIndex: _propTypes2.default.func
};

ProgressBar.defaultProps = {
  loading: false,
  numerator: [{ bar: 'Loading', numeral: 0, status: 'testing' }],
  denominator: 100,
  short: false,
  selectable: false,
  selectedIndexes: [],
  onHoverIndex: function onHoverIndex() {
    return 0;
  },
  onClickIndex: function onClickIndex() {
    return 0;
  }
};

exports.default = ProgressBar;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  height: ', 'px;\n'], ['\n  display: inline-block;\n  height: ', 'px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  background: ', ';\n  display: inline-block;\n  vertical-align: top;\n  width: ', 'px;\n  height: ', 'px;\n  border-radius: 3em;\n  margin: 0 ', 'px;\n\n  ', '\n\n  ', '\n'], ['\n  background: ', ';\n  display: inline-block;\n  vertical-align: top;\n  width: ', 'px;\n  height: ', 'px;\n  border-radius: 3em;\n  margin: 0 ', 'px;\n\n  ', '\n\n  ', '\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    background: ', ';\n  '], ['\n    background: ', ';\n  ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    animation: ', ' 1.5s ease-in-out infinite;\n    &:nth-child(1) { animation-delay: 0s; }\n\t\t&:nth-child(2) { animation-delay: 0.3s; }\n\t\t&:nth-child(3) { animation-delay: 0.6s; }\n\t\t&:nth-child(4) { animation-delay: 0.9s; }\n  '], ['\n    animation: ', ' 1.5s ease-in-out infinite;\n    &:nth-child(1) { animation-delay: 0s; }\n\t\t&:nth-child(2) { animation-delay: 0.3s; }\n\t\t&:nth-child(3) { animation-delay: 0.6s; }\n\t\t&:nth-child(4) { animation-delay: 0.9s; }\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

var _animation = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var ProgressWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.size === "small" ? 4 : 5;
});

// prettier-ignore
var Dot = _styledComponents2.default.div(_templateObject2, _styles.color.medium, function (props) {
  return props.size === "small" ? 4 : 5;
}, function (props) {
  return props.size === "small" ? 4 : 5;
}, function (props) {
  return props.size === "small" ? 2 : 3;
}, function (props) {
  return props.active && (0, _styledComponents.css)(_templateObject3, _styles.color.mediumdark);
}, function (props) {
  return props.loading && (0, _styledComponents.css)(_templateObject4, _animation.glow);
});

function ProgressDots(_ref) {
  var loading = _ref.loading,
      steps = _ref.steps,
      progress = _ref.progress,
      className = _ref.className,
      size = _ref.size;

  var dots = [];
  for (var i = 0; i < steps; i += 1) {
    dots.push(_react2.default.createElement(Dot, { loading: loading, active: i === progress - 1, key: i, size: size }));
  }
  return _react2.default.createElement(
    ProgressWrapper,
    { className: className, size: size },
    dots
  );
}

ProgressDots.propTypes = {
  loading: _propTypes2.default.bool,
  steps: _propTypes2.default.number,
  progress: _propTypes2.default.number,
  className: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['small', 'large'])
};

ProgressDots.defaultProps = {
  loading: false,
  steps: 4,
  progress: 0,
  className: null,
  size: 'small'
};

exports.default = ProgressDots;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  0% {\n      transform: scale(0);\n      opacity: 0.2;\n  }\n\n  100% {\n      transform: scale(2);\n      opacity: 0;\n  }\n'], ['\n  0% {\n      transform: scale(0);\n      opacity: 0.2;\n  }\n\n  100% {\n      transform: scale(2);\n      opacity: 0;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 50%;\n  width: 50%;\n  background: ', ';\n  border-radius: 50%;\n  transform: scale(0);\n  opacity: 0;\n  animation: ', ' ', 's infinite cubic-bezier(0, 0, 0.46, 1);\n\n  &:nth-child(1) {\n    animation-delay: ', 's;\n  }\n\n  &:nth-child(2) {\n    animation-delay: ', 's;\n  }\n\n  &:nth-child(3) {\n    animation-delay: ', 's;\n  }\n\n  &:nth-child(4) {\n    animation-delay: ', 's;\n  }\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 50%;\n  width: 50%;\n  background: ', ';\n  border-radius: 50%;\n  transform: scale(0);\n  opacity: 0;\n  animation: ', ' ', 's infinite cubic-bezier(0, 0, 0.46, 1);\n\n  &:nth-child(1) {\n    animation-delay: ', 's;\n  }\n\n  &:nth-child(2) {\n    animation-delay: ', 's;\n  }\n\n  &:nth-child(3) {\n    animation-delay: ', 's;\n  }\n\n  &:nth-child(4) {\n    animation-delay: ', 's;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  height: ', 'px;\n  width: ', 'px;\n  transform: translate(25% , 25%);\n'], ['\n  position: relative;\n  height: ', 'px;\n  width: ', 'px;\n  transform: translate(25% , 25%);\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var variables = {
  size: 200,
  bgBlue: 'radial-gradient(transparent, #58FAF9, #25CBFC)',
  duration: 8,
  delay: 2
};

var radar = (0, _styledComponents.keyframes)(_templateObject);

var Dot = _styledComponents2.default.div(_templateObject2, variables.bgBlue, radar, variables.duration, variables.delay * 0, variables.delay * 1, variables.delay * 2, variables.delay * 3);

// prettier-ignore
var RadarWrapper = _styledComponents2.default.div(_templateObject3, variables.size * 2, variables.size * 2);

function Radar(_ref) {
  var props = (0, _objectWithoutProperties3.default)(_ref, []);

  return _react2.default.createElement(
    RadarWrapper,
    props,
    _react2.default.createElement(Dot, null),
    _react2.default.createElement(Dot, null),
    _react2.default.createElement(Dot, null),
    _react2.default.createElement(Dot, null)
  );
}

exports.default = Radar;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatSnapshotStatus = formatSnapshotStatus;
exports.formatSnapshotBadge = formatSnapshotBadge;
exports.formatBuildBadge = formatBuildBadge;
exports.formatBuildStatus = formatBuildStatus;
function formatSnapshotStatus(status) {
  switch (status) {
    case 'SNAPSHOT_IN_PROGRESS':
      return 'Snapshotting';
    case 'SNAPSHOT_PASSED':
      return 'Unchanged';
    case 'SNAPSHOT_PENDING':
      return 'Unreviewed';
    case 'SNAPSHOT_ACCEPTED':
      return 'Accepted';
    case 'SNAPSHOT_DENIED':
      return 'Denied';
    case 'SNAPSHOT_CAPTURE_ERROR':
      return 'Component error';
    case 'SNAPSHOT_SPEC_DELETED':
      return 'Deleted';
    default:
      throw new Error('unimplemented');
  }
}

function formatSnapshotBadge(status) {
  switch (status) {
    case 'loading':
      return 'loading';
    case 'SNAPSHOT_PENDING':
      return 'warning';
    case 'SNAPSHOT_ACCEPTED':
      return 'positive';
    case 'SNAPSHOT_DENIED':
      return 'negative';
    case 'SNAPSHOT_CAPTURE_ERROR':
      return 'error';
    case 'SNAPSHOT_SPEC_DELETED':
      return 'neutral';
    default:
      throw new Error('unimplemented');
  }
}

function formatBuildBadge(status) {
  switch (status) {
    case 'loading':
      return 'loading';
    case 'BUILD_IN_PROGRESS':
      return 'progress';
    case 'BUILD_PENDING':
      return 'warning';
    case 'BUILD_ACCEPTED':
    case 'BUILD_PASSED':
      return 'positive';
    case 'BUILD_FAILED':
    case 'BUILD_DENIED':
      return 'negative';
    case 'BUILD_ERROR':
    case 'BUILD_TIMED_OUT':
      return 'error';
    default:
      throw new Error('unimplemented');
  }
}

function formatBuildStatus(status) {
  switch (status) {
    case 'loading':
      return 'Loading';
    case 'BUILD_IN_PROGRESS':
      return 'In progress';
    case 'BUILD_PENDING':
      return 'Unreviewed';
    case 'BUILD_ACCEPTED':
    case 'BUILD_PASSED':
      return 'Passed';
    case 'BUILD_DENIED':
    case 'BUILD_FAILED':
      return 'Failed';
    case 'BUILD_ERROR':
      return 'Errored';
    case 'BUILD_TIMED_OUT':
      return 'Timed out';
    default:
      throw new Error('unimplemented');
  }
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyStyles = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-family: ', ';\n  font-size: ', 'px;\n  color: ', ';\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-overflow-scrolling: touch;\n\n  * {\n    box-sizing: border-box;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: ', ';\n    margin: 0;\n    padding: 0;\n  }\n\n  button,\n  input,\n  textarea,\n  select {\n    outline: none;\n    font-family: ', ';\n  }\n\n  sub,\n  sup {\n    font-size: 0.8em;\n  }\n\n  sub {\n    bottom: -.2em;\n  }\n\n  sup {\n    top: -.2em;\n  }\n\n  b,\n  em {\n    font-weight: ', ';\n  }\n\n  hr {\n    border: none;\n    border-top: 1px solid ', ';\n    clear: both;\n    margin-bottom: 1.25rem;\n  }\n\n  code,\n  pre {\n    font-family: ', ';\n    font-size: ', 'px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  code {\n    display: inline-block;\n    padding-left: 2px;\n    padding-right: 2px;\n    vertical-align: baseline;\n\n    color: ', ';\n  }\n\n  pre {\n    line-height: 18px;\n    padding: 11px 1rem;\n    white-space: pre-wrap;\n\n    background: ', ';\n    color: ', ';\n    border-radius: 3px;\n    margin: 1rem 0;\n  }\n'], ['\n  font-family: ', ';\n  font-size: ', 'px;\n  color: ', ';\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-overflow-scrolling: touch;\n\n  * {\n    box-sizing: border-box;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: ', ';\n    margin: 0;\n    padding: 0;\n  }\n\n  button,\n  input,\n  textarea,\n  select {\n    outline: none;\n    font-family: ', ';\n  }\n\n  sub,\n  sup {\n    font-size: 0.8em;\n  }\n\n  sub {\n    bottom: -.2em;\n  }\n\n  sup {\n    top: -.2em;\n  }\n\n  b,\n  em {\n    font-weight: ', ';\n  }\n\n  hr {\n    border: none;\n    border-top: 1px solid ', ';\n    clear: both;\n    margin-bottom: 1.25rem;\n  }\n\n  code,\n  pre {\n    font-family: ', ';\n    font-size: ', 'px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  code {\n    display: inline-block;\n    padding-left: 2px;\n    padding-right: 2px;\n    vertical-align: baseline;\n\n    color: ', ';\n  }\n\n  pre {\n    line-height: 18px;\n    padding: 11px 1rem;\n    white-space: pre-wrap;\n\n    background: ', ';\n    color: ', ';\n    border-radius: 3px;\n    margin: 1rem 0;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    @import url(\'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800\');\n    body {\n      ', '\n\n      background-color: ', ';\n      margin: 0;\n      overflow-y: auto;\n      overflow-x: hidden;\n    }\n  '], ['\n    @import url(\'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800\');\n    body {\n      ', '\n\n      background-color: ', ';\n      margin: 0;\n      overflow-y: auto;\n      overflow-x: hidden;\n    }\n  ']);

exports.injectGlobalStyles = injectGlobalStyles;

var _styledComponents = __webpack_require__(2);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bodyStyles = exports.bodyStyles = (0, _styledComponents.css)(_templateObject, _styles.typography.type.primary, _styles.typography.size.s3, _styles.color.darkest, _styles.typography.weight.regular, _styles.typography.type.primary, _styles.typography.weight.bold, _styles.color.mediumlight, _styles.typography.type.code, _styles.typography.size.s2 - 1, _styles.color.secondary, _styles.color.lighter, _styles.color.darkest);

function injectGlobalStyles() {
  // eslint-disable-next-line no-unused-expressions
  (0, _styledComponents.injectGlobal)(_templateObject2, bodyStyles, _styles.background.app);
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(128);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(6);

var _extends4 = _interopRequireDefault(_extends3);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: ', ';\n\n  svg {\n    transition: all 350ms ', ';\n    width: 12px;\n    height: 12px;\n    margin-left: .25em;\n    display: inline-block;\n    vertical-align: top;\n    position: relative;\n    top: 3px;\n\n    opacity: ', ';\n    transform: ', ';\n\n    path { fill: ', '; }\n  }\n\n  ', ';\n'], ['\n  font-weight: ', ';\n\n  svg {\n    transition: all 350ms ', ';\n    width: 12px;\n    height: 12px;\n    margin-left: .25em;\n    display: inline-block;\n    vertical-align: top;\n    position: relative;\n    top: 3px;\n\n    opacity: ', ';\n    transform: ', ';\n\n    path { fill: ', '; }\n  }\n\n  ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    transition: all 200ms ease-in ;\n    color: ', ';\n\n    &:hover {\n      color: ', ';\n      cursor: pointer;\n    }\n  '], ['\n    transition: all 200ms ease-in ;\n    color: ', ';\n\n    &:hover {\n      color: ', ';\n      cursor: pointer;\n    }\n  ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  /* Resets */\n  border-collapse: collapse;\n  border-spacing: 0;\n\n  td,\n  th { padding: 0; }\n  /* End Resets */\n\n  font-size: ', 'px;\n  line-height: 20px;\n\n  float: left;\n  margin: 1.5em 0;\n  text-align: left;\n  table-layout: fixed;\n\twidth: 100%;\n\n  th:first-of-type,\n  td:first-of-type { padding-left: 30px; }\n\n  th {\n    color: ', ';\n\n    > span {\n      overflow: hidden;\n    \ttext-overflow: ellipsis;\n    \twhite-space: nowrap;\n\n      display: inline-block;\n      margin: 0 0 .75rem;\n      vertical-align: bottom;\n    }\n\n    &:not(:first-of-type) > span {\n      padding-left: .86em;\n      padding-right: .86em;\n    }\n  }\n\n  tbody tr {\n    background: ', ';\n\n\t\t&:nth-child(odd) { background: ', '; }\n\n    td {\n      font-size: ', 'px;\n      color: ', ';\n      line-height: 20px;\n      padding-top: 10px;\n      padding-bottom: 10px;\n      position: relative;\n\n      &:not(:first-of-type) {\n        padding-left: .75em;\n        padding-right: .75em;\n      }\n\n      &:last-of-type { padding-right: 30px; }\n\n      &.truncate {\n        overflow: hidden;\n      \ttext-overflow: ellipsis;\n      \twhite-space: nowrap;\n      }\n\n      .title {\n        overflow: hidden;\n      \ttext-overflow: ellipsis;\n      \twhite-space: nowrap;\n\n        font-weight: ', ';\n        display: inline-block;\n        max-width: 100%;\n        padding-right: .25em;\n        position: relative;\n        vertical-align: top;\n      }\n\n\t\t\t.offsite {\n        height: 16px;\n        width: 16px;\n        line-height: 1;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmargin-left: .25em;\n        vertical-align: text-bottom;\n\n        &:hover { color: ', '; }\n      }\n    }\n  }\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  /* Resets */\n  border-collapse: collapse;\n  border-spacing: 0;\n\n  td,\n  th { padding: 0; }\n  /* End Resets */\n\n  font-size: ', 'px;\n  line-height: 20px;\n\n  float: left;\n  margin: 1.5em 0;\n  text-align: left;\n  table-layout: fixed;\n\twidth: 100%;\n\n  th:first-of-type,\n  td:first-of-type { padding-left: 30px; }\n\n  th {\n    color: ', ';\n\n    > span {\n      overflow: hidden;\n    \ttext-overflow: ellipsis;\n    \twhite-space: nowrap;\n\n      display: inline-block;\n      margin: 0 0 .75rem;\n      vertical-align: bottom;\n    }\n\n    &:not(:first-of-type) > span {\n      padding-left: .86em;\n      padding-right: .86em;\n    }\n  }\n\n  tbody tr {\n    background: ', ';\n\n\t\t&:nth-child(odd) { background: ', '; }\n\n    td {\n      font-size: ', 'px;\n      color: ', ';\n      line-height: 20px;\n      padding-top: 10px;\n      padding-bottom: 10px;\n      position: relative;\n\n      &:not(:first-of-type) {\n        padding-left: .75em;\n        padding-right: .75em;\n      }\n\n      &:last-of-type { padding-right: 30px; }\n\n      &.truncate {\n        overflow: hidden;\n      \ttext-overflow: ellipsis;\n      \twhite-space: nowrap;\n      }\n\n      .title {\n        overflow: hidden;\n      \ttext-overflow: ellipsis;\n      \twhite-space: nowrap;\n\n        font-weight: ', ';\n        display: inline-block;\n        max-width: 100%;\n        padding-right: .25em;\n        position: relative;\n        vertical-align: top;\n      }\n\n\t\t\t.offsite {\n        height: 16px;\n        width: 16px;\n        line-height: 1;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmargin-left: .25em;\n        vertical-align: text-bottom;\n\n        &:hover { color: ', '; }\n      }\n    }\n  }\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    tbody tr {\n      &:hover:nth-child(odd) td {\n        background-color: #E3F3FF;\n        box-shadow: ', ' 0 -1px 0 0 inset;\n        cursor: row-resize;\n      }\n\n      /* reset */\n      &:nth-child(odd) { background: ', '; }\n      &:not(:nth-child(odd)):last-child { border-bottom: none; }\n\n      /* new bgs */\n      &:nth-child(4n+1) { background: ', '; }\n      &:not(:nth-child(4n+1)):last-child { border-bottom: 1px solid ', '; }\n    }\n  '], ['\n    tbody tr {\n      &:hover:nth-child(odd) td {\n        background-color: #E3F3FF;\n        box-shadow: ', ' 0 -1px 0 0 inset;\n        cursor: row-resize;\n      }\n\n      /* reset */\n      &:nth-child(odd) { background: ', '; }\n      &:not(:nth-child(odd)):last-child { border-bottom: none; }\n\n      /* new bgs */\n      &:nth-child(4n+1) { background: ', '; }\n      &:not(:nth-child(4n+1)):last-child { border-bottom: 1px solid ', '; }\n    }\n  ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    tbody tr {\n      &:hover td {\n        cursor: pointer;\n        background-color: #E3F3FF;\n      }\n    }\n  '], ['\n    tbody tr {\n      &:hover td {\n        cursor: pointer;\n        background-color: #E3F3FF;\n      }\n    }\n  ']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n      ', ' span {\n        ', ';\n      }\n  '], ['\n      ', ' span {\n        ', ';\n      }\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icon = __webpack_require__(14);

var _Icon2 = _interopRequireDefault(_Icon);

var _EmptyMessage = __webpack_require__(28);

var _EmptyMessage2 = _interopRequireDefault(_EmptyMessage);

var _styles = __webpack_require__(5);

var _animation = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Heading = _styledComponents2.default.th(_templateObject, _styles.typography.weight.extrabold, _animation.easing.rubber, function (props) {
  return props.sort === "none" ? '0' : '1';
}, function (props) {
  return props.sort !== "descending" ? 'rotate(0deg)' : 'rotate(180deg)';
}, _styles.color.mediumdark, function (props) {
  return props.sortable && (0, _styledComponents.css)(_templateObject2, _styles.color.dark, _styles.color.darkest);
});

// prettier-ignore
var TableView = _styledComponents2.default.table(_templateObject3, _styles.typography.size.s2, _styles.color.darker, _styles.color.lightest, _styles.color.lighter, _styles.typography.size.s2, _styles.color.darker, _styles.typography.weight.bold, _styles.color.dark, function (props) {
  return props.expandable && (0, _styledComponents.css)(_templateObject4, _styles.color.mediumlight, _styles.color.lightest, _styles.color.lighter, _styles.color.lighter);
}, function (props) {
  return props.clickable && (0, _styledComponents.css)(_templateObject5);
}, function (props) {
  return props.loading && (0, _styledComponents.css)(_templateObject6, Heading, _animation.inlineGlow);
});

var Table = function (_Component) {
  (0, _inherits3.default)(Table, _Component);

  function Table() {
    (0, _classCallCheck3.default)(this, Table);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).call(this));

    _this.state = {
      openDrawers: {}
    };
    _this.onToggleDrawer = _this.onToggleDrawer.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Table, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        openDrawers: this.state.openDrawers,
        onToggleDrawer: this.onToggleDrawer
      };
    }
  }, {
    key: 'onToggleDrawer',
    value: function onToggleDrawer(index) {
      var wasOpen = this.state.openDrawers[index];
      this.setState({
        openDrawers: (0, _extends4.default)({}, this.state.openDrawers, (0, _defineProperty3.default)({}, index, !wasOpen))
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          loading = _props.loading,
          headings = _props.headings,
          sortable = _props.sortable,
          expandable = _props.expandable,
          children = _props.children,
          props = (0, _objectWithoutProperties3.default)(_props, ['loading', 'headings', 'sortable', 'expandable', 'children']);

      var loadingRow = _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { colSpan: headings.length },
          '\xA0'
        )
      );
      var childrenContent = _react2.default.createElement(
        'tbody',
        null,
        loadingRow,
        loadingRow,
        loadingRow,
        loadingRow
      );
      if (!loading) {
        if (children) {
          childrenContent = _react2.default.createElement(
            'tbody',
            null,
            children
          );
        } else {
          childrenContent = _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                { colSpan: headings.length },
                _react2.default.createElement(_EmptyMessage2.default, null)
              )
            )
          );
        }
      }

      return _react2.default.createElement(
        TableView,
        (0, _extends4.default)({ sortable: sortable, expandable: expandable, loading: loading }, props),
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            headings.map(function (_ref) {
              var heading = _ref.heading,
                  sort = _ref.sort;
              return _react2.default.createElement(
                Heading,
                { key: heading, field: 'name', sort: sort, sortable: sortable },
                _react2.default.createElement(
                  'span',
                  null,
                  heading,
                  sortable && _react2.default.createElement(_Icon2.default, { icon: 'arrowdown' })
                )
              );
            })
          )
        ),
        childrenContent
      );
    }
  }]);
  return Table;
}(_react.Component);

exports.default = Table;


Table.propTypes = {
  loading: _propTypes2.default.bool,
  headings: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    heading: _propTypes2.default.string.isRequired,
    sort: _propTypes2.default.oneOf(['ascending', 'descending', 'none'])
  })).isRequired,
  sortable: _propTypes2.default.bool,
  expandable: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

Table.defaultProps = {
  loading: false,
  headings: [{ heading: 'Loading1' }, { heading: 'Loading2' }, { heading: 'Loading3' }],
  sortable: false,
  expandable: false,
  children: null
};

Table.childContextTypes = {
  openDrawers: _propTypes2.default.object,
  onToggleDrawer: _propTypes2.default.func
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  td {\n    background-color: ', ';\n    box-shadow: rgba(0,0,0,0.05) 0 5px 5px 0 inset, rgba(0,0,0,0.05) 0 -3px 5px 0 inset;\n    padding: 0 !important;\n  }\n'], ['\n  td {\n    background-color: ', ';\n    box-shadow: rgba(0,0,0,0.05) 0 5px 5px 0 inset, rgba(0,0,0,0.05) 0 -3px 5px 0 inset;\n    padding: 0 !important;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  padding: ', 'px;\n'], ['\n  padding: ', 'px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _recompose = __webpack_require__(17);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Drawer = _styledComponents2.default.tr(_templateObject, _styles.background.app);

// prettier-ignore
var DrawerContents = _styledComponents2.default.div(_templateObject2, _styles.spacing.padding.large);

function TableDrawer(_ref) {
  var drawer = _ref.drawer,
      openDrawers = _ref.openDrawers,
      children = _ref.children,
      other = (0, _objectWithoutProperties3.default)(_ref, ['drawer', 'openDrawers', 'children']);

  if (!openDrawers[drawer]) {
    return _react2.default.createElement('tr', null);
  }
  return _react2.default.createElement(
    Drawer,
    null,
    _react2.default.createElement(
      'td',
      other,
      _react2.default.createElement(
        DrawerContents,
        null,
        children
      )
    )
  );
}

TableDrawer.propTypes = {
  drawer: _propTypes2.default.number.isRequired,
  // Not sure how to express this prop type in a way React likes
  // eslint-disable-next-line react/forbid-prop-types
  openDrawers: _propTypes2.default.any.isRequired,
  children: _propTypes2.default.node.isRequired
};

exports.default = (0, _recompose.getContext)({ openDrawers: _propTypes2.default.any })(TableDrawer);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopperWithArrow = exports.Target = exports.Manager = undefined;

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  cursor: ', ';\n'], ['\n  display: inline-block;\n  cursor: ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  border-style: solid;\n\n  margin-bottom: ', 'px;\n  margin-top: ', 'px;\n  margin-right: ', 'px;\n  margin-left: ', 'px;\n\n  bottom: ', 'px;\n  top: ', 'px;\n  right: ', 'px;\n  left: ', 'px;\n\n  border-bottom-width: ', 'px;\n  border-top-width: ', 'px;\n  border-right-width: ', 'px;\n  border-left-width: ', 'px;\n\n  border-top-color: ', ';\n  border-bottom-color: ', ';\n  border-left-color: ', ';\n  border-right-color: ', ';\n'], ['\n  position: absolute;\n  border-style: solid;\n\n  margin-bottom: ', 'px;\n  margin-top: ', 'px;\n  margin-right: ', 'px;\n  margin-left: ', 'px;\n\n  bottom: ', 'px;\n  top: ', 'px;\n  right: ', 'px;\n  left: ', 'px;\n\n  border-bottom-width: ', 'px;\n  border-top-width: ', 'px;\n  border-right-width: ', 'px;\n  border-left-width: ', 'px;\n\n  border-top-color: ', ';\n  border-bottom-color: ', ';\n  border-left-color: ', ';\n  border-right-color: ', ';\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  display: ', ';\n  z-index: 2147483647;\n\n  ', '\n\n  ', '\n'], ['\n  display: ', ';\n  z-index: 2147483647;\n\n  ', '\n\n  ', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    margin-bottom: ', 'px;\n    margin-bottom: ', 'px;\n    margin-top: ', 'px;\n    margin-top: ', 'px;\n    margin-left: ', 'px;\n    margin-right: ', 'px;\n  '], ['\n    margin-bottom: ', 'px;\n    margin-bottom: ', 'px;\n    margin-top: ', 'px;\n    margin-top: ', 'px;\n    margin-left: ', 'px;\n    margin-right: ', 'px;\n  ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    margin-bottom: ', 'px;\n    margin-top: ', 'px;\n    margin-left: ', 'px;\n    margin-right: ', 'px;\n\n    background-image: linear-gradient(-1deg, rgba(248,248,248,0.97) 0%, rgba(255,255,255,0.97) 100%);\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.10);\n    border-radius: 4px;\n    font-size: ', 'px;\n  '], ['\n    margin-bottom: ', 'px;\n    margin-top: ', 'px;\n    margin-left: ', 'px;\n    margin-right: ', 'px;\n\n    background-image: linear-gradient(-1deg, rgba(248,248,248,0.97) 0%, rgba(255,255,255,0.97) 100%);\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.10);\n    border-radius: 4px;\n    font-size: ', 'px;\n  ']); // Our wrapper around react-popper that does common stuff.

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactPopper = __webpack_require__(58);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// We need to ensure these are inline block so they get the sizing from their
// children. An alternate approach if this is annoying is to make the children
// themselves the target/popper but this means we'd need a ref to them, which
// makes this a bit clunkier to use.
var StyledTarget = (0, _styledComponents2.default)(_reactPopper.Target)(_templateObject, function (props) {
  return props.mode === 'hover' ? 'default' : 'pointer';
});

var ifPlacementEquals = function ifPlacementEquals(placement, value) {
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return function (props) {
    return props['data-placement'].split('-')[0] === placement ? value : fallback;
  };
};

var ArrowSpacing = 8;

var StyledArrow = _styledComponents2.default.div(_templateObject2, ifPlacementEquals('top', '0', ArrowSpacing), ifPlacementEquals('bottom', '0', ArrowSpacing), ifPlacementEquals('left', '0', ArrowSpacing), ifPlacementEquals('right', '0', ArrowSpacing), ifPlacementEquals('top', ArrowSpacing * -1, 'auto'), ifPlacementEquals('bottom', ArrowSpacing * -1, 'auto'), ifPlacementEquals('left', ArrowSpacing * -1, 'auto'), ifPlacementEquals('right', ArrowSpacing * -1, 'auto'), ifPlacementEquals('top', '0', ArrowSpacing), ifPlacementEquals('bottom', '0', ArrowSpacing), ifPlacementEquals('left', '0', ArrowSpacing), ifPlacementEquals('right', '0', ArrowSpacing), ifPlacementEquals('top', 'white', 'transparent'), ifPlacementEquals('bottom', 'white', 'transparent'), ifPlacementEquals('left', 'white', 'transparent'), ifPlacementEquals('right', 'white', 'transparent'));

var WrapperArrow = function WrapperArrow(props) {
  return _react2.default.createElement(_reactPopper.Arrow, (0, _extends3.default)({}, props, { component: StyledArrow }));
};

// prettier-ignore
var StyledPopper = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.hidden ? 'none' : 'inline-block';
}, function (props) {
  return !props.hasChrome && (0, _styledComponents.css)(_templateObject4, ifPlacementEquals('top', 8), ifPlacementEquals('top-start', 8), ifPlacementEquals('bottom', 8), ifPlacementEquals('bottom-start', 8), ifPlacementEquals('right', 8), ifPlacementEquals('left', 8));
}, function (props) {
  return props.hasChrome && (0, _styledComponents.css)(_templateObject5, ifPlacementEquals('top', ArrowSpacing + 2), ifPlacementEquals('bottom', ArrowSpacing + 2), ifPlacementEquals('right', ArrowSpacing + 2), ifPlacementEquals('left', ArrowSpacing + 2), _styles.typography.size.s1);
});

var RawPopperWithArrow = function RawPopperWithArrow(_ref) {
  var children = _ref.children,
      hasChrome = _ref.hasChrome,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'hasChrome']);
  return _react2.default.createElement(
    StyledPopper,
    (0, _extends3.default)({ hasChrome: hasChrome }, props),
    children,
    hasChrome && _react2.default.createElement(WrapperArrow, { 'data-placement': props['data-placement'] })
  );
};

RawPopperWithArrow.propTypes = {
  children: _propTypes2.default.node.isRequired,
  hasChrome: _propTypes2.default.bool,
  'data-placement': _propTypes2.default.string
};

RawPopperWithArrow.defaultProps = {
  hasChrome: false,
  'data-placement': 'top'
};

var PopperWithArrow = function PopperWithArrow(props) {
  return _react2.default.createElement(_reactPopper.Popper, (0, _extends3.default)({}, props, { component: RawPopperWithArrow }));
};

exports.Manager = _reactPopper.Manager;
exports.Target = StyledTarget;
exports.PopperWithArrow = PopperWithArrow;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: ', ';\n  transition: all 150ms ease-out;\n  line-height: 18px;\n  padding: 7px 15px;\n  display: block;\n  transform: none !important;\n\n  &:hover {\n    background: #E3F3FF;\n  }\n\n  ', '\n'], ['\n  font-weight: ', ';\n  transition: all 150ms ease-out;\n  line-height: 18px;\n  padding: 7px 15px;\n  display: block;\n  transform: none !important;\n\n  &:hover {\n    background: #E3F3FF;\n  }\n\n  ', '\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    ', ' { font-weight: ', '; }\n    ', ' { color: ', '; }\n  '], ['\n    ', ' { font-weight: ', '; }\n    ', ' { color: ', '; }\n  ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  min-width: 180px;\n\n  ', ' + ', ' {\n    border-top: 1px solid ', ';\n  }\n'], ['\n  min-width: 180px;\n\n  ', ' + ', ' {\n    border-top: 1px solid ', ';\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

var _Link = __webpack_require__(15);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Title = _styledComponents2.default.span(_templateObject);

// prettier-ignore
var Item = (0, _styledComponents2.default)(_Link2.default)(_templateObject2, _styles.typography.weight.bold, function (props) {
  return props.active && (0, _styledComponents.css)(_templateObject3, Title, _styles.typography.weight.extrabold, Title, _styles.color.primary);
});

// prettier-ignore
var List = _styledComponents2.default.div(_templateObject4, Item, Item, _styles.color.mediumlight);

function TooltipLinkList(_ref) {
  var links = _ref.links;

  return _react2.default.createElement(
    List,
    null,
    links.map(function (_ref2) {
      var title = _ref2.title,
          href = _ref2.href,
          onClick = _ref2.onClick,
          active = _ref2.active;
      return _react2.default.createElement(
        Item,
        { key: title, href: href, onClick: onClick, active: active, tertiary: true },
        _react2.default.createElement(
          Title,
          null,
          title
        )
      );
    })
  );
}

TooltipLinkList.propTypes = {
  links: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string.isRequired,
    href: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    active: _propTypes2.default.bool
  }).isRequired).isRequired
};

exports.default = TooltipLinkList;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: ', ';\n'], ['\n  font-weight: ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  margin-top: 8px;\n  text-align: center;\n\n  > * {\n    margin: 0 8px;\n    font-weight: ', ';\n  }\n'], ['\n  margin-top: 8px;\n  text-align: center;\n\n  > * {\n    margin: 0 8px;\n    font-weight: ', ';\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  line-height: 18px;\n'], ['\n  color: ', ';\n  line-height: 18px;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  padding: 15px;\n  width: 280px;\n  box-sizing: border-box;\n'], ['\n  padding: 15px;\n  width: 280px;\n  box-sizing: border-box;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = __webpack_require__(5);

var _Link = __webpack_require__(15);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var Title = _styledComponents2.default.div(_templateObject, _styles.typography.weight.extrabold);
var Desc = _styledComponents2.default.span(_templateObject2);

// prettier-ignore
var Links = _styledComponents2.default.div(_templateObject3, _styles.typography.weight.extrabold);

// prettier-ignore
var Message = _styledComponents2.default.div(_templateObject4, _styles.color.darker);

// prettier-ignore
var MessageWrapper = _styledComponents2.default.div(_templateObject5);

function TooltipMessage(_ref) {
  var title = _ref.title,
      desc = _ref.desc,
      links = _ref.links;

  return _react2.default.createElement(
    MessageWrapper,
    null,
    _react2.default.createElement(
      Message,
      null,
      title && _react2.default.createElement(
        Title,
        null,
        title
      ),
      desc && _react2.default.createElement(
        Desc,
        null,
        desc
      )
    ),
    links && _react2.default.createElement(
      Links,
      null,
      links.map(function (_ref2) {
        var linkTitle = _ref2.title,
            other = (0, _objectWithoutProperties3.default)(_ref2, ['title']);
        return _react2.default.createElement(
          _Link2.default,
          (0, _extends3.default)({}, other, { key: linkTitle }),
          linkTitle
        );
      })
    )
  );
}

TooltipMessage.propTypes = {
  title: _propTypes2.default.string,
  desc: _propTypes2.default.string,
  links: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string.isRequired
  }))
};

TooltipMessage.defaultProps = {
  title: null,
  desc: null,
  links: null
};

exports.default = TooltipMessage;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(13);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _typeof2 = __webpack_require__(35);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = normalize;

var _react = __webpack_require__(0);

var _UnserializeableInputError = __webpack_require__(47);

var _UnserializeableInputError2 = _interopRequireDefault(_UnserializeableInputError);

var _Callback = __webpack_require__(46);

var _Callback2 = _interopRequireDefault(_Callback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file acts similarly to devtools' dehydrate.js
//   https://github.com/facebook/react-devtools/blob/master/agent/dehydrate.js

// However we have a different set of requirements in mind -- we just want to
// serialize things that we can sensibly unserialize at the other end.

function getType(data) {
  var type = typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data);

  if (type === 'object') {
    if (!data) {
      return null;
    }

    if (Array.isArray(data)) {
      return 'array';
    }

    if ((0, _react.isValidElement)(data)) {
      return 'element';
    }

    if (data instanceof Date) {
      return 'date';
    }

    if ((0, _getPrototypeOf2.default)(data) !== Object.prototype) {
      return 'instance';
    }
  }

  return type;
}

// We don't need every property of an element
function normalizeElement(_ref) {
  var type = _ref.type,
      props = _ref.props,
      state = _ref.state,
      context = _ref.context;

  var name = typeof type === 'string' ? type : type.name;

  // eslint-disable-next-line no-use-before-define
  return normalize({
    name: name,
    props: props,
    state: state,
    context: context
  });
}

function normalize(data) {
  switch (getType(data)) {
    case 'element':
      {
        return normalizeElement(data);
      }
    case 'array':
      {
        return data.map(normalize);
      }
    case 'object':
      {
        var result = {};
        (0, _keys2.default)(data).forEach(function (key) {
          result[key] = normalize(data[key]);
        });
        return result;
      }
    case 'function':
      {
        return new _Callback2.default(data.name);
      }
    case 'instance':
      {
        throw new _UnserializeableInputError2.default(data);
      }
    default:
      {
        return data;
      }
  }
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderSpecToString;

var _reactElementToJsxString = __webpack_require__(122);

var _reactElementToJsxString2 = _interopRequireDefault(_reactElementToJsxString);

var _ = __webpack_require__(31);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderSpecToString(spec, options) {
  var element = (0, _2.default)(spec, options);
  return (0, _reactElementToJsxString2.default)(element);
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getOwnPropertySymbols = __webpack_require__(127);

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (object) {
  return (0, _getOwnPropertySymbols2.default)(object).filter(function (keySymbol) {
    return object.propertyIsEnumerable(keySymbol);
  });
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(13);

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__(35);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isRegexp = __webpack_require__(133);
var isObj = __webpack_require__(131);
var getOwnEnumPropSymbols = __webpack_require__(97);

module.exports = function (val, opts, pad) {
	var seen = [];

	return function stringify(val, opts, pad) {
		opts = opts || {};
		opts.indent = opts.indent || '\t';
		pad = pad || '';

		var tokens = void 0;

		if (opts.inlineCharacterLimit === undefined) {
			tokens = {
				newLine: '\n',
				newLineOrSpace: '\n',
				pad: pad,
				indent: pad + opts.indent
			};
		} else {
			tokens = {
				newLine: '@@__STRINGIFY_OBJECT_NEW_LINE__@@',
				newLineOrSpace: '@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@',
				pad: '@@__STRINGIFY_OBJECT_PAD__@@',
				indent: '@@__STRINGIFY_OBJECT_INDENT__@@'
			};
		}

		var expandWhiteSpace = function expandWhiteSpace(string) {
			if (opts.inlineCharacterLimit === undefined) {
				return string;
			}

			var oneLined = string.replace(new RegExp(tokens.newLine, 'g'), '').replace(new RegExp(tokens.newLineOrSpace, 'g'), ' ').replace(new RegExp(tokens.pad + '|' + tokens.indent, 'g'), '');

			if (oneLined.length <= opts.inlineCharacterLimit) {
				return oneLined;
			}

			return string.replace(new RegExp(tokens.newLine + '|' + tokens.newLineOrSpace, 'g'), '\n').replace(new RegExp(tokens.pad, 'g'), pad).replace(new RegExp(tokens.indent, 'g'), pad + opts.indent);
		};

		if (seen.indexOf(val) !== -1) {
			return '"[Circular]"';
		}

		if (val === null || val === undefined || typeof val === 'number' || typeof val === 'boolean' || typeof val === 'function' || (typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) === 'symbol' || isRegexp(val)) {
			return String(val);
		}

		if (val instanceof Date) {
			return 'new Date(\'' + val.toISOString() + '\')';
		}

		if (Array.isArray(val)) {
			if (val.length === 0) {
				return '[]';
			}

			seen.push(val);

			var ret = '[' + tokens.newLine + val.map(function (el, i) {
				var eol = val.length - 1 === i ? tokens.newLine : ',' + tokens.newLineOrSpace;
				var value = stringify(el, opts, pad + opts.indent);
				if (opts.transform) {
					value = opts.transform(val, i, value);
				}
				return tokens.indent + value + eol;
			}).join('') + tokens.pad + ']';

			seen.pop(val);

			return expandWhiteSpace(ret);
		}

		if (isObj(val)) {
			var objKeys = (0, _keys2.default)(val).concat(getOwnEnumPropSymbols(val));

			if (objKeys.length === 0) {
				return '{}';
			}

			seen.push(val);

			var _ret = '{' + tokens.newLine + objKeys.map(function (el, i) {
				if (opts.filter && !opts.filter(val, el)) {
					return '';
				}

				var eol = objKeys.length - 1 === i ? tokens.newLine : ',' + tokens.newLineOrSpace;
				var isSymbol = (typeof el === 'undefined' ? 'undefined' : (0, _typeof3.default)(el)) === 'symbol';
				var isClassic = !isSymbol && /^[a-z$_][a-z$_0-9]*$/i.test(el);
				var key = isSymbol || isClassic ? el : stringify(el, opts);
				var value = stringify(val[el], opts, pad + opts.indent);
				if (opts.transform) {
					value = opts.transform(val, el, value);
				}
				return tokens.indent + String(key) + ': ' + value + eol;
			}).join('') + tokens.pad + '}';

			seen.pop(val);

			return expandWhiteSpace(_ret);
		}

		val = String(val).replace(/[\r\n]/g, function (x) {
			return x === '\n' ? '\\n' : '\\r';
		});

		if (opts.singleQuotes === false) {
			val = val.replace(/"/g, '\\"');
			return '"' + val + '"';
		}

		val = val.replace(/\\?'/g, '\\\'');
		return '\'' + val + '\'';
	}(val, opts, pad);
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: ', ';\n  margin-left: 6px;\n'], ['\n  font-weight: ', ';\n  margin-left: 6px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 11px;\n  line-height: 12px;\n  padding: 5px 12px 3px;\n  margin-right: 6px;\n  vertical-align: top;\n'], ['\n  font-size: 11px;\n  line-height: 12px;\n  padding: 5px 12px 3px;\n  margin-right: 6px;\n  vertical-align: top;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  background: rgba(31, 31, 31, 0.6);\n  color: ', ';\n'], ['\n  background: rgba(31, 31, 31, 0.6);\n  color: ', ';\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  svg {\n    ', ' height: 12px;\n    width: 12px;\n    margin-right: 2px;\n    margin-top: -1px;\n  }\n\n  ', '\n'], ['\n  svg {\n    ', ' height: 12px;\n    width: 12px;\n    margin-right: 2px;\n    margin-top: -1px;\n  }\n\n  ', '\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n        animation: ', ' 1s linear infinite;\n    '], ['\n        animation: ', ' 1s linear infinite;\n    ']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n    opacity: 1;\n    font-weight: ', ';\n    color: ', ';\n    svg path { fill: ', '; }\n  '], ['\n    opacity: 1;\n    font-weight: ', ';\n    color: ', ';\n    svg path { fill: ', '; }\n  ']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  white-space: nowrap;\n  margin: 8px 0;\n  font-size: 0;\n'], ['\n  white-space: nowrap;\n  margin: 8px 0;\n  font-size: 0;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animateCssStyledComponents = __webpack_require__(124);

var _mobxReact = __webpack_require__(20);

var _components = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var color = _components.styles.color,
    typography = _components.styles.typography;
var rotate360 = _components.animation.rotate360;

// prettier-ignore

var Count = _styledComponents2.default.span(_templateObject, typography.weight.regular);

// prettier-ignore
var ScannerButton = (0, _styledComponents2.default)(_components.Button)(_templateObject2);

var ComponentButton = ScannerButton.extend(_templateObject3, color.lightest);

// prettier-ignore
var SaveButton = ScannerButton.extend(_templateObject4, function (props) {
  return props.saving && (0, _styledComponents.css)(_templateObject5, rotate360);
}, function (props) {
  return props.error && (0, _styledComponents.css)(_templateObject6, typography.weight.regular, color.negative, color.negative);
});

var SaveHref = SaveButton.extend(_templateObject7);

// prettier-ignore
var ButtonGroup = _styledComponents2.default.div(_templateObject8);

function ScannerButtons(_ref) {
  var _ref$spec = _ref.spec,
      status = _ref$spec.status,
      internalId = _ref$spec.internalId,
      _ref$spec$component = _ref$spec.component,
      name = _ref$spec$component.name,
      specCount = _ref$spec$component.specCount,
      unsaveableReason = _ref$spec.unsaveableReason,
      onCreateSpec = _ref.onCreateSpec,
      onShowComponentSpecs = _ref.onShowComponentSpecs,
      props = (0, _objectWithoutProperties3.default)(_ref, ['spec', 'onCreateSpec', 'onShowComponentSpecs']);

  var count = specCount + ' ' + (specCount === 1 ? 'spec' : 'specs');
  if (specCount === 0) {
    count = 'No specs';
  }

  var saveButton = _react2.default.createElement(
    SaveButton,
    { secondary: true, onClick: onCreateSpec },
    'Save'
  );
  if (status === 'saved') {
    saveButton = _react2.default.createElement(
      SaveButton,
      { tertiary: true, disabled: true },
      'Saved'
    );
  } else if (status === 'saving') {
    saveButton = _react2.default.createElement(
      SaveButton,
      { tertiary: true, disabled: true, saving: true },
      _react2.default.createElement(_components.Icon, { icon: 'sync' }),
      ' Saving'
    );
  } else if (status === 'unsaveable') {
    // TODO -- link to docs on click?
    // github.com/hichroma/chromatic/issues/156
    saveButton = _react2.default.createElement(
      SaveHref,
      { tertiary: true, error: true, href: 'http://docs.chromaticqa.com/specs#cant-save', target: '_blank' },
      _react2.default.createElement(_components.Icon, { icon: 'info' }),
      ' ',
      unsaveableReason || "Can't save"
    );
  }

  var onComponentButtonClick = function onComponentButtonClick() {};
  if (status !== 'unsaveable') {
    onComponentButtonClick = function onComponentButtonClick() {
      return onShowComponentSpecs(name, internalId);
    };
  }

  return _react2.default.createElement(
    _animateCssStyledComponents.FadeInUp,
    { duration: '0.25s' },
    _react2.default.createElement(
      ButtonGroup,
      props,
      _react2.default.createElement(
        ComponentButton,
        { onClick: onComponentButtonClick },
        name,
        _react2.default.createElement(
          Count,
          null,
          count
        )
      ),
      saveButton
    )
  );
}

ScannerButtons.propTypes = {
  spec: _propTypes2.default.shape({
    status: _propTypes2.default.oneOf(['unsaved', 'saving', 'saved', 'unsaveable']).isRequired,
    unsaveableReason: _propTypes2.default.string,
    component: _propTypes2.default.shape({
      name: _propTypes2.default.string.isRequired,
      specCount: _propTypes2.default.number.isRequired
    }).isRequired
  }).isRequired,
  onCreateSpec: _propTypes2.default.func.isRequired,
  onShowComponentSpecs: _propTypes2.default.func.isRequired
};

exports.default = (0, _mobxReact.observer)(ScannerButtons);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  transition: all 150ms ease-out;\n  display: inline-block;\n  vertical-align: top;\n  padding: 3px 3px;\n  border-radius: 3em;\n\n  &:not(:only-child) {\n    padding-left: 6px;\n    padding-right: 4px;\n    border-radius: 3em 0 0 3em;\n  }\n\n  svg {\n    display: block;\n    height: 14px;\n    width: 14px;\n  }\n'], ['\n  transition: all 150ms ease-out;\n  display: inline-block;\n  vertical-align: top;\n  padding: 3px 3px;\n  border-radius: 3em;\n\n  &:not(:only-child) {\n    padding-left: 6px;\n    padding-right: 4px;\n    border-radius: 3em 0 0 3em;\n  }\n\n  svg {\n    display: block;\n    height: 14px;\n    width: 14px;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  path {\n    fill: ', ';\n  }\n'], ['\n  path {\n    fill: ', ';\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  transition: all 150ms ease-out;\n  box-sizing: border-box;\n  display: inline-block;\n  vertical-align: top;\n  text-align: center;\n  font-weight: ', ';\n  font-size: 10px;\n  background-color: ', ';\n  color: ', ';\n  border-radius: 0 3em 3em 0;\n  line-height: 20px;\n  min-width: 24px;\n  padding-left:4px;\n  padding-right: 8px;\n  transition: all 300ms ease-out;\n'], ['\n  transition: all 150ms ease-out;\n  box-sizing: border-box;\n  display: inline-block;\n  vertical-align: top;\n  text-align: center;\n  font-weight: ', ';\n  font-size: 10px;\n  background-color: ', ';\n  color: ', ';\n  border-radius: 0 3em 3em 0;\n  line-height: 20px;\n  min-width: 24px;\n  padding-left:4px;\n  padding-right: 8px;\n  transition: all 300ms ease-out;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  display: block;\n\tborder: 0;\n  border-radius: 3em;\n  box-shadow: 0 0 5px 0 rgba(0,0,0,0.30);\n  padding: 0;\n\tposition: relative;\n  outline: 0;\n  cursor: pointer;\n  transition: all 150ms ease-out;\n  height: 20px;\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n\n  ', '\n\n  &:focus { outline:0; }\n\n  ', ' {\n    background: ', ';\n\n    ', '\n\n    ', '\n\n  }\n\n  ', '\n\n  ', '\n\n  &:active { transform: translate3d(0,0,0); }\n\n'], ['\n  display: block;\n\tborder: 0;\n  border-radius: 3em;\n  box-shadow: 0 0 5px 0 rgba(0,0,0,0.30);\n  padding: 0;\n\tposition: relative;\n  outline: 0;\n  cursor: pointer;\n  transition: all 150ms ease-out;\n  height: 20px;\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n\n  ', '\n\n  &:focus { outline:0; }\n\n  ', ' {\n    background: ', ';\n\n    ', '\n\n    ', '\n\n  }\n\n  ', '\n\n  ', '\n\n  &:active { transform: translate3d(0,0,0); }\n\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  '], ['\n  ']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n      background: ', ';\n    '], ['\n      background: ', ';\n    ']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n    &:hover {\n      transform: translate3d(0,-1px,0);\n      box-shadow: 0 0 7px 0 rgba(0,0,0,0.30);\n\n      ', ' {\n        background: ', ';\n      }\n      ', ' {\n        color: ', ';\n        box-shadow: #D9FAF7 0 0 3em 0 inset;\n      }\n    }\n  '], ['\n    &:hover {\n      transform: translate3d(0,-1px,0);\n      box-shadow: 0 0 7px 0 rgba(0,0,0,0.30);\n\n      ', ' {\n        background: ', ';\n      }\n      ', ' {\n        color: ', ';\n        box-shadow: #D9FAF7 0 0 3em 0 inset;\n      }\n    }\n  ']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n    cursor: progress;\n  '], ['\n    cursor: progress;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = __webpack_require__(21);

var _components = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var color = _components.styles.color,
    typography = _components.styles.typography;

// prettier-ignore

var LogoWrapper = _styledComponents2.default.span(_templateObject);

var Error = (0, _styledComponents2.default)(_components.Icon)(_templateObject2, color.lightest);

// prettier-ignore
var Count = _styledComponents2.default.span(_templateObject3, typography.weight.extrabold, color.lightest, color.darker);

// prettier-ignore
var Button = _styledComponents2.default.button(_templateObject4, function (props) {
  return !props.error && (0, _styledComponents.css)(_templateObject5);
}, LogoWrapper, color.mediumdark, function (props) {
  return props.loading && (0, _styledComponents.css)(_templateObject6, color.lightest);
}, function (props) {
  return props.active && (0, _styledComponents.css)(_templateObject6, color.secondary);
}, function (props) {
  return !props.loading && !props.error && (0, _styledComponents.css)(_templateObject7, LogoWrapper, props.active ? (0, _polished.darken)(0.05, color.secondary) : color.dark, Count, color.darkest);
}, function (props) {
  return props.loading && (0, _styledComponents.css)(_templateObject8);
});

function WidgetButton(_ref) {
  var loading = _ref.loading,
      error = _ref.error,
      active = _ref.active,
      count = _ref.count,
      props = (0, _objectWithoutProperties3.default)(_ref, ['loading', 'error', 'active', 'count']);

  var tooltip = 'Initializing Chromatic';
  if (!loading) {
    if (active) {
      tooltip = 'Hide outlines Ctrl + M';
    } else {
      tooltip = 'Show outlines Ctrl + M';
    }
  }

  var button = _react2.default.createElement(
    Button,
    (0, _extends3.default)({ loading: loading, error: error, active: active, disabled: loading || error }, props),
    _react2.default.createElement(
      LogoWrapper,
      null,
      loading && _react2.default.createElement(_components.Spinner, { inForm: true }),
      error ? _react2.default.createElement(Error, { icon: 'facesad' }) : _react2.default.createElement(_components.Logo, { inverse: true })
    ),
    !loading && count > 0 && _react2.default.createElement(
      Count,
      { title: count + ' components on this page' },
      count
    )
  );

  var buttonWithTooltip = _react2.default.createElement(
    _components.WithTooltip,
    {
      placement: 'top',
      mode: 'hover',
      hasChrome: false,
      tooltip: _react2.default.createElement(_components.TooltipNote, { note: tooltip })
    },
    button
  );

  var widgetButton = void 0;

  if (error) {
    widgetButton = button;
  } else {
    widgetButton = buttonWithTooltip;
  }

  return widgetButton;
}

WidgetButton.propTypes = {
  loading: _propTypes2.default.bool,
  error: _propTypes2.default.bool,
  active: _propTypes2.default.bool,
  count: _propTypes2.default.number
};

WidgetButton.defaultProps = {
  loading: false,
  error: false,
  active: false,
  count: null
};

exports.default = WidgetButton;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  transition: all 200ms ease-out;\n  display: inline-block;\n  vertical-align: top;\n  padding: 3px 3px;\n  border-radius: 3em;\n\n  svg {\n    display: block;\n    height: 14px;\n    width: 14px;\n\n    path { fill: ', ' }\n  }\n'], ['\n  transition: all 200ms ease-out;\n  display: inline-block;\n  vertical-align: top;\n  padding: 3px 3px;\n  border-radius: 3em;\n\n  svg {\n    display: block;\n    height: 14px;\n    width: 14px;\n\n    path { fill: ', ' }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: block;\n\tborder: 0;\n  box-shadow: 0 0 5px 0 rgba(0,0,0,0.30);\n  border-radius: 3em;\n  padding: 0;\n\tposition: relative;\n  outline: 0;\n  cursor: pointer;\n  transition: all 150ms ease-out;\n  height: 20px;\n\n  &:focus { outline:0; }\n\n  ', '\n\n  ', ' {\n    background: ', ';\n  }\n\n  ', '\n\n  &:active { transform: translate3d(0,0,0); }\n\n  ', '\n\n'], ['\n  display: block;\n\tborder: 0;\n  box-shadow: 0 0 5px 0 rgba(0,0,0,0.30);\n  border-radius: 3em;\n  padding: 0;\n\tposition: relative;\n  outline: 0;\n  cursor: pointer;\n  transition: all 150ms ease-out;\n  height: 20px;\n\n  &:focus { outline:0; }\n\n  ', '\n\n  ', ' {\n    background: ', ';\n  }\n\n  ', '\n\n  &:active { transform: translate3d(0,0,0); }\n\n  ', '\n\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    cursor: not-allowed !important;\n    box-shadow: 0 0 5px 0 rgba(0,0,0,0.15);\n\n    ', ' {\n      opacity: .5;\n\n      svg > path { fill: ', '; }\n    }\n\t'], ['\n    cursor: not-allowed !important;\n    box-shadow: 0 0 5px 0 rgba(0,0,0,0.15);\n\n    ', ' {\n      opacity: .5;\n\n      svg > path { fill: ', '; }\n    }\n\t']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    &:hover {\n      transform: translate3d(0,-1px,0);\n      box-shadow: 0 0 7px 0 rgba(0,0,0,0.30);\n\n      ', ' {\n        box-shadow: #D9FAF7 0 0 3em 0 inset;\n\n        svg path { fill: ', '; }\n      }\n    }\n  '], ['\n    &:hover {\n      transform: translate3d(0,-1px,0);\n      box-shadow: 0 0 7px 0 rgba(0,0,0,0.30);\n\n      ', ' {\n        box-shadow: #D9FAF7 0 0 3em 0 inset;\n\n        svg path { fill: ', '; }\n      }\n    }\n  ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    cursor: progress;\n\n    ', ' svg { opacity: 0; }\n  '], ['\n    cursor: progress;\n\n    ', ' svg { opacity: 0; }\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = __webpack_require__(21);

var _components = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var color = _components.styles.color;

// prettier-ignore

var LogoWrapper = _styledComponents2.default.span(_templateObject, color.secondary);

// prettier-ignore
var Button = _styledComponents2.default.button(_templateObject2, function (props) {
  return props.testing && (0, _styledComponents.css)(_templateObject3, LogoWrapper, color.mediumdark);
}, LogoWrapper, color.lightest, function (props) {
  return !props.testing && !props.loading && (0, _styledComponents.css)(_templateObject4, LogoWrapper, (0, _polished.darken)(0.05, color.secondary));
}, function (props) {
  return props.loading && (0, _styledComponents.css)(_templateObject5, LogoWrapper);
});

function WidgetButtonTest(_ref) {
  var loading = _ref.loading,
      testing = _ref.testing,
      props = (0, _objectWithoutProperties3.default)(_ref, ['loading', 'testing']);

  var tooltip = 'Starting test';
  if (!loading) {
    if (testing) {
      tooltip = 'Running test';
    } else {
      tooltip = 'Run test';
    }
  }
  return _react2.default.createElement(
    _components.WithTooltip,
    {
      placement: 'top',
      mode: 'hover',
      hasChrome: false,
      tooltip: _react2.default.createElement(_components.TooltipNote, { note: tooltip })
    },
    _react2.default.createElement(
      Button,
      (0, _extends3.default)({ loading: loading, testing: testing, disabled: testing || loading }, props),
      _react2.default.createElement(
        LogoWrapper,
        null,
        loading && _react2.default.createElement(_components.Spinner, { inForm: true }),
        _react2.default.createElement(_components.Icon, { icon: 'play' })
      )
    )
  );
}

WidgetButtonTest.propTypes = {
  loading: _propTypes2.default.bool,
  testing: _propTypes2.default.bool
};

WidgetButtonTest.defaultProps = {
  loading: false,
  testing: false
};

exports.default = WidgetButtonTest;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  margin-top: 8px;\n  text-align: center;\n\n  > * {\n    margin: 0 8px;\n    font-weight: ', ';\n  }\n'], ['\n  margin-top: 8px;\n  text-align: center;\n\n  > * {\n    margin: 0 8px;\n    font-weight: ', ';\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  line-height: 18px;\n  overflow-wrap: break-word;\n  hyphens: auto;\n'], ['\n  color: ', ';\n  line-height: 18px;\n  overflow-wrap: break-word;\n  hyphens: auto;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  margin-top: 8px;\n  margin-left: -15px;\n  margin-right: -15px;\n  position: relative;\n\n  img {\n    width: 100%;\n    display: block;\n    height: auto;\n  }\n\n  span {\n    display: inline-block;\n    position: absolute;\n    font-size: 10px;\n    line-height: 24px;\n    bottom: -24px;\n    right: 10px;\n    color: ', ';\n  }\n\n'], ['\n  margin-top: 8px;\n  margin-left: -15px;\n  margin-right: -15px;\n  position: relative;\n\n  img {\n    width: 100%;\n    display: block;\n    height: auto;\n  }\n\n  span {\n    display: inline-block;\n    position: absolute;\n    font-size: 10px;\n    line-height: 24px;\n    bottom: -24px;\n    right: 10px;\n    color: ', ';\n  }\n\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  display: block;\n  text-align: center;\n  line-height: 0;\n  margin-bottom: -5px;\n'], ['\n  display: block;\n  text-align: center;\n  line-height: 0;\n  margin-bottom: -5px;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: ', ';\n  position: absolute;\n  right: 0;\n  top: 0;\n  line-height: 30px;\n'], ['\n  font-weight: ', ';\n  position: absolute;\n  right: 0;\n  top: 0;\n  line-height: 30px;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  float: left;\n  margin-top: 4px;\n  margin-right: 10px;\n'], ['\n  float: left;\n  margin-top: 4px;\n  margin-right: 10px;\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  overflow: visible;\n'], ['\n  position: relative;\n  overflow: visible;\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n  overflow: hidden;\n'], ['\n  overflow: hidden;\n']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: ', ';\n'], ['\n  font-weight: ', ';\n']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 10px;\n'], ['\n  font-size: 10px;\n']),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(['\n  background-image: linear-gradient(-1deg, rgba(248,248,248,0.97) 0%, rgba(247,252,255,0.97) 100%);\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.10);\n  border-radius: 4px;\n  font-size: ', 'px;\n  padding: 15px;\n  width: 280px;\n  box-sizing: border-box;\n\n  ', ' + ', ' { margin-left: 4px; }\n  ', ' + ', ' {\n    margin-top: 8px;\n  }\n  ', ' + ', ' {\n    margin-top: 12px;\n  }\n  ', ' + ', ' {\n    margin-top: 10px;\n  }\n\n  code {\n    font-size: ', 'px;\n  }\n'], ['\n  background-image: linear-gradient(-1deg, rgba(248,248,248,0.97) 0%, rgba(247,252,255,0.97) 100%);\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.10);\n  border-radius: 4px;\n  font-size: ', 'px;\n  padding: 15px;\n  width: 280px;\n  box-sizing: border-box;\n\n  ', ' + ', ' { margin-left: 4px; }\n  ', ' + ', ' {\n    margin-top: 8px;\n  }\n  ', ' + ', ' {\n    margin-top: 12px;\n  }\n  ', ' + ', ' {\n    margin-top: 10px;\n  }\n\n  code {\n    font-size: ', 'px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var color = _components.styles.color,
    typography = _components.styles.typography;
var formatBuildBadge = _components.formatting.formatBuildBadge,
    formatBuildStatus = _components.formatting.formatBuildStatus;

// prettier-ignore

var Title = _styledComponents2.default.b(_templateObject);
var Desc = _styledComponents2.default.span(_templateObject);

// prettier-ignore
var Links = _styledComponents2.default.div(_templateObject2, typography.weight.extrabold);

// prettier-ignore
var Message = _styledComponents2.default.div(_templateObject3, color.darker);

// prettier-ignore
var Figure = _styledComponents2.default.div(_templateObject4, color.mediumdark);

// prettier-ignore
var Progress = (0, _styledComponents2.default)(_components.ProgressDots)(_templateObject5);

// prettier-ignore
var BuildLink = (0, _styledComponents2.default)(_components.Link)(_templateObject6, typography.weight.extrabold);

// prettier-ignore
var BuildStatus = (0, _styledComponents2.default)(_components.StatusLight)(_templateObject7);

// prettier-ignore
var Build = _styledComponents2.default.div(_templateObject8);

// prettier-ignore
var Meta = _styledComponents2.default.div(_templateObject9);

// prettier-ignore
var Name = _styledComponents2.default.div(_templateObject10, typography.weight.extrabold);

// prettier-ignore
var Details = _styledComponents2.default.div(_templateObject11);

// prettier-ignore
var NotificationWrapper = _styledComponents2.default.div(_templateObject12, typography.size.s1, Title, Desc, Links, Progress, Message, Progress, Figure, Progress, typography.size.s1 - 1);

function WidgetNotification(_ref) {
  var title = _ref.title,
      desc = _ref.desc,
      links = _ref.links,
      progress = _ref.progress,
      figure = _ref.figure,
      status = _ref.status,
      build = _ref.build,
      props = (0, _objectWithoutProperties3.default)(_ref, ['title', 'desc', 'links', 'progress', 'figure', 'status', 'build']);

  return _react2.default.createElement(
    NotificationWrapper,
    props,
    (title || desc) && _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        Message,
        null,
        _react2.default.createElement(
          Title,
          null,
          title
        ),
        _react2.default.createElement(
          Desc,
          null,
          desc
        )
      ),
      links && _react2.default.createElement(
        Links,
        null,
        links.map(function (_ref2) {
          var linkTitle = _ref2.title,
              other = (0, _objectWithoutProperties3.default)(_ref2, ['title']);
          return _react2.default.createElement(
            _components.Link,
            (0, _extends3.default)({}, other, { key: linkTitle }),
            linkTitle
          );
        })
      ),
      figure && _react2.default.createElement(
        Figure,
        null,
        _react2.default.createElement('img', { alt: '', src: figure }),
        _react2.default.createElement(
          'span',
          null,
          'Try it to continue'
        )
      ),
      progress.length !== 0 && _react2.default.createElement(Progress, { progress: progress[0], steps: progress[1] })
    ),
    build && _react2.default.createElement(
      Build,
      null,
      _react2.default.createElement(BuildStatus, {
        size: 'small',
        status: formatBuildBadge(build.status),
        title: formatBuildStatus(build.status)
      }),
      _react2.default.createElement(
        Meta,
        null,
        _react2.default.createElement(
          Name,
          null,
          'Build ',
          build.number
        ),
        _react2.default.createElement(
          Details,
          null,
          build.specCount,
          ' specs - ',
          build.componentCount,
          ' components'
        )
      ),
      _react2.default.createElement(
        BuildLink,
        { href: build.webUrl, target: '_blank' },
        'View'
      )
    )
  );
}

WidgetNotification.propTypes = {
  title: _propTypes2.default.string,
  desc: _propTypes2.default.node,
  links: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string.isRequired
  })),
  progress: _propTypes2.default.arrayOf(_propTypes2.default.number),
  figure: _propTypes2.default.string,
  status: _propTypes2.default.string,
  build: _propTypes2.default.shape({
    number: _propTypes2.default.number.isRequired,
    status: _propTypes2.default.string.isRequired,
    componentCount: _propTypes2.default.number.isRequired,
    specCount: _propTypes2.default.number.isRequired,
    webUrl: _propTypes2.default.string.isRequired
  })
};

WidgetNotification.defaultProps = {
  title: null,
  desc: null,
  links: null,
  progress: [],
  figure: null,
  status: null,
  build: null
};

exports.default = WidgetNotification;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  .', ' {\n    outline-width: 1px;\n    outline-color: ', ';\n    outline-style: dashed;\n    transition: all 200ms ease-out;\n\n    &.', ' {\n      cursor: pointer;\n    }\n\n    &.', ' {\n      outline-color: ', ';\n    }\n\n    &.', ' {\n      outline-color: ', ';\n    }\n  }\n'], ['\n  .', ' {\n    outline-width: 1px;\n    outline-color: ', ';\n    outline-style: dashed;\n    transition: all 200ms ease-out;\n\n    &.', ' {\n      cursor: pointer;\n    }\n\n    &.', ' {\n      outline-color: ', ';\n    }\n\n    &.', ' {\n      outline-color: ', ';\n    }\n  }\n']); /* eslint-env browser */
/* eslint-disable no-underscore-dangle */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _reactPopper = __webpack_require__(58);

var _components = __webpack_require__(16);

var _ScannerButtons = __webpack_require__(99);

var _ScannerButtons2 = _interopRequireDefault(_ScannerButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var color = _components.styles.color;


var CHROMATIC_SPEC_CLASSNAME = '__chromatic_spec__';
var UNSAVED_CLASSNAME = '__chromatic_unsaved__';
var CURRENTSAVED_CLASSNAME = '__chromatic_saved__';
var UNSAVEABLE_CLASSNAME = '__chromatic_unsaveable__';
var HOVER_CLASSNAME = '__chromatic_hover__';

// eslint-disable-next-line no-unused-expressions
(0, _styledComponents.injectGlobal)(_templateObject, CHROMATIC_SPEC_CLASSNAME, color.secondary, HOVER_CLASSNAME, CURRENTSAVED_CLASSNAME, color.primary, UNSAVEABLE_CLASSNAME, color.medium);

function highlightSpecs(specs) {
  specs.forEach(function (spec) {
    var domElement = spec.domElement;

    domElement.classList.add(CHROMATIC_SPEC_CLASSNAME);
    if (spec.status === 'unsaveable') {
      domElement.classList.add(UNSAVEABLE_CLASSNAME);
    } else if (spec.component.specCount === 0) {
      domElement.classList.add(UNSAVED_CLASSNAME);
    } else if (spec.status === 'saved') {
      domElement.classList.add(CURRENTSAVED_CLASSNAME);
    }
    domElement.__chromatic_spec__ = spec;
  });
}

function unhighlightSpecs(specs) {
  specs.forEach(function (spec) {
    spec.domElement.classList.remove(CHROMATIC_SPEC_CLASSNAME);
    spec.domElement.classList.remove(UNSAVED_CLASSNAME);
    spec.domElement.classList.remove(HOVER_CLASSNAME);
  });
}

function hoverElement(element) {
  // Would it be faster to iterate our spec list? This works though
  document.querySelectorAll('.' + HOVER_CLASSNAME).forEach(function (e) {
    return e.classList.remove(HOVER_CLASSNAME);
  });

  if (element) {
    element.classList.add(HOVER_CLASSNAME);
  }
}

function firstAncestorWithSpec(element) {
  if (!element || !element.classList) {
    return null;
  }

  if (element.classList.contains(CHROMATIC_SPEC_CLASSNAME)) {
    return element;
  }

  return firstAncestorWithSpec(element.parentNode);
}

var WidgetScanner = function (_Component) {
  (0, _inherits3.default)(WidgetScanner, _Component);

  function WidgetScanner() {
    (0, _classCallCheck3.default)(this, WidgetScanner);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WidgetScanner.__proto__ || (0, _getPrototypeOf2.default)(WidgetScanner)).call(this));

    _this.state = { activeSpec: null };
    _this.onShow = _this.onShow.bind(_this);
    _this.onHide = _this.onHide.bind(_this);
    _this.onElementMouseOver = _this.onElementMouseOver.bind(_this);
    _this.onElementMouseOut = _this.onElementMouseOut.bind(_this);
    _this.onElementClick = _this.onElementClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(WidgetScanner, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      highlightSpecs(this.props.specs);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // attach "live" handlers to the body
      document.body.addEventListener('mouseover', this.onElementMouseOver, false);
      document.body.addEventListener('mouseout', this.onElementMouseOut, false);
      document.body.addEventListener('click', this.onElementClick, false);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      unhighlightSpecs(this.props.specs);
      highlightSpecs(props.specs);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('mouseover', this.onElementMouseOver);
      document.body.removeEventListener('mouseout', this.onElementMouseOut);
      document.body.removeEventListener('click', this.onElementClick);

      clearTimeout(this.timeout);
      unhighlightSpecs(this.props.specs);
    }
  }, {
    key: 'onElementClick',
    value: function onElementClick(_ref) {
      var target = _ref.target;

      var element = firstAncestorWithSpec(target);
      if (element) {
        var _element$__chromatic_ = element.__chromatic_spec__,
            name = _element$__chromatic_.component.name,
            internalId = _element$__chromatic_.internalId,
            status = _element$__chromatic_.status;

        if (status !== 'unsaveable') {
          this.props.onShowComponentSpecs(name, internalId);
        }
      }
    }
  }, {
    key: 'onElementMouseOver',
    value: function onElementMouseOver(_ref2) {
      var target = _ref2.target;

      var element = firstAncestorWithSpec(target);
      if (element) {
        this.onShow(element.__chromatic_spec__);
      }
    }
  }, {
    key: 'onElementMouseOut',
    value: function onElementMouseOut(_ref3) {
      var target = _ref3.target;

      var element = firstAncestorWithSpec(target);
      if (element) {
        this.onHide();
      }
    }
  }, {
    key: 'onShow',
    value: function onShow(activeSpec) {
      clearTimeout(this.timeout);
      this.setState({ activeSpec: activeSpec });
    }
  }, {
    key: 'onHide',
    value: function onHide() {
      var _this2 = this;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        return _this2.setState({ activeSpec: null });
      }, 300);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          _onCreateSpec = _props.onCreateSpec,
          onShowComponentSpecs = _props.onShowComponentSpecs;
      var activeSpec = this.state.activeSpec;

      hoverElement(activeSpec && activeSpec.domElement);

      if (activeSpec) {
        return (
          // NOTE: key is cruical here, it forces a re-render if the spec changes
          _react2.default.createElement(
            _reactPopper.Manager,
            { key: activeSpec.internalId },
            _react2.default.createElement(
              _reactPopper.Target,
              null,
              function (_ref4) {
                var ref = _ref4.targetProps.ref;
                return ref(activeSpec.domElement) || _react2.default.createElement('div', null);
              }
            ),
            _react2.default.createElement(
              _reactPopper.Popper,
              { placement: 'top-start', style: { position: 'absolute', zIndex: 2147483647 } },
              _react2.default.createElement(_ScannerButtons2.default, {
                spec: activeSpec,
                onMouseOver: function onMouseOver() {
                  return _this3.onShow(activeSpec);
                },
                onMouseOut: this.onHide,
                onCreateSpec: function onCreateSpec() {
                  return _onCreateSpec(activeSpec);
                },
                onShowComponentSpecs: onShowComponentSpecs
              })
            )
          )
        );
      }
      return null;
    }
  }]);
  return WidgetScanner;
}(_react.Component);

exports.default = WidgetScanner;


WidgetScanner.propTypes = {
  specs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    domElement: _propTypes2.default.instanceOf(typeof Element !== 'undefined' ? Element : Object).isRequired
  })).isRequired,
  onCreateSpec: _propTypes2.default.func.isRequired,
  onShowComponentSpecs: _propTypes2.default.func.isRequired
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background-image: radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%,rgba(0,0,0,0) 70%);\n  width: 25%;\n  height: 0;\n  padding-bottom: 25%;\n  transform: translate3d(-50%, 50%, 0);\n\n'], ['\n  background-image: radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%,rgba(0,0,0,0) 70%);\n  width: 25%;\n  height: 0;\n  padding-bottom: 25%;\n  transform: translate3d(-50%, 50%, 0);\n\n']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prettier-ignore
var WidgetShade = _styledComponents2.default.div(_templateObject);

exports.default = WidgetShade;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(13);

var _keys2 = _interopRequireDefault(_keys);

var _devtools = __webpack_require__(37);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(27);

var _mobx = __webpack_require__(18);

__webpack_require__(63);

var _specs = __webpack_require__(64);

var _specs2 = _interopRequireDefault(_specs);

var _App = __webpack_require__(60);

var _App2 = _interopRequireDefault(_App);

var _isolator = __webpack_require__(62);

var _isolator2 = _interopRequireDefault(_isolator);

var _components = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _process$env$CHROMATI = process.env.CHROMATIC_INDEX_URL,
    CHROMATIC_INDEX_URL = _process$env$CHROMATI === undefined ? 'https://www.chromaticqa.com' : _process$env$CHROMATI; /* eslint-env browser */
/* eslint-disable no-console,import/first */

function drawWidget(_ref) {
  var indexUrl = _ref.indexUrl,
      appCode = _ref.appCode,
      isolatorOptions = _ref.isolatorOptions,
      specs = _ref.specs;

  var div = document.createElement('div');
  div.id = 'chromatic-root';
  document.body.appendChild(div);

  (0, _mobx.reaction)(function () {
    return {
      hasDetectedReact: _devtools.detectedReact.get(),
      simpleSpecs: specs.slice()
    };
  }, function (_ref2) {
    var hasDetectedReact = _ref2.hasDetectedReact,
        simpleSpecs = _ref2.simpleSpecs;

    (0, _reactDom.render)(_react2.default.createElement(_App2.default, {
      indexUrl: indexUrl,
      appCode: appCode,
      isolatorOptions: isolatorOptions,
      detectedReact: hasDetectedReact,
      specs: simpleSpecs
    }), div);
  }, { delay: 200 });
}

var options = void 0;
function configure(userOptions) {
  if (options) {
    throw new Error('Chromatic already configured');
  }
  options = userOptions;

  var _options = options,
      appCode = _options.appCode,
      _options$indexUrl = _options.indexUrl,
      indexUrl = _options$indexUrl === undefined ? CHROMATIC_INDEX_URL : _options$indexUrl,
      components = _options.components,
      componentContext = _options.componentContext,
      _options$noWidget = _options.noWidget,
      noWidget = _options$noWidget === undefined ? false : _options$noWidget,
      _options$runtimes = _options.runtimes,
      runtimes = _options$runtimes === undefined ? [] : _options$runtimes,
      _options$noTunnel = _options.noTunnel,
      noTunnel = _options$noTunnel === undefined ? false : _options$noTunnel,
      _options$port = _options.port,
      port = _options$port === undefined ? 3004 : _options$port,
      _options$log = _options.log,
      log = _options$log === undefined ? 'debug' : _options$log;

  // TODO -- deal with other formats of component input

  var componentMap = void 0;
  if (componentContext) {
    componentMap = (0, _components.requireContextToComponentMap)(componentContext);
  } else if (components) {
    componentMap = (0, _components.arrayToComponentMap)(components);
  } else if (!noWidget) {
    throw new Error('You need to provide either a `componentContext` or a list of `components`');
  }

  // If we are rendered in an iframe, (by ourself), then we need to clear
  // the screen right away, rather than waiting for a spec
  var isIsolator = window.frameElement && window.frameElement.dataset.chromaticIsolator;
  (0, _isolator2.default)({
    components: componentMap,
    runtimes: runtimes,
    clearScreen: isIsolator
  });

  if (!isIsolator && !noWidget) {
    var componentNames = (0, _keys2.default)(componentMap);
    console.log('Found components: ' + componentNames.join(', '));

    var specs = (0, _specs2.default)({
      componentNames: componentNames,
      log: log
    });

    drawWidget({
      appCode: appCode,
      indexUrl: indexUrl,
      isolatorOptions: { noTunnel: noTunnel, port: port },
      specs: specs
    });
  }
}

exports.default = configure;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-image: linear-gradient(\n    -1deg,\n    rgba(248, 248, 248, 0.96) 0%,\n    rgba(247, 252, 255, 0.96) 100%\n  );\n  z-index: 2147483647;\n'], ['\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-image: linear-gradient(\n    -1deg,\n    rgba(248, 248, 248, 0.96) 0%,\n    rgba(247, 252, 255, 0.96) 100%\n  );\n  z-index: 2147483647;\n']); // I'm not sure if this component has any chrome or is just responsible for
// positioning itself 100%x100% on the screen, and maybe setting bg color

exports.default = OverlayLayout;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overlay = _styledComponents2.default.div(_templateObject);

function OverlayLayout(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    Overlay,
    null,
    children
  );
}

OverlayLayout.propTypes = {
  children: _propTypes2.default.node.isRequired
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(53);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// There's no way to set up the agent by itself from devtools,
// (aside from copying a bunch of code around).
//
// `connectToDevTools` expects to speak to a WebSocket (for the UI).
// We could:
//   1. Do this hack of mocking out a single WebSocket instance
//   2. Do what the "standalone" version of the UI does, start a WS server
//
// XXX: We should ensure that we don't break the real devtools by *not* doing
// any of this if the devtools is already connected (and just getting it's agent)

var MockWebSocket = function () {
  function MockWebSocket() {
    var _this = this;

    (0, _classCallCheck3.default)(this, MockWebSocket);

    setTimeout(function () {
      _this.onopen();
      // The backend is waiting for this message
      _this.onmessage({
        data: (0, _stringify2.default)({
          type: 'many-events',
          events: [{ type: 'event', evt: 'requestCapabilities', cleaned: [] }]
        })
      });
    }, 0);
  }
  // We aren't actually listening
  // eslint-disable-next-line class-methods-use-this


  (0, _createClass3.default)(MockWebSocket, [{
    key: 'send',
    value: function send() {}
  }]);
  return MockWebSocket;
}();

exports.default = MockWebSocket;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nodeToInput;

var _dom = __webpack_require__(109);

var _errors = __webpack_require__(49);

var _normalize = __webpack_require__(95);

var _normalize2 = _interopRequireDefault(_normalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Normalize a node as passed to us from the agent
//
// We are going to pick out the properties that we want to save to our database
// and we require to "put this spec back together".
//
// A devtools node is sort of a weird perversion of an element. We'll try to
// make it look more like an element again for consistency (it may have elements
// inside its children somewhere after all)
function normalizeCompositeNode(_ref) {
  var name = _ref.name,
      props = _ref.props,
      state = _ref.state,
      context = _ref.context;

  return (0, _normalize2.default)({ name: name, props: props, state: state, context: context });
}

// Get pertinant details of containing tags to reproduce applied styles
// Node is a DOM node, returns an array of { name, className, id }
// XXX: do we need other attributes? I guess in theory we need any attribute
// but let's see how this goes
function getAncestorSpecs(_ref2) {
  var tagName = _ref2.tagName,
      parentNode = _ref2.parentNode,
      id = _ref2.id,
      className = _ref2.className;

  // Stop when we get to the body tag
  if (tagName.toUpperCase() === 'BODY') {
    return [];
  }

  // This node is detached from the body, or somehow a child of the head
  // or something. We can ignore it. Maybe we should log this.
  if (!parentNode) {
    throw new _errors.UnattachedNodeError();
  }

  var classNameWithoutChromatic = className && typeof className === 'string' ? className.replace(/__chromatic_[^\s]*__/g, '') : className;

  var spec = {
    name: tagName,
    id: id,
    // It's possible we may detect classes we've added from WidgetScanner.
    // We don't want to save these.
    className: classNameWithoutChromatic
  };

  return getAncestorSpecs(parentNode).concat(spec);
}

// Take a node, as reported by the devtools agent, convert to input
function nodeToInput(_ref3) {
  var node = _ref3.node,
      element = _ref3.element;
  var nodeType = node.nodeType;

  // We only care about specs for composite nodes (i.e. named components)

  if (nodeType !== 'Composite' || !element) {
    return false;
  }

  var ancestors = getAncestorSpecs(element).slice(0, -1);

  // Double check the node isn't part of our UI!
  if (ancestors.find(function (spec) {
    return spec.id === 'chromatic-root';
  })) {
    return false;
  }
  var dimensions = (0, _dom.getDimensions)(element);

  var normalizedElement = normalizeCompositeNode(node);

  return {
    element: normalizedElement,
    ancestors: ancestors,
    dimensions: dimensions
  };
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDimensions = getDimensions;
exports.getPosition = getPosition;
/* eslint-env browser */

// element is a DOM Element type
function getDimensions(element) {
  var _ref = element.currentStyle || window.getComputedStyle(element),
      marginLeft = _ref.marginLeft,
      marginRight = _ref.marginRight,
      marginTop = _ref.marginTop,
      marginBottom = _ref.marginBottom;

  var _element$getBoundingC = element.getBoundingClientRect(),
      width = _element$getBoundingC.width,
      height = _element$getBoundingC.height;

  return {
    width: width + parseInt(marginLeft, 10) + parseInt(marginRight, 10),
    height: height + parseInt(marginTop, 10) + parseInt(marginBottom, 10)
  };
}

// NOTE: offsetLeft etal. don't work for SVG, see above
function getPosition(element) {
  var parentOffset = element.offsetParent ? getPosition(element.offsetParent) : { left: 0, top: 0 };
  return {
    left: element.offsetLeft + parentOffset.left,
    top: element.offsetTop + parentOffset.top
  };
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(13);

var _keys2 = _interopRequireDefault(_keys);

exports.default = renderSpec;

var _render = __webpack_require__(31);

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeNameToComponent(components) {
  return function nameToComponent(name) {
    var isHtmlTag = name.indexOf('(') === -1 && name[0] === name[0].toLowerCase();

    if (isHtmlTag) {
      return name;
    }

    var component = components[name];
    if (!component) {
      throw new Error('Didn\'t find component named "' + name + '".\n\n  Our components are: ' + (0, _keys2.default)(components).join(', '));
    }
    return component;
  };
}

function mapProps(name, value) {
  if (value && value.typeName && value.typeName() === 'ChromaticCallback') {
    var error = 'This callback \'' + value.name + '\' was not intended to be called during rendering.\n\nRead more about callback detection in Chromatic here: http://docs.chromaticqa.com/specs#spec-uses-callbacks';
    // eslint-disable-next-line no-new-func
    return new Function('throw new Error(`' + error + '`)');
  }
  return value;
}

function renderSpec(_ref, components) {
  var input = _ref.input;

  return (0, _render2.default)({ input: input }, {
    nameToComponent: makeNameToComponent(components),
    mapProps: mapProps
  });
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = __webpack_require__(54);

var _values2 = _interopRequireDefault(_values);

var _regenerator = __webpack_require__(36);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(34);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    query AgentSpecsPageQuery($componentName: String!) {\n      app {\n        id\n        component(name: $componentName) {\n          id\n          webUrl\n          name\n          specs(runtime: "") {\n            id\n            name\n            number\n            input\n            runtime\n          }\n        }\n      }\n    }\n  '], ['\n    query AgentSpecsPageQuery($componentName: String!) {\n      app {\n        id\n        component(name: $componentName) {\n          id\n          webUrl\n          name\n          specs(runtime: "") {\n            id\n            name\n            number\n            input\n            runtime\n          }\n        }\n      }\n    }\n  ']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    mutation WidgetUpdateSpec($id: ObjID!, $input: UpdateSpecInput!) {\n      updateSpec(id: $id, input: $input) {\n        id\n        name\n        input\n      }\n    }\n  '], ['\n    mutation WidgetUpdateSpec($id: ObjID!, $input: UpdateSpecInput!) {\n      updateSpec(id: $id, input: $input) {\n        id\n        name\n        input\n      }\n    }\n  ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    mutation WidgetRemoveSpec($id: ObjID!) {\n      removeSpec(id: $id)\n    }\n  '], ['\n    mutation WidgetRemoveSpec($id: ObjID!) {\n      removeSpec(id: $id)\n    }\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(26);

var _graphqlTag = __webpack_require__(25);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _recompose = __webpack_require__(17);

var _serialize = __webpack_require__(19);

var _Spec = __webpack_require__(23);

var _Spec2 = _interopRequireDefault(_Spec);

var _SpecsScreen = __webpack_require__(113);

var _SpecsScreen2 = _interopRequireDefault(_SpecsScreen);

var _withOnCreateSpec = __webpack_require__(50);

var _withOnCreateSpec2 = _interopRequireDefault(_withOnCreateSpec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withSavedSpecs = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject), {
  options: function options(_ref) {
    var componentName = _ref.componentName;
    return {
      variables: {
        componentName: componentName
      }
    };
  }
});

var withOnUpdateOrCreateSpec = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject2), {
  props: function props(_ref2) {
    var mutate = _ref2.mutate,
        onCreateSpec = _ref2.ownProps.onCreateSpec;
    return {
      onUpdateOrCreateSpec: function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(spec) {
          var id, name, input, _ref4, error;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(spec.status === 'unsaved')) {
                    _context.next = 3;
                    break;
                  }

                  onCreateSpec(spec);
                  return _context.abrupt('return');

                case 3:

                  // eslint-disable-next-line no-param-reassign
                  spec.status = 'saving';

                  id = spec.id, name = spec.name, input = spec.input;
                  _context.next = 7;
                  return mutate({
                    variables: {
                      id: id,
                      input: {
                        name: name,
                        input: (0, _serialize.stringify)(input)
                      }
                    }
                  });

                case 7:
                  _ref4 = _context.sent;
                  error = _ref4.error;

                  if (!error) {
                    _context.next = 11;
                    break;
                  }

                  throw error;

                case 11:

                  // eslint-disable-next-line no-param-reassign
                  spec.status = 'saved';

                case 12:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, undefined);
        }));

        function onUpdateOrCreateSpec(_x) {
          return _ref3.apply(this, arguments);
        }

        return onUpdateOrCreateSpec;
      }()
    };
  }
});

var withOnRemoveSpec = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject3), {
  props: function props(_ref5) {
    var mutate = _ref5.mutate;
    return {
      onRemoveSpec: function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(spec) {
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return mutate({ variables: { id: spec.id } });

                case 2:
                  // eslint-disable-next-line no-param-reassign
                  spec.id = null;
                  // eslint-disable-next-line no-param-reassign
                  spec.status = 'unsaved';

                case 4:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, undefined);
        }));

        function onRemoveSpec(_x2) {
          return _ref6.apply(this, arguments);
        }

        return onRemoveSpec;
      }()
    };
  }
});

function SpecsPage(_ref7) {
  var _ref7$data = _ref7.data,
      loading = _ref7$data.loading,
      app = _ref7$data.app,
      componentName = _ref7.componentName,
      specInternalId = _ref7.specInternalId,
      detectedSpecs = _ref7.detectedSpecs,
      isolatorOptions = _ref7.isolatorOptions,
      onUpdateOrCreateSpec = _ref7.onUpdateOrCreateSpec,
      onRemoveSpec = _ref7.onRemoveSpec,
      onHideComponentSpecs = _ref7.onHideComponentSpecs;

  if (loading) {
    return _react2.default.createElement(_SpecsScreen2.default, {
      loading: true,
      componentName: componentName,
      specInternalId: specInternalId,
      isolatorOptions: isolatorOptions,
      onUpdateOrCreateSpec: onUpdateOrCreateSpec,
      onRemoveSpec: onRemoveSpec,
      onHideComponentSpecs: onHideComponentSpecs
    });
  }

  var savedComponent = app.component;

  // We only want to save a single spec per key

  var keyToUniqueSpecs = {};

  var webUrl = void 0;
  // We have saved specs for this component
  if (savedComponent) {
    webUrl = savedComponent.webUrl;
    // First map over the saved specs;
    savedComponent.specs.forEach(function (gqlSpec) {
      if (gqlSpec.runtime) {
        return;
      }
      var spec = new _Spec2.default(gqlSpec);
      keyToUniqueSpecs[spec.key] = spec;
    });
  }

  // OK, now for the unsaved specs we need to be a bit careful
  detectedSpecs.forEach(function (spec) {
    if (spec.component.name === componentName && !keyToUniqueSpecs[spec.key]) {
      if (spec.status !== 'unsaveable') {
        keyToUniqueSpecs[spec.key] = spec;
      }
    }
  });

  var component = {
    name: componentName,
    webUrl: webUrl,
    specs: (0, _values2.default)(keyToUniqueSpecs)
  };

  return _react2.default.createElement(_SpecsScreen2.default, {
    component: component,
    specInternalId: specInternalId,
    isolatorOptions: isolatorOptions,
    onUpdateOrCreateSpec: onUpdateOrCreateSpec,
    onRemoveSpec: onRemoveSpec,
    onHideComponentSpecs: onHideComponentSpecs
  });
}

SpecsPage.propTypes = {
  componentName: _propTypes2.default.string.isRequired,
  specInternalId: _propTypes2.default.string.isRequired,
  detectedSpecs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    key: _propTypes2.default.string.isRequired,
    status: _propTypes2.default.oneOf(['saving', 'unsaved', 'saved', 'unsaveable']).isRequired,
    component: _propTypes2.default.shape({
      name: _propTypes2.default.string.isRequired
    }).isRequired
  })).isRequired,
  data: _propTypes2.default.shape({
    loading: _propTypes2.default.bool,
    app: _propTypes2.default.shape({
      component: _propTypes2.default.shape({
        webUrl: _propTypes2.default.string.isRequired,
        specs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
          runtime: _propTypes2.default.string,
          input: _propTypes2.default.string.isRequired
        }).isRequired).isRequired
      })
    })
  }).isRequired,
  isolatorOptions: _propTypes2.default.shape({}).isRequired,
  onUpdateOrCreateSpec: _propTypes2.default.func.isRequired,
  onRemoveSpec: _propTypes2.default.func.isRequired,
  onHideComponentSpecs: _propTypes2.default.func.isRequired
};

exports.default = (0, _recompose.compose)(withSavedSpecs, _withOnCreateSpec2.default, withOnUpdateOrCreateSpec, withOnRemoveSpec)(SpecsPage);

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    query AgentWidgetPageQuery {\n      app {\n        id\n        code\n        components {\n          id\n          name\n          specCount(runtime: "")\n          specs(runtime: "") {\n            id\n            input\n          }\n        }\n      }\n    }\n  '], ['\n    query AgentWidgetPageQuery {\n      app {\n        id\n        code\n        components {\n          id\n          name\n          specCount(runtime: "")\n          specs(runtime: "") {\n            id\n            input\n          }\n        }\n      }\n    }\n  ']); /* eslint-env browser */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(26);

var _graphqlTag = __webpack_require__(25);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _recompose = __webpack_require__(17);

var _WidgetScreen = __webpack_require__(51);

var _WidgetScreen2 = _interopRequireDefault(_WidgetScreen);

var _withOnCreateSpec = __webpack_require__(50);

var _withOnCreateSpec2 = _interopRequireDefault(_withOnCreateSpec);

var _Spec = __webpack_require__(23);

var _Spec2 = _interopRequireDefault(_Spec);

var _ErrorSpec = __webpack_require__(48);

var _ErrorSpec2 = _interopRequireDefault(_ErrorSpec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withActiveError = (0, _recompose.withState)('activeError', 'onSetActiveError', null);

var withSavedSpecs = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject), {
  options: function options() {
    return {
      pollInterval: 2000
    };
  }
});

function WidgetPage(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      app = _ref$data.app,
      detectedReact = _ref.detectedReact,
      detectedSpecs = _ref.detectedSpecs,
      active = _ref.active,
      activeError = _ref.activeError,
      criticalError = _ref.criticalError,
      onCreateSpec = _ref.onCreateSpec,
      onShowComponentSpecs = _ref.onShowComponentSpecs,
      onActivate = _ref.onActivate;

  if (loading) {
    return _react2.default.createElement(_WidgetScreen2.default, {
      loading: true,
      detectedReact: detectedReact,
      detectedSpecs: detectedSpecs,
      active: active,
      onShowComponentSpecs: onShowComponentSpecs,
      onActivate: onActivate
    });
  }
  var components = app.components;


  var savedSpecsByKey = {};
  components.forEach(function (component) {
    component.specs.forEach(function (spec) {
      savedSpecsByKey[(0, _Spec.hashSpecInput)(spec.input)] = spec;
    });
  });

  // We want to coalsce saved specs into our detectedSpecs
  // -- ie. figure out which of our detectedSpecs have been saved
  var detectedAndSavedSpecs = detectedSpecs.map(function (spec) {
    // Ensure we have the component count correct
    var component = components.find(function (c) {
      return c.name === spec.component.name;
    }) || (0, _extends3.default)({}, spec.component, {
      specCount: 0,
      specs: []
    });

    if (spec.error) {
      return new _ErrorSpec2.default((0, _extends3.default)({}, spec, {
        component: component
      }));
    }

    // is there a saved spec with this same key?
    var savedSpec = savedSpecsByKey[spec.key];

    return new _Spec2.default((0, _extends3.default)({}, spec, savedSpec, {
      component: component
    }));
  });

  var port = document.location.port;
  var code = app.code;

  var testCommand = './node_modules/.bin/chromatic test -- --app-code=' + code + ' --script-name=none --port ' + port;

  return _react2.default.createElement(_WidgetScreen2.default, {
    appId: app.id,
    componentCount: components.length,
    detectedReact: detectedReact,
    detectedSpecs: detectedAndSavedSpecs,
    active: active,
    testCommand: testCommand,
    activeError: activeError,
    criticalError: criticalError,
    onCreateSpec: onCreateSpec,
    onShowComponentSpecs: onShowComponentSpecs,
    onActivate: onActivate
  });
}

WidgetPage.propTypes = {
  data: _propTypes2.default.shape({
    loading: _propTypes2.default.bool,
    app: _propTypes2.default.shape({
      components: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        name: _propTypes2.default.string.isRequired
      })).isRequired
    }),
    build: _propTypes2.default.shape({
      id: _propTypes2.default.string.isRequired,
      status: _propTypes2.default.string.isRequired
    })
  }).isRequired,
  active: _propTypes2.default.bool.isRequired,
  detectedReact: _propTypes2.default.bool.isRequired,
  detectedSpecs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    component: _propTypes2.default.shape({
      name: _propTypes2.default.string.isRequired
    }).isRequired
  })).isRequired,
  onCreateSpec: _propTypes2.default.func.isRequired,
  onShowComponentSpecs: _propTypes2.default.func.isRequired,
  onActivate: _propTypes2.default.func.isRequired,
  activeError: _propTypes2.default.oneOf(['no-isolator-connection', null]),
  criticalError: _propTypes2.default.oneOf(['no-app-code', 'bad-app-code', null])
};

WidgetPage.defaultProps = {
  activeError: null,
  criticalError: null
};

exports.default = (0, _recompose.compose)(withActiveError, withSavedSpecs, _withOnCreateSpec2.default)(WidgetPage);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  border-bottom: 1px solid ', ';\n  display: flex;\n  position: relative;\n\n  ', ' {\n    flex: 0 0 auto;\n    width: 25%;\n    padding: 30px 20px 20px;\n  }\n\n  ', ' {\n    flex: 1 1 auto;\n    position: relative;\n  }\n\n  ', ', ', ' {\n    height: calc(100vh - 1px);\n  }\n\n  ', ' {\n    left: 0;\n    right: 10px;\n    top: 10px;\n    bottom: 10px;\n    position: absolute;\n    display: flex;\n  }\n'], ['\n  border-bottom: 1px solid ', ';\n  display: flex;\n  position: relative;\n\n  ', ' {\n    flex: 0 0 auto;\n    width: 25%;\n    padding: 30px 20px 20px;\n  }\n\n  ', ' {\n    flex: 1 1 auto;\n    position: relative;\n  }\n\n  ', ', ', ' {\n    height: calc(100vh - 1px);\n  }\n\n  ', ' {\n    left: 0;\n    right: 10px;\n    top: 10px;\n    bottom: 10px;\n    position: absolute;\n    display: flex;\n  }\n']); /* eslint-env browser */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mobxReact = __webpack_require__(20);

var _recompose = __webpack_require__(17);

var _components = __webpack_require__(16);

var _SpecsSidebar = __webpack_require__(114);

var _SpecsSidebar2 = _interopRequireDefault(_SpecsSidebar);

var _OverlayLayout = __webpack_require__(106);

var _OverlayLayout2 = _interopRequireDefault(_OverlayLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var color = _components.styles.color;


var Sidebar = (0, _styledComponents2.default)(_SpecsSidebar2.default)(_templateObject);
var Content = (0, _styledComponents2.default)(_components.Canvas)(_templateObject);
var ContentWrapper = _styledComponents2.default.div(_templateObject);

// prettier-ignore
var PageWrapper = _styledComponents2.default.div(_templateObject2, color.mediumlight, Sidebar, ContentWrapper, Sidebar, ContentWrapper, Content);

function SpecsScreen(_ref) {
  var loading = _ref.loading,
      component = _ref.component,
      selectedSpecInternalId = _ref.selectedSpecInternalId,
      onSelectSpecInternal = _ref.onSelectSpecInternal,
      onUpdateOrCreateSpec = _ref.onUpdateOrCreateSpec,
      onRemoveSpec = _ref.onRemoveSpec,
      onHideComponentSpecs = _ref.onHideComponentSpecs;

  var selectedSpec = component.specs.find(function (s) {
    return s.internalId === selectedSpecInternalId;
  }) || component.specs[0];
  var isolatorUrl = document.location.protocol + '//' + document.location.host;

  return _react2.default.createElement(
    _OverlayLayout2.default,
    null,
    _react2.default.createElement(
      PageWrapper,
      null,
      _react2.default.createElement(Sidebar, {
        loading: loading,
        component: component,
        specs: component.specs,
        selectedSpecId: selectedSpec && selectedSpec.internalId,
        onSelectSpec: onSelectSpecInternal,
        onUpdateOrCreateSpec: onUpdateOrCreateSpec,
        onRemoveSpec: onRemoveSpec,
        onHideComponentSpecs: onHideComponentSpecs
      }),
      _react2.default.createElement(
        ContentWrapper,
        null,
        _react2.default.createElement(Content, { loading: loading, interactive: true, figure: isolatorUrl, spec: selectedSpec })
      )
    )
  );
}

SpecsScreen.propTypes = {
  loading: _propTypes2.default.bool,
  component: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    webUrl: _propTypes2.default.string,
    specs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      internalId: _propTypes2.default.string.isRequired,
      name: _propTypes2.default.string,
      input: _propTypes2.default.any.isRequired,
      status: _propTypes2.default.oneOf(['saving', 'saved', 'unsaved']).isRequired
    })).isRequired
  }),
  selectedSpecInternalId: _propTypes2.default.string,
  onSelectSpecInternal: _propTypes2.default.func.isRequired,
  onUpdateOrCreateSpec: _propTypes2.default.func.isRequired,
  onRemoveSpec: _propTypes2.default.func.isRequired,
  onHideComponentSpecs: _propTypes2.default.func.isRequired
};

SpecsScreen.defaultProps = {
  component: { name: 'loading', specs: [] },
  selectedSpecInternalId: null,
  loading: false,
  build: {
    id: 'loading',
    number: null,
    commit: 'loading'
  }
};

exports.default = (0, _recompose.compose)(_mobxReact.observer, (0, _recompose.withState)('selectedSpecInternalId', 'onSelectSpecInternal', function (_ref2) {
  var component = _ref2.component,
      specInternalId = _ref2.specInternalId;
  return specInternalId || component && component.specs.length > 0 && component.specs[0].internalId;
}))(SpecsScreen);

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(4);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = __webpack_require__(1);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)([''], ['']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  font-size: ', 'px;\n  margin-bottom: 0.5rem;\n  display: block;\n'], ['\n  color: ', ';\n  font-size: ', 'px;\n  margin-bottom: 0.5rem;\n  display: block;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: ', 'px;\n  line-height: 20px;\n  margin: 0.75rem 0 1.5rem;\n'], ['\n  font-size: ', 'px;\n  line-height: 20px;\n  margin: 0.75rem 0 1.5rem;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['margin-bottom: 1.5rem;'], ['margin-bottom: 1.5rem;']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: ', 'px;\n  color: ', ';\n  margin-top: 0.75rem;\n  line-height: 1;\n'], ['\n  font-size: ', 'px;\n  color: ', ';\n  margin-top: 0.75rem;\n  line-height: 1;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n'], ['\n  text-align: center;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n\n  ', ' {\n    flex: 1 1 auto;\n    overflow: auto;\n  }\n  ', ' {\n    flex: 0 0 auto;\n    align-self: flex-end;\n    width: 100%;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n\n  ', ' {\n    flex: 1 1 auto;\n    overflow: auto;\n  }\n  ', ' {\n    flex: 0 0 auto;\n    align-self: flex-end;\n    width: 100%;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mobxReact = __webpack_require__(20);

var _components = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var color = _components.styles.color,
    typography = _components.styles.typography;


var Header = (0, _styledComponents2.default)(_components.ComponentHeader)(_templateObject);

var Heading = (0, _styledComponents2.default)(_components.Subheading)(_templateObject2, color.mediumdark, typography.size.s1 - 1);

var EmptySpecsMessage = _styledComponents2.default.div(_templateObject3, typography.size.s2);

var SavedSpecs = _styledComponents2.default.div(_templateObject4);
var UnsavedSpecs = _styledComponents2.default.div(_templateObject);

var Help = _styledComponents2.default.div(_templateObject5, typography.size.s1, color.dark);

// prettier-ignore
var Footer = _styledComponents2.default.div(_templateObject6);

var HeaderWrapper = _styledComponents2.default.div(_templateObject);

// prettier-ignore
var Sidebar = _styledComponents2.default.div(_templateObject7, HeaderWrapper, Footer);

function SpecsSidebar(_ref) {
  var loading = _ref.loading,
      component = _ref.component,
      selectedSpecId = _ref.selectedSpecId,
      onSelectSpec = _ref.onSelectSpec,
      onUpdateOrCreateSpec = _ref.onUpdateOrCreateSpec,
      onRemoveSpec = _ref.onRemoveSpec,
      onHideComponentSpecs = _ref.onHideComponentSpecs,
      other = (0, _objectWithoutProperties3.default)(_ref, ['loading', 'component', 'selectedSpecId', 'onSelectSpec', 'onUpdateOrCreateSpec', 'onRemoveSpec', 'onHideComponentSpecs']);
  var specs = component.specs;

  var savedSpecs = specs.filter(function (_ref2) {
    var status = _ref2.status;
    return status === 'saved' || status === 'saving';
  });
  var unsavedSpecs = specs.filter(function (_ref3) {
    var status = _ref3.status;
    return status === 'unsaved';
  });

  // SpecList deals in `id`, however we don't have one yet for unsaved specs.
  // We have an `internalId` (we don't want to call it `id` because that's
  // the server's `id`, which *does* exist for saved specs).
  var mapSpecs = function mapSpecs(ss) {
    return ss.map(function (spec) {
      return (0, _extends3.default)({}, spec, { id: spec.internalId });
    });
  };

  // XXX: make this a class I guess
  var onSave = function onSave(internalId, _ref4) {
    var specName = _ref4.name,
        props = _ref4.props;

    var spec = specs.find(function (s) {
      return s.internalId === internalId;
    });
    spec.name = specName;
    spec.input.element.props = (0, _extends3.default)({}, spec.input.element.props, props);
    onUpdateOrCreateSpec(spec);
  };

  var onDelete = function onDelete(internalId) {
    onRemoveSpec(specs.find(function (s) {
      return s.internalId === internalId;
    }));
  };

  var actionButton = _react2.default.createElement(
    _components.Button,
    { small: true, icon: true, onClick: onHideComponentSpecs },
    _react2.default.createElement(_components.Icon, { icon: 'cross' })
  );

  return _react2.default.createElement(
    Sidebar,
    other,
    _react2.default.createElement(
      HeaderWrapper,
      null,
      _react2.default.createElement(Header, { loading: loading, component: component, actionButton: actionButton }),
      loading && _react2.default.createElement(_components.SpecList, { loading: true }),
      savedSpecs.length === 0 && !loading && _react2.default.createElement(
        EmptySpecsMessage,
        null,
        'Add a test spec by saving the current state of this component. You can change the spec at any time.',
        ' ',
        _react2.default.createElement(
          _components.Link,
          { tertiary: true, href: 'http://docs.chromaticqa.com/specs' },
          _react2.default.createElement(
            'b',
            null,
            'Read more'
          )
        )
      ),
      savedSpecs.length > 0 && _react2.default.createElement(
        SavedSpecs,
        null,
        _react2.default.createElement(
          Heading,
          null,
          'Saved'
        ),
        _react2.default.createElement(_components.SpecList, {
          loading: loading,
          specs: mapSpecs(savedSpecs),
          selectedId: selectedSpecId,
          onSelect: onSelectSpec,
          onSave: onSave,
          onDelete: onDelete
        })
      ),
      unsavedSpecs.length > 0 && _react2.default.createElement(
        UnsavedSpecs,
        null,
        _react2.default.createElement(
          Heading,
          null,
          'Unsaved'
        ),
        _react2.default.createElement(_components.SpecList, {
          specs: mapSpecs(unsavedSpecs),
          selectedId: selectedSpecId,
          onSelect: onSelectSpec,
          onSave: onSave
        })
      )
    ),
    !loading && _react2.default.createElement(
      Footer,
      null,
      component.webUrl && _react2.default.createElement(
        _components.Button,
        { small: true, outline: true, isLink: true, href: component.webUrl, target: '_blank' },
        'View in Chromatic'
      ),
      _react2.default.createElement(
        Help,
        null,
        _react2.default.createElement(
          _components.Link,
          {
            tertiary: true,
            href: 'http://docs.chromaticqa.com/specs#troubleshooting-specs',
            target: '_blank'
          },
          'Doesn\u2019t look right?'
        )
      )
    )
  );
}

SpecsSidebar.propTypes = {
  loading: _propTypes2.default.bool,
  component: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    webUrl: _propTypes2.default.string,
    specs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      internalId: _propTypes2.default.string.isRequired,
      name: _propTypes2.default.string,
      input: _propTypes2.default.any.isRequired,
      status: _propTypes2.default.oneOf(['saving', 'saved', 'unsaved']).isRequired
    })).isRequired
  }).isRequired,
  selectedSpecId: _propTypes2.default.string,
  onSelectSpec: _propTypes2.default.func.isRequired,
  onUpdateOrCreateSpec: _propTypes2.default.func.isRequired,
  onRemoveSpec: _propTypes2.default.func.isRequired,
  onHideComponentSpecs: _propTypes2.default.func.isRequired
};

SpecsSidebar.defaultProps = {
  loading: false,
  component: {
    id: 'loading',
    name: 'loading',
    specs: [],
    builds: []
  },
  specs: _components.SpecList.defaultProps.specs,
  selectedSpecId: 'loading'
};

exports.default = (0, _mobxReact.observer)(SpecsSidebar);

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _collapseWhiteSpace = __webpack_require__(129);

var _collapseWhiteSpace2 = _interopRequireDefault(_collapseWhiteSpace);

var _react = __webpack_require__(0);

var _stringifyObject = __webpack_require__(98);

var _stringifyObject2 = _interopRequireDefault(_stringifyObject);

var _sortobject = __webpack_require__(137);

var _sortobject2 = _interopRequireDefault(_sortobject);

var _parseReactElement = __webpack_require__(33);

var _parseReactElement2 = _interopRequireDefault(_parseReactElement);

var _formatTreeNode = __webpack_require__(24);

var _formatTreeNode2 = _interopRequireDefault(_formatTreeNode);

var _spacer = __webpack_require__(32);

var _spacer2 = _interopRequireDefault(_spacer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noRefCheck() {}

exports.default = function (value, inline, lvl, options) {
  var normalizedValue = (0, _sortobject2.default)(value);

  var stringifiedValue = (0, _stringifyObject2.default)(normalizedValue, {
    transform: function transform(currentObj, prop, originalResult) {
      var currentValue = currentObj[prop];

      if (currentValue && (0, _react.isValidElement)(currentValue)) {
        return (0, _formatTreeNode2.default)((0, _parseReactElement2.default)(currentValue, options), true, lvl, options);
      }

      if (typeof currentValue === 'function') {
        return noRefCheck;
      }

      return originalResult;
    }
  });

  if (inline) {
    return (0, _collapseWhiteSpace2.default)(stringifiedValue).replace(/{ /g, '{').replace(/ }/g, '}').replace(/\[ /g, '[').replace(/ ]/g, ']');
  }

  // Replace tabs with spaces, and add necessary indentation in front of each new line
  return stringifiedValue.replace(/\t/g, (0, _spacer2.default)(1, options.tabStop)).replace(/\n([^$])/g, '\n' + (0, _spacer2.default)(lvl + 1, options.tabStop) + '$1');
};
//# sourceMappingURL=formatComplexDataStructure.js.map

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spacer = __webpack_require__(32);

var _spacer2 = _interopRequireDefault(_spacer);

var _formatPropValue = __webpack_require__(117);

var _formatPropValue2 = _interopRequireDefault(_formatPropValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (name, hasValue, value, hasDefaultValue, defaultValue, inline, lvl, options) {
  if (!hasValue && !hasDefaultValue) {
    throw new Error('The prop "' + name + '" has no value and no default: could not be formatted');
  }

  var usedValue = hasValue ? value : defaultValue;

  var useBooleanShorthandSyntax = options.useBooleanShorthandSyntax,
      tabStop = options.tabStop;


  var formattedPropValue = (0, _formatPropValue2.default)(usedValue, inline, lvl, options);

  var attributeFormattedInline = ' ';
  var attributeFormattedMultiline = '\n' + (0, _spacer2.default)(lvl + 1, tabStop);
  var isMultilineAttribute = formattedPropValue.includes('\n');

  if (useBooleanShorthandSyntax && formattedPropValue === '{false}' && !hasDefaultValue) {
    // If a boolean is false an is not different from it's default, we do not render the attribute
    attributeFormattedInline = '';
    attributeFormattedMultiline = '';
  } else if (useBooleanShorthandSyntax && formattedPropValue === '{true}') {
    attributeFormattedInline += '' + name;
    attributeFormattedMultiline += '' + name;
  } else {
    attributeFormattedInline += name + '=' + formattedPropValue;
    attributeFormattedMultiline += name + '=' + formattedPropValue;
  }

  return {
    attributeFormattedInline: attributeFormattedInline,
    attributeFormattedMultiline: attributeFormattedMultiline,
    isMultilineAttribute: isMultilineAttribute
  };
};
//# sourceMappingURL=formatProp.js.map

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isPlainObject = __webpack_require__(132);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _react = __webpack_require__(0);

var _formatComplexDataStructure = __webpack_require__(115);

var _formatComplexDataStructure2 = _interopRequireDefault(_formatComplexDataStructure);

var _formatTreeNode = __webpack_require__(24);

var _formatTreeNode2 = _interopRequireDefault(_formatTreeNode);

var _parseReactElement = __webpack_require__(33);

var _parseReactElement2 = _interopRequireDefault(_parseReactElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noRefCheck = function noRefCheck() {};
var escape = function escape(s) {
  return s.replace(/"/g, '&quot;');
};

var defaultFunctionValue = function defaultFunctionValue(fn) {
  return fn;
};

var formatPropValue = function formatPropValue(propValue, inline, lvl, options) {
  if (typeof propValue === 'number') {
    return '{' + String(propValue) + '}';
  }

  if (typeof propValue === 'string') {
    return '"' + escape(propValue) + '"';
  }

  // > "Symbols (new in ECMAScript 2015, not yet supported in Flow)"
  // @see: https://flow.org/en/docs/types/primitives/
  // $FlowFixMe: Flow does not support Symbol
  if ((typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) === 'symbol') {
    return '{' + String(propValue) + '}';
  }

  if (typeof propValue === 'function') {
    var _options$functionValu = options.functionValue,
        functionValue = _options$functionValu === undefined ? defaultFunctionValue : _options$functionValu,
        showFunctions = options.showFunctions;

    if (!showFunctions && functionValue === defaultFunctionValue) {
      return '{' + functionValue(noRefCheck) + '}';
    }

    return '{' + functionValue(propValue) + '}';
  }

  if ((0, _react.isValidElement)(propValue)) {
    return '{' + (0, _formatTreeNode2.default)((0, _parseReactElement2.default)(propValue, options), true, lvl, options) + '}';
  }

  if (propValue instanceof Date) {
    return '{new Date("' + propValue.toISOString() + '")}';
  }

  if ((0, _isPlainObject2.default)(propValue) || Array.isArray(propValue)) {
    return '{' + (0, _formatComplexDataStructure2.default)(propValue, inline, lvl, options) + '}';
  }

  return '{' + String(propValue) + '}';
};

exports.default = formatPropValue;
//# sourceMappingURL=formatPropValue.js.map

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spacer = __webpack_require__(32);

var _spacer2 = _interopRequireDefault(_spacer);

var _formatTreeNode = __webpack_require__(24);

var _formatTreeNode2 = _interopRequireDefault(_formatTreeNode);

var _formatProp2 = __webpack_require__(116);

var _formatProp3 = _interopRequireDefault(_formatProp2);

var _mergeSiblingPlainStringChildrenReducer = __webpack_require__(120);

var _mergeSiblingPlainStringChildrenReducer2 = _interopRequireDefault(_mergeSiblingPlainStringChildrenReducer);

var _propNameSorter = __webpack_require__(121);

var _propNameSorter2 = _interopRequireDefault(_propNameSorter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compensateMultilineStringElementIndentation = function compensateMultilineStringElementIndentation(element, formattedElement, inline, lvl, options) {
  var tabStop = options.tabStop;


  if (element.type === 'string') {
    return formattedElement.split('\n').map(function (line, offset) {
      if (offset === 0) {
        return line;
      }

      return '' + (0, _spacer2.default)(lvl, tabStop) + line;
    }).join('\n');
  }

  return formattedElement;
};

var formatOneChildren = function formatOneChildren(inline, lvl, options) {
  return function (element) {
    return compensateMultilineStringElementIndentation(element, (0, _formatTreeNode2.default)(element, inline, lvl, options), inline, lvl, options);
  };
};

var onlyPropsWithOriginalValue = function onlyPropsWithOriginalValue(defaultProps, props) {
  return function (propName) {
    var haveDefaultValue = Object.keys(defaultProps).includes(propName);
    return !haveDefaultValue || haveDefaultValue && defaultProps[propName] !== props[propName];
  };
};

var isInlineAttributeTooLong = function isInlineAttributeTooLong(attributes, inlineAttributeString, lvl, tabStop, maxInlineAttributesLineLength) {
  if (!maxInlineAttributesLineLength) {
    return attributes.length > 1;
  }

  return (0, _spacer2.default)(lvl, tabStop).length + inlineAttributeString.length > maxInlineAttributesLineLength;
};

var shouldRenderMultilineAttr = function shouldRenderMultilineAttr(attributes, inlineAttributeString, containsMultilineAttr, inline, lvl, tabStop, maxInlineAttributesLineLength) {
  return (isInlineAttributeTooLong(attributes, inlineAttributeString, lvl, tabStop, maxInlineAttributesLineLength) || containsMultilineAttr) && !inline;
};

exports.default = function (node, inline, lvl, options) {
  var type = node.type,
      _node$displayName = node.displayName,
      displayName = _node$displayName === undefined ? '' : _node$displayName,
      childrens = node.childrens,
      _node$props = node.props,
      props = _node$props === undefined ? {} : _node$props,
      _node$defaultProps = node.defaultProps,
      defaultProps = _node$defaultProps === undefined ? {} : _node$defaultProps;


  if (type !== 'ReactElement') {
    throw new Error('The "formatReactElementNode" function could only format node of type "ReactElement". Given:  ' + type);
  }

  var filterProps = options.filterProps,
      maxInlineAttributesLineLength = options.maxInlineAttributesLineLength,
      showDefaultProps = options.showDefaultProps,
      sortProps = options.sortProps,
      tabStop = options.tabStop;


  var out = '<' + displayName;

  var outInlineAttr = out;
  var outMultilineAttr = out;
  var containsMultilineAttr = false;

  var visibleAttributeNames = [];

  Object.keys(props).filter(function (propName) {
    return filterProps.indexOf(propName) === -1;
  }).filter(onlyPropsWithOriginalValue(defaultProps, props)).forEach(function (propName) {
    return visibleAttributeNames.push(propName);
  });

  Object.keys(defaultProps).filter(function (defaultPropName) {
    return filterProps.indexOf(defaultPropName) === -1;
  }).filter(function () {
    return showDefaultProps;
  }).filter(function (defaultPropName) {
    return !visibleAttributeNames.includes(defaultPropName);
  }).forEach(function (defaultPropName) {
    return visibleAttributeNames.push(defaultPropName);
  });

  var attributes = visibleAttributeNames.sort((0, _propNameSorter2.default)(sortProps));

  attributes.forEach(function (attributeName) {
    var _formatProp = (0, _formatProp3.default)(attributeName, Object.keys(props).includes(attributeName), props[attributeName], Object.keys(defaultProps).includes(attributeName), defaultProps[attributeName], inline, lvl, options),
        attributeFormattedInline = _formatProp.attributeFormattedInline,
        attributeFormattedMultiline = _formatProp.attributeFormattedMultiline,
        isMultilineAttribute = _formatProp.isMultilineAttribute;

    if (isMultilineAttribute) {
      containsMultilineAttr = true;
    }

    outInlineAttr += attributeFormattedInline;
    outMultilineAttr += attributeFormattedMultiline;
  });

  outMultilineAttr += '\n' + (0, _spacer2.default)(lvl, tabStop);

  if (shouldRenderMultilineAttr(attributes, outInlineAttr, containsMultilineAttr, inline, lvl, tabStop, maxInlineAttributesLineLength)) {
    out = outMultilineAttr;
  } else {
    out = outInlineAttr;
  }

  if (childrens && childrens.length > 0) {
    var newLvl = lvl + 1;

    out += '>';

    if (!inline) {
      out += '\n';
      out += (0, _spacer2.default)(newLvl, tabStop);
    }

    out += childrens.reduce(_mergeSiblingPlainStringChildrenReducer2.default, []).map(formatOneChildren(inline, newLvl, options)).join('\n' + (0, _spacer2.default)(newLvl, tabStop));

    if (!inline) {
      out += '\n';
      out += (0, _spacer2.default)(newLvl - 1, tabStop);
    }
    out += '</' + displayName + '>';
  } else {
    if (!isInlineAttributeTooLong(attributes, outInlineAttr, lvl, tabStop, maxInlineAttributesLineLength)) {
      out += ' ';
    }

    out += '/>';
  }

  return out;
};
//# sourceMappingURL=formatReactElementNode.js.map

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formatTreeNode = __webpack_require__(24);

var _formatTreeNode2 = _interopRequireDefault(_formatTreeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (node, options) {
  return (0, _formatTreeNode2.default)(node, false, 0, options);
};
//# sourceMappingURL=formatTree.js.map

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tree = __webpack_require__(52);

exports.default = function (previousNodes, currentNode) {
  var nodes = previousNodes.slice(0, previousNodes.length > 0 ? previousNodes.length - 1 : 0);
  var previousNode = previousNodes[previousNodes.length - 1];

  if (previousNode && (currentNode.type === 'string' || currentNode.type === 'number') && (previousNode.type === 'string' || previousNode.type === 'number')) {
    nodes.push((0, _tree.createStringTreeNode)(String(previousNode.value) + String(currentNode.value)));
  } else {
    if (previousNode) {
      nodes.push(previousNode);
    }

    nodes.push(currentNode);
  }

  return nodes;
};
//# sourceMappingURL=mergeSiblingPlainStringChildrenReducer.js.map

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sortProps) {
  return function (a, b) {
    if (a === b) {
      return 0;
    }

    if (['key', 'ref'].includes(a)) {
      return -1;
    } else if (['key', 'ref'].includes(b)) {
      return 1;
    }

    if (!sortProps) {
      return 0;
    }

    return a < b ? -1 : 1;
  };
};
//# sourceMappingURL=propNameSorter.js.map

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _formatTree = __webpack_require__(119);

var _formatTree2 = _interopRequireDefault(_formatTree);

var _parseReactElement = __webpack_require__(33);

var _parseReactElement2 = _interopRequireDefault(_parseReactElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reactElementToJsxString = function reactElementToJsxString(element) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$filterProps = _ref.filterProps,
      filterProps = _ref$filterProps === undefined ? [] : _ref$filterProps,
      _ref$showDefaultProps = _ref.showDefaultProps,
      showDefaultProps = _ref$showDefaultProps === undefined ? true : _ref$showDefaultProps,
      _ref$showFunctions = _ref.showFunctions,
      showFunctions = _ref$showFunctions === undefined ? false : _ref$showFunctions,
      functionValue = _ref.functionValue,
      _ref$tabStop = _ref.tabStop,
      tabStop = _ref$tabStop === undefined ? 2 : _ref$tabStop,
      _ref$useBooleanShorth = _ref.useBooleanShorthandSyntax,
      useBooleanShorthandSyntax = _ref$useBooleanShorth === undefined ? true : _ref$useBooleanShorth,
      _ref$sortProps = _ref.sortProps,
      sortProps = _ref$sortProps === undefined ? true : _ref$sortProps,
      maxInlineAttributesLineLength = _ref.maxInlineAttributesLineLength,
      displayName = _ref.displayName;

  if (!element) {
    throw new Error('react-element-to-jsx-string: Expected a ReactElement');
  }

  var options = {
    filterProps: filterProps,
    showDefaultProps: showDefaultProps,
    showFunctions: showFunctions,
    functionValue: functionValue,
    tabStop: tabStop,
    useBooleanShorthandSyntax: useBooleanShorthandSyntax,
    sortProps: sortProps,
    maxInlineAttributesLineLength: maxInlineAttributesLineLength,
    displayName: displayName
  };

  return (0, _formatTree2.default)((0, _parseReactElement2.default)(element, options), options);
};

exports.default = reactElementToJsxString;
//# sourceMappingURL=index.js.map

/***/ }),
/* 123 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = require("animate-css-styled-components");

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-own-property-symbols");

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = require("collapse-white-space");

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = require("is-obj");

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = require("is-plain-object");

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = require("is-regexp");

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = require("mobx-react-form");

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = require("react-devtools-core");

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = require("sortobject");

/***/ })
/******/ ]);
//# sourceMappingURL=client.js.map