import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react'
import { authContext } from './context/authContext'
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome'
import {faNewspaper,faLock} from '@fortawesome/free-solid-svg-icons'
import { faLockOpen } from '@fortawesome/free-solid-svg-icons'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

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
                                <NavLink to="/:userId/allpost" exact className="drop-shadow__a nav-link  text-white"><FontAwesomeIcon icon={faUserSecret} className="fa-custom fa-2x"></FontAwesomeIcon>  Your post</NavLink>
                            </li>)}
                            <li className="nav-item">
                                <NavLink to="/allpost" className="drop-shadow__a nav-link text-white"><FontAwesomeIcon icon={faNewspaper} className="fa-custom fa-2x"></FontAwesomeIcon>  All post</NavLink>
                            </li>
                            
                            {auth.isLogin && (<li className="nav-item">
                                <NavLink to="/addpost" className="drop-shadow__a nav-link text-white"><FontAwesomeIcon icon={faStickyNote} className='fa-custom fa-2x'></FontAwesomeIcon>  Add Post</NavLink>
                            </li>)}
                            {!auth.isLogin &&(<li className="nav-item">
                                <NavLink to="/auth" className="drop-shadow__a nav-link text-white"><FontAwesomeIcon icon={faLock} className="fa-custom fa-2x"></FontAwesomeIcon>  Get In</NavLink>
                            </li>)}
                            {auth.isLogin &&(<li className="nav-item">
                                <NavLink to="/allpost" className="drop-shadow__a nav-link text-white" onClick={auth.logout}><FontAwesomeIcon icon={faLockOpen} className="fa-custom fa-2x"></FontAwesomeIcon>  Get out</NavLink>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navbar