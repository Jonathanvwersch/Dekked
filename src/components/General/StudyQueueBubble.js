import React from 'react'
import "./StudyQueueBubble.css"
import { ReactComponent as StudyQueueIcon } from "../../custom-icons/studyQueue.svg";

function StudyQueue() {


    return (
        <div className="studyQueue">
            <div className="icon StudyQueue">
                <StudyQueueIcon/>
            </div> 
        </div>
    )
}

export default StudyQueue
