import React from "react";
import "./TopBar.css";
import * as Icons from "react-icons/md";
import { useLocation } from "react-router-dom";
import { ReactComponent as BinderIcon } from "../../custom-icons/binder.svg";
import { ReactComponent as StudySetIcon } from "../../custom-icons/studyset.svg";
import { ReactComponent as FolderIcon } from "../../custom-icons/folder.svg";
import { NavLink } from "react-router-dom";

function TopBar({ sidebar, handleSidebar, folderBlocks }) {
  let location = useLocation();
  console.log(location.state);

  return (
    <>
      <div className="dekked-topBarContainer">
        <div className="dekked-topBar">
          {!sidebar ? (
            <div className="icon active hamburgerMenu" onClick={handleSidebar}>
              <Icons.MdMenu />
            </div>
          ) : null}
          <div className="breadcrumbs">
            {location.state ? (
              <>
                <>
                  <FolderIcon
                    className="icon"
                    fill={folderBlocks[location.state.folderIndex].iconColour}
                  />

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
                    <p className="p2">
                      {folderBlocks[location.state.folderIndex].name
                        ? folderBlocks[location.state.folderIndex].name
                        : "Untitled"}
                    </p>
                  </NavLink>
                </>
                {location.state.type === "binder" ||
                location.state.type === "studySet" ? (
                  <>
                    <span id="slash">/</span>

                    <BinderIcon
                      className="icon"
                      stroke={
                        folderBlocks[location.state.folderIndex].binders[
                          location.state.binderIndex
                        ].iconColour
                      }
                    />
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
                      <p className="p2">
                        {folderBlocks[location.state.folderIndex].binders[
                          location.state.binderIndex
                        ].name
                          ? folderBlocks[location.state.folderIndex].binders[
                              location.state.binderIndex
                            ].name
                          : "Untitled"}
                      </p>
                    </NavLink>
                    {location.state.type === "studySet" ? (
                      <>
                        <span id="slash">/</span>

                        <StudySetIcon
                          className="icon"
                          stroke={
                            folderBlocks[location.state.folderIndex].binders[
                              location.state.binderIndex
                            ].studySets[location.state.studySetIndex].iconColour
                          }
                        />

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
                          <p className="p2">
                            {folderBlocks[location.state.folderIndex].binders[
                              location.state.binderIndex
                            ].studySets[location.state.studySetIndex].name
                              ? folderBlocks[location.state.folderIndex]
                                  .binders[location.state.binderIndex]
                                  .studySets[location.state.studySetIndex].name
                              : "Untitled"}
                          </p>
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
      <div style={{ width: "100%", userSelect: "none" }}></div>
    </>
  );
}

export default TopBar;
