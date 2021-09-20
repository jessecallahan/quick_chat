import React, { useState } from 'react';
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function FriendList(props) {
  const firestore = useFirestore();
  const [count, setCount] = useState([]);

  var docRef = firestore.collection(props.main_id).doc("friendsList");
  docRef.get().then((doc) => {
    if (doc.exists) {
      setCount(doc.data().names)
    } else {
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
  main_id: PropTypes.string
}

export default FriendList

