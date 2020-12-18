import React, { useEffect, useRef, useState } from "react";
import "./PageContent.css";
import AddCard from "./AddCard";
import { useLocation, withRouter } from "react-router";
import Card from "./Card";
import Button from "../Buttons/Button";

function PageContent({ folderBlocks, handleNameChange, handleFolderBlocks }) {
  const titleRef = useRef();
  let location = useLocation();

  useEffect(() => {
    if (location.state && document.activeElement !== titleRef.current) {
      titleRef.current.innerText =
        folderBlocks[location.state.folderIndex].name;
    }
  }, [folderBlocks, location.state]);

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

  const addStudySet = (folderIndex, binderIndex) => {
    const newStudySet = {
      name: "",
      type: "studySet",
      id: Math.random(),
      iconColour: "#2C2C31",
    };
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[folderIndex].binders[binderIndex].studySets.push(
      newStudySet
    );

    newFolderBlocksArray[folderIndex].binders[binderIndex].isOpen = true;
    handleFolderBlocks(newFolderBlocksArray);
  };

  return (
    <div className="dekked-page-content-container">
      <div className="page-header-container">
        <div className="page-header">
          <div className="page-title">
            <h2
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
                      location.state.type,
                      location.state.folderIndex,
                      location.state.binderIndex,
                      location.state.studySetIndex,
                      titleRef.current.innerText
                    );
                  }, 100);
                }
              }}
            ></h2>
            <p className="p2">
              {location.state
                ? location.state.type === "folder"
                  ? `${
                      folderBlocks[location.state.folderIndex].binders.length
                    } binder(s)`
                  : `${
                      folderBlocks[location.state.folderIndex].binders[
                        location.state.binderIndex
                      ].studySets.length
                    } study set(s)`
                : null}
            </p>
          </div>
        </div>
      </div>

      <div className="dekked-page-content">
        <AddCard
          handleClick={() => {
            location.state.type === "folder"
              ? addBinder(location.state.folderIndex)
              : addStudySet(
                  location.state.folderIndex,
                  location.state.binderIndex
                );
          }}
        />
        {location.state
          ? location.state.type === "folder"
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
            : folderBlocks[location.state.folderIndex].binders[
                location.state.binderIndex
              ].studySets.map((item, index) => {
                return (
                  <Card
                    key={index}
                    name={item.name ? item.name : "Untitled"}
                    type={item.type}
                    iconColour={item.iconColour}
                  />
                );
              })
          : null}
      </div>
    </div>
  );
}

export default withRouter(PageContent);
