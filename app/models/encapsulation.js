"use strict";
exports.__esModule = true;
var _mockConfig = require("../utils/mockConfig");
var _mockConfig2 = _interopRequireDefault(_mockConfig);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _getMockConfig = (0, _mockConfig2.default)(),
  format = _getMockConfig.format;

var globalCode = function globalCode(name) {
  var Enums = {
    SUCCESS: 0,
    SUCCESS_TEXT: "Success"
  };

  return [Enums[name], Enums[name + "_TEXT"]];
};

var encapsulationBody = function encapsulationBody(enums, data) {
  var _ref;
  return (
    (_ref = {}),
    (_ref[format[0] || "code"] = globalCode(enums)[0]),
    (_ref[format[1] || "message"] = globalCode(enums)[1]),
    (_ref[format[2] || "data"] = data),
    _ref
  );
};
exports.default = encapsulationBody;
module.exports = exports.default;
//# sourceMappingURL=encapsulation.js.map
