import React from 'react'
import firebase from "firebase/app";


export default function AnnonSignIn(props) {

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
    props.annonSetter(displayName)

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
