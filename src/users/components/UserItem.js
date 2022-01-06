import React from 'react'
import './UserItem.css'
const UserItem=(props)=>{
    return(
        <li>
            <div>
                <div>
                    <img src={props.image} alt={props.name}></img>
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