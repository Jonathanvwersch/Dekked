"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_1 = require("react-router");
require("./StudySetNotes.css");
var UseResize_1 = require("../../../../custom-hooks/UseResize");
var StudySetNotes = function (_a) {
    var folderBlocks = _a.folderBlocks, handleFolderBlocks = _a.handleFolderBlocks, setStudySetNotesWidth = _a.setStudySetNotesWidth, sidebar = _a.sidebar;
    var location = react_router_1.useLocation();
    var ref = react_1.useRef(null);
    var width = UseResize_1.useResize(ref, sidebar).width;
    react_1.useLayoutEffect(function () {
        setStudySetNotesWidth(width);
    }, [width, setStudySetNotesWidth]);
    var handleTab = function () {
        var newFolderBlocksArray = folderBlocks.slice(); //make copy of array of folder blocks
        newFolderBlocksArray[location.state.folderIndex].binders[location.state.binderIndex].studySets[location.state.studySetIndex].tab = "notes"; // Invert folder block's open status
        handleFolderBlocks(newFolderBlocksArray);
    };
    react_1.useEffect(function () {
        handleTab();
    }, [location.state]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "studySetNotes", ref: ref })));
};
exports["default"] = StudySetNotes;
