import React from "react";
import { useEffect } from "react";
import ShowMovies from "./showMovies";
import './styles.css'

const HomeView = ({currentMovies, setCurrentMovies, showDefault, showDetailsMovie}) => {
    useEffect(()=>{

        showDefault().then(res=>{
            setCurrentMovies(res)
            console.log(res,' essss ressssssss',currentMovies,'curr' )  
        }
        )
        
    },[])

    return (
        <div>
            <section className="dataHome">
                <h2>Marvel</h2>
                <ShowMovies currentMovies={currentMovies[1]} showDetailsMovie={showDetailsMovie}/> 
            </section>
            <section className="dataHome">
                <h2>Love</h2>
                <ShowMovies currentMovies={currentMovies[2]} showDetailsMovie={showDetailsMovie}/>
            </section>
            <section className="dataHome">
                 <h2>Space</h2>
                 <ShowMovies currentMovies={currentMovies[0]} showDetailsMovie={showDetailsMovie}/>
            </section>
            <section className="dataHome">
                 <h2>Halloween</h2>
                 <ShowMovies currentMovies={currentMovies[3]} showDetailsMovie={showDetailsMovie}/>
            </section>
            muestra por defecto
        </div>
    )
}
export default HomeView


/* <ShowMovies currentMovies={currentMovies[1]} showDetailsMovie={showDetailsMovie}/> */