import '../chat.css';
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import FriendList from './FriendList'
import React from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { withFirestore, isLoaded } from 'react-redux-firebase';


class ChatControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }




  render() {
    return (
      <div>
        <div class="parent">
          <div class="div1">
            <ChatForm />
          </div>
          <div class="div2">
            <FriendList />
          </div>
          <div class="div3">
            <ChatList />
          </div>

        </div>
      </div>
    )
  }
}

ChatControl.propTypes = {
};

const mapStateToProps = state => {

  return {
    state: state
  }
}

ChatControl = connect(mapStateToProps)(ChatControl);

export default withFirestore(ChatControl);
