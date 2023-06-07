import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Error = () => {
  return (
    <div style={{marginBottom: "50vh",textAlign:"center",marginTop:"30vh"}}>

        <p style={{textAlign:"center"}}>Sorry , Invalid Request</p>
    <Link to="/">
    <button style={{textAlign:"center"}} className='btn'>Home Page</button>
    </Link>
    {/* <Footer/> */}
    </div>
  )
}

export default Error