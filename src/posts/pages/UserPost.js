import React from 'react'
import PostList from '../components/PostList.js'
import {useParams} from 'react-router-dom'
 const post=[
    {id:'1', title:'wat phnom' , image:'https://lh5.googleusercontent.com/p/AF1QipOPZ9mZ5NrhL55URJ7cdPixNEIEQpp5WF5jjE9v=w408-h306-k-no',description:'chilling, at wat phnom', address:'ផ្លូវវត្តភ្នំ, Phnom Penh' , creatorId:'1' , coordinate:{lat:'11.5760393',lng:'104.9230512'}},
    {id:'2', title:'wat phnom' , image:'https://lh5.googleusercontent.com/p/AF1QipOPZ9mZ5NrhL55URJ7cdPixNEIEQpp5WF5jjE9v=w408-h306-k-no',description:'chilling, at wat phnom', address:'ផ្លូវវត្តភ្នំ, Phnom Penh' , creatorId:'2' , coordinate:{lat:'11.5760393',lng:'104.9230512'}}
 ]
 //
const UserPost=()=>{
    const userId = useParams().userId
    const loadPost= post.filter(post=>post.creatorId === userId)
    return(
        <PostList items={loadPost}></PostList>
    )
}
export default UserPost