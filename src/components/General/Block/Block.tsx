import React from "react";
import "./Block.css";

interface Props {
  item: { action: string; icon: JSX.Element };
  handleDelete?: () => void;
  handleRename?: () => void;
  handleColourPicker?: () => void;
  handleAddItem?: () => void;
  handleSettings?: () => void;
  handleAccount?: () => void;
  handleTrash?: () => void;
  handleClick?: () => void;
}

const Block: React.FC<Props> = ({
  item,
  handleDelete,
  handleRename,
  handleColourPicker,
  handleAddItem,
  handleSettings,
  handleAccount,
  handleTrash,
  handleClick,
}) => {
  let buttonClick: any;
  switch (item.action) {
    case "Add binder":
    case "Add study set":
      buttonClick = handleAddItem;
      break;

    case "Icon colour":
      buttonClick = handleColourPicker;
      break;

    case "Rename":
      buttonClick = handleRename;
      break;

    case "Delete":
      buttonClick = handleDelete;
      break;

    case "Settings":
      buttonClick = handleSettings;
      break;

    case "Account":
      buttonClick = handleAccount;
      break;

    case "Trash":
      buttonClick = handleTrash;
      break;

    default:
      break;
  }
  return (
    <div role="button" onClick={buttonClick} className={`dekked-block p2`}>
      {item.icon}
      {item.action}
    </div>
  );
};

export default Block;
