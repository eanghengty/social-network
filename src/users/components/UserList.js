import React from 'react'
import './UserList.css'
import UserItem from './UserItem'
const UserList=(props)=>{

        if(props.items.length === 0){
            return (
                <div>
                    <h2>no user found</h2>
                </div>
            )
        }

        return(
            <ul>{props.items.map((user)=>{
                return <UserItem id={user.id} image={user.image} name={user.name} postCount={user.posts}></UserItem>
            })}</ul>
        )
    
}

export default UserList