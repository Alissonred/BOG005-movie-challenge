import React, { useState } from "react";
import './styles.css'

const GenreOptions = () => {

    return(
        <div>
            <label > <input type='checkbox' value='Drama' name="drama"  />Drama </label>
            <label > <input type='checkbox' value='Romance' name="drama" />Romance </label>
            <label > <input type='checkbox' value='Action' name="drama" />Acción </label>
            <label > <input type='checkbox' value='Sci-Fi' name="drama" />Ciencia Ficción </label>
            <label > <input type='checkbox' value='Comedy' name="drama" />Comedia </label>
            <label > <input type='checkbox' value='Horror' name="drama" />Terror</label>
            <label > <input type='checkbox' value='Aventure' name="drama" />Aventura </label>
            <label > <input type='checkbox' value='Suspence' name="drama" />Suspenso </label>
            <label > <input type='checkbox' value='Documentary' name="drama" />Documental</label>
            <label > <input type='checkbox' value='Crime' name="drama" />Crimen</label>
        </div>
        
    )
}
export default GenreOptions