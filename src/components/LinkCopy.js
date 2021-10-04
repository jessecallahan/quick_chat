import React, { useState } from 'react';

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
        {"https://jessecallahan.github.io" + props.pathname}
        <button onClick={() => copyToClipBoard("https://jessecallahan.github.io" + props.pathname)}>
          Click here to copy
        </button>
      </div>
    </React.Fragment>
  )

}


export default LinkCopy;