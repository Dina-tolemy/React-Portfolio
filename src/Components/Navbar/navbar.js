import React from 'react';
import "./navbar.css";

const Navbar = () => {
    return (

      <nav class="navbar navbar-expand-md projectsNav navBar">
      <ul class="ulFlex navbar-nav">
          <li class="nav-item">
              <a class="nav-link home" href="index.html">About Me</a>
          </li>
          <li class="nav-item">
              <a class="nav-link project" href="projects.html">Projects</a>
          </li>
          <li class="nav-item">
              <a class="nav-link contact" href="contactme.html">Contact</a>
          </li>
      </ul>
  </nav>
      );
}
 
export default Navbar;