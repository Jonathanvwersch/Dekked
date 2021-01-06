"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("../../../Buttons/Button/Button");
require("./Account.css");
var ChangePassword_1 = require("../ChangePassword/ChangePassword");
var Portal_1 = require("../../../General/Portal/Portal");
var Account = function () {
    var _a = react_1.useState(false), changePassword = _a[0], setChangePassword = _a[1];
    var handleChangePassword = function () {
        setChangePassword(function (prevState) { return !prevState; });
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "account" },
            react_1["default"].createElement("h3", null, "Account"),
            react_1["default"].createElement("div", { id: "accountAvatarContainer" },
                react_1["default"].createElement("span", { className: "p1" }, "Avatar"),
                react_1["default"].createElement("div", { id: "accountAvatarButton" },
                    react_1["default"].createElement("div", { id: "accountAvatar" }),
                    react_1["default"].createElement(Button_1["default"], { type: "secondary", action: "Upload" }))),
            react_1["default"].createElement("div", { id: "accountPersonalInfo" },
                react_1["default"].createElement("span", { className: "p1" }, "Personal Info"),
                react_1["default"].createElement("div", { id: "accountInput" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { htmlFor: "firstName", className: "p3 grey" }, "First name"),
                        react_1["default"].createElement("input", { id: "firstName", type: "text" })),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { htmlFor: "lastName", className: "p3 grey" }, "Last name"),
                        react_1["default"].createElement("input", { id: "lastName", type: "text" })))),
            react_1["default"].createElement("div", { id: "accountPassword" },
                react_1["default"].createElement("span", { className: "p1" }, "Password"),
                react_1["default"].createElement(Button_1["default"], { handleClick: handleChangePassword, type: "secondary", action: "Change password" }))),
        changePassword ? (react_1["default"].createElement(Portal_1["default"], { handleState: handleChangePassword, state: changePassword, lightbox: true, center: true, close: true },
            react_1["default"].createElement(ChangePassword_1["default"], { handleState: handleChangePassword }))) : null));
};
exports["default"] = Account;
