import React, { useState } from "react";
import "./StudyQueueBubble.css";
import { Icon } from "@iconify/react";
import bookshelfIcon from "@iconify/icons-mdi/bookshelf";
import { StudyQueue } from "../StudyQueue";

const StudyQueueBubble: React.FC = () => {
  const [studyQueue, setStudyQueue] = useState<boolean>(false);
  // const [notifications, setNotifications] = useState<number>(0);
  return (
    <>
      <div className="studyQueueBubbleContainer">
        {/* {notifications > 0 ? (
          <div className="notificationBubble p2 bold">{notifications}</div>
        ) : null} */}
        <div
          className="studyQueueBubble primary"
          onClick={() => setStudyQueue(true)}
        >
          <Icon
            className="icon StudyQueue"
            icon={bookshelfIcon}
            style={{ color: "white", fontSize: "24px" }}
          />
        </div>
      </div>
      <StudyQueue
        handleStudyQueue={() => setStudyQueue(false)}
        studyQueue={studyQueue}
      />
    </>
  );
};

export default StudyQueueBubble;
