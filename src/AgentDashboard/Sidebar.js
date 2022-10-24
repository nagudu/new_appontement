import React from 'react'
// import { ImHome, ImUser } from 'react-icons/im'
// import { MdMapsHomeWork } from 'react-icons/md'
import { MdDashboard } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { MdOutlinePayments } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
// import { GrUserManager } from 'react-icons/gr'
import { BsBuilding, BsFillPeopleFill } from 'react-icons/bs'
import "../dashboard/Menu.js/sideBar.css"
import { Nav, NavItem } from 'reactstrap'
export default function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()

    const routes = [
        {
            path: '/agent-dashboard',
            title: 'Dashboard',
            icon: MdDashboard
        },

        {
            path: '/agent-dashboard/payments',
            title: 'Payments',
            icon: MdOutlinePayments
        },
        {
            path: '/agent-dashboard/tenants',
            title: 'Tenants',
            icon: BsFillPeopleFill
        },
        {
            path: '/agent-dashboard/phases',
            title: 'Phases',
            icon: BsBuilding
        },
    ]
    return (
        <Nav vertical className='p-0 m-0'>
            <br />
            <br />
            {routes.map((route, i) => <NavItem key={i} active onClick={() => { console.log('PATH', location.pathname); navigate(route.path) }} className={location.pathname === route.path ? "coups-active" : 'coups'}> <route.icon size='1.5em' className='icon' />{' '} {route.title}</NavItem>)}
        </Nav>
    )
}
