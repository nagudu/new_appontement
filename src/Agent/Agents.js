import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import { FaCalendar, FaUser } from 'react-icons/fa'
import { MdMapsHomeWork } from 'react-icons/md'
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
    const [agentList, setAgentList] = useState([])

    const navigate = useNavigate()
    const [createAgent, setCreateAgent] = useState(false)

    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }))
    }
    const handleAdd = () => {
        // setForm(_form)

        setAgentList((p) => ([...p, { ...form }]))
        console.log(form)
        setForm(_form)
    }
    const handleSubmit = () => {
        setForm(_form)
        console.log({ agentList })
        setCreateAgent(!createAgent)
    }
    return (
        <div>
            <Container className='mt-3'>
                {/* {JSON.stringify({ agentList })} */}
                <Card>
                    <CardHeader>
                        <Row>
                            <Col md={3}><Button onClick={() => navigate(-1)}>Back</Button>{" "}
                            </Col><Col className='text-center'>{createAgent ? 'Add New Agent' : "Agents"}</Col>
                            <Col md={3} style={{ float: 'right' }}><Button onClick={() => setCreateAgent(!createAgent)}>Add New Agent</Button></Col>
                        </Row>
                    </CardHeader>

                    {createAgent ?

                        <CardBody>
                            <Row>
                                <Col md={6}>
                                    <Label>Name</Label>
                                    <Input type='text' name='name' value={form.name} onChange={handleChange} />
                                </Col>
                                <Col md={6}>
                                    <Label>Email</Label>
                                    <Input type='email' name='email' value={form.email} onChange={handleChange} />
                                </Col>
                                <Col md={6}>
                                    <Label>Address</Label>
                                    <Input type='text' name='address' value={form.address} onChange={handleChange} />
                                </Col>
                                <Col md={6}>
                                    <Label>Password</Label>
                                    <Input type='password' name='password' value={form.password} onChange={handleChange} />
                                </Col>
                                <Col md={6}>
                                    <Label>Phases</Label>
                                    <Input type='text' name='phases' value={form.phases} onChange={handleChange} />
                                </Col>
                                <Col md={6}>
                                    <Label>Phases No</Label>
                                    <Input type='number' name='phases_no' value={form.phases_no} onChange={handleChange} />
                                </Col>
                                <Col md={6}>
                                    <Label>Picture</Label>
                                    <Input type='file' name='picture' value={form.picture} onChange={handleChange} />
                                </Col>

                                <Col md={6} className=' pt-3 text+-right'>
                                    <Button className='mt-3 button-block' onClick={handleAdd}>Add agent</Button>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={12} className='text-center'><Button className='mt-3' onClick={handleSubmit}>Submit</Button></Col>
                            </Row>
                        </CardBody>
                        : <CardBody>
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
                                    {agentList.length ?

                                        <tbody>
                                            <tr style={{ marginBottom: 30 }} className="">
                                                <td style={{ margin: 0, marginRight: 10 }}><MdMapsHomeWork className='not_icon' size='1em' color='grey' />{' '}PM </td>
                                                <td style={{ margin: 0, marginRight: 10 }}><MdMapsHomeWork className='not_icon' size='1em' color='grey' />{' '}Phase A</td>
                                                <td style={{ margin: 0, marginRight: 10 }}><FaUser className='not_icon' size='1em' color='grey' />{' '}<a href="/open"> Habu Yakasai</a></td>
                                                <td style={{ margin: 0, marginRight: 10 }}><FaCalendar className='not_icon' size='1em' color='grey' />{' '}Date: 12/12/2022</td>
                                            </tr>
                                            <tr style={{ marginBottom: 30 }} className="">
                                                <td style={{ margin: 0, marginRight: 10 }}><MdMapsHomeWork className='not_icon' size='1em' color='grey' />{' '}BS </td>
                                                <td style={{ margin: 0, marginRight: 10 }}><MdMapsHomeWork className='not_icon' size='1em' color='grey' />{' '}Phase C </td>
                                                <td style={{ margin: 0, marginRight: 10 }}><FaUser className='not_icon' size='1em' color='grey' />{' '}<a href="/open"> Musa Isah</a></td>
                                                <td style={{ margin: 0, marginRight: 10 }}><FaCalendar className='not_icon' size='1em' color='grey' />{' '}Date: 12/12/2022</td>
                                            </tr>
                                        </tbody> :
                                        <h5>N/A</h5>}
                                </Table>
                            </Row>
                        </CardBody>}
                </Card>
            </Container>
        </div>
    )
}
