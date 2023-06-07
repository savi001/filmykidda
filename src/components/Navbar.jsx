import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFilterContext } from '../context/context';


const Navbar = () => {
    const {text,getValue}=useFilterContext();
    const [searchVal, setSearchVal] = useState("");
    var productList;
    const [products, setProducts] = useState(productList);
   
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="/" style={{color:"#DB005B",fontSize:"2.2rem",fontWeight:"800",fontFamily:"'Lilita One', cursive"}}>FilmyKidda.com </a>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        
        
       
      </ul>
      <div className='form-inline my-2 my-lg-0'>
      <Link to={"/"}>
      <button className='btn btn btn-outline-success my-2 my-sm-0' style={{border:"0px"}}> Home </button>
      </Link>
      <Link to={"/about"}>
      <button className='btn btn btn-outline-success my-2 my-sm-0' style={{border:"0px"}}> About Us </button>
      </Link>
      <form className="form-inline my-2 my-lg-0" onSubmit={(e)=>e.preventDefault()}>
        <input className="form-control mr-sm-2" type="text" name="text" onChange={getValue}  placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
      </form>
    </div>
    </div>
  </nav></div>
  )
}

export default Navbar