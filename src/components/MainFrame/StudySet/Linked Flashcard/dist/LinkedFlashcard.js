"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./LinkedFlashcard.css");
var FlashcardTab_1 = require("../Flashcard Tab/FlashcardTab");
var Flashcard_1 = require("../Flashcard/Flashcard");
var LinkedFlashcard = function (_a) {
    var width = _a.width;
    var _b = react_1.useState(false), linkedFlashcard = _b[0], setLinkedFlashcard = _b[1];
    var handleFlashcard = function () {
        setLinkedFlashcard(function (prevState) { return !prevState; });
    };
    return (react_1["default"].createElement("div", { className: "linkedFlashcard", style: { width: width } },
        react_1["default"].createElement(FlashcardTab_1["default"], { handleClick: handleFlashcard }),
        linkedFlashcard ? react_1["default"].createElement(Flashcard_1["default"], { link: true }) : null));
};
exports["default"] = LinkedFlashcard;
