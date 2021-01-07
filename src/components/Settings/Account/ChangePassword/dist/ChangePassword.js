"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./ChangePassword.css");
var Button_1 = require("../../../Buttons/Button/Button");
var ChangePassword = function (_a) {
    var handleState = _a.handleState;
    return (react_1["default"].createElement("div", { className: "dekked-passwordModalContainer" },
        react_1["default"].createElement("div", { className: "dekked-passwordModal" },
            react_1["default"].createElement("div", { className: "passwordInput" },
                react_1["default"].createElement("label", { className: "p3 grey", htmlFor: "currentPasswordInput" }, "Current password"),
                react_1["default"].createElement("input", { id: "currentPasswordInput", type: "text" })),
            react_1["default"].createElement("div", { className: "passwordInput" },
                react_1["default"].createElement("label", { className: "p3 grey", htmlFor: "newPasswordInput" }, "New password"),
                react_1["default"].createElement("input", { id: "newPasswordInput", type: "text" })),
            react_1["default"].createElement("div", { className: "passwordInput" },
                react_1["default"].createElement("label", { className: "p3 grey", htmlFor: "confirmPasswordInput" }, "Confirm new password"),
                react_1["default"].createElement("input", { id: "confirmPasswordInput", type: "text" })),
            react_1["default"].createElement("span", { id: "passwordLength", className: "p3" }, "Your password must be atleast eight characters long"),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(Button_1["default"], { type: "primary", action: "Update" })))));
};
exports["default"] = ChangePassword;
