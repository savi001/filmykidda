
import React from "react";
import { Link } from "react-router-dom";

import Stars from "./Stars";


function ShowCard({ show, handleClick }) {
    console.log(show);
  return (
    <div className="col-md-4">
        <div class="card">
      <img src={show.image?.medium} alt={show.name} className="card-img-top"/>
      <div class="card-body">
      <h3 className="card-title">{show.name}</h3>
      <h6 className="card-subtitle mb-2 text-muted">Genres: {show.genres.join(", ")}</h6> 
       <p className="card-text">Rating: {show.rating.average} <Stars star={show.rating.average}/></p>
      <Link to="/details" onClick={() => handleClick(show)}>
        <button  className="btn mr-2">See more</button>
      </Link>
      </div>
    </div>
    </div>
  );
}

export default ShowCard;
