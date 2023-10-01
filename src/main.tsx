import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import {RouterProvider} from "react-router-dom"
import Index from "./routes/AllRoutes"
import GlobalStyles from './assets/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={Index}/>
  </React.StrictMode>,
)
