"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Icons = require("react-icons/md");
var folder_svg_1 = require("../../custom-icons/folder.svg");
var binder_svg_1 = require("../../custom-icons/binder.svg");
var studyset_svg_1 = require("../../custom-icons/studyset.svg");
require("./DeletedBlock.css");
var Portal_1 = require("../General/Portal/Portal");
var DeleteModal_1 = require("../General/DeleteModal/DeleteModal");
var DeletedBlock = function (_a) {
    var name = _a.name, type = _a.type, iconColour = _a.iconColour, handleDeleteForever = _a.handleDeleteForever, handleRestore = _a.handleRestore;
    var _b = react_1.useState(false), deleteModal = _b[0], setDeleteModal = _b[1];
    var handleDeleteModal = function () {
        setDeleteModal(function (prevValue) { return !prevValue; });
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "dekked-deletedBlock p2", role: "button" },
            react_1["default"].createElement("div", { style: { display: "flex" } },
                type === "folder" ? (react_1["default"].createElement(folder_svg_1.ReactComponent, { className: "icon " + type, fill: iconColour })) : type === "binder" ? (react_1["default"].createElement(binder_svg_1.ReactComponent, { className: "icon " + type, stroke: iconColour })) : (react_1["default"].createElement(studyset_svg_1.ReactComponent, { className: "icon " + type, stroke: iconColour })),
                react_1["default"].createElement("span", null, name ? name : "Untitled")),
            react_1["default"].createElement("div", { style: { display: "flex" } },
                react_1["default"].createElement(Icons.MdUndo, { className: "icon active restore", style: { marginLeft: "4px" }, onClick: handleRestore }),
                react_1["default"].createElement(Icons.MdDeleteForever, { className: "icon active deleteForever", style: { marginLeft: "0px" }, onClick: handleDeleteModal }))),
        deleteModal ? (react_1["default"].createElement(Portal_1["default"], { state: deleteModal, handleState: handleDeleteModal, center: true, close: true, lightbox: true },
            react_1["default"].createElement(DeleteModal_1["default"], { handleDelete: function () {
                    handleDeleteForever();
                    handleDeleteModal();
                }, handleCancel: handleDeleteModal }))) : null));
};
exports["default"] = DeletedBlock;
