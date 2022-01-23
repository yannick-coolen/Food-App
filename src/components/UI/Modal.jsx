import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = ({ onCloseCart }) => {
  return <div className={classes.backdrop} onClick={onCloseCart}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalEl = document.getElementById('overlays');

export default function Modal({ children, onCloseCart }) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseCart={onCloseCart} />, portalEl)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalEl)}
    </Fragment>
  );
}
