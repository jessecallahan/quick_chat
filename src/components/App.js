import React from 'react';
import ChatControl from './ChatControl';
import Header from './Header'
import Signin from "./Signin";
import Signup from "./Signup"
import Landing from "./Landing"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './../App.css';
import 'firebase/database';
import "firebase/auth";

import { withFirestore } from 'react-redux-firebase';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainUser: null,
      currentUser: null
    };
  }

  handleSignIn = (input) => {
    this.setState({
      mainUser: input
    })
  }

  handleCurrentUser = (input) => {
    this.setState({
      currentUser: input
    })
  }

  createPath = () => {
    var newPath = this.state.mainUser + "_grapeRoom"
    return newPath
  }

  render() {

    return (
      <Router>
        <Header known_path={this.createPath} mainUser={this.state.mainUser} />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/signin">
            <Signin mainUserSetter={this.handleSignIn} known_path={this.createPath} mainUser={this.state.mainUser} setCurrentUser={this.handleCurrentUser} />
          </Route>
          <Route path="/signup" >
            <Signup />
          </Route>
          <Router path={this.createPath}>
            <ChatControl mainUser={this.state.mainUser} currentUser={this.state.currentUser} setCurrentUser={this.handleCurrentUser} />
          </Router>
        </Switch>
      </Router>
    );
  }
}

export default withFirestore(App);