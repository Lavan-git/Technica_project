import React from 'react'
import PropTypes from 'prop-types'
import logo from './assets/vmart.jpg'
import locationpin from './assets/geo-alt-fill.svg'
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
        <img src={logo} height={'70px'} width={"70px"} style={{borderRadius:"50%"}}/>
  <div className="container-fluid" >
        <a className="navbar-brand" href="/">VMart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
	<div style={{marginLeft:"15%", width:"100%"}}>
        <p className="nav-link active" aria-current="page" style={{marginBottom:"0px", paddingBottom:"1px"}}>Deliver to Vellore  632014 </p>          
	    <p class=""><img src={locationpin} alt="locationpin"/>Update Location</p>
	</div>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
	<a href='../login.html'><button className="btn btn-outline-success" type="login" style={{marginLeft:"5%"}}>Login/Signin</button></a>
    </div>
  </div>
</nav>
  )
}