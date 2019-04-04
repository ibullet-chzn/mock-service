"use strict";
exports.__esModule = true;
var _lodash = require("lodash");
var _lodash2 = _interopRequireDefault(_lodash);
var _mockConfig = require("../utils/mockConfig");
var _mockConfig2 = _interopRequireDefault(_mockConfig);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _getMockConfig = (0, _mockConfig2.default)(),
  port = _getMockConfig.port;

var cfgs = [{ port: port }];

var config = _lodash.defaultsDeep.apply(_lodash2.default, cfgs);
exports.default = config;
module.exports = exports.default;
//# sourceMappingURL=index.js.map
