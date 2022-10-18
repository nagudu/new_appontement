import React from 'react'
import { Row, Col, Card, Table } from 'reactstrap'
import { BsClockHistory, BsClock } from 'react-icons/bs'
import { MdMapsHomeWork } from 'react-icons/md'
import { ImUsers } from 'react-icons/im'
import '../Operator/Chart.css'
import DoughnutChart from '../Operator/Doughnut'
import BarChart from '../Operator/BarChart'
import TenantsByAccommodation from '../Operator/TenantsByAccommodation'
import { FaCalendar, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate =useNavigate()
  return (
    <div className='mt-4'>
      <Row>
        <Col lg={3}>
          <Card className='dashboard_card p-3 shadow-sm' style={{cursor:"pointer"}} onClick={()=>navigate("/rent-expiry")}>
            <Row>
              <Col md={3}>
                <div className='dashboard_icon_div1'>
                  <div>
                    <BsClockHistory size='2.5em' className='icon_div1' />
                  </div>
                </div>
              </Col>
              <Col md={9}>
                <div className='dashboard_card_details'>
                  <div>
                    <p className='d_count'>12</p>
                    <p className='d_text'> Rent expiry alert</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={3}>
          <Card className='dashboard_card p-3 shadow-sm' style={{cursor:"pointer"}} onClick={()=>navigate("/rent-expiry")}>
            <Row>
              <Col md={3}>
                <div className='dashboard_icon_div2'>
                  <div>
                    <BsClock size='2.5em' className='icon_div2' />
                  </div>
                </div>
              </Col>
              <Col md={9}>
                <div className='dashboard_card_details'>
                  <div>
                    <p className='d_count'>12</p>
                    <p className='d_text'> Rents Due</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={3}>
          <Card className='dashboard_card p-3 shadow-sm' style={{cursor:"pointer"}} onClick={()=>navigate("/rent-expiry")}>
            <Row>
              <Col md={3}>
                <div className='dashboard_icon_div3'>
                  <div>
                    <MdMapsHomeWork size='2.5em' className='icon_div3' />
                  </div>
                </div>
              </Col>
              <Col md={9}>
                <div className='dashboard_card_details'>
                  <div>
                    <p className='d_count'>122</p>
                    <p className='d_text'>PM</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={3}>
          <Card className='dashboard_card p-3 shadow-sm' style={{cursor:"pointer"}} onClick={()=>navigate("/rent-expiry")}>
            <Row>
              <Col md={3}>
                <div className='dashboard_icon_div4'>
                  <div>
                    <ImUsers size='2.5em' className='icon_div4' />
                  </div>
                </div>
              </Col>
              <Col md={9}>
                <p className='d_count'>412</p>
                <p className='d_text'>Tentants</p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className='dashboard_card p-3 mt-4 shadow-sm' style={{ height: "20vh" }}>
            <p className='d_count'>Rent expiry alert</p>
            <marquee behavior="scroll" direction="up" onmouseover="stop();" onmouseout="start();" scrolldelay="200" height="200">
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
            </marquee>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className='p-3 mt-4 shadow-sm'>
            <BarChart />
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={6}><Card className='dashboard_card ch p-3 mt-4 shadow-sm'>
          <TenantsByAccommodation />
        </Card></Col>
        <Col md={6}><Card className='dp-3 mt-4 shadow-sm'>
          <p className='d_text text-center'>Tentants by payment status</p>
          <hr></hr>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              {/* <Chart /> */}
              <DoughnutChart />
            </Col>
            <Col md={2}></Col>
          </Row>
          <Row className='mt-2 text-center'>
            <Col md={2}></Col>
            <Col md={4}>
              <p className='d_text_m' style={{ color: 'white', backgroundColor: 'rgb(44,194,216)', padding: 5, borderRadius: 5, fontSize: 13 }}>Paid</p>
            </Col>
            <Col md={5}>
              <p className='d_text_m' style={{ color: 'white', backgroundColor: 'rgb(255, 133, 105)', padding: 5, borderRadius: 5, fontSize: 13 }}>Pending</p>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Card>
        </Col>
      </Row>
    </div>
  )
}
