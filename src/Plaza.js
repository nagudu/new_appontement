import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Container, Row, Table } from 'reactstrap'
import _fetchApi from './api'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {GrFormView} from 'react-icons/gr'

export default function Plaza() {
    const navigate = useNavigate()
    const [result, setResult] = useState([])
    // const navagite = useNavigate()
    const handleFetch = () => {
        _fetchApi(
            `http://localhost:34567/get-plaza-list`,
            (data) => {
                if (data.success) {
                }
                console.log(data.results)
                setResult(data.results)
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
                    <center><CardHeader>Plaza</CardHeader></center>
                    <CardBody>
                            <Button 
                            color='primary'
                            onClick={() => navigate("/add_new_plaza")}>
                                <AiOutlinePlusCircle size='1.5em'/>
                           {" "} 
                                Add New Plaza
                                </Button>
                        <Row className='mt-3'>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        {/* <th>Manager ID</th> */}
                                        <th>Code</th>
                                        <th>No Of Shop</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {result.map((item,index) =>
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.address}</td>
                                        <td>{item.code}</td>
                                        <td>{item.no_of_shop}</td>
                                        <td><Button
                                        color='primary'
                                        onClick={() => navigate(`/plaza_view?id=${item.id}`)}>
                                            <GrFormView size='1.5em' color='white'/>
                                                {" "}
                                            View
                                            </Button>
                                            </td>
                                        
                                       
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
