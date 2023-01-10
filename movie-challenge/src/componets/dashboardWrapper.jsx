import './styles.css'
import React, { Children, useState } from "react";
import { useNavigate, Link } from "react-router-dom"

const DashBoardWrapper = ({children }) => {
return(
    <div>
        <nav>
        <div>Logo</div>
        <Link to='/dashboard'>PPAL</Link>
        <Link to='/dashboard/profile'>Profile</Link>
        <Link to='/dashboard/signout'>Sign Out</Link>
        </nav>
        <div>
        {children}
        </div>
        
    </div>
)
}
export default DashBoardWrapper