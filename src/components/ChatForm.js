import React from "react";
import { useFirestore } from 'react-redux-firebase';
import PropTypes from 'prop-types';

function NewTicketForm(props) {
  const firestore = useFirestore();

  function addChatToFirestore(event) {
    event.preventDefault();
    return firestore.collection('chats').add(
      {
        content: event.target.content.value,
        user_id: 1,
        createdAt: firestore.FieldValue.serverTimestamp(),
      }
    );
  }

  return (
    <React.Fragment>
      <form onSubmit={addChatToFirestore}>
        <textarea
          name='content'
          placeholder='Type Chat Here...' />
        <button type='submit'>Send</button>
      </form>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;

