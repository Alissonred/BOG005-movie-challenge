import React from "react";
import { useEffect } from "react";
import './styles.css'

const HomeView = ({currentMovies, setCurrentMovies, showDefault}) => {
    useEffect(()=>{
        showDefault().then(res=>{
            console.log(res,' essss ressssssss')
            return setCurrentMovies(res[1])
        })
    
    },[])

    return (
        <div>
            <section className="dataHome">
                <h2>Marvel</h2>
                
            </section>
            <section className="dataHome">
                <h2>Love</h2>
            </section>
            <section className="dataHome">
                 <h2>Space</h2>
            </section>
            <section className="dataHome">
                 <h2>Heros</h2>
            </section>
            muestra por defecto
        </div>
    )
}
export default HomeView


