import React, { useState, useEffect, useRef } from "react";
import * as Icons from "react-icons/md";
import "./DropBlock.css";
import { ReactComponent as FolderIcon } from "../../custom-icons/folder.svg";
import { ReactComponent as BinderIcon } from "../../custom-icons/binder.svg";
import { ReactComponent as StudySetIcon } from "../../custom-icons/studyset.svg";
import { NavLink } from "react-router-dom";

import DropBlockDots from "./DropBlockDots";

interface Props {
  item:any;
  folderIndex:number;
  folderBlocks:{
    name: string;
    type: string;
    id: string;
    iconColour: string;
    isOpen: boolean;
    binders: {
        name: string;
        type: string;
        id: string;
        folderId: string;
        iconColour: string;
        isOpen: boolean;
        studySets: {
            name: string;
            type: string;
            id: string;
            binderId:string;
            folderId:string;
            iconColour:string;
            tab:string;
            flashcards:{
              type: string;
              id: string;
              front:string;
              back:string;
              studySetId:string
              binderId:string;
              folderId:string;
            }[];
        }[];
    }[];
  }[];
  handleFolderBlocks: (newFolderBlocksArray:any) => void;
  handleNameChange:(type:string, folderIndex:number, blockName:string, binderIndex?:number, studySetIndex?:number) => void;
  handleDelete: () => void;
  handleAddItem?: () => void;
  binderIndex?:number;
  studySetIndex?: number;
}

const DropBlock:React.FC<Props> = ({
  item,
  folderIndex,
  binderIndex,
  studySetIndex,
  folderBlocks,
  handleFolderBlocks,
  handleDelete,
  handleAddItem,
  handleNameChange,
}) => {
  const [editableName, setEditableName] = useState<boolean>(false);
  const [iconColour, setIconColour] = useState(item.iconColour);
  const nameRef = useRef<any>(null);

  const handleRename = () => {
    // Focus in on name of dropblock when being renamed (i.e. show text cursor)
    setEditableName((prevValue) => !prevValue);
    setTimeout(function () {
      nameRef.current.focus();
    }, 50);
  };

  const handleName = (type:string, folderIndex: number, binderIndex?:number, studySetIndex?:number) => {
    if (editableName === false) {
      if (type === "folder") {
        nameRef.current.innerText = folderBlocks[folderIndex].name;
      } else if (type === "binder" && binderIndex) {
        nameRef.current.innerText =
          folderBlocks[folderIndex].binders[binderIndex].name;
      } else if (type === "studySet" && binderIndex && studySetIndex) {
        nameRef.current.innerText =
          folderBlocks[folderIndex].binders[binderIndex].studySets[
            studySetIndex
          ].name;
      }
    }
  }

  useEffect(() => {
    // Set name of dropblock using data from folder block
    handleName(item.type, folderIndex, binderIndex, studySetIndex)
  }, [
    folderBlocks,
    editableName,
    studySetIndex,
    binderIndex,
    folderIndex,
    item.type,
  ]);

  useEffect(() => {
    const updateEditableName = (e:any) => {
      // When user clicks away from name, make sure the beginning of the name is shown
      if (nameRef.current) {
        nameRef.current.addEventListener(
          "blur",
          function () {
            nameRef.current.scrollLeft = "0px";
          },
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

  const openDropBlock = (type:string, folderIndex:number, binderIndex?:number) => {
    const newFolderBlocksArray = folderBlocks.slice();
    if (type === "folder")
      newFolderBlocksArray[folderIndex].isOpen = !newFolderBlocksArray[
        folderIndex
      ].isOpen;
    else if (binderIndex)
      newFolderBlocksArray[folderIndex].binders[
        binderIndex
      ].isOpen = !newFolderBlocksArray[folderIndex].binders[binderIndex].isOpen;
    handleFolderBlocks(newFolderBlocksArray);
  };

  return (
    <>
      <NavLink
        activeStyle={{
          background: "var(--off-beige-clicked)",
          fontWeight: "bold",
        }}
        to={{
          pathname: `${
            item.type === "studySet"
              ? `/${item.type}/${item.tab}/${item.id}`
              : `/${item.type}/${item.id}`
          }`,
          state: {
            type: item.type,
            name: item.name,
            folderIndex: folderIndex,
            binderIndex: binderIndex,
            studySetIndex: studySetIndex,
            tab: item.tab,
          },
        }}
      >
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
                  nameRef.current.innerText,
                  binderIndex,
                  studySetIndex,
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
            setIconColour={setIconColour}
            iconColour={iconColour}
            folderBlocks={folderBlocks}
            studySetIndex={studySetIndex}
            folderIndex={folderIndex}
            binderIndex={binderIndex}
          ></DropBlockDots>
        </div>
      </NavLink>
    </>
  );
}
export default DropBlock;
