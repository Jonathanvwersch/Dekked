import React, {useState} from 'react'
import './Button.css';


const Button = ({type, action}) => 
{
    return (
        <React.Fragment>
            <button className={`Button ${type}`}>
                {action}
            </button>
        </React.Fragment>

    );
}

export default Button;
