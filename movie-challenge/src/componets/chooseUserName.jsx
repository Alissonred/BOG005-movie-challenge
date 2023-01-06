import React, { useState } from "react";
import './styles.css'
import { useNavigate } from "react-router-dom"
import AuthProvider from "../componets/authProvider";
import { exisUsername, updateUser } from "../firebase/firebase";


const ChooseUserName = () => {
    const navigate = useNavigate();
    const [renderState, setState] = useState(0)
    const [currentUser, setCurrentUser] = useState({})/// guarda el obj usuario que inicia sesion
    const [inputName, setInputName] = useState('')/// guarda el obj usuario que inicia sesion

    const handleInputName = (e)=> setInputName(e.target.value)
    const handleInputNameContinue = ()=>{
        if(inputName != ''){
           const exist = exisUsername(inputName).then(res=>console.log(res,'es inputName')).catch(error =>console.log(error, 'es el error regist'))
            if(!exist){///
                setState(5)
                console.log('entra al if');//// pendiente arreglar
            }else{
                const copyUser ={...currentUser}
                copyUser.username = inputName
                copyUser.processCompleted =true;
                updateUser(copyUser).then(res=>console.log(res, 'es salida de update')).catch(error =>console.log(error, 'es el error regist'))
                console.log(copyUser,'copyUser',currentUser,'currentUser' );
            }
            /// verifique si el nombre ya existia
        }
    }

    const handleLoggedIn = (user) => navigate('/dashboard') //pasa a 
    const handleNotRegistered = (user) => {
        setCurrentUser(user)
        setState(3)
    }//login pero sin registro
    const handleNotLoggedIn = () => navigate('/login')

    if (renderState === 3 || renderState === 4) {
        return (<div> Bienvenido {currentUser.displayName}
            <div>
                Para terminar el proceso registra tu nombre
                {renderState==5? <p>el nombre de user ya existe</p>:''}
                <input type='text' placeholder="Escribe tu nombre" onChange={handleInputName}></input>
                <button onClick={handleInputNameContinue}>guardar</button>
            </div>
        </div>

        )
    }

    return (
        <AuthProvider loggedIn={handleLoggedIn} notRegistered={handleNotRegistered} notLoggedIn={handleNotLoggedIn}>
            <div>loading ...</div>

        </AuthProvider>
    )
}

export default ChooseUserName