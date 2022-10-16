import React from 'react'
import { FaCalendar, FaUser } from 'react-icons/fa'
import { MdMapsHomeWork } from 'react-icons/md'
import { Col, Row, Table } from 'reactstrap'
import '../Styles/Styles.css'
export default function TenantsByAccommodation() {
    return (
        <div>
            <p className='d_text'>Recent payments</p>
            <hr />
            <Table border>
                <tbody>
                    <tr style={{ marginBottom: 30 }} className="">
                        <td style={{ margin: 0, marginRight: 10 }}><MdMapsHomeWork className='not_icon' size='1em' color='grey' />{' '}PM </td>
                        <td style={{ margin: 0, marginRight: 10 }}><MdMapsHomeWork className='not_icon' size='1em' color='grey' />{' '}Phase A</td>
                        <td style={{ margin: 0, marginRight: 10 }}><FaUser className='not_icon' size='1em' color='grey' />{' '}<a href="/open"> Habu Yakasai</a></td>
                        <td style={{ margin: 0, marginRight: 10 }}><FaCalendar className='not_icon' size='1em' color='grey' />{' '}Date: 12/12/2022</td>
                    </tr>
                    <tr style={{ marginBottom: 30 }} className="">
                        <td style={{ margin: 0, marginRight: 10 }}><MdMapsHomeWork className='not_icon' size='1em' color='grey' />{' '}BS </td>
                        <td style={{ margin: 0, marginRight: 10 }}><MdMapsHomeWork className='not_icon' size='1em' color='grey' />{' '}Phase C </td>
                        <td style={{ margin: 0, marginRight: 10 }}><FaUser className='not_icon' size='1em' color='grey' />{' '}<a href="/open"> Musa Isah</a></td>
                        <td style={{ margin: 0, marginRight: 10 }}><FaCalendar className='not_icon' size='1em' color='grey' />{' '}Date: 12/12/2022</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
