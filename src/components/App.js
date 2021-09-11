import React from 'react';
import ChatControl from './ChatControl';
import Header from './Header'
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './../App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/chatroom1">
          <ChatControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;