import React from "react";
import './styles.css'

const CatergorySelectionMovie =({categoryHandle })=>{

    return(
        <div>
            <section className="subHeader">
                Categorías generales
                <select required onChange={categoryHandle}>
                    <option value=''>Categoría </option>
                    <option value='Title'>Titulo</option>
                    <option value='imdbVotes'>Votos</option>
                    <option value='imdbRating'>Puntuación</option>
                    <option value='Year'>Antiguedad</option>
                    <option value='Runtime'>Duración </option>

                </select>

               

            </section>
            
        </div>
    )
}

export default  CatergorySelectionMovie