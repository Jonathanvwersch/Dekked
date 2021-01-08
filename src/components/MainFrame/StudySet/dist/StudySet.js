"use strict";
exports.__esModule = true;
require("./StudySet.css");
var react_1 = require("react");
var react_router_1 = require("react-router");
var Toolbar_1 = require("./Toolbar/Toolbar");
var StudySetNotes_1 = require("./StudySetNotes/StudySetNotes");
var StudySetFlashcards_1 = require("./StudySetFlashcards/StudySetFlashcards");
var Button_1 = require("../../Buttons/Button/Button");
var LinkedFlashcard_1 = require("./Linked Flashcard/LinkedFlashcard");
var uuid_1 = require("uuid");
var StudySetTabs_1 = require("./StudySetTabs/StudySetTabs");
var PageTitle_1 = require("../PageTitle/PageTitle");
var StudySet = function (_a) {
    var folderBlocks = _a.folderBlocks, handleNameChange = _a.handleNameChange, handleFolderBlocks = _a.handleFolderBlocks;
    var location = react_router_1.useLocation();
    var tab = location.state.item.tab;
    var addFlashcard = function () {
        var newFlashcard = {
            id: uuid_1.v4(),
            type: "flashcard",
            front: "",
            back: "",
            studySetId: folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].studySets[location.state.studySetIndex].id,
            binderId: folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].id,
            folderId: folderBlocks[location.state.folderIndex].id
        };
        var newFolderBlocksArray = folderBlocks.slice();
        newFolderBlocksArray[location.state.folderIndex].binders[location.state.binderIndex].studySets[location.state.studySetIndex].flashcards.unshift(newFlashcard);
        handleFolderBlocks(newFolderBlocksArray);
    };
    var deleteFlashcard = function (index) {
        var newFolderBlocksArray = folderBlocks.slice();
        newFolderBlocksArray[location.state.folderIndex].binders[location.state.binderIndex].studySets[location.state.studySetIndex].flashcards.splice(index, 1);
        handleFolderBlocks(newFolderBlocksArray);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null, location.state ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "dekked-pageHeader studySet" },
            react_1["default"].createElement("div", { className: "toolbarTab" },
                tab === "notes" ? react_1["default"].createElement(Toolbar_1["default"], { type: "full" }) : react_1["default"].createElement("div", null),
                react_1["default"].createElement(StudySetTabs_1.StudySetTabs, { folderBlocks: folderBlocks })),
            react_1["default"].createElement(PageTitle_1.PageTitle, { folderBlocks: folderBlocks, handleNameChange: handleNameChange }),
            tab === "flashcards" ? (react_1["default"].createElement("div", { className: "buttonQuantity studySet" },
                react_1["default"].createElement("span", { className: "p2", style: { color: "var(--grey-2)", userSelect: "none" } }, folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].studySets[location.state.studySetIndex].flashcards.length + " Flashcard(s)"),
                react_1["default"].createElement("div", { className: "studySetButtons" },
                    react_1["default"].createElement(Button_1["default"], { handleClick: addFlashcard, type: "secondary", action: "Add flashcard" }),
                    react_1["default"].createElement(Button_1["default"], { disabled: true, type: "primary", action: "Study" })))) : null),
        react_1["default"].createElement("div", { className: "dekked-pageContent" }, tab === "notes" ? (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(StudySetNotes_1["default"], { handleFolderBlocks: handleFolderBlocks, folderBlocks: folderBlocks }),
            react_1["default"].createElement(LinkedFlashcard_1["default"], null))) : (react_1["default"].createElement(StudySetFlashcards_1["default"], { handleFolderBlocks: handleFolderBlocks, folderBlocks: folderBlocks, deleteFlashcard: deleteFlashcard }))))) : null));
};
exports["default"] = StudySet;
