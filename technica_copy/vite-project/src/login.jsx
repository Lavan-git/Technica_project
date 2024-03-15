import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './loginPage.jsx'
import Navbar from './Navbar.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <LoginPage />
  </React.StrictMode>,
)
