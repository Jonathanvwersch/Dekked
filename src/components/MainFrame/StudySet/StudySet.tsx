import "./StudySet.css";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import Toolbar from "./Toolbar";
import StudySetNotes from "./StudySetNotes";
import StudySetFlashcards from "./StudySetFlashcards";
import Button from "../../Buttons/Button/Button";
import LinkedFlashcard from "./LinkedFlashcard";
import { v4 as uuidv4 } from "uuid";
import { StudySetTabs } from "./StudySetTabs";
import { PageTitle } from "../PageTitle";

interface Props {
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
            flashcards: {
              id:string;
              type:string;
              front:string;
              back:string;
              studySetId:string;
              binderId:string;
              folderId:string;
            }[];
        }[];
    }[];
  }[]
  handleNameChange:(type:string, folderIndex:number, blockName:string, binderIndex:any, studySetIndex:any) => void;
  handleFolderBlocks: (newFolderBlocksArray:any) => void;
}
const StudySet:React.FC<Props> = ({
  folderBlocks,
  handleNameChange,
  handleFolderBlocks,
}) => {
  let location = useLocation();
  const titleRef = useRef<any>(null);

  const addFlashcard = () => {
    const newFlashcard = {
      id: uuidv4(),
      type: "flashcard",
      front:"",
      back:"",
      studySetId:
        folderBlocks[location.state.folderIndex].binders[
          location.state.binderIndex
        ].studySets[location.state.studySetIndex].id,
      binderId:
        folderBlocks[location.state.folderIndex].binders[
          location.state.binderIndex
        ].id,
      folderId: folderBlocks[location.state.folderIndex].id,
    };
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[location.state.folderIndex].binders[
      location.state.binderIndex
    ].studySets[location.state.studySetIndex].flashcards.unshift(newFlashcard);
    handleFolderBlocks(newFolderBlocksArray);
  };

  const deleteFlashcard = (index:number) => {
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[location.state.folderIndex].binders[
      location.state.binderIndex
    ].studySets[location.state.studySetIndex].flashcards.splice(index, 1);
    handleFolderBlocks(newFolderBlocksArray);
  };

  useEffect(() => {
    if (location.state && document.activeElement !== titleRef.current) {
        titleRef.current.innerText =location.state.name
    }
  }, [folderBlocks, location.state]);

  return (
    <>
      {location.state ? (
        <>
          <div className="dekked-pageHeaderContainer studySet">
            <div className="dekked-pageHeader">
              <div id="toolbarTab">
                {location.state && location.state.tab === "notes" ? (
                  <Toolbar type="full" />
                ) : (
                  <div></div>
                )}
              <StudySetTabs folderBlocks={folderBlocks}/>
              </div>
              <PageTitle titleRef={titleRef} handleNameChange={handleNameChange}/>
              {location.state.tab === "flashcards" ? (
                <div className="buttonQuantity studySet">
                  <span
                    className="p2"
                    style={{ color: "var(--grey-2)", userSelect: "none" }}
                  >
                    {`${
                      folderBlocks[location.state.folderIndex].binders[
                        location.state.binderIndex
                      ].studySets[location.state.studySetIndex].flashcards
                        .length
                    } Flashcard(s)`}
                  </span>
                  <div className="studySetButtons">
                      <Button
                        handleClick={addFlashcard}
                        type="secondary"
                        action="Add flashcard"
                      />
                    <Button disabled type="primary" action="Study" />
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="dekked-pageContentContainer">
            <div className="dekked-pageContent studySet">
              {location.state.tab === "notes" ? (
                <>
                  <StudySetNotes
                    handleFolderBlocks={handleFolderBlocks}
                    folderBlocks={folderBlocks}
                  />
                </>
              ) : (
                <StudySetFlashcards
                  handleFolderBlocks={handleFolderBlocks}
                  folderBlocks={folderBlocks}
                  deleteFlashcard={deleteFlashcard}
                />
              )}
            </div>
            {location.state.tab === "notes" ? (
              <div id="linkedFlashcardContainer">
                <LinkedFlashcard />
              </div>
            ) : null}
          </div>
        </>
      ) : null}
    </>
  );
}

export default StudySet;
