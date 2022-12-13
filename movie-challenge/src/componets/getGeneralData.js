import axios from "axios";
import React, { useState } from "react";
import ShowMovies from "./showMovies";
import ShowOneMovie from "./showOneMovie";
import './styles.css'

const GetGeneralDates = () => {
    const [title, setTitle] = useState('')
    const [options, setOptios] = useState('')
    const [avancedOptions, setAvancedOptios] = useState('')
    const [avancedTitle, setAvancedTitle] = useState('')
    const [currentMovies, setCurrentMovies] = useState([]) // peliculas mostradas actualmente
    //const [categorySelected, setCategorySelected] = useState('') // SELECTOR DE CATEGORIAS
    const [filterInput, setFilterInput] = useState('') // INPUT DE filter
   


    const titleHandle = (event) => {
        setTitle(event.target.value);
    }

    const optionsHandle = (event) => {
        setOptios(event.target.value);
    }

    const avancedTitleHandle = (event) => {
        setAvancedTitle(event.target.value);
    }

    const avancedOptionsHandle = (event) => {
        setAvancedOptios(event.target.value);
    }
    const setFilterInputHandle = (event) => {
        setFilterInput(event.target.value);
    }



    const baseURL = 'https://www.omdbapi.com/?'  /* 'https://www.omdbapi.com/?i=tt3896198&apikey=f9f22e32' */

    const getHandle = (by = '', ref = '', avBy = '', avRef = '') => {
        //console.log(`${baseURL}${by}=${ref}&apikey=f9f22e32`);
        return axios.get(`${baseURL}${by}=${ref}&${avBy}=${avRef}&apikey=f9f22e32`).then(res => {

            const search = options == 's' ? res.data.Search : res.data;

            //console.log(res, 'es res');
            //console.log(search, 'search');
            // console.log(Object.entires(search), 'data entires res'); /// si es una busqueda por id i titulo
            // console.log(typeof res.data.Search, 'tipo');
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
               // console.log(a[event.target.value], 'es a', b[event.target.value], 'es b');
                if (a[event.target.value] < b[event.target.value]) {
                    return -1
                } else {
                    return 1
                }
            })
            console.log(rta, 'rta')
            console.log(dataOrdered, ' dataOrdered')
            setCurrentMovies([...dataOrdered])
        })
    }

    const filterHandle =(event)=>{
        everyRequest().then(rta => {
            const dataFiltred = rta.filter(i=>i[event.target.value] == filterInput)
            console.log(dataFiltred);
            setCurrentMovies([...dataFiltred])
        })
    }


    return (
        <div>
            <div className="searchSection">
                Busqueda básica
                <select required onChange={optionsHandle}>
                    <option value=''>Opciones </option>
                    <option value='i'>ID</option>
                    <option value="s">Palabra clave</option>
                    <option value="t">Titulo</option>
                </select>

                <input
                    type='text'
                    placeholder='dato'
                    value={title}
                    onChange={titleHandle}
                    required
                ></input>
                <p>{title}</p>

                Busqueda adicional
                <select required onChange={avancedOptionsHandle}>
                    <option value=''>Opciones avanzadas </option>
                    <option value='y'>Año</option>
                    <option value="Type">Tipo</option>
                </select>

                <input
                    type='text'
                    placeholder='dato'
                    value={avancedTitle}
                    onChange={avancedTitleHandle}
                ></input>


                <button onClick={() => getHandle(options, title, avancedOptions, avancedTitle)}>buscar</button>

            </div>




            {options == 's' ? <ShowMovies currentMovies={currentMovies} categoryHandle={categoryHandle} filterHandle={filterHandle} filterInput={filterInput} setFilterInputHandle={setFilterInputHandle}/> : <ShowOneMovie currentMovies={currentMovies} />}





        </div>
    )

}

export default GetGeneralDates