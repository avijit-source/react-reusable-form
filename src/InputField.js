import React, { useContext, useEffect, useState } from 'react'
import { FormContext } from './formContext'

function InputTextField({ name = "", placeholder = "" }) {
    const [value, setValue] = useState("")
    const formContext = useContext(FormContext);

    console.log(formContext.values)

    useEffect(() => {
        if (formContext.values[name]) {
            setValue(formContext.values[name].value)
        }
    }, [formContext.values, name])

    return (
        <input type="text"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
                formContext.onChange("email", e.target.value, (value) => value.length > 3)
            }}
        />
    )
}

export default InputTextField