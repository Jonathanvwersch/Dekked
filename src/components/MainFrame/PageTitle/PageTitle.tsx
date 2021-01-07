import React, { useEffect, useRef } from "react";
import "./PageTitle.css";
import { useLocation } from "react-router";

interface PageTitleProps {
  handleNameChange: (
    type: string,
    folderIndex: number,
    blockName: string,
    binderIndex: any,
    studySetIndex: any
  ) => void;
  folderBlocks: {
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
        binderId: string;
        folderId: string;
        iconColour: string;
        tab: string;
        flashcards: {
          id: string;
          type: string;
          front: string;
          back: string;
          studySetId: string;
          binderId: string;
          folderId: string;
        }[];
      }[];
    }[];
  }[];
}

export const PageTitle: React.FC<PageTitleProps> = ({
  folderBlocks,
  handleNameChange,
}) => {
  let location = useLocation();
  const type = location.state.item.type;
  const titleRef = useRef<any>(null);

  useEffect(() => {
    if (document.activeElement !== titleRef.current) {
      if (type === "folder")
        titleRef.current.innerText =
          folderBlocks[location.state.folderIndex].name;
      else if (type === "binder")
        titleRef.current.innerText =
          folderBlocks[location.state.folderIndex].binders[
            location.state.binderIndex
          ].name;
      else if (type === "studySet")
        titleRef.current.innerText =
          folderBlocks[location.state.folderIndex].binders[
            location.state.binderIndex
          ].studySets[location.state.studySetIndex].name;
    }
  }, [folderBlocks, location.state, type]);

  return (
    <div
      className="pageTitle h2 bold"
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onPaste={(e) => {
        e.preventDefault();
        return false;
      }}
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
              location.state.studySetIndex
            );
          }, 100);
        }
      }}
    ></div>
  );
};
