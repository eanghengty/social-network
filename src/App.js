import React from 'react'
import './App.css';
import {BrowserRouter as Router , Route , Redirect ,Switch}  from 'react-router-dom'
import Users from './users/pages/Users'
import NewPost from './posts/pages/NewPost';
import Navbar from './shared/Navbar';
import UserPost from './posts/pages/UserPost';

function App() {
  return (
    
    <Router>
      <Navbar></Navbar>
      <Switch>
      <Route path="/" exact>
          <Users></Users>
      </Route>
      <Route path="/:userId/allpost" exact>
        <UserPost></UserPost>
      </Route>
      <Route path="/addpost" exact>
          <NewPost></NewPost>
      </Route>
      <Redirect to="/">

      </Redirect>
      </Switch>
    </Router>
    

      
  )
}

export default App;
