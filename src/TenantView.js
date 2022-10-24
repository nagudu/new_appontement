import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row, Table } from 'reactstrap'
import _fetchApi from './api'
import useQuery from './helper'
import { BsArrowLeft } from "react-icons/bs"
import { _postApi } from './apiCall'
import moment from 'moment'

export default function TenantView() {
	const query = useQuery()
	const id = query.get('id')
	const today = moment().format('YYYY-MM-DD')
	const due_date = moment(today).add('months', 12).format('YYYY-MM-DD')
	const navigate = useNavigate()
	const _form = {
		user_id: '',
		shop_name: "",
		plaza: "",
		phase: '',
		phase_id: '',
		shop_id: '',
		plaza_id: '',
		tenant_id: id,
		rent_start_date: today,
		rent_end_date: due_date,
	}
	const [form, setForm] = useState(_form)
	const [shop_list, setShopList] = useState([])
	const [plazas, setPlazas] = useState([])
	// const navagite = useNavigate()
	const [phases, setPhases] = useState([])
	const [shops, setShops] = useState([])
	const [tenant_shops, setTenantShops] = useState([])
	// const navagite = useNavigate()

	const fetchTenantShops = useCallback(() => {
		_fetchApi(
			`/get-tenant-shops?tenant_id=${form.tenant_id}&query_type=select-tenant-shops`,
			(data) => {
				if (data.success) {
					setTenantShops(data.results)
				} else {
					setTenantShops([])
				}
			}
		)
	}, [form.tenant_id])



	const fetchShops = useCallback(() => {
		_fetchApi(
			`/get-phase-shops?phase_id=${form.phase_id}`,
			(data) => {
				if (data.success) {
					setShops(data.results)
				} else {
					setShops([])
				}
			}
		)
	}, [form.phase_id])
	// const navagite = useNavigate()
	const fetchPlazaPhases = useCallback(() => {
		_fetchApi(`/get-plaza-phase-list?plaza_id=${form.plaza_id}`,
			(resp) => {
				if (resp.success) {
					setPhases(resp.results)
				} else {
					setPhases([])
				}
			})

	}, [form.plaza_id])


	const fetchPlazas = () => {
		_fetchApi(
			`/get-plaza-list`,
			(data) => {
				if (data.success) {
					setPlazas(data.results)
				} else {
					setPlazas([])
				}
			}
		)
	}

	useEffect(() => {
		fetchShops()
	}, [fetchShops])

	useEffect(() => {
		fetchPlazaPhases()
	}, [fetchPlazaPhases])

	useEffect(() => {
		fetchPlazas()
	}, [0])

	useEffect(() => {
		fetchTenantShops()
	}, [fetchTenantShops])

	const [result, setResult] = useState([])
	const handleFetch = () => {
		_fetchApi(
			`/getTenant?id=${id}`,
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
		if (name === 'plaza_id') {
			let selected_plaza = plazas.filter(p => p.id == value)
			console.error({ selected_plaza });
			setForm((p) => ({ ...p, plaza_name: selected_plaza.length ? selected_plaza[0].name : "" }))
		} else if (name === 'shop_id') {
			let selected_shop = shops.filter(p => p.id == value)
			console.error({ selected_shop });
			setForm((p) => ({ ...p, shop_name: selected_shop.length ? selected_shop[0].code : "", rent_fee: selected_shop[0].rent_fee }))
		}
		setForm((p) => ({ ...p, [name]: value }))
	}

	useEffect(() => {
		handleFetch()
	}, [])

	const addShop = () => {
		if (shop_list.filter(s => s.shop_name === form.shop_name).length < 1)
			setShopList((p) => ([...p,
			{
				shop_name: form.shop_name,
				plaza_name: form.plaza_name,
				rent_fee: form.rent_fee,
				shop_id: form.shop_id
			}
			]))
	}


	const handleSubmit = () => {
		form.shops = shop_list
		_postApi("tenant?query_type=add-shops", form, () => {
			setForm(_form)
			navigate(-1)
		},
			(err) => console.log(err)
		)
		console.log(_form)
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
						<br />
						<h4 style={{ borderBottom: '1px solid black' }}>Choose shop</h4>
						<Row>

							<Col md={3}>
								<Label>Select Plaza</Label>
								<Input type='select'
									name='plaza_id'
									value={form.plaza_id}
									onChange={handleChange} >

									<option value="">Select plaza</option>
									{
										plazas && plazas.map((i) =>
											<option value={i.id}>{i.name}</option>
										)
									}

								</Input>
							</Col>
							<Col md={3}>
								<Label>Plazas Phases</Label>
								<Input type='select'
									name='phase_id'
									value={form.phase_id}
									onChange={handleChange} >

									<option value="">Select phase</option>
									{
										phases && phases.map((i) =>
											<option value={i.id}>{i.name}</option>
										)
									}
								</Input>
							</Col>
							<Col md={3}>
								<Label>Select Shop</Label>
								<Input type='select'
									name='shop_id'
									value={form.shop_id}
									onChange={handleChange} >
									<option value="">Select shops</option>
									{
										shops && shops.map((i) =>
											<option value={i.id}>{i.code}</option>
										)
									}
								</Input>
							</Col>
						</Row>
						<Row>

							<Col md={3}>
								<Label>Rent start date</Label>
								<Input type='date'
									name='rent_start_date'
									value={form.rent_start_date}
									onChange={handleChange} />
							</Col>
							<Col md={3}>
								<Label>Rents end date</Label>
								<Input type='date'
									name='rent_end_date'
									value={form.rent_end_date}
									onChange={handleChange} />
							</Col>
							<Col md={3}>
								<Label>Deposite</Label>
								<Input type='number'
									name='deposite'
									value={form.deposite}
									onChange={handleChange} />
							</Col>
						</Row>
						<Row>
							<Col>
								<Button
									color='primary'
									style={{ marginTop: 32 }}
									onClick={addShop}>
									Add shop
								</Button>
							</Col>
						</Row>
					</CardBody>
					<CardBody>
						<Row>
							{shop_list.length ? <Table bordered>
								<thead>
									<tr>
										<th>S/N</th>
										<th>Plaza name</th>
										<th>Shop name</th>
										<th>Rent fee</th>
									</tr>
								</thead>
								<tbody>
									{shop_list.map((item, idx) =>
										<tr>
											<td>{idx + 1}</td>
											<td>{item.plaza_name}</td>
											<td>{item.shop_name}</td>
											<td className='text-right'>{item.rent_fee}</td>
										</tr>
									)}
								</tbody>
							</Table> :
								<h4 className='text-warning text-center'> Please add more shop</h4>}
						</Row>
						<center><Button
							color='primary'
							className='mt-3'
							onClick={handleSubmit}>
							Submit
						</Button></center>
					</CardBody>
					<CardBody>
						{tenant_shops.length ? <Table bordered>
							<thead>
								<tr>
									<th>S/N</th>
									<th>Plaza name</th>
									<th>Shop name</th>
									<th>Rent fee</th>
								</tr>
							</thead>
							<tbody>
								{tenant_shops.map((item, idx) =>
									<tr>
										<td>{idx + 1}</td>
										<td>{item.plaza_name}</td>
										<td>{item.shop_name}</td>
										<td className='text-right'>{item.rent_fee}</td>
									</tr>
								)}
							</tbody>
						</Table> :
							<h4 className='text-warning text-center'>No shop allocated</h4>}
					</CardBody>
				</Card>
			</Container>
		</div>
	)
}
