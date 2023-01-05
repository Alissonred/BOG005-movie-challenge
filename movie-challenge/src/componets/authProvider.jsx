import React, { useState } from "react";
import '../componets/styles.css'
import { auth, singUserGoogle, singUser, createUser, userAuthState, userExistValidation } from '../firebase/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"

const AuthProvider = ()=>{

    return(
        <div></div>
    )
}

export default AuthProvider