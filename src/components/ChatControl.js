import '../chat.css';
import ChatForm from './ChatForm'
import ChatList from './ChatList'
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
        <div class="flex-body">
          <div class="flex-column">
            <div >
              <ChatForm />
            </div>
            <div style={{ background: "#0980cc" }}>
              friends
            </div>
          </div>
          <div class="flex-row">
            <div >
              <ChatList />
            </div>
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
