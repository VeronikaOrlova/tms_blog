import React from "react";
import './Textarea.css'

type TextareaProps = {
    name: string,
    className: string,
    placeholder: string,
    cols: number,
    rows: number,
    label: string,
}

export const Textarea = ({name, className, placeholder, cols, rows, label}: TextareaProps) => {
    return (
        <label>
            {label}
            <textarea name={name} className={className} cols={cols} rows={rows} placeholder={placeholder}></textarea>
        </label>
    )
}