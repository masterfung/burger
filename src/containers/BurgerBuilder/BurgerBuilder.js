import React, { Component } from "react";
import { css } from "react-emotion";
import { ClipLoader } from "react-spinners";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import OrderControllers from "../../components/Burger/OrderControllers/OrderControllers";
import axios from "../../axios-orders";

const PRICES = {
  lettuce: 0.5,
  bacon: 1.2,
  cheese: 0.6,
  meat: 2.9
};

const override = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: red;
`;

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: null,
      totalPrice: 0,
      loadingSpinner: false,
      show: false
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

  purchaseContinueHandler = () => {
    this.setState({ loadingSpinner: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Johnny Hung",
        address: {
          street: "80 Orwen Hatch St",
          street2: "Apartment 333",
          city: "San Francisco",
          state: "CA",
          zip: "94107"
        },
        email: "reliable@gmail.com"
      },
      deliveryMethod: "standard"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        console.log(response, "LOADING STATE SHOWS!");
        this.setState({ loadingSpinner: false, show: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loadingSpinner: false, show: false });
      });
  };

  handleModalClose = () => {
    this.setState({ show: false });
  };

  handleModalShow = () => {
    this.setState({ show: true });
  };

  componentDidMount() {
    this.setState({ loadingSpinner: true });
    axios.get("/ingredients.json").then(res => {
			let prices = 0;
			for (let key in res.data) {
				if (res.data[key]>0) {
					prices += res.data[key] * PRICES[key];
				}
			}
      this.setState({
        ingredients: res.data,
				loadingSpinner: false,
				totalPrice: prices
      });
    });
  }

  render() {
    let disabledButtons = {
      ...this.state.ingredients
    };

    for (let key in disabledButtons) {
      disabledButtons[key] = disabledButtons[key] <= 0;
    }

    let burger = (
      <ClipLoader
        className={override}
        sizeUnit={"px"}
        size={100}
        color={"#123abc"}
        loading={this.state.loadingSpinner}
      />
    );

    if (this.state.ingredients) {
      burger = (
        <div>
          <Burger ingredients={this.state.ingredients} />
          <OrderControllers
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
            disabled={disabledButtons}
            closeModal={this.handleModalClose}
            handleModalShow={this.handleModalShow}
            show={this.state.show}
            addIngredients={this.addIngredientHandler}
            removeIngredients={this.removeIngredientHandler}
            purchaseContinue={this.purchaseContinueHandler}
          />
        </div>
      );
    }
    return <Aux>{burger}</Aux>;
  }
}

export default BurgerBuilder;
