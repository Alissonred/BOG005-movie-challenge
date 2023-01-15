import React, { useEffect, useState } from "react";
import { getData } from "../functions/request";
import { everyRequest, oneRequest, categoryOrder } from '../functions/others'
import ShowMovies from "../genericComponents/showMovies";
import ShowOneMovie from "../genericComponents/showMovies";
import HeaderSearch from "../genericComponents/headerSearch";
import CatergorySelectionMovie from "../genericComponents/categorySelection";
import FilterComponent from "../genericComponents/filter";
import PagesSection from "../genericComponents/pagesSection";
import { Link, useNavigate } from "react-router-dom";
import HomeView from "../componets/homeView";



const StartView = ({ search }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('')
  const [currentMovies, setCurrentMovies] = useState([]) // peliculas mostradas actualmente
  const [searchMovies, setSearchMovies] = useState([]) // peliculas mostradas actualmente
  const [selectedMovie, setSelectedMovie] = useState({}) // PELI SELECC
  const [page, setPage] = useState(1)
  

  const titleHandle = (event) => {
    setTitle(event.target.value);
  }

  const getHandle = (by = '', ref = '', page = 1) => getData(by, ref, page).then(res => {
    setSearchMovies(res.data.Search)
    setCurrentMovies(res.data.Search)
    navigate("/search")
  }).catch(error => console.log(error))


  const categoryHandle = (event) => {
    everyRequest(currentMovies, 'i', oneRequest).then(rta => {
      const dataOrdered = categoryOrder(rta, event.target.value)
      setCurrentMovies([...dataOrdered])
    })
  }

  const showDetailsMovie = (event) => {
    getData('i', event.currentTarget.dataset.id).then(res => {
      setSelectedMovie(res.data)
      navigate("/detailsMovie")
    })
  }

  const showDefault = () => {
    const homeViewTemes = ['star', 'Marvel', 'Love', 'halloween']
    return everyRequest(homeViewTemes, 's', oneRequest ).then(res => {
      
      console.log(res, 'es res de showDefault');
      let respuestas = res.map(i=> i.Search)
      console.log(respuestas, 'respuestas');
      setCurrentMovies([...respuestas])
      //setCurrentMovies([...res])

      return res
    }
    )
  }

  console.log(currentMovies, 'currentMovies');
console.log(search, 'sear');
  return (
    <div>Home
      <header className="headerContainer">
        <HeaderSearch title={title} titleHandle={titleHandle} getHandle={getHandle} />
      </header>
      <section>
        {currentMovies !== [] && search === 'search' ? <CatergorySelectionMovie categoryHandle={categoryHandle} /> : ''}
        {currentMovies !== [] && search === 'search' ? <Link>Mas opciones</Link> : ''}
      </section>
      <section className="componentsContainer">
        { search ? <ShowMovies currentMovies={currentMovies} showDetailsMovie={showDetailsMovie} /> : <HomeView currentMovies={currentMovies} showDetailsMovie={showDetailsMovie} />  }
      </section>
      <button onClick={showDefault}>algoo</button>

    </div>
  )
}

export default StartView