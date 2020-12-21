import React, { useEffect, useRef } from "react";
import "./FolderBinder.css";
import AddCard from "./AddCard";
import { useLocation, withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import Button from "../../Buttons/Button";

function FolderBinder({ folderBlocks, handleFolderBlocks, handleNameChange }) {
  let location = useLocation();
  const titleRef = useRef();

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
      tab: "notes",
    };
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[folderIndex].binders[binderIndex].studySets.push(
      newStudySet
    );

    newFolderBlocksArray[folderIndex].binders[binderIndex].isOpen = true;
    handleFolderBlocks(newFolderBlocksArray);
  };

  useEffect(() => {
    if (location.state && document.activeElement !== titleRef.current) {
      if (location.state.type === "folder") {
        titleRef.current.innerText =
          folderBlocks[location.state.folderIndex].name;
      } else if (location.state.type === "binder") {
        titleRef.current.innerText =
          folderBlocks[location.state.folderIndex].binders[
            location.state.binderIndex
          ].name;
      } else if (location.state.type === "studySet") {
        titleRef.current.innerText =
          folderBlocks[location.state.folderIndex].binders[
            location.state.binderIndex
          ].studySets[location.state.studySetIndex].name;
      }
    }
  }, [folderBlocks, location.state]);

  return (
    <div className="dekked-folder-binder">
      {location.state ? (
        <>
          <div className="dekked-page-header-container">
            <div className="dekked-page-header">
              <div className="dekked-page-title">
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
              </div>
              <div id="button-quantity">
                <p className="p2 quantity">
                  {location.state
                    ? location.state.type === "folder"
                      ? `${
                          folderBlocks[location.state.folderIndex].binders
                            .length
                        } binder(s)`
                      : `${
                          folderBlocks[location.state.folderIndex].binders[
                            location.state.binderIndex
                          ].studySets.length
                        } study set(s)`
                    : null}
                </p>
                <Button type="primary" action="Study" />
              </div>
            </div>
          </div>
          <div className="dekked-page-content-container">
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
              {location.state.type === "folder"
                ? folderBlocks[location.state.folderIndex].binders.map(
                    (item, index) => (
                      <NavLink
                        to={{
                          pathname: `/${item.type}/${item.id}`,
                          state: {
                            type: item.type,
                            name: item.name,
                            folderIndex: location.state.folderIndex,
                            binderIndex: index,
                          },
                        }}
                      >
                        <Card
                          key={Math.random()}
                          name={item.name ? item.name : "Untitled"}
                          type={item.type}
                          iconColour={item.iconColour}
                        />
                      </NavLink>
                    )
                  )
                : folderBlocks[location.state.folderIndex].binders[
                    location.state.binderIndex
                  ].studySets.map((item, index) => (
                    <NavLink
                      to={{
                        pathname: `/${item.type}/${item.tab}/${item.id}`,
                        state: {
                          type: item.type,
                          name: item.name,
                          folderIndex: location.state.folderIndex,
                          binderIndex: location.state.binderIndex,
                          studySetIndex: index,
                          tab: item.tab
                        },
                      }}
                    >
                      <Card
                        key={Math.random()}
                        name={item.name ? item.name : "Untitled"}
                        type={item.type}
                        iconColour={item.iconColour}
                      />
                    </NavLink>
                  ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default withRouter(FolderBinder);
