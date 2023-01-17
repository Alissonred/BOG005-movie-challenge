import React, { useEffect, useState } from "react";
import { getData } from "../functions/request";
import { everyRequest, oneRequest, categoryOrder, getOneByHome } from '../functions/others'
import ShowMovies from "../genericComponents/showMovies";
import ShowOneMovie from "../genericComponents/showMovies";
import HeaderSearch from "../genericComponents/headerSearch";
import CatergorySelectionMovie from "../genericComponents/categorySelection";
import FilterComponent from "../genericComponents/filter";
import PagesSection from "../genericComponents/pagesSection";
import { Link, useNavigate } from "react-router-dom";
import HomeView from "../genericComponents/homeView";


const homeViewTemes = ['Star', 'Marvel', 'Love', 'Halloween']


const StartView = ({ search }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('')
  const [currentMovies, setCurrentMovies] = useState([]) // peliculas mostradas actualmente
  const [searchMovies, setSearchMovies] = useState([]) // peliculas mostradas actualmente
  const [selectedMovie, setSelectedMovie] = useState({}) // PELI SELECC
  const [page, setPage] = useState(1)
  const [problems, setProblems] = useState('')
  
 

  const titleHandle = (event) => {

    setTitle(event.target.value);
    
  }

  const getHandle = (by = '', ref = '', page = 1) =>{ 
 if(ref.length>= 3){
  setProblems('')
  return getData(by, ref, page).then(res => {
    console.log(res, 'es el resultado');
    setSearchMovies(res.data.Search)
    setCurrentMovies(res.data.Search)
    navigate("/search")
  }).catch(error => console.log(error))
    }else{
      setProblems('El titulo suministrado es muy corto')
    }
}


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
    return everyRequest(homeViewTemes, 's', getOneByHome ).then(res => {
      setCurrentMovies([...res])
      return res
    })
  }

  useEffect(() => {/// hacer que se monte al inicio 
    showDefault().then(res=>setCurrentMovies(res))
}, [])

  console.log(currentMovies, 'currentMovies');
  console.log(title, 'title');

  if(currentMovies == undefined){
    return(
      <div>
        <header className="headerContainer">
        <HeaderSearch title={title} titleHandle={titleHandle} getHandle={getHandle}  />
      </header>
      <h3> intenta de nuevo la busqueda</h3>
      </div>
    )
  }

  if(problems != ''){
    return(
      <div>
      <header className="headerContainer">
      <HeaderSearch title={title} titleHandle={titleHandle} getHandle={getHandle}  />
      </header>
    <h3> {problems}</h3>
    </div>
    )
  }

  
  return (
    <div>
      <header className="headerContainer">
        <HeaderSearch title={title} titleHandle={titleHandle} getHandle={getHandle}  />
      </header>
      <section>

        { title != '' && search === 'search' ? <CatergorySelectionMovie categoryHandle={categoryHandle} /> : ''}
        {title != '' && search === 'search' ? <Link>Mas opciones</Link> : ''}
      </section>
      <section className="componentsContainer">
        { title != '' ? <ShowMovies currentMovies={currentMovies} showDetailsMovie={showDetailsMovie} label= {title} /> : <HomeView currentMovies={currentMovies} showDetailsMovie={showDetailsMovie} temesDefault={homeViewTemes}/>  }
      </section>
   

    </div>
  )
}

export default StartView