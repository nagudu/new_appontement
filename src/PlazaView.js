// import { isCursorAtEnd } from '@testing-library/user-event/dist/utils'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Label, Row, Table } from 'reactstrap'
import _fetchApi from './api'
import useQuery from './helper'
import { BsArrowLeft, BsEye, BsPlusCircle } from "react-icons/bs"
import { _postApi } from './apiCall'
import moment from 'moment'
import CustomCardHeader from './CustomCardHeader'
import { CustomButton } from './components/UI'

export default function PlazaView() {

    const [plaza, setPlaza] = useState([])
    const [phases, setPhases] = useState([])
    const query = useQuery()
    const plaza_id = query.get('plaza_id')
    const today = moment().format('YYYY-MM-DD')
    const date = { from: today, to: moment(today).add(12, 'months').format('YYYY-MM-DD') }
    const _form = {
        code: plaza.code,
        name: plaza.name,
        no_of_shops: '',
        plaza_id,
        rent_fee: null,
        rent_start_date: date.from,
        rent_end_date: date.to
    }
    const navigate = useNavigate()
    const [form, setForm] = useState(_form)
    const [viewPhase, setViewPhase] = useState(false)
    // const [result, setResult] = useState([])
    //get-plaza-phase-list
    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }));
    }
    const handleSubmit = () => {
        // console.log(form);
        _postApi("plaza_phases?query_type=create", form, (resp) => {
            if (resp.success) {
                setForm(_form)
                getPlaza()
                getPhases()
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
    const getPlaza = useCallback(() => {
        _fetchApi(
            `/getPlaza?plaza_id=${plaza_id}`,
            (plaza) => {
                if (plaza.success) {
                    setPlaza(plaza.results[0])
                    setForm((p) => ({ ...p, code: plaza.results[0].code, name: plaza.results[0].name }))
                }
            })
    }, [plaza_id])

    useEffect(() => {
        getPlaza()
    }, [0])

    const getPhases = () => {
        _fetchApi(
            `/get_plaza_phases?query_type=list-by-plaza&plaza_id=${plaza_id}`,
            (plaza) => {
                if (plaza.success) {
                    setPhases(plaza.results)
                }
            }
        )
    }
    useEffect(() => {
        getPhases()
    }, [0])
    return (
        <div>
            <Container className='mt-3'>
                <Card>
                    <CustomCardHeader>
                        <Row>
                            <Col md={9}>{`${plaza.name} Plaza` || ' Plaza View'}</Col>
                            <Col md={3} className='text-right'>
                                <CustomButton outline
                                    color='primary'
                                    onClick={() => setViewPhase(!viewPhase)}>
                                    <BsPlusCircle size='1.5em' />
                                    {' '}
                                    Add phase
                                </CustomButton>
                            </Col>
                        </Row>
                    </CustomCardHeader>
                    <CardBody>
                        {!viewPhase ? <Row className='mt-3'>
                            <Col md={4}>
                                <Label><b>Name:  </b>
                                    {plaza.name}
                                </Label>
                            </Col>
                            <Col md={4}>
                                <Label>
                                    <b>Address:  </b>
                                    {plaza.address}
                                </Label>
                            </Col>

                            <Col md={4}>
                                <Label>
                                    <b>No Of Shop:  </b>
                                    {plaza.no_of_shop}
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
                    <CardBody>
                        {phases.length > 0 ?
                            <>
                                <h4> {plaza.name} Phases</h4>
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <th width="3%">S/N</th>
                                            <th>Name</th>
                                            <th>Code</th>
                                            <th>No Of Shop</th>
                                            <th>Rent fee</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {phases.map((item, i) =>
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td><Link to={`/view_plza_phases?phase_id=${item.id}&phase_code=${item.code}&plaza_id=${plaza_id}`}>{item.name}</Link></td>
                                                <td>{item.code}</td>
                                                <td>{item.no_of_shops}</td>
                                                <td className='text-right'>{item.rent_fee}</td>
                                            </tr>
                                        )}
                                    </tbody>

                                </Table>
                            </> : <h4>Phases not available</h4>}
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}
