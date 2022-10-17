import React from 'react'
import { Outlet } from 'react-router-dom'
import { Col, Row } from 'reactstrap'

export default function AgentDashboard() {
  return (
    <div>
    <Row className=' m-0 p-0'>
        <Col md={12}>Agent Navbar</Col>
    </Row>
    <Row className='m-0 p-0'>
        <Col md={2} className=''>
            Agent SideBar
        </Col>
        <Col md={10}>
            <Outlet />
        </Col>
    </Row>
</div>
  )
}
