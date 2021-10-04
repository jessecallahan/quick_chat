import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function FriendList(props) {
  const firestore = useFirestore();
  const [people, setPeople] = useState([])

  useEffect(() => {
    function send() {
      const docRef = firestore.collection(props.pathname).doc("friendsList");
      docRef.onSnapshot((doc) => {
        if (doc.exists) {
          setPeople(doc.data().names);
        } else {
          console.log("No such document!");
        }
      })
    }

    send();
  }, [firestore, props])


  return (
    <React.Fragment>
      <div className="friendsList">
        <h3>Friends In This Chat:</h3>
        {people.map((friend, index) =>
          <div key={index}>{friend}</div>
        )}
      </div>
    </React.Fragment>
  );
}

FriendList.propTypes = {
  pathname: PropTypes.string
}

export default FriendList

