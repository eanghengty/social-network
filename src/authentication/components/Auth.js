import React from 'react'
import './Auth.css'
const Auth=()=>{

    const switchModeHandler=()=>{
        
    }

    return(
        <div className="row">
            
            <form className="container-form__main container  mt-4 col-md-6" onSubmit={(event)=>event.preventDefault()}>
                <div className="container-h2">
                    <h2 className="h2-sign-in">Sign in</h2>
                </div>
                <div className="line container"></div>
                <div className="form-group">
                <label for="username" className="label-username">Username</label>
                <input type="text" className="form-color form-control form-control-lg mt-2" ></input>
                </div>
                <div className="input-group mt-2">
                    <input type="file" className="form-control form-control-lg" id="profile"></input>
                    <label className="input-group-text" for="profile">Profile</label>
                </div>
                <div className="form-group mt-2">
                <label for="username" className="label-username">Email</label>
                <input type="email" className="form-color form-control form-control-lg mt-2" ></input>
                </div>
                <div className="form-group mt-2">
                <label for="username" className="label-username">Password</label>
                <input type="password" className="form-color form-control form-control-lg mt-2" ></input>
                <small className="form-text text-muted">your account exposed</small>
                </div>
                <div className='container mt-4'>
                <button className="btn-sign-in btn btn-success btn-lg">Sign in</button>
                <button className="btn btn-sign-up btn-success btn-lg">Sign up</button>
                </div>
            </form>
           
        </div>
    )
}
export default Auth