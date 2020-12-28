import React from 'react'
import "./StudyButton.css"

function StudyButton({action, type, handleClick}) {
    return (
        <>
            <button className={`dekked-studyButton ${type} p1`} onClick={handleClick}>
                {action}
            </button>
            <div className="p1">
                {`Next review in X days`}
            </div>
        </>
    )
}

export default StudyButton{action, type, handleClick}
