import React from 'react'
import './FormInput.css'
const FormInputs = (props) => {
    const {label, id, onChange, ...inputProps} = props
  return (
    <div className='container-input'>
            <label>{label}</label>
        <div className='formInput'>
            <input {...inputProps} onChange={onChange}></input>
        </div>
    </div>
  )
}

export default FormInputs
