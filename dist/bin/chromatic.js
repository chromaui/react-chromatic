#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version(require('../../package.json').version).command('test', 'run a Chromatic test', { isDefault: true }).parse(process.argv);
//# sourceMappingURL=chromatic.js.map