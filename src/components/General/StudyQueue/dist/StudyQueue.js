"use strict";
exports.__esModule = true;
exports.StudyQueue = void 0;
var react_1 = require("react");
var Button_1 = require("../../Buttons/Button/Button");
var Portal_1 = require("../Portal/Portal");
require("./StudyQueue.css");
exports.StudyQueue = function (_a) {
    var studyQueue = _a.studyQueue, handleStudyQueue = _a.handleStudyQueue;
    return studyQueue ? (react_1["default"].createElement(Portal_1["default"], { state: studyQueue, handleState: handleStudyQueue },
        react_1["default"].createElement("div", { className: "studyQueue dropdownMenu" },
            react_1["default"].createElement("div", { className: "srBlocks" }),
            react_1["default"].createElement("div", { className: "studyQueueButton" },
                react_1["default"].createElement(Button_1["default"], { type: "primary", action: "Study", disabled: true }))))) : null;
};
