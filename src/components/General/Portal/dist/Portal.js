"use strict";
exports.__esModule = true;
/* Overlay container used to render all popovers and modals */
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var md_1 = require("react-icons/md");
require("./Portal.css");
var Portal = function (_a) {
    var children = _a.children, state = _a.state, handleState = _a.handleState, _b = _a.lightbox, lightbox = _b === void 0 ? false : _b, // set state of lightbox
    _c = _a.center, // set state of lightbox
    center = _c === void 0 ? false : _c, // center=true will center child item on portal
    _d = _a.close, // center=true will center child item on portal
    close = _d === void 0 ? false : _d;
    function handleEscape(e) {
        handleState();
    }
    react_1.useEffect(function () {
        document.addEventListener("keydown", handleEscape);
    }, []);
    return react_dom_1.createPortal(react_1["default"].createElement(react_1["default"].Fragment, null, state ? (react_1["default"].createElement("div", { className: "" + (!center ? "dekked-overlay" : "dekked-overlay center") },
        react_1["default"].createElement("div", { className: "" + (!lightbox ? "lightBoxOff" : "lightBoxOn"), onClick: handleState }),
        react_1["default"].createElement("div", { id: "portal-overlay", className: "" + (!close ? "childStyle" : "childStyle closed") },
            children,
            close ? (react_1["default"].createElement(md_1.MdClose, { onClick: handleState, className: "icon active close" })) : null))) : null), document.getElementById("dekked-overlay-container"));
};
exports["default"] = Portal;
