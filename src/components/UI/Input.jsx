import React, { forwardRef } from 'react';

import classes from './Input.module.css';

export default forwardRef(function Input({ label, input }, ref) {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} type='text' {...input} />
    </div>
  );
});
