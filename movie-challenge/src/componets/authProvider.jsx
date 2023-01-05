import React, { Children, useState } from "react";
import '../componets/styles.css'
import { auth, singUserGoogle, singUser, createUser, userAuthState, userExistValidation } from '../firebase/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const AuthProvider = ({children, loggedIn, notRegistered, notLoggedIn}) => {
    const navigate = useNavigate();

    useEffect(() => {
        userAuthState((user) => { /// atrapa user y asiign numros
            if (user) {
                // console.log(user.displayName, 'userName')
                userExistValidation(user.uid).then(res => {
                    if (res.exists()) {
                        loggedIn(user)
                    } else {
                        notRegistered(user)
                    }
                })// validacion luego de ejec

            } else {
                notLoggedIn(user)
            }
        }); //get info de user logeado actualmente
    }, [navigate, loggedIn, notRegistered, notLoggedIn])

    return (
        <div>{children}</div>
    )
}

export default AuthProvider