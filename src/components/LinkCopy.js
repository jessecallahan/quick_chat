import React, { useState } from 'react';

function LinkCopy(props) {
  const [copySuccess, setCopySuccess] = useState('');
  const [thing, setThing] = useState('')

  // your function to copy here

  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  // let thing = "localhost:3000" + props.main_id;
  console.log(props.main_id)
  return (
    <React.Fragment>
      <div className="bottom_left">
        <p>{"localhost:3000" + props.main_id}</p>
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