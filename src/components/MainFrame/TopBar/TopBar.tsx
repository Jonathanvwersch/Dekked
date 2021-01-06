import React from "react";
import "./TopBar.css";
import * as Icons from "react-icons/md";
import { useLocation } from "react-router-dom";
import { ReactComponent as BinderIcon } from "../../../custom-icons/binder.svg";
import { ReactComponent as StudySetIcon } from "../../../custom-icons/studyset.svg";
import { ReactComponent as FolderIcon } from "../../../custom-icons/folder.svg";
import { NavLink } from "react-router-dom";

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
  let location = useLocation<any>();
  return (
    <>
      <div className="dekked-topBarOuter">
        <div className="dekked-topBar">
          {!sidebar ?  (
            <div>
              <Icons.MdMenu
                className="icon active hamburgerMenu"
                onClick={() => {handleSidebar(); setHoverbar(false)}}
              />
            </div>
          ) : null}
          <div className="breadcrumbs">
            {location.state ? (
              <>
                <NavLink
                  to={{
                    pathname: `/${
                      folderBlocks[location.state.folderIndex].type
                    }/${folderBlocks[location.state.folderIndex].id}`,
                    state: {
                      type: folderBlocks[location.state.folderIndex].type,
                      folderIndex: location.state.folderIndex,
                      name: location.state.name,
                      tab: location.state.tab,
                    },
                  }}
                >
                  <FolderIcon
                    className="icon folder"
                    fill={folderBlocks[location.state.folderIndex].iconColour}
                  />
                  <span className="p2">
                    {folderBlocks[location.state.folderIndex].name
                      ? folderBlocks[location.state.folderIndex].name
                      : "Untitled"}
                  </span>
                </NavLink>

                {location.state.type === "binder" ||
                location.state.type === "studySet" ? (
                  <>
                    <span id="slash">/</span>

                    <NavLink
                      to={{
                        pathname: `/${
                          folderBlocks[location.state.folderIndex].binders[
                            location.state.binderIndex
                          ].type
                        }/${
                          folderBlocks[location.state.folderIndex].binders[
                            location.state.binderIndex
                          ].id
                        }`,
                        state: {
                          type:
                            folderBlocks[location.state.folderIndex].binders[
                              location.state.binderIndex
                            ].type,
                          folderIndex: location.state.folderIndex,
                          binderIndex: location.state.binderIndex,
                          name: location.state.name,
                          tab: location.state.tab,
                        },
                      }}
                    >
                      <BinderIcon
                        className="icon binder"
                        stroke={
                          folderBlocks[location.state.folderIndex].binders[
                            location.state.binderIndex
                          ].iconColour
                        }
                      />
                      <span className="p2">
                        {folderBlocks[location.state.folderIndex].binders[
                          location.state.binderIndex
                        ].name
                          ? folderBlocks[location.state.folderIndex].binders[
                              location.state.binderIndex
                            ].name
                          : "Untitled"}
                      </span>
                    </NavLink>
                    {location.state.type === "studySet" ? (
                      <>
                        <span id="slash">/</span>
                        <NavLink
                          to={{
                            pathname: `/${
                              folderBlocks[location.state.folderIndex].binders[
                                location.state.binderIndex
                              ].studySets[location.state.studySetIndex].type
                            }/${
                              folderBlocks[location.state.folderIndex].binders[
                                location.state.binderIndex
                              ].studySets[location.state.studySetIndex].tab
                            }/${
                              folderBlocks[location.state.folderIndex].binders[
                                location.state.binderIndex
                              ].studySets[location.state.studySetIndex].id
                            }`,
                            state: {
                              type:
                                folderBlocks[location.state.folderIndex]
                                  .binders[location.state.binderIndex]
                                  .studySets[location.state.studySetIndex].type,
                              folderIndex: location.state.folderIndex,
                              binderIndex: location.state.binderIndex,
                              studySetIndex: location.state.studySetIndex,
                              name: location.state.name,
                              tab: location.state.tab,
                            },
                          }}
                        >
                          <StudySetIcon
                            className="icon"
                            stroke={
                              folderBlocks[location.state.folderIndex].binders[
                                location.state.binderIndex
                              ].studySets[location.state.studySetIndex]
                                .iconColour
                            }
                          />
                          <span className="p2">
                            {folderBlocks[location.state.folderIndex].binders[
                              location.state.binderIndex
                            ].studySets[location.state.studySetIndex].name
                              ? folderBlocks[location.state.folderIndex]
                                  .binders[location.state.binderIndex]
                                  .studySets[location.state.studySetIndex].name
                              : "Untitled"}
                          </span>
                        </NavLink>
                      </>
                    ) : null}
                  </>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
