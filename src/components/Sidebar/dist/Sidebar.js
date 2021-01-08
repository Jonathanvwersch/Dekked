"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Sidebar.css");
var SidebarTop_1 = require("./SidebarTop/SidebarTop");
var SidebarBottom_1 = require("./SidebarBottom/SidebarBottom");
var useMousePosition_1 = require("../../custom-hooks/useMousePosition");
var SidebarWorkspace_1 = require("./SidebarWorkspace/SidebarWorkspace");
var Sidebar = function (_a) {
    var sidebar = _a.sidebar, hoverbar = _a.hoverbar, setHoverbar = _a.setHoverbar, handleSidebar = _a.handleSidebar, folderBlocks = _a.folderBlocks, handleFolderBlocks = _a.handleFolderBlocks, handleNameChange = _a.handleNameChange, addFolder = _a.addFolder, addBinder = _a.addBinder, addStudySet = _a.addStudySet, deleteBlock = _a.deleteBlock, deleteForever = _a.deleteForever, handleRestore = _a.handleRestore, deletedItems = _a.deletedItems;
    var mousePosition = useMousePosition_1.useMousePosition();
    var sidebarRef = react_1.useRef(null);
    react_1.useEffect(function () {
        if (document.getElementById("portal-overlay") && hoverbar)
            setHoverbar(true);
        else {
            if (!sidebar && mousePosition.x < 20 && !hoverbar)
                setHoverbar(true);
            else if (hoverbar && mousePosition.x > sidebarRef.current.offsetWidth)
                setHoverbar(false);
        }
    }, [mousePosition, sidebar, hoverbar, setHoverbar, sidebarRef]);
    var hoverStyleContainer = {
        position: "fixed",
        top: "10vh",
        maxHeight: "calc(100vh - 140px)"
    };
    var hoverStyleSidebar = {
        filter: "var(--drop-shadow)",
        borderRadius: "2px 0px 2px",
        maxHeight: "calc(100vh - 140px)"
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null, sidebar || hoverbar ? (react_1["default"].createElement("div", { className: "dekked-sidebarContainer", style: hoverbar ? hoverStyleContainer : null },
        react_1["default"].createElement("div", { className: "dekked-sidebar", style: hoverbar ? hoverStyleSidebar : null, ref: sidebarRef },
            react_1["default"].createElement(SidebarTop_1["default"], { hoverbar: hoverbar, handleSidebar: handleSidebar }),
            react_1["default"].createElement(SidebarWorkspace_1.SidebarWorkspace, { addBinder: addBinder, addFolder: addFolder, addStudySet: addStudySet, deleteBlock: deleteBlock, folderBlocks: folderBlocks, handleFolderBlocks: handleFolderBlocks, handleNameChange: handleNameChange }),
            react_1["default"].createElement(SidebarBottom_1["default"], { deleteForever: deleteForever, handleRestore: handleRestore, deletedItems: deletedItems, addFolder: addFolder, hoverbar: hoverbar })))) : null));
};
exports["default"] = Sidebar;
