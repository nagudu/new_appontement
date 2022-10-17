import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Container, Row, Table } from 'reactstrap'

export default function RentExpiry() {
    const navigat = useNavigate()
  return (
    <div>
        <Container className='mt-3'>
            <Card>
                <center><CardHeader>onClick</CardHeader></center>
                <CardBody>
                    <Button onClick={()=> navigat(-1)}>Back</Button>
                    <Row className='mt-3'>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Phase</th>
                                    <th>Code</th>
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
