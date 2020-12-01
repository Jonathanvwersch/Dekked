import React, { useState } from "react";
import * as Icons from "react-icons/md";
import "./Block.css"

const Block = ({action, icon}) => {
    const mdIcon = Icons[icon];
    return (
    <div className="Block">
        {React.createElement(mdIcon,{className:`icon ${icon}`})}
        <p className="p2">{action}</p>
    </div>
    )
}

export default Block
