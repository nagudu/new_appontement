import React from 'react'
import { Outlet } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import SideBar from '../SideBar'

export default function AppIndex() {
    return (
        <div>
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
