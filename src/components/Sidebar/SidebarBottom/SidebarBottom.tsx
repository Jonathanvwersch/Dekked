import React, { useState } from "react";
import Portal from "../../General/Portal/Portal";
import Block from "../../General/Block/Block";
import DeletedBlock from "../DeletedBlock/DeletedBlock";
import "./SidebarBottom.css";
import * as Icons from "react-icons/md";
import { Icon } from "@iconify/react";
import trashCanOutline from "@iconify/icons-mdi/trash-can-outline";

interface Props {
  addFolder: () => void;
  deleteForever: (index: number) => void;
  handleRestore: (type: string, deletedItemIndex: number) => void;
  deletedItems: Array<any>;
  hoverbar: boolean;
}

const SidebarBottom: React.FC<Props> = ({
  addFolder,
  deleteForever,
  handleRestore,
  deletedItems,
  hoverbar,
}) => {
  const [trashCan, setTrashCan] = useState(false);

  const hoverStyleSidebar = {
    top: "243px",
  };

  return (
    <div className="sidebarBottom">
      <Block
        item={{
          action: "Trash",
          icon: <Icon className="icon trash" icon={trashCanOutline} />,
        }}
        handleTrash={() => setTrashCan(true)}
      />

      {trashCan ? (
        <Portal state={trashCan} handleState={() => setTrashCan(false)}>
          <div
            className="dropdownMenu deleteBlockContainer"
            style={hoverbar ? hoverStyleSidebar : null}
          >
            {deletedItems.length === 0 ? (
              <span className="p2 grey noItems">No items inside</span>
            ) : (
              deletedItems.map((item, index) => (
                <DeletedBlock
                  name={item.name}
                  type={item.type}
                  key={item.id}
                  iconColour={item.iconColour}
                  handleDeleteForever={() => {
                    deleteForever(index);
                  }}
                  handleRestore={() => {
                    handleRestore(item.type, index);
                  }}
                />
              ))
            )}
          </div>
        </Portal>
      ) : null}
      <div className="addBlock" onClick={addFolder}>
        <Icons.MdAdd className="icon plus" />
        <span className="p1">Add folder</span>
      </div>
    </div>
  );
};

export default SidebarBottom;
