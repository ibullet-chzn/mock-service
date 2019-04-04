"use strict";
exports.__esModule = true;
var _fs = require("fs");
var _fs2 = _interopRequireDefault(_fs);
var _path = require("path");
var _path2 = _interopRequireDefault(_path);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var getMockConfig = function getMockConfig() {
  try {
    var mockFilePath = _path2.default.join(process.cwd(), "_mock.js");
    var mockText = _fs2.default.readFileSync(
      _path2.default.resolve(mockFilePath),
      "utf8"
    );
    return eval(mockText);
  } catch (err) {
    throw err;
  }
};
exports.default = getMockConfig;
module.exports = exports.default;
//# sourceMappingURL=mockConfig.js.map
