import React from 'react'
import { NavLink } from 'react-router-dom';

const Logo = () => (
    <div className="s-cols-4 lg-cols-1 s-cross-center">
       
        <NavLink exact activeClassName="activo" to="/">
            <img className="main-logo" src="https://i.pinimg.com/736x/c8/21/8d/c8218d202a86a04564682f3505498615.jpg" alt="Logo"></img> 
        </NavLink>
            
    </div>
)


export default Logo