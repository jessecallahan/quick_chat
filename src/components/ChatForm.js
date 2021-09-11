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
        <div><textarea
          rows="12" cols="60"
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

