import React, { useState } from "react";
import './styles.css'
import { useNavigate } from "react-router-dom"
import AuthProvider from "../componets/authProvider";
import { exisUsername, updateUser } from "../firebase/firebase";
import { Link } from 'react-router-dom'


const ChooseUserName = () => {
    const navigate = useNavigate();
    const [renderState, setState] = useState(0)
    const [currentUser, setCurrentUser] = useState({})/// guarda el obj usuario que inicia sesion
    const [inputName, setInputName] = useState('')/// guarda el obj usuario que inicia sesion

    const handleInputName = (e)=> setInputName(e.target.value)
    const handleInputNameContinue = ()=>{
        if(inputName != ''){
          exisUsername(inputName).then(res=> {
            //console.log(res, 'rta a consulta si ya hay un nombre similar registrado');
              if(!res){///
                  setState(5)
              }else{/// construye un objeto similar actualizando el  nombre 
                console.log('entra al else de chooseName');
                  const copyUser ={...currentUser} /// VERIFICAR SI ES CURRENT getuserInfo
                  copyUser.username = inputName ///////VEIFICAR SI ES USERNAME O DISPALY
                  copyUser.processCompleted =true;
                  console.log(copyUser,'copyUser',currentUser,'currentUser' );
                  updateUser(copyUser).then(res=> res  )
                  setState(6)/// no está seteando
                  console.log(renderState, 'renderState');
              }
          }).catch(error =>console.log(error, 'es el error regist'))
            /// verifique si el nombre ya existia
        }
    }
//////////FUNCIONES PARA AUTH///////////////////////
    const handleLoggedIn = (user) => navigate('/dashboard') 
    const handleNotRegistered = (user) => {//login pero sin registro
        setCurrentUser(user)
        setState(3)
    }
    const handleNotLoggedIn = () => navigate('/login')
//////////////////////////////////////////////////////

    if (renderState === 3 || renderState === 5) {
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

    if(setState===6){
        return(
            <div>
                <h1>felicitaciones, te has registrado exitosamente</h1>
                <Link to='/dashboard'>ir a dashboard</Link> 
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