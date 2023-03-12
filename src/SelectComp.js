import React, { useContext, useEffect, useState } from 'react'
import { FormContext } from './formContext';

function SelectComp({ name = "", label = "", values = [] }) {
    const [value, setValue] = useState("");

    const formContext = useContext(FormContext);


    useEffect(() => {
        if (formContext.values[name]) {
            setValue(formContext.values[name].value)
        }
    }, [formContext.values, name])
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <select name={name} onChange={(e) => {
                formContext.onChange(name, e.target.value, (val) => val !== "")
            }}
                value={value}
            >
                {
                    values.map((val, i) => (
                        <option value={val} key={i}>{val}</option>
                    ))
                }
            </select>
        </>
    )
}

export default SelectComp