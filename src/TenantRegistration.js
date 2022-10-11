// import { ResultType } from '@remix-run/router/dist/utils'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row, Table } from 'reactstrap'
import _fetchApi from './api'
import { _postApi } from './apiCall'
import {BsArrowLeft} from 'react-icons/bs'

export default function TenantRegistration() {
    const navigate = useNavigate()
    const _form = {
        name: "",
        phone_no: "",
        email: "",
        address: "",
        picture: "",
    }
    const [form, setForm] = useState(_form)
    const [data, setData] = useState([])
    const [result, setResult] = useState([])

    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }))
    }
    const handleAdd = () => {
        _postApi("tenant", form, () => {
            setForm(_form)
            navigate(-1)
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
                        Tenant Registration
                        </CardHeader>
                    </center>
                    <CardBody>
                        <Button
                        onClick={() => navigate("/tenant")}
                        color='primary'
                        >
                             <BsArrowLeft size='1.5em'/>
                                  {' '}
                           
                            Back</Button>
                        <Row className='mt-3'>
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
                        color='primary'
                            className='mt-3'
                            onClick={handleAdd}>
                                Submit
                                </Button></center>
                    </CardBody>
                </Card>
            </Container>
            <Container className='mt-3'>
                <Card>
                    <center>
                        <CardHeader>
                            User Name's Shops
                        </CardHeader>
                    </center>
                    <CardBody>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Name</th>
                                    <th>Code</th>
                                    <th>No Of Shop</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.map((item) =>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.code}</td>
                                    <td>{item.no_of_shops}</td>
                                </tr>
                                )}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}
