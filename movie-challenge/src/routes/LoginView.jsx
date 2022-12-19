import React, { useState } from "react";
import '../componets/styles.css'
import {auth } from '../firebase/firebase'
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const LoginView =() =>{

   const clickHandle = async ()=>{
        const googleProvider = new GoogleAuthProvider();// usando las clases de google
        await singInWithGoogle(googleProvider);
    }

    const singInWithGoogle= async (googleProvider)=>{
        try{
            const res = await signInWithPopup(auth, googleProvider); 
            console.log(res,'es res');
        } catch(error){
            console.log(error,'es el error');

        }
    }

// const clickHandle = ()=>{
//     singUserGoogle().then(res =>{
//         console.log(res);
//     }).catch(error=>{
//         console.log(error)
//     })
// }

    return(

    <div>
        login compornent
        {process.env.REACT_APP_APIKEY}
        <button onClick={clickHandle}>iniciar sesión</button>
    </div>
    )
}

export default LoginView
