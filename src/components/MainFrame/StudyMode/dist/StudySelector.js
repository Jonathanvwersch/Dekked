"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("../../Buttons/Button/Button");
var Card_1 = require("../FolderBinder/Card/Card");
require("./StudySelector.css");
var StudySelector = function () {
    var _a = react_1.useState(false), CardOneState = _a[0], setCardOneState = _a[1];
    var _b = react_1.useState(false), CardTwoState = _b[0], setCardTwoState = _b[1];
    var _c = react_1.useState(true), buttonState = _c[0], setButtonState = _c[1];
    var handleCardOneClick = function () {
        setCardOneState(true);
        setButtonState(false);
        if (CardTwoState)
            setCardTwoState(false);
    };
    var handleCardTwoClick = function () {
        setCardTwoState(true);
        setButtonState(false);
        if (CardOneState)
            setCardOneState(false);
    };
    return (react_1["default"].createElement("div", { id: "dekked-studySelector" },
        react_1["default"].createElement("h3", null, "Choose your study mode"),
        react_1["default"].createElement("div", { id: "card-formatting" },
            react_1["default"].createElement(Card_1["default"], { clicked: CardOneState, name: "Spaced Repetition", bottomText: "Interval studying", handleClick: handleCardOneClick }),
            react_1["default"].createElement(Card_1["default"], { clicked: CardTwoState, name: "Free", bottomText: "Linear studying", handleClick: handleCardTwoClick })),
        react_1["default"].createElement(Button_1["default"], { disabled: buttonState, type: "primary", action: "Study" })));
};
exports["default"] = StudySelector;
