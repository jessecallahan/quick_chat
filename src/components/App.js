import React from 'react';
import ChatControl from './ChatControl';
import Header from './Header'
import Signin from "./Signin";
import Signup from "./Signup"
import Landing from "./Landing"
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './../App.css';
import 'firebase/database';
import "firebase/auth";
import { withFirestore } from 'react-redux-firebase';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainUser: null,
      currentUser: null,
      homePage: null
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

  createGrapePath = () => {
    var newPath = "/quick_chat/chatrooms/" + this.state.mainUser + "_grapeRoom"
    return newPath
  }

  createOrangePath = () => {
    var newPath = "/quick_chat/chatrooms/" + this.state.mainUser + "_orangeRoom"
    return newPath
  }

  createLimePath = () => {
    var newPath = "/quick_chat/chatrooms/" + this.state.mainUser + "_limeRoom"
    return newPath
  }

  handleSetHome = (input) => {
    this.setState({
      homePage: input
    })
  }

  handleFriendsList = (input) => {
    this.setState({
      friendsList: input
    })
  }

  render() {
    console.log(this.state.mainUser)
    return (
      <Router >
        <Header
          home={this.state.homePage}
          setHome={this.handleSetHome}
          known_pathGrape={this.createGrapePath}
          known_pathOrange={this.createOrangePath}
          known_pathLime={this.createLimePath}
          mainUser={this.state.mainUser}
          currentUser={this.state.currentUser}
        />
        <Switch>
          <Route exact path='/'>
            <Landing setHome={this.handleSetHome} />
          </Route>
          <Route path="/signin">
            <Signin mainUserSetter={this.handleSignIn}
              known_pathGrape={this.createGrapePath}
              known_pathOrange={this.createOrangePath}
              known_pathLime={this.createLimePath}
              mainUser={this.state.mainUser}
              setCurrentUser={this.handleCurrentUser} />
          </Route>
          <Route path="/signup" >
            <Signup />
          </Route>
          <Route path={this.createGrapePath} >
            <ChatControl mainUser={this.state.mainUser}
              currentUser={this.state.currentUser}
              setCurrentUser={this.handleCurrentUser} />
          </Route>
          <Route path={this.createOrangePath}>
            <ChatControl mainUser={this.state.mainUser}
              currentUser={this.state.currentUser}
              setCurrentUser={this.handleCurrentUser} />
          </Route>
          <Route path={this.createLimePath}>
            <ChatControl mainUser={this.state.mainUser}
              currentUser={this.state.currentUser}
              setCurrentUser={this.handleCurrentUser} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default withFirestore(App);