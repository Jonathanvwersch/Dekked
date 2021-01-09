"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./ChangePassword.css");
var Button_1 = require("../../../Buttons/Button/Button");
var Portal_1 = require("../../../General/Portal/Portal");
var ChangePassword = function (_a) {
    var handleChangePassword = _a.handleChangePassword, changePassword = _a.changePassword;
    return changePassword ? (react_1["default"].createElement(Portal_1["default"], { handleState: handleChangePassword, state: changePassword, lightbox: true, center: true, close: true },
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
            react_1["default"].createElement("span", { className: "p3 passwordLength" }, "Your password must be atleast eight characters long"),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(Button_1["default"], { type: "primary", action: "Update" }))))) : null;
};
exports["default"] = ChangePassword;
