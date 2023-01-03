import React from "react";
import { useEffect } from "react";
import ShowMovies from "./showMovies";
import './styles.css'

const HomeView = ({ currentMovies, setCurrentMovies, showDefault, showDetailsMovie }) => {
    console.log(currentMovies, 'curreb');
    // useEffect(()=>{

    //     showDefault().then(res=>{
    //         //setCurrentMovies([...res])
    //         console.log(res,' essss ressssssss',currentMovies,'curr' )  
    //     }
    //     )

    // },[])

    if (currentMovies.length !== 0) {
        console.log('entra a cond');
        return (
            <div>
                <section className="dataHome">
                    <h2>Marvel</h2>
                    <ShowMovies currentMovies={currentMovies[1]} showDetailsMovie={showDetailsMovie} />
                </section>
                <section className="dataHome">
                    <h2>Love</h2>
                    <ShowMovies currentMovies={currentMovies[2]} showDetailsMovie={showDetailsMovie} />
                </section>
                <section className="dataHome">
                    <h2>Space</h2>
                    <ShowMovies currentMovies={currentMovies[0]} showDetailsMovie={showDetailsMovie} />
                </section>
                <section className="dataHome">
                    <h2>Halloween</h2>
                    <ShowMovies currentMovies={currentMovies[3]} showDetailsMovie={showDetailsMovie} />
                </section>
            </div>
        )
    }
}
export default HomeView


/* <section className="dataHome">
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
</section> */