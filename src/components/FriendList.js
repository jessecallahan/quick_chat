import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import firebase from "firebase/app";
import { useFirestore } from 'react-redux-firebase';

function FriendList(props) {
  const firestore = useFirestore();
  const [count, setCount] = useState([]);

  var docRef = firestore.collection(props.main_id).doc("friendsList");
  docRef.get().then((doc) => {
    if (doc.exists) {
      setCount(doc.data().names)
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });

  return (
    <React.Fragment>
      <div>Friends In This Chat:</div>
      {count.map((friend) =>
        <div>{friend}</div>
      )}

    </React.Fragment>
  );

}

FriendList.propTypes = {

}

export default FriendList

