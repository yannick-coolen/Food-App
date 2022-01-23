import React from 'react';

import MealItemForm from './MealItemForm';

import classes from './MealItem.module.css';

export default function MealItem({ name, description, price, id }) {
  const priceOfProduct = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceOfProduct}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
}
