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
        <div className="parent1">
          <div className="row">
            <div className="column">
              Quick Chat
            </div>
            <div className="column">
              <Link to="/signin">Sign In</Link>
            </div>
            <div className="column">
              <Link to="/signup">signup</Link>
            </div>
            <div className="column">
              <Link to={{
                pathname: path
              }}>Chat Room</Link>

            </div>
          </div>
        </div>
      </ChatHeader>
    </React.Fragment >
  );
}

export default Header;



