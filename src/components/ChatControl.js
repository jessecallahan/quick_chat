import ChatForm from './ChatForm'
import ChatList from './ChatList'
import FriendList from './FriendList'
import React from 'react'
import AnnonSignIn from './AnnonSignIn';
import 'firebase/database';


import { useLocation } from "react-router-dom";

function ChatControl(props) {
  let data = useLocation();
  console.log(data);

  let topLeftCurrentState = null;


  if (props.currentUser != null) {
    topLeftCurrentState = <ChatForm main_id={data.pathname} />
  }
  else {
    topLeftCurrentState = <AnnonSignIn friendsListHandler={props.friendsListHandler} annonSetter={props.annonSetter} />
  }
  console.log(props)
  return (
    <div>
      <div class="parent">
        <div class="div1">
          {topLeftCurrentState}
        </div>
        <div class="div2">
          <FriendList friendsList={props.friendsList} />
        </div>
        <div class="div3">
          <ChatList main_id={data.pathname} />
        </div>

      </div>
    </div>
  )

}

export default ChatControl;
