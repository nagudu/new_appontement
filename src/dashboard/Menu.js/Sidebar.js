import React from 'react'
// import { ImHome, ImUser } from 'react-icons/im'
import { MdMapsHomeWork } from 'react-icons/md'
import { MdDashboard } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { TbReportAnalytics } from 'react-icons/tb'
import { useLocation, useNavigate } from 'react-router-dom'
import { GrUserManager } from 'react-icons/gr'
import { BsBuilding, BsFillPeopleFill } from 'react-icons/bs'
import "./sideBar.css"
export default function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <>
        <div className='mt-5'>
            <p onClick={() => navigate("/")} className="coups"> <MdDashboard size='1.5em' className='icon' />{' '}Dashboard</p>
            <p onClick={() => navigate("/report")} className="coups"><TbReportAnalytics size='1.5em' className='icon' />  Report</p>
            <p className='coups' onClick={() => navigate("/tenant")}><BsFillPeopleFill size='1.5em' />  Tenants</p>
            <p className='coups' onClick={() => navigate("/managers")}><GrUserManager size='1.5em' />  Managers</p>
            {/* <p className='coups' onClick={() => navigate("/")}><BsShop size='1.5em'/>  Add Shop</p> */}
            <p className='coups' onClick={() => navigate("/plaza")}><BsBuilding size='1.5em' />  Plaza</p>
            <p className='coups' onClick={() => navigate("/agent")}><BsBuilding size='1.5em' />  Agents</p>
            {/* <p className='coups' onClick={() => navigate("/setting")}><AiOutlineSetting size='1.5em'/> Settings</p>   */}
            </div>
        </>
    )
}
