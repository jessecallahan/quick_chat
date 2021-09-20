import React from 'react';
import firebase from "firebase/app";
// import { Redirect } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useFirestore } from 'react-redux-firebase';
import PropTypes from "prop-types";

function Logout(props) {
  const firestore = useFirestore();

  function doSignOut(e) {
    e.preventDefault();
    props.setCurrentUser(null)
    const user = firebase.auth().currentUser;
    console.log(user.displayName)

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

Logout.propTypes = {
  main_id: PropTypes.string,
  setCurrentUser: PropTypes.func
}
export default Logout

