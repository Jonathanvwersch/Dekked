import React, { useState, useEffect, useRef } from "react";
import ColourPicker from "../../ColourPicker/ColourPicker";
import Block from "../../../General/Block/Block";
import Portal from "../../../General/Portal/Portal";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {MdMoreHoriz} from "react-icons/md";
import { FolderData, BinderData, StudySetData } from "./DropBlockMenuData";

interface Props {
  item:any;
  handleFolderBlocks: (newFolderBlocksArray:any) => void;
  studySetIndex?:number;
  binderIndex?:number;
  folderIndex:number;
  iconColour:string;
  setIconColour: React.Dispatch<any>;
  handleAddItem?: () => void;
  handleDelete: () => void;
  handleRename: () => void;
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

}

const DropBlockDots:React.FC<Props> = ({
  item,
  handleFolderBlocks,
  folderBlocks,
  handleRename,
  handleDelete,
  handleAddItem,
  setIconColour,
  iconColour,
  studySetIndex,
  folderIndex,
  binderIndex,
}) => {
  const dropBlockMenuData = item.type==="folder" ? FolderData : item.type==="binder" ? BinderData : StudySetData
  const [coords, setCoords] = useState({left:0, top:0}); // Set mouse coordinates
  const [dropdownMenu, setDropdownMenu] = useState(false); // Set dropdown menu visibility
  const [colourPicker, setColourPicker] = useState(false); // Set visibility of colour picker component
  const [yPositionOfDropdownMenu, setYPositionofDropdownMenu] = useState<number>(0); // Set y position of dropdown menu
  const heightOfDropdownMenu = 30 * dropBlockMenuData.length; // Value is necessary to position dropdown menu based on mouse coordinates
  const heightOfColourPicker = 220; // Value is necessary to position colour picker based on mouse coordinates
 
  const titleRef = useRef()

  const positionComponents = (e:any, itemHeight:number) => {
    const rect = e.target.getBoundingClientRect();
    let bottomValue = window.innerHeight - rect.y; // distance from mouse click to bottom of window
    let topValue = rect.y; // distance from mouse click to top of window
    setYPositionofDropdownMenu(topValue);

    if (
      bottomValue < 1.5 * heightOfColourPicker &&
      topValue > heightOfColourPicker
    )
      setYPositionofDropdownMenu(topValue - heightOfColourPicker - 10);

    if (bottomValue < 1.4 * itemHeight && topValue > itemHeight) {
      topValue = rect.y - itemHeight - 10;
    }

    setCoords({
      left: rect.x + rect.width / 2,
      top: topValue,
    });
  };

  const handleIconColour = (
    type:string,
    folderIndex:number,
    iconColour:string,
    binderIndex:any,
    studySetIndex:any,
  ) => {
    const newFolderBlocksArray = folderBlocks.slice();
    if (type === "folder" ) {
      newFolderBlocksArray[folderIndex].iconColour = iconColour;
    } else if (type === "binder") {
      newFolderBlocksArray[folderIndex].binders[
        binderIndex
      ].iconColour = iconColour;
    } else if (type === "studySet") {
      newFolderBlocksArray[folderIndex].binders[binderIndex].studySets[
        studySetIndex
      ].iconColour = iconColour;
    }
    handleFolderBlocks(newFolderBlocksArray);
  };

  const handleColourPicker = () => {
    const newCoords = {
      left: coords.left,
      top: yPositionOfDropdownMenu,
    };
    setCoords(newCoords);
    setColourPicker((prevState) => !prevState);
  };
  
  const handleDropdownMenu = (e:any) => {
    positionComponents(e, heightOfDropdownMenu);
    setDropdownMenu((prevState) => !prevState);
  };
  
  useEffect (() => {
    handleIconColour(item.type, folderIndex, iconColour, binderIndex, studySetIndex)
  }, [iconColour])
  
  return (
    <div id="dropBlockDots">
      <MdMoreHoriz
        className="icon active dots"
        onClick={(e) => {
          handleDropdownMenu(e);
        }}
      ></MdMoreHoriz>
      {dropdownMenu ? (
        <Portal state={dropdownMenu} handleState={() => setDropdownMenu(false)}>
          <div
            onClick={() => setDropdownMenu(false)}
            className="dropdownMenu dropBlocks"
            style={{ ...coords }}
          >
            {dropBlockMenuData.map((item) => {
              return item.action === "Delete" ? (
                <NavLink
                  to={{
                    pathname: `/${folderBlocks[0].type}/${folderBlocks[0].id}`,
                    state: {
                      item: {name:folderBlocks[0].name, type:folderBlocks[0].type},
                      folderIndex: "0",
                    },
                  }}
                >
                  <Block
                    handleDelete={handleDelete}
                    handleRename={handleRename}
                    handleColourPicker={handleColourPicker}
                    handleAddItem={handleAddItem}
                    item={item}
                    key={uuidv4()}
                  />
                </NavLink>
              ) : (
                <Block
                  handleDelete={handleDelete}
                  handleRename={handleRename}
                  handleColourPicker={handleColourPicker}
                  handleAddItem={handleAddItem}
                  item={item}
                  key={uuidv4()}
                />
              );
            })}
          </div>
        </Portal>
      ) : null}
      {colourPicker ? (
        <Portal state={colourPicker} handleState={handleColourPicker}>
          <div style={{ ...coords }} className="colourPicker">
            <ColourPicker
              iconColour={iconColour}
              setIconColour={setIconColour}
            ></ColourPicker>
          </div>
        </Portal>
      ) : null}
    </div>
  );
}

export default DropBlockDots;
