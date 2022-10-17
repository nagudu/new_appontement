import React from 'react'
import { Outlet } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import Navbar from '../dashboard/Menu.js/Navbar'
import Sidebar from './Sidebar'

export default function AgentDashboard() {
  return (
    <div>
    <Row className=' m-0 p-0'>
        <Col md={12}>
            <Navbar />
        </Col>
    </Row>
    <Row className='m-0 p-0'>
        <Col md={2} className='side-bar'>
            <Sidebar />
        </Col>
        <Col md={10}>
            <Outlet />
        </Col>
    </Row>
</div>
  )
}
