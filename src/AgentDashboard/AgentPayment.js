import React, { useEffect, useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row, Table } from 'reactstrap'
import _fetchApi from '../api'
import { _postApi } from '../apiCall'

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
    const [result, setResult] = useState([])


    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }))
    }
    const handleAdd = () => {
        // form.shops = shop_list
        _postApi("shop_allocation", form, () => {
            setForm(_form)
            navigate(-1)
        },
            (err) => console.log(err)
        )
        console.log(_form)
    }
    const handleFetch = () => {
        _fetchApi(
            `http://localhost:34567/getTenantList`,
            (data) => {
                if (data.success) {
                }
                console.log(data.results)
                setResult(data.results)
            }
        )


    }
    useEffect(() => {
        handleFetch()
    }, [0])
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
                            <Col md={3} style={{ float: 'right' }}><Button color='primary' onClick={() => setShowPaymentForm(!showPaymentForm)}><AiOutlinePlusCircle size='1.5em' />
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
                                    {/* {result.map((item,index) =>
                                    <tr>
                                        <td >{item}</td>
                                        <td style={{ cursor: "pointer" }} onClick={() => setShowPaymentForm(!showPaymentForm)}>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                    </tr>
                                  )} */}
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
