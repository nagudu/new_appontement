import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row, Table, Tag } from 'reactstrap'
import _fetchApi from './api'

export default function ShopsList() {
    const navigate = useNavigate()
    const [result, setResult] = useState([])

    const handleFetch = () => {
        _fetchApi(
            `http://localhost:34567/get_shop_list`,
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
                    <center><CardHeader><b>Shops List</b></CardHeader></center>
                    <CardBody>
                        <Button
                            onClick={() => navigate("/shopregistratin")}
                            color="primary"
                        >Add Shop</Button>
                        <Row>



                            <Col md={1}>
                                <p className='mt-4'>Search</p>
                            </Col>
                            <Col md={10} className="mt-3">
                                <Input type='search' />
                            </Col>
                            <Col md={1}></Col>
                        </Row>
                        <Table bordered className='mt-3'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Amount Paid</th>
                                    {/* <th>Pillars No</th> */}
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            {/* {JSON.stringify(result)} */}
                            <tbody>
                                {result.map((item) =>
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.amount_paid}</td>
                                        {/* <td>{item.member_of_pillars}</td> */}
                                        <td>{item.rent_start_date}</td>
                                        <td>{item.rent_end_date}</td>
                                        <td><p
                                        style={{}}
                                            onClick={() => navigate(`/pay_rent?id=${item.id}`)}
                                            color="primary"
                                        >
                                            <center><b className='coups'>Pay</b></center></p>
                                        </td>
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
