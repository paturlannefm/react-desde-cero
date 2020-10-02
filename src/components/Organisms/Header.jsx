import React from "react";
import Logo from "../Molecules/Logo"
import NavLinks from "../Molecules/NavLinks"

const Header = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
           <Logo/>
           <NavLinks/>
        </div>
    </header>
)

export default Header