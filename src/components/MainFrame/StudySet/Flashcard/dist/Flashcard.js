"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Flashcard.css");
var Toolbar_1 = require("../Toolbar/Toolbar");
var md_1 = require("react-icons/md");
var Flashcard = function (_a) {
    var deleteFlashcard = _a.deleteFlashcard, index = _a.index, link = _a.link;
    return (react_1["default"].createElement("div", { className: "flashcardContainer" },
        react_1["default"].createElement("div", { className: "flashcard" },
            react_1["default"].createElement("div", { className: "flashcardHeader" }, !link ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("span", { className: "p2" }, index ? index + 1 : null),
                react_1["default"].createElement(Toolbar_1["default"], null),
                react_1["default"].createElement(md_1.MdDeleteForever, { className: "icon active delete", onClick: deleteFlashcard }))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(Toolbar_1["default"], null),
                react_1["default"].createElement(md_1.MdSave, { className: "icon active save" })))),
            react_1["default"].createElement("div", { className: "flashcardText" },
                react_1["default"].createElement("div", { className: "flashcardFront" },
                    react_1["default"].createElement("span", { className: "p3" }, "Front")),
                react_1["default"].createElement("div", { className: "flashcardBack" },
                    react_1["default"].createElement("span", { className: "p3" }, "Back"))))));
};
exports["default"] = Flashcard;
