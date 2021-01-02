import React, { useState } from "react";
import "./StudyQueue.css";
import { Icon } from "@iconify/react";
import bookshelfIcon from "@iconify/icons-mdi/bookshelf";
import Portal from "./Portal";
import Button from "../Buttons/Button";

const  StudyQueue: React.FC = () => {
  const [studyQueue, setStudyQueue] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<number>(0);

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
                  <Button type="primary" action="Study" disabled={true}  />
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
