import axios from "axios";


const baseURL = 'https://www.omdbapi.com/?'

export const getData = (by, ref, page) => axios.get(`${baseURL}${by}=${ref}&page=${page}&apikey=f9f22e32`)

//axios.get(`${baseURL}i=${movie.imdbID}&apikey=f9f22e32`)
// axios.get(`${baseURL}i=${event.currentTarget.dataset.id}&apikey=f9f22e32`)