import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './outlet/Outlet.jsx'
import {About,Contact, Projects} from './Pages/index.js'
import { store } from './store/store.js'
import { Provider } from 'react-redux'

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
      },
      {
        path : 'projects',
        Component : Projects
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider store = {store}>
    <RouterProvider router={routers} />
    </Provider>
  </StrictMode>,
  
)
