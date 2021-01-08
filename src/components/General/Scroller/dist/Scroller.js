"use strict";
exports.__esModule = true;
exports.Scroller = void 0;
var react_1 = require("react");
var Block_1 = require("../Block/Block");
require("./Scroller.css");
exports.Scroller = function (_a) {
    var Data = _a.Data;
    return (react_1["default"].createElement("div", { className: "scroller" }, Data.map(function (item, index) {
        return react_1["default"].createElement(Block_1["default"], { item: item, key: item.id });
    })));
};
