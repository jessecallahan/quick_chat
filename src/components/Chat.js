import React from "react";
import PropTypes from "prop-types";

function Chat(props) {

  return (
    <React.Fragment>
      <div className="background-blue">
        <h3>{props.name} = {props.content}</h3>
        <hr />
      </div>
    </React.Fragment>
  );
}

Chat.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string.isRequired,
  user_id: PropTypes.string,
  id: PropTypes.string
};

export default Chat;