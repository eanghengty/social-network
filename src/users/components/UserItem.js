import React from 'react'
import './UserItem.css'
import '../../shared/Profile.css'
const UserItem=(props)=>{
    return(
        <li className='user-item'>
            <div className="user-item__content">
                <div className="user-item__image">
                    <img className="profile" src={props.image} alt={props.name}></img>
                </div>
            </div>
            <div>
                <h2>{props.name}</h2>
                <h4>{props.postCount} {props.postCount > 1 ? 'posts' : 'post'}</h4>
            </div>

        </li>
    )
}

export default UserItem