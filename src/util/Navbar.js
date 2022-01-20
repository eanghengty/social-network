import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react'
import { authContext } from './context/authContext'
const Navbar=()=>{
    const auth = useContext(authContext)
    return(
        <header>
            <div className="background-nav navbar navbar-expand-md navbar-light ">
                <div className="container-fluid">
                    <NavLink to="/" className="brand-font__weight navbar-brand text-white "><span className="der">ដើរ</span><span className="nham">ញ៉ាំ</span></NavLink>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#child">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="child">
                        <ul className="margin-ul navbar-nav">
                            {auth.isLogin && (<li className="nav-item">
                                <NavLink to="/:userId/allpost" exact className="drop-shadow__a nav-link  text-white">Your post</NavLink>
                            </li>)}
                            <li className="nav-item">
                                <NavLink to="/allpost" className="drop-shadow__a nav-link text-white">All post</NavLink>
                            </li>
                            
                            {auth.isLogin && (<li className="nav-item">
                                <NavLink to="/addpost" className="drop-shadow__a nav-link text-white">Add Post</NavLink>
                            </li>)}
                            {!auth.isLogin &&(<li className="nav-item">
                                <NavLink to="/auth" className="drop-shadow__a nav-link text-white">Get In</NavLink>
                            </li>)}
                            {auth.isLogin &&(<li className="nav-item">
                                <NavLink to="/allpost" className="drop-shadow__a nav-link text-white" onClick={auth.logout}>Get out</NavLink>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navbar