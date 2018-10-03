import React, { Component } from "react";
import { Row, Col, Grid, Button } from "react-bootstrap";

import OrderController from "./OrderController/OrderController";
import InfoModal from "../../UI/InfoModal";

const controls = [
  { label: "Lettuce", type: "lettuce" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" }
];

class OrderControllers extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return <Grid>
        <Row className="show-grid">
          <InfoModal ingredients={this.props.ingredients} show={this.state.show} onHide={this.handleClose} closeModal={this.handleClose} price={this.props.price} />
          <Col xs={12} md={6}>
            <h3>Total Price</h3>
            <h4>${this.props.price.toFixed(2)}</h4>
            <Button bsStyle="primary" disabled={this.props.price === 0} onClick={this.handleShow}>
              Order Burger
            </Button>
          </Col>
          <Col xs={12} md={6}>
            {controls.map(ctrl => (
              <OrderController
                key={ctrl.label}
                label={ctrl.label}
                disabled={this.props.disabled[ctrl.type]}
                added={() => this.props.addIngredients(ctrl.type)}
                removed={() => this.props.removeIngredients(ctrl.type)}
              />
            ))}
          </Col>
        </Row>
      </Grid>;
  }
}

export default OrderControllers;
