import React from 'react'
import "./PageTitle.css"
import { useLocation } from "react-router";


interface PageTitleProps {
    titleRef: any;  
    handleNameChange:(type:string, folderIndex:number, blockName:string, binderIndex:any, studySetIndex:any ) => void;
}

export const PageTitle: React.FC<PageTitleProps> = ({titleRef, handleNameChange}) => {
      let location = useLocation();

        return (
             <div
                className="pageTitle h2 bold"
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onPaste={(e)=>{e.preventDefault();return false;}}
                contentEditable={true}
                ref={titleRef}
                spellCheck={false}
                onKeyDown={(e) => {
                  if (location.state) {
                    if (e.key === "Enter") {
                      e.preventDefault();
                    }
                    setTimeout(function () {
                      handleNameChange(
                        location.state.item.type,
                        location.state.folderIndex,
                        titleRef.current.innerText,
                        location.state.binderIndex,
                        location.state.studySetIndex,
                      );
                    }, 100);
                  }
                }}
              ></div>
        );
}