import React from 'react';
import ChatControl from './ChatControl';
import Header from './Header'
import Signin from "./Signin";
import Signup from "./Signup"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './../App.css';
import 'firebase/database';

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
      mainUser: input,
      currentUser: input
    })
  }
  handleAnnonToggle = (input) => {
    this.setState({
      currentUser: input
    })
  }
  handleToggleOff = () => {
    this.setState({
      currentUser: null
    })
  }
  createPath = () => {
    var newPath = this.state.mainUser + "_grapeRoom"
    return newPath
  }
  friendsListPath = () => {
    var newPath = this.state.mainUser + "_grapeRoom_friends_list"
    return newPath
  }

  render() {

    return (
      <Router>
        <Header known_path={this.createPath} mainUser={this.state.mainUser} />
        <Switch>
          <Route path="/signin">
            <Signin toggleUserOff={this.handleToggleOff} mainUserSetter={this.handleSignIn} known_path={this.createPath} />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path={this.createPath}>
            <ChatControl annonSetter={this.handleAnnonToggle} currentUser={this.state.currentUser} mainUser={this.state.mainUser} />
          </Route>

        </Switch>
      </Router>
    );
  }
}

export default withFirestore(App);