"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Portal_1 = require("../../General/Portal/Portal");
var Block_1 = require("../../General/Block/Block");
var DeletedBlock_1 = require("../DeletedBlock/DeletedBlock");
require("./SidebarBottom.css");
var Icons = require("react-icons/md");
var react_2 = require("@iconify/react");
var trash_can_outline_1 = require("@iconify/icons-mdi/trash-can-outline");
var SidebarBottom = function (_a) {
    var addFolder = _a.addFolder, deleteForever = _a.deleteForever, handleRestore = _a.handleRestore, deletedItems = _a.deletedItems, hoverbar = _a.hoverbar;
    var _b = react_1.useState(false), trashCan = _b[0], setTrashCan = _b[1];
    var hoverStyleSidebar = {
        top: "243px"
    };
    return (react_1["default"].createElement("div", { className: "sidebarBottom" },
        react_1["default"].createElement(Block_1["default"], { item: {
                action: "Trash",
                icon: react_1["default"].createElement(react_2.Icon, { className: "icon trash", icon: trash_can_outline_1["default"] })
            }, handleTrash: function () { return setTrashCan(true); } }),
        trashCan ? (react_1["default"].createElement(Portal_1["default"], { state: trashCan, handleState: function () { return setTrashCan(false); } },
            react_1["default"].createElement("div", { className: "dropdownMenu deleteBlockContainer", style: hoverbar ? hoverStyleSidebar : null }, deletedItems.length === 0 ? (react_1["default"].createElement("span", { className: "p2 grey noItems" }, "No items inside")) : (deletedItems.map(function (item, index) { return (react_1["default"].createElement(DeletedBlock_1["default"], { name: item.name, type: item.type, key: item.id, iconColour: item.iconColour, handleDeleteForever: function () {
                    deleteForever(index);
                }, handleRestore: function () {
                    handleRestore(item.type, index);
                } })); }))))) : null,
        react_1["default"].createElement("div", { className: "addBlock", onClick: addFolder },
            react_1["default"].createElement(Icons.MdAdd, { className: "icon plus" }),
            react_1["default"].createElement("span", { className: "p1" }, "Add folder"))));
};
exports["default"] = SidebarBottom;
