import React from 'react';
import Chat from './Chat';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import 'firebase/firestore';

function ChatList(props) {

  useFirestoreConnect([
    { collection: props.pathname, orderBy: ['createdAt', 'desc'] }
  ]);

  let path = props.pathname;
  const chats = useSelector(state => state.firestore.ordered[path]);

  if (isLoaded(chats)) {
    return (
      <React.Fragment>
        <hr />
        {chats.map((chat) => {
          return <Chat
            name={chat.name}
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
  pathname: PropTypes.string
}

export default ChatList;