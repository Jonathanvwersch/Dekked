import React from 'react'
import StudyCard from './StudyCard'
import './StudyMode.css'

const StudyMode:React.FC = () => {
    return (
        <div className="dekked-studyMode">
            <div className="dekked-pageContentContainer">
                <div className="dekked-pageContent">
                    <StudyCard/>
                </div>
            </div>
        </div>
    )
}

export default StudyMode
