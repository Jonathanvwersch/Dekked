"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./TopBar.css");
var md_1 = require("react-icons/md");
var Breadcrumbs_1 = require("./Breadcrumbs/Breadcrumbs");
var TopBar = function (_a) {
    var sidebar = _a.sidebar, handleSidebar = _a.handleSidebar, folderBlocks = _a.folderBlocks, setHoverbar = _a.setHoverbar;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "dekked-topBar" },
            !sidebar ? (react_1["default"].createElement("div", null,
                react_1["default"].createElement(md_1.MdMenu, { className: "icon active hamburgerMenu", onClick: function () { handleSidebar(); setHoverbar(false); } }))) : null,
            react_1["default"].createElement(Breadcrumbs_1.Breadcrumbs, { folderBlocks: folderBlocks }))));
};
exports["default"] = TopBar;
