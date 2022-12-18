import React from "react";
import './styles.css'


const HeaderSearch =({title, titleHandle, getHandle})=>{

    return(
        <div className="searchSection">
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

        <button onClick={() => getHandle('s', title)}>buscar</button>
    </div>
    )
}

export default  HeaderSearch