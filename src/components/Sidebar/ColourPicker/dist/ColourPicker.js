"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_color_1 = require("react-color");
var Portal_1 = require("../../General/Portal/Portal");
require("./ColourPicker.css");
var ColourPicker = function (_a) {
    var iconColour = _a.iconColour, setIconColour = _a.setIconColour, colourPicker = _a.colourPicker, handleColourPicker = _a.handleColourPicker, position = _a.position;
    var _b = react_1.useState({
        background: iconColour
    }), colour = _b[0], setColour = _b[1];
    var handleChange = function (colour) {
        setColour({ background: colour });
        setIconColour(colour.hex);
    };
    var defaultColors = [
        "#2C2C31",
        "#00B6CE",
        "#E81123",
        "#F7630D",
        "#FABD14",
        "#0F893E",
        "#3971D1",
        "#4B0082",
        "#AC008C",
        "#84939A",
    ];
    return colourPicker ? (react_1["default"].createElement(Portal_1["default"], { state: colourPicker, handleState: handleColourPicker },
        react_1["default"].createElement("div", { className: "colourPicker", style: __assign({}, position) },
            react_1["default"].createElement(react_color_1.BlockPicker, { color: colour.background, onChange: handleChange, triangle: "hide", colors: defaultColors })))) : null;
};
exports["default"] = ColourPicker;
