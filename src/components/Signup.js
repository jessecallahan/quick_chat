import React, { useState } from 'react';
import firebase from "firebase/app";
import 'firebase/database';


function Signup(props) {


  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const displayName = event.target.displayName.value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function (result) {
      return result.user.updateProfile({
        displayName: displayName
      })

    }).catch(function (error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
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

    </React.Fragment>
  );


}

export default Signup;

