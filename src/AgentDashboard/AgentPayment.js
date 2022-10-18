import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row, Table } from 'reactstrap'

export default function AgentPayment() {
    const navigate = useNavigate()
    const _form = {
        tenant_name: "",
        search: "",
        shop: "",
        balance: "",
        amount_paid: "",
        discription: "",
    }
    const [form, setForm] = useState(_form)
    const [showPaymentForm, setShowPaymentForm] = useState(false)

    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }))
    }
    const handleAdd = () => {
        setForm(_form)
        console.log(form)
    }
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
                                <BsArrowLeft size='1.5em' />
                                {' '}

                                Back</Button></Col>
                            <Col md={4}>Payment</Col>
                            <Col md={3} style={{float:'right'}}><Button color='primary' onClick={() => setShowPaymentForm(!showPaymentForm)}><AiOutlinePlusCircle size='1.5em'/>
                           {" "}Add New Agent</Button></Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        {showPaymentForm ? <Row>
                            <Col md={12}>
                                <Input type='search'
                                    name='search' value={form.search}
                                    placeholder='Search...'
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col md={6}>
                                <Label>Tenant Name</Label>
                                <Input type='select'
                                    name='tenant_name'
                                    value={form.tenant_name}
                                    onChange={handleChange}>
                                    <option></option>
                                </Input>
                            </Col>
                            <Col md={6}>
                                <Label>Shop</Label>
                                <Input type='select'
                                    name='shop'
                                    value={form.shop}
                                    onChange={handleChange}>
                                    <option></option>
                                </Input>
                            </Col>
                            <Col md={6}>
                                <Label>Balance</Label>
                                <Input type='number'
                                    name='balance'
                                    value={form.balance}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Amount Paid</Label>
                                <Input type='number'
                                    name='amount_paid'
                                    value={form.amount_paid}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Discription</Label>
                                <Input type='text'
                                    name='discription'
                                    value={form.discription}
                                    onChange={handleChange} />
                            </Col>
                        </Row> : <>

                            <Table bordered>
                               
                                    <thead>
                                        <tr>
                                            <th>S/N</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>ishaq</td>
                                            <td>musa</td>
                                            <td>idi</td>
                                            <td>halifa</td>
                                        </tr>
                                        <tr>
                                            <td>ishaq</td>
                                            <td>musa</td>
                                            <td>idi</td>
                                            <td>halifa</td>
                                        </tr>
                                    </tbody>
                               
                            </Table>
                        </>}
                        <center>
                            <Button
                                color='primary'
                                className='mt-3'
                                onClick={handleAdd}>
                                Save
                            </Button>
                        </center>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}
