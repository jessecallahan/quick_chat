import ChatForm from './ChatForm'
import ChatList from './ChatList'
import FriendList from './FriendList'
import React from 'react'
import AnnonSignIn from './AnnonSignIn';
import 'firebase/database';
import firebase from "firebase/app";

import { useLocation } from "react-router-dom";

function ChatControl(props) {
  let data = useLocation();


  let topLeftCurrentState = null;
  let linkRender = null;

  console.log(props.currentUser);

  const user = firebase.auth().currentUser;
  console.log(user);
  if (user !== null) {

    topLeftCurrentState = <ChatForm main_id={data.pathname} />
    if (user.uid === props.mainUser) {
      linkRender = "invite people to your grape room: localhost:3000" + data.pathname
    }
  }
  else {
    topLeftCurrentState = <AnnonSignIn main_id={data.pathname} />
  }

  return (
    <div>
      <div className="parent">
        <div className="div1">
          {topLeftCurrentState}
        </div>
        <div className="div2">
          <FriendList main_id={data.pathname} />
        </div>
        <div className="div3">
          <ChatList main_id={data.pathname} />
        </div>
        {linkRender}
      </div>
    </div>
  )

}

export default ChatControl;
