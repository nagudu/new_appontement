import moment from 'moment/moment'
import React, { useCallback, useEffect, useState } from 'react'
import { BsArrowLeft, BsPlusCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Container, Row, Table } from 'reactstrap'
import _fetchApi from './api'
import useQuery from './helper'
// import moment from 'moment'
export default function ViewPlzaPhases() {
    const navigate =useNavigate()
    
    const query = useQuery()
    const phase_id = query.get('phase_id')
    const phase_code = query.get('phase_code')
    const [data, setData] = useState([])
    const fetchPlazaPhases = useCallback(() => {
        _fetchApi(
            `http://localhost:34567/get-phase-shops?phase_id=${phase_id}`,
            (data) => {
                if (data.success) {
                    setData(data.results)
                }
                setData(data.results)
            }
        )
    },[0])

    useEffect(() => {
        fetchPlazaPhases()
    }, [0])
    
    return (
        <div>
            <Container className='mt-3'>
                <Card>
                    <center><CardHeader>View Plaza Shops</CardHeader></center>
                    <CardBody>
                    <Button
                            color='primary'
                            onClick={() => navigate(-1)}>
                            <BsArrowLeft size='1.5em' />
                            {' '}
                            Back
                        </Button>
                        {' '}{' '}
                        <Button
                            color='primary'
                            onClick={() => navigate(`/shopregistratin?phase_id=${phase_id}&phase_code=${phase_code}`)}>
                            <BsPlusCircle size='1.5em' />
                            {' '}
                            Add New
                        </Button>
                        <Row>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>SHOP NAME</th>
                                        <th>SHOP CODE</th>
                                        <th>RENT FEE</th>
                                        <th>RENT START DATE</th>
                                        <th>RENT END DATE</th>
                                        <th>TENANT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item,i)=>(
                                    <tr key={i}>
                                        <td>{item.name}</td>
                                        <td>{item.code}</td>
                                        <td>{item.rent_fee}</td>
                                        <td>{moment(item.rent_start_date).format('DD-MM-YYYY')}</td>
                                        <td>{moment(item.rent_end_date).format('DD-MM-YYYY')}</td>
                                        {item.tenant_name? <td>{item.tenant_name}</td>:
                                           <td><Button >Add tenant </Button></td> }
                                    </tr>))}
                                </tbody>
                            </Table>
                        </Row>
                    </CardBody>
                </Card>
            </Container>

        </div>
    )
}
