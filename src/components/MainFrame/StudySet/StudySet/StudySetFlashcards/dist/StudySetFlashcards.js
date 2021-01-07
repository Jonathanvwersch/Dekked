"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_1 = require("react-router");
var Flashcard_1 = require("../../Flashcard/Flashcard");
var StudySetFlashcards = function (_a) {
    var folderBlocks = _a.folderBlocks, handleFolderBlocks = _a.handleFolderBlocks, deleteFlashcard = _a.deleteFlashcard;
    var location = react_router_1.useLocation();
    var handleTab = function () {
        var newFolderBlocksArray = folderBlocks.slice(); //make copy of array of folder blocks
        newFolderBlocksArray[location.state.folderIndex].binders[location.state.binderIndex].studySets[location.state.studySetIndex].tab = "flashcards"; // Invert folder block's open status
        handleFolderBlocks(newFolderBlocksArray);
    };
    react_1.useEffect(function () {
        handleTab();
    }, [location.state]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, location.state
        ? folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].studySets[location.state.studySetIndex].flashcards.map(function (item, index) { return (react_1["default"].createElement(Flashcard_1["default"], { deleteFlashcard: function () {
                deleteFlashcard(index);
            }, index: index })); })
        : null));
};
exports["default"] = StudySetFlashcards;
