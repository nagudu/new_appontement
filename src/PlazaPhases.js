import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row } from 'reactstrap'
import { _postApi } from './apiCall'

export default function PlazaPhases() {
    const navigate = useNavigate()
    const _form = {
        name: "",
        code: "",
        no_of_shops: ""
    }
    const [form, setForm] = useState(_form)

    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }));
    }
    const handleAdd = () => {
        _postApi("plaza_phases?query_type=create", form, () => {
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
                            Plaza Phases
                        </CardHeader>
                    </center>
                    <CardBody>
                        <Row>
                            <Col md={6}>
                                <Label>Name</Label>
                                <Input type='text'
                                    name='name' value={form.name} onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Code</Label>
                                <Input type='text' name='code' value={form.code} onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>No Of Shop</Label>
                                <Input type='Number' name='no_of_shops' value={form.no_of_shops} onChange={handleChange} />
                            </Col>
                        </Row>
                        <center>
                            <Button
                                onClick={handleAdd}
                                className='mt-3'
                                color='primary'
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
