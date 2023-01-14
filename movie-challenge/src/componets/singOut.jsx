import './styles.css'
import React, { Children, useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import {loginOut} from '../firebase/firebase'

const SignOutView = ({  }) => {
    const navigate = useNavigate();

    const loginOutHandle = () =>{

            loginOut().then(()=>{
                navigate("/login")
            }).catch(error => console.log(error))
 
    }
return(
    <div>
    SignOutView
    <button onClick={loginOutHandle}>cerrar sesion</button>
    </div>
)
}
export default SignOutView