import React, { useState } from "react";
import FilterComponent from "./filter";
import './styles.css'

const ShowMovies = ({ currentMovies, categoryHandle, filterTypeHandle, showDetailsMovie, filterInput, setFilterInputHandle }) => {
    console.log(currentMovies, 'currentMovies en showmovies');
    return (

        <div >
            <section className="subHeader">
                Categorías generales
                <select required onChange={categoryHandle}>
                    <option value=''>Categoría </option>
                    <option value='Title'>Titulo</option>
                    <option value='imdbVotes'>Votos</option>
                    <option value='imdbRating'>Puntuación</option>
                    <option value='Year'>Antiguedad</option>
                    <option value='Runtime'>Duración</option>

                </select>

                <button onClick={categoryHandle}>Mas opciones</button>

            </section>

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