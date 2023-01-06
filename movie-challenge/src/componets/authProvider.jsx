import React, { Children, useState } from "react";
import '../componets/styles.css'
import { auth, singUserGoogle, singUser, createUser, userAuthState, userExistValidation, registerUser, getUserInfo } from '../firebase/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const AuthProvider = ({children, loggedIn, notRegistered, notLoggedIn}) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        userAuthState((user) => { /// atrapa user y asiign numros
            console.log(user, 'es el user que entra a auth');
            if (user) {/// si alguien se ha logeado
                userExistValidation(user.uid).then(res => {
                    if (res.exists()) { //// evalua si existe el user en mi bd*********
                        console.log('se ejecuta el if');
                        getUserInfo(user.uid).then(res => { ///obtenga info de quien se logeo
                            console.log(res,'getuserInfo');
                            if(res.processCompleted){ /// si ya registró su nombre
                                
                                loggedIn(res) // llevelo al dashboard
                            }else{
                                notRegistered(res) //llevelo a que seleccione un nombre chooseName
                            }
                        })} else {
                            console.log('se ejecuta el else');
                        registerUser({/// si no existe en mi bd arme el objeto y registrelo
                            uid : user.uid,
                            displayName: user.displayName,
                            profilePicture: '',
                            processCompleted: false, /// condicion para que actuallice el nombre
                            
                        }).then(res => console.log(res, 'en registerUser'))
                        notRegistered(user)//llevelo a que seleccione un nombre chooseName
                    }
                })
            } else {
                notLoggedIn(user)/// llevelo a que inicie sesion para que haya un usuario
            }
        }); //get info de user logeado actualmente
    }, [navigate, loggedIn, notRegistered, notLoggedIn])

    return (
        <div>{children}</div>
    )
}

export default AuthProvider