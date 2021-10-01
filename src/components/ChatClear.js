import React from 'react'
import PropTypes from 'prop-types'
import 'firebase/database';
import firebase from "firebase/app";
import { useFirestore } from 'react-redux-firebase';

function ChatClear(props) {
  const firestore = useFirestore();

  function deleteCollection(path) {
    firestore.collection(path).get().then(querySnapshot => {
      querySnapshot.docs.forEach(snapshot => {
        // console.log("htis: " + JSON.stringify(snapshot.ref.id))
        if (snapshot.id !== "friendsList") {
          snapshot.ref.delete();
          // deleteFriendsList()
        }
      })
    })
    deleteFriendsList()
  }

  function deleteFriendsList() {
    let friendsListRef = firestore.collection(props.pathname).doc("friendsList");

    friendsListRef.update({
      names: [firebase.auth().currentUser.displayName]
    });
  }





  return (
    <div>
      {/* <button onClick={() => deleteCollection(props.pathname)}>
        Click here to clear
      </button> */}
      <button
        className="delete button"
        onClick={() => {
          const confirmBox = window.confirm(
            "Do you really want to delete this Crumb?"
          )
          if (confirmBox === true) {
            deleteCollection(props.pathname)
          }
        }}>
        Click to Clear
      </button>
    </div>
  )
}

ChatClear.propTypes = {
  pathname: PropTypes.string
}

export default ChatClear

