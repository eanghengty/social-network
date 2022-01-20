import React from 'react'
import '../components/NewPost.css'
import Input from '../components/Input'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../authentication/components/validators'

import { useForm } from '../../util/hooks/formHook'
const NewPost=()=>{
    //check to make sure the input all valid => add post


    //initial state
  
    const [formState, inputHandler]=useForm({
        title:{
            value:'',
            isValid:false
        },
        description:{
            value:'',
            isValid:false
        },
        address:{
            value:'',
            isValid:false
        }

    } , false)

    return(
        <form className="container-main container mt-4 " onSubmit={(event)=>event.preventDefault()}>
            {/* <div className="form-group">
                <label for="title">Title</label>
                <input type="text" className="form-control-title form-control form-control-lg"></input>
            </div> */}
            <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="please enter a valid title." onInput={inputHandler}></Input>
            {/* <div className="form-group mt-3">
                 <label for="description">Description</label>
                <textArea id="description" className="form-control form-control-description " rows="4"></textArea> 
            </div> */}
            <Input id="description" element="textArea" type="text" label="Description" validators={[VALIDATOR_MINLENGTH(4)]} errorText="please input valid description." onInput={inputHandler}></Input>
            <div className="form-group mt-3 d-block mb-5">
                <label className="d-inline-block mb-2" for="image">select image</label>
                <input type="file" className="form-control-file form-control d-inline-block " id="image"></input>
                
            </div>
            <Input id="address" element="input" type="text" label="Address" validators={[VALIDATOR_REQUIRE()]} errorText="please enter a valid Address." onInput={inputHandler}></Input>
            <div className="form-group__add-post  mt-1 d-inline-block">
            
            <button className="btn-add-post btn btn-success d-block" type="submit" disabled={!formState.isValid}>Add Post</button>
            </div>
        </form>
    )
}
export default NewPost