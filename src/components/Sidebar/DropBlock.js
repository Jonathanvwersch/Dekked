import React, { useState, useEffect, useRef } from "react";
import * as Icons from "react-icons/md";
import "./DropBlock.css";
import { ReactComponent as FolderIcon } from "../../custom-icons/folder.svg";
import { ReactComponent as BinderIcon } from "../../custom-icons/binder.svg";
import { ReactComponent as StudySetIcon } from "../../custom-icons/studyset.svg";

import DropBlockDots from "./DropBlockDots";

function DropBlock({
  item,
  folderIndex,
  binderIndex,
  studySetIndex,
  folderBlocks,
  handleFolderBlocks,
  handleDelete,
  handleAddItem,
  handleNameChange,
  dropBlockMenuData,
}) {
  const [editableName, setEditableName] = useState(false);
  const [iconColour, setIconColour] = useState(item.iconColour);
  const nameRef = useRef(null);

  const handleRename = () => {
    // Focus in on name of dropblock when being renamed (i.e. show text cursor)
    setEditableName((prevValue) => !prevValue);
    setTimeout(function () {
      nameRef.current.focus();
    }, 50);
  };

  useEffect(() => {
    // Set name of dropblock using data from folder block
    if (editableName === false) {
      if (item.type === "folder") {
        nameRef.current.innerText = folderBlocks[folderIndex].name;
      } else if (item.type === "binder") {
        nameRef.current.innerText =
          folderBlocks[folderIndex].binders[binderIndex].name;
      } else if (item.type === "studySet") {
        nameRef.current.innerText =
          folderBlocks[folderIndex].binders[binderIndex].studySets[
            studySetIndex
          ].name;
      }
    }
  }, [
    folderBlocks,
    editableName,
    studySetIndex,
    binderIndex,
    folderIndex,
    item.type,
  ]);

  useEffect(() => {
    const updateEditableName = (e) => {
      // When user clicks away from name, make sure the beginning of the name is shown
      if (nameRef.current) {
        nameRef.current.addEventListener(
          "blur",
          function (e) {
            this.scrollLeft = "0px";
          },
          true
        );
      }

      // If user clicks outside of name of dropblock, turn off editability of name
      if (editableName === true) {
        if (!nameRef.current.contains(e.target)) {
          setEditableName((prevValue) => !prevValue);
        }
      }
    };
    document.addEventListener("click", updateEditableName);

    return () => {
      document.removeEventListener("click", updateEditableName);
    };
  }, [editableName]);

  const openDropBlock = (type, folderIndex, binderIndex) => {
    const newFolderBlocksArray = folderBlocks.slice();
    if (type === "folder")
      newFolderBlocksArray[folderIndex].isOpen = !newFolderBlocksArray[
        folderIndex
      ].isOpen;
    else
      newFolderBlocksArray[folderIndex].binders[
        binderIndex
      ].isOpen = !newFolderBlocksArray[folderIndex].binders[binderIndex].isOpen;
    handleFolderBlocks(newFolderBlocksArray);
    console.log("hello");
  };

  return (
    <>
      <div role="button" className="dekked-dropBlock">
        <div
          className={
            item.isOpen
              ? `icon active dropDownArrow down ${item.type}`
              : `icon active dropDownArrow right  ${item.type}`
          }
          onClick={() => {
            openDropBlock(item.type, folderIndex, binderIndex);
          }}
        >
          {item.type !== "studySet" ? <Icons.MdArrowDropDown /> : null}
        </div>
        <div className={`icon ${item.type}`}>
          {item.type === "folder" ? (
            <FolderIcon fill={iconColour} />
          ) : item.type === "binder" ? (
            <BinderIcon stroke={iconColour} />
          ) : (
            <StudySetIcon stroke={iconColour} />
          )}
        </div>
        <span
          ref={nameRef}
          spellCheck="false"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setEditableName((prevValue) => !prevValue);
            }
            setTimeout(function () {
              handleNameChange(
                item.type,
                folderIndex,
                binderIndex,
                studySetIndex,
                nameRef.current.innerText
              );
            }, 100);
          }}
          contentEditable={editableName}
          className="p2"
        ></span>
        <DropBlockDots
          item={item}
          handleFolderBlocks={handleFolderBlocks}
          handleRename={handleRename}
          handleDelete={handleDelete}
          handleAddItem={handleAddItem}
          dropBlockMenuData={dropBlockMenuData}
          setIconColour={setIconColour}
          iconColour={iconColour}
          folderBlocks={folderBlocks}
          openDropBlock={() =>
            openDropBlock(item.type, folderIndex, binderIndex)
          }
          studySetIndex={studySetIndex}
          folderIndex={folderIndex}
          binderIndex={binderIndex}
        ></DropBlockDots>
      </div>
    </>
  );
}
export default DropBlock;
