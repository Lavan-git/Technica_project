import React,{useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import RatingsAndReviews from './Review'

import Footer from './Footer'
function Product({id}) {
  const [fake,setFake] =  useState([]);
  console.log(fake);
  useEffect(()=>{
    fakestore();
  },[])
  const fakestore = async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    // console.log(response);
    const jsonData = await response.json()
    // console.log(jsonData);
    setFake(jsonData);
  }
  fakestore();
  console.log(id)
  const desiredIds = [id];

  // Filter the list using filter() method
  const filteredFake = fake.filter((item) => desiredIds.includes(item.id));

  console.log(fake)
  return (
    <>
      {/* <Navbar/> */}
      <div className="container">
      
      {filteredFake.map((values)=>{
        return(
          <>
          <div className="card" style={{width: "80%",  margin:"2rem"}}>
                <img src={values.image} className="card-img-top" alt="imagehere" style={{width:"50%", height:"50%"}}/>
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
      <RatingsAndReviews/>
      {/* <Footer/> */}
      
    </>

  )//   })
}

export default Product
