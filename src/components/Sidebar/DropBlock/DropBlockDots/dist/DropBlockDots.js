"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var ColourPicker_1 = require("../../ColourPicker/ColourPicker");
var Block_1 = require("../../../General/Block/Block");
var Portal_1 = require("../../../General/Portal/Portal");
var react_router_dom_1 = require("react-router-dom");
var uuid_1 = require("uuid");
var md_1 = require("react-icons/md");
var DropBlockMenuData_1 = require("./DropBlockMenuData");
var DropBlockDots = function (_a) {
    var item = _a.item, handleFolderBlocks = _a.handleFolderBlocks, folderBlocks = _a.folderBlocks, handleRename = _a.handleRename, handleDelete = _a.handleDelete, handleAddItem = _a.handleAddItem, setIconColour = _a.setIconColour, iconColour = _a.iconColour, studySetIndex = _a.studySetIndex, folderIndex = _a.folderIndex, binderIndex = _a.binderIndex;
    var dropBlockMenuData = item.type === "folder" ? DropBlockMenuData_1.FolderData : item.type === "binder" ? DropBlockMenuData_1.BinderData : DropBlockMenuData_1.StudySetData;
    var _b = react_1.useState({ left: 0, top: 0 }), coords = _b[0], setCoords = _b[1]; // Set mouse coordinates
    var _c = react_1.useState(false), dropdownMenu = _c[0], setDropdownMenu = _c[1]; // Set dropdown menu visibility
    var _d = react_1.useState(false), colourPicker = _d[0], setColourPicker = _d[1]; // Set visibility of colour picker component
    var _e = react_1.useState(0), yPositionOfDropdownMenu = _e[0], setYPositionofDropdownMenu = _e[1]; // Set y position of dropdown menu
    var heightOfDropdownMenu = 30 * dropBlockMenuData.length; // Value is necessary to position dropdown menu based on mouse coordinates
    var heightOfColourPicker = 220; // Value is necessary to position colour picker based on mouse coordinates
    var positionComponents = function (e, itemHeight) {
        var rect = e.target.getBoundingClientRect();
        var bottomValue = window.innerHeight - rect.y; // distance from mouse click to bottom of window
        var topValue = rect.y; // distance from mouse click to top of window
        setYPositionofDropdownMenu(topValue);
        if (bottomValue < 1.5 * heightOfColourPicker &&
            topValue > heightOfColourPicker)
            setYPositionofDropdownMenu(topValue - heightOfColourPicker - 10);
        if (bottomValue < 1.4 * itemHeight && topValue > itemHeight) {
            topValue = rect.y - itemHeight - 10;
        }
        setCoords({
            left: rect.x + rect.width / 2,
            top: topValue
        });
    };
    var handleIconColour = function (type, folderIndex, iconColour, binderIndex, studySetIndex) {
        var newFolderBlocksArray = folderBlocks.slice();
        if (type === "folder") {
            newFolderBlocksArray[folderIndex].iconColour = iconColour;
        }
        else if (type === "binder") {
            newFolderBlocksArray[folderIndex].binders[binderIndex].iconColour = iconColour;
        }
        else if (type === "studySet") {
            newFolderBlocksArray[folderIndex].binders[binderIndex].studySets[studySetIndex].iconColour = iconColour;
        }
        handleFolderBlocks(newFolderBlocksArray);
    };
    var handleColourPicker = function () {
        var newCoords = {
            left: coords.left,
            top: yPositionOfDropdownMenu
        };
        setCoords(newCoords);
        setColourPicker(function (prevState) { return !prevState; });
    };
    var handleDropdownMenu = function (e) {
        positionComponents(e, heightOfDropdownMenu);
        setDropdownMenu(function (prevState) { return !prevState; });
    };
    react_1.useEffect(function () {
        handleIconColour(item.type, folderIndex, iconColour, binderIndex, studySetIndex);
    }, [iconColour]);
    return (react_1["default"].createElement("div", { id: "dropBlockDots" },
        react_1["default"].createElement(md_1.MdMoreHoriz, { className: "icon active dots", onClick: function (e) {
                handleDropdownMenu(e);
            } }),
        dropdownMenu ? (react_1["default"].createElement(Portal_1["default"], { state: dropdownMenu, handleState: function () { return setDropdownMenu(false); } },
            react_1["default"].createElement("div", { onClick: function () { return setDropdownMenu(false); }, className: "dropdownMenu dropBlocks", style: __assign({}, coords) }, dropBlockMenuData.map(function (item) {
                return item.action === "Delete" ? (react_1["default"].createElement(react_router_dom_1.NavLink, { to: {
                        pathname: "/" + folderBlocks[0].type + "/" + folderBlocks[0].id,
                        state: {
                            item: { name: folderBlocks[0].name, type: folderBlocks[0].type },
                            folderIndex: "0"
                        }
                    } },
                    react_1["default"].createElement(Block_1["default"], { handleDelete: handleDelete, handleRename: handleRename, handleColourPicker: handleColourPicker, handleAddItem: handleAddItem, item: item, key: uuid_1.v4() }))) : (react_1["default"].createElement(Block_1["default"], { handleDelete: handleDelete, handleRename: handleRename, handleColourPicker: handleColourPicker, handleAddItem: handleAddItem, item: item, key: uuid_1.v4() }));
            })))) : null,
        colourPicker ? (react_1["default"].createElement(Portal_1["default"], { state: colourPicker, handleState: handleColourPicker },
            react_1["default"].createElement("div", { style: __assign({}, coords), className: "colourPicker" },
                react_1["default"].createElement(ColourPicker_1["default"], { iconColour: iconColour, setIconColour: setIconColour })))) : null));
};
exports["default"] = DropBlockDots;
