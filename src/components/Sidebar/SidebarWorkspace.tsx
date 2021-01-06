import React from 'react'
import DropBlock from "./DropBlock";
import "./SidebarWorkspace.css"

interface SidebarWorkspaceProps {
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
  addFolder: () => void;
  addBinder: (folderIndex: number) => void;
  addStudySet: (folderIndex: number, binderIndex: number) => void;
  deleteBlock: (type:string, folderIndex:number, binderIndex?:any, studySetIndex?:any) => void;
}

export const SidebarWorkspace: React.FC<SidebarWorkspaceProps> = ({folderBlocks, handleNameChange, handleFolderBlocks, deleteBlock, addBinder, addStudySet}) => {
        return (
            <div className="workspace">
              <span className="p2 grey title">Workspace</span>
              <div className="folderBlocks">
                {folderBlocks.map((folder:any, folderIndex:number) => (
                  <div key={folder.id} className="folderBlock">
                    <>
                      <DropBlock
                        item={folder}
                        folderIndex={folderIndex}
                        key={folder.id}
                        handleDelete={() =>
                          deleteBlock(folder.type, folderIndex)
                        }
                        handleAddItem={() => addBinder(folderIndex)}
                        handleNameChange={handleNameChange}
                        folderBlocks={folderBlocks}
                        handleFolderBlocks={handleFolderBlocks}
                      />
                    </>
                    {folder.isOpen ? (
                      folder.binders.length === 0 ? (
                        <span className="p2 noBinders">No binders inside</span>
                      ) : (
                        folder.binders.map((binder:any, binderIndex:number) => (
                          <div key={binder.id} className="binderBlock">
                            <DropBlock
                              item={binder}
                              key={binder.id}
                              handleDelete={() =>
                                deleteBlock(
                                  binder.type,
                                  folderIndex,
                                  binderIndex
                                )
                              }
                              folderIndex={folderIndex}
                              binderIndex={binderIndex}
                              handleAddItem={() =>
                                addStudySet(folderIndex, binderIndex)
                              }
                              handleNameChange={handleNameChange}
                              folderBlocks={folderBlocks}
                              handleFolderBlocks={handleFolderBlocks}
                            />

                            {binder.isOpen ? (
                              binder.studySets.length === 0 ? (
                                <span className="p2 noStudySets">
                                  No study sets inside
                                </span>
                              ) : (
                                binder.studySets.map(
                                  (studySet:any, studySetIndex:number) => (
                                    <div
                                      key={studySet.id}
                                      className="studySetBlock"
                                    >
                                      <DropBlock
                                        item={studySet}
                                        key={studySet.id}
                                        folderIndex={folderIndex}
                                        binderIndex={binderIndex}
                                        studySetIndex={studySetIndex}
                                        handleDelete={() =>
                                          deleteBlock(
                                            studySet.type,
                                            folderIndex,
                                            binderIndex,
                                            studySetIndex
                                          )
                                        }
                                        handleNameChange={handleNameChange}
                                        folderBlocks={folderBlocks}
                                        handleFolderBlocks={handleFolderBlocks}
                                      />
                                    </div>
                                  )
                                )
                              )
                            ) : null}
                          </div>
                        ))
                      )
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
        );
}