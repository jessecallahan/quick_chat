import React, { useState } from 'react';
import firebase from "firebase/app";
import 'firebase/database';
import { Redirect } from "react-router-dom";
import { useFirestore } from 'react-redux-firebase';

function Signup(props) {
  const firestore = useFirestore();
  const [signup, setSignup] = useState(false);

  function setFriendsList(id) {
    const data = {
      names: []
    }
    firestore.collection(id + "_grapeRoom").doc("friendsList").set(data);
  }

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const displayName = event.target.displayName.value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function (result) {
      setFriendsList(result.user.uid);
      setSignup(true);
      return result.user.updateProfile({
        displayName: displayName
      })
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  if (signup === false) {
    return (
      <React.Fragment>
        <div className="center">
          <h1>Sign up</h1>
          <form onSubmit={doSignUp}>
            <input
              type='displayName'
              name='displayName'
              placeholder='displayName' />
            <input
              type='text'
              name='email'
              placeholder='email' />
            <input
              type='password'
              name='password'
              placeholder='Password' />
            <button type='submit'>Sign up</button>
          </form>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: "/signin",
        }}
      />
    );
  }

}


export default Signup;

