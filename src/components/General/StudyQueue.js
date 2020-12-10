import React, { useState } from "react";
import "./StudyQueue.css";
import { ReactComponent as StudyQueueIcon } from "../../custom-icons/studyQueue.svg";
import Portal from "./Portal";
import Button from "../../components/Buttons/Button";

function StudyQueue() {
  const [studyQueue, setStudyQueue] = useState(false);
  const [buttonState, setButtonState] = useState("inactive");
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
          <div className="studyQueueBubble">
            <div
              className="icon StudyQueue"
              onClick={() => setStudyQueue((prevState) => !prevState)}
            >
              <StudyQueueIcon />
            </div>
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
                  <Button type={buttonState} action="Study" />
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
