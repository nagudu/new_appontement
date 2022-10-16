// import { ResultType } from '@remix-run/router/dist/utils'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row, Table } from 'reactstrap'
import _fetchApi from './api'
import { _postApi } from './apiCall'
import { BsArrowLeft } from 'react-icons/bs'
import moment from 'moment'

export default function TenantRegistration() {
	const navigate = useNavigate()
	const today = moment().format('YYYY-MM-DD')
	const due_date = moment(today).add('months',12).format('YYYY-MM-DD')
	const _form = {
		name: "",
		phone_no: "",
		email: "",
		address: "",
		picture: "",
		plaza_id: "",
		phase_id: "",
		shop_id: "",
		plaza_name:"",
		shop_name:"",
		rent_start_date:today,
		rent_end_date:due_date,
		deposite:null,
		shops:[]
	}
	const [form, setForm] = useState(_form)
	const [shop_list, setShopList] = useState([])
	const [shops, setShops] = useState([])
	const [phases, setPhases] = useState([])
	const [plazas, setPlazas] = useState([])

	const handleChange = ({ target: { name, value } }) => {
		if(name==='plaza_id'){
			let selected_plaza = plazas.filter(p=>p.id==value)
			console.error({selected_plaza});
			setForm((p)=>({...p, plaza_name: selected_plaza.length? selected_plaza[0].name:""}))
		}else if(name==='shop_id'){
			let selected_shop = shops.filter(p=>p.id==value)
			console.error({selected_shop});
			setForm((p)=>({...p, shop_name: selected_shop.length? selected_shop[0].code:"", rent_fee:selected_shop[0].rent_fee}))
		}
		setForm((p) => ({ ...p, [name]: value }))
	}
	const handleSubmit = () => {
		form.shops = shop_list
		_postApi("tenant?query_type=create", form, () => {
			setForm(_form)
			navigate(-1)
		},
			(err) => console.log(err)
		)
		console.log(_form)
	}
	const fetchPlazas = () => {
		_fetchApi(
			`http://localhost:34567/get-plaza-list`,
			(resp) => {
				if (resp.success) {
					setPlazas(resp.results)
				}else{
					setPlazas([])
				}
			}
		)
	}
	useEffect(() => {
		fetchPlazas()
	}, [])

	const fetchShops = useCallback(() => {
		_fetchApi(
			`http://localhost:34567/get-phase-shops?phase_id=${form.phase_id}`,
			(resp) => {
				if (resp.success) {
					setShops(resp.results)
					// console.log({ NAGUDU: resp.results })
				}else{
					setShops([])
				}
			}
		)
	}, [form.phase_id])
	useEffect(() => {
		fetchShops()
	}, [fetchShops])

	const fetchPhases = useCallback(() => {
		_fetchApi(`http://localhost:34567/get-plaza-phase-list?plaza_id=${form.plaza_id}`,
			(resp) => {
				if (resp.success) {
					setPhases(resp.results)
				}else{
					setPhases([])
				}
			})

	}, [form.plaza_id])

	useEffect(() => {
		fetchPhases()
	}, [fetchPhases])

	const addShop = () =>{
		if( shop_list.filter(s=>s.shop_name===form.shop_name).length<1)
		setShopList((p)=>([...p, 
			{shop_name:form.shop_name,
			plaza_name:form.plaza_name,
			rent_fee:form.rent_fee,
			shop_id:form.shop_id}
		]))
	}

	return (
		<div>
			<Container className='mt-3'>
				<Card>
					{/* {JSON.stringify({ form, shop_list })} */}
					<center>
						<CardHeader>
							Tenant Registration
						</CardHeader>
					</center>
					<CardBody>
						<Button
							onClick={() => navigate("/tenant")}
							color='primary'
						>
							<BsArrowLeft size='1.5em' />
							{' '}

							Back</Button>
						<Row className='mt-3'>
							<Col md={3}>
								<Label>Name</Label>
								<Input type='text'
									name='name'
									value={form.name}
									onChange={handleChange} />
							</Col>
							<Col md={3}>
								<Label>Phone No</Label>
								<Input type='number'
									name='phone_no'
									value={form.phone_no}
									onChange={handleChange} />
							</Col>
							<Col md={3}>
								<Label>Email</Label>
								<Input type='email'
									name='email'
									value={form.email}
									onChange={handleChange} />
							</Col>
							<Col md={3}>
								<Label>Address</Label>
								<Input type='textarea'
									name='address'
									value={form.address}
									onChange={handleChange} />
							</Col>
							<Col md={3}>
								<Label>Date of rent</Label>
								<Input type='date'
									name='rent_start_date'
									value={form.rent_start_date}
									onChange={handleChange} />
							</Col>
							<Col md={3}>
								<Label>Date repay rent</Label>
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
							<Col md={3}>
								<Label>Pirture</Label>
								<Input type='file'
									name='picture'
									value={form.picture}
									onChange={handleChange} />
							</Col>
						</Row>
						<br />
						<h4 style={{ borderBottom: '1px solid black' }}>Choose shop</h4>
						<Row>

							<Col md={4}>
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
							<Col md={4}>
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
							<Col md={4}>
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
						<center>
							<Button
								color='primary'
								className='mt-3'
								onClick={addShop}>
									Add shop
							</Button>
						</center>
					</CardBody>
					<CardBody>
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
								{shop_list.map((item,idx) =>
									<tr>
										<td>{idx+1}</td>
										<td>{item.plaza_name}</td>
										<td>{item.shop_name}</td>
										<td className='text-right'>{item.rent_fee}</td>
									</tr>
								)}
							</tbody>
						</Table> :
							<h4 className='text-warning text-center'> Please add more shop</h4>}
						<center><Button
							color='primary'
							className='mt-3'
							onClick={handleSubmit}>
							Submit
						</Button></center>
					</CardBody>
				</Card>
			</Container>
		</div>
	)
}
