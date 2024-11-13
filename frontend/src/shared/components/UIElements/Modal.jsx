import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import './Modal.css';

const ModalOverlay = ({ className, style, headerClass, header, contentClass, children, footer, show, onCancel, onSubmit, footerClass }) => {
    const content = (
        <div className={`modal ${className}`} style={style}>
            <header className={`modal__header ${headerClass}`}>
                <h2>
                    {header}
                </h2>
            </header>
            <form onSubmit={onSubmit ? onSubmit : (e) => e.preventDefault()}>
                <div className={`modal__content ${contentClass}`}>
                    {children}
                </div>
                <footer className={`modal__footer ${footerClass}`}>
                    {footer}
                </footer>
            </form>

        </div>
    )

    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
}

const Modal = ({ className, style, headerClass, header, contentClass, children, footer, show, onCancel, onSubmit, footerClass }) => {
    return (
        <>
            {show && <Backdrop closeDrawer={onCancel} />}
            <CSSTransition
                in={show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames='modal'>
                    <ModalOverlay className={className} style={style} headerClass={headerClass} header={header} contentClass={contentClass} children={children} footer={footer} show={show} onCancel={onCancel} onSubmit={onSubmit} footerClass={footerClass}/>
            </CSSTransition>
        </>
    )
}

export default Modal