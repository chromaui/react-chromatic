'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = storybookRuntimeOptions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function storybookRuntimeOptions(getStorybook) {
  var runtime = 'storybook';
  return {
    runtime: runtime,
    renderSpec: function renderSpec(_ref) {
      var specRuntime = _ref.runtime,
          input = _ref.input;

      if (specRuntime !== runtime) {
        throw new Error('Storybook plugin cannot handle ' + specRuntime + ' specs');
      }

      var kind = input.kind,
          name = input.name;


      var story = getStorybook().find(function (c) {
        return c.kind === kind;
      }).stories.find(function (s) {
        return s.name === name;
      });

      return story.render({
        kind: kind,
        story: name
      });
    },
    specs: function specs() {
      return getStorybook().map(function (_ref2) {
        var kind = _ref2.kind,
            stories = _ref2.stories;
        return stories.map(function (_ref3) {
          var name = _ref3.name;
          return {
            name: name,
            component: {
              name: kind,
              displayName: kind.split('/').slice(-1)[0]
            },
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
  };
}
//# sourceMappingURL=storybook-common.js.map