import React from "react";

import Aux from "../../../hoc/Aux";

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(
    (igKey, index) => {
      return (
        <li key={index}>
          <span>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      );
    }
  );
  return (
    <Aux>
      <p>
        A delicious veggie burger constructed with these following ingredients:
      </p>
      <ul>{ingredientsSummary}</ul>
      <span>
        <b>Total Price:</b>
        <p>${props.price.toFixed(2)}</p>
      </span>
    </Aux>
  );
};

export default orderSummary;
