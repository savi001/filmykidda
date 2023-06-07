

import ShowCard from "./ShowCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ShowList({ shows, handleClick }) {
      // state to store the list of shows fetched from the API
  
    console.log(shows);
  return (
    <div style={{textAlign:'center',minHeight:"100vh",display:"flex",flexDirection:"column"}}>
    <Navbar/>
    <div className="container mx-auto mt-4">
        
      <h1 style={{textAlign:"center"}}>Shows</h1>
      <div className="row" style={{paddingBottom:"150px"}}>
        {shows.map((show) => (
          <ShowCard key={show.show.id}  handleClick={handleClick} show={show.show} />
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default ShowList;
