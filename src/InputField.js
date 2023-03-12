import React, { useContext, useEffect, useState } from 'react'
import { FormContext } from './formContext'

function InputTextField({ name = "", placeholder = "", errortxt = "" }) {
    const [value, setValue] = useState("")
    const [errorText, setErrorText] = useState("")
    const formContext = useContext(FormContext);

    console.log(formContext.values)

    useEffect(() => {
        const contextname = formContext.values[name]
        if (contextname) {
            setValue(contextname.value)
            if (contextname.isError) {
                setErrorText(errortxt)
            } else {
                setErrorText("")
            }
        }
    }, [formContext.values, name])

    return (
        <div style={{ margin: "10px" }}>
            <input type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    formContext.onChange("email", e.target.value, (value) => value.length > 3)
                }}
            />
            <span style={{ color: "red", display: "block" }}>
                {errorText}
            </span>
        </div>
    )
}

export default InputTextField