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
    if (firebase.auth().currentUser) {
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
    }

    firebase.auth().signOut().then(function () {
      console.log("Successfully signed out!");
    }).catch(function (error) {
      console.log(error.message);
    });

  }

  return (
    <React.Fragment>
      <div>
        <button onClick={doSignOut}>Sign out</button>
      </div>
    </React.Fragment>
  );

}

Logout.propTypes = {
  main_id: PropTypes.string,
  setCurrentUser: PropTypes.func
}
export default Logout

