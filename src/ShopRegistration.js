import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row } from 'reactstrap'
import _fetchApi from './api'
import { _postApi } from './apiCall'
import {BsArrowLeft} from 'react-icons/bs'
import useQuery from './helper'

export default function ShopRegistration() {
    const query = useQuery()
    const phase_id = query.get('phase_id')
    const phase_code = query.get('phase_code')
    const navigate = useNavigate()
    const _form = {
        name: "",
        code: phase_code,
        rent_fee: "",
        rent_start_date: "",
        rent_end_date: "",
        tenant_id: "",
        phase_id
    }
    const handleAdd = () => {
        _postApi("create_shop", form, () => {
            setForm(_form)
            navigate(-1)
        },

            (err) => console.log(err)
        )
        console.log(_form)
    }
    const [form, setForm] = useState(_form)
    const [data, setData] = useState([])

    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }));
    }
    // const [setting, setSetting] = useState([])
    const handleFetch = () => {
        _fetchApi(
            `http://localhost:34567/getTenantList`,
            (data) => {
                if (data.success) {
                setData(data.results[0])
                }
                console.log(data.results[0])
            }
        )


    }
    useEffect(() => {
        handleFetch()
    }, [])
    return (
        <div>
            <Container className='mt-3'>
                
            {/* {JSON.stringify(form)} */}
                <Card>
                    <center>
                        <CardHeader>
                            <center><b>Shop Registration</b></center>
                        </CardHeader>
                    </center>
                    <CardBody>
                            <Button
                                // style={{ marginRight: "67rem" }}
                                onClick={() => navigate(`/view_plza_phases?phase_id=${phase_id}`)}
                                color="primary"
                            >
                        <BsArrowLeft size='1.5em'/>
                                  {' '}Back
                            </Button>

                        <Row className='mt-3'>
                            <Col md={6}>
                                <Label>Shop Name</Label>
                                <Input type='text' name='name'
                                    value={form.name}
                                    onChange={handleChange} />
                            </Col>
                         
                            <Col md={6}>
                                <Label>Shop Code</Label>
                                <Input type='text' name='code'
                                    value={form.code}
                                    onChange={handleChange} />
                                    {/* {
                                        setting && setting.map((i) =>
                                            <option>{i.name}</option>
                                        )
                                    }
                                    <option></option> */}
                                {/* </Input> */}
                            </Col>
                          
                            
                            <Col md={6}>
                                <Label>Rent Fee</Label>
                                <Input type='text' name='rent_fee'
                                    value={form.rent_fee}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Rent Start Date</Label>
                                <Input type='date' name='rent_start_date'
                                    value={form.rent_start_date}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Rent End Date</Label>
                                <Input type='date' name='rent_end_date'
                                    value={form.rent_end_date}
                                    onChange={handleChange} />
                            </Col>

                        
                              <Col md={6}>
                                <Label>Tenant</Label>
                                <Input type='select' name='tenant_id'
                                    value={form.tenant_id}
                                    onChange={handleChange} >
                                            {
                                        data && data.map((i) =>
                                            <option value={i.id}>{i.name}</option>
                                        )
                                    }
                                    <option></option> 
                                        </Input>
                            </Col>
                        </Row>
                        <center>
                            <Button
                                className='mt-3'
                                onClick={handleAdd}
                                color="primary"
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
