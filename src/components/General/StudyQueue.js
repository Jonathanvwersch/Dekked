import React, { useState } from "react";
import "./StudyQueue.css";
import { Icon } from "@iconify/react";
import bookshelfIcon from "@iconify/icons-mdi/bookshelf";
import Portal from "./Portal";
import Button from "../Buttons/Button";

function StudyQueue() {
  const [studyQueue, setStudyQueue] = useState(false);
  const [notifications, setNotifications] = useState(0);

  return (
    <>
      <div className="studyQueue-container">
        <div className="studyQueueBubble-container">
          {notifications > 0 ? (
            <div className="notificationBubble p2 bold">{notifications}</div>
          ) : null}
          <div
            className="studyQueueBubble primary"
            onClick={() => setStudyQueue((prevState) => !prevState)}
          >
            <Icon
              className="icon StudyQueue"
              icon={bookshelfIcon}
              style={{ color: "white", fontSize: "24px" }}
            />
          </div>
          {studyQueue ? (
            <Portal
              state={studyQueue}
              handleState={() => setStudyQueue((prevState) => !prevState)}
            >
              <div className="studyQueue dropdownMenu">
                <div className="items"></div>
                <div id="studyQueueButton">
                  <Button disabled={true} action="Study" />
                </div>
              </div>
            </Portal>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default StudyQueue;
