import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import OrderControllers from "../../components/Burger/OrderControllers/OrderControllers";

const PRICES = {
  lettuce: 0.5,
  bacon: 1.2,
  cheese: 0.6,
  meat: 2.9
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: { lettuce: 0, bacon: 0, cheese: 0, meat: 0 },
      totalPrice: 0
    };
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    let priceAddition = PRICES[type];

    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients
    });
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount === 0) {
      return;
    } else {
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      let priceDeduction = PRICES[type];

      const oldPrice = this.state.totalPrice;
      const updatedPrice = oldPrice - priceDeduction;

      this.setState({
        totalPrice: updatedPrice,
        ingredients: updatedIngredients
      });
    }
  };

  render() {
    let disabledButtons = {
      ...this.state.ingredients
    };

    for (let key in disabledButtons) {
      disabledButtons[key] = disabledButtons[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <OrderControllers
          price={this.state.totalPrice}
          disabled={disabledButtons}
          addIngredients={this.addIngredientHandler}
          removeIngredients={this.removeIngredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
