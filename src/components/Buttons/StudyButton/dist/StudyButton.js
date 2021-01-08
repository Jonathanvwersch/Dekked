"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./StudyButton.css");
var StudyButton = function (_a) {
    var action = _a.action, type = _a.type, handleClick = _a.handleClick;
    return (react_1["default"].createElement("div", { className: "dekked-studyButtonContainer" },
        react_1["default"].createElement("button", { className: "dekked-studyButton " + type + " p1", onClick: handleClick }, action),
        react_1["default"].createElement("span", { className: "p1 grey" }, "Next review in X days")));
};
exports["default"] = StudyButton;
