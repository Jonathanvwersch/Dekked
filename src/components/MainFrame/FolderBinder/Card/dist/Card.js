"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Card.css");
var binder_svg_1 = require("../../../../custom-icons/binder.svg");
var studyset_svg_1 = require("../../../../custom-icons/studyset.svg");
var Card = function (_a) {
    var name = _a.name, type = _a.type, iconColour = _a.iconColour, bottomText = _a.bottomText, clicked = _a.clicked, handleClick = _a.handleClick;
    var date = new Date();
    var dateOptions = {
        year: "numeric",
        month: "short",
        day: "numeric"
    };
    return (react_1["default"].createElement("div", { className: clicked ? "dekked-card clicked" : "dekked-card", role: "button", onClick: handleClick },
        react_1["default"].createElement("div", { className: "cardThumbnail" }),
        react_1["default"].createElement("div", { className: "cardDescription" },
            react_1["default"].createElement("span", { className: "p2 cardName" },
                name,
                " "),
            react_1["default"].createElement("div", { className: "cardDate" },
                type ? (type === "binder" ? (react_1["default"].createElement(binder_svg_1.ReactComponent, { className: "icon " + type, stroke: iconColour })) : (react_1["default"].createElement(studyset_svg_1.ReactComponent, { className: "icon " + type, stroke: iconColour }))) : null,
                react_1["default"].createElement("span", { className: "p3 grey" }, bottomText
                    ? bottomText
                    : "Created " + date.toLocaleString("en-US", dateOptions))))));
};
exports["default"] = Card;
