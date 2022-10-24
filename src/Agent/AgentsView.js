import React, { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Label, Row, Table } from 'reactstrap'
import _fetchApi from '../api'
import useQuery from '../helper'

export default function AgentsView() {
    const navigate = useNavigate()
    const query = useQuery()
    const agent_id = query.get('agent_id')
    const [agent, setAgent] = useState({})
    const [phases, setPhases] = useState([])
    const getAgent = useCallback(() => {
        _fetchApi(
            `/agents?query_type=select-one&agent_id=${agent_id}`,
            (data) => {
                if (data.success) {
                    setAgent(data.results[0])
                }
            }
        )
    }, [agent_id])
    useEffect(() => {
        getAgent()
    }, [0])
    const getPhases = useCallback(() => {
        _fetchApi(
            `/get_plaza_phases?query_type=select-agent&agent_id=${agent_id}`,
            (data) => {
                if (data.success) {
                    setPhases(data.results)
                }
            }
        )
    }, [agent_id])
    useEffect(() => {
        getPhases()
    }, [0])
    return (
        <div>
            <Container className='mt-3'>
                {/* {JSON.stringify({ phases })} */}
                <Card>
                    <center> <CardHeader><Row><Col md={2} className='text-left'><Button onClick={() => navigate(-1)}>Back</Button>
                    </Col><Col md={6}>{agent.name || 'Agent View'}</Col></Row></CardHeader></center>
                    <CardBody>
                        <Row>
                            <Col md={12} className='text-center'><img width={100} height={100} src={agent.picture} className="" /></Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col md={3}>
                                <Label><b>Name: {agent.name}</b> </Label>
                            </Col>
                            <Col md={3}>
                                <Label><b>Address: {agent.address}</b> </Label>
                            </Col>
                            <Col md={3}>
                                <Label><b>Phone:  {agent.phone_no}</b> </Label>
                            </Col>
                            <Col md={3}>
                                <Label><b>Email:  {agent.email}</b> </Label>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
            <Container className='mt-4'>
                <Card>
                    <center><CardHeader>Manage phases</CardHeader></center>
                    <CardBody>
                        <Row>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Plaza Name</th>
                                        <th>Phases Name</th>
                                        <th>Phase Code</th>
                                        <th>Tenants</th>
                                        <th>Revenue collected</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {phases.map((phase, idx) => (
                                        <tr>
                                            <td>{idx + 1}</td>
                                            <td><Link to={`/plaza_view?plaza_id=${phase.plaza_id}`} >{phase.plaza_name}</Link></td>
                                            <td><Link to={`/view_plza_phases?phase_id=${phase.id}&phase_code=${phase.code}`} >{phase.name}</Link></td>
                                            <td>{phase.code}</td>
                                            <td>{phase.code}</td>
                                            <td>{phase.revenue}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}
