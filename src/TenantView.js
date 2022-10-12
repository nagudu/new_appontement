import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row, Table } from 'reactstrap'
import _fetchApi from './api'
import useQuery from './helper'
import { BsArrowLeft } from "react-icons/bs"

export default function TenantView() {
	const navigate = useNavigate()
	const _form = {
		user_id: '',
		shop_name: "",
		plaza: "",
		phase: ''
	}
	const [form, setForm] = useState(_form)
	const query = useQuery()
	const id = query.get('id')
	const [setting, setSetting] = useState([])
	const [plazas, setPlazas] = useState([])
	// const navagite = useNavigate()
	const [plaza_phases, setPlazaPhases] = useState([])
	const [shops, setShops] = useState([])
	// const navagite = useNavigate()
	const fetchShops = () => {
		_fetchApi(
			`http://localhost:34567/get_shop_list`,
			(data) => {
				if (data.success) {
					setShops(data.results[0])
					console.log({ NAGUDU_SHOPS: data.results[0] })
				}
			}
		)
	}
	// const navagite = useNavigate()
	const fetchPlazaPhases = () => {
		_fetchApi(
			`http://localhost:34567/get-plaza-phase-list`,
			(data) => {
				if (data.success) {
					setPlazaPhases(data.results)
				}
				console.log({ NAGUDU: data.results })
			}
		)
	}
	useEffect(() => {
		fetchShops()
	}, [0])
	useEffect(() => {
		fetchPlazaPhases()
	}, [0])
	const fetchPlazas = () => {
		_fetchApi(
			`http://localhost:34567/get-plaza-list`,
			(data) => {
				if (data.success) {
					setPlazas(data.results)
				}
				console.log({ NAGUDU: data.results })
			}
		)
	}
	useEffect(() => {
		fetchPlazas()
	}, [0])
	
	useEffect(() => {
		fetchPlazaPhases()
	}, [0])


	

	const [result, setResult] = useState([])
	const handleFetch = () => {
		_fetchApi(
			`http://localhost:34567/getTenant?id=${id}`,
			(data) => {
				if (data.success) {

					console.log(data.results)
					setResult(data.results[0][0])
					setForm((p) => ({ ...p, user_id: data.results[0][0].id }))
				}
			}
		)
	}
	const handleChange = ({ target: { name, value } }) => {
		setForm((p) => ({ ...p, [name]: value }))
	}
	console.log(Object.keys(result));

	useEffect(() => {
		handleFetch()
	}, [])
	const handleAdd = () => {
		setForm(_form)
		console.log(form)
	}
	return (
		<div>
			<Container className='mt-3'>
				{/* {JSON.stringify(form)} */}
				<Card>
					<center>
						<CardHeader>
							Tenant View
						</CardHeader>
					</center>
					<CardBody>
						<Button
							color='primary'
							onClick={() => navigate("/tenant_view")}
						>
							<BsArrowLeft size='1.5em' />
							{' '}
							Back
						</Button>
						<Row className='mt-3'>
							<Col md={4}>
								<Label><b>Name:  </b> {result.name}</Label>
							</Col>
							<Col md={4}>
								<Label>
									<b>Phone No:  </b>
									{result.phone_no}
								</Label>
							</Col>
							<Col md={4}>
								<Label>
									<b>Email:  </b>
									{result.email}
								</Label>
							</Col>
							<Col md={4}>
								<Label>
									<b>Address:  </b>
									{result.address}
								</Label>
							</Col>
						</Row>
						<Row>
							<Col md={3} className="mt-3">
								<Label>Select Plaza</Label>
								<Input name='plaza' value={form.plaza} type='select'
									onChange={handleChange}>
									<option>---select---</option>
									{
										plazas && plazas.map((i) =>
											<option>{i.name}</option>
										)
									}
									<option>select</option>
								</Input>
							</Col>

							<Col md={3} className="mt-3">
								<Label>Select Plaza Phase</Label>
								<Input type='select' name='phase'
									value={form.phase}
									onChange={handleChange}>
									<option>---select---</option>
									{
										plaza_phases && plaza_phases.map((i) =>
											<option>{i.name}</option>
										)
									}
									<option>select</option>
								</Input>
							</Col>
							<Col md={3} className="mt-3">
								<Label>Select Shop</Label>
								<Input name="shop_name" value={form.shop_name} type='select'
									onChange={handleChange}>
									<option>---select---</option>
									{
										shops && shops.map((i) =>
										<option>{i.name}</option>
										)
									}
									<option>select</option>
								</Input>
							</Col>
							<Col md={3} className="mt-5">
								<Button
									color='primary'
									onClick={handleAdd}>Assign shop</Button>
							</Col>

						</Row>
					</CardBody>
				</Card>
			</Container>
			<Container className='mt-5'>
				<Card>
					<center>
						<CardHeader>
							Tenant Report
						</CardHeader>
					</center>
					<CardBody>
						<Row>
							<Table bordered>
								<thead>
									<tr>
										<th>Select Plaza</th>
										<th>Select Plaza Phase</th>
										<th>Select Shop</th>
									</tr>
								</thead>
							</Table>
						</Row>
					</CardBody>
				</Card>
			</Container>
		</div>
	)
}
