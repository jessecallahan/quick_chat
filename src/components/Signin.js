import React, { useState } from 'react';
import firebase from "firebase/app";
// import { Redirect } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useFirestore } from 'react-redux-firebase';

function Signin(props) {
  const firestore = useFirestore();

  function addFriendsListToFirestore(name, id) {
    const data = {
      names: []
    }
    console.log(props.known_path(id))
    firestore.collection(props.known_path(id)).doc("friendsList").set(data);

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
      addFriendsListToFirestore(firebase.auth().currentUser.displayName, firebase.auth().currentUser.uid)
      console.log("Successfully signed in!");
    }).catch(function (error) {
      console.log(error.message);
    });


  }

  function doSignOut() {
    firebase.auth().signOut().then(function () {
      console.log("Successfully signed out!");
      props.toggleUserOff()

    }).catch(function (error) {
      console.log(error.message);
    });
  }

  // if (signin === false) {
  return (
    <React.Fragment>
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

      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign out</button>
    </React.Fragment>
  );
  // } else {
  //   const user = firebase.auth().currentUser;
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: "/chatroom1",
  //         state: { main_id: user.uid }
  //       }}
  //     />
  //   );
  // }
}

// Signin.prototype {

// }
export default Signin

