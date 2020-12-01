import React, { useState } from "react";
import * as Icons from "react-icons/md";
import "./Block.css"

const Block = ({item}) => {
    const mdIcon = Icons[item.icon];
    return (
    <div className="Block">
        {item.icon}
        <p className="p2">{item.action}</p>
    </div>
    )
}

export default Block
