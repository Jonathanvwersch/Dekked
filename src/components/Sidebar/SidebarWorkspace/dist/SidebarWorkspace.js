"use strict";
exports.__esModule = true;
exports.SidebarWorkspace = void 0;
var react_1 = require("react");
var DropBlock_1 = require("../DropBlock/DropBlock/DropBlock");
require("./SidebarWorkspace.css");
exports.SidebarWorkspace = function (_a) {
    var folderBlocks = _a.folderBlocks, handleNameChange = _a.handleNameChange, handleFolderBlocks = _a.handleFolderBlocks, deleteBlock = _a.deleteBlock, addBinder = _a.addBinder, addStudySet = _a.addStudySet;
    return (react_1["default"].createElement("div", { className: "workspace" },
        react_1["default"].createElement("span", { className: "p2 grey title" }, "Workspace"),
        react_1["default"].createElement("div", { className: "folderBlocks" }, folderBlocks.map(function (folder, folderIndex) { return (react_1["default"].createElement("div", { key: folder.id, className: "folderBlock" },
            react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(DropBlock_1["default"], { item: folder, folderIndex: folderIndex, key: folder.id, handleDelete: function () { return deleteBlock(folder.type, folderIndex); }, handleAddItem: function () { return addBinder(folderIndex); }, handleNameChange: handleNameChange, folderBlocks: folderBlocks, handleFolderBlocks: handleFolderBlocks })),
            folder.isOpen ? (folder.binders.length === 0 ? (react_1["default"].createElement("span", { className: "p2 grey noItems" }, "No binders inside")) : (folder.binders.map(function (binder, binderIndex) { return (react_1["default"].createElement("div", { key: binder.id, className: "binderBlock" },
                react_1["default"].createElement(DropBlock_1["default"], { item: binder, key: binder.id, handleDelete: function () {
                        return deleteBlock(binder.type, folderIndex, binderIndex);
                    }, folderIndex: folderIndex, binderIndex: binderIndex, handleAddItem: function () {
                        return addStudySet(folderIndex, binderIndex);
                    }, handleNameChange: handleNameChange, folderBlocks: folderBlocks, handleFolderBlocks: handleFolderBlocks }),
                binder.isOpen ? (binder.studySets.length === 0 ? (react_1["default"].createElement("span", { className: "p2 noItems studySets" }, "No study sets inside")) : (binder.studySets.map(function (studySet, studySetIndex) { return (react_1["default"].createElement("div", { key: studySet.id, className: "studySetBlock" },
                    react_1["default"].createElement(DropBlock_1["default"], { item: studySet, key: studySet.id, folderIndex: folderIndex, binderIndex: binderIndex, studySetIndex: studySetIndex, handleDelete: function () {
                            return deleteBlock(studySet.type, folderIndex, binderIndex, studySetIndex);
                        }, handleNameChange: handleNameChange, folderBlocks: folderBlocks, handleFolderBlocks: handleFolderBlocks }))); }))) : null)); }))) : null)); }))));
};
