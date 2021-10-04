import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import firebase from "firebase/app";
import title from "../assets/title.jpg"
import grape from "../assets/grape.jpg"
import orange from "../assets/orange.jpg"
import lime from "../assets/lime.jpg"
import "firebase/auth";

function Header(props) {
  let grapePath = props.known_pathGrape();
  let orangePath = props.known_pathOrange();
  let limePath = props.known_pathLime();
  let user = firebase.auth().currentUser;

  if (props.home) {
    return (
      <React.Fragment> <div className="header">
        <div className="row">
          <div className="column"></div></div></div><br></br><br></br>
      </React.Fragment>);
  } else {

    if (firebase.auth().currentUser && props.currentUser) {
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
                <div className="column" >
                  <Link to={{
                    pathname: grapePath
                  }}
                  >
                    <img src={grape} className="photo" alt='title'></img>
                  </Link>
                </div>
                <div className="column" >
                  <Link to={{
                    pathname: orangePath
                  }}>
                    <img src={orange} className="photo" alt='title'></img>
                  </Link>
                </div>
                <div className="column" >
                  <Link to={{
                    pathname: limePath
                  }}>
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
                    <img src={title} onClick={() => props.setHome(true)} className="title_photo" alt='title'></img>
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
                  <img src={title} onClick={() => props.setHome(true)} className="title_photo" alt='title'></img>
                </Link>
              </div>
            </div>
          </div>
        </React.Fragment >
      );
    }
  }
}

Header.propTypes = {
  known_pathGrape: PropTypes.func,
  known_pathOrange: PropTypes.func,
  known_pathLime: PropTypes.func,
  mainUser: PropTypes.string,
  home: PropTypes.bool,
  setHome: PropTypes.func,
  currentUser: PropTypes.string
};

export default Header;



