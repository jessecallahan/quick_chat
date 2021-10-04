import React from 'react';
import firebase from "firebase/app";
import { useFirestore } from 'react-redux-firebase';
import PropTypes from "prop-types";

function Logout(props) {
  const firestore = useFirestore();

  function friendsListSignOut() {

    const user = firebase.auth().currentUser;

    var docRef = firestore.collection(props.pathname).doc("friendsList")
    docRef.get().then(async (doc) => {
      if (doc.exists) {
        const newFriendsList = doc.data().names.filter(
          (friend) =>
            friend !== user.displayName
        )
        await docRef.update({
          names: newFriendsList
        });

      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }

  function signOut() {
    firebase.auth().signOut().then(function () {
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    if (firebase.auth().currentUser) {
      friendsListSignOut();
      signOut();
      props.setCurrentUser(null)
    }
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
  pathname: PropTypes.string,
  setCurrentUser: PropTypes.func
}
export default Logout

