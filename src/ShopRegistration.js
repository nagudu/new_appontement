import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row } from 'reactstrap'
import _fetchApi from './api'
import { _postApi } from './apiCall'
import {BsArrowLeft} from 'react-icons/bs'

export default function ShopRegistration() {
    const navigate = useNavigate()
    const _form = {
        name: "",
        // phone: "",
        shop_name: "",
        shop_no: "",
        quantity: "",
        member_of_pillars: "",
        rent_start_date: "",
        rent_end_date: "",
        rent_fee: "",
        amount_paid: "",
        // discription: "",
    }
    const handleAdd = () => {
        _postApi("shop_registration", form, () => {
            setForm(_form)
            navigate(-1)
        },

            (err) => console.log(err)
        )
        console.log(_form)
    }
    const [form, setForm] = useState(_form)
    const [data, setData] = useState([])

    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }));
    }
    const [setting, setSetting] = useState([])
    const handleFetch = () => {
        _fetchApi(
            `http://localhost:34567/getsetting`,
            (data) => {
                if (data.success) {
                }
                console.log(data.results)
                setSetting(data.results[0])
            }
        )


    }
    useEffect(() => {
        handleFetch()
    }, [])
    return (
        <div>
            <Container className='mt-3'>
                <Card>
                    <center>
                        <CardHeader>
                            <center><b>Shop Registration</b></center>
                        </CardHeader>
                    </center>
                    <CardBody>
                            <Button
                                style={{ marginRight: "67rem" }}
                                onClick={() => navigate("/")}
                                color="primary"
                            >
                        <BsArrowLeft size='1.5em'/>
                                  {' '}Back
                            </Button>

                        <Row className='mt-3'>
                            <Col md={6}>
                                <Label>Name</Label>
                                <Input type='text' name='name'
                                    value={form.name}
                                    onChange={handleChange} />
                            </Col>
                            {/* <Col md={6}>
                                <Label>Phone No</Label>
                                <Input type='number' name='phone'
                                    value={form.phone}
                                    onChange={handleChange} />
                            </Col> */}
                            <Col md={6}>
                                <Label>Shop Name</Label>
                                <Input type='select' name='shop_name'
                                    value={form.shop_name}
                                    onChange={handleChange} >
                                    {
                                        setting && setting.map((i) =>
                                            <option>{i.shop_name}</option>
                                        )
                                    }
                                    <option></option>
                                </Input>
                            </Col>
                            <Col md={6}>
                                <Label>Shop No</Label>
                                <Input type='number' name='shop_no'
                                    value={form.shop_no}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Quantity</Label>
                                <Input type='number' name='quantity'
                                    value={form.quantity}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Number Of Pillars</Label>
                                <Input type='number' name='member_of_pillars'
                                    value={form.member_of_pillars}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Rent Start Date</Label>
                                <Input type='date' name='rent_start_date'
                                    value={form.rent_start_date}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Rent Fee</Label>
                                <Input type='text' name='rent_fee'
                                    value={form.rent_fee}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Rent End Date</Label>
                                <Input type='date' name='rent_end_date'
                                    value={form.rent_end_date}
                                    onChange={handleChange} />
                            </Col>

                            <Col md={6}>
                                <Label>Amount Paid</Label>
                                <Input type='number' name='amount_paid'
                                    value={form.amount_paid}
                                    onChange={handleChange} />
                            </Col>
                            {/* <Col md={6}>
                                <Label>Discription</Label>
                                <Input type='text' name='discription'
                                    value={form.discription}
                                    onChange={handleChange} />
                            </Col> */}
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
