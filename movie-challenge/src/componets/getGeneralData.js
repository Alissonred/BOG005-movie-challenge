import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowMovies from "./showMovies";
import ShowOneMovie from "./showOneMovie";
import './styles.css'
import Modal from "./modal";

const GetGeneralDates = () => {
    const [isOpenModal, setisOpenModal] = useState(false); // estado de apertura de modal
    const [title, setTitle] = useState('')
    const [options, setOptios] = useState('')
    const [currentMovies, setCurrentMovies] = useState([]) // peliculas mostradas actualmente
    const [filterInput, setFilterInput] = useState('') // INPUT DE filter
    const [selectedMovie, setSelectedMovie] = useState({}) // PELI SELECC


    const openModal = () => {
        setisOpenModal(true);
    };
    const closeModal = () => {
        setisOpenModal(false);
        //setSelectedUser({}); // si el useEffect de editusers no funciona
    };

    const titleHandle = (event) => {
        setTitle(event.target.value);
    }

    const optionsHandle = (event) => {
        setOptios(event.target.value);
    }

    const setFilterInputHandle = (event) => {
        setFilterInput(event.target.value);
    }



    const baseURL = 'https://www.omdbapi.com/?'  /* 'https://www.omdbapi.com/?i=tt3896198&apikey=f9f22e32' */

    const getHandle = (by = '', ref = '') => {
        //console.log(`${baseURL}${by}=${ref}&apikey=f9f22e32`);
        return axios.get(`${baseURL}${by}=${ref}&apikey=f9f22e32`).then(res => {
            const search = options == 's' ? res.data.Search : res.data;
            return setCurrentMovies(search)
        })
    }


    const everyRequest = () => {
        let arrayPromises = [];
        currentMovies.forEach((movie) => {
            arrayPromises.push(oneRequest(movie))
        })
        return Promise.all(arrayPromises) // retorno un array de promesas
    }

    const oneRequest = (movie) => {
        return new Promise((resolve, reject) => {
            axios.get(`${baseURL}i=${movie.imdbID}&apikey=f9f22e32`).then(res => {
                console.log(res.data, 'petición hecha')
                resolve(res.data)
            })
        })
    }

    const categoryHandle = (event) => {
        everyRequest().then(rta => {// es un array
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

    const filterTypeHandle = (event, opc) => {
        console.log('entró a evento');
        everyRequest().then(rta => {

            if (opc == 'Genre' || opc == 'Country' || opc == 'Language') {
                const dataFiltred = rta.filter(i => {
                    return i[opc].includes(event.target.value)
                })
                console.log(dataFiltred, 'es lo que filtró')
                setCurrentMovies([...dataFiltred])
            } else {
                const dataFiltred = rta.filter(i => {
                    return i[opc] == event.target.value
                })
                console.log(dataFiltred, 'es lo que filtró')
                setCurrentMovies([...dataFiltred])
            }
            ;

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


    return (
        <div className="pageContainer">

            <header className="headerContainer">
                <div className="searchSection">
                    Busqueda
                    <select required onChange={optionsHandle}>
                        <option value='s'>Opciones </option>
                        <option value='i'>ID</option>
                        <option value="s">Palabra clave</option>
                        <option value="t">Titulo</option>
                    </select>

                    <input
                        list="listInic"
                        type='text'
                        placeholder='Buscar'
                        value={title}
                        onChange={titleHandle}
                        required
                    ></input>

                    <datalist id="listInic" >
                        <option value=''>Filtro</option>
                        <option value='halloween'>halloween</option>
                        <option value='Love'>amor</option>
                        <option value='man'>Super Heroes</option>
                        <option value='star'>Espacio</option>
                        <option value='marvel'>marvel</option>
                        <option value='fast'>acción</option>
                    </datalist>


                    <button onClick={() => getHandle(options, title)}>buscar</button>
                    <Modal
                        isOpen={isOpenModal}
                        closeModal={closeModal}
                        contenido={<ShowOneMovie  selectedMovie={selectedMovie}  /> }
                         />

                </div>
            </header>
            <section className="componentsContainer">
            <ShowMovies currentMovies={currentMovies} categoryHandle={categoryHandle} filterTypeHandle={filterTypeHandle} showDetailsMovie={showDetailsMovie} filterInput={filterInput} setFilterInputHandle={setFilterInputHandle} />
            </section>
        </div>
    )

}

export default GetGeneralDates

//contenido={<ShowOneMovie  selectedMovie={selectedMovie}  /> }
//{options == 's' ? <ShowMovies currentMovies={currentMovies} categoryHandle={categoryHandle} filterTypeHandle={filterTypeHandle} showDetailsMovie={showDetailsMovie} filterInput={filterInput} setFilterInputHandle={setFilterInputHandle} /> : <ShowOneMovie currentMovies={currentMovies} />}