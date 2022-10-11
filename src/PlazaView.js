import { isCursorAtEnd } from '@testing-library/user-event/dist/utils'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Label, Row, Table } from 'reactstrap'
import _fetchApi from './api'
import useQuery from './helper'
import {BsArrowLeft} from "react-icons/bs"

export default function PlazaView() {
    const navigate = useNavigate()
    const [form, setForm] = useState()
    // const [result, setResult] = useState([])
    //get-plaza-phase-list
    const [data, setData] = useState([])
    const [phase, setPhase] = useState([])
    
    const query = useQuery()
	const id = query.get('id')
    useEffect(() => {
		// fetchPlazas()
	}, [0])
	// const [result, setResult] = useState([])
    const fetchPlazaPhases = () => {
        _fetchApi(
            `http://localhost:34567/getPlaza?id=${id}`,
            (data) => {
                if (data.success) {
                    setData(data.results[0])
                }
                setData(data.results[0])
            }
        )


    }
    
    useEffect(() => {
		fetchPlazaPhases()
	}, [0])
	const handleFetch = () => {
        _fetchApi(
            `http://localhost:34567/get-plaza-phase-list`,
            (data) => {
                if (data.success) {
                    setPhase(data.results)
                }
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
                            Plaza View
                        </CardHeader>
                    </center>
                    <CardBody>
                        <Button
                        color='primary'
                         onClick={() => navigate("/plaza_phases")}>
                        <BsArrowLeft size='1.5em'/>
                                  {' '}
                            Back
                            </Button>
                        <Row className='mt-3'>
                            <Col md={4}>
                                <Label><b>Name:  </b>
                                    {data.name}
                                </Label>
                            </Col>
                            <Col md={4}>
                                <Label>
                                    <b>Address:  </b>
                                    {data.address}
                                </Label>
                            </Col>
                            <Col md={4}>
                                <Label>
                                    <b>Code:  </b>
                                    {data.code}
                                </Label>
                            </Col>
                            <Col md={4}>
                                <Label>
                                    <b>No Of Shop:  </b>
                                    {data.no_of_shop}
                                </Label>
                            </Col>
                        </Row>
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
                            {phase.map((item,i) =>
                                <tr key={i}>
                                    <td>{i+1}</td>
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
