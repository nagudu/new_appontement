import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'

export default function AgentTenant() {
    const navigate = useNavigate()
  return (
    <div>
        <Container className='mt-3'>
            <Card>
                <CardHeader>
                    <Row>
                        <Col md={4}><Button
                        onClick={() => navigate(-1)}
                        color='primary'
                        >
                             <BsArrowLeft size='1.5em'/>
                                  {' '}
                           
                            Back</Button></Col>
                        <Col md={4} className="mt-2">Tenent</Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <Row>

                    </Row>
                </CardBody>
            </Card>
        </Container>
    </div>
  )
}
