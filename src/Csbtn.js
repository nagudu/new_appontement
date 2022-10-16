import React from 'react'
import { Button } from 'reactstrap'

const Csbtn = (props) => {
   
  return (
    <div>
        <Button color={props.color} style={{
            background:"#2CC2D8",
            border:"none",
            padding:"10px 20px"
        }} className="mt-2" size={props.size} >
            {props.text}
        </Button>
    </div>
  )
}

export default Csbtn