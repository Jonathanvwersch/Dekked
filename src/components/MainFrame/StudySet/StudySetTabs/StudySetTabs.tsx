import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import "./StudySetTabs.css";

interface StudySetTabsProps {
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

export const StudySetTabs: React.FC<StudySetTabsProps> = ({ folderBlocks }) => {
  let location = useLocation();

  return (
    <div className="studySetSwitcher">
      {location.state ? (
        <>
          <NavLink
            activeStyle={{
              textDecoration: "underline",
              textDecorationColor: "var(--primary-color)",
              color: "var(--main-black)!important",
              fontWeight: "bold",
              textDecorationThickness: "2px",
            }}
            to={{
              pathname: `/studySet/notes/${
                folderBlocks[location.state.folderIndex].binders[
                  location.state.binderIndex
                ].studySets[location.state.studySetIndex].id
              }`,
              state: {
                item: {name: location.state.item.name, type: location.state.item.type, tab:"notes"},
                folderIndex: location.state.folderIndex,
                binderIndex: location.state.binderIndex,
                studySetIndex: location.state.studySetIndex,
              },
            }}
          >
            <span className="p1">Notes</span>
          </NavLink>
          <NavLink
            activeStyle={{
              textDecoration: "underline",
              textDecorationColor: "var(--primary-color)",
              color: "var(--main-black)",
              fontWeight: "bold",
              textDecorationThickness: "2px",
            }}
            to={{
              pathname: `/studySet/flashcards/${
                folderBlocks[location.state.folderIndex].binders[
                  location.state.binderIndex
                ].studySets[location.state.studySetIndex].id
              }`,
              state: {
                item: {name: location.state.item.name, type: location.state.item.type, tab:"flashcards"},
                folderIndex: location.state.folderIndex,
                binderIndex: location.state.binderIndex,
                studySetIndex: location.state.studySetIndex,
              },
            }}
          >
            <span className="p1">Flashcards</span>
          </NavLink>
        </>
      ) : null}
    </div>
  );
};
