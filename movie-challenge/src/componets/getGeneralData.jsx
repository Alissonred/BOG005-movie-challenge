import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowMovies from "./showMovies";
import ShowOneMovie from "./showOneMovie";
import './styles.css'
import Modal from "./modal";
import HeaderSearch from "./headerSearch";
import CatergorySelectionMovie from "./categorySelection";
import FilterComponent from "./filter";

const GetGeneralDates = () => {
    const [isOpenModal, setisOpenModal] = useState(false); // estado de apertura de modal
    const [title, setTitle] = useState('')
    const [currentMovies, setCurrentMovies] = useState([]) // peliculas mostradas actualmente
    const [searchMovies, setSearchMovies] = useState([]) // peliculas mostradas actualmente
    const [filterInput, setFilterInput] = useState('') // INPUT DE filter
    const [selectedMovie, setSelectedMovie] = useState({}) // PELI SELECC
    const [activeFilter, setActiveFilter] = useState(false) // filtros
    const [showFilter, setShowFilter] = useState(false) // mostart filtros
    const [showCategories, setShowCategories] = useState(false) // mostart filtros



    const openModal = () => {
        setisOpenModal(true);
    };
    const closeModal = () => {
        setisOpenModal(false);
    };

    const titleHandle = (event) => {
        setTitle(event.target.value);
    }

    const setFilterInputHandle = (event) => {
        setFilterInput(event.target.value);
    }

    const setShowFilterHandle = () => {
        //console.log('se activa filtro');
        setShowFilter(!showFilter);
    }



    const baseURL = 'https://www.omdbapi.com/?'  /* 'https://www.omdbapi.com/?i=tt3896198&apikey=f9f22e32' */

    const getHandle = (by = '', ref = '') => {
        return axios.get(`${baseURL}${by}=${ref}&apikey=f9f22e32`).then(res => {
            setSearchMovies((res.data.Search))
            setShowCategories(true)
            setCurrentMovies(res.data.Search)
        })
    }


    const everyRequest = (movies) => {
        let arrayPromises = [];
        movies.forEach((movie) => {
            arrayPromises.push(oneRequest(movie))
        })
        return Promise.all(arrayPromises) // retorno un array de promesas
    }

    const oneRequest = (movie) => {
        return new Promise((resolve, reject) => {
            axios.get(`${baseURL}i=${movie.imdbID}&apikey=f9f22e32`).then(res => {
                //console.log(res.data, 'petición hecha')
                resolve(res.data)
            })
        })
    }

    const categoryHandle = (event) => {
        everyRequest(currentMovies).then(rta => {// es un array
            const dataOrdered = rta.sort((a, b) => {
                if (event.target.value == 'Runtime') {
                    if (Number(a[event.target.value].slice(0, -4)) < Number(b[event.target.value].slice(0, -4))) {
                        return -1
                    } else {
                        return 1
                    }
                }
                else if (event.target.value == 'imdbVotes' || event.target.value == 'imdbRating') {
                    if (Number(a[event.target.value].replace(',', '')) < Number(b[event.target.value].replace(',', ''))) {
                        return -1
                    } else {
                        return 1
                    }
                } else {
                    if (a[event.target.value] < b[event.target.value]) {
                        return -1
                    } else {
                        return 1
                    }
                }
            })

            setCurrentMovies([...dataOrdered])
        })
    }

    const filterTypeHandle = (event, opc) => { // filtro  por pais, idioma,genero y tipo
        console.log(event.target.checked ,'entró a evento');
        console.log(event.target.value, 'es la cond');
        if (event.target.value === '' && event.currentTarget.checked == false) {
            console.log('no hay filtros selecc');
        }

        everyRequest(searchMovies).then(rta => {   ///searchMovies para que filtre lo encontrado/// currentMovies filtre lo mostr
            //console.log(event.target.value, 'clik')
            const dataFiltred = rta.filter(i => {
                setActiveFilter(true)
                return i[opc].includes(event.target.value)
            })
            console.log(dataFiltred, 'es lo que filtró')
            setCurrentMovies([...dataFiltred])

        })
    }

    const showDetailsMovie = (event) => {
        console.log(event.currentTarget.dataset.id, 'hizo click');
        axios.get(`${baseURL}i=${event.currentTarget.dataset.id}&apikey=f9f22e32`).then(res => {
            openModal()
            console.log(res.data, 'es la rta indiv')
            setSelectedMovie(res.data)
        })

    }

    // useEffect(() => {/// hacer que se monte al inicio 
    //     getHandle('s','star').then(res=>{
    //         return setCurrentMovies(res.data.Search)
    //     })
    // }, [])


    useEffect(() => {
        console.log(activeFilter, 'cambio activeFilter');
        //si activeFilter == true  filtre lo mostr currentMovies 
        //si activeFilter == false filtre lo encontrado searchMovies
        ///activeFilter == cuando hay algun filtro selecc //commoooooooo event.target.value ==""?
        ///activeFilter == false cuando no hay ningun filtro selecc //commoooooooo
    }, [activeFilter])

    return (
        <div className="pageContainer">

            <header className="headerContainer">
                <HeaderSearch title={title} titleHandle={titleHandle} getHandle={getHandle} />
            </header>
            <section>
                {showCategories ? <CatergorySelectionMovie categoryHandle={categoryHandle} setShowFilterHandle={setShowFilterHandle}  /> : ''}
            </section>
            <Modal
                isOpen={isOpenModal}
                closeModal={closeModal}
                contenido={<ShowOneMovie selectedMovie={selectedMovie} />}
            />

        <section className="filter-showmoviesContainer" >
            {showFilter ? <FilterComponent filterTypeHandle={filterTypeHandle} filterInput={filterInput} setFilterInputHandle={setFilterInputHandle} /> : ''}

            <section className="componentsContainer">
                <ShowMovies currentMovies={currentMovies} filterTypeHandle={filterTypeHandle} showDetailsMovie={showDetailsMovie} filterInput={filterInput} setFilterInputHandle={setFilterInputHandle} />
            </section>
        </section>
        </div>
    )

}

export default GetGeneralDates

//contenido={<ShowOneMovie  selectedMovie={selectedMovie}  /> }
//{options == 's' ? <ShowMovies currentMovies={currentMovies} categoryHandle={categoryHandle} filterTypeHandle={filterTypeHandle} showDetailsMovie={showDetailsMovie} filterInput={filterInput} setFilterInputHandle={setFilterInputHandle} /> : <ShowOneMovie currentMovies={currentMovies} />}