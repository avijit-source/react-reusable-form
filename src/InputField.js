import React, { useContext } from 'react'
import { FormContext } from './formContext'

function InputTextField({ name = "", placeholder = "" }) {

    const formContext = useContext(FormContext);

    console.log(formContext)


    return (
        <input type="text"
            name={name}
            placeholder={placeholder}
            onChange={(e) => {
                formContext.onChange("email", e.target.value, (value) => value.length > 3)
            }}
        />
    )
}

export default InputTextField