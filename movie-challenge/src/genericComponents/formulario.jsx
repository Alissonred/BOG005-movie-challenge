import React from 'react'
import { useNavigate, Link } from "react-router-dom"

const Formulario = ({email, emailHandle, password, passwordHandle, task, taskFunction}) => {
  return (
    <div>
                <input
                    type='email'
                    value={email}
                    placeholder='ingresa tu email'
                    onChange={emailHandle}
                    required
                >
                </input>

                <input
                    type='password'
                    value={password}
                    placeholder='ingresa tu contraseña'
                    onChange={passwordHandle}
                    required
                >
                </input>
                
                <button onClick={taskFunction}> {task} </button>
                {task=== 'Ingresar'? <Link to='/register'>Registrarse</Link>: '' }
                no olvidar el .com por vfa
            </div>
  )
}

export default Formulario