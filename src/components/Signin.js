import React, { useState } from 'react';
import firebase from "firebase/app";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import Logout from './Logout';
import ErrorPage from './ErrorPage';

function Signin(props) {
  const firestore = useFirestore();
  const [signin, setSignin] = useState(false);
  const [hasError, setError] = useState(false);
  let error = "";

  function addFriendsListToFirestore(name) {
    let friendsListRefGrape = firestore.collection(props.known_pathGrape()).doc("friendsList");
    let friendsListRefOrange = firestore.collection(props.known_pathOrange()).doc("friendsList");
    let friendsListRefLime = firestore.collection(props.known_pathLime()).doc("friendsList");

    friendsListRefGrape.update({
      chatRoomName: name,
      names: firebase.firestore.FieldValue.arrayUnion(name)
    });
    friendsListRefOrange.update({
      chatRoomName: name,
      names: firebase.firestore.FieldValue.arrayUnion(name)
    });
    friendsListRefLime.update({
      chatRoomName: name,
      names: firebase.firestore.FieldValue.arrayUnion(name)
    });
  }

  function doSignIn(event) {
    event.preventDefault();

    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
      props.mainUserSetter(firebase.auth().currentUser.uid)
      props.setCurrentUser(firebase.auth().currentUser.uid)
      addFriendsListToFirestore(firebase.auth().currentUser.displayName)
      setSignin(true)
    }).catch(function (error) {
      setError(error.message);
    });

  }

  if (hasError) {
    error = <ErrorPage error={hasError}></ErrorPage>
  }
  if (signin === false) {
    return (
      <React.Fragment>
        <div className="center">
          <h1>Sign In</h1>
          <form onSubmit={doSignIn}>
            <input
              type="email"
              name='signinEmail'
              placeholder='email' />
            <input
              type='password'
              name='signinPassword'
              placeholder='Password' />
            <button type='submit'>Sign in</button>
          </form>
          {error}
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: props.known_pathGrape(),
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

