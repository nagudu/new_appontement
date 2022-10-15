import React from 'react'
import { Outlet } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import Navbar from '../dashboard/Menu.js/Navbar'
import SideBar from '../dashboard/Menu.js/Sidebar'
// import '../dashboard/Styles/Styles.css'
export default function AppIndex() {
    return (
        <div>
            <Row className='nav_m m-0'>
                <Col md={12}><Navbar /></Col>
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
