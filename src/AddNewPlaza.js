import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row } from 'reactstrap'
import { _postApi } from './apiCall'

export default function AddNewPlaza() {
    const _form = {
        name: "",
        address: "",
        // manager_id: "",
        code: "",
    }
    const [form, setForm] = useState(_form)
    const [data, setData] = useState([])

    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }))
    }
    const handleAdd = () => {
        _postApi("plaza", form, () => {
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
                            Add New Plaza
                        </CardHeader>
                    </center>
                    <CardBody>
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
                            {/* <Col md={6}>
                                <Label>Manager</Label>
                                <Input type='text' name='manager_id'
                                    value={form.manager_id}
                                    onChange={handleChange} />
                            </Col> */}
                            <Col md={6}>
                                <Label>Code</Label>
                                <Input type='text'
                                    name='code'
                                    value={form.code}
                                    onChange={handleChange} />
                            </Col>
                        </Row>
                        <center>
                            <Button className='mt-3'
                                onClick={handleAdd}>
                                Save</Button>
                        </center>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}
