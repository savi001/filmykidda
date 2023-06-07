
import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import Error from "./Error";
import Footer from "./Footer";

function ShowDetails({ show }) {
    console.log("this is ");
    console.log(show);
  return (
    <div>
        <Navbar/>
    {show!=null?<div className="container mx-auto mt-3">
        <div className="row" style={{
    width: "600px",marginLeft: "250px"}
    }>
    <div className="card" style={{marginBottom: "200px"}}>
        
      <h1 style={{textAlign:"center"}}>{show.name}</h1>
      <img src={show.image?.original} alt={show.name} className="card-img-top" style={{height:"570px",width:"580px"}}/>
      <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
      <div className="row">
      <Link to="/">
        <button className="btn mr-2" style={{marginLeft: "150px",
    marginBottom: "10px"}}>Go back</button>
      </Link>
      <Link to="/bookshow">
        <button className="btn mr-2">Book Show</button>
      </Link>
      </div>
    </div>
    </div>
    </div>:<Error/>}
    <Footer/>
    </div>
  );
}

export default ShowDetails;
