"use strict";
exports.__esModule = true;
exports.PageTitle = void 0;
var react_1 = require("react");
require("./PageTitle.css");
var react_router_1 = require("react-router");
exports.PageTitle = function (_a) {
    var folderBlocks = _a.folderBlocks, handleNameChange = _a.handleNameChange;
    var location = react_router_1.useLocation();
    var type = location.state.item.type;
    var titleRef = react_1.useRef(null);
    react_1.useEffect(function () {
        if (document.activeElement !== titleRef.current) {
            if (type === "folder")
                titleRef.current.innerText =
                    folderBlocks[location.state.folderIndex].name;
            else if (type === "binder")
                titleRef.current.innerText =
                    folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].name;
            else if (type === "studySet")
                titleRef.current.innerText =
                    folderBlocks[location.state.folderIndex].binders[location.state.binderIndex].studySets[location.state.studySetIndex].name;
        }
    }, [folderBlocks, location.state, type]);
    return (react_1["default"].createElement("div", { className: "pageTitle h2 bold", onDragOver: function (e) {
            e.preventDefault();
        }, onPaste: function (e) {
            e.preventDefault();
            return false;
        }, contentEditable: true, ref: titleRef, spellCheck: false, onKeyDown: function (e) {
            if (location.state) {
                if (e.key === "Enter") {
                    e.preventDefault();
                }
                setTimeout(function () {
                    handleNameChange(location.state.item.type, location.state.folderIndex, titleRef.current.innerText, location.state.binderIndex, location.state.studySetIndex);
                }, 100);
            }
        } }));
};
