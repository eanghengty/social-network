import React from 'react'
import UserList from "../components/UserList"
const Users=()=>{
    //comment
    const USERS=[{id:'1',name:'phea',image:'https://images.pexels.com/photos/10469465/pexels-photo-10469465.jpeg?cs=srgb&dl=pexels-svetlana%F0%9F%8E%9E-10469465.jpg&fm=jpg', posts:3}]
    return(
        <UserList items={USERS}></UserList>
    )
    
}
export default Users

