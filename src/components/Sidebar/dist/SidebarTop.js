"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@iconify/react");
var chevron_double_left_1 = require("@iconify/icons-mdi/chevron-double-left");
var ProfileData_1 = require("./ProfileData");
var Settings_1 = require("../Settings/Settings/Settings");
var Portal_1 = require("../General/Portal/Portal");
require("./SidebarTop.css");
var Block_1 = require("../General/Block/Block");
var md_1 = require("react-icons/md");
var SidebarTop = function (_a) {
    var handleSidebar = _a.handleSidebar, hoverbar = _a.hoverbar;
    var _b = react_1.useState(false), profileMenu = _b[0], setProfileMenu = _b[1];
    var _c = react_1.useState(false), settingsPage = _c[0], setSettingsPage = _c[1];
    var handleSettings = function () {
        setSettingsPage(function (prevState) { return !prevState; });
    };
    var hoverStyleSidebar = {
        top: "110px"
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "sidebarTop" },
            react_1["default"].createElement("div", { className: "profile" },
                react_1["default"].createElement("span", { className: "p1 avatar" }, "J"),
                react_1["default"].createElement("span", { className: "p3" }, "Jane Doe"),
                react_1["default"].createElement(md_1.MdArrowDropDown, { className: "icon active dropDownArrow down", onClick: function () { return setProfileMenu(true); } })),
            !hoverbar ? (react_1["default"].createElement("div", { className: "icon active chevronDoubleLeft", onClick: handleSidebar },
                react_1["default"].createElement(react_2.Icon, { icon: chevron_double_left_1["default"] }))) : null),
        profileMenu ? (react_1["default"].createElement(Portal_1["default"], { state: profileMenu, handleState: function () { return setProfileMenu(false); } },
            react_1["default"].createElement("div", { className: "dropdownMenu settingsMenu", onClick: function () { return setProfileMenu(false); }, style: hoverbar ? hoverStyleSidebar : null }, ProfileData_1.ProfileData.map(function (item, index) {
                return (react_1["default"].createElement(Block_1["default"], { item: item, key: item + " Block " + index, handleSettings: function () {
                        return setSettingsPage(function (prevState) { return !prevState; });
                    } }));
            })))) : null,
        settingsPage ? (react_1["default"].createElement(Portal_1["default"], { state: settingsPage, handleState: handleSettings, lightbox: true, center: true, close: true },
            react_1["default"].createElement(Settings_1["default"], null))) : null));
};
exports["default"] = SidebarTop;
