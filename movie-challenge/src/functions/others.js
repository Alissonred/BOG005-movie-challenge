import { getData } from "./request";

//////////////////doble petición///////////////////////////
export const oneRequest = (movie, by) => {
        return new Promise((resolve, reject) => getData( by, movie.imdbID, '').then(res => {
            console.log(res.data, 'oneRequest');
            resolve(res.data)
        })
        )
    }


export const everyRequest = (movies, by, callback) => {
        let arrayPromises = [];
        movies.forEach((movie) => {
            arrayPromises.push(callback(movie, by))
        })
        return Promise.all(arrayPromises) // retorno un array de promesas
    }

/////////////////////////////////////////////////

export const categoryOrder = (array, option) =>{
    return array.sort((a, b) => {
        if (option == 'Runtime') { /// duracion de menor a mayor
            if (Number(a[option].slice(0, -4)) < Number(b[option].slice(0, -4))) {
                return -1
            } else {
                return 1
            }
        }
        else if (option == 'imdbVotes' || option == 'imdbRating') { // mayor a menor
            if (Number(a[option].replace(',', '')) < Number(b[option].replace(',', ''))) {
                console.log(Number(a[option].replace(',', '')), Number(b[option].replace(',', '')), 'ayb');
                return 1
            } else {
                return -1
            }
        } else {
            if (a[option] < b[option]) {// otras
                return -1
            } else {
                return 1
            }
        }
    })

}

