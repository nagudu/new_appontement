import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, CardHeader, Container } from 'reactstrap'
import "./sideBar.css"
export default function SideBar() {
  const navigate = useNavigate()
  return (
    <div className='side-bar'>

      {/* <Container> */}
        {/* <Card className='mt-3'> */}
          {/* <CardHeader>Menu</CardHeader> */}
          <CardBody>
      <p onClick={()=> navigate("/report")} className="coups">Report</p>
      <p className='coups'>Balance</p>
      <p className='coups'>Report</p>

          </CardBody>
        {/* </Card> */}
      {/* </Container> */}
    </div>
  )
}
