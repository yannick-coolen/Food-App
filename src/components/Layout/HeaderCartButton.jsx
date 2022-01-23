import React from 'react';

import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';

export default function HeaderCartButton({ onClick }) {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}
