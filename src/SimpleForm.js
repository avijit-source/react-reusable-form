import React, { useCallback, useMemo, useState } from 'react'
import { FormContext } from './formContext';



function SimpleForm({ children, value, onSubmit }) {



    const [values, setValues] = useState(value || {});

    const [errors, setErrors] = useState({})
    const onChange = useCallback((field, value, validatefunc) => {
        if (value) {
            setValues({
                ...values,
                [field]: {
                    value,
                    isError: validatefunc(value) ? false : true
                }
            })

        }

    }, [setValues, values])

    const form = {
        onChange,
        values,
    }

    return (
        <div className="SimpleForm-container">
            <form onSubmit={(e) => {
                e.preventDefault()
                onSubmit(values)
            }}>
                <FormContext.Provider value={form}>
                    {children}
                </FormContext.Provider>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm