"use strict";
exports.__esModule = true;
exports.Breadcrumbs = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var binder_svg_1 = require("../../../../custom-icons/binder.svg");
var studyset_svg_1 = require("../../../../custom-icons/studyset.svg");
var folder_svg_1 = require("../../../../custom-icons/folder.svg");
var react_router_dom_2 = require("react-router-dom");
require("./Breadcrumbs.css");
exports.Breadcrumbs = function (_a) {
    var folderBlocks = _a.folderBlocks;
    var location = react_router_dom_1.useLocation();
    return (react_1["default"].createElement("div", { className: "breadcrumbs" }, location.state ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_router_dom_2.NavLink, { to: {
                pathname: "/" + folderBlocks[location.state.folderIndex].type + "/" + folderBlocks[location.state.folderIndex].id,
                state: {
                    type: folderBlocks[location.state.folderIndex].type,
                    folderIndex: location.state.folderIndex,
                    name: location.state.name,
                    tab: location.state.tab
                }
            } },
            react_1["default"].createElement(folder_svg_1.ReactComponent, { className: "icon folder", fill: folderBlocks[location.state.folderIndex].iconColour }),
            react_1["default"].createElement("span", { className: "p2" }, folderBlocks[location.state.folderIndex].name
                ? folderBlocks[location.state.folderIndex].name
                : "Untitled")),
        location.state.type === "binder" ||
            location.state.type === "studySet" ? (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("span", { id: "slash" }, "/"),
            react_1["default"].createElement(react_router_dom_2.NavLink, { to: {
                    pathname: "/" + folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].type + "/" + folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].id,
                    state: {
                        type: folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].type,
                        folderIndex: location.state.folderIndex,
                        binderIndex: location.state.binderIndex,
                        name: location.state.name,
                        tab: location.state.tab
                    }
                } },
                react_1["default"].createElement(binder_svg_1.ReactComponent, { className: "icon binder", stroke: folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].iconColour }),
                react_1["default"].createElement("span", { className: "p2" }, folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].name
                    ? folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].name
                    : "Untitled")),
            location.state.type === "studySet" ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("span", { id: "slash" }, "/"),
                react_1["default"].createElement(react_router_dom_2.NavLink, { to: {
                        pathname: "/" + folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].studySets[location.state.studySetIndex].type + "/" + folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].studySets[location.state.studySetIndex].tab + "/" + folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].studySets[location.state.studySetIndex].id,
                        state: {
                            type: folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].studySets[location.state.studySetIndex].type,
                            folderIndex: location.state.folderIndex,
                            binderIndex: location.state.binderIndex,
                            studySetIndex: location.state.studySetIndex,
                            name: location.state.name,
                            tab: location.state.tab
                        }
                    } },
                    react_1["default"].createElement(studyset_svg_1.ReactComponent, { className: "icon", stroke: folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].studySets[location.state.studySetIndex].iconColour }),
                    react_1["default"].createElement("span", { className: "p2" }, folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].studySets[location.state.studySetIndex].name
                        ? folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].studySets[location.state.studySetIndex].name
                        : "Untitled")))) : null)) : null)) : null));
};
