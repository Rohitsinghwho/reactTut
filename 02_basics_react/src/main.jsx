import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
function hello(){
  return (
    <h1 className='bg-gree'>Hello</h1>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>,
)


// This tut is for configuring the tailwind css