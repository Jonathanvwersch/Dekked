"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("../../../Buttons/Button/Button");
require("./Account.css");
var ChangePassword_1 = require("../ChangePassword/ChangePassword");
var Account = function () {
    var _a = react_1.useState(false), changePassword = _a[0], setChangePassword = _a[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "account" },
            react_1["default"].createElement("h3", null, "Account"),
            react_1["default"].createElement("div", { className: "accountAvatarContainer" },
                react_1["default"].createElement("span", { className: "p1" }, "Avatar"),
                react_1["default"].createElement("div", { className: "accountAvatarButton" },
                    react_1["default"].createElement("div", { className: "accountAvatar" }),
                    react_1["default"].createElement(Button_1["default"], { type: "secondary", action: "Upload" }))),
            react_1["default"].createElement("div", { className: "accountPersonalInfo" },
                react_1["default"].createElement("span", { className: "p1" }, "Personal Info"),
                react_1["default"].createElement("div", { className: "accountInput" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { htmlFor: "firstName", className: "p3 grey" }, "First name"),
                        react_1["default"].createElement("input", { className: "firstName", type: "text" })),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { htmlFor: "lastName", className: "p3 grey" }, "Last name"),
                        react_1["default"].createElement("input", { className: "lastName", type: "text" })))),
            react_1["default"].createElement("div", { className: "accountPassword" },
                react_1["default"].createElement("span", { className: "p1" }, "Password"),
                react_1["default"].createElement(Button_1["default"], { handleClick: function () { return setChangePassword(true); }, type: "secondary", action: "Change password" }))),
        react_1["default"].createElement(ChangePassword_1["default"], { handleChangePassword: function () { return setChangePassword(false); }, changePassword: changePassword })));
};
exports["default"] = Account;
