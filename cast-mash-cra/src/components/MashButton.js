import React from 'react'
import './MashButton.css'

function MashButton({ handleClick }) {
  return (
    <div className="mash-button-container">
      <button onClick={ handleClick }>MASH</button>
    </div>
  );
};

export default MashButton;