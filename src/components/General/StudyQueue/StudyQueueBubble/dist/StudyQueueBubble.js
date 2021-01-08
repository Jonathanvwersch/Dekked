"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./StudyQueueBubble.css");
var react_2 = require("@iconify/react");
var bookshelf_1 = require("@iconify/icons-mdi/bookshelf");
var StudyQueue_1 = require("../StudyQueue");
var StudyQueueBubble = function () {
    var _a = react_1.useState(false), studyQueue = _a[0], setStudyQueue = _a[1];
    // const [notifications, setNotifications] = useState<number>(0);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "studyQueueBubbleContainer" },
            react_1["default"].createElement("div", { className: "studyQueueBubble primary", onClick: function () { return setStudyQueue(true); } },
                react_1["default"].createElement(react_2.Icon, { className: "icon StudyQueue", icon: bookshelf_1["default"], style: { color: "white", fontSize: "24px" } }))),
        react_1["default"].createElement(StudyQueue_1.StudyQueue, { handleStudyQueue: function () { return setStudyQueue(false); }, studyQueue: studyQueue })));
};
exports["default"] = StudyQueueBubble;
