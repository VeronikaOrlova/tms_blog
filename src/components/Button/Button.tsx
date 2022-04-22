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
        <button type='button' onClick={onClick} disabled={disabled} className={className}>
            {icon && <img src={icon} alt='' className='icons'/>}
            {text} </button>
    )
}
