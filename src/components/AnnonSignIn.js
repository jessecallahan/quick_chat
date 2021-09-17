import React from 'react'
import firebase from "firebase/app";
import { useFirestore } from 'react-redux-firebase';


export default function AnnonSignIn(props) {
  const firestore = useFirestore();

  function friendPart(name) {
    var friendsListRef = firestore.collection(props.main_id).doc("friendsList");
    friendsListRef.update({
      names: firebase.firestore.FieldValue.arrayUnion(name)
    });
  }

  function annonSignIn(event) {
    event.preventDefault();
    const displayName = event.target.displayName.value;

    firebase.auth().signInAnonymously()
      .then((result) => {
        return result.user.updateProfile({
          displayName: displayName
        })
      })
      .catch((error) => {
        // var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      });

    friendPart(displayName);

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
    </React.Fragment>
  )
}
