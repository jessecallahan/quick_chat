import React from 'react'
import PropTypes from 'prop-types'


function FriendList(props) {
  return (
    <React.Fragment>
      <div>People On This Chat:</div>
      {props.friendsList.map((friend) => {
        return <div>{friend}</div>
      })}
    </React.Fragment>
  );

}

FriendList.propTypes = {

}

export default FriendList

