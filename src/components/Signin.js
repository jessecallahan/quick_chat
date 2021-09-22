import React, { useState } from 'react';
import firebase from "firebase/app";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import Logout from './Logout';


function Signin(props) {
  const firestore = useFirestore();
  const [signin, setSignin] = useState(false);

  function addFriendsListToFirestore(name, id) {

    var friendsListRef = firestore.collection(props.known_path(id)).doc("friendsList");
    friendsListRef.update({
      names: firebase.firestore.FieldValue.arrayUnion(name)
    });

    console.log("friend setter triggered")

  }
  function doSignIn(event) {
    event.preventDefault();

    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
      props.mainUserSetter(firebase.auth().currentUser.uid)
      props.setCurrentUser(firebase.auth().currentUser.uid)
      addFriendsListToFirestore(firebase.auth().currentUser.displayName, firebase.auth().currentUser.uid)
      setSignin(true)
      console.log("Successfully signed in!");
    }).catch(function (error) {
      console.log(error.message);
    });


  }

  if (signin === false) {
    return (
      <React.Fragment>
        <div className="center">
          <h1>Sign In</h1>
          <form onSubmit={doSignIn}>
            <input
              type='text'
              name='signinEmail'
              placeholder='email' />
            <input
              type='password'
              name='signinPassword'
              placeholder='Password' />
            <button type='submit'>Sign in</button>
          </form>
          <Logout setCurrentUser={props.setCurrentUser} pathname={props.known_path} />
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: props.known_path(),
        }}
      />
    );
  }
}

Signin.propTypes = {
  mainUserSetter: PropTypes.func,
  known_path: PropTypes.func,
  mainUser: PropTypes.string,
  setCurrentUser: PropTypes.func
};

export default Signin

