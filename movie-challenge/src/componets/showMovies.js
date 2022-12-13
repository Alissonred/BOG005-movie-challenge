import React, { useState } from "react";
import './styles.css'

const ShowMovies =({currentMovies})=>{
console.log(currentMovies, 'currentMovies en showmovies');
return(
    <div className="moviesContainer">
        {currentMovies.map((movie, i) => {
            return (
                <article key={i} className="articleMovie" > 
                <p>titulo:{movie.Title} </p>
                <p>año:{movie.Year}</p> 
                <p>ID:{movie.imdbID}</p>
                <img src={movie.Poster} alt='poster'/>
                <p>Tipo:{movie.Type}</p></article>  
            )

        })}

    </div>
)
}
export default ShowMovies 