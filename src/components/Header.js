import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ChatHeader = styled.h1`
.parent1{
  margin-left: 40px;
}
.column {
  float: left;
  width: 25%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
  margin: 40px;
}
`;

function Header(props) {
  let path = props.known_path();

  return (
    <React.Fragment>
      <ChatHeader>
        <div class="parent1">
          <div class="row">
            <div class="column">
              Quick Chat
            </div>
            <div class="column">
              <Link to="/signin">Sign In</Link>
            </div>
            <div class="column">
              <Link to="/signup">signup</Link>
            </div>
            <div class="column">
              <Link to={{
                pathname: path,
                state: {
                  chatRoomId: props.mainUser
                }
              }}>Chat Room</Link>

            </div>
          </div>
        </div>
      </ChatHeader>
    </React.Fragment >
  );
}

export default Header;



