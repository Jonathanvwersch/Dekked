import React from "react";
import "./Block.css"

const Block = ({item, backgroundColour, handleDelete, handleRename, handleColourPicker, handleAddItem, handleSettings, handleAccount, handleTrash}) => {
    let buttonClick;
    switch (item.action) {
        case "Add binder":
        case "Add study set":
            buttonClick = handleAddItem
            break;
            
        case "Icon colour":
            buttonClick = handleColourPicker
            break;
        
        case "Rename":
            buttonClick = handleRename
            break;

        case "Delete":
            buttonClick = handleDelete
            break;

        case "Settings":
            buttonClick = handleSettings
            break;

        case "Account":
            buttonClick = handleAccount
            break;

        case "Trash":
            buttonClick = handleTrash
            break;
        
        default:
            break;
    }
    return (
    <div role="button" onClick={buttonClick} className={`dekked-block ${backgroundColour} p2`}>
        {item.icon}
        {item.action}
    </div>
    )
}

export default Block
