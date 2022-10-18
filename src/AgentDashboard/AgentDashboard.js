import React from 'react'
import { Outlet } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import Navbar from '../dashboard/Menu.js/Navbar'
import SideBar from './Sidebar'
export default function AgentDashboard() {
    return (
        <div>
            <Row className='m-0 p-0'>
                <Col md={12} className='m-0 p-0'><Navbar /></Col>
            </Row>
            <Row className='m-0 p-0'>
                <Col md={2} className='side-bar'>
                    <SideBar />
                </Col>
                <Col md={10}>
                    <Outlet />
                </Col>
            </Row>
        </div>
    )
}
