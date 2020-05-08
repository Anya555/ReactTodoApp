import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
    <div >
      <Switch>
    <Route exact path='/'>
      <HomePage/>
    </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
