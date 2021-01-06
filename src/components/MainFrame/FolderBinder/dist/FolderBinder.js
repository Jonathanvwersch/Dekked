"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AddCard_1 = require("./AddCard");
var react_router_1 = require("react-router");
var react_router_dom_1 = require("react-router-dom");
var Card_1 = require("./Card");
var Button_1 = require("../../Buttons/Button/Button");
var uuid_1 = require("uuid");
var PageTitle_1 = require("../PageTitle/PageTitle");
var FolderBinder = function (_a) {
    var folderBlocks = _a.folderBlocks, handleNameChange = _a.handleNameChange, addStudySet = _a.addStudySet, addBinder = _a.addBinder;
    var location = react_router_1.useLocation();
    var titleRef = react_1.useRef(null);
    react_1.useEffect(function () {
        if (location.state && document.activeElement !== titleRef.current) {
            titleRef.current.innerText = location.state.name;
        }
    }, [folderBlocks, location.state]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, location.state ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "dekked-pageHeaderContainer" },
            react_1["default"].createElement("div", { className: "dekked-pageHeader" },
                react_1["default"].createElement(PageTitle_1.PageTitle, { titleRef: titleRef, handleNameChange: handleNameChange }),
                react_1["default"].createElement("div", { className: "buttonQuantity" },
                    react_1["default"].createElement("span", { className: "p2" }, location.state
                        ? location.state.type === "folder"
                            ? folderBlocks[location.state.folderIndex].binders
                                .length + " Binder(s)"
                            : folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].studySets.length + " Study set(s)"
                        : null),
                    react_1["default"].createElement(Button_1["default"], { type: "primary", action: "Study", disabled: true })))),
        react_1["default"].createElement("div", { className: "dekked-pageContentContainer" },
            react_1["default"].createElement("div", { className: "dekked-pageContent" },
                react_1["default"].createElement(AddCard_1["default"], { handleClick: function () {
                        location.state.type === "folder"
                            ? addBinder(location.state.folderIndex)
                            : addStudySet(location.state.folderIndex, location.state.binderIndex);
                    } }),
                location.state.type === "folder"
                    ? folderBlocks[location.state.folderIndex].binders.map(function (item, index) { return (react_1["default"].createElement(react_router_dom_1.NavLink, { to: {
                            pathname: "/" + item.type + "/" + item.id,
                            state: {
                                type: item.type,
                                name: item.name,
                                folderIndex: location.state.folderIndex,
                                binderIndex: index
                            }
                        } },
                        react_1["default"].createElement(Card_1["default"], { key: uuid_1.v4(), name: item.name ? item.name : "Untitled", type: item.type, iconColour: item.iconColour }))); })
                    : folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].studySets.map(function (item, index) { return (react_1["default"].createElement(react_router_dom_1.NavLink, { to: {
                            pathname: "/" + item.type + "/" + item.tab + "/" + item.id,
                            state: {
                                type: item.type,
                                name: item.name,
                                folderIndex: location.state.folderIndex,
                                binderIndex: location.state.binderIndex,
                                studySetIndex: index,
                                tab: item.tab
                            }
                        } },
                        react_1["default"].createElement(Card_1["default"], { key: uuid_1.v4(), name: item.name ? item.name : "Untitled", type: item.type, iconColour: item.iconColour }))); }))))) : null));
};
exports["default"] = FolderBinder;
