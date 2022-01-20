import React  from "react";
import { useReducer,  } from "react";
import { useEffect } from "react";
import '../components/NewPost.css'
import { validate } from "../../authentication/components/validators";
const inputReducer = (state,action)=>{
    //prevent old state lost
    switch(action.type){
        case 'CHANGE':
            return{
                ...state,
                value: action.val,
                isValid:validate(action.val, action.validators)
            }
        case 'TOUCH':
            return{
                ...state,
                isTouched:true
            }
        default:
            return{
                state
            }
    }
    
}
const Input=(props)=>{
    const [inputState, dispatch]=useReducer(inputReducer,{value:props.value || "", isTouched:false , isValid:props.valid || false})
    const touchHandler=()=>[
        dispatch({type:"TOUCH"})
    ]
    const{id, onInput} = props
    const {value,isValid}=inputState

    useEffect(() => {
        onInput(id,value,isValid)
        
    }, [id,value,isValid,onInput])

    //do validation
    const changeHandler=(event)=>{
        //get the require back after state change
        dispatch({type:"CHANGE",val:event.target.value, validators:props.validators})
    }
    const element = props.element === 'input' ? 
    <input id={props.id} 
    type={props.type} 
    placeholder={props.placeholder} 
    onBlur={touchHandler} 
    onChange={changeHandler} 
    value={inputState.value} 
    className="form-control-title form-control form-control-lg" required></input> : 
    <textArea id={props.id} rows={props.rows || 3} Add Post
    value={inputState.value} 
    onBlur={touchHandler} 
    onChange={changeHandler} 
    placeholder={props.placeholder} 
    className="form-control-title form-control form-control-lg" required></textArea>
    
    
    return(
        <div className="form-group mb-2">
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <small className="text-danger">{props.errorText}</small>}
        </div>
    )
}
export default Input