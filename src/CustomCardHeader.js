import React from 'react'
import { CardHeader, Col, Row } from 'reactstrap'
import CustomButton from './CustomButton'

export default function CustomCardHeader(props) {
    return (
        <div>
            <CardHeader className='bg-light   p-2 mb-0'>
                <Row>
                    <Col md={2}>
                        <CustomButton text={props.text} />
                    </Col>
                    <Col  md={8} className='text-center'>
                        <p style={{fontSize:'22px'}} className=''>{props.header}</p>
                    </Col>
                    {/* <Col></Col> */}
                </Row>
            </CardHeader>
        </div>
    )
}
