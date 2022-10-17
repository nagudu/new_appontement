import React from 'react'
import { BsClock, BsClockHistory } from 'react-icons/bs'
import { MdMapsHomeWork } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, CardHeader, Col, Container, Row, Table } from 'reactstrap'

export default function AgentShops() {
    const navigate = useNavigate()
    return (
        <div>
            <Container className='mt-3'>
                {/* <Card> */}
                <Row>
                    <Col lg={4}>
                        <Card className='dashboard_card p-3 shadow-sm' style={{ cursor: "pointer" }} onClick={() => navigate("")}>
                            <Row>
                                <Col md={3}>
                                    <div className='dashboard_icon_div1'>
                                        <div>
                                            <BsClockHistory size='2.5em' className='icon_div1' />
                                        </div>
                                    </div>
                                </Col>
                                <Col md={9}>
                                    <div className='dashboard_card_details'>
                                        <div>
                                            <p className='d_count'>12</p>
                                            <p className='d_text'>Tenant</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className='dashboard_card p-3 shadow-sm' style={{ cursor: "pointer" }} onClick={() => navigate("")}>
                            <Row>
                                <Col md={3}>
                                    <div className='dashboard_icon_div2'>
                                        <div>
                                            <BsClock size='2.5em' className='icon_div2' />
                                        </div>
                                    </div>
                                </Col>
                                <Col md={9}>
                                    <div className='dashboard_card_details'>
                                        <div>
                                            <p className='d_count'>12</p>
                                            <p className='d_text'>Expiry Alert</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className='dashboard_card p-3 shadow-sm' style={{ cursor: "pointer" }} onClick={() => navigate("")}>
                            <Row>
                                <Col md={3}>
                                    <div className='dashboard_icon_div3'>
                                        <div>
                                            <MdMapsHomeWork size='2.5em' className='icon_div3' />
                                        </div>
                                    </div>
                                </Col>
                                <Col md={9}>
                                    <div className='dashboard_card_details'>
                                        <div>
                                            <p className='d_count'>122</p>
                                            <p className='d_text'>Deu Rent</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </Card>
                    </Col>
                    <Container className='mt-5'>
                        <CardHeader>Expiry Rent List</CardHeader>
                        <CardBody>
                            <Table bordered>
                                    <thead>
                                        <tr>
                                            <th>Shop Code</th>
                                            <th>Tenant Name</th>
                                            <th>Reint Fee</th>
                                            <th>Amount Paid</th>
                                            <th>Reint End Date</th>
                                        </tr>
                                    </thead>
                            </Table>
                        </CardBody>
                    </Container>
                </Row>
                {/* </Card> */}
            </Container>
        </div>
    )
}
