import React from 'react'
import './App.css';
import {BrowserRouter as Router , Route , Redirect ,Switch}  from 'react-router-dom'
import Users from './users/pages/Users'
import NewPost from './posts/pages/NewPost';
function App() {
  return (
    
    <Router>
      <Switch>
      <Route path="/" exact>
          <Users></Users>
      </Route>
      <Route path="/newpost" exact>
          <NewPost></NewPost>
      </Route>
      <Redirect to="/">

      </Redirect>
      </Switch>
    </Router>
    

      
  )
}

export default App;
