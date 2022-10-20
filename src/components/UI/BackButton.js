import React from 'react'
import { ArrowLeft } from 'react-feather'
import { useHistory } from 'react-router-dom'
import { themeClass } from 'variables'
import { CustomButton } from '.'

function BackButton({
  text = 'Click to go back',
  size = 'sm',
  className = '',
}) {
  const history = useHistory()

  return (
    <CustomButton
      size={size}
      className={`m-2 ${className}`}
      color={themeClass.split('-')[1]}
      onClick={() => history.goBack()}
    >
      <span className="d-flex flex-direction-row align-items-center">
        <ArrowLeft className="mr-1" size={20} />
        {text}
      </span>
    </CustomButton>
  )
}

export default BackButton
