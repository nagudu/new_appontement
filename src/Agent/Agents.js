import React, { useCallback, useEffect, useState } from 'react'
import { MdEdit } from 'react-icons/md'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row, Table } from 'reactstrap'
import _fetchApi from '../api'
import { createUser } from '../redux/actions/authActions'
import SearchBar from '../components/UI/SearchBar';

export default function Agents() {
	const _form = {
		name: "",
		email: "",
		picture: "",
		phases: "",
		address: "",
		phone_no: "",
		phases_no: "",
		phase_ids: [],
		password: "",
		query_type: 'create'
	}

	const [form, setForm] = useState(_form)
	// const dispatch = useDispatch()
	const [agentList, setAgentList] = useState([])
	const navigate = useNavigate()
	const [phases, setPhases] = useState([])
	const [createAgent, setCreateAgent] = useState(false)
	const [loading, setLoading] = useState(false)
	const [filterText, setFilterText] = useState('');
	const [agents, setAgents] = useState([])
	const handleChange = ({ target: { name, value, options, selectedOptions } }) => {
		let valuex =
			selectedOptions && Array.from(selectedOptions, (option) => option.value);
		let more_value = valuex && valuex.length ? valuex.join(",") : null;
		console.error({ name, value, options, selectedOptions, more_value });


		if (selectedOptions && selectedOptions.length) {
			setForm((p) => ({ ...p, phase_ids: [more_value ? more_value : value] }))
		} else {
			setForm((p) => ({ ...p, [name]: value }))
		}
	}
	const handleAdd = () => {
		setAgentList((p) => ([...p, { ...form }]))
		// setCreateAgent(false)
		setForm(_form)
	}

	const handleSubmit = () => {
		setForm(_form)
		setLoading(true)
		agentList.forEach((data, idx) => {
			createUser({
				data: {
					...data
					, files: [data.picture.split(';base64,').pop()]
				}
			}, () => {
				alert('User created')
				if (idx === (agentList.length - 1)) {
					setAgentList([])
				}
			}, () => { alert('Failed to create User') })
		})

		setCreateAgent(!createAgent)
		// base64String.split(';base64,').pop()
	}
	function handleImage(e) {
		// console.error(e.target.files[0]);
		const file = e.target.files[0]
		let reader = new FileReader()
		reader.onloadend = () => {
			console.error(reader);
			setForm((p) => ({ ...p, picture: reader.result }))
		}
		reader.readAsDataURL(file)
		// console.log(file)
		// let base64Image = base64String.split(';base64,').pop();
	}
	const fetchPlazaPhases = useCallback(() => {
		_fetchApi(
			`http://localhost:34567/get-plaza-phase-list`,
			(data) => {
				if (data.success) {
					setPhases(data.results)
				}
			}
		)
	}, [0])

	useEffect(() => {
		fetchPlazaPhases()
	}, [0])

	const onFilterTextChange = (e) => {
		setFilterText(e)
	}

	const handleFetch = useCallback(() => {
		_fetchApi(
			`http://localhost:34567/agents?query_type=select-all`,
			(data) => {
				if (data.success) {
					setAgents(data.results)
					console.log(data.results)
				}
			}
		)
	}, [])
	useEffect(() => {
		handleFetch()
	}, [0])

	return (
		<div>
			<Container className='mt-3'>
				<Card>
					<CardHeader>
						<Row>
							<Col md={3}><Button onClick={() => navigate(-1)} color="primary"><BsArrowLeft size='1.5em' />
								{' '}Back</Button>{" "}
							</Col><Col className='text-center'>{createAgent ? 'Add New Agent' : "Agents"}</Col>
							<Col md={3} style={{ float: 'right' }}><Button color='primary' onClick={() => setCreateAgent(!createAgent)}><AiOutlinePlusCircle size='1.5em' />
								{" "}Add New Agent</Button></Col>
						</Row>
					</CardHeader>
					<CardBody>
						<SearchBar onFilterTextChange={onFilterTextChange} filterText={filterText} />
					</CardBody>
					{createAgent ?
						<CardBody>
							{form.picture ? <Row><Col className='text-center avatar' md={12}>
								<img width={100} height={100} src={form.picture} />
							</Col></Row> : null}
							<Row>
								<Col md={6}>
									<Label>Name</Label>
									<Input type='text' name='name' value={form.name} onChange={handleChange} />
								</Col>
								<Col md={6}>
									<Label>Email</Label>
									<Input type='email' name='email' value={form.email} onChange={handleChange} />
								</Col>
								<Col md={6}>
									<Label>Address</Label>
									<Input type='text' name='address' value={form.address} onChange={handleChange} />
								</Col>
								<Col md={3}>
									<Label>Phone no:</Label>
									<Input type='phone_no' name='phone_no' value={form.phone_no} onChange={handleChange} />
								</Col>
								<Col md={3}>
									<Label>Password</Label>
									<Input type='password' name='password' value={form.password} onChange={handleChange} />
								</Col>
								<Col md={6}>
									<Label>Select Phases</Label>
									<Input type='select' multiple name='phase_ids' onChange={handleChange}>
										{phases.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
									</Input>
								</Col>
								{/* <Col md={6}>
									<Label>Phases No</Label>
									<Input type='number' name='phases_no' value={form.phases_no} onChange={handleChange} />
								</Col> */}
								<Col md={6}>
									<Label>Picture</Label>
									<Input type='file' name='picture' onChange={handleImage} />
									<br />
									<Button className='mt-3' block color='primary' onClick={handleAdd}>Add agent</Button>
								</Col>


							</Row>
						</CardBody> : <>
							<CardBody>
								<Table>
									<thead>
										<tr>
											<th>SN</th>
											<th>AGENTS</th>
											<th>NO. PHASES</th>
											<th>REVENUE</th>
											<th>BALANCE</th>
										</tr>
									</thead>
									<tbody>
										{agents.map((ag, idx) => (<tr>
											<td>{idx + 1}</td>
											<td>{ag.name}</td>
											<td>{ag.no_of_phase}</td>
											<td>{ag.revenue}</td>
											<td>{ag.balance}</td>
										</tr>))}
									</tbody>
								</Table>
							</CardBody>
						</>}
					<CardBody>
						<Row className='mt-3'>
							<Table bordered>
								{agentList.length ? <>
									<thead>
										<tr>
											<th>S/N</th>
											<th>Name</th>
											<th>Assigned phases</th>
											<th>Picture</th>
											<th style={{ width: 100 }}>Action</th>
										</tr>
									</thead>
									{agentList.map((agent, idx) => (<tbody>
										<tr key={idx} style={{ marginBottom: 30 }} className="">
											<td>{idx + 1}</td>
											<td>{agent.name}</td>
											<td>{agent.phase_ids}</td>
											<td><img width={50} height={50} src={agent.picture} /></td>
											<td><Button color='info' onClick={() => setForm(agent)}><MdEdit /></Button>{' '}<Button onClick={() => setAgentList(agentList.filter(a => a.email !== agent.email))} color='danger'>X</Button></td>
										</tr>
									</tbody>))}
								</>
									: null}
							</Table>
						</Row>
						{agentList.length ? <Row>
							<Col md={12} className='text-center'><Button loading={loading} className='mt-3' color='primary' onClick={handleSubmit}>Submit</Button></Col>
						</Row> : null}
					</CardBody>
				</Card>
			</Container>
		</div>
	)
}
