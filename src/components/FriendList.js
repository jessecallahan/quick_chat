import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function FriendList(props) {
  const firestore = useFirestore();
  const [people, setPeople] = useState([])

  useEffect(() => {
    function send() {
      const docRef = firestore.collection(props.pathname).doc("friendsList");
      docRef.get().then((doc) => {
        if (doc.exists) {
          setPeople(doc.data().names);
          console.log("this: " + doc.data().names);
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
      <div>Friends In This Chat:</div>
      {people.map((friend, index) =>
        <div key={index}>{friend}</div>
      )}

    </React.Fragment>
  );

}

FriendList.propTypes = {
  pathname: PropTypes.string
}

export default FriendList

