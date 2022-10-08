import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, CardHeader, Container } from 'reactstrap'
import "./sideBar.css"
export default function SideBar() {
  const navigate = useNavigate()
  return (
    <div className='' style={{}}>
      <CardBody>
        <p onClick={() => navigate("/report")} className="coups">Report</p>
        <p className='coups' onClick={() => navigate("/shopregistratin")}>Add Shop</p>
        <p className='coups'>Payment</p>  
      </CardBody>
    </div>
  )
}
