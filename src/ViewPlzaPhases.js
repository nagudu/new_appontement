import moment from 'moment/moment'
import React, { useCallback, useEffect, useState } from 'react'
import { BsArrowLeft, BsPlusCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Label, Row, Table } from 'reactstrap'
import _fetchApi from './api'
import CustomCardHeader from './CustomCardHeader'
import useQuery from './helper'

export default function ViewPlzashops() {
	const navigate = useNavigate()
	const query = useQuery()
	const plaza_id = query.get('plaza_id')
	const phase_id = query.get('phase_id')
	const phase_code = query.get('phase_code')
	const [shops, setShops] = useState([])
	const [plaza, setPlaza] = useState([])

	const fetchPlazashops = useCallback(() => {
		_fetchApi(
			`/get-phase-shops?phase_id=${phase_id}`,
			(shops) => {
				if (shops.success) {
					setShops(shops.results)
				}
				setShops(shops.results)
			}
		)
	}, [0])

	useEffect(() => {
		fetchPlazashops()
	}, [0])
	const getPlaza = useCallback(() => {
		_fetchApi(
			`/get_plaza_phases?query_type=list-by-plaza&plaza_id=${plaza_id}`,
			(plaza) => {
				if (plaza.success) {
					console.error(plaza);
					setPlaza(plaza.results[0])
					// setForm((p) => ({ ...p, code: plaza.results[0].code, name: plaza.results[0].name }))
				}
			})
	}, [plaza_id])

	useEffect(() => {
		getPlaza()
	}, [0])
	return (
		<div>
			<Container className='mt-3'>
				<Card>
					<CustomCardHeader>
						<Row>
							<Col md={9}>
								{plaza.name}
							</Col>
							<Col md={3}>
								<Button
									outline
									color='primary'
									onClick={() => navigate(`/shopregistratin?phase_id=${phase_id}&phase_code=${phase_code}`)}>
									<BsPlusCircle size='1.5em' />
									{' '}
									Add New
								</Button></Col>
						</Row>
					</CustomCardHeader>

					<CardBody>
						<Row className='mt-3'>
							<Col md={3}>
								<Label><b>Plaza name:  </b>
									{plaza.plaza_name}
								</Label>
							</Col>
							<Col md={3}>
								<Label><b>Phase name:  </b>
									{plaza.name}
								</Label>
							</Col>
							<Col md={3}>
								<Label>
									<b>Address:  </b>
									{plaza.address}
								</Label>
							</Col>
							<Col md={3}>
								<Label>
									<b>No Of Shop:  </b>
									{plaza.no_of_shop}
								</Label>
							</Col>
						</Row>
						<br />
						<h4 style={{ borderBottom: '1px #EEE solid' }}>{plaza.name} Shops </h4>
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
									{shops.map((item, i) => (
										<tr key={i}>
											<td>{item.name}</td>
											<td>{item.code}</td>
											<td>{item.rent_fee}</td>
											<td>{moment(item.rent_start_date).format('DD-MM-YYYY')}</td>
											<td>{moment(item.rent_end_date).format('DD-MM-YYYY')}</td>
											{item.tenant_name ? <td>{item.tenant_name}</td> :
												<td><Button >Add tenant </Button></td>}
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
