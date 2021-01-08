"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("../../Buttons/Button/Button");
var Portal_1 = require("../Portal/Portal");
require("./DeleteModal.css");
var DeleteModal = function (_a) {
    var handleDelete = _a.handleDelete, handleCancel = _a.handleCancel, handleDeleteModal = _a.handleDeleteModal, deleteModal = _a.deleteModal;
    return deleteModal ? (react_1["default"].createElement(Portal_1["default"], { state: deleteModal, handleState: handleDeleteModal, center: true, close: true, lightbox: true },
        react_1["default"].createElement("div", { className: "dekked-deleteModal" },
            react_1["default"].createElement("h3", null, "Are you sure?"),
            react_1["default"].createElement("span", { className: "p1" }, "This action cannot be undone."),
            react_1["default"].createElement("div", { className: "deleteModalButtons" },
                react_1["default"].createElement(Button_1["default"], { type: "secondary", action: "Cancel", handleClick: handleCancel }),
                react_1["default"].createElement(Button_1["default"], { type: "tertiary", action: "Delete", handleClick: handleDelete }))))) : null;
};
exports["default"] = DeleteModal;
