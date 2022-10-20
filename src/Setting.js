
import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, Col, Container, Input, Label, Nav, NavItem, NavLink, Row, Table } from 'reactstrap'
import _fetchApi from './api'
import { _postApi } from './apiCall'

export default function Setting() {
    const _form = {
        shop_name: "",
        shops_no: "",
        address: "",
        contact: "",
    }

    const [form, setForm] = useState(_form)
    // const [data, setData] = useState([])
    const [result, setResult] = useState([])

    const handleChange = ({ target: { name, value }}) => {
        setForm((p) => ({ ...p, [name]: value }))
    }
    const handleAdd = () => {
        _postApi("setting", form, () => {
            setForm(_form)
        },
            (err) => console.log(err)
        )
        console.log(_form)
    }
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
    const handleFetch = () => {
        _fetchApi(
            `http://localhost:34567/getsetting`,
            (data) => {
                if (data.success) {
                }
                console.log(data.results)
                setResult(data.results[0])
            }
        )


    }
    useEffect(() => {
        handleFetch()
    }, [0])
    return (
        <div>

            <Container className='mt-3'>
                <Card>
                    <CardBody>
                        <Row>
                            <Nav tabs className='mt-3'>
                                <NavItem>
                                    <NavLink href="#" active>
                                        Add Shop
                                    </NavLink>
                                </NavItem>
                                
                                <NavItem>
                                    <NavLink href="#">Link</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Another Link</NavLink>
                                </NavItem>
                                {/* <NavItem>
                    <NavLink disabled href="#">
                        Disabled Link
                    </NavLink>
                </NavItem> */}
                            </Nav>
                            <Col md={6}>
                                <Label>Shop Name</Label>
                                <Input type='text' name='shop_name'
                                    value={form.shop_name}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>No Shop</Label>
                                <Input type='number' name='shops_no'
                                    value={form.shops_no}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Address</Label>
                                <Input type='text' name='address'
                                    value={form.address}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Contact</Label>
                                <Input type='number' name='contact'
                                    value={form.contact}
                                    onChange={handleChange} />
                            </Col>
                        </Row>
                        <center>
                            <Button
                            onClick={handleAdd}
                                className='mt-3'
                                color='primary'
                                >
                                Submit
                            </Button>
                        </center>
                    </CardBody>
                    
                </Card>
            </Container>
            <Container className='mt-3'>
                        <Card>
                            <CardBody>
                                <Row>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>Shop Name</th>
                                                <th>Shop No</th>
                                                <th>Address</th>
                                                <th>Contact</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {result.map((item) =>  
                                            <tr>
                                                <td>{item.shop_name}</td>
                                                <td>{item.shops_no}</td>
                                                <td>{item.address}</td>
                                                <td>{item.contact}</td>
                                            </tr>
                                            )}
                                        </tbody>
                                    </Table>
                                </Row>
                            </CardBody>
                        </Card>
                    </Container>

        </div>
    )
}
