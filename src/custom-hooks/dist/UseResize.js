"use strict";
exports.__esModule = true;
exports.useResize = void 0;
var react_1 = require("react");
function useResize(myRef, sidebar) {
    var _a = react_1.useState({ width: 0, height: 0 }), dimensions = _a[0], setDimensions = _a[1];
    react_1.useLayoutEffect(function () {
        var getDimensions = function () { return ({
            width: (myRef && myRef.current.offsetWidth) || 0,
            height: (myRef && myRef.current.offsetHeight) || 0
        }); };
        var handleResize = function () {
            setDimensions(getDimensions());
        };
        if (myRef.current) {
            setDimensions(getDimensions());
        }
        window.addEventListener("resize", handleResize);
        return function () {
            window.removeEventListener("resize", handleResize);
        };
    }, [myRef, sidebar]);
    return dimensions;
}
exports.useResize = useResize;
