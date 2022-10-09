import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row } from 'reactstrap'
import _fetchApi from './api'
import { _postApi } from './apiCall'

export default function ManagerUser() {
    const _form = {
        name: "",
        phone_no: "",
        email: "",
        address: "",
        picture: "",
    }
    const [form, setForm] = useState(_form)
    const [data, setData] = useState([])

    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }))
    }
    const handleAdd = () => {
        _postApi("manager", form, () => {
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
                    <center>
                        <CardHeader>
                            Manager User
                        </CardHeader>
                    </center>
                    <CardBody>
                        <Row>
                            <Col md={6}>
                                <Label>Name</Label>
                                <Input type='text'
                                    name='name'
                                    value={form.name}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Phone No</Label>
                                <Input type='number'
                                    name='phone_no'
                                    value={form.phone_no}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Email</Label>
                                <Input type='email'
                                    name='email'
                                    value={form.email}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Address</Label>
                                <Input type='text'
                                    name='address'
                                    value={form.address}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Pirture</Label>
                                <Input type='file'
                                    name='picture'
                                    value={form.picture}
                                    onChange={handleChange} />
                            </Col>

                        </Row>
                        <center><Button
                            className='mt-3'
                            onClick={handleAdd}>Submit</Button></center>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}
