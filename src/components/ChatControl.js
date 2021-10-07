import ChatForm from './ChatForm'
import ChatList from './ChatList'
import FriendList from './FriendList'
import Logout from './Logout'
import React from 'react'
import AnnonSignIn from './AnnonSignIn';
import 'firebase/database';
import firebase from "firebase/app";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import LinkCopy from './LinkCopy'
import RoomTitle from './RoomTitle'
import ChatClear from './ChatClear'

function ChatControl(props) {
  let data = useLocation();
  console.log(data)

  let topLeftCurrentState = null;
  let linkRender = null;
  let friendShow = null;
  let chatListShow = null;

  const user = firebase.auth().currentUser;

  if (user && props.currentUser) {
    topLeftCurrentState = <ChatForm pathname={data.pathname} />
    linkRender = <React.Fragment><div className="wrapper">
      <div className="bottom_right"><Logout setCurrentUser={props.setCurrentUser} pathname={data.pathname} /></div>
    </div></React.Fragment>
    friendShow = <FriendList pathname={data.pathname} />
    chatListShow = <ChatList pathname={data.pathname} />
    if (user.uid === props.mainUser) {
      linkRender = <React.Fragment>
        <LinkCopy pathname={data.pathname} />
        <div className="wrapper">
          <div className="bottom_right"><Logout setCurrentUser={props.setCurrentUser} pathname={data.pathname} />
            <ChatClear pathname={data.pathname} /></div>
        </div>
      </React.Fragment>
    }
  }
  else {

    topLeftCurrentState = <React.Fragment>
      <div className="center"><RoomTitle pathname={data.pathname}></RoomTitle>
        <AnnonSignIn setCurrentUser={props.setCurrentUser} pathname={data.pathname} /></div>
    </React.Fragment>
  }

  return (
    <div className="parent">
      <div className="div1">
        {topLeftCurrentState}
        {friendShow}
      </div>
      <div className="div2">
        {chatListShow}
      </div>
      {linkRender}
    </div>
  )
}

ChatControl.propTypes = {
  setCurrentUser: PropTypes.func,
  mainUser: PropTypes.string,
  currentUser: PropTypes.string
}
export default ChatControl;
