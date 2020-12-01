import React, {useState, useRef} from 'react'
import "./DropdownMenu.css"

function DropdownMenu({state}) {
    const dropdownRef = useRef(null)
    return (
        <nav className={`DropdownMenu ${state}`}>
            
        </nav>
    )
}

export default DropdownMenu
