"use strict";
exports.__esModule = true;
var _keys = require("babel-runtime/core-js/object/keys");
var _keys2 = _interopRequireDefault(_keys);
var _regenerator = require("babel-runtime/regenerator");
var _regenerator2 = _interopRequireDefault(_regenerator);
var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");
var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
var _fs = require("fs");
var _fs2 = _interopRequireDefault(_fs);
var _koaRouter = require("koa-router");
var _koaRouter2 = _interopRequireDefault(_koaRouter);
var _mockConfig = require("../utils/mockConfig");
var _mockConfig2 = _interopRequireDefault(_mockConfig);
var _encapsulation = require("../models/encapsulation");
var _encapsulation2 = _interopRequireDefault(_encapsulation);
var _path = require("path");
var _path2 = _interopRequireDefault(_path);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var router = (0, _koaRouter2.default)();

router.get(
  "/mock-service-dashboard",
  (function() {
    var _ref = (0, _asyncToGenerator3.default)(
      /*#__PURE__*/ _regenerator2.default.mark(function _callee(ctx) {
        var title;
        return _regenerator2.default.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  title = "mock-service-dashboard start";
                  _context.next = 3;
                  return ctx.render("index", { title: title });
                case 3:
                case "end":
                  return _context.stop();
              }
            }
          },
          _callee,
          undefined
        );
      })
    );
    return function(_x) {
      return _ref.apply(this, arguments);
    };
  })()
);

var mockObject = (0, _mockConfig2.default)().mockObject;

console.log(mockObject);

var initMock = function initMock() {
  (0, _keys2.default)(mockObject).map(function(keys) {
    // 转小写
    router[mockObject[keys].type.toLowerCase()](keys, function(ctx) {
      ctx.body = (0, _encapsulation2.default)(
        "SUCCESS",
        typeof mockObject[keys].render === "function"
          ? mockObject[keys].render()
          : mockObject[keys].render
      );
    });
  });
};

initMock();

_fs2.default.watchFile(
  _path2.default.join(process.cwd(), "_mock.js"),
  function() {
    mockObject = (0, _mockConfig2.default)().mockObject;
  }
);
exports.default = router;
module.exports = exports.default;
//# sourceMappingURL=index.js.map
