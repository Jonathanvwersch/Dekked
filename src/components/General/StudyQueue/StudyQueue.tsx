import React from "react";
import Button from "../../Buttons/Button/Button";
import Portal from "../Portal/Portal";
import "./StudyQueue.css";

interface StudyQueueProps {
  studyQueue: boolean;
  handleStudyQueue: () => void;
}

export const StudyQueue: React.FC<StudyQueueProps> = ({
  studyQueue,
  handleStudyQueue,
}) => {
  return studyQueue ? (
    <Portal state={studyQueue} handleState={handleStudyQueue}>
      <div className="studyQueue dropdownMenu">
        <div className="srBlocks"></div>
        <div className="studyQueueButton">
          <Button type="primary" action="Study" disabled={true} />
        </div>
      </div>
    </Portal>
  ) : null;
};
