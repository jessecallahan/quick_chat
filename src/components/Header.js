import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <h1>Quick Chat</h1>
      <ul>
        <li>
          <Link to="/chatroom1">Chat Room</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;
