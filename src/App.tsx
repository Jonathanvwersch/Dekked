import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import MainFrame from "./components/MainFrame/MainFrame";
import { v4 as uuidv4 } from "uuid";
import { LoadingSpinner } from "./components/General/LoadingSpinner/LoadingSpinner";
import StudyQueueBubble from "./components/General/StudyQueue/StudyQueueBubble/StudyQueueBubble";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const [sidebar, setSidebar] = useState<boolean>(true);
  const [hoverbar, setHoverbar] = useState<boolean>(false);
  const [deletedItems, setDeletedItems] = useState<Array<any>>([]);
  const [folderBlocks, setFolderBlocks] = useState([
    {
      name: "Welcome to Dekked",
      type: "folder",
      id: "f73932jff8393d",
      iconColour: "#2C2C31",
      isOpen: true,
      binders: [
        {
          name: "Getting Started",
          type: "binder",
          id: "f73932j4fd393d",
          folderId: "f73932jff8393d",
          iconColour: "#2C2C31",
          isOpen: true,
          studySets: [
            {
              name: "Tutorial",
              type: "studySet",
              id: "f739338f8f393d",
              binderId: "f73932j4fd393d",
              folderId: "f73932jff8393d",
              iconColour: "#2C2C31",
              tab: "notes",
              flashcards: [
                {
                  id: "f73932j4fdee3d",
                  type: "flashcard",
                  front: "",
                  back: "",
                  studySetId: "f739338f8f393d",
                  binderId: "f73932j4fd393d",
                  folderId: "f73932jff8393d",
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  const addFolder = () => {
    const newFolderBlocksArray = folderBlocks.slice();
    const newFolder = {
      name: "",
      type: "folder",
      id: uuidv4(),
      iconColour: "#2C2C31",
      isOpen: false,
      binders: [],
    };
    newFolderBlocksArray.push(newFolder);
    handleFolderBlocks(newFolderBlocksArray);
  };

  const addBinder = (folderIndex: number) => {
    const newBinder = {
      name: "",
      type: "binder",
      id: uuidv4(),
      folderId: folderBlocks[folderIndex].id,
      iconColour: "#2C2C31",
      isOpen: false,
      studySets: [],
    };
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[folderIndex].isOpen = true;
    newFolderBlocksArray[folderIndex].binders.push(newBinder);
    handleFolderBlocks(newFolderBlocksArray);
  };

  const addStudySet = (folderIndex: number, binderIndex: number) => {
    const newStudySet = {
      name: "",
      type: "studySet",
      id: uuidv4(),
      binderId: folderBlocks[folderIndex].binders[binderIndex].id,
      folderId: folderBlocks[folderIndex].id,
      iconColour: "#2C2C31",
      tab: "notes",
      flashcards: [],
    };
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[folderIndex].binders[binderIndex].studySets.push(
      newStudySet
    );

    newFolderBlocksArray[folderIndex].binders[binderIndex].isOpen = true;
    handleFolderBlocks(newFolderBlocksArray);
  };

  const handleFolderBlocks = (newFolderBlocksArray: any) => {
    if (newFolderBlocksArray.length === 0)
      addFolderToNewArray(newFolderBlocksArray);
    setFolderBlocks(newFolderBlocksArray);
  };

  const deleteBlock = (
    type: string,
    folderIndex: number,
    binderIndex: any,
    studySetIndex: any
  ) => {
    let itemsArray = folderBlocks.slice();
    let deletedItemsArray = [...deletedItems];
    let deleted;

    if (type === "folder") {
      deleted = itemsArray.splice(folderIndex, 1);
    } else if (type === "binder") {
      deleted = itemsArray[folderIndex].binders.splice(binderIndex, 1);
    } else if (type === "studySet") {
      deleted = itemsArray[folderIndex].binders[binderIndex].studySets.splice(
        studySetIndex,
        1
      );
    }

    deletedItemsArray.push(convertArrayToObject(deleted).item);
    setDeletedItems(deletedItemsArray);

    handleFolderBlocks(itemsArray);
  };

  const deleteForever = (index: number) => {
    const deletedItemsArray = deletedItems.slice();
    deletedItemsArray.splice(index, 1);
    setDeletedItems(deletedItemsArray);
  };

  const convertArrayToObject = (array: any) => {
    const initialValue = {};
    return array.reduce((obj: any, item: any) => {
      return {
        ...obj,
        item,
      };
    }, initialValue);
  };

  const handleNameChange = (
    type: string,
    folderIndex: number,
    blockName: string,
    binderIndex: any,
    studySetIndex: any
  ) => {
    const newFolderBlocksArray = folderBlocks.slice();
    if (type === "folder") {
      newFolderBlocksArray[folderIndex].name = blockName;
    } else if (type === "binder") {
      newFolderBlocksArray[folderIndex].binders[binderIndex].name = blockName;
    } else if (type === "studySet") {
      newFolderBlocksArray[folderIndex].binders[binderIndex].studySets[
        studySetIndex
      ].name = blockName;
    }
    handleFolderBlocks(newFolderBlocksArray);
  };

  const handleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  const addFolderToNewArray = (newFolderBlocksArray: any) => {
    const newFolder = {
      name: "",
      type: "folder",
      id: uuidv4(),
      iconColour: "#2C2C31",
      isOpen: false,
      binders: [],
    };
    newFolderBlocksArray.push(newFolder);
    return newFolderBlocksArray;
  };

  const addBinderToNewArray = (
    newFolderBlocksArray: any,
    folderIndex: number
  ) => {
    const newBinder = {
      name: "",
      type: "binder",
      id: uuidv4(),
      folderId: newFolderBlocksArray[folderIndex].id,
      iconColour: "#2C2C31",
      isOpen: false,
      studySets: [],
    };

    newFolderBlocksArray[folderIndex].binders.push(newBinder);
    return newFolderBlocksArray;
  };

  const handleRestore = (type: string, deletedItemIndex: number) => {
    let itemsArray = folderBlocks.slice();
    const findBinderIndexInArray = (item: any) => {
      return item.id === deletedItems[deletedItemIndex].folderId;
    };
    const findStudySetIndexInArray = (item: any) => {
      return item.id === deletedItems[deletedItemIndex].binderId;
    };

    if (type === "folder") {
      itemsArray.push(deletedItems[deletedItemIndex]);
    } else if (type === "binder") {
      const folderIndex = folderBlocks.findIndex(findBinderIndexInArray);
      if (folderIndex === -1) {
        addFolderToNewArray(itemsArray);
        itemsArray[folderBlocks.length].binders.push(
          deletedItems[deletedItemIndex]
        );
        itemsArray[folderBlocks.length].isOpen = true;
      } else
        itemsArray[folderIndex].binders.push(deletedItems[deletedItemIndex]);
    } else if (type === "studySet") {
      const folderIndex = folderBlocks.findIndex(findBinderIndexInArray);
      if (folderIndex === -1) {
        const updatedArray = addFolderToNewArray(itemsArray);
        addBinderToNewArray(updatedArray, folderBlocks.length);
        updatedArray[folderBlocks.length].binders[0].studySets.push(
          deletedItems[deletedItemIndex]
        );
        updatedArray[folderBlocks.length].isOpen = true;
        updatedArray[folderBlocks.length].binders[0].isOpen = true;
      } else {
        const binderIndex = folderBlocks[folderIndex].binders.findIndex(
          findStudySetIndexInArray
        );
        itemsArray[folderIndex].binders[binderIndex].studySets.push(
          deletedItems[deletedItemIndex]
        );
      }
    }

    handleFolderBlocks(itemsArray);
    deleteForever(deletedItemIndex);
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Router>

          <Sidebar
            sidebar={sidebar}
            hoverbar={hoverbar}
            setHoverbar={setHoverbar}
            handleSidebar={handleSidebar}
            folderBlocks={folderBlocks}
            handleFolderBlocks={handleFolderBlocks}
            handleNameChange={handleNameChange}
            addFolder={addFolder}
            addBinder={addBinder}
            addStudySet={addStudySet}
            deleteBlock={deleteBlock}
            deleteForever={deleteForever}
            handleRestore={handleRestore}
            deletedItems={deletedItems}
          />

          <Switch>
            <Route path="/">
              <MainFrame
                folderBlocks={folderBlocks}
                sidebar={sidebar}
                handleSidebar={handleSidebar}
                handleNameChange={handleNameChange}
                handleFolderBlocks={handleFolderBlocks}
                addBinder={addBinder}
                addStudySet={addStudySet}
                setHoverbar={setHoverbar}
              />
              <Redirect
                to={{
                  pathname: `/${folderBlocks[0].type}/${folderBlocks[0].id}`,
                  state: {
                    item: {
                      type: folderBlocks[0].type,
                      name: folderBlocks[0].name,
                      iconColour: folderBlocks[0].iconColour,
                    },
                    folderIndex: 0,
                  },
                }}
              />
            </Route>
          </Switch>
          <StudyQueueBubble/>
        </Router>
      )}
    </>
  );
};

export default App;
