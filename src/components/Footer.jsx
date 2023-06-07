import React from 'react'
import {
    FaInstagram,
    FaFacebook,
    FaWhatsapp,
    FaTwitter,

    FaGoogle,
    FaLinkedin
  }
  from "react-icons/fa"

const Footer = () => {
  return (
    <div >
        <footer className="bg-dark text-center text-white" style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"2px",position:"absolute",bottom:"0",width:"100%" ,flexDirection:"column"}}>

    <div className="container p-2 pb-0" >

      <section className="mb-2">

        <a className="btn btn-outline-light btn-floating m-1"  style={{border:"1px",fontSize:"1.5rem"}} href="#!" role="button"
          ><span><FaInstagram/></span></a>
  

        <a className="btn btn-outline-light btn-floating m-1"  style={{border:"1px",fontSize:"1.5rem"}} href="#!" role="button"
          ><span><FaGoogle/></span></a>
  

        <a className="btn btn-outline-light btn-floating m-1"  style={{border:"1px",fontSize:"1.5rem"}} href="#!" role="button"
          ><FaTwitter/></a>
  
        
        <a className="btn btn-outline-light btn-floating m-1"  style={{border:"1px",fontSize:"1.5rem"}} href="#!" role="button"
          ><FaFacebook/></a>
  

        <a className="btn btn-outline-light btn-floating m-1"  style={{border:"1px",fontSize:"1.5rem"}} href="#!" role="button"
          ><FaWhatsapp/></a>
  

        <a className="btn btn-outline-light btn-floating m-1"  style={{border:"1px",fontSize:"1.5rem"}} href="#!" role="button"
          ><FaLinkedin/></a>
      </section>

    </div>

  

    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)",width:"100%"} }>
      © 2023 Copyright : 
      <a className="text-white" href="https://mdbootstrap.com/"> FilmyKidda.com</a>
    </div>

  </footer>
  </div>
)
}

export default Footer