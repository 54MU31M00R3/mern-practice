import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';


const SideDrawer = ({ children, show, close }) => {
    const content = (
        <CSSTransition
            in={show}
            timeout={200}
            classNames='slide-in-left' 
            ountOnEnter
            unmountOnExit
        >
            <aside className='side-drawer' onClick={close}>{children}</aside>
        </CSSTransition>
    );

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}

export default SideDrawer