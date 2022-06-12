import React from 'react'

interface TextInput {
    
    onChange?: () =>{},
    placeholder?: string,
    label?: string,
    id?: string,
    name?: string,
}

export const TextInput = ({
    onChange,
    placeholder,
    label,
    id,
    name
}: TextInput) => {

    return (
    <div className="form-control" >
        { label && <label htmlFor={id}>{label}</label>}
        <input type="text" 
            placeholder={placeholder} 
            id={id} 
            name={name}
            onChange={onChange} />
    </div>
    )
}