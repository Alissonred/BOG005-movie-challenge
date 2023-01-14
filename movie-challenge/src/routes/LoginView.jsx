import React, { useState } from "react";
import '../componets/styles.css'
import { auth, singUserGoogle, singUser, createUser, userAuthState, userExistValidation, loginOut} from '../firebase/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import AuthProvider from "../componets/authProvider";
import Formulario from "../genericComponents/formulario";

const LoginView = ({option}) =>{
    const navigate = useNavigate();
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    //const [currentUser, setCurrentUser] = useState(null)/// guarda el obj usuario que inicia sesion
    const [renderState, setRenderState] = useState(0)// numero para estado
    //   *o-> inicio(inicial)
    //   * 1->loanding (montarse useEffect) --pagina de trancision
    //    2->login compl (al comprobar que existe en BBDD)userExistValidation true  -->llevar a dashboard
    //    3->login sin registro (al atrapar user pero sin validar) userExistValidation false -->llevar a que elija nombre
    //   * 4->no logeado (al no atrapar user y no poder  validar) userAuthStateHandle else -->llevar a registrarse
    //    5-> ya existe el usuario -->llevar a que elija nombre

    const registerEmailHandle = (event) => {
        console.log(event.target.value, 'para elmail');
        setRegisterEmail(event.target.value)
    }
    const registerPasswordHandle = (event) => {
        console.log(event.target.value, 'para password');
        setRegisterPassword(event.target.value)
    }

    const registerWithCredentials = () => {
        createUser(registerEmail, registerPassword ).then(res => {
            console.log(res, 'al ejecutar createUser()');
        }).catch(error => {
            console.log(error, 'es el erro')
        })
    }

    const loginwithCredentials = () => {
        console.log(registerEmail, registerPassword, 'son credenciales de ingreso');
        singUser(registerEmail, registerPassword).then(res => {
            console.log(res, 'es el res');
        }).catch(error => {
            console.log(error, 'es  error')
        })
    }

    const loginWithGoogle = () => {
        singUserGoogle().then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error)
        })
    }

    ///////////////////////////////////////////////////////////////////
    const handleLoggedIn = (user) => navigate('/dashboard')// está logeado y registrado
    const handleNotRegistered = (user) => navigate('/choose-name') /// encuentra usuario pero ve que no está registrado 
    const handleNotLoggedIn = () => setRenderState(4)/// no encuentra usuario

    if (renderState == 4) {

        return (

            <div>
            <Formulario email={registerEmail} emailHandle={registerEmailHandle} password={registerPassword} passwordHandle={registerPasswordHandle}  task={option=='login'?'Ingresar':'Registrarse'} taskFunction={option=='login'?loginwithCredentials: registerWithCredentials} />
           
                <button onClick={loginWithGoogle}>iniciar con google </button>
            </div>
        )
    }


    return (<AuthProvider loggedIn={handleLoggedIn} notRegistered={handleNotRegistered} notLoggedIn={handleNotLoggedIn}>
        <div>loading ...</div>

    </AuthProvider>)
}

export default LoginView


