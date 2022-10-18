import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardHeader, Col, Container, Row } from 'reactstrap'

export default function AgentRepetion() {
    const navigate = useNavigate()
    return (
        <div>
            <Container className='mt-3'>
                <Card>
                    <CardHeader >
                        <Row>
                            <Col md={3}><Button onClick={() => navigate(-1)}>Back</Button>{" "}
                            </Col><Col className='text-center'>Add New Agent</Col>
                            <Col md={3} style={{ float: 'right' }}><Button >Add New Agent</Button></Col>
                        </Row>
                    </CardHeader>
                </Card>
            </Container>
        </div>
    )
}
