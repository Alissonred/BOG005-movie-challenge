import React from "react";
import { useEffect } from "react";
import ShowMovies from "./showMovies";
import './styles.css'


const HomeView = ({ currentMovies, showDetailsMovie, temesDefault }) => {
console.log(currentMovies, 'en home');/// array de arrays
    if (currentMovies.length !== 0) {

        return (
            <div>
                <section>
                {currentMovies.map((i, indice)=>{
                   return ( <div key={indice}>
                    <h3>{temesDefault[indice] == 'Star'? 'Espace':temesDefault[indice] }</h3>  
                   <ShowMovies currentMovies ={i} showDetailsMovie={showDetailsMovie} ></ShowMovies>
                   
                   </div>)
                    })}

                
                </section>
            </div>
        )
    }


}
export default HomeView


