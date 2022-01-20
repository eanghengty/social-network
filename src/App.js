import React from 'react'
import './App.css';
import {BrowserRouter as Router , Route , Redirect ,Switch}  from 'react-router-dom'
import Users from './users/pages/Users'
import NewPost from './posts/pages/NewPost';
import Navbar from './util/Navbar';
import UserPost from './posts/pages/UserPost';
import Auth from './authentication/components/Auth';
import UpdatePost from './posts/pages/UpdatePost';
import { authContext } from './util/context/authContext';
import { useState } from 'react';
import { useCallback } from 'react';

function App() {
  const [isLogin, setIsLogin]=useState(false)
  
  const login = useCallback(()=>{setIsLogin(true)},[])
  const logout = useCallback(()=>{setIsLogin(false)},[])
  //auto redirect to homepage after login
  let routes
  if(isLogin){
    routes = (
      <React.Fragment>
      <Route path="/allpost" exact>
      <Users></Users>
      </Route>
      <Route path="/:userId/allpost" exact>
      <UserPost></UserPost>
      </Route>
      <Route path="/places/:postId">
        <UpdatePost></UpdatePost>
      </Route>
      <Route path="/addpost" exact>
          <NewPost></NewPost>
      </Route>
      <Redirect to="/allpost"></Redirect>
      </React.Fragment>
    )
  }else{
    routes=(
      <React.Fragment>
      <Route path="/allpost" exact>
      <Users></Users>
      </Route>
      <Route path="/:userId/allpost" exact>
      <UserPost></UserPost>
      </Route>
      <Route path="/auth" exact>
        <Auth></Auth>
      </Route>
      <Redirect to="/allpost"></Redirect>
      </React.Fragment>
    )
  }

  return (
    <authContext.Provider value={{isLogin:isLogin,  login:login , logout:logout}}>
    <Router>
      {/* render only one time when the page start  */}
      <Navbar></Navbar>
      <Switch>
      {/* <Route path="/allpost" exact>
      <Users></Users>
      </Route>
      <Route path="/:userId/allpost" exact>
      <UserPost></UserPost>
        
      </Route>
      <Route path="/addpost" exact>
          <NewPost></NewPost>
      </Route>
      <Route path="/auth" exact>
        <Auth></Auth>
      </Route>
      <Route path="/places/:postId">
        <UpdatePost></UpdatePost>
      </Route>
      <Redirect to="/allpost">

      </Redirect> */}
      {routes}
      </Switch>
    </Router>
    
    </authContext.Provider>
      
  )
}

export default App;
