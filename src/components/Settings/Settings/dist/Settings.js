"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("../../Buttons/Button/Button");
var Block_1 = require("../../General/Block/Block");
var Account_1 = require("../Account/Account/Account");
require("./Settings.css");
var SettingsData_1 = require("./SettingsData");
var Settings = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "dekked-settings" },
            react_1["default"].createElement("div", { className: "dekked-settingsSidebar" },
                react_1["default"].createElement("span", { className: "p2 title" }, "Settings"),
                SettingsData_1.SettingsData.map(function (item, index) { return (react_1["default"].createElement(Block_1["default"], { item: item, key: item.id })); })),
            react_1["default"].createElement("div", { className: "dekked-settingsMainFrame" },
                react_1["default"].createElement("div", { id: "settingsContent" },
                    react_1["default"].createElement(Account_1["default"], null)),
                react_1["default"].createElement("div", { id: "saveChanges" },
                    react_1["default"].createElement(Button_1["default"], { type: "primary", action: "Save changes" }))))));
};
exports["default"] = Settings;
