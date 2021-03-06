import React from 'react';
import PropTypes from 'prop-types'

function LinkCopy(props) {
  // const [copySuccess, setCopySuccess] = useState('');

  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      console.log('Copied!');
    } catch (err) {
      console.log('Failed to copy!');
    }
  };

  return (
    <React.Fragment>
      <div className="bottom_left">
        {"https://jessecallahan.github.io/quick_chat/#" + props.pathname}
        <button onClick={() => copyToClipBoard("https://jessecallahan.github.io/quick_chat/#" + props.pathname)}>
          Click here to copy
        </button>
      </div>
    </React.Fragment>
  )

}

LinkCopy.propTypes = {
  pathname: PropTypes.string
}

export default LinkCopy;