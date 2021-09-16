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
  let linkRender = null;

  if (props.currentUser != null) {
    topLeftCurrentState = <ChatForm main_id={data.pathname} />
  }
  else {
    topLeftCurrentState = <AnnonSignIn main_id={data.pathname} friendsListHandler={props.friendsListHandler} annonSetter={props.annonSetter} />
  }
  if (props.currentUser === props.mainUser) {
    linkRender = "invite people to your grape room: localhost:3000" + data.pathname
  }
  console.log(props)
  return (
    <div>
      <div class="parent">
        <div class="div1">
          {topLeftCurrentState}
        </div>
        <div class="div2">
          <FriendList main_id={data.pathname} />
        </div>
        <div class="div3">
          <ChatList main_id={data.pathname} />
        </div>
        {linkRender}
      </div>
    </div>
  )

}

export default ChatControl;
