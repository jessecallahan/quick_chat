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

function ChatControl(props) {
  let data = useLocation();

  let topLeftCurrentState = null;
  let linkRender = null;
  let friendShow = null;

  const user = firebase.auth().currentUser;

  if (user && props.currentUser) {
    topLeftCurrentState = <ChatForm main_id={data.pathname} />
    linkRender = <React.Fragment><div className="wrapper">
      <div className="bottom_right"><Logout setCurrentUser={props.setCurrentUser} pathname={data.pathname} /></div>
    </div></React.Fragment>
    friendShow = <FriendList pathname={data.pathname} />
    if (user.uid === props.mainUser) {
      linkRender = <React.Fragment>
        <div >
          <div><LinkCopy main_id={data.pathname} /></div>
        </div>
        <div className="wrapper">
          <div className="bottom_right"><Logout setCurrentUser={props.setCurrentUser} pathname={data.pathname} /></div>
        </div>
      </React.Fragment>
    }
  }
  else {

    topLeftCurrentState = <React.Fragment>
      <div><RoomTitle pathname={data.pathname}></RoomTitle></div>
      <div><AnnonSignIn setCurrentUser={props.setCurrentUser} main_id={data.pathname} /></div>
    </React.Fragment>
  }

  return (
    <div>
      <div className="parent">
        <div className="div1">
          {topLeftCurrentState}
        </div>
        <div className="div2">
          {friendShow}
        </div>
        <div className="div3">
          <ChatList pathname={data.pathname} />
        </div>
        {linkRender}
      </div>
    </div>
  )

}

ChatControl.propTypes = {
  setCurrentUser: PropTypes.func,
  mainUser: PropTypes.string,
  currentUser: PropTypes.string
}
export default ChatControl;
