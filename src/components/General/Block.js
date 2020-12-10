import React from "react";
import "./Block.css"

const Block = ({item, handleDelete, handleRename, handleColourPicker, handleAddItem, handleSettings, setDropdownArrow}) => {
    let buttonClick;
    switch (item.action) {
        case "Add binder":
        case "Add study set":
            buttonClick = () => {handleAddItem(); setDropdownArrow(true)}
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
        
        default:
            break;
    }
    return (
    <div onClick={buttonClick} className="Block">
        {item.icon}
        <p className="p2">{item.action}</p>
    </div>
    )
}

export default Block
