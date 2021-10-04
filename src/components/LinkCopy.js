import React, { useState } from 'react';

function LinkCopy(props) {
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  return (
    <React.Fragment>
      <div className="bottom_left">
        {"localhost:3000" + props.main_id}
        <button onClick={() => copyToClipBoard("localhost:3000" + props.main_id)}>
          Click here to copy
        </button>
        {copySuccess}
      </div>
    </React.Fragment>
  )

}
export default LinkCopy;