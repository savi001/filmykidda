
import React, { useState, useEffect } from "react";
import ShowList from "./components/ShowList";
import ShowDetails from "./components/ShowDetails";
import BookForm from "./components/BookForm";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import About from "./components/About";


function App() {

  const [shows, setShows] = useState([]);


  const [selectedShow, setSelectedShow] = useState(null);


  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      const data = await response.json();
      setShows(data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);


  const handleClick = (show) => {
    setSelectedShow(show);
  };
  return (
    <div>
      
    <div className="card">
      
    <Router>
      
        <Routes>

          <Route exact path="/" element={<ShowList shows={shows} handleClick={handleClick} />}/>
            
      
          
          <Route path="/details" element={<ShowDetails  show={selectedShow}/>}/>
          <Route path="/bookshow" element={<BookForm  show={selectedShow}/>}/>
          <Route path="about" element={<About/>} />
            
          
        </Routes>
     
    </Router>
    </div>
    </div>
  );
}

export default App;
