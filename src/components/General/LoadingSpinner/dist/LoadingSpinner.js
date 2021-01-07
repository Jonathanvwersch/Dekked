"use strict";
exports.__esModule = true;
exports.LoadingSpinner = void 0;
var react_1 = require("react");
var logo_svg_1 = require("../../../custom-icons/logo.svg");
require("./LoadingSpinner.css");
exports.LoadingSpinner = function (_a) {
    var _b = _a.loadingText, loadingText = _b === void 0 ? "Loading..." : _b;
    return (react_1["default"].createElement("div", { className: "loadingSpinner" },
        react_1["default"].createElement(logo_svg_1.ReactComponent, { className: "icon logo", stroke: "#00A7BE" }),
        react_1["default"].createElement("span", { className: "p2 bold" }, loadingText)));
};
