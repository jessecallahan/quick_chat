import React from 'react';
import Chat from './Chat';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'

function ChatList(props) {

  useFirestoreConnect([
    { collection: 'chats', orderBy: ['createdAt', 'desc'] }
  ]);

  const chats = useSelector(state => state.firestore.ordered.chats);

  if (isLoaded(chats)) {
    return (
      <React.Fragment>
        <hr />
        {chats.map((chat) => {
          return <Chat
            content={chat.content}
            user_id={chat.user_id}
            id={chat.id}
            key={chat.id} />
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}


ChatList.propTypes = {
};

export default ChatList;