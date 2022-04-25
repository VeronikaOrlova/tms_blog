import React, { useState } from "react";
import './Input.css'

type InputProps={
    handleSubmit? :()=>void,
        placeholder:string,
        className :string
        disabled?: boolean,
        type:'text'| 'email'|'password'
        label: string,
    }
   export const InputForm = ({label, className, placeholder, disabled, type}:InputProps) => {
        const [inputValue, setInputValue] = useState('')
        const [error, setError] = useState('')
        
        const handleChange = (event: any): void => {
            setInputValue(event.target.value)
               if(event.target.value.length < 3){
               setError('error')
            }else{
               setError('')
          }
        }

        return (
            <label> {label}
                <input type={type} className={`${error && 'errorInput'} ${ className}`} placeholder={placeholder} value={inputValue} onChange={handleChange} disabled={disabled}/>
                {error && <p className='error'>Error! Too short!</p>}
            </label>
        )
    }



        