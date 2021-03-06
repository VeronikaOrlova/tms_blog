import React from 'react'
import './Button.css'


type ButtonProps = {
    text?: string;
    onClick: () => void;
    disabled: boolean;
    className: string;
    icon?: string;
}



export const Button = ({onClick, text, disabled, className,icon}: ButtonProps) => {
    return (
        <button type='button' onClick={onClick} disabled={disabled} className={`button ${className}`} >
            {icon && <img src={icon} alt=''/>}
            {text} </button>
    )
}
