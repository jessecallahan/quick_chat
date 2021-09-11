import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ChatHeader = styled.h1`
.column {
  float: left;
  width: 33.33%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
`;

function Header() {
  return (
    <React.Fragment>
      <ChatHeader>
        <div class="row">
          <div class="column">
            Quick Chat
          </div>
          <div class="column">
            <Link to="/signin">Sign In</Link>
          </div>
          <div class="column">
            <Link to="/chatroom1">Chat Room</Link>
          </div>
        </div>
      </ChatHeader>
    </React.Fragment >
  );
}

export default Header;



