import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Label, Row } from 'reactstrap'
import { BsArrowLeft } from "react-icons/bs"

export default function ManagerView() {
    const navagite = useNavigate()
    const [result, setResult] = useState([])
    return (
        <div>
            <Container className='mt-3'>
                <Card>
                    <center>
                        <CardHeader>
                            Managers View
                        </CardHeader>
                    </center>
                    <CardBody>
                        <Button
                            color='primary'
                            onClick={()=> navagite('/managers')}>
                            <BsArrowLeft size='1.5em' />
                            {' '}
                            Back
                        </Button>
                        <Row className='mt-3'>
                            <Col md={4}>
                                <Label><b>Name:  </b> {result.name}</Label>
                            </Col>
                            <Col md={4}>
                                <Label>
                                    <b>Phone:  </b>
                                    {result.phone}
                                </Label>
                            </Col>
                            <Col md={4}>
                                <Label>
                                    <b>Email:  </b>
                                    {result.email}
                                </Label>
                            </Col>
                            <Col md={4}>
                                <Label>
                                    <b>Address:  </b>
                                    {result.address}
                                </Label>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}
