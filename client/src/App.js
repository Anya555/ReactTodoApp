import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


const App = () => {
  
  return (
    <Router>
    <div >
      <Switch>
    <Route exact path='/'>
      <SignIn/>
    </Route>
    <Route exact path='/SignUp'>
      <SignUp/>
    </Route>
    <Route exact path='/dashboard'>
      <Dashboard/>
    </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
