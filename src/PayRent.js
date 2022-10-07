import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row, Table } from 'reactstrap'
import _fetchApi from './api'
import { _postApi } from './apiCall'
import CustomButton from './CustomButton'
import CustomCardHeader from './CustomCardHeader'
import useQuery from './helper'

export default function PayRent() {
    const _form = {
        year: "",
        amount_paid: "",
        discription: "",
    }
    const [form, setForm] = useState(_form)
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }))
    }
    const query = useQuery()
    const id = query.get('id')
    const params = useParams()
    // let name = params.name
    const [result, setResult] = useState([])

    const handleFetch = () => {
        _fetchApi(
            `http://localhost:34567/get_shop_registration?id=${id}`,
            (data) => {
                if (data.success) {
                    setData(data.results[0])
                }
                console.log(data.results[0])
                setResult(data.results[0])
            }
        )


    }
    useEffect(() => {
        handleFetch()
    }, [0])
    const handleAdd = () => {
        const obj = {
            ...form,
            customer_id: id,
            name: result.name,
            shop_no: result.shop_no
        }
        _postApi("payment_report", obj, () => {
            setForm(_form)
        },
            (err) => console.log(err)
        )
        console.log(_form)
    }
    return (
        <div>
            <Container className='mt-3'>
                <Card>
                    {/* <CardHeader> */}
                        {/* <Button
                            style={{ marginRight: "65rem" }}
                            onClick={() => navigate(`/pay_rent?id=${result.id}`)}
                            color="primary"
                        >
                            Back
                        </Button > */}
                        {/* <center><b>Rent Pay</b></center>
                    </CardHeader> */}
                    <CustomCardHeader text='Back' header='Rent Pay' />
                    <CardBody>
                        <Button
                            onClick={() => navigate(`/report?id=${result.id}`)}
                            style={{ marginLeft: "65rem" }}
                            color="primary"
                        >
                            Report
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
                                    <b>Shop No:  </b>
                                    {result.shop_no}
                                </Label>
                            </Col>
                            <Col md={4}>
                                <Label>
                                    <b>Number Of Pillars:  </b>
                                    {result.member_of_pillars}
                                </Label>
                            </Col>
                            <Col md={4}>
                                <Label>
                                    <b>Rent Start Date:  </b>
                                    {result.rent_start_date}
                                </Label>
                            </Col>
                            <Col md={4}>
                                <Label>
                                    <b>Rent End Data:  </b>
                                    {result.rent_end_date}
                                </Label>
                            </Col>
                            <Col md={4}>
                                <Label>
                                    <b>Rent Fee:  </b>
                                    {result.rent_fee}
                                </Label>
                            </Col>
                            <Col md={4}>
                                <Label>
                                    <b>Amount Paid:  </b>
                                    {result.amount_paid}
                                </Label>
                            </Col>
                            <Col md={4}>
                                <Label>
                                    <b>Discription:  </b>
                                    {result.discription}
                                </Label>
                            </Col>


                            <Col md={6}>
                                <Label>Year</Label>
                                <Input type='date'
                                    name='year'
                                    value={form.year}
                                    onChange={handleChange}
                                />
                            </Col>
                            {/* <Col md={3}></Col> */}
                            <Col md={3}>
                                <Label className='mt-4'>
                                    <b>Preniums Balance</b>_____________
                                </Label>
                            </Col>
                            <Col md={3}>
                                <Label className='mt-4'>
                                    <b>Current Balance</b>_____________
                                </Label>
                            </Col>
                            <Col md={6}>
                                <Label>Amount Paid</Label>
                                <Input type='number'
                                    name='amount_paid'
                                    value={form.amount_paid}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col md={6}>
                                <Label>Discription</Label>
                                <Input type='text'
                                    name='discription'
                                    value={form.discription}
                                    onChange={handleChange}
                                />
                            </Col>

                        </Row>
                        <center>
                            <Button
                                className='mt-3'
                                onClick={handleAdd}
                                color="primary"
                            >
                                Save
                            </Button>
                        </center>

                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}
