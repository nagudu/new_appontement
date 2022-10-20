import React from 'react'
import { Input, Label, FormGroup } from 'reactstrap'
import { themeClass } from '../../variables'
// import { checkStrEmpty } from 'utils'
// import { secondaryColor } from "variables";

function TextInput(props) {
  const {
    label,
    required = false,
    className = null,
    container = null,
    loading = false,
    good = false,
    message = '',
  } = props

  return (
    <>
      <FormGroup className={container}>
        {(label !== '') && (
          <Label className="font-weight-bold" style={{fontSize:15}}>
            {label}
            {required && <span className="text-danger">*</span>}
          </Label>
        )}
        <Input
          className={`form-control-alternative border  ${className}`}
          style={{ border: `1px solid ${themeClass}`, ...props.style }}
          {...props}
        />
        {loading && <span className="text-success">please wait...</span>}
        {message !== '' && (
          <span className={good ? 'text-primary' : 'text-danger'}>
            {message}
          </span>
        )}
      </FormGroup>
    </>
  )
}

export default TextInput
