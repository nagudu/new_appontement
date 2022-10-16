import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row, Table } from 'reactstrap'

export default function Agents() {
    const _form = {
        name: "",
        email: "",
        picture: "",
        phases: "",
        address: "",
        phases_no: "",
        password: "",
    }

    const [form, setForm] = useState(_form)

    const handleChange = ({target: {name, value}}) => {
        setForm((p)=> ({...p, [name]: value}))
    }
    const handleAdd = () => {
        setForm(_form)
        console.log(form)
    }
    const navigate = useNavigate()
    const [createAgent,setCreateAgent] = useState(false)
    return (
        <div>
            <Container className='mt-3'>
                <Card>
                    <CardHeader>
                        <Row>
                            <Col md={3}><Button onClick={() => navigate(-1)}>Back</Button>{" "}
                            </Col><Col className='text-center'>{createAgent?'Add New Agent': "Agents"}</Col>
                            <Col md={3} style={{float:'right'}}><Button onClick={() => setCreateAgent(!createAgent)}>Add New Agent</Button></Col>
                        </Row>
                    </CardHeader>

                    {createAgent ?
                        
                            <CardBody>
                                <Row>
                                    <Col md={6}>
                                        <Label>Name</Label>
                                        <Input type='text' name='name' value={form.name} onChange={handleChange}/>
                                    </Col>
                                    <Col md={6}>
                                        <Label>Email</Label>
                                        <Input type='email' name='email' value={form.email} onChange={handleChange}/>
                                    </Col>
                                    <Col md={6}>
                                        <Label>Address</Label>
                                        <Input type='text' name='address' value={form.address} onChange={handleChange}/>
                                    </Col>
                                    <Col md={6}>
                                        <Label>Password</Label>
                                        <Input type='password' name='password' value={form.password} onChange={handleChange}/>
                                    </Col>
                                    <Col md={6}>
                                        <Label>Phases</Label>
                                        <Input type='text' name='phases' value={form.phases} onChange={handleChange}/>
                                    </Col>
                                    <Col md={6}>
                                        <Label>Phases No</Label>
                                        <Input type='number' name='phases_no' value={form.phases_no} onChange={handleChange}/>
                                    </Col>
                                    <Col md={6}>
                                        <Label>Picture</Label>
                                        <Input type='file' name='picture' value={form.picture} onChange={handleChange}/>
                                    </Col>
                                </Row>
                                <center><Button className='mt-3' onClick={handleAdd}>Submit</Button></center>
                            </CardBody>
                            :<CardBody>
                                <Row className='mt-3'>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>S/N</th>
                                                <th>Name</th>
                                                <th>Shops</th>
                                                <th>Picture</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                    </Table>
                                </Row>
                            </CardBody>}
                        </Card>
                    </Container>
                </div>
    )
}
