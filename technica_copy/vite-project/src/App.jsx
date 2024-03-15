import React,{useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'

import Footer from './Footer'
function App() {
  const [fake,setFake] =  useState([]);
  console.log(fake);
  useEffect(()=>{
    fakestore();
  },[])
  const fakestore = async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    const jsonData = await response.json()
    console.log(jsonData);
    setFake(jsonData);
  }
  fakestore();
  return (
    <>
      <Navbar/>
      <div className="container">
      {fake.map((values)=>{
        return(
          <>
          <div className="card" style={{width: "18rem", margin:"2rem"}}>
                <img src={values.image} className="card-img-top" alt="imagehere"/>
                <div className="card-body">
                    <h5 className="card-title">{values.title}</h5>
                    <p className="card-text">{values.description}</p>
                    <a href="" className="btn btn-primary">${values.price}</a>
                </div>
            </div>
          </>
        )
      })}
        
      </div>
      <Footer/>
    </>

  )//   })
}

export default App
