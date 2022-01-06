import React from 'react'
import './UserItem.css'
import '../../shared/Profile.css'
import {Link} from 'react-router-dom'
const UserItem=(props)=>{
    return(
        <li className='user-item'>
            <div className="user-item__content">
                <Link to={`${props.id}/post`}>
                <div className="user-item__image">
                    <img className="profile" src={props.image} alt={props.name}></img>
                </div>
            
            <div className="user-item__info">
                <h2>{props.name}</h2>
                <h3>{props.postCount} {props.postCount > 1 ? 'posts' : 'post'}</h3>
            </div>
            </Link>
            </div>
        </li>
    )
}

export default UserItem