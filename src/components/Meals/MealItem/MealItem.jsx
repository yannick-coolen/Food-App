import React, { useContext } from 'react';

import MealItemForm from './MealItemForm';

import CartContext from '../../../store/cart.context';

import classes from './MealItem.module.css';

export default function MealItem({ name, description, price, id }) {
  const cartCtx = useContext(CartContext);
  const priceOfProduct = `$${price.toFixed(2)}`;

  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceOfProduct}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
}
