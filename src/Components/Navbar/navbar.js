import React from 'react';
import "./navbar.css";
import { useLocation, Link} from "react-router-dom";


const Navbar = () => {
    const location = useLocation();
    return (
            <div>
                <nav class="navbar navbar-expand-sm projectsNav navBar">
                    <ul class=" navbar-nav myNav">
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                           Home 
                        </Link>
                         <Link to="/AboutMe" className={location.pathname === "/AboutMe" ? "nav-link active" : "nav-link"}>
                            AboutMe
                         </Link>
                         <Link to="/Projects" className={location.pathname === "/Projects" ? "nav-link active" : "nav-link"}>
                            Projects
                         </Link>
                         <Link to="/ContactInfo" className={location.pathname === "/ContactInfo" ? "nav-link active" : "nav-link"}>
                           Contacts
                         </Link>
                    </ul>
                </nav>
            </div>
    );
}

export default Navbar;