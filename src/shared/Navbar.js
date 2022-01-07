import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar=()=>{
    return(
        <header>
            <div className="background-nav navbar navbar-expand-md navbar-light ">
                <div className="container-fluid">
                    <NavLink to="/" className="brand-font__weight navbar-brand text-white ">WalkAndEat</NavLink>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#child">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="child">
                        <ul className="margin-ul navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/allpost" className="drop-shadow__a nav-link  text-white">All Post</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/yourpost" className="drop-shadow__a nav-link text-white">Your Post</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink to="/addpost" className="drop-shadow__a nav-link text-white">Add Post</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/getin" className="drop-shadow__a nav-link text-white">Get In</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navbar