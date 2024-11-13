import React from 'react'
import ReactDOM from 'react-dom'

import './Backdrop.css'

const Backdrop = ({ closeDrawer }) => {
  return ReactDOM.createPortal(
    <div className='backdrop' onClick={closeDrawer}></div>, document.getElementById('backdrop-hook')
  );
};

export default Backdrop