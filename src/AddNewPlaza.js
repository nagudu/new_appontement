import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row } from 'reactstrap'
import { _postApi } from './apiCall'
import { BsArrowLeft } from "react-icons/bs"
import Csbtn from './Csbtn'

export default function AddNewPlaza() {
    const navigate = useNavigate()
    // const navagite = useNavigate()
    const _form = {
        name: "",
        address: "",
        no_of_shop: "",
        code: "",
    }
    const [form, setForm] = useState(_form)
    const [data, setData] = useState([])

    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }))
    }
    const handleAdd = () => {
        _postApi("plazas", form, () => {
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
                            Add New Plaza
                        </CardHeader>
                    </center>
                    <CardBody>
                        <Button
                            onClick={() => navigate("/plaza")}
                            color='primary'
                        >
                            <BsArrowLeft size='1.5em' />
                            {' '}

                            Back</Button>

                        <Row>
                            <Col md={6}>
                                <Label>Name</Label>
                                <Input type='text' name='name'
                                    value={form.name}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Address</Label>
                                <Input type='text' name='address'
                                    value={form.address}
                                    onChange={handleChange} />
                            </Col>

                            <Col md={6}>
                                <Label>Code</Label>
                                <Input type='text'
                                    name='code'
                                    value={form.code}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>No Of Shop</Label>
                                <Input type='number' name='no_of_shop'
                                    value={form.no_of_shop}
                                    onChange={handleChange} />
                            </Col>
                        </Row>
                        <center>
                            <Button className='mt-3'
                                color='primary'
                                onClick={handleAdd}>
                                Save</Button>
                            {/* <Csbtn  text="add" /> */}
                        </center>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}
