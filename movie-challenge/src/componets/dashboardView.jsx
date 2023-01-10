
import './styles.css'
import React, { Children, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthProvider from "../componets/authProvider";
import DashBoardWrapper from './dashboardWrapper';

const DashBoardView = ({ title, titleHandle, getHandle }) => {
const navigate = useNavigate();
const [currentUser, setCurrentUser] = useState({})
const [renderState, setState] = useState(0)
    //////////FUNCIONES PARA AUTH///////////////////////
const handleLoggedIn = (user) => {
    setCurrentUser(user)
    setState(2)
}
const handleNotRegistered = (user) => navigate('/login')
const handleNotLoggedIn = () => navigate('/login')
//////////////////////////////////////////////////////

  if(renderState=== 0){  return (
        <AuthProvider loggedIn={handleLoggedIn} notRegistered={handleNotRegistered} notLoggedIn={handleNotLoggedIn}>
            <div>loading ...</div>

        </AuthProvider>
    )}
    return(
      <DashBoardWrapper>
          <div>
            in dashboard renderState== 2
        </div>
      </DashBoardWrapper>
    )
}
export default DashBoardView