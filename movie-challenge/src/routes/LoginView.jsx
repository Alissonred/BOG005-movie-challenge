import React, { useState } from "react";
import '../componets/styles.css'
import { auth, singUserGoogle, singUser, createUser, userAuthState, userExistValidation } from '../firebase/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"

const LoginView = () => {
    const navigate = useNavigate();
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [currentUser, setCurrentUser] = useState(null)/// guarda el obj usuario que inicia sesion
    const [renderState, setRenderState] = useState(0)// numero para estado
    // /* o-> inicio(inicial)
    //    1->loanding (montarse useEffect) --pagina de trancision
    //    2->login compl (al comprobar que existe en BBDD)userExistValidation true  -->llevar a dashboard
    //    3->login sin registro (al atrapar user pero sin validar) userExistValidation false -->llevar a registrarse
    //    4->no logeado (al no atrapar user y no poder  validar) userAuthStateHandle else -->llevar a registrarse

    const registerEmailHandle = (event) => {
        console.log(event.target.value, 'para elmail');
        setRegisterEmail(event.target.value)
    }
    const registerPasswordHandle = (event) => {
        console.log(event.target.value, 'para password');
        setRegisterPassword(event.target.value)
    }

    const registerWithCredentials = () => {
        createUser().then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error)
        })
    }

    const loginwithCredentials = () => {
        singUser().then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error)
        })
    }

    const loginWithGoogle = () => {
        singUserGoogle().then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        setRenderState(1)/// logeando 
        userAuthState((user) => { /// atrapa user y asiign numros
            if (user) {
                setCurrentUser(user)
                // console.log(user, 'es user');
                // console.log(user.uid, 'es uid');
                console.log(user.displayName, 'userName')
                userExistValidation(user.uid).then(res => {
                    if(res.exists()){
                        setRenderState(2)
                        navigate('/dashboard')
                    }else{
                        setRenderState(3)
                        navigate('/choose-name')
                    }
    
                })// validacion luego de ejec
        
            } else {
                setRenderState(3)
                console.log('no se ha logeado nadie');
                navigate('/register')
            }
        }); //get info de user logeado actualmente
    }, [])

    // const userAuthStateHandle = (user) => { /// atrapa user y asiign numros
    //     if (user) {
    //         setCurrentUser(user)
    //         // console.log(user, 'es user');
    //         // console.log(user.uid, 'es uid');
    //         console.log(user.displayName, 'userName')
    //         userExistValidation(user.uid).then(res => {
    //             if(res.exists()){
    //                 setRenderState(2)
    //                 navigate('/dashboard')
    //             }else{
    //                 setRenderState(3)
    //                 navigate('/choose-name')
    //             }

    //         })// validacion luego de ejec
    
    //     } else {
    //         setRenderState(3)
    //         console.log('no se ha logeado nadie');
    //         navigate('/register')
    //     }
    // }
 
   
    if (renderState == 2) {
        return <div>estás autenticado y registrado</div>
    }

    if (renderState == 3) {
        return <div>estás autenticado pero no registrado</div>
    }
    if (renderState == 4) {

        return (

            <div>
                login compornent
                <input
                    type='email'
                    value={registerEmail}
                    placeholder='ingresa tu email'
                    onChange={registerEmailHandle}
                >
                </input>

                <input
                    type='password'
                    value={registerPassword}
                    placeholder='ingresa tu contraseña'
                    onChange={registerPasswordHandle}
                >
                </input>
                <p>email: {registerEmail}</p>
                <p>contraseña: {registerPassword}</p>
                <button onClick={registerWithCredentials}>Registrarse </button>
                <button onClick={loginwithCredentials}>iniciar sesión </button>
                <button onClick={loginWithGoogle}>iniciar con google </button>
            </div>
        )
    }

    return <div>loading 'por defecto'</div>

}

export default LoginView
