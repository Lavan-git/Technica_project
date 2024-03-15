import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.jsx'
import Product from './ProductPage.jsx'
import Footer from './Footer.jsx'
// import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Product id={5}/>
    <Footer/>
  </React.StrictMode>,
)
