import axios from "axios";
import React, { useState } from "react";
import ShowMovies from "./showMovies";
import ShowOneMovie from "./showOneMovie";
import './styles.css'

const GetGeneralDates = () => {
    const [title, setTitle] = useState('')
    const [options, setOptios] = useState('')
    const [currentMovies, setCurrentMovies] = useState([]) // peliculas mostradas actualmente
    const [filterInput, setFilterInput] = useState('') // INPUT DE filter



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
                console.log(res, 'petición hecha')
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

    const filterHandle = (event) => {
        everyRequest().then(rta => {
            const dataFiltred = rta.filter(i => i[event.target.value] == filterInput)
            console.log(dataFiltred);
            setCurrentMovies([...dataFiltred])
        })
    }


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
                    type='text'
                    placeholder='Buscar'
                    value={title}
                    onChange={titleHandle}
                    required
                ></input>
                <button onClick={() => getHandle(options, title)}>buscar</button>
            </div>
            </header>
            <section className="componentsContainer">
            {options == 's' ? <ShowMovies currentMovies={currentMovies} categoryHandle={categoryHandle} filterHandle={filterHandle} filterInput={filterInput} setFilterInputHandle={setFilterInputHandle} /> : <ShowOneMovie currentMovies={currentMovies} />}
            </section>
        </div>
    )

}

export default GetGeneralDates