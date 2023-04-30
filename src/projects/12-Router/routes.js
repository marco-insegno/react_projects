import React from 'react'

import Home from './views/Home'
import About from './views/About'
import Profile from './views/Profile'
import SingleProfile from './views/SingleProfile'
import MeProfile from './views/MeProfile'
import Error404 from './views/Error404'


const routes = [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/profile',
        element:<Profile/>,
        children: [
            {
                path:'/profile/:id',
                element:<SingleProfile/>
            },
            {
                path:'/profile/me',
                element:<MeProfile/>
            },
        ]
    },
    {
        path:'*',
        element:<Error404/>
    }
]

export default routes