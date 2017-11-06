'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _storybook = require('@kadira/storybook');

var _storybookCommon = require('./storybook-common');

var _storybookCommon2 = _interopRequireDefault(_storybookCommon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// XXX: Should we make this a peer dependency?
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = (0, _storybookCommon2.default)(_storybook.getStorybook);
//# sourceMappingURL=storybook-v2.js.map