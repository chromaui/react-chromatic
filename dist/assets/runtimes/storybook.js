'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runtime = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.renderSpec = renderSpec;
exports.specs = specs;

var _react = require('@storybook/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var runtime = exports.runtime = 'storybook'; // XXX: Should we make this a peer dependency?
// eslint-disable-next-line import/no-extraneous-dependencies
function renderSpec(_ref) {
  var specRuntime = _ref.runtime,
      input = _ref.input;

  if (specRuntime !== runtime) {
    throw new Error('Storybook plugin cannot handle ' + specRuntime + ' specs');
  }

  var kind = input.kind,
      name = input.name;


  var story = (0, _react.getStorybook)().find(function (c) {
    return c.kind === kind;
  }).stories.find(function (s) {
    return s.name === name;
  });

  return story.render({
    kind: kind,
    name: name
  });
}

function specs() {
  return (0, _react.getStorybook)().map(function (_ref2) {
    var kind = _ref2.kind,
        stories = _ref2.stories;
    return stories.map(function (_ref3) {
      var name = _ref3.name;
      return {
        name: name,
        componentName: kind,
        runtime: runtime,
        input: (0, _stringify2.default)({
          kind: kind,
          name: name
        })
      };
    });
  }).reduce(function (a, b) {
    return [].concat((0, _toConsumableArray3.default)(a), (0, _toConsumableArray3.default)(b));
  }, []); // flatten
}

exports.default = {
  runtime: runtime,
  renderSpec: renderSpec,
  specs: specs
};
//# sourceMappingURL=storybook.js.map