import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import WebLayouts from "../Components/layouts/WebLayouts"
import HomeScreen from '../pages/HomeScreen'
import Shorts from '../pages/Shorts'
import Subcription from '../pages/Subcription'
import Library from '../pages/Library'
import History from '../pages/History'
import HdetailedPage from '../pages/HdetailedPage'
import Watch from '../pages/Watch'


const Index = createBrowserRouter([
    {
        path:"/",
        element:<WebLayouts/>,
        children:[
            {
                index:true,
                element:<HomeScreen/>
                },
                {
        path:"/shorts",
        element:<Shorts/>
    },
    {
        path:"/Watch/:id",
        element:<HdetailedPage/>
    },

    {
        path:"/sub",
        element:<Subcription/>
    },
    {
        path:"/library",
        element:<Library/>
    },
    {
        path:"/history",
        element:<History/>
    },{
        path:"watch",
        element:<Watch/>
    },{
        path:"watch/:id",
        element:<HdetailedPage/>
    }
            ]
        },
    
])

export default Index