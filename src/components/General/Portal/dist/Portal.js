"use strict";
exports.__esModule = true;
/* Overlay container used to render all popovers and modals */
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var md_1 = require("react-icons/md");
require("./Portal.css");
var CHILD_STYLE = {
    position: "fixed",
    top: "0px",
    left: "0px",
    width: "100vw",
    height: "100vh"
};
var CHILD_STYLE_LIGHTBOX = {
    position: "absolute",
    inset: "0px",
    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
};
var CENTER = {
    position: "relative"
};
var Portal = function (_a) {
    var children = _a.children, state = _a.state, handleState = _a.handleState, _b = _a.lightbox, lightbox = _b === void 0 ? false : _b, // set state of lightbox
    _c = _a.center, // set state of lightbox
    center = _c === void 0 ? false : _c, // center=true will center child item on portal
    _d = _a.close, // center=true will center child item on portal
    close = _d === void 0 ? false : _d;
    return react_dom_1.createPortal(react_1["default"].createElement(react_1["default"].Fragment, null, state ? (react_1["default"].createElement("div", { className: "" + (!center ? "dekked-overlay" : "dekked-overlay center") },
        react_1["default"].createElement("div", { style: !lightbox ? CHILD_STYLE : CHILD_STYLE_LIGHTBOX, onClick: handleState }),
        react_1["default"].createElement("div", { id: "portal-overlay", style: center ? CENTER : null },
            children,
            close ? (react_1["default"].createElement(md_1.MdClose, { onClick: handleState, className: "icon active close" })) : null))) : null), document.getElementById("dekked-overlay-container"));
};
exports["default"] = Portal;
