import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row, Table } from 'reactstrap'
import _fetchApi from './api'
import CustomButton from './CustomButton'
import CustomCardHeader from './CustomCardHeader'
import useQuery from './helper'

export default function Report() {
    const navigate = useNavigate()
    const _form = {
        from: "",
        to: "",
    }

    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }));
    }
    const query = useQuery()
    const id = query.get('id')
    const [form, setForm] = useState(_form)
    const [data, setData] = useState([])
    const [result, setResult] = useState([])

    const handleFetch = () => {
        _fetchApi(
            `/getRayment_report?id=${id}`,
            (data) => {
                if (data.success) {
                }
                console.log(data.results)
                setResult(data.results[0])
            }
        )


    }
    useEffect(() => {
        handleFetch()
    }, [0])
    return (
        <div>
            <Container className='mt-4'>
                <Card>
                    <CardHeader>
                        <p className='text-center text-dark mb-2'>Payment Report </p>
                    </CardHeader>
                    {/* <CustomCardHeader text='Back' header='Payment Report' /> */}
                    <CardBody>
                        {/* <Button color='primary'>Back</Button> */}
                        <Row>
                            <Col md={6}>
                                <Label>From</Label>
                                <Input type='date' name='from'
                                    value={form.from}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>To</Label>
                                <Input type='date' name='to'
                                    value={form.to}
                                    onChange={handleChange} />
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Amount Paid</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.map((item) =>
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.amount_paid}</td>
                                            <td>{item.year}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}
