import React from "react";
import './styles.css'


const PagesSection =({title, getHandle, page})=>{
console.log(page, 'es page');
    return(
        <div className="searchSection">
        
        <button onClick={() => getHandle('s', title, page<=1? 1 : page-1)}>atras</button>
        <button onClick={() => getHandle('s', title, page+1)}>adelante</button>
    </div>
    )
}

export default  PagesSection