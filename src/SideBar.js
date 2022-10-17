import React from 'react'
import {TbReportAnalytics} from 'react-icons/tb'
import {BsFillPeopleFill, BsShop, BsBuilding} from 'react-icons/bs'
import {GrUserManager} from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {AiOutlineSetting} from 'react-icons/ai'
import { Card, CardBody, CardHeader, Container } from 'reactstrap'
import "./sideBar.css"
import { MdDashboard } from 'react-icons/md'
export default function SideBar() {
  const navigate = useNavigate()
  return (
    <div className='' style={{}}>
      <CardBody>
      <p onClick={() => navigate("/")} className="coups"> <MdDashboard size='1.5em' className='icon'/>{' '}Dashboard</p>
      <p onClick={() => navigate("/")} className="coups"> <MdDashboard size='1.5em' className='icon'/>{' '}Agent Dashboard</p>
      <p onClick={() => navigate("/report")} className="coups"><TbReportAnalytics size='1.5em' className='icon'/>  Report</p>
        <p className='coups' onClick={() => navigate("/tenant")}><BsFillPeopleFill size='1.5em'/>  Tenants</p>
        <p className='coups' onClick={() => navigate("/managers")}><GrUserManager size='1.5em'/>  Managers</p>  
        {/* <p className='coups' onClick={() => navigate("/")}><BsShop size='1.5em'/>  Add Shop</p> */}
        <p className='coups' onClick={() => navigate("/plaza")}><BsBuilding size='1.5em'/>  Plaza</p>
        {/* <p className='coups' onClick={() => navigate("/setting")}><AiOutlineSetting size='1.5em'/> Settings</p>   */}
      </CardBody>
    </div>
  )
}
