"use strict";
exports.__esModule = true;
exports.StudySetTabs = void 0;
var react_1 = require("react");
var react_router_1 = require("react-router");
var react_router_dom_1 = require("react-router-dom");
require("./StudySetTabs.css");
exports.StudySetTabs = function (_a) {
    var folderBlocks = _a.folderBlocks;
    var location = react_router_1.useLocation();
    return (react_1["default"].createElement("div", { className: "studySetSwitcher" }, location.state ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_router_dom_1.NavLink, { activeStyle: {
                textDecoration: "underline",
                textDecorationColor: "var(--primary-color)",
                color: "var(--main-black)!important",
                fontWeight: "bold",
                textDecorationThickness: "2px"
            }, to: {
                pathname: "/studySet/notes/" + folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].studySets[location.state.studySetIndex].id,
                state: {
                    item: { name: location.state.item.name, type: location.state.item.type, tab: "notes" },
                    folderIndex: location.state.folderIndex,
                    binderIndex: location.state.binderIndex,
                    studySetIndex: location.state.studySetIndex
                }
            } },
            react_1["default"].createElement("span", { className: "p1" }, "Notes")),
        react_1["default"].createElement(react_router_dom_1.NavLink, { activeStyle: {
                textDecoration: "underline",
                textDecorationColor: "var(--primary-color)",
                color: "var(--main-black)",
                fontWeight: "bold",
                textDecorationThickness: "2px"
            }, to: {
                pathname: "/studySet/flashcards/" + folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].studySets[location.state.studySetIndex].id,
                state: {
                    item: { name: location.state.item.name, type: location.state.item.type, tab: "flashcards" },
                    folderIndex: location.state.folderIndex,
                    binderIndex: location.state.binderIndex,
                    studySetIndex: location.state.studySetIndex
                }
            } },
            react_1["default"].createElement("span", { className: "p1" }, "Flashcards")))) : null));
};
