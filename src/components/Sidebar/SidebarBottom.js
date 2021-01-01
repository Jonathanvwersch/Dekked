import React, { useState } from "react";
import Portal from "../General/Portal";
import Block from "../General/Block";
import DeletedBlock from "./DeletedBlock";
import "./SidebarBottom.css";
import * as Icons from "react-icons/md";
import { Icon } from "@iconify/react";
import trashCanOutline from "@iconify/icons-mdi/trash-can-outline";

function SidebarBottom({
  addFolder,
  deleteForever,
  handleRestore,
  deletedItems,
  hoverbar
}) {
  const [trashCan, setTrashCan] = useState(false);

  const hoverStyleSidebar = {
    top:"243px",
  };

  return (
    <div className="sidebarBottom">
      <Block
        item={{
          action: "Trash",
          icon: <Icon className="icon trash" icon={trashCanOutline} />,
        }}
        handleTrash={() => setTrashCan(true)}
        backgroundColour="off-beige"
      />

      {trashCan ? (
        <Portal state={trashCan} handleState={() => setTrashCan(false)}>
          <div className="dropdownMenu deleteBlockContainer" style={hoverbar ? hoverStyleSidebar : null}>
            {deletedItems.length === 0 ? (
              <p className="p2 noBinders" style={{ paddingLeft: "16px" }}>
                No items inside
              </p>
            ) : (
              deletedItems.map((item, index) => (
                <DeletedBlock
                  name={item.name}
                  type={item.type}
                  id= {item.id}
                  iconColour={item.iconColour}
                  handleDeleteForever={() => {
                    deleteForever(index);
                  }}
                  handleRestore={() => {
                    handleRestore(
                      item.type,
                      index,
                      item.folderIndex,
                      item.binderIndex,
                      item.studySetIndex
                    );
                  }}
                />
              ))
            )}
          </div>
        </Portal>
      ) : null}
      <div className="addBlock" onClick={addFolder}>
        <Icons.MdAdd className="icon plus" />
        <p className="p1 addFolder">Add folder</p>
      </div>
    </div>
  );
}

export default SidebarBottom;
