import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

const CustomButton = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Button className='px-3 ' onClick={() => navigate(-1)} color={props.color}>
        {props.text}
      </Button>
    </div>
  )
}

export default CustomButton