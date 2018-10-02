import React from "react";

import Aux from "../../../hoc/Aux";

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients);
  return (
    <Aux>
      <p>
        A delicious veggie burger constructed with these following ingredients:
      </p>
    </Aux>
  );
};

export default orderSummary;
