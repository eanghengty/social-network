import React from 'react'
import './Auth.css'
import Input from '../../posts/components/Input'
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from './validators'
import { VALIDATOR_MINLENGTH } from './validators'

import { useForm } from '../../util/hooks/formHook'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../../util/context/authContext'
import { useContext } from 'react'
const Auth=()=>{

    const auth = useContext(authContext)
    const [isLogin, setIsLogin] = useState(true)
    const [formState, inputHandler, setFormData] = useForm({
        email:{
            value:'',
            isValid:false
        },
        password:{
            value:'',
            isValid:false
        }
    },false)

    const switchModeHandler=()=>{
        if(!isLogin){
            delete formState.inputs.username
            setFormData({...formState.inputs},formState.inputs.email.isValid && formState.inputs.password.isValid)
        }else{
            setFormData({...formState.inputs, username:{ value:'' , isValid:false}},false)
        }
        setIsLogin(prev=>!prev)
    }
    const submitHandler=(event)=>{
        event.preventDefault()
        console.log(formState.inputs)
        auth.login()
    }

    return(
        <div className="row">
            
            <form className={`${!isLogin ? 'container-form__mainsignup' : 'container-form__main'} container  mt-4 col-md-6 `} onSubmit={submitHandler}>
               
                <div className="container-h2"> 
                    <h2 className="h2-sign-in">{isLogin ? "Sign In" : "Sign Up"}</h2>
                </div>
                <div className="line container"></div>
                {!isLogin && (<Input element="input" id="username" type="text" label="Username" validators={[VALIDATOR_REQUIRE()]} errorText="please input a username" onInput={inputHandler}></Input>)}
                {/* username */}
                {/* <div className="form-group">
                <label for="username" className="label-username">Username</label>
                <input type="text" className="form-color form-control form-control-lg mt-2" ></input>
                </div> */}
                {/* add image */}
                {!isLogin && <div className="input-group mt-2">
                    <input type="file" className="form-control form-control-lg" id="profile" required></input>
                    <label className="input-group-text" for="profile">Profile</label>
                </div>}
                {/* <div className="form-group mt-2">
                <label for="username" className="label-username">Email</label>
                <input type="email" className="form-color form-control form-control-lg mt-2" ></input>
                </div> */}
                <Input element="input" id="email" type="email" label="Email" validators={[VALIDATOR_EMAIL()]} errorText="please enter a valid email address." onInput={inputHandler}></Input>
                {/* <div className="form-group mt-2">
                <label for="username" className="label-username">Password</label>
                <input type="password" className="form-color form-control form-control-lg mt-2" ></input>
                <small className="form-text text-muted">your account exposed</small>
                </div> */}
                <Input element="input" id="password" type="password" label="Password" validators={[VALIDATOR_MINLENGTH(8)]} errorText="please enter a valid password. (minimuim 8)" onInput={inputHandler}></Input>
                <div className='container mt-4'>
                <Link to="#" className="btn-sign-in btn btn-success btn-lg" onClick={switchModeHandler}>{isLogin ? 'Sign Up' : 'Sign In'}</Link>
                <button className="btn btn-sign-up btn-warning btn-lg text-light" type="submit" disabled={!formState.inputs.password.isValid}>{isLogin ? 'Sign In' : 'Sign Up'}</button>
                </div>
            </form>
           
        </div>
    )
}
export default Auth