import React, { useEffect, useRef } from "react";
import AddCard from "./AddCard";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import Button from "../../Buttons/Button";
import { v4 as uuidv4 } from "uuid";

interface Props {
  folderBlocks:any;
  handleNameChange:(type:string, folderIndex:number, binderIndex:number, studySetIndex:number, blockName:string ) => void;
  addStudySet: (folderIndex:string, binderIndex:string) => any;
  addBinder: (folderIndex:string) =>  any;
}

const FolderBinder:React.FC<Props> = ({ folderBlocks, handleNameChange, addStudySet, addBinder }) => {
  let location = useLocation<any>();
  const titleRef = useRef<any>(null);

  useEffect(() => {
    if (location.state && document.activeElement !== titleRef.current) {
      if (location.state.type === "folder") {
        titleRef.current.innerText =
          folderBlocks[location.state.folderIndex].name;  
      } else if (location.state.type === "binder") {
        titleRef.current.innerText =
          folderBlocks[location.state.folderIndex].binders[
            location.state.binderIndex
          ].name;
      } else if (location.state.type === "studySet") {
        titleRef.current.innerText =
          folderBlocks[location.state.folderIndex].binders[
            location.state.binderIndex
          ].studySets[location.state.studySetIndex].name;
      }
    }
  }, [folderBlocks, location.state]);

  return (
    <>
      {location.state ? (
        <>
          <div className="dekked-pageHeaderContainer">
            <div className="dekked-pageHeader">
              <h2
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onPaste={(e)=>{e.preventDefault();return false;}}
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
                        location.state.type,
                        location.state.folderIndex,
                        location.state.binderIndex,
                        location.state.studySetIndex,
                        titleRef.current.innerText
                      );
                    }, 100);
                  }
                }}
              ></h2>
              <div className="buttonQuantity">
                <span className="p2">
                  {location.state
                    ? location.state.type === "folder"
                      ? `${
                          folderBlocks[location.state.folderIndex].binders
                            .length
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
          </div>
          <div className="dekked-pageContentContainer">
            <div className="dekked-pageContent">
              <AddCard
                handleClick={() => {
                  location.state.type === "folder"
                    ? addBinder(location.state.folderIndex)
                    : addStudySet(
                        location.state.folderIndex,
                        location.state.binderIndex
                      );
                }}
              />
              {location.state.type === "folder"
                ? folderBlocks[location.state.folderIndex].binders.map(
                    (item:any, index:number) => (
                      <NavLink
                        to={{
                          pathname: `/${item.type}/${item.id}`,
                          state: {
                            type: item.type,
                            name: item.name,
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
                  ].studySets.map((item:any, index:number) => (
                    <NavLink
                      to={{
                        pathname: `/${item.type}/${item.tab}/${item.id}`,
                        state: {
                          type: item.type,
                          name: item.name,
                          folderIndex: location.state.folderIndex,
                          binderIndex: location.state.binderIndex,
                          studySetIndex: index,
                          tab: item.tab,
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
}

export default FolderBinder;
