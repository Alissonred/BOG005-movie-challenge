import React, { useState } from "react";
import './styles.css'

const ShowOneMovie =({currentMovies})=>{

return(
    <div>
        <article className="articleOneMovie"> 
        <p>titulo:{currentMovies.Title} </p>
        <p>año:{currentMovies.Year}</p> 
        <img src={currentMovies.Poster}  alt='poster'/>
        <p>Trama: {currentMovies.Plot}</p> 
        <p>Genero: {currentMovies.Genre}</p> 
        <p>Puntuación: {currentMovies.imdbRating}</p> 
        <p>Votos: {currentMovies.imdbVotes}</p> 
        </article>  

    </div>
)
}
export default ShowOneMovie

/* <p>ID:{currentMovies.imdbID}</p>
        <img src={currentMovies.Poster} alt='poster'/>
        <p>Tipo:{currentMovies.Type}</p> */


        