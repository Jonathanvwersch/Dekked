import React, { useEffect, useRef } from "react";
import "./PageContent.css";
import AddCard from "./AddCard";
import { useLocation, withRouter } from "react-router";
import Card from "./Card";

function PageContent({ folderBlocks, handleNameChange, handleFolderBlocks }) {
  const titleRef = useRef();
  let location = useLocation();

  useEffect(() => {
    if (location.state) {
      titleRef.current.innerText = location.state.name;
    }
  }, [location.state]);

  const addBinder = (folderIndex) => {
    const newBinder = {
      name: "",
      type: "binder",
      id: Math.random(),
      iconColour: "#2C2C31",
      isOpen: false,
      studySets: [],
    };
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[folderIndex].isOpen = true;
    newFolderBlocksArray[folderIndex].binders.push(newBinder);
    handleFolderBlocks(newFolderBlocksArray);
  };

  return (
    <div className="dekked-page-content-container">
      <div className="title-container">
        <div className="title">
          <h2
            contentEditable={true}
            ref={titleRef}
            spellCheck={false}
            onKeyDown={(e) => {
              if (location.state) {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }
            }}
            onKeyDown={() => {
              handleNameChange(
                location.state.type,
                location.state.folderIndex,
                location.state.binderIndex,
                location.state.studySetIndex,
                titleRef.current.innerText
              );
            }}
          ></h2>
        </div>
      </div>

      <div className="dekked-page-content">
        <AddCard
          handleClick={() => {
            addBinder(location.state.folderIndex);
          }}
        />
        {location.state
          ? folderBlocks[location.state.folderIndex].binders.map(
              (item, index) => {
                return (
                  <Card
                    key={index}
                    name={item.name ? item.name : "Untitled"}
                    type={item.type}
                    iconColour={item.iconColour}
                  />
                );
              }
            )
          : null}
      </div>
    </div>
  );
}

export default withRouter(PageContent);
