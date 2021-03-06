import React from "react";
import AddCard from "./AddCard/AddCard";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import Card from "./Card/Card";
import Button from "../../Buttons/Button/Button";
import { v4 as uuidv4 } from "uuid";
import { PageTitle } from "../PageTitle/PageTitle";
import "./FolderBinder.css";

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

  handleNameChange: (
    type: string,
    folderIndex: number,
    blockName: string,
    binderIndex: any,
    studySetIndex: any
  ) => void;
  addStudySet: (folderIndex: number, binderIndex: number) => any;
  addBinder: (folderIndex: number) => any;
}

const FolderBinder: React.FC<Props> = ({
  folderBlocks,
  handleNameChange,
  addStudySet,
  addBinder,
}) => {
  let location = useLocation();
  return (
    <>
      {location.state ? (
        <>
          <div className="dekked-pageHeader">
            <PageTitle
              folderBlocks={folderBlocks}
              handleNameChange={handleNameChange}
            />
            <div className="buttonQuantity">
              <span className="p2">
                {location.state
                  ? location.state.item.type === "folder"
                    ? `${
                        folderBlocks[location.state.folderIndex].binders.length
                      } Binder(s)`
                    : `${
                        folderBlocks[location.state.folderIndex].binders[
                          location.state.binderIndex
                        ].studySets.length
                      } Study set(s)`
                  : null}
              </span>
              <Button type="primary" action="Study" disabled={true} />
            </div>
          </div>
          <div className="dekked-pageContent">
            <div className="folderBinder">
              <AddCard
                handleClick={() => {
                  location.state.item.type === "folder"
                    ? addBinder(location.state.folderIndex)
                    : addStudySet(
                        location.state.folderIndex,
                        location.state.binderIndex
                      );
                }}
              />
              {location.state.item.type === "folder"
                ? folderBlocks[location.state.folderIndex].binders.map(
                    (item: any, index: number) => (
                      <NavLink
                        to={{
                          pathname: `/${item.type}/${item.id}`,
                          state: {
                            item: item,
                            folderIndex: location.state.folderIndex,
                            binderIndex: index,
                          },
                        }}
                      >
                        <Card
                          key={uuidv4()}
                          name={item.name ? item.name : "Untitled"}
                          type={item.type}
                          iconColour={item.iconColour}
                        />
                      </NavLink>
                    )
                  )
                : folderBlocks[location.state.folderIndex].binders[
                    location.state.binderIndex
                  ].studySets.map((item: any, index: number) => (
                    <NavLink
                      to={{
                        pathname: `/${item.type}/${item.tab}/${item.id}`,
                        state: {
                          item: item,
                          folderIndex: location.state.folderIndex,
                          binderIndex: location.state.binderIndex,
                          studySetIndex: index,
                        },
                      }}
                    >
                      <Card
                        key={uuidv4()}
                        name={item.name ? item.name : "Untitled"}
                        type={item.type}
                        iconColour={item.iconColour}
                      />
                    </NavLink>
                  ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default FolderBinder;
