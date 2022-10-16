import React, { useEffect } from 'react'
import Home from '../dashboard/AdminDashboard/Home';
import { useNavigate, useRoutes } from 'react-router-dom';
import AddNewPlaza from '../AddNewPlaza';
// import Dashboard from '../Dashboard';
import Login from '../Login';
import Managers from '../Managers';
import ManagerUser from '../ManagerUser';
import ManagerView from '../ManagerView';
import PayRent from '../PayRent';
import Plaza from '../Plaza';
import PlazaPhases from '../PlazaPhases';
import PlazaView from '../PlazaView';
import Report from '../Report';
import Setting from '../Setting';
import ShopRegistration from '../ShopRegistration';
import ShopsList from '../ShopsList';
import Tenant from '../Tenant';
import TenantRegistration from '../TenantRegistration';
import TenantView from '../TenantView';
import ViewPlzaPhases from '../ViewPlzaPhases';
import AppIndex from './AppIndex';
import Agents from '../Agent/Agents';
import AgentsView from '../Agent/AgentsView';

function AppNavigation() {
    // const dispatch = useDispatch()
    const navigate = useNavigate()
    //     useEffect(() => {
    // dispatch(initUser(() => navigate("/login")))
    //     }, [])

    let element = useRoutes([
        // {
        //     path: '/',
        //     element: <Login />,
        //     children: [{ index: true },


        //     ]
        // },
       
        {
            element: <AppIndex />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/plaza',
                    element: <Plaza />
                },
                
                {
                    path: '/shopregistratin',
                    element: <ShopRegistration />
                },
               

                {
                    path: '/pay_rent',
                    element: <PayRent />
                },
                {
                    path: '/report',
                    element: <Report />
                },
                {
                    path: '/setting',
                    element: <Setting />
                },
                {
                    path: '/tenant',
                    element: <Tenant />
                },
                {
                    path: '/tenant_registration',
                    element: <TenantRegistration />
                },
                {
                    path: '/tenant_view',
                    element: <TenantView />
                },
                {
                    path: '/managers',
                    element: <Managers />
                },
                {
                    path: '/managers_user',
                    element: <ManagerUser />
                },
                {
                    path: '/plaza',
                    element: <Plaza />
                },
                {
                    path: '/add_new_plaza',
                    element: <AddNewPlaza />
                },
                {
                    path: '/plaza_view',
                    element: <PlazaView />
                },
                {
                    path: '/plaza_phases',
                    element: <PlazaPhases />
                },
                {
                    path: '/manager_view',
                    element: <ManagerView />
                },
                {
                    path: '/view_plza_phases',
                    element: <ViewPlzaPhases />
                },
                {
                    path: '/agent',
                    element: <Agents />
                },
                {
                    path: '/agent-view',
                    element: <AgentsView />
                },
               
            ]

        },
        // {
        //     path: '/Signin',
        //     element: <Signin />
        // },
        // {
        //     path: '/forgotpassword',
        //     element: <Forgotpassword />
        // },




    ])
    return element;

}
export default AppNavigation