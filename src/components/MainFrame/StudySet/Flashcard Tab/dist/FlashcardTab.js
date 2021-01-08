"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./FlashcardTab.css");
var logo_svg_1 = require("../../../../custom-icons/logo.svg");
var FlashcardTab = function (_a) {
    var handleClick = _a.handleClick;
    var _b = react_1.useState("var(--main-black)"), iconColour = _b[0], setIconColour = _b[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "flashcardTab", onClick: handleClick, onMouseOver: function () { return setIconColour("var(--primary-color)"); }, onMouseOut: function () { return setIconColour("var(--main-black)"); } },
            react_1["default"].createElement(logo_svg_1.ReactComponent, { className: "icon active logo", stroke: iconColour }))));
};
exports["default"] = FlashcardTab;
