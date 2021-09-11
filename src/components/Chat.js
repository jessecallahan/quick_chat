import React from "react";
import PropTypes from "prop-types";

function Chat(props) {
  return (
    <React.Fragment>
      <div className="background-blue">
        <h3>{props.content}</h3>
        <hr />
      </div>
    </React.Fragment>
  );
}

Chat.propTypes = {
  content: PropTypes.string.isRequired,
  user_id: PropTypes.number,
  id: PropTypes.string
};

export default Chat;