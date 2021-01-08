import React from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as BinderIcon } from "../../../../custom-icons/binder.svg";
import { ReactComponent as StudySetIcon } from "../../../../custom-icons/studyset.svg";
import { ReactComponent as FolderIcon } from "../../../../custom-icons/folder.svg";
import { NavLink } from "react-router-dom";
import "./Breadcrumbs.css";

interface BreadcrumbsProps {
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
          type: string;
          id: string;
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

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ folderBlocks }) => {
  let location = useLocation<any>();

  return (
    <div className="breadcrumbs">
      {location.state ? (
        <>
          <NavLink
            to={{
              pathname: `/${folderBlocks[location.state.folderIndex].type}/${
                folderBlocks[location.state.folderIndex].id
              }`,
              state: {
                item: {
                  type: folderBlocks[location.state.folderIndex].type,
                  name: location.state.item.name,
                  tab: location.state.item.tab,
                },
                folderIndex: location.state.folderIndex,
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

          {location.state.item.type === "binder" ||
          location.state.item.type === "studySet" ? (
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
                    item: {
                      type:
                        folderBlocks[location.state.folderIndex].binders[
                          location.state.binderIndex
                        ].type,
                      tab: location.state.item.tab,
                      name: location.state.item.name,
                    },
                    folderIndex: location.state.folderIndex,
                    binderIndex: location.state.binderIndex,
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
              {location.state.item.type === "studySet" ? (
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
                        item: {
                          type:
                            folderBlocks[location.state.folderIndex].binders[
                              location.state.binderIndex
                            ].studySets[location.state.studySetIndex].type,
                          name: location.state.name,
                          tab: location.state.tab,
                        },
                        folderIndex: location.state.folderIndex,
                        binderIndex: location.state.binderIndex,
                        studySetIndex: location.state.studySetIndex,
                      },
                    }}
                  >
                    <StudySetIcon
                      className="icon"
                      stroke={
                        folderBlocks[location.state.folderIndex].binders[
                          location.state.binderIndex
                        ].studySets[location.state.studySetIndex].iconColour
                      }
                    />
                    <span className="p2">
                      {folderBlocks[location.state.folderIndex].binders[
                        location.state.binderIndex
                      ].studySets[location.state.studySetIndex].name
                        ? folderBlocks[location.state.folderIndex].binders[
                            location.state.binderIndex
                          ].studySets[location.state.studySetIndex].name
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
  );
};
