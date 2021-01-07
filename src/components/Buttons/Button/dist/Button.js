"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Button.css");
var Button = function (_a) {
    var action = _a.action, type = _a.type, handleClick = _a.handleClick, disabled = _a.disabled;
    return (react_1["default"].createElement("button", { disabled: disabled, onClick: handleClick, className: "dekked-button " + type + " p2" }, action));
};
exports["default"] = Button;
