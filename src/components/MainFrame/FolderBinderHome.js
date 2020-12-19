import React from "react";
import "./FolderBinderHome.css";
import AddCard from "./AddCard";
import { useLocation, withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import Card from "./Card";

function FolderBinderHome({ folderBlocks, handleFolderBlocks }) {
  let location = useLocation();

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
    <div className="dekked-folder-binder-home">
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
                  pathname: `/${item.type}/${item.id}`,
                  state: {
                    type: item.type,
                    name: item.name,
                    folderIndex: location.state.folderIndex,
                    binderIndex: location.state.binderIndex,
                    studySetIndex: index,
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
            ))
        : null}
    </div>
  );
}

export default withRouter(FolderBinderHome);
