import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import OrderControllers from "../../components/Burger/OrderControllers/OrderControllers";

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = { ingredients: { lettuce: 0, bacon: 0, cheese: 0, meat: 0 } };
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <OrderControllers />
      </Aux>
    );
  }
}

export default BurgerBuilder;
