import { Col, Form, Input, Row } from "reactstrap"
import Checkbox from "../CheckBox"

const CustomForm = ({ fields = [] = f => f, handleChange = f => f, values, errors }) => {

	return (
			<Row>
				{fields.map((field, i) =>
					<Col key={i} md={field.md || 6}>
						{field.type === 'custom' ?
							(<>{field.component()}</>)
							: ['text', 'number', 'select', 'email','textarea'].includes(field.type) ?
								(<div className={`form-group ${field.classes}`} >
									{errors[field.name] && <label className='text-danger'>{errors[field.name]}</label>}
									<div className="d-flex align-items-center">
										{(field.name.includes('password') || field.type==='password')?<span className="fas fa-key"></span>
										:field.name.includes('name')?<span className="fas fa-user"></span>
										:field.type.includes('textarea')?<span className="fas fa-pen"></span>
										:field.type.includes('email')?<span className="fas  fa-envelope"></span>
										:<span className="fas fa-pen"></span>}
										<Input 
											type={field.type} 
											onChange={handleChange} mail
											value={values[field.name]} 
											className='form-control' 
											name={field.name} 
											id={field.id} 
											placeholder={field.placeholder} 
										/>
									</div>
								</div>) 
								:field.type==='checkbox' ?
								<div className="d-flex align-items-center">
									<Checkbox 
										ref={field._ref}
										style={{paddingLeft:50}} 
										type={field.type} 
										onChange={handleChange} 
										value={values[field.name]} 
										label={field.placeholder}
										className='form-control' 
										name={field.name} 
									/>
								</div>:
							
								(<div className={`form-group ${field.classes}`} >
									{field.error && <label className='text-danger'>{field.error}</label>}
									<div className=" d-flex align-items-center">
									{(field.type==='password' || field.name==='password')?<span className="fas fa-key"></span>:<span className="fas fa-pen"></span>}
										<Input 
											type={field.type} 
											onChange={handleChange} 
											value={values[field.name]} 
											className='form-control' 
											name={field.name} 
											id={field.id} 
											placeholder={field.placeholder} 
										/>
									</div>
								</div>)}
					</Col>)}
			</Row>
	)
}
export default CustomForm