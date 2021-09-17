import React from 'react';
import ChatControl from './ChatControl';
import Header from './Header'
import Signin from "./Signin";
import Signup from "./Signup"
import Landing from "./Landing"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './../App.css';
import 'firebase/database';
import firebase from "firebase/app";
import "firebase/auth";

import { withFirestore } from 'react-redux-firebase';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainUser: null
    };
  }

  handleSignIn = (input) => {
    this.setState({
      mainUser: input
    })
  }
  // handleAnnonToggle = (input) => {
  //   this.setState({
  //     currentUser: input
  //   })
  // }
  // handleToggleOff = () => {
  //   this.setState({
  //     currentUser: null
  //   })
  // }
  createPath = () => {
    var newPath = this.state.mainUser + "_grapeRoom"
    return newPath
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
    })
  }
  render() {

    return (
      <Router>
        <Header known_path={this.createPath} mainUser={this.state.mainUser} />
        <Switch>
          <Route path="/signin">
            <Signin toggleUserOff={this.handleToggleOff} mainUserSetter={this.handleSignIn} known_path={this.createPath} mainUser={this.state.mainUser} />
          </Route>
          <Route path="/signup" >
            <Signup known_path={this.createPath} mainUser={this.state.mainUser} />
          </Route>
          <Router path={this.createPath}>
            <ChatControl currentUser={this.state.user} mainUser={this.state.mainUser} />
          </Router>
        </Switch>
      </Router>
    );
  }
}

export default withFirestore(App);