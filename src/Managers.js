import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Container, Row, Table } from 'reactstrap'
import _fetchApi from './api'
// import CustomButton from './CustomButton'
import {GrFormView} from "react-icons/gr"
import {AiOutlinePlusCircle} from "react-icons/ai"
import { BsEye } from 'react-icons/bs'

export default function Managers() {

    const [result, setResult] = useState([])
    const navagite = useNavigate()
    const handleFetch = () => {
        _fetchApi(
            `http://localhost:34567/getManager`,
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
                    <center><CardHeader>Managers</CardHeader></center>
                    <CardBody>
                        <Button color='primary'
                            onClick={() => navagite("/managers_user")}
                        >
                            <AiOutlinePlusCircle size='1.5em'/>
                           {" "} 
                            Add New Manager
                        </Button>
                        <Row className='mt-3'>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.map((item, index) =>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.phone_no}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address}</td>
                                            <td><Button
                                                color='primary'
                                                onClick={()=> navagite('/manager_view')}
                                            >
                                                <BsEye size='1em' color='white'/>
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
