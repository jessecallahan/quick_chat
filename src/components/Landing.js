import React from 'react'
import title from "../assets/title.jpg"
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Landing(props) {
  return (
    <React.Fragment>
      <div className="center">
        <h1>
          Welcome to quick chat
        </h1>
        <img src={title} alt='title'></img>
        <h2>
          an application where you can chat quickly
        </h2>
        <h4>
          Already have an account?&nbsp;
          <Link onClick={() => props.setHome(false)} to="/signin">Log In Here</Link>
          &nbsp;--
          Need an account?&nbsp;
          <Link onClick={() => props.setHome(false)} to="/signup">Sign Up Here</Link>
        </h4>
        <p>
          <i>
            for those interested the <a href="https://github.com/jessecallahan/quick_chat">github</a>
          </i>
        </p>
      </div>
    </React.Fragment>
  )
}

Landing.propTypes = {
  setHome: PropTypes.func
}

export default Landing;