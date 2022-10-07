import React, { useEffect } from 'react'
import { useNavigate, useRoutes } from 'react-router-dom';
import Login from '../Login';
import PayRent from '../PayRent';
import Report from '../Report';
import ShopRegistration from '../ShopRegistration';
import ShopsList from '../ShopsList';
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
                    path: '/',
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