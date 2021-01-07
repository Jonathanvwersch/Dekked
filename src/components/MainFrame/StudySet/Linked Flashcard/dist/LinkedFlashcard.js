"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./LinkedFlashcard.css");
var FlashcardTab_1 = require("../Flashcard Tab/FlashcardTab");
var Flashcard_1 = require("../Flashcard/Flashcard");
var LinkedFlashcard = function () {
    var _a = react_1.useState(false), linkedFlashcard = _a[0], setLinkedFlashcard = _a[1];
    var handleFlashcard = function () {
        setLinkedFlashcard(function (prevState) { return !prevState; });
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(FlashcardTab_1["default"], { handleClick: handleFlashcard }),
        linkedFlashcard ? (react_1["default"].createElement("div", { style: {
                width: "100%",
                height: "100%",
                background: "var(--off-beige)",
                borderRadius: "5px"
            } },
            react_1["default"].createElement(Flashcard_1["default"], { link: true }))) : null));
};
exports["default"] = LinkedFlashcard;
