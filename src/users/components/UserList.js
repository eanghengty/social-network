import React from 'react'
import './UserList.css'
import UserItem from './UserItem'
const UserList=(props)=>{

        if(props.items.length === 0){
            return (
                <div className="center">
                    <h2>no user found</h2>
                </div>
            )
        }

        return(
            //throw data li (UserItem)
            <ul>{props.items.map((user)=>{
                return <UserItem key={user.id} id={user.id} image={user.image} name={user.name} postCount={user.posts}></UserItem>
            })}</ul>
        )
    
}

export default UserList