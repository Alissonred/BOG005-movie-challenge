import React, { useState } from "react";
import './styles.css'

const ShowOneMovie =({selectedMovie})=>{

return(
    <div>
        <article className="articleOneMovie"> 
        <p>titulo:{selectedMovie.Title} </p>
        <p>año:{selectedMovie.Year}</p> 
        <img src={selectedMovie.Poster}  alt='poster'/>
        <p>Trama: {selectedMovie.Plot}</p> 
        <p>Genero: {selectedMovie.Genre}</p> 
        <p>Puntuación: {selectedMovie.imdbRating}</p> 
        <p>Votos: {selectedMovie.imdbVotes}</p> 
        </article>  

    </div>
)
}
export default ShowOneMovie

/* <p>ID:{selectedMovie.imdbID}</p>
        <img src={selectedMovie.Poster} alt='poster'/>
        <p>Tipo:{selectedMovie.Type}</p> */


        