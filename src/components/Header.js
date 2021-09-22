import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import PropTypes from "prop-types";
import firebase from "firebase/app";
import title from "../assets/title.jpg"
import grape from "../assets/grape.jpg"
import orange from "../assets/orange.jpg"
import lime from "../assets/lime.jpg"
import signup from "../assets/signup.jpg"
import login from "../assets/login.jpg"

import "firebase/auth";



function Header(props) {
  let path = props.known_path();
  let user = firebase.auth().currentUser;

  if (firebase.auth().currentUser && props.currentUser != null) {
    if (props.mainUser === user.uid) {
      return (
        <React.Fragment>
          <div className="header">
            <div className="row">
              <div className="column">
                <Link to="/">
                  <img src={title} className="title_photo" alt='title'></img>
                </Link>
              </div>
              <div className="column">
                <Link to={{
                  pathname: path
                }}>
                  <img src={grape} className="photo" alt='title'></img>
                </Link>
              </div>
              <div className="column">
                <Link>
                  <img src={orange} className="photo" alt='title'></img>
                </Link>
              </div>
              <div className="column">
                <Link>
                  <img src={lime} className="photo" alt='title'></img>
                </Link>
              </div>
            </div>
          </div>

        </React.Fragment >
      )

    } else {

      return (
        <React.Fragment>

          <div className="parent1">
            <div className="row">
              <div className="column">
                <Link to="/">
                  <img src={title} className="title_photo" alt='title'></img>
                </Link>
              </div>

            </div>
          </div>


        </React.Fragment >
      );
    }
  } else {

    return (
      <React.Fragment>

        <div className="parent1">
          <div className="row">
            <div className="column">
              <Link to="/">
                <img src={title} className="title_photo" alt='title'></img>
              </Link>
            </div>
          </div>
        </div>

      </React.Fragment >
    );
  }
}

Header.propTypes = {
  known_path: PropTypes.func,
  mainUser: PropTypes.string
};

export default Header;



