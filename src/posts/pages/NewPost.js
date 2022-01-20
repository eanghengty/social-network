import React from 'react'
import '../components/NewPost.css'
import Input from '../components/Input'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../authentication/components/validators'
import { useCallback } from 'react'
import { useReducer } from 'react'

const NewPost=()=>{
    //check to make sure the input all valid => add post
    const formReducer=(state,action)=>{
        switch(action.type){
            case 'INPUT_CHANGE':
                let formIsValid = true
                for(const inputId in state.inputs){
                    if(inputId === action.inputId){
                        formIsValid = formIsValid && action.isValid
                    }else{
                        formIsValid=formIsValid && state.inputs[inputId].isValid
                    }
                }
                return {
                    ...state,
                    inputs:{
                        ...state.inputs,
                        [action.inputId]:{value: action.value,isValid:action.isValid},
                        
                    },
                    isValid:formIsValid
                }

        default:
            return state
            
                
            
        }
        }

    //initial state
    const [formState,dispatch] = useReducer(formReducer,{
            inputs:{
                title:{
                        value:'',
                        isValid:false
                },
                description:{
                    value:'',
                    isValid:false
                }
            },
            isValid:false

            
        })
    

    const inputHandler=useCallback((id,value,isValid)=>{
        dispatch({type:'INPUT_CHANGE' ,value:value , isValid:isValid , inputId:id})
    },[])
    

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
            <div className="form-group mt-3">
                <label className="d-inline-block" for="image">select image</label>
                <input type="file" className="form-control-file form-control d-inline-block " id="image"></input>
                
            </div>
            <div className="form-group-address container d-inline-block mt-3 ">
                <label className="d-block" for="address">Address</label>
                <input type="text" className="form-control-address d-block form-control-lg"></input>
            </div>
            <div className="form-group__add-post  mt-3 d-inline-block">
            <label className="label-hidden  d-block">s</label>
            <button className="btn-add-post btn btn-success d-block" type="submit" disabled={!formState.isValid}>Add Post</button>
            </div>
        </form>
    )
}
export default NewPost