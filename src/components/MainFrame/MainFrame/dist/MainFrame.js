"use strict";
exports.__esModule = true;
var react_1 = require("react");
var StudyQueue_1 = require("../../General/StudyQueue/StudyQueue");
var TopBar_1 = require("../TopBar/TopBar");
var react_router_1 = require("react-router");
require("./MainFrame.css");
var FolderBinder_1 = require("../FolderBinder/FolderBinder");
var StudySet_1 = require("../StudySet/StudySet/StudySet");
var MainFrame = function (_a) {
    var sidebar = _a.sidebar, handleSidebar = _a.handleSidebar, setHoverbar = _a.setHoverbar, folderBlocks = _a.folderBlocks, handleFolderBlocks = _a.handleFolderBlocks, handleNameChange = _a.handleNameChange, addBinder = _a.addBinder, addStudySet = _a.addStudySet;
    var location = react_router_1.useLocation();
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "dekked-frameContainer" },
            react_1["default"].createElement("div", { id: "topBarContainer" },
                react_1["default"].createElement(TopBar_1["default"], { folderBlocks: folderBlocks, sidebar: sidebar, handleSidebar: handleSidebar, setHoverbar: setHoverbar })),
            react_1["default"].createElement("div", { className: "dekked-frame" }, location.state ? (location.state.type === "folder" ||
                location.state.type === "binder" ? (react_1["default"].createElement(FolderBinder_1["default"], { folderBlocks: folderBlocks, handleNameChange: handleNameChange, addBinder: addBinder, addStudySet: addStudySet })) : (react_1["default"].createElement(StudySet_1["default"], { folderBlocks: folderBlocks, handleNameChange: handleNameChange, handleFolderBlocks: handleFolderBlocks }))) : null),
            react_1["default"].createElement(StudyQueue_1["default"], null))));
};
exports["default"] = MainFrame;
