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
var Icons = require("react-icons/md");
require("./Toolbar.css");
var TextBlockData_1 = require("./TextBlockData");
var Portal_1 = require("../../../General/Portal/Portal");
var Scroller_1 = require("../../../General/Scroller/Scroller");
var Toolbar = function (_a) {
    var type = _a.type;
    var _b = react_1.useState(false), textBlockSelector = _b[0], setTextBlockSelector = _b[1];
    var _c = react_1.useState({}), coords = _c[0], setCoords = _c[1];
    var positionModal = function (e) {
        var node = e.target;
        var rect = node.getBoundingClientRect();
        setCoords({
            left: rect.x + rect.width / 2,
            top: rect.y
        });
        setTextBlockSelector(true);
    };
    return (react_1["default"].createElement("div", { className: "toolbar " + type },
        react_1["default"].createElement("div", { className: "switchBlock", onClick: function (e) {
                positionModal(e);
            } },
            react_1["default"].createElement(Icons.MdTextFields, { className: "icon active blockType" }),
            react_1["default"].createElement(Icons.MdArrowDropDown, { className: "icon active dropdownArrow" })),
        textBlockSelector ? (react_1["default"].createElement(Portal_1["default"], { state: textBlockSelector, handleState: function () { return setTextBlockSelector(false); } },
            react_1["default"].createElement("div", { style: __assign({}, coords), className: "textBlockSelector", onClick: function () { return setTextBlockSelector(false); } }, type === "full" ? (react_1["default"].createElement(Scroller_1.Scroller, { Data: TextBlockData_1.TextBlockDataFull })) : (react_1["default"].createElement(Scroller_1.Scroller, { Data: TextBlockData_1.TextBlockDataHalf }))))) : null,
        react_1["default"].createElement(Icons.MdFormatBold, { className: "icon active bold" }),
        react_1["default"].createElement(Icons.MdFormatUnderlined, { className: "icon active underline" }),
        react_1["default"].createElement(Icons.MdFormatItalic, { className: "icon active italics" }),
        type === "full" ? (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("span", { className: "divider" }),
            react_1["default"].createElement(Icons.MdFormatAlignLeft, { className: "icon active alignLeft" }),
            react_1["default"].createElement(Icons.MdFormatAlignCenter, { className: "icon active alignCenter" }),
            react_1["default"].createElement(Icons.MdFormatAlignRight, { className: "icon active alignRight" }),
            react_1["default"].createElement(Icons.MdFormatAlignJustify, { className: "icon active alignJustify" }))) : null));
};
exports["default"] = Toolbar;
