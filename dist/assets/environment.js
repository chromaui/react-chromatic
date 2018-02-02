'use strict';

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
//# sourceMappingURL=environment.js.map