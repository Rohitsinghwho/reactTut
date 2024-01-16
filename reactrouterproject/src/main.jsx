import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About/About.jsx'
import Home from './components/home/Home.jsx'
import Contact from './components/contact/Contact.jsx'
import GithubInfo, { GithubFetch } from './components/Github/GithubInfo.jsx'

const router= createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    children:[
      {
        path: '',
        element:<Home/>
      },
      {
        path: 'about',
        element:<About/>
      },
      {
        path: 'contact',
        element:<Contact/>
      },
      {
        loader:GithubFetch,
        path:'github',
        element:<GithubInfo/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
