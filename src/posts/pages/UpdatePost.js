import React from 'react'
//to get userid
import { useParams } from 'react-router-dom'
import '../../posts/components/NewPost.css'
import { Link } from 'react-router-dom'
import { VALIDATOR_REQUIRE } from '../../authentication/components/validators'
import { VALIDATOR_MINLENGTH } from '../../authentication/components/validators'
import Input from '../components/Input'
import { useForm } from '../../util/hooks/formHook'
import { useEffect } from 'react'
import { useState } from 'react'
const post=[
    {id:'1', title:'wat phnom' , image:'https://lh5.googleusercontent.com/p/AF1QipOPZ9mZ5NrhL55URJ7cdPixNEIEQpp5WF5jjE9v=w408-h306-k-no',description:'chilling, at wat phnom', address:'ផ្លូវវត្តភ្នំ, Phnom Penh' , creatorId:'1' , location:{lat:11.5760393,lng:104.9230512}},
    {id:'2', title:'psar makro' , image:'https://www.cambodianewswatch.org/wp-content/uploads/2021/06/makrophnompenhcovid.jpg',description:'der lg at psar makro', address:'No.5734, Street 1003 Bayab Village, Phnom Penh, Cambodia' , creatorId:'2' , location:{lat:11.5933038,lng:104.8812624}}
    
 ]
const UpdatePost=()=>{
    const postId = useParams().postId
    const [isLoading,setIsLoading]=useState(true);
    
    const [formState, inputHandler,setFormData]=useForm({
        title:{
            value:'',
            isValid:false
        },
        description:{
            value:'',
            isValid:false
        }
    }, false)
    const identifiedPost =  post.find((p)=>p.id === postId)
    //wrap use effect to prevent the ininite loop when it happen to create new state with other component that use custom hook
    useEffect(()=>{
       if(identifiedPost){
        setFormData({
            title:{
                value:identifiedPost.title,
                isValid:true
            },
            description:{
                value:identifiedPost.description,
                isValid:true
            }

        }, true)
       }
        setIsLoading(false)
    },[setFormData , identifiedPost])

    if(!identifiedPost){
        return 'could not find Post.'
    }
    if(isLoading){
        return 'please wait, true love take time.'
    }
    const placeUpdateSubmitHandler = (event)=>{
            event.preventDefault()
            console.log(formState.inputs)
    }
    return(
       <form className="container-main-2 container mt-4 " onSubmit={placeUpdateSubmitHandler}>
             <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="please enter a valid title." onInput={inputHandler} value={formState.inputs.title.value} valid={formState.inputs.title.isValid}></Input>
             <Input id="description" element="textArea" type="text" label="Description"  validators={[VALIDATOR_MINLENGTH(4)]} errorText="please enter a valid description." onInput={inputHandler} value={formState.inputs.description.value} valid={formState.inputs.description.isValid} ></Input>
             <Link to={`/${postId}/allpost`} className="btn-back-post btn btn-warning d-inline-block mt-3 text-light">back</Link>
             <button className="btn-add-post btn btn-success d-inline-block mt-3 " type="submit" disabled={!formState.isValid}>Update post</button>
            </form>
    )
}
export default UpdatePost