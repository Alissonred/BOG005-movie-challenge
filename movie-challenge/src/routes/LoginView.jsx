import React, { useState } from "react";
import '../componets/styles.css'
import { auth, singUserGoogle, singUser, createUser, userAuthState, userExistValidation } from '../firebase/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useEffect } from "react";

const LoginView = () => {

    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [currentUser, setCurrentUser] = useState(null)
    const [renderState, setRenderState] = useState(0)// numero para estado

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
        userAuthState(userAuthStateHandle);
    }, [])

    const userAuthStateHandle = (user) => {
        if (user) {
            setCurrentUser(user)
            setRenderState(3)
            console.log(user, 'es user');
            console.log(user.uid, 'es uid');
            console.log(user.displayName, 'userName')
            userExistValidation(user.uid).then(res => res.exists?setRenderState(2):setRenderState(3))
    
        } else {
            setRenderState(3)
            console.log('no se ha logeado nadie');
        }
    }
 
   
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

    return <div>loading</div>

}

export default LoginView
