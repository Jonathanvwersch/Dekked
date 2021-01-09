import "./StudySet.css";
import React, { useState } from "react";
import { useLocation } from "react-router";
import Toolbar from "./Toolbar/Toolbar";
import StudySetNotes from "./StudySetNotes/StudySetNotes";
import StudySetFlashcards from "./StudySetFlashcards/StudySetFlashcards";
import Button from "../../Buttons/Button/Button";
import LinkedFlashcard from "./Linked Flashcard/LinkedFlashcard";
import { v4 as uuidv4 } from "uuid";
import { StudySetTabs } from "./StudySetTabs/StudySetTabs";
import { PageTitle } from "../PageTitle/PageTitle";

interface Props {
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
  handleNameChange: (
    type: string,
    folderIndex: number,
    blockName: string,
    binderIndex: any,
    studySetIndex: any
  ) => void;
  handleFolderBlocks: (newFolderBlocksArray: any) => void;
  sidebar:boolean;
}
const StudySet: React.FC<Props> = ({
  folderBlocks,
  handleNameChange,
  handleFolderBlocks,
  sidebar,
}) => {
  let location = useLocation();
  const tab = location.state.item.tab;
  const [studySetNotesWidth, setStudySetNotesWidth] = useState<number>(0);

  const addFlashcard = () => {
    const newFlashcard = {
      id: uuidv4(),
      type: "flashcard",
      front: "",
      back: "",
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

  const deleteFlashcard = (index: number) => {
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[location.state.folderIndex].binders[
      location.state.binderIndex
    ].studySets[location.state.studySetIndex].flashcards.splice(index, 1);
    handleFolderBlocks(newFolderBlocksArray);
  };

  return (
    <>
      {location.state ? (
        <>
          <div className="dekked-pageHeader studySet">
            <div className="toolbarTab">
              {tab === "notes" ? <Toolbar type="full" /> : <div></div>}
              <StudySetTabs folderBlocks={folderBlocks} />
            </div>
            <PageTitle
              folderBlocks={folderBlocks}
              handleNameChange={handleNameChange}
            />
            {tab === "flashcards" ? (
              <div className="buttonQuantity studySet">
                <span
                  className="p2"
                  style={{ color: "var(--grey-2)", userSelect: "none" }}
                >
                  {`${
                    folderBlocks[location.state.folderIndex].binders[
                      location.state.binderIndex
                    ].studySets[location.state.studySetIndex].flashcards.length
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

          <div className="dekked-pageContent">
            {tab === "notes" ? (
              <>
                <StudySetNotes
                  handleFolderBlocks={handleFolderBlocks}
                  folderBlocks={folderBlocks}
                  setStudySetNotesWidth={setStudySetNotesWidth}
                  sidebar={sidebar}
                />
                <LinkedFlashcard width={studySetNotesWidth} />
              </>
            ) : (
              <StudySetFlashcards
                handleFolderBlocks={handleFolderBlocks}
                folderBlocks={folderBlocks}
                deleteFlashcard={deleteFlashcard}
              />
            )}
          </div>
        </>
      ) : null}
    </>
  );
};

export default StudySet;
