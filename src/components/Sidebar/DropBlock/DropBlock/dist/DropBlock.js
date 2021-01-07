"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Icons = require("react-icons/md");
require("./DropBlock.css");
var folder_svg_1 = require("../../../../custom-icons/folder.svg");
var binder_svg_1 = require("../../../../custom-icons/binder.svg");
var studyset_svg_1 = require("../../../../custom-icons/studyset.svg");
var react_router_dom_1 = require("react-router-dom");
var DropBlockDots_1 = require("../DropBlockDots/DropBlockDots");
var DropBlock = function (_a) {
    var item = _a.item, folderIndex = _a.folderIndex, binderIndex = _a.binderIndex, studySetIndex = _a.studySetIndex, folderBlocks = _a.folderBlocks, handleFolderBlocks = _a.handleFolderBlocks, handleDelete = _a.handleDelete, handleAddItem = _a.handleAddItem, handleNameChange = _a.handleNameChange;
    var _b = react_1.useState(false), editableName = _b[0], setEditableName = _b[1];
    var _c = react_1.useState(item.iconColour), iconColour = _c[0], setIconColour = _c[1];
    var nameRef = react_1.useRef(null);
    var handleRename = function () {
        // Focus in on name of dropblock when being renamed (i.e. show text cursor)
        setEditableName(function (prevValue) { return !prevValue; });
        setTimeout(function () {
            nameRef.current.focus();
        }, 50);
    };
    react_1.useEffect(function () {
        // Set name of dropblock using data from folder block
        if (editableName === false)
            nameRef.current.innerText = item.name;
    }, [item.name]);
    react_1.useEffect(function () {
        var updateEditableName = function (e) {
            // When user clicks away from name, make sure the beginning of the name is shown
            if (nameRef.current) {
                nameRef.current.addEventListener("blur", function () {
                    nameRef.current.scrollLeft = "0px";
                });
            }
            // If user clicks outside of name of dropblock, turn off editability of name
            if (editableName === true) {
                if (!nameRef.current.contains(e.target)) {
                    setEditableName(function (prevValue) { return !prevValue; });
                }
            }
        };
        document.addEventListener("click", updateEditableName);
        return function () {
            document.removeEventListener("click", updateEditableName);
        };
    }, [editableName]);
    var openDropBlock = function (type, folderIndex, binderIndex) {
        var newFolderBlocksArray = folderBlocks.slice();
        if (type === "folder")
            newFolderBlocksArray[folderIndex].isOpen = !newFolderBlocksArray[folderIndex].isOpen;
        else {
            newFolderBlocksArray[folderIndex].binders[binderIndex].isOpen = !newFolderBlocksArray[folderIndex].binders[binderIndex].isOpen;
        }
        handleFolderBlocks(newFolderBlocksArray);
    };
    return (react_1["default"].createElement("div", { className: "dekked-dropBlockContainer" },
        react_1["default"].createElement(react_router_dom_1.NavLink, { activeStyle: {
                background: "var(--off-beige-clicked)",
                fontWeight: "bold"
            }, to: {
                pathname: "" + (item.type === "studySet"
                    ? "/" + item.type + "/" + item.tab + "/" + item.id
                    : "/" + item.type + "/" + item.id),
                state: {
                    item: { type: item.type, name: item.name, tab: item.tab },
                    folderIndex: folderIndex,
                    binderIndex: binderIndex,
                    studySetIndex: studySetIndex
                }
            } },
            react_1["default"].createElement("div", { role: "button", className: "dekked-dropBlock " + item.type },
                item.type !== "studySet" ? (react_1["default"].createElement("div", { className: item.isOpen
                        ? "icon active dropDownArrow down"
                        : "icon active dropDownArrow right", onClick: function () {
                        openDropBlock(item.type, folderIndex, binderIndex);
                    } },
                    react_1["default"].createElement(Icons.MdArrowDropDown, null))) : null,
                react_1["default"].createElement("div", { className: "icon " + item.type }, item.type === "folder" ? (react_1["default"].createElement(folder_svg_1.ReactComponent, { fill: iconColour })) : item.type === "binder" ? (react_1["default"].createElement(binder_svg_1.ReactComponent, { stroke: iconColour })) : (react_1["default"].createElement(studyset_svg_1.ReactComponent, { stroke: iconColour }))),
                react_1["default"].createElement("span", { ref: nameRef, spellCheck: "false", onKeyDown: function (e) {
                        if (e.key === "Enter") {
                            setEditableName(function (prevValue) { return !prevValue; });
                        }
                        setTimeout(function () {
                            handleNameChange(item.type, folderIndex, nameRef.current.innerText, binderIndex, studySetIndex);
                        }, 100);
                    }, contentEditable: editableName, className: "p2" }))),
        react_1["default"].createElement(DropBlockDots_1["default"], { item: item, handleFolderBlocks: handleFolderBlocks, handleRename: handleRename, handleDelete: handleDelete, handleAddItem: handleAddItem, setIconColour: setIconColour, iconColour: iconColour, folderBlocks: folderBlocks, studySetIndex: studySetIndex, folderIndex: folderIndex, binderIndex: binderIndex })));
};
exports["default"] = DropBlock;
