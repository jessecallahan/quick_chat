import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function RoomTitle(props) {
  const firestore = useFirestore();
  const [people, setPeople] = useState("")

  useEffect(() => {
    function send() {
      const docRef = firestore.collection(props.pathname).doc("friendsList");
      docRef.get().then((doc) => {
        if (doc.exists) {
          setPeople(doc.data().chatRoomName);
          console.log("this thing: " + doc.data().chatRoomName);
        } else {
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
    }

    send();
  }, [firestore, props])






  return (
    <React.Fragment>
      <div>You're invited to {people}'s Chat Room</div>
    </React.Fragment>
  );

}

RoomTitle.propTypes = {
  pathname: PropTypes.string
}

export default RoomTitle

