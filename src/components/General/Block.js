import React from "react";
import "./Block.css"

const Block = ({item, backgroundColour, handleDelete, handleRename, handleColourPicker, handleAddItem, handleSettings, handleAccount}) => {
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
        
        default:
            break;
    }
    return (
    <div role="button" onClick={buttonClick} className={`Block ${backgroundColour}`}>
        {item.icon}
        <p className="p2">{item.action}</p>
    </div>
    )
}

export default Block
