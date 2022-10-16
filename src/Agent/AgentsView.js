import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Label, Row, Table } from 'reactstrap'

export default function AgentsView() {
    const navigate = useNavigate()
  return (
    <div>
        <Container className='mt-3'>
            <Card>
            <center> <CardHeader>Agent Viwe</CardHeader></center>
                <CardBody>
                <Button onClick={()=> navigate(-1)}>Back</Button>
                    <Row className='mt-3'>
                        <Col md={4}>
                            <Label><b>Name:</b> </Label>
                        </Col>
                        <Col md={4}>
                            <Label><b>Address:</b> </Label>
                        </Col>
                        <Col md={4}>
                            <Label><b>Phone:</b> </Label>
                        </Col>
                        <Col md={4}>
                            <Label><b>Email:</b> </Label>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>
        <Container className='mt-4'>
            <Card>
            <center><CardHeader>Shops</CardHeader></center>
            <CardBody>
                <Row>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Plaza Name</th>
                                <th>Phases Name</th>
                                <th>Shop Code</th>
                                <th>Tenant</th>
                                <th>Amount Paid</th>
                                <th>State</th>
                            </tr>
                        </thead>
                    </Table>
                </Row>
            </CardBody>
            </Card>
        </Container>
    </div>
  )
}
