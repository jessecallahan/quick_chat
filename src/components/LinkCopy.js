import React, { useState } from 'react';

function LinkCopy(props) {
  const [copySuccess, setCopySuccess] = useState('');

  // your function to copy here

  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  let thing = "localhost:3000" + props.main_id;
  return (
    <React.Fragment>
      <div>
        <textarea rows="1" cols="60">{thing}</textarea>
        <button onClick={() => copyToClipBoard("localhost:3000" + props.main_id)}>
          Click here to copy
        </button>
      </div>
      <div className="greenText">
        {copySuccess}
      </div>
    </React.Fragment>

  )
}
export default LinkCopy;