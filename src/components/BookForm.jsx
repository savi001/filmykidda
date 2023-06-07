
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Error from "./Error";
import Footer from "./Footer";

function BookForm({ show }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "booking",
      JSON.stringify({ name, email, date, time, show: show.name })
    );

    setName("");
    setEmail("");
    setDate("");
    setTime("");

    alert("Your booking has been confirmed!");
    navigate("/")
  };

  return (
<>
<Navbar/>
{show!=null?<div className="container mx-auto mt-4">
     

     <h1 style={{textAlign:"center",color:"#DB005B"}}>Book a ticket for</h1>
           <div className="card" style={{ width: "502px",
         left: "300px",marginBottom: "200px"}}>
           <h1 style={{textAlign:"center" }}>{show.name}</h1>
           <img src={show.image?.original} alt={show.name} style={{textAlign:"center",width:"300px",height:"350px" ,margin:"10px 100px 15px 100px"}} />
           <form onSubmit={handleSubmit}>
             <div className="row">
             <label htmlFor="name">Name:</label>
             
             <input className="card-subtitle mb-2 text-muted"
               type="text"
               placeholder="Your Name"
               id="name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               required
             />
             <label htmlFor="date">Date:</label>
             <input className="card-subtitle mb-2 text-muted"
               type="date"
               
               id="date"
               value={date}
               onChange={(e) => setDate(e.target.value)}
               required
             />
             <label htmlFor="email">Email:</label>
             <input
               type="email"
               placeholder="Your Email "
               id="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
             />
             
             <label htmlFor="time">Time:</label>
             <input
               type="time"
               
               id="time"
               value={time}
               onChange={(e) => setTime(e.target.value)}
               required
               
             />
             </div>
             <button type="submit" className="btn " style={{marginLeft: "200px",
         marginTop: "10px",
         marginBottom: "15px"}}>Book now</button>
           </form>
           </div>
         </div>:<Error/>}
    <Footer/>
    </>
  );
}

export default BookForm;
