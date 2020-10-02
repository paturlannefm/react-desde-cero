import React from "react"
import { NavLink } from 'react-router-dom';

const NavLinks = () => (
    <>
       <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end">
                <nav className="main-menu" id="main-menu"> 
                    <ul>
                        <li><NavLink exact activeClassName="activo" to="/"> Home </NavLink></li>
                        <li><NavLink activeClassName="activo"to="/cursos"> Cursos </NavLink></li>
                        <li><NavLink activeClassName="activo" to="/formulario"> Formulario </NavLink></li>
                        <li><NavLink activeClassName="activo" to="/usuarios"> Usuarios </NavLink></li>
                    </ul>
                </nav>
            </div>
        <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
    </>
)


export default NavLinks