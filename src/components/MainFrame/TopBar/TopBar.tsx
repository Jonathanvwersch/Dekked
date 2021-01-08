import React from "react";
import "./TopBar.css";
import {MdMenu} from "react-icons/md";
import { Breadcrumbs } from "./Breadcrumbs/Breadcrumbs";

interface Props {
  sidebar:boolean;
  handleSidebar: () => void;
  setHoverbar: React.Dispatch<React.SetStateAction<boolean>>;
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
const TopBar: React.FC<Props> = ({ sidebar, handleSidebar, folderBlocks, setHoverbar }) => {
  return (
    <>
        <div className="dekked-topBar">
          {!sidebar ?  (
            <div>
              <MdMenu
                className="icon active hamburgerMenu"
                onClick={() => {handleSidebar(); setHoverbar(false)}}
              />
            </div>
          ) : null}
          <Breadcrumbs folderBlocks={folderBlocks}/>
        </div>
    </>
  );
}

export default TopBar;
