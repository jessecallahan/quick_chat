import React, { useState } from 'react';
import firebase from "firebase/app";
// import { Redirect } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useFirestore } from 'react-redux-firebase';

function Logout(props) {
  const firestore = useFirestore();

  // function addFriendsListToFirestore(name, id) {

  //   var friendsListRef = firestore.collection(props.known_path(id)).doc("friendsList");
  //   friendsListRef.update({
  //     names: firebase.firestore.FieldValue.arrayUnion(name)
  //   });

  //   console.log("friend setter triggered")

  // }
  // function doSignIn(event) {
  //   event.preventDefault();

  //   const email = event.target.signinEmail.value;
  //   const password = event.target.signinPassword.value;

  //   firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
  //     props.mainUserSetter(firebase.auth().currentUser.uid)
  //     addFriendsListToFirestore(firebase.auth().currentUser.displayName, firebase.auth().currentUser.uid)
  //     console.log("Successfully signed in!");
  //   }).catch(function (error) {
  //     console.log(error.message);
  //   });


  // }

  function doSignOut(e) {
    e.preventDefault();
    props.setCurrentUser(null)
    const user = firebase.auth().currentUser;
    console.log(user.displayName)
    var friendsListRef = firestore.collection(props.pathname).doc("friendsList");

    var docRef = firestore.collection(props.pathname).doc("friendsList")
    docRef.get().then((doc) => {
      if (doc.exists) {

        const newFriendsList = doc.data().names.filter(
          friend => friend !== user.displayName
        )

        docRef.update({
          names: newFriendsList
        });

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });


    firebase.auth().signOut().then(function () {
      console.log("Successfully signed out!");


    }).catch(function (error) {
      console.log(error.message);
    });

  }

  // if (signin === false) {
  return (
    <React.Fragment>

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
export default Logout

