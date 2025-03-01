
import './header.css'
import {NavLink} from "react-router-dom"

export default function Header() {
  return (

    <div class="header-container">
        <nav class="header-content">
          
              <NavLink to="" end>Bio</NavLink>
                <NavLink to="education" end>Education</NavLink>
                <NavLink to="projects" end>Projects</NavLink>
         
        </nav>
    </div>
  )} 