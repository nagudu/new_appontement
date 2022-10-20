import React from 'react'
import Home from '../dashboard/AdminDashboard/Home';
import { useNavigate, useRoutes } from 'react-router-dom';
import AddNewPlaza from '../AddNewPlaza';
// import Login from '../Login';
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
import Tenant from '../Tenant';
import TenantRegistration from '../TenantRegistration';
import TenantView from '../TenantView';
import ViewPlzaPhases from '../ViewPlzaPhases';
import AppIndex from './AppIndex';
import Agents from '../Agent/Agents';
import AgentsView from '../Agent/AgentsView';
import RentExpiry from '../RentExpiry';
import AgentDashboard from '../AgentDashboard/AgentDashboard';
import AgentShops from '../AgentDashboard/AgentShops';
// import Payment from '../AgentDashboard/Payment';
import AgentRepetion from '../AgentDashboard/AgentRepetion';
import AgentPayment from '../AgentDashboard/AgentPayment';
import AgentTenant from '../AgentDashboard/AgentTenant';
import AgentPhases from '../AgentDashboard/AgentPhases';


function AppNavigation() {
    // const dispatch = useDispatch()
    const navigate = useNavigate()
    //     useEffect(() => {
    // dispatch(initUser(() => navigate("/login")))
    //     }, [])

    let element = useRoutes([

        {
            element: <AppIndex />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },


                {
                    path: '/plazas',
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
                    path: '/reports',
                    element: <Report />
                },
                {
                    path: '/setting',
                    element: <Setting />
                },
                {
                    path: '/tenants',
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
                    path: '/plazas',
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
                    path: '/agents',
                    element: <Agents />
                },
                {
                    path: '/agent-view',
                    element: <AgentsView />
                },
                {
                    path: '/rent-expiry',
                    element: <RentExpiry />
                },


            ]

        },

        {
            path: '/agent-dashboard',
            element: <AgentDashboard />,
            children: [
                {
                    index: true, element: <AgentShops />
                },
                {
                    path: '/agent-dashboard/repetion',
                    element: <AgentRepetion />
                },
                {
                    path: '/agent-dashboard/payment',
                    element: <AgentPayment />
                },
                {
                    path: '/agent-dashboard/tenant',
                    element: <AgentTenant />
                },
                {
                    path: '/agent-dashboard/phases',
                    element: <AgentPhases />
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