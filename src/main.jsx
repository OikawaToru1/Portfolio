import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './outlet/Outlet.jsx'
import {About,Contact} from './Pages/index.js'

let routers = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        index : true,
        Component : App
      },
      {
        path : "about",
        Component : About
      },
      {
        path : 'contact',
        Component : Contact
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
  
)
