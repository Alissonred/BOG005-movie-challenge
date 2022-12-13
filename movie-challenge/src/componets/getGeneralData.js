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
    const [currentMovies, setCurrentMovies] = useState([])


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



    const baseURL = 'https://www.omdbapi.com/?'  /* 'https://www.omdbapi.com/?i=tt3896198&apikey=f9f22e32' */

    const getHandle = (by = '', ref = '', avBy = '', avRef = '') => {
        //console.log(`${baseURL}${by}=${ref}&apikey=f9f22e32`);
        return axios.get(`${baseURL}${by}=${ref}&${avBy}=${avRef}&apikey=f9f22e32`).then(res => {

            const search = options=='s'? res.data.Search: res.data ;
            
            console.log(res, 'es res');
            console.log(search, 'search');
            // console.log(Object.entires(search), 'data entires res'); /// si es una busqueda por id i titulo
            // console.log(typeof res.data.Search, 'tipo');
            return setCurrentMovies(search)
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
            <p>{avancedTitle}</p>

            <button onClick={() => getHandle(options, title, avancedOptions, avancedTitle)}>buscar</button>
            
            </div>
            {options=='s'? <ShowMovies currentMovies={currentMovies} />: <ShowOneMovie currentMovies={currentMovies}/>} 

      



        </div>
    )

}

export default GetGeneralDates