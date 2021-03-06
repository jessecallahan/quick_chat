import React from "react";
import { useFirestore } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import firebase from "firebase/app";
import "firebase/auth";


function NewTicketForm(props) {
  const firestore = useFirestore();

  async function addChatToFirestore(event) {
    event.preventDefault();
    const user = firebase.auth().currentUser;

    await firestore.collection(props.pathname).add(
      {
        name: user.displayName,
        content: event.target.content.value,
        user_id: user.uid,
        createdAt: firestore.FieldValue.serverTimestamp(),
      }
    );
    event.target.content.value = "";
  }

  return (
    <React.Fragment>
      <form onSubmit={addChatToFirestore}>
        <div><textarea
          rows="12" cols="50"
          name='content'
          placeholder='Type Chat Here...' />
        </div>
        <div>
          <button type='submit'>Send</button>
        </div>
      </form>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;

