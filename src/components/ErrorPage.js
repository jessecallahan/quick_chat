import React from 'react'
import PropTypes from 'prop-types'

function ErrorPage(props) {
  return (
    <div>
      {props.error}
    </div>
  )
}

ErrorPage.propTypes = {
  error: PropTypes.string
}

export default ErrorPage

