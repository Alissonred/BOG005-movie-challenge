import React, { useState } from "react";
import './styles.css'

const ShowMovies = ({ currentMovies, categoryHandle }) => {
    console.log(currentMovies, 'currentMovies en showmovies');
    return (

        <div>
            Categorías generales
            <select required onChange={categoryHandle}>
                <option value=''>Categoría </option>
                <option value='Title'>Titulo</option>
                <option value='imdbVotes'>Votos</option>
                <option value='imdbRating'>Puntuación</option>
                <option value='Year'>Antiguedad</option>
                <option value='Runtime'>Duración</option>
                <option value='Genre'>Genero</option>
                <option value='Language'>Idioma</option>
            </select>

            <div className="moviesContainer">
                {currentMovies.map((movie, i) => {
                    return (
                        <article key={i} className="articleMovie" >
                            <p>titulo:{movie.Title} </p>
                            <p>año:{movie.Year}</p>
                            <p>ID:{movie.imdbID}</p>
                            <img src={movie.Poster} alt='poster' />
                            <p>Tipo:{movie.Type}</p></article>
                    )

                })}

            </div>
        </div>
    )
}
export default ShowMovies 