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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
require("./App.css");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Sidebar_1 = require("./components/Sidebar/Sidebar");
var MainFrame_1 = require("./components/MainFrame/MainFrame");
var uuid_1 = require("uuid");
var LoadingSpinner_1 = require("./components/General/LoadingSpinner/LoadingSpinner");
var StudyQueueBubble_1 = require("./components/General/StudyQueue/StudyQueueBubble/StudyQueueBubble");
var App = function () {
    var _a = react_1.useState(true), loading = _a[0], setLoading = _a[1];
    react_1.useEffect(function () {
        setLoading(false);
    }, []);
    var _b = react_1.useState(true), sidebar = _b[0], setSidebar = _b[1];
    var _c = react_1.useState(false), hoverbar = _c[0], setHoverbar = _c[1];
    var _d = react_1.useState([]), deletedItems = _d[0], setDeletedItems = _d[1];
    var _e = react_1.useState([
        {
            name: "Welcome to Dekked",
            type: "folder",
            id: "f73932jff8393d",
            iconColour: "#2C2C31",
            isOpen: true,
            binders: [
                {
                    name: "Getting Started",
                    type: "binder",
                    id: "f73932j4fd393d",
                    folderId: "f73932jff8393d",
                    iconColour: "#2C2C31",
                    isOpen: true,
                    studySets: [
                        {
                            name: "Tutorial",
                            type: "studySet",
                            id: "f739338f8f393d",
                            binderId: "f73932j4fd393d",
                            folderId: "f73932jff8393d",
                            iconColour: "#2C2C31",
                            tab: "notes",
                            flashcards: [
                                {
                                    id: "f73932j4fdee3d",
                                    type: "flashcard",
                                    front: "",
                                    back: "",
                                    studySetId: "f739338f8f393d",
                                    binderId: "f73932j4fd393d",
                                    folderId: "f73932jff8393d"
                                },
                            ]
                        },
                    ]
                },
            ]
        },
    ]), folderBlocks = _e[0], setFolderBlocks = _e[1];
    var addFolder = function () {
        var newFolderBlocksArray = folderBlocks.slice();
        var newFolder = {
            name: "",
            type: "folder",
            id: uuid_1.v4(),
            iconColour: "#2C2C31",
            isOpen: false,
            binders: []
        };
        newFolderBlocksArray.push(newFolder);
        handleFolderBlocks(newFolderBlocksArray);
    };
    var addBinder = function (folderIndex) {
        var newBinder = {
            name: "",
            type: "binder",
            id: uuid_1.v4(),
            folderId: folderBlocks[folderIndex].id,
            iconColour: "#2C2C31",
            isOpen: false,
            studySets: []
        };
        var newFolderBlocksArray = folderBlocks.slice();
        newFolderBlocksArray[folderIndex].isOpen = true;
        newFolderBlocksArray[folderIndex].binders.push(newBinder);
        handleFolderBlocks(newFolderBlocksArray);
    };
    var addStudySet = function (folderIndex, binderIndex) {
        var newStudySet = {
            name: "",
            type: "studySet",
            id: uuid_1.v4(),
            binderId: folderBlocks[folderIndex].binders[binderIndex].id,
            folderId: folderBlocks[folderIndex].id,
            iconColour: "#2C2C31",
            tab: "notes",
            flashcards: []
        };
        var newFolderBlocksArray = folderBlocks.slice();
        newFolderBlocksArray[folderIndex].binders[binderIndex].studySets.push(newStudySet);
        newFolderBlocksArray[folderIndex].binders[binderIndex].isOpen = true;
        handleFolderBlocks(newFolderBlocksArray);
    };
    var handleFolderBlocks = function (newFolderBlocksArray) {
        if (newFolderBlocksArray.length === 0)
            addFolderToNewArray(newFolderBlocksArray);
        setFolderBlocks(newFolderBlocksArray);
    };
    var deleteBlock = function (type, folderIndex, binderIndex, studySetIndex) {
        var itemsArray = folderBlocks.slice();
        var deletedItemsArray = __spreadArrays(deletedItems);
        var deleted;
        if (type === "folder") {
            deleted = itemsArray.splice(folderIndex, 1);
        }
        else if (type === "binder") {
            deleted = itemsArray[folderIndex].binders.splice(binderIndex, 1);
        }
        else if (type === "studySet") {
            deleted = itemsArray[folderIndex].binders[binderIndex].studySets.splice(studySetIndex, 1);
        }
        deletedItemsArray.push(convertArrayToObject(deleted).item);
        setDeletedItems(deletedItemsArray);
        handleFolderBlocks(itemsArray);
    };
    var deleteForever = function (index) {
        var deletedItemsArray = deletedItems.slice();
        deletedItemsArray.splice(index, 1);
        setDeletedItems(deletedItemsArray);
    };
    var convertArrayToObject = function (array) {
        var initialValue = {};
        return array.reduce(function (obj, item) {
            return __assign(__assign({}, obj), { item: item });
        }, initialValue);
    };
    var handleNameChange = function (type, folderIndex, blockName, binderIndex, studySetIndex) {
        var newFolderBlocksArray = folderBlocks.slice();
        if (type === "folder") {
            newFolderBlocksArray[folderIndex].name = blockName;
        }
        else if (type === "binder") {
            newFolderBlocksArray[folderIndex].binders[binderIndex].name = blockName;
        }
        else if (type === "studySet") {
            newFolderBlocksArray[folderIndex].binders[binderIndex].studySets[studySetIndex].name = blockName;
        }
        handleFolderBlocks(newFolderBlocksArray);
    };
    var handleSidebar = function () {
        setSidebar(function (prevState) { return !prevState; });
    };
    var addFolderToNewArray = function (newFolderBlocksArray) {
        var newFolder = {
            name: "",
            type: "folder",
            id: uuid_1.v4(),
            iconColour: "#2C2C31",
            isOpen: false,
            binders: []
        };
        newFolderBlocksArray.push(newFolder);
        return newFolderBlocksArray;
    };
    var addBinderToNewArray = function (newFolderBlocksArray, folderIndex) {
        var newBinder = {
            name: "",
            type: "binder",
            id: uuid_1.v4(),
            folderId: newFolderBlocksArray[folderIndex].id,
            iconColour: "#2C2C31",
            isOpen: false,
            studySets: []
        };
        newFolderBlocksArray[folderIndex].binders.push(newBinder);
        return newFolderBlocksArray;
    };
    var handleRestore = function (type, deletedItemIndex) {
        var itemsArray = folderBlocks.slice();
        var findBinderIndexInArray = function (item) {
            return item.id === deletedItems[deletedItemIndex].folderId;
        };
        var findStudySetIndexInArray = function (item) {
            return item.id === deletedItems[deletedItemIndex].binderId;
        };
        if (type === "folder") {
            itemsArray.push(deletedItems[deletedItemIndex]);
        }
        else if (type === "binder") {
            var folderIndex = folderBlocks.findIndex(findBinderIndexInArray);
            if (folderIndex === -1) {
                addFolderToNewArray(itemsArray);
                itemsArray[folderBlocks.length].binders.push(deletedItems[deletedItemIndex]);
                itemsArray[folderBlocks.length].isOpen = true;
            }
            else
                itemsArray[folderIndex].binders.push(deletedItems[deletedItemIndex]);
        }
        else if (type === "studySet") {
            var folderIndex = folderBlocks.findIndex(findBinderIndexInArray);
            if (folderIndex === -1) {
                var updatedArray = addFolderToNewArray(itemsArray);
                addBinderToNewArray(updatedArray, folderBlocks.length);
                updatedArray[folderBlocks.length].binders[0].studySets.push(deletedItems[deletedItemIndex]);
                updatedArray[folderBlocks.length].isOpen = true;
                updatedArray[folderBlocks.length].binders[0].isOpen = true;
            }
            else {
                var binderIndex = folderBlocks[folderIndex].binders.findIndex(findStudySetIndexInArray);
                itemsArray[folderIndex].binders[binderIndex].studySets.push(deletedItems[deletedItemIndex]);
            }
        }
        handleFolderBlocks(itemsArray);
        deleteForever(deletedItemIndex);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null, loading ? (react_1["default"].createElement(LoadingSpinner_1.LoadingSpinner, null)) : (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(Sidebar_1["default"], { sidebar: sidebar, hoverbar: hoverbar, setHoverbar: setHoverbar, handleSidebar: handleSidebar, folderBlocks: folderBlocks, handleFolderBlocks: handleFolderBlocks, handleNameChange: handleNameChange, addFolder: addFolder, addBinder: addBinder, addStudySet: addStudySet, deleteBlock: deleteBlock, deleteForever: deleteForever, handleRestore: handleRestore, deletedItems: deletedItems }),
        react_1["default"].createElement(react_router_dom_1.Switch, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/" },
                react_1["default"].createElement(MainFrame_1["default"], { folderBlocks: folderBlocks, sidebar: sidebar, handleSidebar: handleSidebar, handleNameChange: handleNameChange, handleFolderBlocks: handleFolderBlocks, addBinder: addBinder, addStudySet: addStudySet, setHoverbar: setHoverbar }),
                react_1["default"].createElement(react_router_dom_1.Redirect, { to: {
                        pathname: "/" + folderBlocks[0].type + "/" + folderBlocks[0].id,
                        state: {
                            item: {
                                type: folderBlocks[0].type,
                                name: folderBlocks[0].name,
                                iconColour: folderBlocks[0].iconColour
                            },
                            folderIndex: 0
                        }
                    } }))),
        react_1["default"].createElement(StudyQueueBubble_1["default"], null)))));
};
exports["default"] = App;
