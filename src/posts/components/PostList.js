import React from 'react'
import './PostList.css'
import PostItem from './PostItem'
import { Link } from 'react-router-dom'
const PostList=(props)=>{
    if(props.items.length===0){
        return(
           
                <div className="container-div container mt-3 text-center p-2">
                    <h2>no post found. maybe create one?</h2>
                    <Link className="btn-color btn-success btn " to="/addpost"> add post</Link>
                </div>
            
        )
    }

    return(
        <ul className="ul-content container  p-3 mt-3 list-group">
            {
                props.items.map((post)=>{
                   return(
                    
                            <PostItem key={post.id} id={post.id} title={post.title} image={post.image} description={post.description} address={post.address} creatorId={post.creator} coordinate={post.location}></PostItem>
                            
                    
                    
                   ) 
                })
            }
        </ul>
    )
}

export default PostList