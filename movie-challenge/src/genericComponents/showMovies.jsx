import React, { useState } from "react";
import './styles.css'

const ShowMovies = ({ currentMovies,  showDetailsMovie}) => {
    console.log(currentMovies, 'currentMovies en showmovies');
    return (

        <div >
            <section className="searchContainer">
                
                <div className="moviesContainer">
                  
                    {currentMovies.map((movie, i) => {
                        return (
                            <article key={i} className="articleMovie" >
                            <section data-id ={movie.imdbID} onClick={showDetailsMovie} className='movieInGrid'>
                                <picture className='moviePost'>
                                    <img src={movie.Poster} alt='poster' />
                                </picture>
                                <p>{movie.Title} </p>
                            </section>
                                <p>Año:{movie.Year}</p>
                                <p>Puntuación:{movie.imdbRating}</p>
                                <p>Votos:{movie.imdbVotes}</p>
                                <p>Duración:{movie.Runtime}</p>
                              
                                
                            </article>
                        )

                    })}

                </div>
            </section>
        </div>
    )
}
export default ShowMovies 
