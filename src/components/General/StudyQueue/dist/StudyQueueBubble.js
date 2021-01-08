"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./StudyQueueBubble.css");
var react_2 = require("@iconify/react");
var bookshelf_1 = require("@iconify/icons-mdi/bookshelf");
var Portal_1 = require("../Portal/Portal");
var Button_1 = require("../../Buttons/Button/Button");
var StudyQueue = function () {
    var _a = react_1.useState(false), studyQueue = _a[0], setStudyQueue = _a[1];
    var _b = react_1.useState(0), notifications = _b[0], setNotifications = _b[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "studyQueueBubbleContainer" },
            notifications > 0 ? (react_1["default"].createElement("div", { className: "notificationBubble p2 bold" }, notifications)) : null,
            react_1["default"].createElement("div", { className: "studyQueueBubble primary", onClick: function () { return setStudyQueue(function (prevState) { return !prevState; }); } },
                react_1["default"].createElement(react_2.Icon, { className: "icon StudyQueue", icon: bookshelf_1["default"], style: { color: "white", fontSize: "24px" } }))),
        studyQueue ? (react_1["default"].createElement(Portal_1["default"], { state: studyQueue, handleState: function () { return setStudyQueue(function (prevState) { return !prevState; }); } },
            react_1["default"].createElement("div", { className: "studyQueue dropdownMenu" },
                react_1["default"].createElement("div", { className: "srBlocks" }),
                react_1["default"].createElement("div", { id: "studyQueueButton" },
                    react_1["default"].createElement(Button_1["default"], { type: "primary", action: "Study", disabled: true }))))) : null));
};
exports["default"] = StudyQueue;
