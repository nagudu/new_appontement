// import { isCursorAtEnd } from '@testing-library/user-event/dist/utils'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Label, Row, Table } from 'reactstrap'
import _fetchApi from './api'
import useQuery from './helper'
import { BsArrowLeft, BsEye, BsPlusCircle } from "react-icons/bs"
import { _postApi } from './apiCall'

export default function PlazaView() {

    const query = useQuery()
    const plaza_id = query.get('id')
    const _form = {
        code: '',
        name: '',
        no_of_shops: '',
        plaza_id,
        rent_fee: 0,
        rent_start_date: null,
        rent_end_date: null
    }
    const navigate = useNavigate()
    const [form, setForm] = useState(_form)
    const [viewPhase, setViewPhase] = useState(false)
    // const [result, setResult] = useState([])
    //get-plaza-phase-list
    const [data, setData] = useState([])
    const [phases, setPhases] = useState([])
    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }));
    }
    const handleSubmit = () => {
        // console.log(form);
        _postApi("plaza_phases", form, (resp) => {
            if (resp.success) {
                setForm(_form)
                fetchPlazaPhases()
                handleFetch()
                alert("Success");
                setViewPhase(!viewPhase)
            }
        },
            (err) => console.log(err)
        )
    }



    useEffect(() => {
        // fetchPlazas()
    }, [0])
    // const [result, setResult] = useState([])
    const fetchPlazaPhases = useCallback(() => {
        _fetchApi(
            `http://localhost:34567/getPlaza?id=${plaza_id}`,
            (data) => {
                if (data.success) {
                    setData(data.results[0])
                }
                setData(data.results[0])
            }
        )
    }, [0])

    useEffect(() => {
        fetchPlazaPhases()
    }, [0])

    const handleFetch = () => {
        _fetchApi(
            `http://localhost:34567/get-plaza-phase-list`,
            (data) => {
                if (data.success) {
                    setPhases(data.results)
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
                            onClick={() => navigate(-1)}>
                            <BsArrowLeft size='1.5em' />
                            {' '}
                            Back
                        </Button>
                        {' '}

                        <Button
                            color='primary'
                            onClick={() => setViewPhase(!viewPhase)}>
                            <BsPlusCircle size='1.5em' />
                            {' '}
                            Add phase
                        </Button>
                        {!viewPhase ? <Row className='mt-3'>
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
                        </Row> : <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for='' >Name</Label>
                                    <Input type="text"
                                        name='name'
                                        value={form.name}
                                        onChange={handleChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for='' >Code</Label>
                                    <Input type="text"
                                        name='code'
                                        value={form.code} onChange={handleChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for='' >No of Shops</Label>
                                    <Input type="number"
                                        name='no_of_shops'
                                        value={form.no_of_shops}
                                        onChange={handleChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for='' >Rent fee</Label>
                                    <Input type="number"
                                        name='rent_fee'
                                        value={form.rent_fee}
                                        onChange={handleChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for='' >Rent start date</Label>
                                    <Input type="date"
                                        name='rent_start_date'
                                        value={form.rent_start_date}
                                        onChange={handleChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for='' >Rent end date</Label>
                                    <Input type="date" 
                                        name='rent_end_date'
                                        value={form.rent_end_date}
                                        onChange={handleChange} />
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <center>
                                    <Button onClick={() => handleSubmit()} >Submit</Button>
                                </center>
                            </Col>
                        </Row>}
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
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {phases.map((item, i) =>
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.code}</td>
                                        <td>{item.no_of_shops}</td>
                                        <td><Button color='primary'
                                            onClick={() => navigate(`/view_plza_phases?phase_id=${item.id}&phase_code=${item.code}`)}
                                        >
                                            <BsEye size='1em' color='white' />
                                            {' '}
                                            View</Button></td>
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
