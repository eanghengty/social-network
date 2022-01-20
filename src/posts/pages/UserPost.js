import React from 'react'
import PostList from '../components/PostList.js'
import {useParams} from 'react-router-dom'
 const post=[
    {id:'1', title:'wat phnom' , image:'https://lh5.googleusercontent.com/p/AF1QipOPZ9mZ5NrhL55URJ7cdPixNEIEQpp5WF5jjE9v=w408-h306-k-no',description:'chilling, at wat phnom', address:'ផ្លូវវត្តភ្នំ, Phnom Penh' , creatorId:'1' , location:{lat:11.5760393,lng:104.9230512}},
    {id:'1', title:'psar makro' , image:'https://www.cambodianewswatch.org/wp-content/uploads/2021/06/makrophnompenhcovid.jpg',description:'der lg at psar makro', address:'No.5734, Street 1003 Bayab Village, Phnom Penh, Cambodia' , creatorId:'2' , location:{lat:11.5933038,lng:104.8812624}}
 ]
 //
const UserPost=()=>{
    const userId = useParams().userId
    //logic match content with user
    const loadPost= post.filter(post=>post.creatorId === userId)
    return(
        <PostList items={loadPost}></PostList>
    )
}
export default UserPost