import React, { useEffect } from 'react'
import { useNavigate, useRoutes } from 'react-router-dom';
import AddNewPlaza from '../AddNewPlaza';
import Login from '../Login';
import Managers from '../Managers';
import ManagerUser from '../ManagerUser';
import PayRent from '../PayRent';
import Plaza from '../Plaza';
import Report from '../Report';
import Setting from '../Setting';
import ShopRegistration from '../ShopRegistration';
import ShopsList from '../ShopsList';
import Tenant from '../Tenant';
import TenantRegistration from '../TenantRegistration';
import AppIndex from './AppIndex';

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
                    path: '/shops_list',
                    element: <ShopsList />
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