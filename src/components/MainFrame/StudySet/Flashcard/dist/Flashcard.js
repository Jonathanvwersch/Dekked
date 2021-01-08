"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Flashcard.css");
var Toolbar_1 = require("../Toolbar/Toolbar");
var md_1 = require("react-icons/md");
var Button_1 = require("../../../Buttons/Button/Button");
var Flashcard = function (_a) {
    var deleteFlashcard = _a.deleteFlashcard, index = _a.index, link = _a.link;
    return (react_1["default"].createElement("div", { className: "flashcard" },
        react_1["default"].createElement("div", { className: "flashcardHeader" },
            index ? react_1["default"].createElement("span", { className: "p2" }, index) : null,
            react_1["default"].createElement(Toolbar_1["default"], null),
            !link ? (react_1["default"].createElement(md_1.MdDeleteForever, { className: "icon active delete", onClick: deleteFlashcard })) : null),
        react_1["default"].createElement("div", { className: "flashcardText" },
            react_1["default"].createElement("div", { className: "flashcardFront" },
                react_1["default"].createElement("span", { className: "p3 grey" }, "Front")),
            react_1["default"].createElement("div", { className: "flashcardBack" },
                react_1["default"].createElement("span", { className: "p3 grey" }, "Back"))),
        react_1["default"].createElement("div", { className: "flashcardFooter" }, link ? react_1["default"].createElement(Button_1["default"], { action: "Save", disabled: true, type: "primary" }) : null)));
};
exports["default"] = Flashcard;
