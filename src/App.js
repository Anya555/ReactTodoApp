import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CreateTodo from "./pages/CreateTodo";
import ResetPassword from "./pages/ResetPassword";
import AddAvatar from "./pages/AddAvatar";
import firebase from "./firebase";
import Spinner from "react-bootstrap/Spinner";

const App = () => {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  });

  return firebaseInitialized !== false ? (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/CreateTodo">
            <CreateTodo />
          </Route>
          <Route exact path="/ResetPassword">
            <ResetPassword />
          </Route>
          <Route exact path="/AddAvatar">
            <AddAvatar />
          </Route>
        </Switch>
      </div>
    </Router>
  ) : (
    <Spinner />
  );
};

export default App;
