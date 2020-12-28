import React, { useState } from "react";
import "./StudyQueue.css";
import { Icon } from "@iconify/react";
import bookshelfIcon from "@iconify/icons-mdi/bookshelf";
import Portal from "./Portal";
import Button from "../Buttons/Button";

function StudyQueue() {
  const [studyQueue, setStudyQueue] = useState(false);
  const [notifications, setNotifications] = useState(false);

  return (
    <>
      <div className="studyQueue-container">
        <div className="studyQueueBubble-container">
          {notifications ? (
            <div className="notificationBubble">
              <b>
                <p className="p2"></p>
              </b>
            </div>
          ) : null}
          <div
            className="studyQueueBubble"
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
              <div className="studyQueue">
                <div className="header">
                  <b>
                    <p className="p1">Study Queue</p>
                  </b>
                  <Button disabled={true} action="Study" />
                </div>
                <div className="items"></div>
              </div>
            </Portal>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default StudyQueue;
