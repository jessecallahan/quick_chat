import React, { useState } from 'react'
import firebase from "firebase/app";
import { useFirestore } from 'react-redux-firebase';
import ErrorPage from './ErrorPage';

export default function AnnonSignIn(props) {
  const firestore = useFirestore();
  const [hasError, setError] = useState(false);
  let error = "";

  function friendPart(name) {
    var friendsListRef = firestore.collection(props.pathname).doc("friendsList");
    friendsListRef.update({
      names: firebase.firestore.FieldValue.arrayUnion(name)
    });
  }

  function annonSignIn(event) {
    event.preventDefault();
    const displayName = event.target.displayName.value;

    firebase.auth().signInAnonymously()
      .then((result) => {
        props.setCurrentUser(result.user.uid)
        return result.user.updateProfile({
          displayName: displayName
        })
      })
      .catch((error) => {
        var errorMessage = error.message;
        setError(errorMessage);
      });

    friendPart(displayName);
  }

  if (hasError) {
    error = <ErrorPage error={hasError}></ErrorPage>
  }
  return (
    <React.Fragment>
      <h1>Type You're Name and Go!</h1>
      <form onSubmit={annonSignIn}>
        <input
          type='text'
          name='displayName'
          placeholder='name' />
        <button type='submit'>Enter</button>
      </form>
      {error}
    </React.Fragment>
  )
}
