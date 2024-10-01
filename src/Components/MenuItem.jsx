// import React from 'react';
import arrow from '../assets/right-arrow.svg'

function MenuItem({ text, src }) {
  return (
    <div className='menu-item'>
      {src && <img src={src} alt="Icon 1" className="menu-item-icon" />}
      {text}
      <img src={arrow} alt="arrow" className="menu-item-arrow" />
    </div>
  );
}

export default MenuItem;