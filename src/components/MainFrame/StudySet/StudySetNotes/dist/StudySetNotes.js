"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_1 = require("react-router");
require("./StudySetNotes.css");
var StudySetNotes = function (_a) {
    var folderBlocks = _a.folderBlocks, handleFolderBlocks = _a.handleFolderBlocks;
    var location = react_router_1.useLocation();
    var handleTab = function () {
        var newFolderBlocksArray = folderBlocks.slice(); //make copy of array of folder blocks
        newFolderBlocksArray[location.state.folderIndex].binders[location.state.binderIndex].studySets[location.state.studySetIndex].tab = "notes"; // Invert folder block's open status
        handleFolderBlocks(newFolderBlocksArray);
    };
    react_1.useEffect(function () {
        handleTab();
    }, [location.state]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "studySetNotes" })));
};
exports["default"] = StudySetNotes;
