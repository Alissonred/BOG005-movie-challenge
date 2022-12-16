import React, { useState } from "react";
import FilterComponent from "./filter";
import './styles.css'

const ShowMovies = ({ currentMovies, filterTypeHandle, showDetailsMovie, filterInput, setFilterInputHandle }) => {
    console.log(currentMovies, 'currentMovies en showmovies');
    return (

        <div >
            <section className="searchContainer">
                <FilterComponent filterTypeHandle={filterTypeHandle} filterInput={filterInput} setFilterInputHandle={setFilterInputHandle} />
                
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