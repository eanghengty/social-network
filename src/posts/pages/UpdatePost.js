import React from 'react'
//to get userid
import { useParams } from 'react-router-dom'
import '../../posts/components/NewPost.css'
import { Link } from 'react-router-dom'
import { VALIDATOR_REQUIRE } from '../../authentication/components/validators'
import { VALIDATOR_MINLENGTH } from '../../authentication/components/validators'
import Input from '../components/Input'
const post=[
    {id:'1', title:'wat phnom' , image:'https://lh5.googleusercontent.com/p/AF1QipOPZ9mZ5NrhL55URJ7cdPixNEIEQpp5WF5jjE9v=w408-h306-k-no',description:'chilling, at wat phnom', address:'ផ្លូវវត្តភ្នំ, Phnom Penh' , creatorId:'1' , location:{lat:11.5760393,lng:104.9230512}},
    
 ]
const UpdatePost=()=>{
    const PostId = useParams().postId
    const identifiedPost =  post.find((p)=>p.id === PostId)
   

    if(!identifiedPost){
        return 'could not find Post.'
    }
    return(
        <form className="container-main container mt-4 " onSubmit={(event)=>event.preventDefault()}>
             <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="please enter a valid title." onInput={()=>{}} value={identifiedPost.title} valid={true}></Input>
             <Input id="description" element="textArea" type="text" label="Description"  validators={[VALIDATOR_MINLENGTH(4)]} errorText="please enter a valid description." onInput={()=>{}} valid={true} value={identifiedPost.description}></Input>
             <Link to={`/${1}/allpost`} className="btn-back-post btn btn-warning d-inline-block mt-3 text-light">back</Link>
             <button className="btn-add-post btn btn-success d-inline-block mt-3 " type="submit" disabled={true}>Update post</button>
            </form>
    )
}
export default UpdatePost