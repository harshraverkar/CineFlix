import React from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import "./search.css";

const SearchMovie = () => {
    const { movie } = useGlobalContext();
    return (
   <section className="movie-page">
    <div className="grid grid-4-col">
        {movie.map((curMovie) => {
           const { imdbID, Title, Poster } = curMovie;
           return (
           <NavLink className="checkinghover" to={`movie/${imdbID}`} key={imdbID}>
            <div className="card"> 
            <div className="card-info">
                <h2>{Title}</h2>
                 <img src={Poster} alt={imdbID} />
                 </div>
            </div>
           </NavLink>
           );
        })}
        
        </div>
  
  </section>
  );
};

export default SearchMovie;